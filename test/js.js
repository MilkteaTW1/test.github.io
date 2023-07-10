console.log(window.document.querySelector('#something'))
const text = "Hello, World!";
const delay = 300; // 延时时间（以毫秒为单位）
let index = 0;

function typeWriter() {
    const typingTextElement = document.getElementById("something");
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, delay);
    }
}

// 调用函数开始打字效果
typeWriter();
if (window.screen.width < 1000) {
    let mobile = document.querySelector("#mobile");
    let desktop = document.querySelector("#desktop");
    mobile.style.display="block";
    desktop.style.display="none";
}
else if (window.screen.width > 1000){
    let mobile = document.querySelector("#mobile");
    let desktop = document.querySelector("#desktop");
    mobile.style.display = "block";
    desktop.style.display = "none";
}
console.log(window.screen.width)