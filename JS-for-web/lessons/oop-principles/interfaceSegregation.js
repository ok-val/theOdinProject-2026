/**
 * The Interface Segregation principle ISP states that no code should
 * be forced to depend on methods it does not use 
 */  

/**
 * While interface is a new concept for me at this point,
 * and that interface isn't a vanilla JS entity, 
 * here's how it works
 */

// Imagine you have an interface for Entity with a selection of methods

```
interface Entity {
    attackDamage
    health
    name

    move()
    attack()
    takeDamage(amount)
}

// Every methods of the entity must be declared in every implementations

class Character implements Entity {
    move() {
        // Do something
    }

    attack() {
        // Do something
    }

    takeDamage(amount) {
        // Do something
    }
}

// It makes sense for Character to move(), but not Turret 

class Turret implements Entity {
    move() {
        // ERROR: Cannot move
    }
}
```

// Therefore, this interface implementation violates the ISP.
// To solve this issue, I would need to segregate the classes more precisely
// For example, use a StationaryEntity and a MobileEntity class

/**
 * ISP applies for classes in that super classes should not contain
 * methods that subclasses would not use. Simply create more subclasses
 * to diverge behaviors.
 */