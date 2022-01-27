document.getElementById("calbutton").onclick =function(){
    x=lovecalc();
    document.getElementById("result").innerHTML="<p> Your Score is " + lovecalc() +"%</p>"  //relationadvice(x);

}

function lovecalc(name1, name2){
    name1=document.getElementById("yourname").value;
    name2 =document .getElementById("lovername").value;
    var result = Math.floor(Math.random()*100+1);
    return result;
    

}
//function relationadvice(x){
    //if (x < 10) {
        //return " It looks pretty hopeless"
      //} else if (x < 20) {
       // return " Don't get your hopes up"
      //} else if (x < 30) {
        //return " Things don't look good"
      //} else if (x<40) {
        //return " It could be worse"
      //}
      //else if (x<50) {
        //return "There is no harm in trying"
     // }
      //else if (x<60) {
       // return "Things are getting warmer" 
      //}
      //else if (x<70) {
       // return " Good odds"  
      //}
      //else if (x<80) {
       // return "Go ahead and do it"
      //}
      //else if (x<90) {
        //return " Oh man. I can feel the heat here"
    //}
      //else {
      //  return "She is the one. Go for it!!!"
    //}}