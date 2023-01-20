let count = 0
const enviar = () => {
    console.log(count)
    return false
}



var rad = document.myForm1.myRadios1;

for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if(this.value === '1'){
            count++;
        }else{
            count--
        }
        
    });
}

var rad = document.myForm2.myRadios2;

for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if(this.value === '1'){
            count++;
        }else{
            count--
        }
        
    });
}