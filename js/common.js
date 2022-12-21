const playerNames =[]


function getPlayerNameById(playerId){
   const playerName = document.getElementById(playerId);
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
}

// 
function selectPlayer(selectAllPlayers) {

    const container = document.getElementById('selecteAllPlayer')  
         const div = document.createElement('div')
         div.innerHTML = `
         <li>${selectAllPlayers}</li>
     `
         container.appendChild(div)
  
 }