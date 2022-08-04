x=0;
y=0;
screen_width=0;
screen_height=0;
draw_apple="";
apple="";
speak_data="";
to_number=0;

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
      var content=event.results[0][0].transcript;
      document.getElementById("status").innerHTML="The Speech has been recognised as-"+content;
      to_number=Number(content);
      console.log(content);
      if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML="Started Drawing Apple";
        draw_apple=="set";
      }else{
        document.getElementById("status").innerHTML="The speech has not recognized a number";
      }
    }
    function draw(){
        if(draw_apple=="set")
        {
            document.getElementById("status").innerHTML=to_number+"Apples Drawn";
            draw_apple="";
            speak_data=to_number+"Apples Drawn";
            speak();
            for(var i=1; i <= to_number;i++){
                    x=Math.floor(Math.random()*700);
                    y=Math.floor(Math.random()*500);
                    image(apple,x,y,50,50);
            }
        }
    }
function setup(){
    canvas=createCanvas(900,600);
}
function speak(){
    var synth=window.speechSynthesis;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data="";
}
function preload(){
    apple=loadImage("apple.jpg");
}