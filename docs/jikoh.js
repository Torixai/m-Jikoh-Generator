const copyTarget = document.getElementById("copyTarget");

const allSeason = {
  haikei: "拝啓　",
  atena: "貴社",
  aisatsu: [
    "ますますご発展のこととお慶び申し上げます。",
    "いよいよご隆盛のことと存じます。",
    "ますますご繁栄のこととお慶び申し上げます。",
    "ますますご清栄のこととお慶び申し上げます。"
  ]
};

const january = {
  jikouOne: ["初春の候　", "新春の候　"],
  jikouTwo: ["寒風の候　", "厳寒の候　"]
};

const february = {
  jikouOne: ["春寒の候　", "晩冬の候　"],
  jikouTwo: ["早春の候　", "残寒の候　"]
};

const march = {
  jikouOne: ["早春の候　", "浅春の候　"],
  jikouTwo: ["軽暖の候　", "早春の候　"]
};

const april = {
  jikouOne: ["春陽の候　", "春眠の候　"],
  jikouTwo: ["陽春の候　", "春風の候　"]
};

const may = {
  jikouOne: ["新緑の候　", "薫風の候　"],
  jikouTwo: ["青葉の候　", "若葉の候　"]
};

const june = {
  jikouOne: ["入梅の候　", "薄暑の候　"],
  jikouTwo: ["梅雨の候　", "初夏の候　"]
};

const july = {
  jikouOne: ["向暑の候　", "盛夏の候　"],
  jikouTwo: ["大暑の候　", "猛暑の候　"]
};

const august = {
  jikouOne: ["盛夏の候　", "残炎の候　"],
  jikouTwo: ["残夏の候　", "残暑の候　"]
};

const september = {
  jikouOne: ["野分の候　", "初秋の候　"],
  jikouTwo: ["秋晴の候　", "秋涼の候　"]
};

const october = {
  jikouOne: ["仲秋の候　", "寒露の候　"],
  jikouTwo: ["錦秋の候　", "紅葉の候　"]
};

const november = {
  jikouOne: ["深秋の候　", "季秋の候　"],
  jikouTwo: ["霜秋の候　", "向寒の候　"]
};

const december = {
  jikouOne: ["初冬の候　", "師走の候　"],
  jikouTwo: ["歳晩の候　", "歳末の候　"]
};

function printJikou() {
  let selectedM = document.getElementById("monthA").value;
  let selectedD = document.getElementById("daysA").value;

  if (selectedM === "1" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = january.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "1" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = january.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "2" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = february.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "2" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = february.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "3" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = march.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "3" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = march.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "4" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = april.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "4" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = april.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "5" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = may.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "5" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = may.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "6" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = june.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "6" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = june.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "7" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = july.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "7" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = july.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "8" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = august.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "8" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = august.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "9" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = september.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "9" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = september.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "10" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = october.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "10" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = october.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "11" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = november.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "11" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = november.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "12" && selectedD === "1") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = december.jikouOne[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (selectedM === "12" && selectedD === "2") {
    let ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    let jik = december.jikouTwo[Math.floor(Math.random() * 2)];
    copyTarget.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  }
}

function copyToClipboard() {
  copyTarget.select();
  document.execCommand("Copy");
}

console.log("ooo");
