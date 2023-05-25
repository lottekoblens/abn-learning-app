const vragen = [
    {
        "id": 1,
        "title": "Welkom",
        "question": "Tijdens het zoeken naar een huis zul je vragen moeten beantwoorden. Met deze vragen kun je coins verdienen. Hoe meer coins je hebt, hoe hoger je op het scorebord komt te staan!",
        "buttons": [
            {
                "text": "Oke, duidelijk!",
            },
        ],
        "images": "/quiz.jpg"
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
        ],
        "inputType": "open",
    }
]

export {
    vragen
}