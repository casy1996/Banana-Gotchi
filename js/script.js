// alert("Am I working?")


//Create Class for Tamagotchi
class Tamagotchi {
    constructor(name, age, happiness, fullness, energy, love) {
        this.name = name
        //age needs to increase over time
        this.age = age
        //boredom
        this.happiness = happiness
        //hunger
        this.fullness = fullness
        //sleepiness
        this.energy = energy
        //love
        this.love = love
        //property for evolution alert, set to false - after method sends alert, value changes to true
        this.evolved = false;
        //force rename() on startup of page
        this.rename();
    }
    // create a selectable element for each method
    // method to change default name to any name user wants
    rename() {
        let newName = prompt("Welcome to Tamagotchi (Banana Cat version). Name your Tamagotchi here; otherwise, skip to keep the name Nyanner. Enjoy!")
        if (newName) {
            this.name = newName;
        }
    }
    //pet says their age and levels of hunger,sleepiness,energy,etc.
    sayStats() {
        gameText.value = (`Hello, I'm ${this.name}. Happiness(${this.happiness}) Fullness(${this.fullness}) Energy(${this.energy}) Love(${this.love}) Age(${this.age})`);

        if (this.happiness < 0 || this.fullness < 0 || this.energy < 0 || this.love < 0) {
            gameText.value = (`${this.name} felt neglected and ran away. Refresh to play again.`);
            //added evolve = true here so that if this runs, tamagotchi can no longer evolve if it hasnt yet. evolve = true makes sure that the !this.evolve is never true
            this.evolved = true;
            nyanner.style.animation = "runaway 1650ms 1";
            nyanner.addEventListener("animationend", ()=> {
                nyanner.style.opacity = 0;
                executorButton.disabled = true;
            })
            // executorButton.disabled = true;
            // meowple.style.opacity = "0";
            alert("Your Tamagotchi ran away. Refresh to restart the game.")
        }
        //if === 20, player may not check stats exactly at 20 so changed to >20
        //need boolean to check if alert was sent.
        if (this.age >= 20 && !this.evolved) {
            this.evolved = true;
            nyanner.style.filter = "hue-rotate(290deg)";
            // meowple.style.filter = "hue-rotate(290deg)";
            tamaSleep.style.opacity = "1"
            alert("Your Tamagotchi evolved!");
        }
        // console.log(`Hello! I'm ${this.name}!`)
    }
    //increase happiness
    play() {
        //conditional so that max stat is 20
        if (this.happiness < 20) {
            this.happiness++;
            gameText.value = (`You played with catch with ${this.name}! Happiness +1 (${this.happiness}/20)`)
        }
        if (this.happiness === 20) {
            gameText.value = (`${this.name} swats the ball away. Take a break for now. (${this.happiness}/20)`)
            nyanner.style.animation = "walk 5250ms 1"
        }
        // console.log(`${this.name}'s happiness went up by 1. Happiness = ${this.happiness += 1}/10`)
        // console.log(`${this.name}'s happiness went up by 1. Happiness = ${this.happiness}`)
    }
    //increase fullness
    feed() {
        //conditional so that max stat is 20
        if (this.fullness < 20) {
            this.fullness++;
            gameText.value = (`You gave ${this.name} a yummy snack! Fullness +1 (${this.fullness}/20)`)
        }
        if (this.fullness === 20) {
            gameText.value = (`${this.name} seems full but you know they'll be hungry again shortly. (${this.fullness}/20)`)
            nyanner.style.animation = "full 2600ms 1"
        }
        // console.log(`${this.name}'s fullness went up by 1. Fullness = ${this.fullness += 1}/10`)
        // console.log(`${this.name}'s fullness went up by 1. Fullness = ${this.hunger}`)
    }
    //lights should trigger sleeping, increasing energy
    lights() {
        //conditional so that max stat is 20
        if (this.energy < 20) {
            this.energy++;
            gameText.value = (`${this.name} looks so cute resting. Quick, take a picture! Energy +1 (${this.energy}/20)`)
        }
        if (this.energy === 20) {
            gameText.value = (`${this.name} has full energy and decided its zoomies time!!! (${this.energy}/20)`)
            //run zoom keyframe at full energy (20)
            nyanner.style.animation = "zoom 1000ms 2"
            //after zoom runs, make sure css is cleared otherwise it wont anymore after the first time - done in time() using setInterval
        }
        // console.log(`${this.name}'s energy went up by 1. Energy = ${this.energy += 1}/10`)
        // console.log(`${this.name}'s energy went up by 1. Energy = ${this.energy}`)
    }
    hug() {
        //conditional so that max stat is 20
        if (this.love < 20 && this.evolved === true) {
            this.love++;
            gameText.value = (`Cuddle up with ${this.name}. Love +1 (${this.love}/20)`)
        }
        else if (this.love === 20 && this.evolved === true) {
            gameText.value = (`${this.name} is overstimulated. Let them go before they attack! (${this.love}/20)`)
            nyanner.style.animation = "love 2000ms 1"
        }else {
            gameText.value = (`Love is currently unavailable. ${this.name} must be evolved to unlock.`)
        }
        // console.log(`${this.name}'s love went up by 1. Love = ${this.love += 1}/10`)
        // console.log(`${this.name}'s love went up by 1. Love = ${this.love}`)
    }

