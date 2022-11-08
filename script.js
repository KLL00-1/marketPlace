const nftCards = document.querySelector(".NFT_cards");
const button = document.getElementById("btn");
const counter = document.querySelectorAll(".counter");
const btn1 = document.querySelectorAll(".btn1");
const selectDog = document.getElementById("dog");
const selectCat = document.getElementById("cat");
const selectButton = document.getElementById("select");
const selectCommon = document.getElementById("Common");
const selectUncommon = document.getElementById("Uncommon");
const selectEpic = document.getElementById("Epic");
const allRar = document.getElementById("allRar");
const allPet = document.getElementById("all");
const dogCommon = document.querySelectorAll(".dog_common");
const dogUncommon = document.querySelectorAll(".dog_uncommon");
const dogEpic = document.querySelectorAll(".dog_epic");
const catCommon = document.querySelectorAll(".cat_common");
const catUncommon = document.querySelectorAll(".cat_uncommon");
const catEpic = document.querySelectorAll(".cat_epic");
const allCard = document.querySelectorAll(".NFT_card");
const allHeadImageCard = document.querySelectorAll(".card_img1");

let number = 0;

button.addEventListener("click", () => {
  for (i = 0; i < allCard.length; i++) {
    allCard[i].classList.toggle("column_2");
    allHeadImageCard[i].classList.toggle("card_img");
  }
  nftCards.classList.toggle("center");
});

for (let i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", () => {
    number++;
    counter[i].innerHTML = number;
  });
}

selectButton.addEventListener("click", () => {
  if (selectDog.selected && allRar.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "block";
      dogUncommon[i].style.display = "block";
      dogEpic[i].style.display = "block";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "none";
    }
  } else if (selectCat.selected && allRar.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "block";
      catUncommon[i].style.display = "block";
      catEpic[i].style.display = "block";
    }
  } else if (allPet.selected && selectCommon.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "block";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "block";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "none";
    }
  } else if (allPet.selected && selectUncommon.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "block";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "block";
      catEpic[i].style.display = "none";
    }
  } else if (allPet.selected && selectEpic.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "block";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "block";
    }
  } else if (selectDog.selected && selectCommon.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "block";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "none";
    }
  } else if (selectDog.selected && selectUncommon.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "block";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "none";
    }
  } else if (selectDog.selected && selectEpic.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "block";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "none";
    }
  } else if (selectCat.selected && selectCommon.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "block";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "none";
    }
  } else if (selectCat.selected && selectUncommon.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "block";
      catEpic[i].style.display = "none";
    }
  } else if (selectCat.selected && selectEpic.selected) {
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "none";
      dogUncommon[i].style.display = "none";
      dogEpic[i].style.display = "none";
      catCommon[i].style.display = "none";
      catUncommon[i].style.display = "none";
      catEpic[i].style.display = "block";
    }
  } else
    for (i = 0; i < dogCommon.length; i++) {
      dogCommon[i].style.display = "block";
      dogUncommon[i].style.display = "block";
      dogEpic[i].style.display = "block";
      catCommon[i].style.display = "block";
      catUncommon[i].style.display = "block";
      catEpic[i].style.display = "block";
    }
});
