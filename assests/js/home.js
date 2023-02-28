//////////////Search///////////////////
// window.scroll=changpos;
// function chhoose(){
//   var typ=prompt("What type you need to watch movies or series");
//   if(typ=='movies')
//   {
//   window.open("movies.html","_self");
//   // document.body.innerHTML='movies';
//   }
//   else if(typ=='series')
//   {
//       window.open("series.html","_self");
//       // document.body.innerHTML='series';
//   }
// }
//////////////Search///////////////////
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// function searchh(){
//   var x=["Assassin’s Creed Origins","Assassin’s Creed Syndicate","Battlefield 2042","Call Of Duty Modern Warfare","Crash Team Racing","Fifa23","God of War","Grand Theft Auto V","Mortal Kombat","Nba 2k23","Need For Speed","Pes 23","resident evil 2","Tomb Raider","Uncharted 4","WWE 2K23","All of Us Are Dead ","Anne Rice's Mayfair Witches","constantine" ,"Flash","Hunters","Lockwood & Co","National Treasure Edge of History","Rise of Empires Ottoman","Spartacus Gods of the Arena" ,"Spartacus","squde game","The one","Willow","Alita Battle Angel 2019","Aquaman 2018","Black Adam 2022","Blood And Bone","Bloodshot 2020","Expendables 3","Free guy","Gods Of Egypt 2016","John Wick 2017","kickoxer","Prince of Persia The Sands of Time","Resident evil","sand","Terra Formars","The one","War craft"];
//   var sercch=document.getElementsByName("search")[0].value;
//   var sercch=document.getElementsByName("search")[0].value;
//   if(sercch=="Assassin’s Creed Origins"|| sercch=="Assassin’s Creed Syndicate"|| sercch=="Battlefield 2042"||sercch=="Call Of Duty Modern Warfare"||sercch=="Crash Team Racing"||sercch=="Fifa23"||
//   sercch=="God of War" ||sercch=="Grand Theft Auto V" ||sercch=="Mortal Kombat"||sercch=="Nba 2k23"||sercch=="Need For Speed"||sercch=="Pes 23"||
//   sercch=="resident evil 2" ||sercch=="Tomb Raider"||sercch=="Uncharted 4"||sercch=="WWE 2K23")
//   {
//         window.open("Contents/games/"+sercch+".html");
//   }
//   else  if(sercch=="Alita Battle Angel 2019" || sercch=="Aquaman 2018" || sercch=="Black Adam 2022" || sercch=="Blood And Bone" || sercch=="Bloodshot 2020" || sercch=="Expendables 3" || 
//   sercch=="Free guy" || sercch=="Gods Of Egypt 2016" || sercch=="John Wick 2017" || sercch=="kickoxer" || sercch=="Prince of Persia The Sands of Time" || sercch=="Resident evil" || 
//   sercch=="sand" || sercch=="Terra Formars" || sercch=="The one" || sercch=="War craft")
//   {
//     window.open("Contents/Movies/"+sercch+".html");
//   }
//   else  if(sercch=="All of Us Are Dead " || sercch=="Anne Rice's Mayfair Witches" || sercch=="constantine" || sercch=="Flash" || sercch=="Hunters" || sercch=="Lockwood & Co" || 
//   sercch=="National Treasure Edge of History" || sercch=="Rise of Empires Ottoman" || sercch=="Spartacus Gods of the Arena" || sercch=="Spartacus" || sercch=="squde game" || sercch=="The Ark" || 
//   sercch=="Willow")
//   {
//     window.open("Contents/Series/"+sercch+".html");
//   }
//    if(sercch=="")
//   {
//     alert("Please Enter Your Search");
//       }
//      else if(!x.includes(sercch))
//       {
//         alert("We don't have your search. Please Try again!!");
//       }
// }
/////// Slider images of Home page////////
var right = 0,right2 = 0,right3 = 0,right4 = 0,right5 = 0;
var maxMargin,maxMargin2,maxMargin3,maxMargin4,maxMargin5;
var jumpMargin = 150,jumpMargin2 = 150,jumpMargin3 = 150,jumpMargin4 = 150,jumpMargin5 = 150;

