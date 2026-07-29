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
        if (this._buckets[hashCode].length === 0) {
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
            return null
        }
        if (this._buckets[hashCode].contains(key)) {
            return this._buckets[hashCode]._at(
                this._buckets[hashCode]._findIndex(key),
            ).value;
        } else { // NOTE: Can I refactor this line?
            return null 
        }
    }
}

export default HashMap;
