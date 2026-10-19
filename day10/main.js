// DAY 10 실습 01 — 콘솔과 파일에서 변수 다뤄 보기
console.log("main.js가 연결됐습니다");
console.log("1. 첫 번째 줄");
console.log("2. 두 번째 줄");
console.log("3. 세 번째 줄");

// let은 다시 담을수 있다.
let price = 200;
console.log(price);

price = 300
console.log(price);

let total = 10 + 20;
console.log(total);

// 선언하고 할당하고 초기값
let score; //선언
console.log(score); // undefined 
score = 90; //할당 : 값을 넣는다.
console.log(score); // 90

let level = 1; //초기화 : 선언과 동시에 할당

let city = "서울"; //문자열
city = "부산";
console.log("도시 :", city);

const birthYear = 1998;
console.log("태어난 해 :", birthYear);
// birthYear = 2000; // const는 재할당 불가
// let city = "대구"; //city라는 변수를 다시 선언할 수 없다. let은 같은 스코프 안에서 중복 선언 불가

let a = "안녕하세요.\n오늘은 날씨가 좋네요.\n배도 부르고요.";
let b = `안녕하세요.
오늘은 날씨가 좋네요.
배도 부르고요.`;

// boolean type
let isMenmber= true;
let hasCoupon= false;
console.log("typeof", isMenmber);
console.log("회원인가요?", isMenmber);
console.log("쿠폰이 있나요?", hasCoupon);

console.log(10<20); //true
console.log(10>20); //false

const uesrScore = 60;
const passScore = 60;
let isPass = uesrScore >= passScore; //let isPass = 80 >60;

console.log("합격 여부?", isPass);


