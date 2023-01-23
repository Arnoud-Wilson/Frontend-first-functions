/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name) {
  return "Hoi " + name + "!";
}

const jan= greeter("Jan");
const kees=greeter("Kees");

console.log(jan);
console.log(kees);


/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(minute) {
  return minute * 60;
}

const one= minutesToSeconds(1);
const three= minutesToSeconds(3);
const twentyThree= minutesToSeconds(23);

console.log(one);
console.log(three);
console.log(twentyThree);

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge(one, two) {
  return one + two;
}

const abaCadebra= merge("abra", "cadabra");
const zoetSappig= merge("zoet", "sappig");

console.log(abaCadebra);
console.log(zoetSappig);


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(age) {
  return "Jouw hond is " + age * 7 + " jaar oud in mensenjaren.";
}

const six= calculateDogYears(6);
const two= calculateDogYears(2);

console.log(six);
console.log(two);

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper(word, sign) {
  return sign + word + sign;
}

const glasses= wrapper("bril", "*");
const beep= wrapper("beep", "_");
const cheese= wrapper("kaas", "Q");

console.log(glasses);
console.log(beep);
console.log(cheese);

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

function createDetailString(fistName, lastName, profession) {
  return "Het beroep van " + fistName + " " + lastName + " is " + profession + ".";
}

const janJanssen= createDetailString("Jan", "Janssen", "docent");

console.log(janJanssen);