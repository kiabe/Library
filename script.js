let gameLibrary = [];

function Game(name, genre, multiplayer) {
    this.name = name
    this.genre = genre
    this.multiplayer = multiplayer
    this.dataID = undefined
}

Game.prototype.sayName = function () {
    return this.name;
};

Game.prototype.sayGenre = function () {
    return this.genre;
};

Game.prototype.isMultiplayer = function () {
    return this.multiplayer;
};

Game.prototype.whatIsDataId = function () {
    return this.dataID;
}

function addDataId() {
    // add dataID
    let libraryCount = gameLibrary.length;
    let gameNodes = document.querySelectorAll('.game');
    let gameCount = gameNodes.length;
    let removeNodes = document.querySelectorAll('.remove');
    let removeCount = removeNodes.length;

    for (let i = libraryCount; i < libraryCount + 1; i++) {
        gameLibrary[i - 1].dataID = i - 1;
        removeNodes[i - 1].dataset.id = i - 1;
    }
} 

function addGameToLibrary(Game) {
    // add game to library array, add DataID, and create a case with it
    gameLibrary.push(Game);
    createGameCase();
    addDataId();
    console.log(gameLibrary);
}

// DOM Variable Selectors
const shelf = document.querySelector('#shelf');
const button = document.querySelector('#button');

// DOM Stuff
function createGameCase() {
    // create game div and have it contain a singular ul and a remove button

    const gameCase = document.createElement('div');
    const ul = document.createElement('ul');

    gameCase.classList.add('game');
    shelf.appendChild(gameCase);
    gameCase.appendChild(ul);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    gameCase.appendChild(remove);

    remove.addEventListener('click', removeGame);
}

function labelGameCase() {
    // Prints on to .game div that label cases with the following: name, genre, and whether it is multiplayer or not
    // bullet points are printed in Lis

    const ulNodes = document.querySelectorAll('ul');
    const ulCount = ulNodes.length;

    for (let i = ulCount; i < ulCount + 1; i++) {
        for (let j = 0; j < 3; j++) {
            const li = document.createElement('li');
            ulNodes[i - 1].appendChild(li)
            if (j === 0) {
                li.textContent = "Name of game: " + gameLibrary[i - 1].name;
            } else if (j === 1) {
                li.textContent = "Genre: " + gameLibrary[i - 1].genre;
            } else if (j === 2) {
                li.textContent = "Is this multiplayer? : " + gameLibrary[i - 1].multiplayer;
            }
        }
    }
}

// DOM Button Stuff
const newGameButton = document.createElement('button');
newGameButton.setAttribute('id', 'newGameButton');
newGameButton.textContent = 'Add New Game to Library';
button.appendChild(newGameButton);

// New Game Button function

newGameButton.addEventListener('click', buttonFunction)

function buttonFunction() {
    let Placeholder;
    let questionOne = prompt("What is the game's name?");
    let questionTwo = prompt("What is the game's genre?");
    let questionThree = prompt("Is this game multiplayer? True or False?");

    if (questionOne !== null && questionTwo !== null && questionThree !== null) {
        Placeholder = new Game(questionOne, questionTwo, questionThree);
        addGameToLibrary(Placeholder);
        labelGameCase();
    };
};

const removeGame = e => {
    let targetIdNumber = parseInt(e.target.dataset.id);
    let gameNodes = document.querySelectorAll('.game');
    console.log(targetIdNumber);
    console.log(typeof(targetIdNumber));
    if (targetIdNumber === gameLibrary[targetIdNumber].dataID) {
        gameLibrary.splice(targetIdNumber, 1);
        gameNodes[targetIdNumber].remove();
        addDataId();
    };
};