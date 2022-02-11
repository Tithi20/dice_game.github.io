var obj = [
  {
    id: 1,
    img: "1.jpeg",
  },
  {
    id: 2,
    img: "2.jpeg",
  },
  {
    id: 3,
    img: "3.jpeg",
  },
  {
    id: 4,
    img: "4.jpeg",
  },
  {
    id: 5,
    img: "5.jpeg",
  },
  {
    id: 6,
    img: "6.jpeg",
  },
];

head = document.querySelector("h1");
head.textContent = "Refresh Me";

var randomz = Math.floor(Math.random() * 6);
var randomz1 = Math.floor(Math.random() * 6);
console.log(randomz);

// img_style1= "1.jpeg";
document.getElementById("img_style1").src = obj[randomz].img;
document.getElementById("img_style2").src = obj[randomz1].img;
console.log(obj[randomz].img);

if (randomz === randomz1) {
  head.textContent = "DRAW";
} else if (randomz < randomz1) {
  head.textContent = "Player 2 wins";
} else if (randomz > randomz1) {
  head.textContent = "Player 1 wins";
}
