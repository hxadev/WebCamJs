'use strict';

const video=document.getElementById('video');
const canvas=document.getElementById('canvas');
const btnShot=document.getElementById('shot');
const errorMsgElement=document.querySelector('span#errorMsg');
const btnSaveImage=document.getElementById("saveImage");
var image="";

const constraints={audio:false,video:{width:200, height:200}};

async function init(){
    try{
        const stream=await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
        console.log(navigator.mediaDevices.enumerateDevices());

    }catch(ex)
    {
        errorMsgElement.innerHTML='navigator.getUserMedia error:${ex.toString()}';
    }
}

function handleSuccess(stream){
    window.stream=stream;
    video.srcObject=stream;
}


init();

var context=canvas.getContext('2d');
btnShot.addEventListener("click",function(){
    context.drawImage(video,0,0,300,200 );
    
});



function downloadImage(context){
    image=canvas.toDataURL("image/jpg");
    console.log(context);
    context.href=image;
}



