const functions = require("firebase-functions");

var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'sl.BHKpSPm5TYrCptq8Cdb3NpLYPm0ycwj5KSgVHlxcD3S_-2pPrdUiZsFGHMWMPrUeA04di7bg1PvFWHlPFOF7M6kOiWHR9We1PbVxKgGX76o97L_wnNO6qjD7lLobbXy_-nAKpZA' });

dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response.entries);
    })
    .catch(function(error) {
      console.error(error);
    });