function setWidth(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".flt-leftt").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll("button44")[0].style.height = displayheight+"px";
  document.querySelectorAll("button44")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
  ////////////////////////////////////////////
  var boxwidth2 = document.querySelector(".comaa").offsetWidth;
  var displaywidth2 = document.querySelector(".din").offsetWidth;
  var displayheight2 = document.querySelector(".feel").offsetHeight;
  var children2 = document.querySelectorAll(".din-comaa > .comaa").length;
  var outerboxwidth2 = children2 * boxwidth2 + (children2*10);
  document.querySelector(".din-comaa").style.width = outerboxwidth2+"px";
  document.querySelectorAll("button55")[0].style.height = displayheight2+"px";
  document.querySelectorAll("button55")[1].style.height = displayheight2+"px";
  maxMargin2 = outerboxwidth2 - displaywidth2;
  //////////////////////////////////////////////////////////////////
  var boxwidth3 = document.querySelector(".coaa").offsetWidth;
  var displaywidth3 = document.querySelector(".doon").offsetWidth;
  var displayheight3 = document.querySelector(".fool").offsetHeight;
  var children3 = document.querySelectorAll(".doon-coaa > .coaa").length;
  var outerboxwidth3 = children3 * boxwidth3 + (children3*10);
  document.querySelector(".doon-coaa").style.width = outerboxwidth3+"px";
  document.querySelectorAll("button66")[0].style.height = displayheight3+"px";
  document.querySelectorAll("button66")[1].style.height = displayheight3+"px";
  maxMargin3 = outerboxwidth3 - displaywidth3;
  ///////////////////////////////////////////////////////////////////////
  var boxwidth4 = document.querySelector(".conr").offsetWidth;
  var displaywidth4 = document.querySelector(".dow").offsetWidth;
  var displayheight4 = document.querySelector(".folt").offsetHeight;
  var children4 = document.querySelectorAll(".dow-conr > .conr").length;
  var outerboxwidth4 = children4 * boxwidth4 + (children4*10);
  document.querySelector(".dow-conr").style.width = outerboxwidth4+"px";
  document.querySelectorAll("button77")[0].style.height = displayheight4+"px";
  document.querySelectorAll("button77")[1].style.height = displayheight4+"px";
  maxMargin4 = outerboxwidth4 - displaywidth4;
  ///////////////////////////////////////////////////////////////////////
  var boxwidth5 = document.querySelector(".corm").offsetWidth;
  var displaywidth5 = document.querySelector(".don").offsetWidth;
  var displayheight5 = document.querySelector(".fltoo").offsetHeight;
  var children5 = document.querySelectorAll(".don-corm > .corm").length;
  var outerboxwidth5 = children5 * boxwidth5 + (children5*10);
  document.querySelector(".don-corm").style.width = outerboxwidth5+"px";
  document.querySelectorAll("button88")[0].style.height = displayheight5+"px";
  document.querySelectorAll("button88")[1].style.height = displayheight5+"px";
  maxMargin5 = outerboxwidth5 - displaywidth5;
}

function slideLeft(event){
  var rowcont = document.querySelector(".row-container");
  if(right <= -maxMargin){
    event.preventDefault();
  }
  else{
    right -= jumpMargin;
  }
   rowcont.style.marginLeft = right+"px";
}

function slideRight(event){
  var rowcont = document.querySelector(".row-container");
  if(right==0){
    event.preventDefault();
  }
  else if(right >= maxMargin){
    event.preventDefault();
  }
  else{
     right += jumpMargin;
  }
  rowcont.style.marginLeft = right+"px";
}
function slideLef(event){
  var rowcon = document.querySelector(".din-comaa");
  if(right2 <= -maxMargin2){
    event.preventDefault();
  }
  else{
    right2 -= jumpMargin2;
  }
   rowcon.style.marginLeft = right2+"px";
}

