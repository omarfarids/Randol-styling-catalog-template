// the time 
let day = document.querySelector("#days span");
let hour = document.querySelector("#hours span");
let minute = document.querySelector("#minutes span");
let second = document.querySelector("#seconds span");

let rightNow;
let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

let counter = setInterval(()=>{
  rightNow = new Date();
  
  day.innerHTML = days[rightNow.getDay()-1];

if(rightNow.getHours()<=12){
  hour.innerHTML = rightNow.getHours();
}else{
  hour.innerHTML = rightNow.getHours() - 12;
}

  minute.innerHTML = rightNow.getMinutes();

  second.innerHTML = rightNow.getSeconds() + 1;
},1000);



// counting 
let counts = document.querySelectorAll(".count");

let counter1,counter2,counter4,counter3
let x=0,y=0,z=0,s=0;
window.onscroll = function(){
  // filling the scale on scrolling by it 
  if (scrollY >= 7650) {
    document
      .querySelectorAll(".skills > div > div >div")
      .forEach((e) => e.classList.remove("none"));
  }

  // counting up on scroll upon the items 
  if(scrollY > 12475){
    counter1 = setInterval(()=>{
        x<=150?
        counts[0].innerHTML = x++:
        counts[0].innerHTML =150;
        clearInterval(counter1);
    },20)
    counter2 = setInterval(()=>{
      y<=135?
      counts[1].innerHTML = y++:
      counts[1].innerHTML =135;
      clearInterval(counter2);
    },20)
    counter3 = setInterval(()=>{
      z<=50?
      counts[2].innerHTML = z++:
      counts[2].innerHTML =50;
      clearInterval(counter3);
    },50)
    counter4 = setInterval(()=>{
      z<=200?
      counts[3].innerHTML = z++:
      counts[3].innerHTML =200;
      clearInterval(counter4);
    },20)
  }
}
