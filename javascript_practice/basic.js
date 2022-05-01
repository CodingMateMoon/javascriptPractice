function init(){

    arr = [1, 2, 3 ];

}

const map = new Map();
const myFunction = () => console.log('I am a function.');
const myNumber = 1234;
const myObject = {
    name: 'plainObjectValue',
    otherKey: 'otherValue'
};

map.set(myFunction, 'function as a key');
map.set(myNumber, 'number as a key');
map.set(myObject, 'object as a key');

console.log(map.get(myFunction)); // key 로 function을 사용한 예
console.log(map.get(myNumber)); // key 로 number를 사용한 예
console.log(map.get(myObject)); // key 로 object를 사용한 예
console.log()

const map2 = new Map();
map2.set('someKey1', 1);
map2.set('someKey2', 2);
map2.set('someKey3', 3);

for (let [key, value] of map2) {
    console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

const plainObjMap = {};
plainObjMap['someKey1'] = 1;
plainObjMap['someKey2'] = 2;
plainObjMap['someKey3'] = 3;

for (let key of Object.keys(plainObjMap)) {
    const value = plainObjMap[key];
    console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3