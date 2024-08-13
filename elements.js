let elementsLight = [
  {
    id: 9,
    nam: "Ca",
    diam: 48,
    color: [95, 158, 160],
    p: 20,
    n: 28
  },

  {
    id: 10,
    nam: "Ni64",
    diam: 64,
    color: [102, 205, 170],
    p: 28,
    n: 36
  },

  {
    id: 11,
    nam: "Ni62",
    diam: 62,
    color: [32, 178, 170],
    p: 28,
    n: 34
  },

  {
    id: 12,
    nam: "S",
    diam: 34,
    color: [128, 128, 0],
    p: 16,
    n: 18
  },
  {
    id: 13,
    nam: "Fe",
    diam: 58,
    color: [169, 169, 169],
    p: 26,
    n: 32
  },

  {
    id: 14,
    nam: "O",
    diam: 18,
    color: [176, 224, 230],
    p: 8,
    n: 10
  },

  {
    id: 15,
    nam: "N",
    diam: 15,
    color: [32, 178, 170],
    p: 7,
    n: 15
  },

  {
    id: 16,
    nam: "Cr",
    diam: 54,
    color: [192, 192, 192],
    p: 24,
    n: 30
  },
]

let elementsHeavy = [
  {
    id: 0,
    nam: "Cf",
    diam: 249,
    color: [255, 255, 255],
    p: 98,
    n: 151
  },

  {
    id: 1,
    nam: "Bk",
    diam: 249,
    color: [255, 250, 250],
    p: 97,
    n: 152
  },

  {
    id: 2,
    nam: "Cm",
    diam: 248,
    color: [240, 255, 240],
    p: 96,
    n: 152
  },

  {
    id: 3,
    nam: "Am",
    diam: 249,
    color: [245, 255, 250],
    p: 95,
    n: 154
  },

  {
    id: 4,
    nam: "Pu242",
    diam: 242,
    color: [240, 255, 255],
    p: 94,
    n: 148
  },

  {
    id: 5,
    nam: "Pu244",
    diam: 244,
    color: [240, 248, 255],
    p: 94,
    n: 150

  },

  {
    id: 6,
    nam: "Np",
    diam: 237,
    color: [248, 248, 255],
    p: 93,
    n: 144
  },

  {
    id: 7,
    nam: "Bi",
    diam: 209,
    color: [245, 245, 245],
    p: 83,
    n: 126
  },

  {
    id: 8,
    nam: "Pb",
    diam: 208,
    color: [255, 245, 238],
    p: 82,
    n: 126
  },
]

let elementsSuperHeavy = [
  {
    id: 17,
    nam: "Og",
    diam: 294,
    color: [123, 104, 238],
    p: 118,
    n: 176,
    heavyName: "Cf",
    lightName: "Ca",
    nNumber: 3,
    // Cf+Ca +3n
  },

  {
    id: 18,
    nam: "Ts",
    diam: 297,
    color: [70, 130, 180],
    p: 117,
    n: 180,
    heavyName: "Bk",
    lightName: "Ca",
    nNumber: 0,
    // Bk+Ca
  },

  {
    id: 19,
    nam: "Lv",
    diam: 293,
    color: [127, 255, 212],
    p: 116,
    n: 293 - 116,
    heavyName: "Cm",
    lightName: "Ca",
    nNumber: 3,
    // Cm+Ca   +3n
  },

  {
    id: 20,
    nam: "Mc",
    diam: 289,
    color: [220, 20, 60],
    p: 115,
    n: 289 - 115,
    heavyName: "Am",
    lightName: "Ca",
    nNumber: 2,
    // Am + Ca   + 2n
  },

  {
    id: 21,
    nam: "Fl",
    diam: 286,
    color: [240, 230, 140],
    p: 114,
    n: 286 - 114,
    heavyName: "Pu242",
    lightName: "Ca",
    nNumber: 4,
    // Pu242+Ca    +4n
  },

  {
    id: 22,
    nam: "Nh",
    diam: 282,
    color: [255, 192, 203],
    p: 113,
    n: 282 - 113,
    heavyName: "Np",
    lightName: "Ca",
    nNumber: 3,
    // Np+Ca   +3n
  },

  {
    id: 23,
    nam: "Cn",
    diam: 283,
    color: [25, 25, 112],
    p: 112,
    n: 283 - 112,
    heavyName: "Pu242",
    lightName: "Ca",
    nNumber: 0,
    // Pu242+Ca   +He
  },

  {
    id: 24,
    nam: "Rg",
    diam: 272,
    color: [105, 105, 105],
    p: 111,
    n: 272 - 111,
    heavyName: "Bi",
    lightName: "Ni64",
    nNumber: 1,
    // Bi + Ni64   +n
  },
  {
    id: 25,
    nam: "Ds269",
    diam: 269,
    color: [169, 169, 169],
    p: 110,
    n: 269 - 110,
    heavyName: "Pb",
    lightName: "Ni62",
    nNumber: 1,
    // Pb + Ni62   +n
  },
  {
    id: 26,
    nam: "Ds271",
    diam: 271,
    color: [128, 128, 128],
    p: 110,
    n: 161,
    heavyName: "Pb",
    lightName: "Ni64",
    nNumber: 1,
    // Pb + Ni64    +n
  },
  {
    id: 27,
    nam: "Ds273",
    diam: 273,
    color: [105, 105, 105],
    p: 110,
    n: 163,
    heavyName: "Pu244",
    lightName: "S",
    nNumber: 5,
    // Pu244+S     +5n
  },

  {
    id: 28,
    nam: "Mt",
    diam: 266,
    color: [128, 0, 128],
    p: 109,
    n: 266 - 109,
    heavyName: "Bi",
    lightName: "Fe",
    nNumber: 1,
    // Bi+Fe   +n
  },

  {
    id: 29,
    nam: "Hs",
    diam: 265,
    color: [65, 105, 225],
    p: 108,
    n: 265 - 108,
    heavyName: "Pb",
    lightName: "Fe",
    nNumber: 1,
    // Pb+Fe   +n
  },

  {
    id: 30,
    nam: "Bh",
    diam: 261,
    color: [0, 255, 0],
    p: 107,
    n: 261 - 107,
    heavyName: "Bi",
    lightName: "Cr",
    nNumber: 2,
    // Bi+Cr    +2n
  },

  {
    id: 31,
    nam: "Sg",
    diam: 263,
    color: [210, 105, 30],
    p: 106,
    n: 263 - 106,
    heavyName: "Cf",
    lightName: "O",
    nNumber: 4,
    // Cf+O  +4n
  },

  {
    id: 32,
    nam: "Db",
    diam: 260,
    color: [0, 100, 0],
    p: 105,
    n: 260 - 105,
    heavyName: "Cf",
    lightName: "N",
    nNumber: 4,
    // Cf+N  +4n
  },
]
