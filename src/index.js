import "./styles.css";
import HashMap from "./hash-map.js";

const myHashMap = new HashMap;

console.log(myHashMap._buckets)
myHashMap.set('hello', 'davin')
console.log(myHashMap._buckets)

myHashMap.set('hello', 'blah')
myHashMap.set('woohoo', 'blah')


console.log(myHashMap._buckets)

console.log(myHashMap.get('asdf'))
console.log(myHashMap._buckets)

console.log(myHashMap.remove('asfasdf'))
console.log(myHashMap._buckets)
myHashMap.set('hello', 'blah')

console.log(myHashMap._buckets)
console.log(myHashMap.length())
console.log(myHashMap.clear())
console.log(myHashMap._buckets)

