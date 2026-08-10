export default function calcTotal(object) {
    /**
     * Each of these requirements should be a test!
     * Input: an object with property `items` that contains a list of objects
     * Input data/shape: For they might change
     * Output: a positive number
     * Error catch: naming incongruency, object shape incongruency,
     * negative number, empty item name strings
     * Side effect: No
     */

    return object.items.reduce((acc, cur) => {
        let quantity = cur.quantity === undefined ? 1 : cur.quantity;
        return (acc += cur.price * quantity);
    }, 0);
}
