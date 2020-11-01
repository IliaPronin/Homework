//Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
//в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [
    ['apple', 50, 2],
    ['banana', 60, 4],
    ['pineapple', 120, 1]
]

function countBasketPrice() {
    let result = []
    for (let i = 0; i < basket.length; i++) {
        result.push(basket[i][1] * basket[i][2])
    }
    return 'сумма товаров в корзине: ' + sum(result) + 'p'
}

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}


console.log(countBasketPrice());