function slideRig(event){
  var rowcon = document.querySelector(".din-comaa");
  if(right2==0){
    event.preventDefault();
  }
  else if(right2 >= maxMargin2){
    event.preventDefault();
  }
  else{
     right2 += jumpMargin2;
  }
  rowcon.style.marginLeft = right2+"px";
}
function slideLe(event){
  var rowc = document.querySelector(".doon-coaa");
  if(right3 <= -maxMargin3){
    event.preventDefault();
  }
  else{
    right3 -= jumpMargin3;
  }
   rowc.style.marginLeft = right3+"px";
}

function slideRi(event){
  var rowc = document.querySelector(".doon-coaa");
  if(right3==0){
    event.preventDefault();
  }
  else if(right3 >= maxMargin3){
    event.preventDefault();
  }
  else{
     right3 += jumpMargin3;
  }
  rowc.style.marginLeft = right3+"px";
}
function slideL(event){
  var roww = document.querySelector(".dow-conr");
  if(right4<= -maxMargin4){
    event.preventDefault();
  }
  else{
    right4 -= jumpMargin4;
  }
   roww.style.marginLeft = right4+"px";
}

function slideR(event){
  var roww = document.querySelector(".dow-conr");
  if(right4==0){
    event.preventDefault();
  }
  else if(right4 >= maxMargin4){
    event.preventDefault();
  }
  else{
     right4 += jumpMargin4;
  }
  roww.style.marginLeft = right4+"px";
}
function slidL(event){
  var rowow = document.querySelector(".don-corm");
  if(right5<= -maxMargin5){
    event.preventDefault();
  }
  else{
    right5 -= jumpMargin5;
  }
   rowow.style.marginLeft = right5+"px";
}

function slidR(event){
  var rowow = document.querySelector(".don-corm");
  if(right5==0){
    event.preventDefault();
  }
  else if(right5 >= maxMargin5){
    event.preventDefault();
  }
  else{
     right5 += jumpMargin5;
  }
  rowow.style.marginLeft = right5+"px";
}
window.onload=setWidth;


// function searchh(){  
//   // var sercch=document.getElementById("myDropdown").value;
//   var sercch=document.getElementsByName("search")[0].value; 
//   var x=["Assassin’s Creed Origins","Assassin’s Creed Syndicate","Battlefield 2042","Call Of Duty Modern Warfare","Crash Team Racing","Fifa23","God of War","Grand Theft Auto V","Mortal Kombat","Nba 2k23","Need For Speed","Pes 23","resident evil 2","Tomb Raider","Uncharted 4","WWE 2K23","All of Us Are Dead ","Anne Rice's Mayfair Witches","constantine" ,"Flash","Hunters","Lockwood & Co","National Treasure Edge of History","Rise of Empires Ottoman","Spartacus Gods of the Arena" ,"Spartacus","squde game","The one","Willow","Alita Battle Angel 2019","Aquaman 2018","Black Adam 2022","Blood And Bone","Bloodshot 2020","Expendables 3","Free guy","Gods Of Egypt 2016","John Wick 2017","kickoxer","Prince of Persia The Sands of Time","Resident evil","sand","Terra Formars","The one","War craft"];
//   if(!x.includes(sercch))
//   {
//     alert("We don't have your search. Please Try again!!");
//   }
// }

// document.getElementById("start").onclick=function(){
//   scroll(0,830);
// }
// var header=document.getElementsByTagName("header");
// window.onscroll=function(){scrollfunction()};
// function scrollfunction(){
//   if(document.body.scrollTop>200 || document.documentElement.scrollTop>200)
//   {
//     header[0].setAttribute("class","header-scroll");
//   }
//   else{
//     header[0].removeAttribute("class")
//   }
// }