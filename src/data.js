import Themes from "./class/Themes.js";
import Player from "./class/Player.js";

let theme1 = new Themes(1, "Martin Luther King", "#3498db", [{
    question: "Citez son discours célébre ?",
    answer: "I have a dream"
  },
  {
    question: "Quelle était la profession de Martin L. King ? ",
    answer: "Il était pasteur baptiste en Alabama"
  },
  {
    question: "Quel distinction recoit-il en 1964 ?",
    answer: "Il a reçu le Prix Nobel de la Paix"
  },
  {
    question: "Quelle année a-t-il fait son fameux discours ? ",
    answer: "C'était le 28 aôut 1963"
  },
  {
    question: "Où a eu lieu son fameur discours ?",
    answer: "Sur les marches du Lincoln Memorial"
  },
  {
    question: "Combien il y avait-t-il de personne pendant son discours ? A 20 000 près",
    answer: "Il y avait 250 000 personnes "
  },
  {
    question: "Comment s'appelle la personne qui a assasiné Martin L. King ? ",
    answer: "C'est James Earl Ray, c'était un  ségrégationniste blanc"
  },
  {
    question: "Quel chanteur a écrit la chanson 'Happy Birthday' en hommage à Martin L. King ?",
    answer: "C'est Stevie Wonder, pour faire prmouvoir la date d'anniversaire de Martin L.K. devienne une fête nationale"
  }
]);

let theme2 = new Themes(2, "8 miles", "#e74c3c", [{
    question: "En quelle année est sortie le film? ",
    answer: "Le film est sorti en 2002"
  },
  {
    question: "Comment s'appelle le personnage joué par Eminem ?",
    answer: "C'est Jimmy Smith Jr alias « B-Rabbit »"
  },
  {
    question: "Avec qui vit le personnage principale ?",
    answer: "Avec sa mère et sa soeur "
  },
  {
    question: "Quel est le titre de la bande son ?",
    answer: "C'est Lose Yourself ! Eminem a reçu l'Academy Award de la meilleure chanson originale et même un Oscar !!"
  },
  {
    question: "Comment s'appelle le groupe d'Eminem ?",
    answer: "Il s'agit de D12 !"
  },
  {
    question: "Où se déroule l'action ?",
    answer: "Il se passe à Détroit. D'ailleurs 8 Mile Road est une route qui sépare la ville de Détroit, majoritairement noire, et la banlieue nord, majoritairement blanche."
  },
  {
    question: "Que faisaient le réalisateur du film pour éviter aux figurants de s'ennuyer lors des tournages des battles ?",
    answer: "Curtis Hanson, a lancé un grand concours de battle amenant une grande majorité du public à participer. Parmi eux, quatre personnes ont été choisies pour affronter Eminem en personne."
  },
  {
    question: "Qui est Papa Doc ?",
    answer: "C'est le tenant du titre des battles et l'antagoniste principal de Jimmy dans tout le film"
  }
]);

