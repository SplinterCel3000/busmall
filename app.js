'use strict';

var PICTURE_DATA = 'picture data';
var pictureStorage = [];
var randomPictures = [];
var clickCounter = 0;
var MAX_CLICKS = 25;
// var oldPictures = []


function getRandomPicture(){
    return Math.floor(Math.random() *(pictureStorage.length));
}


var oldPictures = [];
function selectAndRender(){
    randomPictures = [];
    

    while(randomPictures.length < 3 ){
        var nextValue = getRandomPicture();
        // oldPictures.push(nextValue);

        if(nextValue === oldPictures[0] || nextValue === oldPictures[1] || nextValue === oldPictures[2]){
             nextValue = getRandomPicture();
        }

        else if(!randomPictures.includes(nextValue)){
            randomPictures.push(nextValue);
            
        }
        
    }
    oldPictures = randomPictures;
    // console.log(randomPictures);
    // console.log(oldPictures);

    var placeholder0 = document.getElementById('placeholder-0');
    var placeholder1 = document.getElementById('placeholder-1');
    var placeholder2 = document.getElementById('placeholder-2');
    

    pictureStorage[randomPictures[0]].render(placeholder0);
    pictureStorage[randomPictures[0]].timeShown++;
    pictureStorage[randomPictures[1]].render(placeholder1);
    pictureStorage[randomPictures[1]].timeShown++;
    pictureStorage[randomPictures[2]].render(placeholder2);
    pictureStorage[randomPictures[2]].timeShown++





    // console.log(oldPictures);
}

// oldPictures[0] =  pictureStorage[randomPictures[0]];
// oldPictures[1] =  pictureStorage[randomPictures[1]];
// oldPictures[2] =  pictureStorage[randomPictures[2]];


var Picture = function(name, picture){
    this.name = name;
    this.picture = picture;
    //-------------------------------------------------------------------------------------------------
    // this information is what we want to preserve. 
    //-------------------------------------------------------------------------------------------------
    this.timesClicked = 0;
    this.timeShown = 0;

    this.clicks = function(){
        this.timesClicked++;
    }

    this.render = function(domReference){
        domReference.src = this.picture;
    }

    this.loadData = function(data) {
        this.name = data.name; 
        this.picture = data.picture;
        this.timesClicked = data.timesClicked;
        this.timeShown = data.timeShown;
       
        


    }
    // pictureStorage.push(this);
}

if(localStorage.getItem(PICTURE_DATA) === null) {

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


pictureStorage.push(bag);
pictureStorage.push(banana);
pictureStorage.push(bathroom);
pictureStorage.push(boots);
pictureStorage.push(breakfast);
pictureStorage.push(bubblegum);
pictureStorage.push(chair);
pictureStorage.push(cthulhu);
pictureStorage.push(dogduck);
pictureStorage.push(dragon);
pictureStorage.push(pen);
pictureStorage.push(scissors);
pictureStorage.push(shark);
pictureStorage.push(sweep);
pictureStorage.push(tauntaun);
pictureStorage.push(unicorn);
pictureStorage.push(watercan);
pictureStorage.push(wineglass);
pictureStorage.push(usb);
pictureStorage.push(petsweep);
} else {
    var jsonData = localStorage.getItem(PICTURE_DATA);
    var data = JSON.parse(jsonData);

    for(var JSONIndex = 0; JSONIndex < data.length; JSONIndex++){
        var newPicture = new Picture('','');

        newPicture.loadData(data[JSONIndex]);
        pictureStorage.push(newPicture);
    }
}


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
        savePictureDataLocal();
        createSaleChart();
        // alert('your done');
        //finalResult();
        
    }
    
    function savePictureDataLocal() {
        var jsonData = JSON.stringify(pictureStorage);

        localStorage.setItem(PICTURE_DATA, jsonData);
    }
}

selectAndRender();
//alert('hello');
// console.log('hi');

var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');


placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);

// function finale(){
// for(var data = 0; data > pictureStorage.length; data++){
//     var index = `Product name ${pictureStorage[data].name} had ${pictureStorage[data].timesClicked} clicks and was shown ${pictureStorage[data].timeShown} times`
//     document.write(index);
//     document.write("<br>");

// }
// }
// finale();

function finalResult() {
    for (var Index = 0; Index < pictureStorage.length; Index++) {
      var statement = 'The product ' + pictureStorage[Index].name + ' had ' + pictureStorage[Index].timesClicked + ' votes and was shown ' + pictureStorage[Index].timeShown + ' times.\n'
      document.write(statement);
      document.write("<br>");
    }
}

function createSaleChart() {
    var nameArray = [];
    var clickArray = [];
    var showArrary = [];
  
    for(var i = 0; i < pictureStorage.length; i++) {
      nameArray.push(pictureStorage[i].name);
      clickArray.push(pictureStorage[i].timesClicked);
      showArrary.push(pictureStorage[i].timeShown);
    }
  
    var context = document.getElementById('chart').getContext('2d');
    var saleChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: nameArray,
        datasets: [
          {
            label: 'Sale Clicks',
            data: clickArray,
            backgroundColor: 'rgb(255,99,132)',
            borderColor: 'rgb(255,99,132)',
          },
          {
            label: 'Times Shown',
            data: showArrary,
          }
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              }
            },
          ],
        }
      },
    });
  }