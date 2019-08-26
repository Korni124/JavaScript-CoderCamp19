//stworzenie bohatera 
//stworzenie wroga 
// stworzenie ataku
//leczenie 
//magia 
//smierc 
// game over 
// game start 
// game restart
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Hero {
    constructor(name, race) {
        this.name = name;
        this.race = race;
        this.health = 90;
        this.weaponAttact = {
            min: 10,
            max: 25
        };
        this.healing = {
            min: 0,
            max: 30
        };
    }
    attact(opponent) {
        if (opponent) {
            if (opponent.health <= 0) {
                return console.log("Przeciwnik już nie żyje, nie bij truchła ty popaprańcu!")
            }
            const attactAmount = random(this.weaponAttact.min, this.weaponAttact.max)
            opponent.health -= attactAmount
            opponent.attact(this)

            if (opponent.health <= 0) {
                return console.log("Zabiłeś potwora typu " + opponent.type)
            }
            else {
                return console.log("Przeciwnik oberwał za " + attactAmount + " i zostało mu " + opponent.health)
            }

        }else{
            return console.log("Kogo mam zaatakować?")
        }
    }
    heal(opponent) {
        opponent.attact(this)

        if (this.health < 100) {
            const healAmount = random(this.healing.min, this.healing.max)
            this.health += healAmount
            if (this.health > 100) {
                this.health = 100
            }
            console.log("Uleczyłeś się za " + healAmount + " Twoje aktualne życie to " + this.health)
            return this.health
        }
        console.log("Masz maksymalny poziom życia")
        return this.health
    }
}
class Opponent {
    constructor(type) {
        this.health = 90;
        this.type = type
        this.weaponAttact = {
            min: 15,
            max: 30
        };
    }
    attact(opponent) {
        if (opponent) {
            const attactAmount = random(this.weaponAttact.min, this.weaponAttact.max)
            opponent.health -= attactAmount

            if (opponent.health <= 0) {
                return alert("Bohater zginął! GAME OVER")
            }
            else {
                return console.log("Oberwaliśmy za " + attactAmount + " i zostało nam " + opponent.health)
            }
        }else{
            return console.log("Kogo mam zaatakować?")
        }
    }
    heal() {
        if (this.health < 100) {
            const healAmount = random(this.healing.min, this.healing.max)
            this.health += healAmount
            if (this.health > 100) {
                this.health = 100
            }
            console.log(" Przeciwnik uleczył się za " + healAmount + " Jego aktualne życie to " + this.health)
            return this.health
        }
        console.log("Przeciwnik ma maksymalny poziom życia")
        return this.health
    }
}

