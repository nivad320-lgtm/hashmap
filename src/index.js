import "./styles.css";
import HashMap from "./hash-map.js";

const myHashMap = new HashMap;

console.log(myHashMap._buckets)
myHashMap.set('hello', 'davin')
console.log(myHashMap._buckets)

myHashMap.set('hello', 'blah')

console.log(myHashMap._buckets)
