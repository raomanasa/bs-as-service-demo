
var E_PREFIX_RATE = 0.25;

// All of our word lists:
var _word_lists = {
  
  verb : [
    "implement", "utilize", "integrate", "streamline", "optimize", "evolve", "transform", "embrace",
    "enable", "orchestrate", "leverage", "reinvent", "aggregate", "architect", "enhance", "incentivize",
    "morph", "empower", "envisioneer", "monetize", "harness", "facilitate", "seize", "disintermediate",
    "synergize", "strategize", "deploy", "brand", "grow", "target", "syndicate", "synthesize", "deliver",
    "mesh with", "incubate", "engage", "maximize", "benchmark", "expedite", "reintermediate", "whiteboard",
    "visualize", "repurpose", "innovate with", "scale", "unleash", "drive", "extend", "engineer", "sync on",
    "revolutionize", "generate", "exploit", "transition", "e-enable", "iterate on", "cultivate", "patent",
    "productize", "redefine", "recontextualize", "democratize"
  ],

  adjective : [
    "clicks-and-mortar", "value-added", "vertical", "proactive", "robust", "revolutionary", "scalable",
    "leading-edge", "innovative", "intuitive", "strategic", "e-business", "mission-critical", "sticky",
    "one-to-one", "24/7", "end-to-end", "global", "B2B", "B2C", "granular", "frictionless", "virtual",
    "viral", "dynamic", "24/365", "best-of-breed", "killer", "magnetic", "bleeding-edge", "web-enabled",
    "interactive", "dot-com", "sexy", "back-end", "real-time", "efficient", "front-end", "distributed",
    "seamless", "extensible", "turn-key", "world-class", "open-source", "cross-platform", "cross-media",
    "synergistic", "bricks-and-clicks", "out-of-the-box", "enterprise", "integrated", "impactful",
    "wireless", "transparent", "next-generation", "cutting-edge", "user-centric", "visionary", "social",
    "customized", "ubiquitous", "plug-and-play", "collaborative", "compelling", "holistic", "rich",
    "disruptive", "capital"
  ],

  noun : [
    "synergies", "web-readiness", "paradigms", "markets", "partnerships", "infrastructures", "platforms",
    "initiatives", "channels", "eyeballs", "communities", "ROI", "solutions", "e-tailers", "e-services",
    "action-items", "portals", "niches", "technologies", "content", "vortals", "supply-chains", "exchanges",
    "convergence", "relationships", "architectures", "interfaces", "e-markets", "e-commerce", "systems",
    "bandwidth", "infomediaries", "models", "mindshare", "deliverables", "users", "schemas", "networks",
    "applications", "metrics", "e-business", "functionalities", "experiences", "web services", "methodologies",
    "social-media"
  ],

  // Top 200 male + female first names according to social security:
  first_name : [
    "James", "Mary", "John", "Patricia", "Robert", "Elizabeth", "Michael", "Jennifer", "William", "Linda",
    "David", "Barbara", "Richard", "Susan", "Joseph", "Margaret", "Charles", "Jessica", "Thomas", "Dorothy",
    "Christopher", "Sarah", "Daniel", "Karen", "Matthew", "Nancy", "Donald", "Betty", "Anthony", "Lisa", "Paul",
    "Sandra", "Mark", "Helen", "George", "Donna", "Steven", "Ashley", "Kenneth", "Kimberly", "Andrew", "Carol",
    "Edward", "Michelle", "Brian", "Amanda", "Joshua", "Emily", "Kevin", "Melissa", "Ronald", "Laura", "Timothy",
    "Deborah", "Jason", "Stephanie", "Jeffrey", "Rebecca", "Gary", "Sharon", "Ryan", "Cynthia", "Nicholas",
    "Ruth", "Eric", "Kathleen", "Stephen", "Anna", "Jacob", "Shirley", "Larry", "Amy", "Frank", "Angela",
    "Jonathan", "Virginia", "Scott", "Brenda", "Justin", "Pamela", "Raymond", "Catherine", "Brandon", "Katherine",
    "Gregory", "Nicole", "Samuel", "Christine", "Patrick", "Janet", "Benjamin", "Debra", "Jack", "Carolyn",
    "Dennis", "Samantha", "Jerry", "Rachel", "Alexander", "Heather", "Tyler", "Maria", "Douglas", "Diane",
    "Henry", "Frances", "Peter", "Joyce", "Walter", "Julie", "Aaron", "Martha", "Jose", "Joan", "Adam", "Evelyn",
    "Harold", "Kelly", "Zachary", "Christina", "Nathan", "Emma", "Carl", "Lauren", "Kyle", "Alice", "Arthur",
    "Judith", "Gerald", "Marie", "Lawrence", "Doris", "Roger", "Ann", "Albert", "Jean", "Keith", "Victoria",
    "Jeremy", "Cheryl", "Terry", "Megan", "Joe", "Kathryn", "Sean", "Andrea", "Willie", "Jacqueline", "Jesse",
    "Gloria", "Ralph", "Teresa", "Billy", "Janice", "Austin", "Sara", "Bruce", "Rose", "Christian", "Julia",
    "Roy", "Hannah", "Bryan", "Theresa", "Eugene", "Judy", "Louis", "Mildred", "Harry", "Grace", "Wayne",
    "Beverly", "Ethan", "Denise", "Jordan", "Marilyn", "Russell", "Amber", "Alan", "Danielle", "Philip", "Brittany",
    "Randy", "Diana", "Juan", "Jane", "Howard", "Lori", "Vincent", "Olivia", "Bobby", "Tiffany", "Dylan",
    "Kathy", "Johnny", "Tammy", "Phillip", "Crystal", "Craig", "Madison"
  ],

  // Top 1000 last names, from the census:
  last_name : [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
    "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White",
    "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young",
    "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez",
    "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins",
    "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson",
    "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood",
    "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster",
    "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry",
    "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton",
    "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez",
    "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison",
    "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington",
    "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter",
    "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson",
    "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt",
    "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens",
    "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant",
    "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson",
    "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Ray", "Lane", "Riley", "Carpenter", "Perkins",
    "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins",
    "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz",
    "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert",
    "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett",
    "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields",
    "Walsh", "Little", "Fowler", "Bowman", "Davidson", "May", "Day", "Schneider", "Newman", "Brewer", "Lucas",
    "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas",
    "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega",
    "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez",
    "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado",
    "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn",
    "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale",
    "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann",
    "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein",
    "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Le", "Griffith", "Bowen",
    "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel",
    "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin",
    "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner",
    "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter",
    "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd",
    "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran",
    "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend",
    "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters",
    "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan",
    "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick",
    "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope",
    "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis",
    "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre",
    "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Li",
    "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas",
    "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon",
    "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole",
    "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers",
    "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs",
    "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony",
    "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison",
    "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda",
    "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison",
    "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Roy",
    "Boyer", "Shields", "Lin", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish",
    "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas",
    "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Liu", "Walter", "Mcdowell", "Wiley", "Rich",
    "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan",
    "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner",
    "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Wu", "Zamora", "Macdonald", "Vance",
    "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard",
    "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Lam", "Yoder",
    "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Orr", "Berger", "Mckee",
    "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez",
    "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck",
    "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon",
    "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie",
    "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw",
    "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Ho", "Pennington",
    "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez",
    "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan",
    "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan",
    "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender",
    "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah",
    "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Fry", "Rush", "Avery", "Herring", "Dodson",
    "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay",
    "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard",
    "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Yu", "Woodward", 
    "Ali", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt",
    "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce",
    "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano",
    "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson",
    "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland",
    "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper",
    "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs",
    "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez",
    "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney",
    "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Gay", "Riddle", "Haney", "Kaiser", "Holder", "Chaney",
    "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea",
    "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Key", "Cooke"
  ]
};


