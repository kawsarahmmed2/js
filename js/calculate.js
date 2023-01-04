// calculate  player  expenses
document.getElementById('players-calculate').addEventListener('click', function(){
    
    const perPlayerField = document.getElementById('per-player-field');
    const singlePlayerString = perPlayerField.value;
    const singlePlayer = parseFloat(singlePlayerString);    

    // single player cost
    const player = playerNames.length
    const PlayerCost = singlePlayer * player;   

    // 

    const textElement = document.getElementById('players-total');
    textElement.innerText = PlayerCost; 

})
document.getElementById('total-cost-button').addEventListener('click', function(){
    const managerField = document.getElementById('manager-field');
    const managerString = managerField.value;
    const manager = parseFloat(managerString);
    console.log(manager)

    //  coach
    const coachField = document.getElementById('coach-field');
    const coachString = coachField.value;
    const coach = parseFloat(coachString);
    console.log(coach)

    //  total cost 
    const textElement = document.getElementById('players-total');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString)
    console.log(textElementValue);

    const total = manager + coach + textElementValue;
    
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = total; 


    
})

// document.getElementById('players-total').addEventListener('click', function(){
//     const perPlayerField = document.getElementById('per-player-field');
//     const singlePlayerString = perPlayerField.value;
//     // const singlePlayer = parseFloat(singlePlayerString);
//     console.log(singlePlayerString);

// })

