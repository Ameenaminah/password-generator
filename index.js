const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxOne = document.getElementById("box1");
let boxTwo = document.getElementById("box2");
let boxMain = document.getElementById("box-main")



function getRandomCharacter() {
    let randomPassword = Math.floor(Math.random() * characters.length)
    return characters[randomPassword]
}

function generateRandomPassword() {
    boxOne.textContent = "";
    boxTwo.textContent = "";
    for (let i = 0; i < 10; i++) {
        boxOne.textContent += getRandomCharacter(); 
        boxTwo.textContent += getRandomCharacter();      
    }
    

}

