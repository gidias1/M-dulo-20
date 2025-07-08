//1. Calcule o MDC (máximo divisor comum) entre dois números. 

function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log("MDC entre 48 e 18:", calcularMDC(48, 18));
