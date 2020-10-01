class Human{
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    eat(apple){
        if (apple.isEmpty()){
            this.speak('het tao roi !')
        }
        else {
            if (this.weight >= 100){
                this.speak("Toi no qua roi")
            }
            else {
                this.weight -= 1;
                apple.decrease();
            }
        }
    }
    speak(message){
        alert(message)
    }
    getWeight(){
        return this.weight;
    }

    getName(){
        return this.name;
    }

}