    decreaseStat() {
        if (this.happiness > -1) {
            this.happiness--;
        }
        if (this.fullness > -1) {
            this.fullness--;
        }
        if (this.energy > -1) {
            this.energy--;
        }
        if (this.love > -1) {
            this.love--;
        }
    }

    resetLights() {
        if (this.happiness <= 20 || this.fullness <= 20 || this.energy <= 20 || this.love <= 20) {
            // nyanner.style.animation = "walk 9000ms infinite, jump 1000ms infinite"
            nyanner.style.animation = "idle 3200ms infinite"
        }
    }
    time() {
        //age up by 1 every X seconds (1s = 1000 milliseconds)
        setInterval(() => {
            this.age++;
            console.log(`${this.name} is now ${this.age}`);
        }
        , 3000);
        //call decreaseStat() to work every X seconds
        setInterval(() => {
            this.decreaseStat();
        }
        , 12500);

        //Had a difficult time trying to reset tama animation to allow it to run again without setting animation = "" in another button. Decided to add another time interval here to clear animation in css after a certain amount of time. the time needed is long enough for the animation to finish but not long enough that you have to wait a while before running the animation again.

        setInterval(() => {
            this.resetLights()
        }
        , 8000);
    }
}


    //if hunger,sleepiness,boredom = 0, tamagotchi runs away, prompt restart

    // runAway() {
    //     if (this.fullness === 0 || this.energy === 0 || this.happiness === 0 || this.love === 0) {
    //         alert("Refresh the page to restart")
    //     }
        // console.log(`${this.name} has run away`)

    //Scratch this method and put it under sayStat so that it can react to the button press.

    // age = certain amount then prompt evolve pet
    // evolve() {
    //     if (this.age === 20) {
    //         alert(`${this.name} has evolved! `)
            // code to change hue of image - give hue to signify evolution
    //     }
    // }
    // Scratch this method, add it to sayStats.


//Lets try to enable Love only if tamagotchi is evolved

// class Evolution extends Tamagotchi {
//     constructor(name, age, happiness, fullness, energy, love) {
//         super(name, age, happiness, fullness, energy, love);
//     }

/* Pull evolve from sayStats method to create own evolve() method.
Default backgroundColor - grey to show button wont work until evolved
Once tamagotchi evolved then change background color indictating we can now click this and have it run properly. */

//Struggles with extended class calling methods in person. unsure if this is a proper use for extend class. Scrapped idea.

//     evolve() {
//         if (this.age >= 20 && !this.evolved) {
//             this.evolved = true;
//             nyanner.style.filter = "hue-rotate(290deg)";
//             alert("Your Tamagotchi evolved!");
//             tamaLove.style.backgroundColor = "rgba(0, 0, 0, 0)"
//         }
//     }
// }


//Instantiate (create object from the class) tamagotchi

// const appleCat = new Tamagotchi ("Meowple", 1, 5, 5, 5)
const tama = new Tamagotchi ("Nyanner", 0, 8, 8, 8, 20)
//invoke time() and decreaseStat() although, this does not seem to affect functionality
tama.time();
tama.decreaseStat();
//remove invoke evolve() - discarded method

//select between Meowple and Nyanner
//allow player to rename

// appleCat.sayStats()
// bananaCat.sayStats()




//Set variables to the element items. Action buttons and their images

//variables for the deviceButtons
const selectorButton = document.getElementById("selector");
const executorButton = document.getElementById("executor");
const cancelButton = document.getElementById("cancel")

//variables for the icon images corresponding to each method
const tamaStats = document.getElementById("tamaStats");
const tamaPlay = document.getElementById("tamaPlay");
const tamaEat = document.getElementById("tamaEat");
const tamaSleep = document.getElementById("tamaSleep");
const tamaLove = document.getElementById("tamaLove");

//variable for tamagotchi textbox
const gameText = document.getElementById("gameText");

//variable for tamagotchi img asset
const nyanner = document.getElementById("nanaCat");
const meowple = document.getElementById("appCat");

//variable for audio on click
const buttonSound = document.getElementById("clickAudio");
//variable to call all buttons
const tamaButtons = document.querySelectorAll(".deviceButtons")

//variable for buttons to pick nyanner or meowple
// const selectNyanner = document.getElementById("pickeApple");
// const selectMeowple = document.getElementById("pickBanana");

