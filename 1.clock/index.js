const houre1= document.querySelector(".hour");
const mine1= document.querySelector(".minute");
const sece1= document.querySelector(".second");

function updateclock(){
    const currenttime= new Date();
    setTimeout(updateclock,1000);
    const hour= currenttime.getHours();
    const min= currenttime.getMinutes();
    const second= currenttime.getSeconds();
    const hourdeg= (hour/12)*360;
    houre1.style.transform= `rotate(${hourdeg}deg)`;
    const minutedeg= (min/60) * 360;
    mine1.style.transform= `rotate(${minutedeg}deg)`;
    const secdeg= (second / 60) * 360;
    sece1.style.transform= `rotate(${secdeg}deg)`;
    console.log(hour,min,second);
    
}
updateclock();