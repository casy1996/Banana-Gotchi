// alert("Am I working?")


//Create Class for Tamagotchi
class Tamagotchi {
    constructor(name, age, fullness, energy, happiness) {
        this.name = name
        //age needs to increase each night
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
    //pet says their age
    age() {

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

class Evolution extends Tamagotchi {
    constructor() {
        
    }
}


//Instantiate (create object from the class) tamagotchi
const appleCat = new Tamagotchi ("Meowple", 0, 5, 5, 5)
const  bananaCat = new Tamagotchi ("Nyanner", 0, 10, 10, 10)
//select between Meowple and Nyanner
//allow player to rename









//Extras
//At max age - Give Birth

//Powers???

//Exercise

//Others of your liking - thinking wash/cleaning, play would decrease cleanliness, wash would increase cleanliness and happiness



