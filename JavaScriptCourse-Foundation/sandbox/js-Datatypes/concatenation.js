const button_greet = document.querySelector(".greet-button");

const button_random = document.querySelector(".random");

const donate_display = document.getElementById("donate_display");

const donate_choice = document.getElementById("donate_choice");

function greet() {
    const name = prompt("What's your name? ");
    const greet = "Hello";
    const greeting_div = document.querySelector("#greeting");
    // Concatenation in template literals (fString eqiv.) - aka backticks embedding
    // Backticks embedding are kind of modern; older methods 
    greeting_div.textContent = `${greet}, ${name}`;
    // Concatenation normally - similarly annoying to use (normal Str equiv.)
    console.log(greet + ", " + name); 
};

function turn_into_string() {
    const day = Number(19);
    let month = String("March");
    // even this reassignment will return a type str
    month = "March";
    // Remember that reassignment is not possible for const
    // ⮾ day = 12; is not allowed

    console.log(`${month}, ${day}`);
    console.log(typeof day, typeof month);
};

function alert_random() {
    alert(NaN + 1); // NaN
    let is_four_larger = (4 >= 4); 
    console.log(is_four_larger);
};

function string_methods() {
    const text = "WOMBAT"
    let text_length = text.length;
    console.log(`Text length is ${text_length}.`)
    
    console.log(text[5]); // similar to at()
    console.log(text.charCodeAt(0)); // return unicode 
    console.log(text.slice(undefined, 3));

    // slice and substring
    console.log(text.slice(0,-3));
    console.log(text.substring(0,-3)); // same as substring(0,0)
    let concated = text.concat(text, text);
    alert(concated);

    // string padding (type enforced)
    let text1 = "5";
    let padded = text1.padStart(4, "-");
    console.log(padded);

}

function control_flow_statements() {
    // if-else flow construction
    let isGiveMoney = true;
    let givenMoney = 0;
    if (isGiveMoney == true) {
        givenMoney += 10;
    } else {
        givenMoney += 0;
    }
    console.log(givenMoney);
};

function donateIfElse() {
    const choice = donate_choice.value;
    if (choice === "yes") {
        console.log("Thank you");
    } else if (choice === "no") {
        console.log("No worries");
    } else {
        console.log("Take your time")
    }
};

function donateSwitch() {
    const choice = donate_choice.value;
    switch (choice) {
        case "yes":
            console.log("Thank you");
            break;
        case "no":
            console.log("No worries");
            break;
        case "maybe":
            console.log("Take your time")
    }
};


button_random.addEventListener("click", donateSwitch);
button_greet.addEventListener("click", greet);