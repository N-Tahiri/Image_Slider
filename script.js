const images = [
  "wp4676582-4k-pc-wallpapers.jpg",
  "wp5231643-4k-desktop-wallpapers.jpg",
  "wp5984922-ultra-hd-desktop-wallpapers.jpg",
  "wp6826300-hd-4k-desktop-wallpapers.jpg",
  "wp6826436-hd-4k-desktop-wallpapers.jpg",
];

// load elements
const image = document.querySelector(".image");
const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");
const subTitle = document.querySelector(".subtitle");

const nmbImages = images.length;
// Events
right_arrow.addEventListener("click", () => {
  let currentIndex = getIndex()[0];
  const name = getIndex()[1].replace(".jpg", "");
  if (currentIndex === images.length - 1) currentIndex = 0;
  else currentIndex++;
  image.src = "./img/" + images[currentIndex];
  subTitle.textContent = name;
});
left_arrow.addEventListener("click", () => {
  let currentIndex = getIndex()[0];
  const name = getIndex()[1].replace(".jpg", "");
  if (currentIndex === 0) currentIndex = images.length - 1;
  else currentIndex--;
  image.src = "./img/" + images[currentIndex];
  subTitle.textContent = name;
});

function getIndex() {
  const url = image.src; //http://127.0.0.1:5500/Projects/slider/img/wp4676582-4k-pc-wallpapers.jpg
  const parts = url.split("/"); // removes / and give strings in between as an array
  const lastPart = parts[parts.length - 1]; // get the last string in the array above
  let currentIndex = images.indexOf(lastPart);
  console.log(currentIndex);
  return [currentIndex, lastPart];
}
