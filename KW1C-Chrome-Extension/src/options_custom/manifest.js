this.manifest =
{
    "name": "KW1C Password Reminder",
    "icon": "icon.png",
    "settings": 
	[
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "username",
            "type": "text",
            "label": i18n.get("username"),
            "text": "username"
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "password",
            "type": "text",
            "label": i18n.get("password"),
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
