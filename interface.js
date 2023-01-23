//INTERFACE SEGREGATION PRINCIPLE
//segregating your interfaces and making them smaller
//everything that implements an interface should use every single portion of that interface
//incorrect way
class Entity {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} moved`);
    }

    attack(target) {
        console.log(`${this.name} attacked ${target.name}`)
    }
}

class Wall extends Entity {
    constructor(name) {
        super(name)
    } 

    move() {
        return null;
    }

    attack() {
        return null;
    }
}



//correct way
//breaking up the class into smaller components that can be added to individual classes as needed
class OtherEntity {
    constructor(name) {
        this.name = name;
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack(target) {
        console.log(`${this.name} attacked ${target.name}`);
    }
}

class Character extends OtherEntity {
    constructor(name) {
        super(name)
    }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);

class OtherWall extends OtherEntity {
    constructor(name) {
        super(name)
    }
}

const animal = new Character('animal');
animal.move();
animal.attack('person');