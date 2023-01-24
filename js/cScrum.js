const enviar = () => {
  let count = 0;

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
  console.log(count);
};
