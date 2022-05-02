//Generating A Key

function dbxApiKey(){
    var authParams = new URLSearchParams({
    code: 'sl.BG0rdfuGQSmNV_IkQNkadxbVtiYgwTxT2eEROfm4IRoqOewsE7DfMt37ooNNm76LqC80CCYnatck16xvhNZDcVyntePxDO65ppe2ftGS4PZsiC1Ed1kqTJ32XHRWCXY42SKIQWTIAt2F',
    grant_type: 'authorization_code',
    client_id: '83mzx3lpqirlxa4',
    client_secret: 'y9ajpgevkwp30nu'
    });

    fetch('https://api.dropboxapi.com/oauth2/token', {
        method: 'POST',
        body: authParams
    })
    .then(res => res.json())
    .then(data => console.log('access data =>', data))
    .catch(err => console.log('access err =>',err));

}
// Getting A File
function dbxFileCall() {var headers = {
    'Authorization': "Bearer sl.BG31IAc-35_ner2zcuNfgf4OCzXz8rhqrwuhd3k-nSQGDwGhFVHZ6zAhbe63leiioYK89QFjqyXXqS6d3l9Ak0op-jfj7oZ5Pi5U83ByYoeXyE_273Q8JKvfWSodGNqrOtB_gnqN",
    'Content-Type': "application/json",
    'User-Agent': 'api-explorer-client'
    };
    var params = JSON.stringify({"path":""});

    var items = fetch('https://api.dropboxapi.com/2/files/list_folder', {
        method: 'POST',
        body: params,
        headers: headers,
    }).then(response => response.json())
    .then(data => console.log(data));
}
