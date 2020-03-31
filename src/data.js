let theme1 = new Themes(1, "Architecture", "#2980b9", [{
    question: "Question 1",
    answer: "Réponse 1"
  },
  {
    question: "Question 2",
    answer: "Réponse 2"
  },
  {
    question: "Question 3",
    answer: "Réponse 3"
  },
  {
    question: "Question 4",
    answer: "Réponse 4"
  },
  {
    question: "Question 5",
    answer: "Réponse 5"
  },
  {
    question: "Question 6",
    answer: "Réponse 6"
  },
  {
    question: "Question 7",
    answer: "Réponse 7"
  },
  {
    question: "Question 8",
    answer: "Réponse 8"
  }
]);

let theme2 = new Themes(2, "Sport", "#e74c3c", [{
    question: "Question 1",
    answer: "Réponse 1"
  },
  {
    question: "Question 2",
    answer: "Réponse 2"
  },
  {
    question: "Question 3",
    answer: "Réponse 3"
  },
  {
    question: "Question 4",
    answer: "Réponse 4"
  },
  {
    question: "Question 5",
    answer: "Réponse 5"
  },
  {
    question: "Question 6",
    answer: "Réponse 6"
  },
  {
    question: "Question 7",
    answer: "Réponse 7"
  },
  {
    question: "Question 8",
    answer: "Réponse 8"
  }
]);

let theme3 = new Themes(3, "Cinéma", "#27ae60", [{
    question: "Question 1",
    answer: "Réponse 1"
  },
  {
    question: "Question 2",
    answer: "Réponse 2"
  },
  {
    question: "Question 3",
    answer: "Réponse 3"
  },
  {
    question: "Question 4",
    answer: "Réponse 4"
  },
  {
    question: "Question 5",
    answer: "Réponse 5"
  },
  {
    question: "Question 6",
    answer: "Réponse 6"
  },
  {
    question: "Question 7",
    answer: "Réponse 7"
  },
  {
    question: "Question 8",
    answer: "Réponse 8"
  }
]);
let theme4 = new Themes(4, "Jardin", "#8e44ad", [{
    question: "Question 1",
    answer: "Réponse 1"
  },
  {
    question: "Question 2",
    answer: "Réponse 2"
  },
  {
    question: "Question 3",
    answer: "Réponse 3"
  },
  {
    question: "Question 4",
    answer: "Réponse 4"
  },
  {
    question: "Question 5",
    answer: "Réponse 5"
  },
  {
    question: "Question 6",
    answer: "Réponse 6"
  },
  {
    question: "Question 7",
    answer: "Réponse 7"
  },
  {
    question: "Question 8",
    answer: "Réponse 8"
  }
]);
let themeCG = new Themes(0, "Culture Générale", "#7f8c8d", [{
    question: "Question 1",
    answer: "Réponse 1"
  },
  {
    question: "Question 2",
    answer: "Réponse 2"
  },
  {
    question: "Question 3",
    answer: "Réponse 3"
  },
  {
    question: "Question 4",
    answer: "Réponse 4"
  },
  {
    question: "Question 5",
    answer: "Réponse 5"
  },
  {
    question: "Question 6",
    answer: "Réponse 6"
  },
  {
    question: "Question 7",
    answer: "Réponse 7"
  },
  {
    question: "Question 8",
    answer: "Réponse 8"
  },
  {
    question: "Question 9",
    answer: "Réponse 9"
  },
  {
    question: "Question 10",
    answer: "Réponse 10"
  },
  {
    question: "Question 11",
    answer: "Réponse 11"
  },
  {
    question: "Question 12",
    answer: "Réponse 12"
  },
  {
    question: "Question 13",
    answer: "Réponse 13"
  },
  {
    question: "Question 14",
    answer: "Réponse 13"
  },
  {
    question: "Question 15",
    answer: "Réponse 14"
  },
  {
    question: "Question 16",
    answer: "Réponse 15"
  }
]);

let tabPlayer = [
  new Player(1, "Claire", theme1),
  new Player(2, "Baptiste", theme2),
  new Player(3, "Clarisse", theme3),
  new Player(4, "Amélie", theme4)
];


let tabTheme = [theme1, theme2, theme3, theme4, themeCG];

let data = {
  tabPlayer,
  tabTheme
}

export default data
