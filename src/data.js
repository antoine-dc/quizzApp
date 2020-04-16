import Themes from "./class/Themes.js";
import Player from "./class/Player.js";
import Color from "./class/Color.js";
import Question from "./class/Question.js";

let theme1 = new Themes("Martin Luther King", [
  new Question("Citez son discours célébre ?", "I have a dream"),
  new Question("Quelle était la profession de Martin L. King ?", "Il était pasteur baptiste en Alabama"),
  new Question("Quel distinction recoit-il en 1964 ?", "Il a reçu le Prix Nobel de la Paix"),
  new Question("Quelle année a-t-il fait son fameux discours ? ", "C'était le 28 aôut 1963"),
  new Question("Où a eu lieu son fameur discours ?", "Sur les marches du Lincoln Memorial"),
  new Question("Combien il y avait-t-il de personne pendant son discours ? A 20 000 près", "Il y avait 250 000 personnes "),
  new Question("Comment s'appelle la personne qui a assasiné Martin L. King ? ", "C'est James Earl Ray, c'était un  ségrégationniste blanc"),
  new Question("Quel chanteur a écrit la chanson 'Happy Birthday' en hommage à Martin L. King ?", "C'est Stevie Wonder, pour faire prmouvoir la date d'anniversaire de Martin L.K. devienne une fête nationale")
]);

let theme2 = new Themes("8 miles", [new Question("En quelle année est sortie le film? ", "Le film est sorti en 2002"),
  new Question("Comment s'appelle le personnage joué par Eminem ?", "C'est Jimmy Smith Jr alias « B-Rabbit »"),
  new Question("Avec qui vit le personnage principale ?", "Avec sa mère et sa soeur "),
  new Question("Quel est le titre de la bande son ?", "C'est Lose Yourself ! Eminem a reçu l'Academy Award de la meilleure chanson originale et même un Oscar !!"),
  new Question("Comment s'appelle le groupe d'Eminem ?", "Il s'agit de D12 !"),
  new Question("Où se déroule l'action ?", "Il se passe à Détroit. D'ailleurs 8 Mile Road est une route qui sépare la ville de Détroit, majoritairement noire, et la banlieue nord, majoritairement blanche."),
  new Question("Que faisaient le réalisateur du film pour éviter aux figurants de s'ennuyer lors des tournages des battles ?", "Curtis Hanson, a lancé un grand concours de battle amenant une grande majorité du public à participer. Parmi eux, quatre personnes ont été choisies pour affronter Eminem en personne."),
  new Question("Qui est Papa Doc ?", "C'est le tenant du titre des battles et l'antagoniste principal de Jimmy dans tout le film")
]);

