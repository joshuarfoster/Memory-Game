const gameContainer = document.getElementById("game");
 
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
 
 
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
 
  return array;
};
 
let shuffledColors = shuffle(COLORS);
 
 
function createDivsForColors(shuffledColors) {
  for (let color of shuffledColors) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.setAttribute('chosen','false')
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
};
let selectedCards= []
let Allselected = []
function handleCardClick(event) {
    let card = event.target
    let status=card.getAttribute('chosen')
   
    //check if selected is already two
        //if selected is already two, break
    if (selectedCards.length !== 2){
       //check if card has already been selected
        //if card has already been selected break
         
       if(card.getAttribute('chosen')==='false'){
            //mark selected and add class
            card.setAttribute('chosen','true');
            card.style.backgroundColor=card.getAttribute('class')
            let c=card.getAttribute('class');
            selectedCards.push(c)
                //check if selected is two
                if (selectedCards.length===2){
                    //if selected is two check for match
                    function reset(){
                      selectedCards.pop();
                        selectedCards.pop()  
                    }
                    if(selectedCards[0]===selectedCards[1]){
                          reset()
                    }
                    else {
                        let allSelected = document.querySelectorAll("[chosen='true']");
                        for (i=0;i<allSelected.length;i++){
                            if ((allSelected[i].getAttribute('class')===selectedCards[0])){
                                allSelected[i].setAttribute('chosen', 'false');
                                let card1= allSelected[i]
                                setTimeout(function(){
                                    card1.style.backgroundColor=''
                                },1000)
                            }else if ((allSelected[i].getAttribute('class')===selectedCards[1])){
                                allSelected[i].setAttribute('chosen', 'false');
                                let card1= allSelected[i]
                                setTimeout(function(){
                                    card1.style.backgroundColor=''
                                },1000)
                        }
                        setTimeout(reset,1000)  
                    }
                    }
                   
                   
                }
                //if cards dont match unselect classes and set selected to 0 after 1000 m
                     
                         
       }
     
         
       
    }
   
   
   
};
 
createDivsForColors(shuffledColors);
 
 
