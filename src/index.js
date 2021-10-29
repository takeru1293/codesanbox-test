/*
 * const let当の変数宣言
 */

// // vallの使い方
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数の上書き";
// console.log(val1);

// // val変数は再宣言可能
// var val1 = "var変数の再宣言可能";
// console.log(val1);

// let val2 = 'let変数宣言';
// console.log(val2);

// // letは上書きが可能
// val2 = 'let変数は上書き可能';
// console.log(val2);

// // letは再宣言不可能  →Scriptエラーが発生
// let val2 = 'let変数の再宣言';

// const val3 = 'const変数';
// console.log(val3);

// // // const変数は上書き不可→Scriptエラーが発生
// // val3 = 'const変数の上書き'；

// const val3 = 'const変数を再宣言';

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じぇじぇじぇ",
//   age:28
// };
// console.log(val4);
// val4.name = "zyozyozyo";
// val4.addres = "fattv";

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "brid";
// val5.push("monkey");
// console.log(val5);

// /*
//  * テンプレート文字列
//  */
// const name = "taro";
// const age = "28";

// // 私の名前はtaroです。年齢は28歳です。
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた記法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /*
//  *アロー関数
//  */
// // 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// const func2 = function (str) {
//   return str;
// };
// console.log(func2("func2です。"));

// // アロー関数
// const func3 = (str) => str;
// console.log(func3("func3です。"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

/*
 *分割代入
 */

// const myProfile = {
//   name: "JIRO",
//   age: 28
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message3);

// const { name, age } = myProfile;

// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

// const myProfile2 = ["TARO", 28];

// const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です`;
// console.log(message5);

/*
 *スプレッド構文
 */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1,2,3,4,5];
// const[num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// = だと参照渡しになる
// const arr8 = arr4;
// console.log(arr4);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfirterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "太郎"];
// for(let index = 0; index < nameArr.length; index++){
// console.log(`${index+1}番目絵は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name ;
// })

// console.log(nameArr2);

// nameArr.map((name, index = "1") =>
//   console.log(`${index + 1}番目絵は${nameArr[index]}です。`)
// );

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })

// console.log(newNumArr);

// const newNameArr2 = nameArr.map((name)=>{
//   if(name === "太郎") {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr2);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの場合　: 条件がfalseの時

// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);
// const num = 1300;
// // console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています！！` : `許容範囲ないです`;
// };
// console.log(checkSum(50, 60));
// console.log(checkSum(10, 60));
/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

const flg1 = true;
const flg2 = false;
const flg3 = false;

const result = (flg1, flg2) => {
  return flg1 || flg2 ? `1か2がtrueになります。` : `1も2がではありません。`;
};
console.log(result(flg1, flg2));
console.log(result(flg2, flg3));