var sentence_formats = [
  "What we need to do is {verb} {adjective} {noun}{terminal}",
  "How about we {verb} {adjective} {noun}?",
  "Why don't we try to {verb} {adjective} {noun}?",
  "Why don't we try and {verb} {adjective} {noun}?",
  "I feel that we need to {verb} {adjective} {noun}{terminal}",
  "We need to schedule a meeting to try and {verb} {adjective} {noun}{terminal}",
  "It's essential that we {verb} {adjective} {noun}{terminal}",
  "Our first priority is to {verb} {adjective} {noun}{terminal}",
  "Let's circle round and {verb} {adjective} {noun}{terminal}",
  "Let's {verb} {adjective} {noun}{terminal}"
];

var quote_intro_formats = [
  "What attracted us to {company} is how they {verb} {adjective} {noun}.",
  "Before {company}, we thought it was impossible to {verb} {noun}, but they found a way that is both {adjective} and {adjective}, yet still {adjective}.",
  "{company} is a key partner for us.",
  "{company} is the best source for {adjective} {noun}.",
  "When I think of {company}, I think of {adjective}, {adjective}, and {adjective} {noun}.",
  "Everything about {company} is {adjective}, from their {noun} to their {noun}.",
  "What I like about {company} is how {adjective} their {noun} are.",
  "Now, let's take {company}, for example. That's a group that knows how to {verb} {noun}.",
  "{company} is the {adjective} {noun} authority.",
  "Our company needs to {verb} {adjective} {noun} regularly. {company} makes that possible."
];

var quote_ending_formats = [
  "Nobody can {verb} {adjective} {noun} quite like them.",
  "We use them any time we need to {verb} {noun}.",
  "I've never seen such {adjective} {noun}.",
  "Everything about them is {adjective}.",
  "They are adamant about making {noun} {adjective}, {adjective}, and {adjective}."
];

