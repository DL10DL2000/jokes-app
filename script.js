const jokes = [
  "למה תרנגול לא הולך לבית ספר? כי הוא כבר עבר את הביצה!",
  "איך קוראים לדבורה שמתאמנת בחדר כושר? דבו-רץ!",
  "מה עושה גמל במדבר? מתייבש בכבוד!",
  "איך קוראים לנחש בלי חברים? בדיד-נחש!",
  "אבא: למה אתה לא מסדר את החדר? בן: לא רוצה להרוס את הבלגן האומנותי.",
  "מה אומר עט לפנקס? תכתיב לי את הרגשות שלך."
];

let index = 0;
let timerActive = false;
let intervalId = null;

const jokeEl = document.getElementById("joke");
const nextBtn = document.getElementById("nextBtn");
const shareBtn = document.getElementById("shareBtn");

function showJoke() {
  jokeEl.textContent = jokes[index];
  index = (index + 1) % jokes.length;
}
function startTimer() {
  clearInterval(intervalId); // מבטל טיימר קיים אם יש
  intervalId = setInterval(showJoke, 120000); // מפעיל טיימר חדש כל 2 דקות
}
nextBtn.addEventListener("click", showJoke);

shareBtn.addEventListener("click", () => {
  const text = jokeEl.textContent;
  const encoded = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/?text=${encoded}`;
  window.open(whatsappUrl, "_blank");
});

// הצגת בדיחה ראשונה והפעלת הטיימר פעם אחת בלבד
showJoke();
startTimer();