class HashMap {
    constructor(){
        this._loadFactor = 0.75;
        this._capacity = 16;
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

}

export default HashMap;