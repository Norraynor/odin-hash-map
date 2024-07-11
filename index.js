if (index < 0 || index >= buckets.length) {
	throw new Error("Trying to access index out of bound");
}

function HashMap() {
	function hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode;
	}

	function set(key, value) {}
	function get(key) {
		// takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
	}
	function has(key) {
		// takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
	}
	function remove(key) {
		// takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true.
		// If the key isn’t in the hash map, it should return false.
	}
	function length() {
		//returns the number of stored keys in the hash map.
	}
	function clear() {
		//  removes all entries in the hash map.
	}
	function keys() {
		// returns an array containing all the keys inside the hash map.
	}
	function values() {
		// returns an array containing all the values.
	}
	function entries() {
		// returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
	}
}
