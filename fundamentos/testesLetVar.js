const pereira = []

const alberto = function (a , b) {
    return a + b
}

for (let a = 0; a < 10; a++){
    const b = 90
    pereira.push(function() {
        console.log(alberto(a, b))
    })
}


let x = { one: 1, two: 2 };
let y = x;

y.one = 100;

console.log(x)


