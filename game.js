const color = ['red', 'blue', 'green', 'yellow'];
let l=0;
let hs=0;
let ys=0;
let c=-1;

var colorpattern=[];
var usercolorpattern=[];

$(".box").on("tap",function() {
    c++;
    var userColor=this.classList[0];
     console.log(userColor);
    $('.'+userColor).addClass("clicked");

    aud(userColor);

    setTimeout(function(){
    $('.'+userColor).removeClass("clicked");
    },200);  
  
  comp(userColor)
});

    $(".box").click(function() {
        c++;
        var userColor=this.classList[0];
         console.log(userColor);
        $('.'+userColor).addClass("clicked");
    
        aud(userColor);
    
        setTimeout(function(){
        $('.'+userColor).removeClass("clicked");
        },200);  
      
      comp(userColor)
    });


    function comp(userColor){
        usercolorpattern.push(userColor);

        if(userColor==colorpattern[c]){
            ys++;
            if(usercolorpattern.length==colorpattern.length){
                setTimeout(function(){
                    usercolorpattern=[];
                    c=-1;
                    start();
                },1000);  
            }
            $(".cs").text("Your score:"+ys);
        }
          else{
            aud("wrong");
            
            $(".s").text("Game over! Press start to play again.")
            usercolorpattern=[];
            colorpattern=[];
            if(ys>hs){
                hs=ys;
            $(".hs").text("High score:"+hs);
            }
           ys=0;
           $(".cs").text("Your score:"+ys);
          l=0;
          c=-1;
        }   
        
    }
    


$(".b").click(function(){
    $(".s").text("The game begins!");
    if(l<=0)
     start();
      
});


$(".b").on("tap",function(){
    $(".s").text("The game begins!");
    if(l<=0)
     start();
      
});


function start(){
    l++;
    $(".l").text("levle:"+l);
    var x=Math.floor(Math.random()*4);
    colorpattern.push(color[x]);
   
    $('.'+color[x]).addClass("press");
    aud(color[x]);
   setTimeout(function(){
  $('.'+color[x]).removeClass("press");
 },200);
  }

function aud(y){
    var audio= new Audio(y+'.mp3');
    audio.play();
    
}






