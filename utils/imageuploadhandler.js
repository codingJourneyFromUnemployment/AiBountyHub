export default async function imageUploadhandler (file) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
      );
    }, 3500);
  });
}