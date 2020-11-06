let basket = {
    'apple': [50, 2],
    'banana': [60, 4],
    'pineapple': [120, 1],
}

function countBasketPrice() {
    let result = []
    for (const i in basket) {
        result.push(basket[i][0] * basket[i][1])
    }
    return 'сумма товаров в корзине: ' + sum(result) + 'p'
}


function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

console.log(countBasketPrice())