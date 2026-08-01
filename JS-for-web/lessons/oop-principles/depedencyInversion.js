// The Dependency Inversion
/**
 * Imagine we have a STORE and a payment platform (e.g., Stripe API).
 * But what if, when we grow the store, we wish to switch the API, test
 * new payment methods, or doing some other tests?
 * 
 * We need to introduce a Payment Processor in the middle.
 * It's like a middle layer that routes the payment methods to the 
 * correct API, or implementations. 
 * 
 * In short, we don't want the high level program to immediately
 * interact with low level implementations of dependencies. 
 * The dependency inversion principle states that you need an adapter 
 * to facilitate the handshake between the high level and low level  
 * processes.
 * 
 * Check ouf the Adapter pattern or the Facade pattern.
 * 
 * The goal is minimize the code that you have to modify.
 */

// The idea is that the store stays constant
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(30 * quantity);
    }
}

// THIS IS THE ONLY PART TO BE MODIFIED

const userProcessorChoice = "PayPal";
const userName = 'John';

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe (user);
    }

    pay(amountInCents) {
        this.stripe.makePayment(amountInCents);
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new PayPal;
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

// The APIs down here will also stay constant
class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`);
    }
}

class PayPal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars} with PayPal`);
    }
}

function chooseProcessor(user, option) {
    switch (option) {
        case 'PayPal':
            return new PaypalPaymentProcessor(user);
        case "Stripe":
            return new StripePaymentProcessor(user);
    }
}


// Execution part also don't change
const store = new Store(chooseProcessor(userName, userProcessorChoice));
store.purchaseBike(30);