let theme3 = new Themes(3, "Friends", "#2ecc71", [{
    question: " Quel est l'événement survenu sur une plage que Chandler, Joey et Monica refusent de révéler aux autres, avant de craquer ?",
    answer: "Monica s'est fait piquer par une méduse et Chandler a dû lui uriner dessus pour calmer la douleur"
  },
  {
    question: "En quelle année a été diffusé le premier épisode ?",
    answer: "En septembre 1994"
  },
  {
    question: "Qui est Ursula ?!",
    answer: "C'est la soeur jumelle de Phoebe ! Elle a été serveuse, masseuse et même star du X !"
  },
  {
    question: "Comment s'appelle le fameux coffee-shop où il se rejoigne tout le temps ?",
    answer: "C'est le Central Perk, tenu par le maladroit Gunter !"
  },
  {
    question: "Quel acteur pami la liste n'est pas apparu dans Friens : Hugh Laurie - Bruce Willis - George Clooney - John Travolta - Jean-Claude Van Damme ",
    answer: "En effet, John Travolta n'est jamais apparu dans la série !!"
  },
  {
    question: "Comment s'appelle l'acteur qui joue Ross ?",
    answer: "David Schwimmer, un nom imprononcable !!"
  },
  {
    question: "Comment est habillée Rachel lors du premier épisode ?",
    answer: "Elle est en robe de mariée ! Elle vient de s’enfuir de son mariage !"
  },
  {
    question: "Comment s'appelle l'animal de compagnie de Ross ?",
    answer: "Un singe baptisé Marcel"
  }
]);
let theme4 = new Themes(4, "Permaculture", "#9b59b6", [{
    question: "Quelle est l'expression américaine à l'origine du mot ?",
    answer: "Il est issu de l'expression américaine « permanent agriculture »"
  },
  {
    question: "La permaculture repose sur 3 principes éthiques, lesquelles ?",
    answer: "Prendre soin de la Terre, prendre soin des Hommes, partager équitablement les ressources."
  },
  {
    question: "Le choux de Bruxelles est un légume fleur ou un légume feuille ?",
    answer: "C'est un légume feuille ! Comme la salade, les épinards ou les blettes !"
  },
  {
    question: "La permaculture ne concerne pas que l'agriculture mais englobe aussi les champs économiques et sociaux ?",
    answer: "C'est vrai !"
  },
  {
    question: "Quel fruit s'associe bien le poireaux ?",
    answer: "Il s'agit des fraises ! :) "
  },
  {
    question: "Quelle personne n'a pas participé à l'essor de la permaculture ? Entre  David Holmgren - Bernard Montgomery - Masanobu Fukuoka -  Bill Mollison  ",
    answer: "L'intru s'agit de Bernard Montgomery ! Pour l'histoire,  c'était le 1er vicomte Montgomery of Alamein, est un field marshal britannique, né le 17 novembre 1887 à Londres et mort le 24 mars 1976 à Alton (Hampshire). On le connaît aussi sous son surnom « Monty ». MAIS ON S'EN FOUT !"
  },
  {
    question: "La méthode OBREDIM est un outil pour concevoir des designs en permaculture. Mais que signifie le B?",
    answer: "Il s'agit de Boundary, la 'limite'"
  },
  {
    question: "L’aménagement de l'espace, ou zonage, est fondamental pour la permaculture. A quoi correspond la zone 3 ?",
    answer: "La zone 3 correspond aux pâturages et aux céréales. Cette production tend à être plus orientée vers la vente"
  }
]);
let themeCG = new Themes(0, "Culture Générale", "#95a5a6", [{
    question: "Quel est le plus long fleuve d'Europe occidentale ?",
    answer: " Le Rhin"
  },
  {
    question: "Qui est inséparable de Bonnie Parker ?",
    answer: "Clyde Barrow"
  },
  {
    question: "Qui est le dieu du Soleil dans l'ancienne Egypte ?",
    answer: " Râ"
  },
  {
    question: "Quelle ville a construit le premier métro ?",
    answer: "Londres"
  },
  {
    question: "Quel est le pays natal de Wolfgang Amadeus Mozart ?",
    answer: "L'Autriche"
  },
  {
    question: "De quel côté de l'assiete doit-on poser le verre a vin ?",
    answer: " A droite"
  },
  {
    question: "Qui est le héros des 'Liaisons dangereuses' ? ",
    answer: "Valmont"
  },
  {
    question: "Qui a écrit 'Cendrillon' en 1697 ?",
    answer: "Charles Perrault"
  },
  {
    question: "De quel pays vient une voiture qui porte la lettre D ?",
    answer: "L'allemagne"
  },
  {
    question: "Quel groupe réunissait Filip Nikolic, Frank Delhaye et Adel Kachermi ? ",
    answer: "Les 2be3"
  },
  {
    question: "Aux Etats-Unis, quel sport est concerné par le 'Super Bowl' ?",
    answer: "Football américain"
  },
  {
    question: "Quel adjectif se rapporte au bonnet rouge porté pendant la Révolution ?",
    answer: "Phrygien"
  },
  {
    question: "Quelle pipe à long tuyau fumaient les Indiens d'Amérique du Nord ?",
    answer: "Le calumet"
  },
  {
    question: "Quel sport associe-t-on au 'Quinze de France' ?",
    answer: "Le rugby"
  },
  {
    question: "De quel pays Hô Chi Minh proclame-t-il l'indépendance en 1945 ? ",
    answer: "Le Vietnam"
  },
  {
    question: "Avec la Belgique et le Luxembourg, quel pays forme le Benelux ?",
    answer: "Les Pays-Bas"
  }
]);

let players = [
  new Player(1, "Claire", theme1, true),
  new Player(2, "Baptiste", theme2),
  new Player(3, "Clarisse", theme3),
  new Player(4, "Amélie", theme4)
];

const colors = [{
    name: "Vert",
    color: "#27ae60"
  },
  {
    name: "Bleu",
    color: "#3498db"
  },
  {
    name: "Rouge",
    color: "#e74c3c"
  },
  {
    name: "Violet",
    color: "#9b59b6"
  },
  {
    name: "Gris",
    color: "#95a5a6"
  },
  {
    name: "Orange",
    color: "#f39c12"
  },
  {
    name: "Turquoise",
    color: "#1abc9c"
  }
];


let themes = [theme1, theme2, theme3, theme4, themeCG];

let sounds = {

}

let data = {
  players,
  themes,
  sounds,
  colors
}

export default data
