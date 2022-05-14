require("dotenv").config({path: __dirname + "/.env"});
const functions = require("firebase-functions");
const cloudinary = require("cloudinary").v2;

exports.cloudinaryGetPhotoJson = functions.https.onCall((data) => {
  return new Promise((resolve, reject) =>{
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    cloudinary.search
        .expression(
            `folder:jacobserroels.com/* AND tags=${JSON.stringify(data.item)}`
        ).sort_by("public_id", "desc").max_results(100)
        .execute().then((response)=>{
          const jsonImgList = response.resources;
          resolve(jsonImgList);
        }).catch((error)=>{
          console.log(error);
        });
  }).catch((reject)=>{
    console.log(reject);
  });
});
