// 10: spread

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
var arr3 = [...arr2, ...arr1]//toán tử spread
console.log(arr3)


var obj1 = {
    name: 'JS'
};
var obj2 = {
    price: 2000
}
var obj3 = {
   ...obj1,
   ...obj2
}

console.log(obj3)


var defaultConfig = {
    api: 'https://domain-courses',
    apiVersion: 'v1',
    other: 'other'
}


var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-exercise'
}
console.log(exerciseConfig)


var array = ['JS', 'PHP', 'Rwby']
function logger(a, b, c) {
    console.log(a, b, c)
}
logger(...array)//bỏ ... đi thì nó sẽ giữ nguyên cặp []