//var speechParagraph = document.getElementById('speech');
//var speechPar2 = document.getElementById('speech2');


function changeSpeech() {
    var speechParagraph = document.getElementById('speech');
    var speechPar2 = document.getElementById('speech2');
    speechParagraph.innerHTML = "It changed the stuff.";
    speechPar2.innerHTML = "Hey I also changed this stuff.";
}

function yo() {
    window.alert("You did a thing");
}


function changeAlert() {
    //this is an event handler
    //they often follow a pattern
    //select an element from the DOM
    //changes the element
    //how can we make this add a class to the button when clicked?
    var speechParagraph = document.getElementById('speech');
    speechParagraph.className = 'alert alert-success';
}




function randomFactButton() {
    var facts = ["I have a biology degree.",
     "I love sushi!",
     "I almost drowned when I was 7.",
    "I owned three red Ford tempos in a row.",
    "I make and sell jewelry and sculpture.",
    "I really like to wear hats.",
    "I am interested in game development.",
    "I have played the piano and violin (but not very well)",
    "I love to identify wild plants!",
    "I teach the pre-primary kids in Sunday school.",
    //extraneous commas don't hurt arrays! Cool fact.
    "I play a lot of board games.",];

    var lotsOfRand = facts.length;
    var newFact = document.getElementById('factlet');
    //so what if we want it to NOT use the same quote 2x in a row?
    var currentQuote = newFact.innerHTML;
    //do {
    var Rand = Math.floor(Math.random() * lotsOfRand);

    //}
    //while (newFact == currentQuote);

        newFact.innerHTML = facts[Rand];

}


