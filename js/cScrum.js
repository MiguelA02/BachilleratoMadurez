let count = 0;
let scoreISTQ = document.getElementById('porcentaje')
let score = 0

const enviarScrum = () => {
  count = 0;

  var rad1 = document.myForm1.myRadios1;
  var rad2 = document.myForm2.myRadios2;
  var rad3 = document.myForm3.myRadios3;
  var rad4 = document.myForm4.myRadios4;
  var rad5 = document.myForm5.myRadios5;
  var rad6 = document.myForm6.myRadios6;
  var rad7 = document.myForm7.myRadios7;
  var rad8 = document.myForm8.myRadios8;
  var rad9 = document.myForm9.myRadios9;
  var rad10 = document.myForm10.myRadios10;
  var rad11 = document.myForm11.myRadios11;
  var rad12 = document.myForm12.myRadios12;
  var rad13 = document.myForm13.myRadios13;
  var rad14 = document.myForm14.myRadios14;
  var rad15 = document.myForm15.myRadios15;

  const rad = [
    rad1,
    rad2,
    rad3,
    rad4,
    rad5,
    rad5,
    rad6,
    rad7,
    rad8,
    rad9,
    rad10,
    rad11,
    rad12,
    rad13,
    rad14,
    rad15,
  ];

  for (var i = 0; i < rad.length; i++) {
    if(rad[i].value === '1'){
        count++
    }
  }
  score = Math.floor(count*100/rad.length)
  console.log(score);
};

const enviarISTQ = () => {
    count = 0;
  
    var rad1 = document.myForm1.myRadios1;
    var rad2 = document.myForm2.myRadios2;
    var rad3 = document.myForm3.myRadios3;
    var rad4 = document.myForm4.myRadios4;
    var rad5 = document.myForm5.myRadios5;
    var rad6 = document.myForm6.myRadios6;
    var rad7 = document.myForm7.myRadios7;
    var rad8 = document.myForm8.myRadios8;
    var rad9 = document.myForm9.myRadios9;
    var rad10 = document.myForm10.myRadios10;
    var rad11 = document.myForm11.myRadios11;
    var rad12 = document.myForm12.myRadios12;
    var rad13 = document.myForm13.myRadios13;
    var rad14 = document.myForm14.myRadios14;
    var rad15 = document.myForm15.myRadios15;

    var rad16 = document.myForm16.myRadios16;
    var rad17 = document.myForm17.myRadios17;
    var rad18 = document.myForm18.myRadios18;
    var rad19 = document.myForm19.myRadios19;
    var rad20 = document.myForm20.myRadios20;
    var rad21 = document.myForm21.myRadios21;
    var rad22 = document.myForm22.myRadios22;
    var rad23 = document.myForm23.myRadios23;
    var rad24 = document.myForm24.myRadios24;
    var rad25 = document.myForm25.myRadios25;
    var rad26 = document.myForm26.myRadios26;
    
    var rad29 = document.myForm29.myRadios29;
    var rad30 = document.myForm29.myRadios29;

    var rad31 = document.myForm31.myRadios31;
    var rad32 = document.myForm32.myRadios32;
    var rad33 = document.myForm33.myRadios33;
    var rad34 = document.myForm34.myRadios34;
    var rad35 = document.myForm35.myRadios35;
    var rad36 = document.myForm36.myRadios36;
    
    var rad38 = document.myForm38.myRadios38;
    var rad39 = document.myForm39.myRadios39;
    var rad40 = document.myForm40.myRadios40;
  
    const rad = [
      rad1,
      rad2,
      rad3,
      rad4,
      rad5,
      rad5,
      rad6,
      rad7,
      rad8,
      rad9,
      rad10,
      rad11,
      rad12,
      rad13,
      rad14,
      rad15,
      rad16,
      rad17,
      rad18,
      rad19,
      rad20,
      rad21,
      rad22,
      rad23,
      rad24,
      rad25,
      rad25,
      rad26,
      rad29,
      rad30,
      rad31,
      rad32,
      rad33,
      rad34,
      rad35,
      rad36,
      rad38,
      rad39,
      rad40
    ];
  
    for (var i = 0; i < rad.length; i++) {
      if(rad[i].value === '1'){
          count++
      }
    }
    score = Math.floor(count*100/rad.length)
    scoreISTQ.innerText = score
    console.log(score);
  };

  const meterPorcentaje = () => {
    scoreISTQ.innerText = score
  }