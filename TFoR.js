var perClick = {
    pollution: 1,
    energy: 1
};
var total = {
    pollution:50,
    energy:10
};

var items = {
    coal: {
        cost: 5,
        energy: 2,
        pollution: 1,
        total: 0
        },
    solar: {
        cost: 20,
        energy: 2,
        pollution: 0,
        total: 0
    },
    filter: {
        cost: 50,
        energy: 0,
        pollution: -1,
        total: 0
    }
};
//----------------------------------------------------
function increasePerClick(energy,pollution){
    perClick.pollution += pollution;
    perClick.energy += energy;
}

function purchase(itemName){
    var item = items[itemName];
       if (total.energy >= item.cost){
           total.energy -= item.cost;
           increasePerClick(item.energy,item.pollution);
            item.total += 1;
           updateValues();
           return true;
       }
       return false;
}

function increaseTotalPerClick() {
    total.pollution += perClick.pollution;
    total.energy += perClick.energy;
    if (total.pollution >= 100) {
        gameOver();
    }
    else if (total.pollution <= 0) {
        gameWin();
    }
    updateValues();
}

function gameOver() {
    $('body').html('');
    $('body').css('background-image','url("https://goo.gl/1kAnVd")');
    $('body').append("<h1>GAME OVER</hi>");
}
function gameWin() {
    $('body').html('');
    $('body').css('background-image','url("https://goo.gl/1kAnVd")');
    $('body').append("<h1>You win</hi>");
}

function updateValues() {
    $('#totalEnergyValue').html(total.energy);
    $('#totalPollutionValue').html(total.pollution);
    $('#energyPerClick').html(perClick.energy);
    $('#pollutionPerClick').html(perClick.pollution);
    $('#coalOwned').html(items.coal.total);
    $('#solarOwned').html(items.solar.total);
    $('#filterOwned').html(items.filter.total);
}

//----------------------------------------------------
function pageload (){
$("#earth").click(increaseTotalPerClick);
    
//----------------------------------------------------

$('#buyCoal').click(function(){
    purchase('coal');
});

$('#buySolar').click(function(){
    purchase('solar');
});

$('#buyAirFilter').click(function(){
    purchase('filter');
});


updateValues();
}
$(document).ready(pageload);