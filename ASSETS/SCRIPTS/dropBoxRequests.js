var data = JSON.stringify({
    "oauth1_token": "qievr8hamyg6ndck",
    "oauth1_token_secret": "qomoftv0472git7"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.dropboxapi.com/2/auth/token/from_oauth1");
  xhr.setRequestHeader("Authorization", "Basic ODNtengzbHBxaXJseGE0Onk5YWpwZ2V2a3dwMzBudQ==");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "jacobserroels.com");
  
  xhr.send(data);