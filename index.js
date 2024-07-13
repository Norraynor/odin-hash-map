// if (index < 0 || index >= buckets.length) {
// 	throw new Error("Trying to access index out of bound");
// }

function HashMap() {
	const buckets = new Array(16);
	function hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode;
	}

	function set(key, value) {
		let hashCode = hash(key);
		let bucket = hashCode % buckets.length;
		if (get(key)) {
			buckets[bucket].key = hashCode;
			buckets[bucket].value = value;
		} else {
			buckets[bucket] = hashNode(hashCode, value);
		}
	}
	function get(key) {
		// takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
		let hashCode = hash(key);
		let bucket = hashCode % buckets.length;
		if (buckets[bucket]) {
			if (buckets[bucket].key == hashCode) {
				return buckets[bucket].value;
			}
		}
		return null;
	}
	function has(key) {
		// takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
		if (get(key)) {
			return true;
		}
		return false;
	}
	function remove(key) {
		// takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true.
		// If the key isn’t in the hash map, it should return false.
		let hashCode = hash(key);
		let bucket = hashCode % buckets.length;
		if (get(key)) {
			buckets[bucket] == null;
			return true;
		}
		return false;
	}
	function length() {
		//returns the number of stored keys in the hash map.
		return buckets.filter((x) => x != null).length;
	}
	function clear() {
		//  removes all entries in the hash map.
		buckets.forEach((x) => (x = null));
	}
	function keys() {
		// returns an array containing all the keys inside the hash map.
		let keyArr = [];
		keyArr = buckets.filter((x) => x.key != null);
		return keyArr;
	}
	function values() {
		// returns an array containing all the values.
		let valArr = [];
		valArr = buckets.filter((x) => x.value != null);
		return valArr;
	}
	function entries() {
		// returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
		let ent = [];
		buckets.forEach((x) => ent.push([x.key, x.value]));
		return ent;
	}
	function getBuckets() {
		return buckets;
	}
	return {
		hash,
		get,
		set,
		has,
		remove,
		length,
		clear,
		keys,
		values,
		entries,
		getBuckets,
	};
}

function hashNode(key, value) {
	return {
		key,
		value,
	};
}
const hasah = HashMap();
let newHash = hasah.hash("Boobs");
let bucketNum = newHash % hasah.getBuckets().length;
console.log({ newHash, bucketNum });

const test = HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// test.set("elephant", "awesome");
console.log(test.entries());
console.log(test.getBuckets());
console.log(test.length());
console.log(test.keys());
console.log(test.values());
test.remove("apple");
console.log(test.getBuckets());

// test.clear();
// console.log(test.getBuckets());
