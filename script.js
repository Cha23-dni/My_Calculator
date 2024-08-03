const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id =='equal') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error!';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } else if (display.innerText == '' && item.id =='equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            if (item.id == '*') {
                display.innerText += '*';
            } else if (item.id == '/') {
                display.innerText += '/';
            } else {
                display.innerText += item.innerText;
            }
        }
    }
})

let isDark = true;
themeToggleBtn.onclick = toggleTheme;

function toggleTheme() {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
setInterval(toggleTheme, 5000);
