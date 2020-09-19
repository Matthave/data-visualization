export const rectVisibilityFunc = (currentIndexOfSection) => {
  const rect0 = document.getElementById("0");
  const rect1 = document.getElementById("1");
  const rect2 = document.getElementById("2");
  const rect3 = document.getElementById("3");
  const rect4 = document.getElementById("4");
  const rect5 = document.getElementById("5");
  const rect6 = document.getElementById("6");
  const rect7 = document.getElementById("7");
  const rect8 = document.getElementById("8");
  const rect9 = document.getElementById("9");
  const rect10 = document.getElementById("10");
  const rect11 = document.getElementById("11");

  if (currentIndexOfSection >= 2) {
    rect0.style.opacity = 1;
  } else {
    rect0.style.opacity = 0;
  }

  if (currentIndexOfSection >= 3) {
    rect1.style.opacity = 1;
    rect1.style.fill = "rgba(247,148,49,0.85)";
  } else {
    rect1.style.opacity = 0;
  }

  if (currentIndexOfSection >= 4) {
    rect2.style.opacity = 1;
    rect2.style.fill = "rgba(0,150,56,0.85)";
  } else {
    rect2.style.opacity = 0;
  }

  if (currentIndexOfSection >= 5) {
    rect3.style.opacity = 1;
    rect3.style.fill = "rgba(0,55,161,0.85)";
  } else {
    rect3.style.opacity = 0;
  }

  if (currentIndexOfSection >= 6) {
    rect4.style.opacity = 1;
    rect4.style.fill = "rgba(217,16,35,0.85)";
  } else {
    rect4.style.opacity = 0;
  }

  if (currentIndexOfSection >= 7) {
    rect5.style.opacity = 1;
    rect5.style.fill = "rgba(244,202,21,0.85)";
  } else {
    rect5.style.opacity = 0;
  }

  if (currentIndexOfSection >= 8) {
    rect6.style.opacity = 1;
    rect6.style.fill = "rgba(0,101,69,0.85)";
  } else {
    rect6.style.opacity = 0;
  }

  if (currentIndexOfSection >= 9) {
    rect7.style.opacity = 1;
    rect7.style.fill = "rgba(0,19,133,0.85)";
  } else {
    rect7.style.opacity = 0;
  }

  if (currentIndexOfSection >= 10) {
    rect8.style.opacity = 1;
    rect8.style.fill = "rgba(255,196,0,0.85)";
  } else {
    rect8.style.opacity = 0;
  }

  if (currentIndexOfSection >= 11) {
    rect9.style.opacity = 1;
    rect9.style.fill = "rgb(112,167,216,0.85)";
  } else {
    rect9.style.opacity = 0;
  }

  if (currentIndexOfSection >= 12) {
    rect10.style.opacity = 1;
    rect10.style.fill = "rgba(206,42,29,0.85)";
  } else {
    rect10.style.opacity = 0;
  }

  if (currentIndexOfSection >= 13) {
    rect11.style.opacity = 1;
    rect11.style.fill = "rgba(0,34,144,0.85)";
  } else {
    rect11.style.opacity = 0;
  }
};
