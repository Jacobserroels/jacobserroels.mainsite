

var fetch = require('node-fetch')


var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'sl.BGw6gGkYaIMFi-U9eJx9L-kEZFyIfGF9yYmyBAIRRtY0h-ljSEn8xvhGFmH0lDT0n5F4jH2ZXktXxU5RRRdKF0Xw5UzwV8SZe_WecOvL4fnV-laxyQXhsSFkO1cc0vIdsclJIZE' });
dbx.filesListFolder({path: 'Dropbox/01-JACOBSERROELS.COM-PROJECT-IMAGES'})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });



/*const handler = async function () {
  try {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }*/
