const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    email: {
      // Trim and lowercase
      type: String,
      required: true,
      index: { unique: true },
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

async function generateHash(password) {
  const COST = 12;
  return bcrypt.hash(password, COST);
}

UserSchema.pre("save", function preSave(next) {
  // here is an example of hook
  // we use it to update the data before the saving
  const user = this;

  // Only create a new password hash if the field was updated
  if (user.isModified("password")) {
    return generateHash(user.password)
      // we actually store the hash of the password
      // so the the data with passwords wouldn't be compromised
      .then((hash) => {
        user.password = hash;
        return next();
      })
      .catch((error) => {
        return next(error);
      });
  }
  return next();
});

UserSchema.methods.comparePassword = async function comparePassword(
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
  // we use the compare function to check
  // if the password's really the same as the entered one
};

module.exports = mongoose.model("User", UserSchema);
