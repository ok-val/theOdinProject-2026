// to be used for closure-extended-5.js

export let x = 5;

// Only the exporter of the binding can mutate the binding.
// This is probably some module scoping I've not learned about
export const incrementX = () => {
    x++;
}
export const setX = (val) => {
    x = val;
};
