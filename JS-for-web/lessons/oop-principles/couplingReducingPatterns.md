## How to write highly scalable and maintainable JS coupling
---
sources: https://web.archive.org/web/20170215102316/http://www.innoarchitech.com:80/scalable-maintainable-javascript-coupling
---

### Coupling

Asumme that we are building a we app that allows people to place food 
delivery orders. For each ordr, the app creates the order and sends a 
conformation to the user, including the estimated time of delivery and
the user can check the status, or cancel the order at any time.

One modular approach to implement this is to create a module that 
handles orders and another that handles deliveries. 

The ORDERING module may have functions to create, read, update, and 
delete orders (i.e., CRUD), while the deliveries module may have fns to
estimate delivery time, begin delivery, complete delivery, etc. 

```js
// Order module definition
var orderModule = (function() {
    var module = {},
        deliveries = myApp.deliveryModule;

    module.createOrder = function(orderData) {
        var orderResult;

        orderResult = // Code to actually create the order
        orderResult.estimatedDeliveryTime = deliveries.getDeliveryTime(orderData);

        return orderResult;
    };

    return module;
})();
```

The order and delivery modules shown are tightly coupled. For the order
module to get the estimated delivery time, I have to provide the
`orderData` to the deliveries module.

When we treat these modules as APIs, it could be said that we have
infringed the Dependency Inversion principle in that the higher level 
functions depends too heavily on the lower-level dependencies. 

Such tightly coupled patterns prevent us from benefiting from 
modularity advantages. The delivery module in this case cannot be 
swapped out so easily for a different or improved version of its own. 
Ultimately, we like to maximize code reuse and the ability to test 
modules independently.

Another downside to tightly coupled modules is that it introduces a 
single choke point/point of failure. In case of something goes wrong,
we want to be able to still complete the order even if the delivery 
module breaks down. 


### Patterns to reduce coupling

There are many patterns to achieve loose coupling between modules.

1. The observer pattern and its variations: 
Sure, we can have multiple observer observing an event emitter directly.
The downside is that these concurrent observers must all 'know' about 
the event emitter and its details. 

2. A Pub/Sub (Publish/Subscribe) pattern
This is a variation of the observer pattern, within it there are many 
versions. Generally, it involves a mediator object, like a processor I
encountered in [[dependencyInversion.js]], serving to further minimize 
coupling between modules. 

In essence, this mediator object isolates and mediates info between the
Publisher and the Subscriber. And it is as if this Pub+Sub pair should
not be modified when we are fixing the mediator. 

This became a library called PubSubJS by Morgan Roderick.
It is a topic-based JS Pub/Sub library, which simply means that there
are topics that a module can either subscribe to, publish to, or both.
It can also unsubsribe if needed.

Here's how it works: 

```js
document.addEventListener("DOMContentLoaded", function(event) {
    var orderModule = (function() {
        var orders = {},
        EST_DELIVERY = 'current estimated delivery time',
        estimatedDeliveryTime;

        PubSub.subscribe(EST_DELIVERY, function(msg, data) {
            console.log(msg);
            estimatedDeliveryTime = data;
        });

        return orders;
    })();

    var deliveryModule = (function() {
        var deliveries = {},
        EST_DELIVERY = 'current estimated delivery time';

        deliveries.getEstimatedDeliveryTime = function() {
            var estimatedDeliveryTime = 1; // Hard-coded to 1 hour, but likely an API call.

            PubSub.publish(EST_DELIVERY, estimatedDeliveryTime);
        };

        return deliveries;
    })();

    deliveryModule.getEstimatedDeliveryTime();
});
```

`EST_DELIVERY` is a constant called `current estimated delivery time`.
Any module can now publish and/or subscribe to this topic without 
'knowing' each other's existence. 

The `deliveryModule.getEstimatedDeliveryTime();` method retrieves the 
current estimated delivery wait time, then publishes the expected 
estimated delivery time to the `EST_DELIVERY` topic. At this point, 
any subscriber will be notified of the updated and lastest delivery time
estimate.

### Summary 

In sum, loose coupling is very important promoting code reuse, 
independent testability, modularity, and protection against a single 
point of failure. Lots of practices (and probs libraries) are needed to
write highly scalable, maintainable, (re)usable, extensible code.  
