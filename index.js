window.onload=function (){
document.getElementById("lo").className="del";
document.getElementById("lod").className="del";
}
let t = false;
for (let i = 1;i<=26;i++){
document.getElementById(i).addEventListener('playing',function (ev){
for (let r = 0;r<25;r++){
document.getElementById(ev.target.id).className="ff";
let f = document.querySelectorAll("div > audio:not(."+ev.target.className+")");
document.getElementById(ev.target.id).className="none";
document.getElementById(f[r].id).pause();}
})}