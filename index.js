const a1 = document.querySelectorAll(".spaces");
const display = document.getElementById("display");
let a2 = [];
let m = true;
a1.forEach(ael);
function ael(element){
    element.addEventListener("click", () => {
        if(element.textContent==""){
            if(m){
                element.textContent = "X";
                if(((a1[0].textContent=="X")&&(a1[1].textContent=="X")&&(a1[2].textContent=="X"))||((a1[3].textContent=="X")&&(a1[4].textContent=="X")&&(a1[5].textContent=="X"))||((a1[6].textContent=="X")&&(a1[7].textContent=="X")&&(a1[8].textContent=="X"))||((a1[0].textContent=="X")&&(a1[3].textContent=="X")&&(a1[6].textContent=="X"))||((a1[1].textContent=="X")&&(a1[4].textContent=="X")&&(a1[7].textContent=="X"))||((a1[2].textContent=="X")&&(a1[5].textContent=="X")&&(a1[8].textContent=="X"))||((a1[0].textContent=="X")&&(a1[4].textContent=="X")&&(a1[8].textContent=="X"))||((a1[2].textContent=="X")&&(a1[4].textContent=="X")&&(a1[6].textContent=="X"))){
                    display.textContent = "You Win";
                    m = false;
                }
                if(m){
                    circle();
                }
            }
        }
    });    
}
function circle(){
    a2 = [];
    a1.forEach((element) => {
        if(element.textContent==""){
            a2.push(element);
        }
    });
    let n = a2.length;
    if(n > 0){
        let p = Math.floor(Math.random() * n);
        a2[p].textContent = "O"; 
    }
}