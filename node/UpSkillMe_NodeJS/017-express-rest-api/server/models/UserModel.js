const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 12;

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: { unique: true },
      validate: {
        validator: emailValidator.validate,
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      minLength: 8,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function preSave(next) {
  // Here we use the presafe hook to hash our passwords
  // the function is later passed to the inner structure of mongoose,
  // so we need to use the standard JS syntax
  const user = this; // we can use class notation here

  if (!user.isModified("password")) return next();
  // by adding the checker we can run the encryption only just after initialization or update
  try {
    const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

// now we need to add the comparison function,
//    but because it is CPU computationally heavy,
//    we would use the asynchronous one
// Mongoose allows us to add the instance methods

UserSchema.methods.comparePassword = async function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model("User", UserSchema);
