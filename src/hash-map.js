import LinkedList from "./linked-list.js";

class HashMap {
    constructor() {
        this._loadFactor = 0.75;
        this._capacity = 16;
        this._buckets = [];
        for (let i = 0; i < this._capacity; i++) {
            this._buckets.push([]);
        }
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this._capacity; // modulo operator so the has code does not exceed the maximum integer value allowed by JavaScript
        }

        return hashCode;
    }

    set(key, value) {
        let hashCode = this.hash(key);
        // Update the key's value if same key
        if (this._buckets[hashCode instanceof LinkedList]) {
            this._buckets[hashCode].append([key, value]);
        } else if (this._buckets[hashCode].length === 0) {
            this._buckets[hashCode] = new LinkedList();
            this._buckets[hashCode].append([key, value]);
        } else if (this._buckets[hashCode].contains(key)) {
            let temp = this._buckets[hashCode]._at(
                this._buckets[hashCode]._findIndex(key),
            );
            temp.value = value;
        } else {
            this._buckets[hashCode].append([key, value]);
        }
    }

    get(key) {
        let hashCode = this.hash(key);
        if (this._buckets[hashCode].length === 0) {
            return null;
        }
        if (this._buckets[hashCode].contains(key)) {
            return this._buckets[hashCode]._at(
                this._buckets[hashCode]._findIndex(key),
            ).value;
        } else {
            // NOTE: Can I refactor this line?
            return null;
        }
    }

    has(key) {
        let hashCode = this.hash(key);
        if (
            this._buckets[hashCode].length > 0 &&
            this._buckets[hashCode].contains(key)
        ) {
            return true;
        }
        return false;
    }

    remove(key) {
        let hashCode = this.hash(key);
        if (this.has(key)) {
            if (this._buckets[hashCode].size() === 1) {
                this._buckets[hashCode] = [];
            } else {
                this._buckets[hashCode].removeAt(
                    this._buckets[hashCode]._findIndex(key),
                );
            }
            return true;
        }
        return false;
    }

    length() {
        // returns the number of stored keys in the hash map.
        // if bucket is an instance of linked list, do size
        let numberOfKeys = 0;
        for (let bucket of this._buckets) {
            if (bucket instanceof LinkedList) {
                numberOfKeys += bucket.size();
            }
        }
        return numberOfKeys;
    }

    clear() {
        for (let i = 0; i < this._capacity; i++)
            if (this._buckets[i]) {
                this._buckets[i] = [];
            }
    }

    keys() {
        //returns an array containing all the keys inside the hash map.
        let everyKeys = [];
        for (let bucket of this._buckets) {
            if (bucket instanceof LinkedList) {
                let temp = bucket._head;
                while (temp !== null) {
                    everyKeys.push(temp.key);
                    temp = temp.next;
                }
            }
        }
        return everyKeys;
    }
    values() {
        //returns an array containing all the keys inside the hash map.
        let everyValues = [];
        for (let bucket of this._buckets) {
            if (bucket instanceof LinkedList) {
                let temp = bucket._head;
                while (temp !== null) {
                    everyValues.push(temp.value);
                    temp = temp.next;
                }
            }
        }
        return everyValues;
    }
    entries() {
        //returns an array that contains each key, value pair. 
        // Example: [[firstKey, firstValue], [secondKey, secondValue]]
        let everyPair = [];
        for (let bucket of this._buckets) {
            if (bucket instanceof LinkedList) {
                let temp = bucket._head;
                while (temp !== null) {
                    everyPair.push([temp.key, temp.value]);
                    temp = temp.next;
                }
            }
        }
        return everyPair
    }
}

export default HashMap;
