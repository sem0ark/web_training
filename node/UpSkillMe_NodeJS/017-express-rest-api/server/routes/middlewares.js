const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});


module.exports.upload = upload;

// Used after the upload middleware
module.exports.handleAvatar = (avatars) => 
  async (req, res, next) =>{
    if(!req.file) return next();
    if(req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg') {
      return next(new Error('File format is not supported'));
    }
    req.file.storedFilename = await avatars.store(req.file.buffer);
    // very common pattern, just add the data to the request object
    return next();
};