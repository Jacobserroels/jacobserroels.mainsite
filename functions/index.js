const { response } = require("express");
const functions = require("firebase-functions");
const Dropbox = require("dropbox").Dropbox;

exports.dbxPhotosJsonObj = functions.https.onCall((data) => {
  return new Promise((resolve, reject) => {
    dbxGetToken().then((accessToken) => {  
    console.log(data);
    const jsonCatch = [];
    const dbxGetFile = new Dropbox({accessToken});
    const itemLink = data.item;
    dbxGetFile.filesListFolder({path: itemLink})
        .then(function(response) {
          response.result.entries.forEach((item, index, array) => {
            const dbxGetIMG = new Dropbox({accessToken});
            dbxGetIMG.filesGetTemporaryLink({"path": item.path_lower})
                .then(function(IMGResponse) {
                  jsonCatch.push( {"link": IMGResponse.result.link});
                  if (index === array.length -1) {
                    setTimeout(()=> {
                      resolve(jsonCatch);
                    }, 150);
                  }
                }).catch(function(reject) {
                  console.log(reject);
                });
          });
        });
      });
  }).catch(function(error) {
    console.log(error);
  });
});

exports.dbxGetToken = functions.https.onRequest((req,res) => {
  return new Promise((resolve, reject) => {
  const thing = fetch('https://www.dropbox.com/oauth2/authorize?client_id=w1ruaomycon6aa1&response_type=code')
  .then((response) => {
  console.log(response)
  })
  })
})
