var buttonLength=document.querySelectorAll(".drum").length;
for(var i=0;i<buttonLength;i++){;
    document.querySelectorAll("button")[i].addEventListener("click",eventListener);
    document.addEventListener("keyup",eventListener);
     
    }      
        
       
function eventListener(){

    var clickButton=this.innerHTML;
    makeSound(clickButton);
    makeAnimation(clickbutton);

            
    }
    document.addEventListener("keyup",press)
        function press(event){
            makeSound(event.key)  ;
            makeAnimation(event.key); 
        }

function makeSound(key){
    switch(key){
        case 'w':
            var audio1=new Audio("tom-1.mp3")
            audio1.play();
            break;
        case 'a':
            var audio1=new Audio("tom-2.mp3")
            audio1.play();
            break;
        case 's':
            var audio1=new Audio("tom-3.mp3")
            audio1.play();
            break;
        case 'd':
            var audio1=new Audio("tom-4.mp3")
            audio1.play();
            break;
        case 'j':
           var audio1=new Audio("crash.mp3")
           audio1.play();
           break;
        case 'k':
           var audio1=new Audio("kick-bass.mp3")
           audio1.play();
           break;
        case 'l':
           var audio1=new Audio("snare.mp3")
           audio1.play();
           break;

}
}
function makeAnimation(currentKey){
    var animation= document.querySelector("." + currentKey);
    animation.classList.add("pressed");
    setTimeout(remove,100);
    function remove(){
        animation.classList.remove("pressed");
    }
}
