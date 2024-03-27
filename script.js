


function var_show(){
    document.getElementById("first").style.display="block";
  }
  function var_hide(){
    document.getElementById("first").style.display="none";
  }
  function let_show(){
    document.getElementById("second").style.display="block";
  }
  function let_hide(){
    document.getElementById("second").style.display="none";
  }
  function const_show(){
    document.getElementById("three").style.display="block";
  }
  function const_hide(){
    document.getElementById("three").style.display="none";
  }






function opening(){
    let name = prompt("please enter your name");
    let mark = prompt("please enter your mark");
    if(mark>=50 && mark<=70){

        document.getElementById("output").innerHTML= name+" "+"you are pass";

    } else if( mark>70 && mark<100){

        document.getElementById("output").innerHTML= name+" "+"you are exxelent";
    }
    else{
        document.getElementById("output").innerHTML= name+" "+"you are fail";
    }
} 




function fit(){
    let age=prompt("please enter your age");
    let height=prompt("please enter your height");
    let weight=prompt("please enter your weight");
    if(age>18 && height>6 && weight>50){
        document.getElementById("outpit").innerHTML= "you are eligeble";
    }else{
        document.getElementById("outpit").innerHTML= "you are not eligeble";
    }
}





function prime(){
    let number = prompt("Enter your number");
    let isPrime = true;

    if(number == 1){
        document.getElementById("outpet").innerHTML="1 is prime nor composite number."
    }
    else if( number>1){
           for( let i=2;i<number/2;i++){
            if(number % i==0 ){
                isPrime=false;
                break;
            }
           }
           if(isPrime==true){
               document.getElementById("outpet").innerHTML="your number is prime"
           }else{
            document.getElementById("outpet").innerHTML="your number is not a prime"
           }
    }
    else{
        document.getElementById("outpet").innerHTML="your number is not a prime"
    }
}

