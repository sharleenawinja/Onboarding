//DEPENDENCY INVERSION PRINCIPLE
class Store {
    constructor(user) { 
        this.kcb = new Absa (user)
    }

    buyBike(quantity) {
        this.kcb.makePayment(20000 * quantity)
    }

    buyBook(quantity) {
        this.kcb.makePayment(1000 * quantity)
    }
}

class Kcb {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInKsh) {
        console.log(`${this.user} made payment of ${amountInKsh} kenyan shillings`);
    }
}

class Absa {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInKsh) {
        console.log(`${this.user} made paymet of ${amountInKsh / 124} dollars`)
    }
}

const store = new Store('John');
store.buyBike(2);
store.buyBook(5);

//correct way
class OtherStore {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    buyBike(quantity) {
        this.paymentProcessor.pay(20000 * quantity)
    }

    buyBook(quantity) {
        this.paymentProcessor.pay(1000 * quantity);
    }
}

class KcbPaymentProcessor {
    constructor(user) {
        this.kcb = new Kcb(user)
    }

    pay(amountInKsh) {
        this.kcb.makePayment(amountInKsh);
    }
}

class AbsaPaymentProcessor {
    constructor(user) {
        this.absa= new Absa (user)
    }

    pay(amountInKsh) {
        this.absa.makePayment(amountInKsh);
    }
}

const client = new OtherStore(new KcbPaymentProcessor('Mark'));
client.buyBike(2);
client.buyBook(6);

const client2 = new OtherStore(new AbsaPaymentProcessor('Mark'));
client.buyBike(2);
client.buyBook(6);