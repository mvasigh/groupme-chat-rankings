const SCORE_CONFIG = {
  base: {
    like: 70,
    multiplier: 0.2
  },
  triggers: [
    {
      name: 'lol',
      pattern: /[L|l]o+l/,
      score: 35
    },
    {
      name: 'LOL',
      pattern: /LO+L/,
      score: 60
    },
    {
      name: 'lmao',
      pattern: /[L|l]mao+/,
      score: 150
    },
    {
      name: 'LMAO',
      pattern: /LMAO+/,
      score: 210
    },
    {
      name: 'lmao!',
      pattern: /[L|l]mao+!+/,
      score: 330
    },
    {
      name: 'LMAO!',
      pattern: /LMAO+!+/,
      score: 440
    },
    {
      name: 'lmfao',
      pattern: /[L|l]mfao+/,
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
