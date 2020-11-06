function intToObj() {
    let num = +prompt('введите число от  0 до 999: ');
    let obj = {};
    if (num > 999 || num < 0) {
        alert('wrong number!')
        return obj
    } else {
        obj = {
            'сотни': Math.floor(num / 100),
            'десятки': Math.floor(num / 10 % 10),
            'единицы': Math.floor(num % 10),
        }
        return obj
    }
}

console.log(intToObj())