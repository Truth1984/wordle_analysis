## wordle analysis

wordle guessing strategy

## tldr

1. There are NO five letter words that uses different letters from each other.

2. guessing best 4 > best 5

3. `brave` + `flint` + `shock` + `pudgy`

# ! notice

Wordle is only using 2315 words, but there are actually 9k+ words in nswl2020.

use `squid` to check your wordle's version

## file

word.txt: 5 letter words in Wordle dictionary

word_full.json: not used, a comprehensive list of 5 letter words in English dictionary

position.json: [ "LetterPosition":"occurrence" ]

score_plain: sum_of_occurence / 100

score.json: sum_of_occurence / 100 - duplication_factor (1)

combination.json: sum_of_score_plain - duplication_factor (1) - position_factor (1)

sample_range.json: sum_of_score_plain - duplication_factor (3)

comb_p3.json: sum_of_score_plain - duplication_factor (3) - position_factor (3)

best4.json: sum_of_score_plain

## factor

duplication_factor: duplication of characters inside word array.

position: characters that have the same index in a word array.

i.e.

`melee`: score of melee - duplication of `e` :

12.03 - ( 3 - 1 ) \* duplication_factor

`melee` + `apple`: score of melee + score of apple - duplication of `e` - duplication of `p` - position of `e` (on index of 4)

12.03 + 8.46 - ( 4 - 1 ) \* duplication_factor - ( 2 - 1 ) \* duplication_factor - ( 2 - 1 ) \* position_factor

## sample_range.json

result of total score > 30, the next word in the array does not include any character that previous words possess.

duplication_factor : 3

top 5:

```json
[
  [
    [
      ["shift", 10.64],
      ["wrack", 9.22],
      ["blond", 9.18],
      ["queue", 8.92],
      ["pygmy", 6.64]
    ],
    "35.60"
  ],
  [
    [
      ["skimp", 7.66],
      ["greed", 9.95],
      ["woozy", 9.9],
      ["blunt", 9.74],
      ["chaff", 7.1]
    ],
    "35.35"
  ],
  [
    [
      ["gravy", 10.99],
      ["spunk", 8.87],
      ["beech", 8.83],
      ["flood", 8.31],
      ["twixt", 7.15]
    ],
    "35.15"
  ],
  [
    [
      ["privy", 10.85],
      ["tooth", 9.5],
      ["black", 9.46],
      ["femme", 9.31],
      ["swung", 7.98]
    ],
    "35.10"
  ],
  [
    [
      ["shack", 10.82],
      ["merge", 10.12],
      ["funny", 10.07],
      ["blood", 8.68],
      ["twixt", 7.15]
    ],
    "34.84"
  ]
]
```

## comb_p3.json

combination of words with score > 13 , top 100

duplication_factor : 3

position_factor : 3

top 5 :

```json
[
  [
    [
      ["slate", 14.37],
      ["sauce", 14.11],
      ["shale", 14.03],
      ["soapy", 13.66],
      ["brine", 13.12]
    ],
    "15.29"
  ],
  [
    [
      ["slate", 14.37],
      ["sauce", 14.11],
      ["shale", 14.03],
      ["sooty", 13.92],
      ["brine", 13.12]
    ],
    "12.55"
  ],
  [
    [
      ["slate", 14.37],
      ["sauce", 14.11],
      ["shale", 14.03],
      ["crane", 13.78],
      ["gooey", 13.2]
    ],
    "12.49"
  ],
  [
    [
      ["slate", 14.37],
      ["sauce", 14.11],
      ["shale", 14.03],
      ["saint", 13.71],
      ["gooey", 13.2]
    ],
    "12.42"
  ],
  [
    [
      ["slate", 14.37],
      ["sauce", 14.11],
      ["slice", 14.09],
      ["gooey", 13.2],
      ["brine", 13.12]
    ],
    "11.89"
  ]
]
```

## best4.json

best 4 words to guess at the start of the game, no self duplication

algorithm: continue on best match

top 5 :

```json
[
  [
    [
      ["brave", 12.17],
      ["flint", 10.38],
      ["shock", 10.19],
      ["pudgy", 8.43]
    ],
    "41.17"
  ],
  [
    [
      ["fudge", 8.97],
      ["showy", 11.43],
      ["print", 11.1],
      ["black", 9.46]
    ],
    "40.96"
  ],
  [
    [
      ["shunt", 11.1],
      ["badge", 10.52],
      ["proxy", 10.2],
      ["flick", 8.68]
    ],
    "40.50"
  ],
  [
    [
      ["proxy", 10.2],
      ["badge", 10.52],
      ["flint", 10.38],
      ["shuck", 9.4]
    ],
    "40.50"
  ],
  [
    [
      ["print", 11.1],
      ["balmy", 10.21],
      ["shock", 10.19],
      ["fudge", 8.97]
    ],
    "40.47"
  ]
]
```
