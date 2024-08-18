const urlParams = new URLSearchParams(window.location.search);
const passedValue = urlParams.get('value');


// Use the value as needed
console.log(passedValue);
const nam = document.getElementById('name')
nam.textContent = passedValue
const nam1 = document.getElementById('classname')
const nam2 = document.getElementById('alhan')
const nam3 = document.getElementById('taks')
const nam4 = document.getElementById('akeda')
const nam5 = document.getElementById('coptic')
const nam6 = document.getElementById('kodasAbsence')
const nam7 = document.getElementById('classAbsence')
const nam8 = document.getElementById('tasbhaAbsence')
const nam9 = document.getElementById('total')
const nam00 = document.getElementById('stterm')
const nn = document.getElementById('tt')

fetch("./n.json")
  .then((response) => response.json())
  .then((data) => {const student = data.find((item) => item.name.includes(passedValue))
    
    nam1.innerText = student.className
    if(student.alhan === -1){
        nam2.innerText="لم يؤدي الامتحان";
    } else{nam2.innerText = student.alhan}
    if(student.taks === -1){
        nam3.innerText="لم يؤدي الامتحان";
    } else{nam3.innerText = student.taks}
    if(student.akeda === -1){
        nam4.innerText="لم يؤدي الامتحان";
    } else{nam4.innerText = student.akeda}
    if(student.coptic === -1){
        nam5.innerText="لم يؤدي الامتحان";
    } else{nam5.innerText = student.coptic}
    nam6.innerText = student.kodasAbsence
    nam7.innerText = student.classAbsence
    if (student.tasbhaAbsence === -1) {
        nn.style = "display: none;";
      } else {
        nn.style = "display: block;";}
        nam8.innerText = student.tasbhaAbsence
    nam8.innerText = student.tasbhaAbsence
    nam9.innerText = student.total
    nam00.innerText = student.stterm});
   
     