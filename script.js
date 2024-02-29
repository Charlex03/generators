let dog = document.getElementById('rwr');
let button = document.getElementById('tiit');

function generator() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        dog.innerHTML = `<img src ="${data.message}" style=
        "width: 250px; 
        height: 270px; 
        margin-top: 10px;
        border-radius: 3px;
        "/>`;
    });
    
}
button.addEventListener(`click`, generator);

let cat = document.getElementById('meow');
let button2 = document.getElementById('tiit2');

function generator2() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        const catImage = data[0].url;
        cat.innerHTML = `<img src="${catImage}" style=
        "width: 250px; 
        height: 270px; 
        margin-top: 10px;
        border-radius: 3px;
        "
        />`;
    });

}
button2.addEventListener(`mouseover`, generator2);

let quotes = document.getElementById('kuts');
let button3 = document.getElementById('tiit3');

function generate3() {
    fetch("http://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            let quote = data.content;
            let author = data.author;

            quotes.innerHTML = `<blockquote>
                <p>${quote}</p>
                <p><strong>${author}<strong></p>
            </blockquote>`;
        });
}

button3.addEventListener('click', generate3);



