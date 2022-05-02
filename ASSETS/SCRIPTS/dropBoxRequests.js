var auth = new XMLHttpRequest
auth.open('GET', "https://www.dropbox.com/oauth2/authorize?client_id=<83mzx3lpqirlxa4>&response_type=code", false)
auth.send()

console.log(auth)