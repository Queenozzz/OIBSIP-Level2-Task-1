const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.btn');

  
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == '×') {
            buttonText = '*';
        }

        if (buttonText == '÷') {
            buttonText = '/';
        }

        
    
        result.value += buttonText;
    });
};
  
    
function percent() {
  result.value = result.value / 100;
}

function degrees() {
  result.value = result.value * (180 / Math.PI);
}

function plusMinus() {
  if (result.value.charAt(0) === "-") {
    result.value = result.value.slice(1);
  } else {
    result.value = "-" + result.value;
  }
}

function sin() {
    result.value = Math.sin(result.value);
}

function cos() {
    result.value = Math.cos(result.value);
}

function tan() {
    result.value = Math.tan(result.value);
}

function pow() {
    result.value = Math.pow(result.value, 2);
}

function pow3() {
    result.value = Math.pow(result.value, 3);
}

function sqrt() {
    result.value = Math.sqrt(result.value, 2);
}

function sqrt3() {
    result.value = Math.sqrt(result.value, 3);
}

function log() {
    result.value = Math.log(result.value);
}

function radians() {
  result.value = result.value * (Math.PI / 180);
}
function pi() {
    result.value = 3.14159265359;
}

function e() {
    result.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = result.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    result.value = f;
}

function backspc() {
    result.value = result.value.substr(0, result.value.length - 1);
}


   

   

const currentdate = new Date(); 
document.getElementById("today-date").innerHTML= currentdate.toLocaleString();



const colorTheme = document.querySelectorAll('[name="themeColor"]');

const saveTheme = function(themeColor){
    localStorage.setItem("themes", themeColor);
};

const updateTheme = function(){
    const newTheme =  localStorage.getItem("themes");

    colorTheme.forEach((themeIcon) => {
        if(themeIcon.id === newTheme) {
            themeIcon.checked = true;
        }
    });

    document.documentElement.className = themeColor;
};


colorTheme.forEach((themeIcon) => {
    themeIcon.addEventListener("click", () =>{
        saveTheme(themeIcon.id);
    });
});


document.onload = updateTheme();