//REMINDER Don't include . or # when calling the element inside the () using getElement only if using querySelector




//Create a click event that will iterate through with each click and change their outline color at the same time.

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

// selectorButton.addEventListener("click", ()=> {
//     const highlightedIcon = actionIds[actionIndex];
//     const selection = document.getElementById(highlightedIcon);
//     selection.style.outlineColor = selection.style.outlineColor ""


//Trying another method, create an array of the action button IDs. 

const actionIds = ["tamaStats", "tamaPlay", "tamaEat", "tamaSleep", "tamaLove"];
/* Always have it start at index 0 
Selector was highlighting icons correctly, but the execute button was one index ahead.
(Highlighted tamaStats, but runs tamaPlay)
Trial error changing actionIndex and increment (in actionIndex +) inside the selector button.
setting index to -1 seems like it would work- where first click would add 1 and start index = 0, but selector button no longer works when value set to -1 */
let actionIndex = 0;

selectorButton.addEventListener("click", function() {
    actionIds.forEach(ID => {
        // make the outline color go back after we move to the next element
        document.getElementById(ID).style.outlineColor = "rgba(0, 0, 0, 0)";

        //same but for backgroundColor instead
        document.getElementById(ID).style.backgroundColor = "rgba(0, 0, 0, 0)";
    });

    //for each index in the array, change the outline color
    document.getElementById(actionIds[actionIndex]).style.outlineColor = "rgb(226, 226, 226, 0.95)";

    //same but for backgroundColor instead or if we wanted both
    document.getElementById(actionIds[actionIndex]).style.backgroundColor = "rgba(226, 226, 226, 0.45)";
        //loop back to the beginning of array, after reaching the end
    actionIndex = (actionIndex + 1) % actionIds.length;
});





/* Clicking Executor Button should run methods inside the tama Class.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
execute button checks if ID chosen by selector button equals specific case "id"
runs the method depending on what case values selector id value. */
executorButton.addEventListener("click", function() {
    // if (actionIndex === -1) {
    //     return;
    // }
    const highlightedIcon = actionIds[actionIndex];
    switch (highlightedIcon) {
        case "tamaStats":
            tama.sayStats();
            break;
        case "tamaPlay":
            tama.play();
            break;
        case "tamaEat":
            tama.feed();
            break;
        case "tamaSleep":
            tama.lights();
            break;
        case "tamaLove":
            tama.hug();
            break;
        // default:
        //     break;
    }
});


// executorButton.addEventListener("click", function() {
//     const currentActionId = actionIds[actionIndex]
//     const currentActionElement = document.getElementById(currentActionId);
    
//     if (currentActionElement.style.outlineColor === "rgb(226, 226, 226)") {
//         if (currentActionId === "tamaStats") {
//             bananaCat.sayStats();
//             document.getElementById("gameText").innerText = `Hello! I'm ${this.name}!`;
//         }
//     }
// })
//Conditional: executor button only runs the method that has a highlight outline (outlineColor = rgb(226,226,226))


//call all buttons via deviceButton ID - function to play audio
tamaButtons.forEach(tamaButtons => {
    tamaButtons.addEventListener("click", ()=> {
        buttonSound.play();
    })
})



// function hideApple () {
//     meowple.style.opacity = 0;
// }

// document.getElementById("pickBanana").addEventListener("click", hideApple());
// selectNyanner.addEventListener("click", hideApple())
    // nyanner.style.visibility = "visible";
    // meowple.style.visibility = "hidden";
    // nyanner.style.opacity = 1;
    // meowple.style.opacity = 0;
// });

// function hideBanana() {
//     nyanner.style.opacity = 0;
// }

// document.getElementById("pickApple").addEventListener("click", hideBanana());
// hideBanana();
// selectMeowple.addEventListener("click", hideBanana())
    // nyanner.style.visbility = "hidden";
    // meowple.style.visbility = "visible";
    // nyanner.style.opacity = 0;
    // meowple.style.opacity = 1;
// });

// selectNyanner.addEventListener("click", function() {
//     if (nyanner.style.opacity !== "1") {
//         nyanner.style.opacity = 1;
//         meowple.style.opacity = 0;
//     }
// });

// selectMeowple.addEventListener("click", function() {
//     if (meowple.style.opacity !== "1") {
//         nyanner.style.opacity = 0;
//         meowple.style.opacity = 1;
//     }
// });


//Button to show/hide the Tamagotchi Button Key

// function hideKey() {
//     const buttonKey = document.getElementById("buttonKey")
//     const hideButton = document.getElementById("hideKey")
    
document.getElementById("hideKey").addEventListener("click", hideAnimation())




//Extras
//At max age - Give Birth

//Powers???

//Exercise

//Others of your liking - thinking wash/cleaning, play would decrease cleanliness, wash would increase cleanliness and happiness

