const vragen = [
    {
        "id": 1,
        "title": "Welkom",
        "question": "Tijdens het zoeken naar een huis zul je vragen moeten beantwoorden. Met deze vragen kun je <strong>coins</strong> verdienen. Hoe meer coins je hebt, hoe hoger je op het scorebord komt te staan!",
        "buttons": [
            {
                "text": "Oke, duidelijk!",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
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
        "question": "Je gaat zo het proces doorlopen van het huren of kopen van een huis. Dit kun je zien als een soort van <strong>simulatie</strong>. Het lijkt dus alsof het allemaal echt is wat je moet doen, maar dat is het niet. <p>Wees dus <strong>niet bang</strong> om het proces te doorlopen en in te vullen wat jij denkt dat goed is.</p>",
        "buttons": [
            {
                "text": "Oke, duidelijk!",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
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
        "question": "Laten we de zoektocht naar je huis beginnen! Ben je op zoek naar een <strong>huurhuis</strong> of een <strong>koophuis?</strong>",
        "buttons": [
            {
                "text": "Huurhuis",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
            },
            {
                "text": "Koophuis",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
            }
        ],
        "images": [
            {
                "src" : '/house-illustration.jpg'
            }
        ]
    }, 
    {
        "id": 4,
        "title": "Inkomen",
        "question": "Wat verdien je per maand?",
        "buttons": [
            {
                "text": "Opslaan",
                "buttonClicked": "changeState",
                "state": "question-search"
            }
        ],
        "inputType": "slider",
    },
    {
        "id": 5,
        "title": "Hypotheek",
        "question": "Nu we weten welk werk je doet, kunnen we bepalen hoeveel je kunt lenen! Stel je hebt eigen spaargeld, namelijk <strong>€25.000</strong>. Zou je hier een deel van gebruiken voor je hypotheek?",
        "buttons": [
            {
                "text": "Ja",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
            },
            {
                "text": "Nee",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
            }
        ],
        "images": [
            {
                "src" : '/spaarvarken.png'
            }
        ],
    },
    {
        "id": 6,
        "title": "Hypotheek",
        "question": "Voor bepaalde dingen die komen kijken bij het kopen van een huis heb je eigen spaargeld nodig. Het is dus handig om nu al na te denken of je kan beginnen met sparen.",
        "buttons": [
            {
                "text": "Oké, duidelijk!",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
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
        "question": "Welke zaken zorgen ervoor dat je een <strong>lagere hypotheek</strong> kunt krijgen?",
        "buttons": [
            {
                "text": "Antwoorden opslaan",
                "buttonClicked": "submitAnswer",
                "state": "question"
            }
        ],
        "inputType": "checkbox",
        "inputs": [
            {
                "icon": "/hoed-zwart.png",
                "text": "Studieschuld",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/telefoon-zwart.png",
                "text": "Telefoonabonnement",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/scooter-zwart.png",
                "text": "Scooter",
                "isAnswer": false,
                "value": 0
            },
            {
                "icon": "/car-zwart.png",
                "text": "Private lease auto",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/euro-zwart.png",
                "text": "Leningen",
                "isAnswer": true,
                "value": 15
            }
        ]
    },
    {
        "id": 8,
        "title": "Antwoord",
        "question": "Welke zaken zorgen ervoor dat je een <strong>lagere hypotheek</strong> kunt krijgen?</p><p>Alleen het hebben van een scooter zorgt <strong>niet</strong> voor een lagere hypotheek. Dat was dus het enige foute antwoord.",
        "buttons": [
            {
                "text": "Verder",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
            }
        ],
        "answers": [
            {
                "icon": "/hoed-groen.png",
                "text": "Studieschuld",
                "isAnswer": true
            },
            {
                "icon": "/telefoon-groen.png",
                "text": "Telefoonabonnement",
                "isAnswer": true
            },
            {
                "icon": "/scooter-rood.png",
                "text": "Scooter",
                "isAnswer": true
            },
            {
                "icon": "/car-groen.png",
                "text": "Private lease auto",
                "isAnswer": true
            },
            {
                "icon": "/euro-groen.png",
                "text": "Leningen",
                "isAnswer": true
            }
        ]
    },
    {
        "id": 9,
        "title": "Hypotheek",
        "question": "Heb je zelf <strong>schulden</strong> of een vorm van een <strong>lening</strong>?",
        "buttons": [
            {
                "text": "Volgende",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
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
                "text": "Opslaan",
                "buttonClicked": "incrementCurrentQuestion",
                "state": "question"
            }
        ],
        "inputType": "open",
        "placeholder": "Voer hier het bedrag in"
    },
    {
        "id": 11,
        "title": "Hypotheek",
        "question": "De hypotheekadviseur van de bank geeft aan dat je een hypotheek kunt krijgen van <strong>€350.000</strong>.</p> <p>Zonder schulden en leningen had je een hypotheek kunnen krijgen van €370.000.",
        "buttons": [
            {
                "text": "Super!",
                "buttonClicked": "changeState",
                "state": "house-search"
            }
        ],
        "images": [
            {
                "src" : '/hypotheek.png'
            }
        ]
    },
    {
        "id": 12,
        "title": "Bieden",
        "question": "Wat is de hoogte van <strong>het bod</strong> dat je gaat doen?",
        "buttons": [
            {
                "text": "Bieden",
                "buttonClicked": "incrementCurrentQuestion"
            }
        ],
        "inputType": "open",
        "placeholder": "Voer hier het bedrag in"
    },
    {
        "id": 13,
        "title": "Vraag 3",
        "question": "Welke <strong>kosten</strong> heb je nog meer als <strong>koper</strong> van een huis?",
        "buttons": [
            {
                "text": "Antwoorden opslaan",
                "buttonClicked": "submitAnswer"
            }
        ],
        "inputs": [
            {
                "text": "Overdrachtsbelasting",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Bouwtechnische keuring",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Notariskosten",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Financieringskosten",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Kadasterkosten",
                "isAnswer": true,
                "value": 30
            }
        ],
        "inputType": "checkbox",
    },
    {
        "id": 14,
        "title": "Antwoord",
        "question": "Als koper van een huis heb je veel kosten die je nog moet maken.</p> <p><strong class='green'>Alle antwoorden waren dus juist!</strong>",
        "buttons": [
            {
                "text": "Ga verder",
                "buttonClicked": "incrementCurrentQuestion"
            }
        ]
    },
    {
        "id": 15,
        "title": "Bieden",
        "question": "<strong>Gefeliciteerd! Je bod is geaccepteerd!</strong>",
        "buttons": [
            {
                "text": "Voorlopig koopcontract tekenen",
                "buttonClicked": "incrementCurrentQuestion"
            }
        ],
        "images": [
            {
                "src" : '/bod-geaccepteerd.png'
            }
        ]
    },
    {
        "id": 16,
        "title": "Vraag 4",
        "question": "Het bod is een week geleden geaccepteerd. Betekent dit nu dat je <strong>niet</strong> meer onder de koop van de woning uit kunt komen?",
        "buttons": [
            {
                "text": "Ja, je hebt het huis nu gekocht.",
                "isAnswer": false,
                "value": 0,
                "buttonClicked": "incrementCurrentQuestion"
            },
            {
                "text": "Nee, als je ontbindende voorwaarden hebt opgesteld bij het bieden op de woning dan kan de koop nog steeds niet doorgaan.",
                "isAnswer": true,
                "value": 50,
                "buttonClicked": "incrementCurrentQuestionByTwo"
            },
            {
                "text": "Nee, je kunt nog altijd onder de koop uit ook al is het bod geaccepteerd.",
                "isAnswer": false,
                "value": 0,
                "buttonClicked": "incrementCurrentQuestion"
            }
        ]
    },
    {
        "id": 17,
        "title": "Antwoord",
        "question": "<strong class='red'>Dat is niet juist.</strong></p> <p>Bij het kopen van een woning is het belangrijk om bij het doen van je bod ook <strong>ontbindende voorwaarden</strong> op te stellen. Hierin zet je bijvoorbeeld dat de koop van het huis niet door kan gaan wanneer je de financiering niet rond krijgt.",
        "buttons": [
            {
                "text": "Doorgaan naar de volgende stap",
                "buttonClicked": "incrementCurrentQuestionByTwo"
            }
        ],
        "images": [
            {
                "src" : '/contract-verscheurd.png'
            }
        ]
    },
    {
        "id": 18,
        "title": "Antwoord",
        "question": "<strong class='green'>Dat klopt!</strong></p> <p>Bij het kopen van een woning is het belangrijk om bij het doen van je bod ook ontbindende voorwaarden op te stellen. Hierin zet je bijvoorbeeld dat de koop van het huis niet door kan gaan wanneer je de financiering niet rond krijgt.",
        "buttons": [
            {
                "text": "Doorgaan naar de volgende stap",
                "buttonClicked": "incrementCurrentQuestion"
            }
        ],
        "images": [
            {
                "src" : '/contract-verscheurd.png'
            }
        ]
    },
    {
        "id": 19,
        "title": "Bank",
        "question": "Nu komt het belangrijkste gedeelte, <strong>de hypotheek aanvragen bij de bank</strong>. Wanneer je alle gegevens aanlevert, gaat de bank nog een keer controleren of je kan lenen wat je wilt lenen.</p> <p>Wanneer de bank akkoord is, ontvang je hiervan een hypotheekvoorstel.",
        "buttons": [
            {
                "text": "Naar de notaris",
                "buttonClicked": "incrementCurrentQuestion"
            }
        ],
        "images": [
            {
                "src" : '/hypotheekvoorstel.png'
            }
        ]
    },
    {
        "id": 20,
        "title": "Notaris",
        "question": "Dan nu is het tijd om het <strong>officiële koopcontract</strong> te tekenen. Dit doe je bij de notaris. Wanneer het contract is getekend, is alles geregeld!",
        "buttons": [
            {
                "text": "Doorgaan naar laatste stap",
                "buttonClicked": "incrementCurrentQuestion"
            }
        ],
        "images": [
            {
                "src" : '/notaris.png'
            }
        ]
    },
    {
        "id": 21,
        "title": "Gefeliciteerd",
        "question": "<strong>Gefeliciteerd</strong>, je hebt de sleutels gekregen van je nieuwe huis!",
        "buttons": [
            {
                "text": "Bekijk plek op het scorebord",
                "buttonClicked": "getScore"
            }
        ],
        "images": [
            {
                "src" : '/sleutels.png'
            }
        ]
    },
    {
        "id": 22,
        "title": "Oh nee!",
        "question": "<strong>Oh nee</strong>, je komt er net achter dat je je baan kwijt gaat raken.</p><p>Nu kun je het koophuis niet meer betalen. Ga daarom snel op zoek naar een huurhuis!",
        "buttons": [
            {
                "text": "Huurhuis zoeken"
            }
        ],
        "images": [
            {
                "src" : '/paniek.jpg'
            }
        ]
    }
]

export {
    vragen
}