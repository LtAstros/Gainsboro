var perClick = {
    pollution: 1,
    energy: 1,
};
var total = {
    pollution:50,
    energy:10,
};
//----------------------------------------------------
function increasePerClick(energy,pollution){
    perClick.pollution += pollution;
    perClick.energy += energy;
}

function purchase(cost, energy, pollution){
       if (total.energy >= cost){
           total.energy -= cost;
           increasePerClick(energy,pollution);
           updateValues();
           return true;
       }
       return false;
}

function increaseTotalPerClick() {
    total.pollution += perClick.pollution;
    total.energy += perClick.energy;
    updateValues();
}

function updateValues() {
    $('#totalEnergyValue').html(total.energy);
    $('#totalPollutionValue').html(total.pollution);
    $('#energyPerClick').html(perClick.energy);
    $('#pollutionPerClick').html(perClick.pollution);
}

//----------------------------------------------------

$("#earth").click(increaseTotalPerClick);
    
//----------------------------------------------------

$('#buyCoal').click(function(){
    purchase(5,2,1);
});

$('#buySolar').click(function(){
    purchase(20,2,0);
});

$('#buyAirFilter').click(function(){
    purchase(50,0,-1);
});

updateValues();