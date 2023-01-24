//LISKOV SUBSTITUTION PRINCIPLE
//if S is a subtype of T then objects of type T may be replaced with objects of type S
//eg if you have an class of Animal, every single place you use it, you should be able to replace it with one if its subclasses
class Bird {
    fly() {
        console.log('I can fly');
    }
}

class Duck extends Bird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends Bird {
    fly() {
        //override fly
        throw new Error('Cannot fly');
    }
    swim() {
        console.log('I can swim');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
//makeBirdFly(penguin);

//correct method
class FlyingBird {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim');
    }
}

class OtherDuck extends FlyingBird {
    quack() {
        console.log('I can quack');
    }
}

class OtherPenguin extends SwimmingBird {

}

function makeFlyingBirdFly(bird) {
    bird.fly();
} 

function makeSwimmingBirdSwim(bird) {
    bird.swim();
} 

const newDuck = new FlyingBird();
const newPenguin = new SwimmingBird()

makeFlyingBirdFly(newDuck);
makeSwimmingBirdSwim(newPenguin);