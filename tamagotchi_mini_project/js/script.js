// alert("Am I working?")


//Create Class for Tamagotchi
class Tamagotchi {
    constructor(name, age, fullness, energy, happiness) {
        this.name = name
        //age needs to increase over time
        this.age = age
        //hunger 0=hungry, 10=full/not hungry
        this.fullness = fullness
        //sleepiness 0=sleepy, 10=full energy
        this.energy = energy
        //boredom 0=bored, 10=full happiness
        this.happiness = happiness
    }
    //create a selectable element for each method
    //method to change default name to any name user wants
    rename(){
        prompt()
    }
    //pet says their age and levels of hunger,sleepiness,energy,etc.
    sayStats() {
        console.log(`Hello! I'm ${this.name}!`)
    }
    
    //increase fullness
    feed() {

    }
    //lights should trigger sleeping, increasing energy
    lights() {

    }
    //increase happiness
    play() {

    }
    //if hunger,sleepiness,boredom = 0, tamagotchi runs away, prompt restart
    runAway() {

    }
    //while loop shows aging over time
    time() {

    }
    //if time played is over > x amount, age = certain amount then prompt evolve pet
    evolve() {

    }
}

// class Evolution extends Tamagotchi {
//     constructor() {
        
//     }
// }


//Instantiate (create object from the class) tamagotchi
const appleCat = new Tamagotchi ("Meowple", 1, 5, 5, 5)
const  bananaCat = new Tamagotchi ("Nyanner", 1, 10, 10, 10)
//select between Meowple and Nyanner
//allow player to rename

// appleCat.sayStats()
// bananaCat.sayStats()




//Set variables to the element items. Action buttons and their images
//STRUGGLE: Don't include . or # when calling the element inside the () using getElement 
const selectorButton = document.getElementById("selector");
const tamaStats = document.getElementById("tamaStats");
const tamaPlay = document.getElementById("tamaPlay");
const tamaEat = document.getElementById("tamaEat");
const tamaSleep = document.getElementById("tamaSleep");
const tamaLove = document.getElementById("tamaLove");

//clicking tamaStar button
tamaStats.addEventListener("click", function() {
    sayStats();
});





//Trying another method, create an array of the action button IDs. 

const actionIds = ["tamaStats", "tamaPlay", "tamaEat", "tamaSleep", "tamaLove"];
//Always have it start at index 0 
let actionIndex = 0;


selectorButton.addEventListener("click", function() {
    actionIds.forEach(id => {
        document.getElementById(id).style.outlineColor = "rgba(0, 0, 0, 0)";
    });
    //add the above function to make the outline color go back after we move to the next element

    //for each index in the array, change the outline color
    document.getElementById(actionIds[actionIndex]).style.outlineColor = "rgb(226, 226, 226)";
        //loop back to the beginning of array, after reaching the end
    actionIndex = (actionIndex + 1) % actionIds.length;
});

//Create a click event that will iterate through with each click and change their outline color at the same time.
// selectorButton.addEventListener("click", ()=> {
//     const highlightedIcon = actionIds[actionIndex];
//     const selection = document.getElementById(highlightedIcon);
//     selection.style.outlineColor = selection.style.outlineColor ""


//Attempt with for loop and conditional
// selectorButton.addEventListener("click", ()=>{
//     for (i = 0, i < actionIds.length ; i++; ) {
//         if (actionIds[i] = "tamaStats") {
//             tamaStats.style.outlineColor = "rgb(226, 226, 226)";
//         } else if (actionIds[i] = "tamaPlay") {
//             tamaPlay.style.outlineColor = "rgb(226, 226, 226)";
//         } else if (actionIds[i] = "tamaEat") {
//             tamaEat.style.outlineColor = "rgb(226, 226, 226)";
//         } else if (actionIds[i] = "tamaSleep") {
//             tamaSleep.style.outlineColor = "rgb(226, 226, 226)";
//         } else if (actionIds[i] = "tamaLove") {
//             tamaLove.style.outlineColor = "rgb(226, 226, 226)";
//         } else {
            
//         }
//     }
// })

// let highlightIcon = false;

// selectorButton.addEventListener("click", ()=> {
//     if (highlightIcon) {
//         tamaStats.style.backgroundColor = "";
//         tamaEat.style.backgroundColor = "";
//         tamaSleep.style.backgroundColor = "";
//         tamaLove.style.backgroundColor = "";
//         tamaPlay.style.backgroundColor = "rgb(226, 226, 226)";
//     } else {
//         tamaStats.style.backgroundColor = "rgb(226, 226, 226)";
//         tamaPlay.style.backgroundColor = "";
//     }
//     highlightIcon = !highlightIcon;
// });







//Button to show/hide the Tamagotchi Button Key
// function hideAnimation() {
// }
// document.getElementById("hideKey").addEventListener("click", hideAnimation())



//Extras
//At max age - Give Birth

//Powers???

//Exercise

//Others of your liking - thinking wash/cleaning, play would decrease cleanliness, wash would increase cleanliness and happiness



