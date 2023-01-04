const playerNames =[]

// get player field value
function getPlayerNameById(playerFieldId){
   const playerName = document.getElementById(playerFieldId);   

   let playerNameElement= playerName.innerText;
   playerName.value = ''
   const player = playerNames.length+1 <= 5
   if(player){

      playerNames.push(playerNameElement)
      selectPlayer(playerNameElement)
   }else{
      alert('This is player is over')
   }

   return playerNameElement;   

   
   // inputField.value = '';
}

// 
function getTextElementValueById(playerId){
   const textElement = document.getElementById(playerId);
   const textElementValueString = textElement.innerText;
   const  textElementValue = parseFloat(textElementValueString);
   return textElementValue;
}

// 
function selectPlayer(selectAllPlayers) {

    const container = document.getElementById('selectAllPlayer')  
         const div = document.createElement('div')
         div.innerHTML = `
         <li>${selectAllPlayers}</li>
     `
         container.appendChild(div)
  
 }
