const btns = document.getElementById('btns');
const numbers = [1,2,3,6,9,8,7,4];
const buttons = {};
var currentState = -1;
for (let i=0; i<9;i++){
    const btn = document.createElement('button');
    btn.id = `btn${i+1}`;
    btn.innerHTML = i+1;
    buttons[i+1] = btn;
    btns.appendChild(btn);
    if(i==4){
        btn.addEventListener("click", () => {
            numbers.forEach((num,j) => {
                buttons[num].innerHTML = numbers[(j+currentState + 8)%8];  
            });
            currentState = (currentState - 1)%8 ;
        });
    }
}