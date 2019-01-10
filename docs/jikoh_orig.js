function copyToClipboard() {
var copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
};

const allSeason = {
	haikei: '拝啓　',
  atena: '貴社',
  aisatsu: ['ますますご発展のこととお慶び申し上げます。', 'いよいよご隆盛のことと存じます。', 'ますますご繁栄のこととお慶び申し上げます。', 'ますますご清栄のこととお慶び申し上げます。']
};

const january = {
  jikouOne: ['初春の候　', '新春の候　'],
  jikouTwo: ['大寒の候　', '厳寒の候　']
};

const february = {
  jikouOne: ['春寒の候　', '晩冬の候　'],
  jikouTwo: ['早春の候　', '残寒の候　']
};

const march = {
  jikouOne: ['早春の候　', '浅春の候　'],
  jikouTwo: ['軽暖の候　', '早春の候　']
};

const april = {
  jikouOne: ['春陽の候　', '春眠の候　'],
  jikouTwo: ['陽春の候　', '春風の候　']
};

const may = {
  jikouOne: ['新緑の候　', '薫風の候　'],
  jikouTwo: ['青葉の候　', '若葉の候　']
};

const june = {
  jikouOne: ['入梅の候　', '薄暑の候　'],
  jikouTwo: ['梅雨の候　', '初夏の候　']
};

const july = {
  jikouOne: ['向暑の候　', '盛夏の候　'],
  jikouTwo: ['大暑の候　', '猛暑の候　']
};

const august = {
  jikouOne: ['盛夏の候　', '残炎の候　'],
  jikouTwo: ['残夏の候　', '残暑の候　']
};

const september = {
  jikouOne: ['野分の候　', '初秋の候　'],
  jikouTwo: ['秋晴の候　', '秋涼の候　']
};

const october = {
  jikouOne: ['仲秋の候　', '寒露の候　'],
  jikouTwo: ['錦秋の候　', '紅葉の候　']
};

const november = {
  jikouOne: ['深秋の候　', '季秋の候　'],
  jikouTwo: ['霜秋の候　', '向寒の候　']
};

const december = {
  jikouOne: ['初冬の候　', '師走の候　'],
  jikouTwo: ['歳晩の候　', '歳末の候　']
};


function getM(){
  var_m = document.getElementById('monthA').value;
};

function getD(){
  var_d = document.getElementById('daysA').value;
}

function printJikou(){
  getM();
  getD();
  if (var_m === '1' && var_d === '1'){
    target = document.getElementById('copyTarget');
    ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    jik = january.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '1' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = january.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '2' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = february.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '2' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = february.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '3' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = march.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '3' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = march.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '4' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = april.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '4' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = april.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '5' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = may.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '5' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = may.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '6' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = june.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '6' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = june.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '7' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = july.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '7' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = july.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '8' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = august.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '8' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = august.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '9' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = september.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '9' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = september.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '10' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = october.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '10' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = october.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '11' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = november.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '11' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = november.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '12' && var_d === '1'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = december.jikouOne[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  } else if (var_m === '12' && var_d === '2'){
    target = document.getElementById('copyTarget');
    var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
    var jik = december.jikouTwo[Math.floor(Math.random() * 2)];
    target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
  }
};


function test(){
    target = document.getElementById('copyTarget');
    getM();
    if (var_m === '1'){
      var ki = allSeason.aisatsu[Math.floor(Math.random() * 4)];
      var jik = december.jikouTwo[Math.floor(Math.random() * 2)];
      target.innerHTML = allSeason.haikei + jik + allSeason.atena + ki;
    } else {
    target.innerHTML = var_m;
  }
};
