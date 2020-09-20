export const rectVisibilityHellOfIfs = (currentIndexOfSection) => {
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

  const fixedSec0 = document.getElementById("fixedSection0");
  const fixedSec1 = document.getElementById("fixedSection1");
  const fixedSec2 = document.getElementById("fixedSection2");
  const fixedSec3 = document.getElementById("fixedSection3");
  const fixedSec4 = document.getElementById("fixedSection4");
  const fixedSec5 = document.getElementById("fixedSection5");
  const fixedSec6 = document.getElementById("fixedSection6");
  const fixedSec7 = document.getElementById("fixedSection7");
  const fixedSec8 = document.getElementById("fixedSection8");
  const fixedSec9 = document.getElementById("fixedSection9");
  const fixedSec10 = document.getElementById("fixedSection10");
  const fixedSec11 = document.getElementById("fixedSection11");

  const icons = document.querySelectorAll(".main__advice");

  const topActive = "50%";
  const topUnactive = "80%";

  if (currentIndexOfSection === 2) {
    fixedSec0.style.top = topActive;
    fixedSec0.style.opacity = 1;
  } else {
    fixedSec0.style.top = topUnactive;
    fixedSec0.style.opacity = 0;
  }

  if (currentIndexOfSection === 3) {
    fixedSec1.style.top = topActive;
    fixedSec1.style.opacity = 1;
  } else {
    fixedSec1.style.top = topUnactive;
    fixedSec1.style.opacity = 0;
  }

  if (currentIndexOfSection === 4) {
    fixedSec2.style.top = topActive;
    fixedSec2.style.opacity = 1;
  } else {
    fixedSec2.style.top = topUnactive;
    fixedSec2.style.opacity = 0;
  }

  if (currentIndexOfSection === 5) {
    fixedSec3.style.top = topActive;
    fixedSec3.style.opacity = 1;
  } else {
    fixedSec3.style.top = topUnactive;
    fixedSec3.style.opacity = 0;
  }

  if (currentIndexOfSection === 6) {
    fixedSec4.style.top = topActive;
    fixedSec4.style.opacity = 1;
  } else {
    fixedSec4.style.top = topUnactive;
    fixedSec4.style.opacity = 0;
  }

  if (currentIndexOfSection === 7) {
    fixedSec5.style.top = topActive;
    fixedSec5.style.opacity = 1;
  } else {
    fixedSec5.style.top = topUnactive;
    fixedSec5.style.opacity = 0;
  }

  if (currentIndexOfSection === 8) {
    fixedSec6.style.top = topActive;
    fixedSec6.style.opacity = 1;
  } else {
    fixedSec6.style.top = topUnactive;
    fixedSec6.style.opacity = 0;
  }

  if (currentIndexOfSection === 9) {
    fixedSec7.style.top = topActive;
    fixedSec7.style.opacity = 1;
  } else {
    fixedSec7.style.top = topUnactive;
    fixedSec7.style.opacity = 0;
  }

  if (currentIndexOfSection === 10) {
    fixedSec8.style.top = topActive;
    fixedSec8.style.opacity = 1;
  } else {
    fixedSec8.style.top = topUnactive;
    fixedSec8.style.opacity = 0;
  }

  if (currentIndexOfSection === 11) {
    fixedSec9.style.top = topActive;
    fixedSec9.style.opacity = 1;
  } else {
    fixedSec9.style.top = topUnactive;
    fixedSec9.style.opacity = 0;
  }

  if (currentIndexOfSection === 12) {
    fixedSec10.style.top = topActive;
    fixedSec10.style.opacity = 1;
  } else {
    fixedSec10.style.top = topUnactive;
    fixedSec10.style.opacity = 0;
  }

  if (currentIndexOfSection === 13) {
    fixedSec11.style.top = topActive;
    fixedSec11.style.opacity = 1;
  } else {
    fixedSec11.style.top = topUnactive;
    fixedSec11.style.opacity = 0;
  }

  // RECT EFFECT

  if (currentIndexOfSection >= 2) {
    rect0.style.opacity = 1;
    rect0.style.transform = "scaleX(1)";
  } else {
    rect0.style.opacity = 0;
    rect0.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 3) {
    rect1.style.opacity = 1;
    rect1.style.fill = "rgba(247,148,49,0.85)";
    rect1.style.transform = "scaleX(1)";
  } else {
    rect1.style.opacity = 0;
    rect1.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 4) {
    rect2.style.opacity = 1;
    rect2.style.fill = "rgba(0,150,56,0.85)";
    rect2.style.transform = "scaleX(1)";
  } else {
    rect2.style.opacity = 0;
    rect2.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 5) {
    rect3.style.opacity = 1;
    rect3.style.fill = "rgba(0,55,161,0.85)";
    rect3.style.transform = "scaleX(1)";
  } else {
    rect3.style.opacity = 0;
    rect3.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 6) {
    rect4.style.opacity = 1;
    rect4.style.fill = "rgba(217,16,35,0.85)";
    rect4.style.transform = "scaleX(1)";
  } else {
    rect4.style.opacity = 0;
    rect4.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 7) {
    rect5.style.opacity = 1;
    rect5.style.fill = "rgba(244,202,21,0.85)";
    rect5.style.transform = "scaleX(1)";
  } else {
    rect5.style.opacity = 0;
    rect5.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 8) {
    rect6.style.opacity = 1;
    rect6.style.fill = "rgba(0,101,69,0.85)";
    rect6.style.transform = "scaleX(1)";
  } else {
    rect6.style.opacity = 0;
    rect6.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 9) {
    rect7.style.opacity = 1;
    rect7.style.fill = "rgba(0,19,133,0.85)";
    rect7.style.transform = "scaleX(1)";
  } else {
    rect7.style.opacity = 0;
    rect7.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 10) {
    rect8.style.opacity = 1;
    rect8.style.fill = "rgba(255,196,0,0.85)";
    rect8.style.transform = "scaleX(1)";
  } else {
    rect8.style.opacity = 0;
    rect8.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 11) {
    rect9.style.opacity = 1;
    rect9.style.fill = "rgb(112,167,216,0.85)";
    rect9.style.transform = "scaleX(1)";
  } else {
    rect9.style.opacity = 0;
    rect9.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 12) {
    rect10.style.opacity = 1;
    rect10.style.fill = "rgba(206,42,29,0.85)";
    rect10.style.transform = "scaleX(1)";
  } else {
    rect10.style.opacity = 0;
    rect10.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 13) {
    rect11.style.opacity = 1;
    rect11.style.fill = "rgba(0,34,144,0.85)";
    rect11.style.transform = "scaleX(1)";
  } else {
    rect11.style.opacity = 0;
    rect11.style.transform = "scaleX(0)";
  }

  if (currentIndexOfSection >= 14) {
    icons.forEach((icon) => {
      icon.style.opacity = 1;
    });
  } else {
    icons.forEach((icon) => {
      icon.style.opacity = 0;
    });
  }
};
