this.manifest =
{
    "name": "KW1C Chrome Extension",
    "icon": "icon.png",
    "settings": 
	[
        {
            "tab": "Information",
            "group": "Login",
            "name": "username",
            "type": "text",
            "label": "Username",
            "text": "username"
        },
        {
            "tab": "Information",
            "group": "Login",
            "name": "password",
            "type": "text",
            "label": "Password",
            "text": "password",
            "masked": true
        },
    ],
    "alignment":
	[
        [
            "username",
            "password"
        ]
    ]
};
