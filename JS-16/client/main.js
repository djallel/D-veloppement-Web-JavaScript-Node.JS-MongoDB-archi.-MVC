var  txt = "";
for(var i = 1; i< 11; i++){
    console.log("i est "+i);
    txt+= i+ '*' +5+'='+(i*5) + "<br>";
}
document.querySelector("#resultat").innerHTML= txt;