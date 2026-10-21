// DAY 13 JavaScript 배열과 객체 기초
console.log("index.js가 연결됐습니다!!!");

const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);
console.log(fruits[5]);
console.log(fruits.length);

fruits[1] ="망고";
console.log(fruits);

// 맨 뒤에 더할 때는 번호 대신
fruits.push("포도");
console.log(fruits);

// length를 처음부터 끝까지 반복시키기
const scores = [80, 95, 70, 55];
let total = 0;
for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    total += score;
}
console.log("총합", total);
console.log("평균", total / scores.length);

// 배열에 요소 넣기 빼기
console.log(fruits);

fruits.push("딸기"); // 배열 뒤에 추가
console.log(fruits);

const poped = fruits.pop() // 배열 뒤에 빼기
console.log(poped);
console.log(fruits);

fruits.unshift("수박")
console.log(fruits);

const shifted = fruits.shift();
console.log(shifted);
console.log(fruits);

// 배열 splice (지우기,바꾸기,깨워넣기)
const removed = fruits.splice(1,1,"딸기"); // 인수르 한개준경우 ,두개 준경우 ,세개준 경우 동작이 다르다.
console.log(removed);
console.log(fruits);

// 객체 선언
const bread = {
    name: "팥붕어빵",
    price: 1000,
    inpredients: ["밀가루", "팥", "설탕"],
    isHot: true,
};
console.log(bread);
console.log("이름:", bread.name);
console.log("가격:", bread.price);
console.log("크기:", bread.size);
console.log("따뜻한가요? :", bread["isHot"]);

bread.price = 500;
bread.owner = "김오즈";
console.log(bread);

const user = {
  userName: "김오즈",
  address: {
    city: "서울",
    zip: "04524",
  },
  likes: ["커피", "코딩"],
  greet() {
    return "안녕하세요";
  },
};
console.log(user);
console.log(user.address.city);
console.log(user.likes[1]);
console.log(user.likes.length);
console.log(user.greet());
console.log(user.address.zip);

// 객체 배열
const products = [
  {
    id: 1,
    pdctName: "에코백",
    price: 12000,
    stock: 5,
  },
  {
    id: 2,
    pdctName: "텀블러",
    price: 18000,
    stock: 0,
  },
  {
    id: 3,
    pdctName: "머그컵",
    price: 9000,
    stock: 12,
  },
];
console.log(products);
console.log(products[0].pdctName);
console.log(products[2].price);

// 배열 for로 돌아보기
let pdctTotal = 0;
for (let i = 0; i < products.length; i++) {
  const item = products[i];
  console.log(`${item.pdctName} ${item.price}원`);
  pdctTotal += item.price * item.stock;
}
console.log(`재고 금액 합계 ${pdctTotal}원`);

// 객체 => JSON
const json = JSON.stringify(products);
console.log(json);

// JSON => 객체
const back = JSON.parse(json);
console.log(back);

const cart = ["우유", "빵"];
const a = cart.push("계란");
const b = cart[cart.length - 1];
const c = cart.shift();
cart.unshift("버터");
const d = cart.splice(1, 1);
const e = cart.slice(0, 1);
console.log(cart);