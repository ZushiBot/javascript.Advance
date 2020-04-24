?*flat methode Will Flat That Array*/

const array1 = [1,2,[3,3.1,[22,22,33],3.2],4];
array1.flat();
//Result => (7) [1, 2, 3, 3.1, Array(3), 3.2, 4]
array1.flat(0);
//Result => (4) [1, 2, Array(4), 4]
array1.flat(1);
//Result => (7) [1, 2, 3, 3.1, Array(3), 3.2, 4]
array1.flat(2);
//Result=> (9) [1, 2, 3, 3.1, 22, 22, 33, 3.2, 4]
