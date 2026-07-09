const quoteText = document.getElementById("quote");
const author = document.getElementById("author");

const newQuote = document.getElementById("newQuote");
const copyQuote = document.getElementById("copyQuote");
const shareQuote = document.getElementById("shareQuote");



const quotes = [

{
    quote:"Success is not final, failure is not fatal.",
    author:"Winston Churchill"
},

{
    quote:"Dream big and dare to fail.",
    author:"Norman Vincent Peale"
},

{
    quote:"The future depends on what you do today.",
    author:"Mahatma Gandhi"
},

{
    quote:"Don't watch the clock; do what it does. Keep going.",
    author:"Sam Levenson"
},

{
    quote:"Hard work beats talent when talent doesn't work hard.",
    author:"Tim Notke"
},

{
    quote:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt"
}

];



function showQuote(){


    let random = Math.floor(
        Math.random()*quotes.length
    );


    quoteText.innerText =
    `"${quotes[random].quote}"`;


    author.innerText =
    "- " + quotes[random].author;



    localStorage.setItem(
        "lastQuote",
        JSON.stringify(quotes[random])
    );


}




function loadQuote(){

    let saved =
    JSON.parse(localStorage.getItem("lastQuote"));


    if(saved){

        quoteText.innerText =
        `"${saved.quote}"`;

        author.innerText =
        "- " + saved.author;

    }

    else{

        showQuote();

    }

}




copyQuote.addEventListener("click",()=>{


    let text =
    quoteText.innerText + " " + author.innerText;


    navigator.clipboard.writeText(text);


    alert("Quote copied!");

});





shareQuote.addEventListener("click",()=>{


    let text =
    quoteText.innerText + " " + author.innerText;


    if(navigator.share){

        navigator.share({

            text:text

        });

    }

    else{

        alert("Sharing not supported");

    }


});




newQuote.addEventListener(
    "click",
    showQuote
);



loadQuote();