var paragraph_lead_formats = [
  "Our ultimate goal is to {verb} {adjective} {noun}{terminal}",
  "It's our top priority to {verb} {adjective} {noun}{terminal}",
  "We're all about letting you {verb} {adjective} {noun}{terminal}",
  "We're here to help you {verb} {adjective} {noun}{terminal}",
  "We know you want to {verb} {adjective} {noun}{terminal}",
  "As a Power-User, you want to {verb} {adjective} {noun}{terminal}",
  "We all need to {verb} {adjective} {noun}{terminal}",
  'We offer {adjective} {noun}{terminal}'
];

var paragraph_mid_a_formats = [
  'We do this with {adjective} {noun}.',
  'This enables you to {verb} {adjective} {noun}.',
  'Then, you can {verb} {noun} while you {verb} {noun}.',
  'This enables you to {verb} {noun} while maintaining {adjective} {noun}.',
  'This puts the {adjective} back in {noun}.',
  'By putting {adjective} {noun} in {adjective} {noun}, we can {verb} {noun} and {verb} {noun} at the same time.',
  'Talk about {adjective} {noun}!',
  'What this does is {verb} {adjective} {noun}.',
  'It\'s our {adjective} {noun} that let you {verb} {noun} in a way that is completely {adjective}.',
  'I mean, when\'s the last time you said you could truely {verb} {adjective} {noun} in a way that is {adjective}?',
];

var paragraph_mid_b_formats = [
  'Plus, you can {verb} {adjective} {noun}.',
  'Besides, who else can {verb} {adjective} {noun} in a way that is as {adjective}?',
  'What we have then is a {adjective} system for anyone to {verb} {adjective} {noun}.',
  'We can then {verb} {adjective} {noun}.',
  'That is essential for {adjective} solutions that {verb} {adjective} {noun}.'
];


// Random integer in [low, high)
function randint(low, high) {
  if(high <= low + 1) { return low; }
  var range = high - low;
  return Math.floor(Math.random()*range) + low;
}
 
// In-place Fisher-Yates shuffle algorithm:
function shuffleArray(a) {
  for(var i=0; i<a.length-1; i++) {
    var j = randint(i, a.length);
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
}


function RandomizedWordList(custom_lookups) {
  var data = this.data = {};
  this.hardcoded = custom_lookups || {};

  Object.keys(_word_lists).forEach(function (key) {
    data[key] = _word_lists[key].slice(0);
    shuffleArray(data[key]);
  });
}

RandomizedWordList.prototype.getWord = function getWord(type) {
  
  type = (type || "").toLowerCase();

  // Quickly handle the hard-coded values:
  if ( this.hardcoded[type] ) { return this.hardcoded[type]; }

  // Then handle terminals:
  if ( type === "terminal" ) { return (Math.random() < 0.3) ? '!' : '.'; }

  // Else, fall back on the BS word list
  if ( ! (type in this.data) )        { return ""; }
  if ( this.data[type].length === 0 ) { return ""; }

  // Nouns have a random chance to gain an 'e-' prefix:
  var out = this.data[type].pop();
  if (type === 'noun' && Math.random() < E_PREFIX_RATE && out.indexOf("e-") != 0) {
    out = "e-" + out;
  }

  return out;
}

var paragraph_mid_formats = [paragraph_mid_a_formats, paragraph_mid_b_formats];

function expandBSFormat(word_source, format) {
  
  return format.replace(/\{[-_a-z]+?\}/ig, function (type) {
    type = type.slice(1, -1);

    return word_source.getWord(type);
  });
}

function pickOne(list) {
  var idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

const getSentence = () =>{
  var word_source = new RandomizedWordList();
  var our_format  = pickOne(sentence_formats);
  return expandBSFormat(word_source, our_format);
}

function getParagraph() {
  var word_source = new RandomizedWordList();
  
  var lead_format = pickOne(paragraph_lead_formats);
  var paragraph = [ expandBSFormat(word_source, lead_format) ];
  
  var num_sentences = Math.floor(Math.random() * 2) + 2;
  for (var i=0; i<num_sentences; i++) {
    var fmt_group = paragraph_mid_formats[ i % paragraph_mid_formats.length ];
    var fmt = pickOne( fmt_group );
    paragraph.push(expandBSFormat(word_source, fmt));
  }

  return paragraph.join(" ");
}

function getQuote(company_name) {
  company_name = company_name || "Initrode";

  var word_source = new RandomizedWordList({company: company_name});
  var lead_format = pickOne(quote_intro_formats);
  var exit_format = pickOne(quote_ending_formats);

  var blurb = [ lead_format, exit_format ].map(function (fmt) { return expandBSFormat(word_source, fmt); }).join(" ");
  return blurb.trim();
}

function getName() {
  var name_fmt = "{first_name} {last_name}";
  var word_source = new RandomizedWordList();
  return expandBSFormat(word_source, name_fmt);
}

//module.exports.getSentence  = getSentence;
//module.exports.getParagraph = getParagraph;
//module.exports.getQuote     = getQuote;
//module.exports.getName      = getName;

export { getSentence }