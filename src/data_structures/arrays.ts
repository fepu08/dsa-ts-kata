const a = new ArrayBuffer(8); // creates 8 byte long ArrayBuffer
/*
	ArrayBuffer {
		[Uint8Contents]: <00 00 00 00 00 00 00 00>,   
		byteLength: 8
	}
*/
console.log(a);

const a8 = new Uint8Array(a); // represents an array of 8 bit unsigned integers created from an array buffer
/*
	Uint8Array(8) [
		0, 0, 0, 0,
		0, 0, 0, 0
	]
*/
console.log(a8);

a8[2] = 42;
a8[3] = 111;

/*
	Uint8Array(8) [
		0, 0, 42, 111,
		0, 0,  0,   0
	]
*/
console.log(a8);
