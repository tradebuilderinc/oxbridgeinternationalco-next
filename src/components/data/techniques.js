const KukSoolWon = [
  {
    id: "1",
    title: "HAND TECHNIQUES",
    points: [
      "Closed and open hand striking methods, including palm, fist, wrist, finger, and",
      "specialized hand training techniques",
      "Pressure point striking",
      "Striking with arm and shoulder",
      "Blocking and parrying",
    ],
    thumbs: "Hand-techniques-1-1.jpeg",

    isFeatured: true,
  },
  {
    id: "2",
    title: "LEG TECHNIQUES",
    points: [
      "Fundamental kicks, including: front, inside, outside, & more",
      "Advanced kicks, including: jumping",
      "spinning, combination, double leg",
      "Pressure point kicking",
      "Specialty kicking",
    ],
    thumbs: "Kick-.jpeg",
    isFeatured: true,
  },
  {
    id: "3",
    title: "HAND TECHNIQUES",
    points: [
      "Closed and open hand striking methods, including palm, fist, wrist, finger, and",
      "specialized hand training techniques",
      "Pressure point striking",
      "Striking with arm and shoulder",
      "Blocking and parrying",
    ],
    thumbs: "Kick-.jpeg",
    isFeatured: true,
  },
  {
    id: "4",
    title: "THROWS AND GRAPPLING",
    points: [
      "Throws include: body throws, projection throws, hip throws, leg throws",
      "Pressure point grappling",
      "Grappling defense",
      "Wrestling techniques",
      "Ground fighting",
    ],
    thumbs: "Pressure-Point-.jpeg",
    isFeatured: true,
  },
  {
    id: "5",
    title: "FALLING AND ACROBATICS",
    points: [
      "Body conditioning and agility techniques",
      "Body protection techniques",
      "Acrobatics for defense and offense",
    ],
    thumbs: "Falling-and-acrobatics-.jpeg",
    isFeatured: true,
  },

  {
    id: "6",
    title: "BODY CONDITIONING",
    points: [
      "Overall stretching and flexibility training",
      "Cardiovascular conditioning",
      "Muscle toning",
      "Ligament and tendon strengthening",
      "Joint flexibility and bone conditioning",
    ],
    thumbs: "Stretching-.jpeg",
    isFeatured: true,
  },

  {
    id: "7",
    title: "ANIMAL-STYLE TECHNIQUES",
    des: "Techniques based on the movements and/or characteristics of certain “martial” animals such as:",
    points: [
      "Sword: short & long, single or double, straight or inverted",
      "Staff: short, middle & long, single or double",
      "Jointed Staff (flail): double or triple",
      "Spear",
      "Cane",
      "Rope",
      "Fan",
      "Bow & Arrow",
    ],
    thumbs: "Animal-styles-.jpeg",
    isFeatured: true,
  },

  {
    id: "8",
    title: "TRADITIONAL KOREAN WEAPONS",
    des: "There are 24 different traditional Korean Royal Court weapons in the curriculum of Kuk Sool Won™",
    points: [
      "Sword: short & long, single or double, straight or inverted",
      "Staff: short, middle & long, single or double",
      "Jointed Staff (flail): double or triple",
      "Spear",
      "Cane",
      "Rope",
      "Fan",
      "Bow & Arrow",
    ],
    thumbs: "Weapons-.jpeg",
    isFeatured: true,
  },

  {
    id: "9",
    title: "MARTIAL ART HEALING METHODS",
    points: [
      "Acupressure",
      "Acupuncture",
      "Internal energy systems",
      "Herbal medicine",
    ],
    thumbs: "Meditation-.jpeg",
    isFeatured: true,
  },

  {
    id: "10",
    title: "MEDITATION AND BREATHING",
    points: [
      "Various breath control techniques",
      "Meditation and breathing postures",
      "Concentration techniques",
    ],
    thumbs: "Meditation-2-.jpeg",
    isFeatured: true,
  },
];

export function TechniquesJsonData() {
  return KukSoolWon.filter((event) => event.isFeatured);
}
