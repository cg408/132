var ary1= [0,5,8,1,7];
var ary2= [0,5,8,1,7];

console.log("ary1==ary2?" + (ary1==ary2))//wrong method


//JSON String
console.log(JSON.stringify(ary1))
console.log(JSON.stringify(ary2))
var ary1st = JSON.stringify(ary1);

console.log("ary1==ary2: "+(JSON.stringify(ary1)==JSON.stringify(ary2)))//correct method

var ary3 = ary1.slice(1)
ary3[0] =10;
var ary4 = JSON.parse(ary1st);
ary4[20] = 10;
console.log("ary1[0]="+ary1[0])
console.log("ary3[0]="+ary3[0])