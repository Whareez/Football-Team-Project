"use strict"

document.querySelector('.submit').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    document.querySelector('.btn--ROLL').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      
      if(!guess){
        document.querySelector('.deliver').textContent = "We need your details before you can spin"     
      } 
    })
    

    const fullName = document.getElementById('myName').value

    if(!guess){
        document.querySelector('.message').textContent = "INVALID Details"     
    }  else if(guess && !fullName){
       document.querySelector('.message').textContent = "We need your full name"
    
    }  else if(fullName && !guess){
       document.querySelector('.message').textContent = "We need the players' census"
    }
    
    else if(guess){
      document.querySelector('.message').textContent = `Dear Mr ${fullName} Welcome to today's football match, We have ${guess} players for today's team selection. Let's get started!!!`     
    }  

    else if(!fullName){
      document.querySelector('.message').textContent = "We need your full name"
    }
    
  })



  const players = document.getElementsByClassName('guess');
  const mine  = document.getElementsByClassName('myDetails')


                                //1
  // const totalPlayers = players.lengt
  //  teams.length = 4

  // set = players[teams]/4
  // let numOfPlayersSet = 4
  // const generateTeamsof4 = function(players){  
  //     let randomPlayer = random(0, players.length-1)
  //     let randomTeamPlayer = players[randomPlayer]
  //     return randomTeamPlayer
  //     let set = players.length/4
  //     if (set >=2 && set <=4){

  //     }
  //     };
  //     for(let i =0; i < totalPlayers.length/4 ; i++)
  //       {
  //         teams.push(generateTeamsof4());
            
  //         console.log(teams);


                  //2
// let users = [];
// function collectUsers(){
//    const players = document.getElementsByClassName('guess');
//     const mine  = document.getElementsByClassName('myDetails') 
//     const division = divideUsersIntoGroups(users)
// }
// users.push(players, mine)


// function divideUsersIntoGroups(users){
//     const players  = shuffleArray(users) 
//     const groups = []
//     for (let i = 0; i < 4; i++){
//       groups.push(shuffledUsers.slice(i*Math.ceil(shuffledUsers.length /4),(i + 1)*Math.ceil(shuffledUsers.length /4 )))
//     }

//     displayGroups(groups)
// }

// function shuffleArray(array){
//   return array.sort(() => Math.random () - 0.5)
// }

// function displayGroups(groups){
//   let groupNumber = 1;
//   groups.forEach((group) => {
//     console.log(`Group ${groupNumber}) : ${group.join(", ")}`) ;
//     groupNumber++
//   });
// }

// collectUsers()

          ///3
// const players = []
// const groups = [[], [], [], []]

// btnRoll.addEventListener('click', function(){
//     if(players.length > 0){
//       players.forEach((player) => {
//         let dice = Math.trunc(Math.random() * 4) + 1;
//         groups[dice].push(player)
//       })
//         let groupPLayer = ""
//         groups.forEach((group, index) => {
//           groupPLayer += `Group ${index + 1} : ${Group.join(',')}`
//         })
//         groupsDiv
//     }
// }

                  //4
// const nameInput = document.getElementsByClassName('fullName');
// const getTeams = document.getElementsByClassName('btn--ROLL');
// const groupsDiv = document.getElementById('groups');
// const users = [];
// const groups = [[], [], [], []];


// divideBtn.addEventListener('click', function() {
//   if (users.length > 0) {
//     groups.forEach((group) => group.length = 0);
    
//     users.forEach((user) => {
//       const randomNumber = Math.floor(Math.random() * 4);
//       groups[randomNumber].push(user);
//     });
    
//     let groupHtml = '';
//     groups.forEach((group, index) => {
//       groupHtml += `Group ${index + 1}: ${group.join(', ')}<br>`;
//     });
//     groupsDiv.innerHTML = groupHtml;
//   }
// });






let playing = true
const diceEL = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--ROLL')
btnRoll.addEventListener('click', function () {
    if(playing){
    let dice = Math.trunc(Math.random() * 4) + 1;
    document.getElementById('dicey').style.display ='none'
    diceEL.src = `dice-${dice}.png`;
    this.disabled = true
  
    let fullName = document.getElementById('myName').value
  
    if (dice === 1) {  
      document.querySelector('.deliver').textContent = `Dear Mr ${fullName}, Congratulations!!! You belong to Team-${dice}`
    }  else if(dice == 2) {
      document.querySelector('.deliver').textContent = `Dear Mr ${fullName}, Congratulations!!! You belong to Team-${dice}`
}    else if(dice == 3) {
      document.querySelector('.deliver').textContent = `Dear Mr ${fullName}, Congratulations!!! You belong to Team-${dice}`}
     else if(dice == 4) {
      document.querySelector('.deliver').textContent = `Dear Mr ${fullName}, Congratulations!!! You belong to Team-${dice}`}
    }

    document.querySelector('.btn--ROLL').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      
      if(!guess){
        document.querySelector('.deliver').textContent = "We need your details before you can spin"     
      } 
    })
  })
  




        
