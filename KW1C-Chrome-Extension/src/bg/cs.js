chrome.runtime.sendMessage({method: "getLocalStorage", key: "store.settings.username"}, function(response)
{
	if (response.data == "undefined")
		return;
		
	var username = (response.data !== undefined) ? response.data : "";
	try{
		document.getElementById('username').value = username.substr(1, username.length - 2);
	}
	catch(e){}
});

chrome.runtime.sendMessage({method: "getLocalStorage", key: "store.settings.password"}, function(response)
{
	if (response.data == "undefined")
		return;
		
	var body = document.body;
	var textContent = body.textContent || body.innerText;

	//! If the user's account information is incorrect...
	if (-1 != textContent.indexOf("Je kunt niet worden aangemeld bij Koning Willem I College. Controleer je gebruikersnaam en wachtwoord en probeer het opnieuw."))
	{
		alert("U bent niet automatisch ingelogd omdat uw account info niet correct blijkt te zijn.");
		return;
	}
	
	var password = (response.data !== undefined) ? response.data : "";
	try{
		document.getElementById('password').value = password.substr(1, password.length - 2);
		document.getElementById('Submit1').click();	
	}
	catch(e){}
	
});
