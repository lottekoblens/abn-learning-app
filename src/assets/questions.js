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
        "images": [
            {
                'src' : '/quiz.jpg'
            }
        ]
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
        "images": [
            {
                'src' : '/simulation.jpg'
            }
        ],
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
        "images": [
            {
                "src" : '/house-illustration.jpg'
            }
        ],
        "inputType": "open",
    }, 
    {
        "id": 4,
        "title": "Inkomen",
        "question": "Wat verdien je per maand?",
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
                "text": "",
                "image": "/house1.png"
            },
            {
                "text": "",
                "image": "/house2.png"
            },
            {
                "text": "",
                "image": "/house3.png"
            },
            {
                "text": "",
                "image": "/house4.png"
            },
            {
                "text": "",
                "image": "/house5.png"
            },
            {
                "text": "",
                "image": "/house6.png"
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
        "images": [
            {
                "src" : '/spaarvarken.png'
            }
        ],
    },
    {
        "id": 7,
        "title": "Vraag 2",
        "question": "Welke zaken zorgen ervoor dat je een lagere hypotheek kunt krijgen?",
        "buttons": [
            {
                "text": "Antwoorden opslaan",
            }
        ],
        "inputType": "checkbox",
        "inputs": [
            {
                "icon": "/studieschuld.png",
                "text": "Studieschuld",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/telefoonabonnement.png",
                "text": "Telefoonabonnement",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/scooter.png",
                "text": "Scooter",
                "isAnswer": false,
                "value": 0
            },
            {
                "icon": "/car.png",
                "text": "Private lease auto",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/leningen.png",
                "text": "Leningen",
                "isAnswer": true,
                "value": 15
            }
        ]
    },
    {
        "id": 8,
        "title": "Antwoord",
        "question": "Welke zaken zorgen ervoor dat je een lagere hypotheek kunt krijgen?",
        "buttons": [
            {
                "text": "Verder"
            }
        ],
        "answers": [
            {
                "icon": "/studieschuld.png",
                "text": "Studieschuld",
                "isAnswer": true
            },
            {
                "icon": "/telefoonabonnement.png",
                "text": "Telefoonabonnement",
                "isAnswer": true
            },
            {
                "icon": "/scooter.png",
                "text": "Scooter",
                "isAnswer": true
            },
            {
                "icon": "/car.png",
                "text": "Private lease auto",
                "isAnswer": true
            },
            {
                "icon": "/leningen.png",
                "text": "Leningen",
                "isAnswer": true
            }
        ]
    },
    {
        "id": 9,
        "title": "Hypotheek",
        "question": "Heb je zelf schulden of een vorm van een lening?",
        "buttons": [
            {
                "text": "Volgende"
            }
        ],
        "inputs": [
            {
                "icon": "/studieschuld.png",
                "text": "Studieschuld"
            },
            {
                "icon": "/telefoonabonnement.png",
                "text": "Telefoonabonnement"
            },
            {
                "icon": "/car.png",
                "text": "Private lease auto"
            },
            {
                "icon": "/leningen.png",
                "text": "Leningen"
            }
        ],
        "inputType": "checkbox",
    },
    {
        "id": 10,
        "title": "Hypotheek",
        "question": "Hoeveel denk je per maand te moeten betalen voor de schulden en leningen?",
        "buttons": [
            {
                "text": "Opslaan"
            }
        ],
        "inputType": "open",
        "placeholder": "Voer hier het bedrag in"
    },
    {
        "id": 11,
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
    },
    {
        "id": 11,
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
    },
    {
        "id": 11,
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