let theme3 = new Themes("Friends", [new Question(" Quel est l'événement survenu sur une plage que Chandler, Joey et Monica refusent de révéler aux autres, avant de craquer ?", "Monica s'est fait piquer par une méduse et Chandler a dû lui uriner dessus pour calmer la douleur"),
  new Question("En quelle année a été diffusé le premier épisode ?", "En septembre 1994"),
  new Question("Qui est Ursula ?!", "C'est la soeur jumelle de Phoebe ! Elle a été serveuse, masseuse et même star du X !"),
  new Question("Comment s'appelle le fameux coffee-shop où il se rejoigne tout le temps ?", "C'est le Central Perk, tenu par le maladroit Gunter !"),
  new Question("Quel acteur pami la liste n'est pas apparu dans Friens : Hugh Laurie - Bruce Willis - George Clooney - John Travolta - Jean-Claude Van Damme ", "En effet, John Travolta n'est jamais apparu dans la série !!"),
  new Question("Comment s'appelle l'acteur qui joue Ross ?", "David Schwimmer, un nom imprononcable !!"),
  new Question("Comment est habillée Rachel lors du premier épisode ?", "Elle est en robe de mariée ! Elle vient de s’enfuir de son mariage !"),
  new Question("Comment s'appelle l'animal de compagnie de Ross ?", "Un singe baptisé Marcel")
]);
let theme4 = new Themes("Permaculture", [new Question("Quelle est l'expression américaine à l'origine du mot ?", "Il est issu de l'expression américaine « permanent agriculture »"),
  new Question("La permaculture repose sur 3 principes éthiques, lesquelles ?", "Prendre soin de la Terre, prendre soin des Hommes, partager équitablement les ressources."),
  new Question("Le choux de Bruxelles est un légume fleur ou un légume feuille ?", "C'est un légume feuille ! Comme la salade, les épinards ou les blettes !"),
  new Question("La permaculture ne concerne pas que l'agriculture mais englobe aussi les champs économiques et sociaux ?", "C'est vrai !"),
  new Question("Quel fruit s'associe bien le poireaux ?", "Il s'agit des fraises ! :) "),
  new Question("Quelle personne n'a pas participé à l'essor de la permaculture ? Entre  David Holmgren - Bernard Montgomery - Masanobu Fukuoka -  Bill Mollison  ", "L'intru s'agit de Bernard Montgomery ! Pour l'histoire,  c'était le 1er vicomte Montgomery of Alamein, est un field marshal britannique, né le 17 novembre 1887 à Londres et mort le 24 mars 1976 à Alton (Hampshire). On le connaît aussi sous son surnom « Monty ». MAIS ON S'EN FOUT !"),
  new Question("La méthode OBREDIM est un outil pour concevoir des designs en permaculture. Mais que signifie le B?", "Il s'agit de Boundary, la 'limite'"),
  new Question("L’aménagement de l'espace, ou zonage, est fondamental pour la permaculture. A quoi correspond la zone 3 ?", "La zone 3 correspond aux pâturages et aux céréales. Cette production tend à être plus orientée vers la vente")
]);
let themeCG = new Themes("Culture Générale", [new Question("Quel est le plus long fleuve d'Europe occidentale ?", " Le Rhin"),
  new Question("Qui est inséparable de Bonnie Parker ?", "Clyde Barrow"),
  new Question("Qui est le dieu du Soleil dans l'ancienne Egypte ?", " Râ"),
  new Question("Quelle ville a construit le premier métro ?", "Londres"),
  new Question("Quel est le pays natal de Wolfgang Amadeus Mozart ?", "L'Autriche"),
  new Question("De quel côté de l'assiete doit-on poser le verre a vin ?", " A droite"),
  new Question("Qui est le héros des 'Liaisons dangereuses' ? ", "Valmont"),
  new Question("Qui a écrit 'Cendrillon' en 1697 ?", "Charles Perrault"),
  new Question("De quel pays vient une voiture qui porte la lettre D ?", "L'allemagne"),
  new Question("Quel groupe réunissait Filip Nikolic, Frank Delhaye et Adel Kachermi ? ", "Les 2be3"),
  new Question("Aux Etats-Unis, quel sport est concerné par le 'Super Bowl' ?", "Football américain"),
  new Question("Quel adjectif se rapporte au bonnet rouge porté pendant la Révolution ?", "Phrygien"),
  new Question("Quelle pipe à long tuyau fumaient les Indiens d'Amérique du Nord ?", "Le calumet"),
  new Question("Quel sport associe-t-on au 'Quinze de France' ?", "Le rugby"),
  new Question("De quel pays Hô Chi Minh proclame-t-il l'indépendance en 1945 ? ", "Le Vietnam"),
  new Question("Avec la Belgique et le Luxembourg, quel pays forme le Benelux ?", "Les Pays-Bas")
], true);

let players = [
  new Player(1, "Claire", theme1, new Color("Turquoise", "#1abc9c"), true),
  new Player(2, "Baptiste", theme2, new Color("Emerland", "#2ecc71")),
  new Player(3, "Clarisse", theme3, new Color("PeterRiver", "#3498db")),
  new Player(4, "Amélie", theme4, new Color("Amethyst", "#9b59b6"))
];

const colors = [
  new Color("Turquoise", "#1abc9c"),
  new Color("Emerland", "#2ecc71"),
  new Color("PeterRiver", "#3498db"),
  new Color("Amethyst", "#9b59b6"),
  new Color("Alizarin", "#e74c3c"),
  new Color("Carot", "#e67e22"),
  new Color("SunFlower", "#f1c40f"),
  new Color("Concrete", "#95a5a6")
];


let themes = [theme1, theme2, theme3, theme4, themeCG];

const sounds = [{
    path: "roll.wav",
    type: "roll"
  },
  {
    path: "success-fanfare-trumpets.mp3",
    type: "final"
  },
  {
    path: "correct.mp3",
    type: "success"
  },
  {
    path: "success.mp3",
    type: "success"
  },
  {
    path: "yeah4.wav",
    type: "success"
  },
  {
    path: "yeah2.wav",
    type: "success"
  },
  {
    path: "yeah3.wav",
    type: "success"
  },
  {
    path: "yes.wav",
    type: "success"
  },
  {
    path: "error.mp3",
    type: "error"
  },
  {
    path: "fail.wav",
    type: "error"
  },
  {
    path: "loose.wav",
    type: "error"
  },
  {
    path: "no.wav",
    type: "error"
  },
  {
    path: "no-sir.wav",
    type: "error"
  },
  {
    path: "oh-no.wav",
    type: "error"
  }

];


let data = {
  /*players,
  themes,*/
  colors,
  sounds
}

export default data
