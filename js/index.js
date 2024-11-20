var quoteArray = [
    '“Two things are infinite: the universe and human stupidity and I\'m not sure about the universe.” <br/> ― Albert Einstein',
    '“You only live once, but if you do it right, once is enough.” <br/> ― Mae West',
    '“Be the change that you wish to see in the world.” <br/> ― Mahatma Gandhi',
    '“In three words I can sum up everything I\'ve learned about life: it goes on.” <br/> ― Robert Frost',
    '“If you tell the truth, you don\'t have to remember anything.” <br/> ― Mark Twain',
    '“I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” <br/> ― Maya Angelou'
];

var xArray = [];

function getQuote() {
    if (xArray.length === quoteArray.length) {
        xArray = [];
    }

    var x;
    do {
        x = Math.floor(Math.random() * quoteArray.length);
    } while (xArray.includes(x));

    document.getElementById('quote').innerHTML = quoteArray[x];

    xArray.push(x);
}


