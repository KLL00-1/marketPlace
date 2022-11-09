setTimeout(() => {
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

  for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener("click", () => {
      let key;
      key = i;
      number = counter[key].innerHTML;
      number++;
      counter[key].innerHTML = number;
    });
  }
  // functions for search________________________
  function dogCommonFunction(property) {
    for (a = 0; a < dogCommon.length; a++)
      dogCommon[a].style.display = property;
  }
  function dogUncommonFunction(property) {
    for (b = 0; b < dogUncommon.length; b++)
      dogUncommon[b].style.display = property;
  }
  function dogEpicFunction(property) {
    for (c = 0; c < dogEpic.length; c++) dogEpic[c].style.display = property;
  }
  function catCommonFunction(property) {
    for (d = 0; d < catCommon.length; d++)
      catCommon[d].style.display = property;
  }
  function catUncommonFunction(property) {
    for (v = 0; v < catUncommon.length; v++)
      catUncommon[v].style.display = property;
  }
  function catEpicFunction(property) {
    for (q = 0; q < catEpic.length; q++) catEpic[q].style.display = property;
  }
  //________________________________________________

  button.addEventListener("click", () => {
    for (i = 0; i < allCard.length; i++) {
      allCard[i].classList.toggle("column_2");
      allHeadImageCard[i].classList.toggle("card_img");
    }
    nftCards.classList.toggle("center");
  });

  selectButton.addEventListener("click", () => {
    if (selectDog.selected && allRar.selected) {
      {
        dogCommonFunction("block");
        dogUncommonFunction("block");
        dogEpicFunction("block");
        catCommonFunction("none");
        catUncommonFunction("none");
        catEpicFunction("none");
      }
    } else if (selectCat.selected && allRar.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("none");
        dogEpicFunction("none");
        catCommonFunction("block");
        catUncommonFunction("block");
        catEpicFunction("block");
      }
    } else if (allPet.selected && selectCommon.selected) {
      {
        dogCommonFunction("block");
        dogUncommonFunction("none");
        dogEpicFunction("none");
        catCommonFunction("block");
        catUncommonFunction("none");
        catEpicFunction("none");
      }
    } else if (allPet.selected && selectUncommon.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("block");
        dogEpicFunction("none");
        catCommonFunction("none");
        catUncommonFunction("block");
        catEpicFunction("none");
      }
    } else if (allPet.selected && selectEpic.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("none");
        dogEpicFunction("block");
        catCommonFunction("none");
        catUncommonFunction("none");
        catEpicFunction("block");
      }
    } else if (selectDog.selected && selectCommon.selected) {
      {
        dogCommonFunction("block");
        dogUncommonFunction("none");
        dogEpicFunction("none");
        catCommonFunction("none");
        catUncommonFunction("none");
        catEpicFunction("none");
      }
    } else if (selectDog.selected && selectUncommon.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("block");
        dogEpicFunction("none");
        catCommonFunction("none");
        catUncommonFunction("none");
        catEpicFunction("none");
      }
    } else if (selectDog.selected && selectEpic.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("none");
        dogEpicFunction("block");
        catCommonFunction("none");
        catUncommonFunction("none");
        catEpicFunction("none");
      }
    } else if (selectCat.selected && selectCommon.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("none");
        dogEpicFunction("none");
        catCommonFunction("block");
        catUncommonFunction("none");
        catEpicFunction("none");
      }
    } else if (selectCat.selected && selectUncommon.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("none");
        dogEpicFunction("none");
        catCommonFunction("none");
        catUncommonFunction("block");
        catEpicFunction("none");
      }
    } else if (selectCat.selected && selectEpic.selected) {
      {
        dogCommonFunction("none");
        dogUncommonFunction("none");
        dogEpicFunction("none");
        catCommonFunction("none");
        catUncommonFunction("none");
        catEpicFunction("block");
      }
    } else {
      dogCommonFunction("block");
      dogUncommonFunction("block");
      dogEpicFunction("block");
      catCommonFunction("block");
      catUncommonFunction("block");
      catEpicFunction("block");
    }
  });
}, 1000);
