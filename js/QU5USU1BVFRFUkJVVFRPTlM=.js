const MAX=10;
function antimatter(num){
    localStorage.setItem("antimatter"+num,true);
    document.getElementById("toast").style.opacity="100%";
    document.getElementById("amount").innerText=getAntimatterButtons();
}
function getAntimatterButtons(){
    let amount=0;
    for(i=1;i<MAX;i++){
        if(localStorage.getItem("antimatter"+i)){amount++;}
    }
    if(localStorage.getItem("antimatter1024")){amount++;} //template one
    return amount+"/"+MAX;
}
console.log("TEST")