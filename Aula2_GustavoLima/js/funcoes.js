
function maiuscula(text) {
    text.style.textTransform="uppercase";
    alert(text.innerText)
}

function minuscula(text) {
    text.style.textTransform="lowercase";
    alert(text.innerText)
}

export {maiuscula, minuscula};