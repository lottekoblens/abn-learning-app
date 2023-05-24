const vragen = [
    {
        "id": 1,
        "question": "Hoe heet je?",
        "buttons": [
            {
                "text": "Je mag me alles noemen",
                "isAnswer": true,
                "value": 30
            },
        ],
        "inputType": "open"
    },
    {
        "id": 2,
        "question": "Hoeveel verdien je per maand?",
        "inputType": "slider"
    },
    {
        "id": 3,
        "question": "Weet je wat een hypotheek is?",
        "buttons": [
            {
                "text": "Ja",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Nee"
            }
        ]
    }
]

export {
    vragen
}