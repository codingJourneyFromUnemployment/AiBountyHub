
// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

async function imageUploadHandler (imagePath) {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  }

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.log(error)
  }
}