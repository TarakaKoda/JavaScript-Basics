// 8. Bitwise operators
// Bitwise OR |
// 1 = 000000001
// 2 = 000000010
// R = 000000011

console.log(1 | 2); // 3

// Bitwise AND &
// 1 = 000000001
// 2 = 000000010
// R = 000000000

console.log(1 & 2); // 0

// using bitwise operator in real life scenario

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

let readPermission = 4;
let writePermission = 2;
let executePermission = 1;

let myPermissions = 0;
myPermissions += readPermission | executePermission;
let permissions = myPermissions & writePermission ? 'yes' : 'no';
console.log(permissions);