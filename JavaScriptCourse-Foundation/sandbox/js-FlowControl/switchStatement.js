const themeSelector = document.getElementById("switch-theme"); // the actual selector

const displayText = document.getElementById("state-theme"); // display text

const html = document.querySelector("html")

const rootStyles = getComputedStyle(document.documentElement);
const themeBg = rootStyles.getPropertyValue('--theme-bg').trim()

// Ternary operator method (very clean)
function changeThemeTernary(bgColor, textColor, textDisplay) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
    displayText.textContent = textDisplay;
};

// themeSelector.addEventListener("change", () => themeSelector.value === "light" ? changeThemeTernary("white", "black", "Light") : changeThemeTernary("black", "white", "Dark")
// );

// Switch statement method (more verbose)

function changeThemeSwitch() {
    switch (themeSelector.value) {
        case "light":
            html.style.backgroundColor = "white";
            html.style.color = "black";
            displayText.textContent = "Light";
            break;
        case "dark":
            html.style.backgroundColor = "black";
            html.style.color = "white";
            displayText.textContent = "Dark";
            break;
        default:
            html.style.backgroundColor = "white";
            html.style.color = "black";
            displayText.textContent = "Light";
            break;
    }
};

themeSelector.addEventListener("change", changeThemeSwitch)

console.log(themeBg);
