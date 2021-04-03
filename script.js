
function getscores(){
   
    var i,total=0, peracc=0,pertotal=0,q=0;

    var n = document.getElementsByClassName("box");
    for( i=0; i<(n.length);i++){
        var q =Number(n[i].value);
        
        if(q<100){
            if(q>0){
            peracc+=1;
            }
            total+=q;
        
    if(peracc>0){
        pertotal = total/peracc;
    }else{
        pertotal=0;
    }

    } else{
        alert("INVALID SCORE ENTERED!")
    }

}
document.getElementById("ans").innerText = total;
document.getElementById("per").innerText = pertotal+"%";
}
function reset(){
    let total=0;
    var i, peracc=0;
    var n = document.getElementsByClassName("box");
    for( i=0; i<(n.length);i++){
      n[i].value=0;
    }
    document.getElementById("ans").innerText = "-";
    document.getElementById("per").innerText = "%";

}

