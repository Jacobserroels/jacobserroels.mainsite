const functions = require("firebase-functions");
const Dropbox = require("dropbox").Dropbox;

exports.dbxPhotosJsonObj = functions.https.onCall((data) => {
  console.log(data);
  const jsonCatch = [];
  const accessToken = "sl.BHLDnKI5w_uIXJTr-MDn35cAK4i9aBPYoTgVVraLdHM7ph_Ex3ZRP_yR4Ios2GPsXd0_6rYzTgKlASveERP0Crac6ecBL9AeXtRjaZFPU876alK58vuzRCEXs6bi-n5Pdj3f4DeY";
  const dbxGetFile = new Dropbox({accessToken});
  const itemLink = data.item;
  dbxGetFile.filesListFolder({path: itemLink})
      .then(function(response) {
        const forEachDBX = new Promise((resolve, reject) => {
          response.result.entries.forEach((item, index, array) => {
            const dbxGetIMG = new Dropbox({accessToken});
            dbxGetIMG.filesGetTemporaryLink({"path": item.path_lower})
                .then(function(IMGResponse) {
                  jsonCatch.push( {"link": IMGResponse.result.link});
                  if (index === array.length -1) resolve();
                }).catch(function(error) {
                  console.log(error);
                });
          });
        });
        forEachDBX.then(function(resolve) {
          setTimeout(() => {
            console.log('sending data to front end with json data: ' + jsonCatch)
            return {data: jsonCatch};
          }, 1500);
        });
        forEachDBX.catch(function(error) {
          console.log(error);
        });
      }).catch(function(error) {
        console.log(error);
      });
});
