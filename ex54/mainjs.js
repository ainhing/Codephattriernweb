function getValues() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    return { a, b, c };
}

function findmax() {
    const { a, b, c } = getValues();
    document.getElementById("result").value = Math.max(a, b, c);
}

function findmin() {
    const { a, b, c } = getValues();
    document.getElementById("result").value = Math.min(a, b, c);
}

function calsin() {
    const { a } = getValues();
    document.getElementById("result").value = Math.sin(a * Math.PI / 180);
}

function calcos() {
    const { a } = getValues();
    document.getElementById("result").value = Math.cos(a * Math.PI / 180);
}

function abinhb() {
    const { a, b } = getValues();
    document.getElementById("result").value = Math.pow(a, b);
}
