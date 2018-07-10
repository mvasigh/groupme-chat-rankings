const SCORE_CONFIG = {
  base: {
    like: 70,
    multiplier: 1.2
  },
  triggers: [
    {
      name: 'lol',
      pattern: /lo+l/,
      score: 35
    },
    {
      name: 'LOL',
      pattern: /LO+L/,
      score: 60
    },
    {
      name: 'lmao',
      pattern: /lmao+/,
      score: 150
    },
    {
      name: 'LMAO',
      pattern: /LMAO+/,
      score: 210
    },
    {
      name: 'lmao!',
      pattern: /lmao+!+/,
      score: 330
    },
    {
      name: 'LMAO!',
      pattern: /LMAO+!+/,
      score: 440
    },
    {
      name: 'lmfao',
      pattern: /lmfao+/,
      score: 350
    },
    {
      name: 'LMFAO',
      pattern: /LMFAO+/,
      score: 480
    },
    {
      name: 'LMFAO!',
      pattern: /LMFAO+!+/,
      score: 800
    }
  ]
};

module.exports = SCORE_CONFIG;
