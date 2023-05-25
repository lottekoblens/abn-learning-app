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
        "title": "Welkom",
        "question": "Bij het gebruik van deze applicatie zul je het proces doorlopen van het huren of kopen van een huis. Dit kun je zien als een soort van simulatie. Het lijkt dus alsof het allemaal echt is wat je moet doen, maar dat is het niet. Wees dus niet bang om het proces te doorlopen en in te vullen wat jij denkt dat goed is.",
        "buttons": [
            {
                "text": "Oke, duidelijk!",
            },
        ],
        "inputType": "slider"
    },
    {
        "id": 3,
        "title": "Welkom",
        "question": "Laten we de zoektocht naar je huis beginnen! Ben je op zoek naar een huurhuis of een koophuis?",
        "buttons": [
            {
                "text": "Huurhuis",
            },
            {
                "text": "Koophuis"
            }
        ],
        "inputType": "open",
    }, 
    {
        "id": 4,
        "title": "Inkomen",
        "question": "Geef hier je inkomen op.",
        "buttons": [
            {
                "text": "Opslaan",
            }
        ],
        "inputType": "slider",
    },
    {
        "id": 5,
        "title": "Vraag 1",
        "question": "Wat voor huis denk je dat je kan kopen met jouw inkomen?",
        "buttons": [
            {
                "text": "1",
            },
            {
                "text": "2"
            }
        ],
    },
    {
        "id": 6,
        "title": "Hypotheek",
        "question": "Nu we weten welk werk je doet, kunnen we bepalen hoeveel je kunt lenen! Stel je hebt eigen spaargeld, namelijk €25.000. Zou je hier een deel van gebruiken voor je hypotheek?",
        "buttons": [
            {
                "text": "Ja",
            },
            {
                "text": "Nee"
            }
        ],
    },
    {
        "id": 7,
        "title": "Inkomen",
        "question": "Geef hier je inkomen op.",
        "buttons": [
            {
                "text": "Huurhuis",
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