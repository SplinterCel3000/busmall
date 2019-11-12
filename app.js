'use strict';

var pictureStorage = [];
var randomPictures = [];
var clickCounter = 0;
var MAX_CLICKS = 25;

function getRandomPicture(){
    return Math.floor(Math.random() *(pictureStorage.length));
}

function selectAndRender(){
    randomPictures = [];

    while(randomPictures.length < 3){
        var nextValue = getRandomPicture();

        if(!randomPictures.includes(nextValue)){
            randomPictures.push(nextValue);
        }
    }

    var placeholder0 = document.getElementById('placeholder-0');
    var placeholder1 = document.getElementById('placeholder-1');
    var placeholder2 = document.getElementById('placeholder-2');
    

    pictureStorage[randomPictures[0]].render(placeholder0);
    pictureStorage[randomPictures[1]].render(placeholder1);
    pictureStorage[randomPictures[2]].render(placeholder2);

}

var Picture = function(name, picture){
    this.name = name;
    this.picture = picture;
    this.timesClicked = 0;
    this.timeShown = 0;

    this.clicks = function(){
        this.timesClicked++;
    }

    this.render = function(domReference){
        domReference.src = picture;
    }
    pictureStorage.push(this);
}

var bag = new Picture('bag', './assets/bag.jpg');
var banana = new Picture('banana', './assets/banana.jpg');
var bathroom = new Picture('bathroom', './assets/bathroom.jpg');
var boots = new Picture('boots', './assets/boots.jpg');
var breakfast = new Picture('breakfast', './assets/breakfast.jpg');
var bubblegum = new Picture('bubblegum', './assets/bubblegum.jpg');
var chair = new Picture('chair', './assets/chair.jpg');
var cthulhu = new Picture('cthulhu', './assets/cthulhu.jpg');
var dogduck = new Picture('dog-duck', './assets/dog-duck.jpg');
var dragon = new Picture('dragon', './assets/dragon.jpg');
var pen = new Picture('pen', './assets/pen.jpg');
var scissors = new Picture('scissors', './assets/scissors.jpg');
var shark = new Picture('shark', './assets/shark.jpg');
var sweep = new Picture('sweep', './assets/sweep.png');
var tauntaun = new Picture('tauntaun', './assets/tauntaun.jpg');
var unicorn = new Picture('unicorn', './assets/unicorn.jpg');
var watercan = new Picture('water-can', './assets/water-can.jpg');
var wineglass = new Picture('wine-glass', './assets/wine-glass.jpg');
var usb = new Picture('usb', './assets/usb.gif');
var petsweep = new Picture('pet-sweep', './assets/pet-sweep.jpg');

function clickManager(event){
    clickCounter++;
    if(clickCounter < MAX_CLICKS){
        var pictureIndex;

        if(event.target.id === 'placeholder-0'){
            pictureIndex = 0;
        } else if(event.target.id === 'placehodler-1'){
            pictureIndex = 1;
        } else {
            pictureIndex = 2;
        }
        var clickedPicture = pictureStorage[randomPictures[pictureIndex]];
        clickedPicture.clicks();

        selectAndRender();
    } else{
        alert('your done');
    }
}

selectAndRender();
//alert('hello');
console.log('hi');

var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');


placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);

console.log();
