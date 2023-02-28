
function chhoose(){
  var typ=prompt("What type you need to watch movies or series");
  if(typ=='movies')
  {
  window.open("movies.html","_self");
  // document.body.innerHTML='movies';
  }
  else if(typ=='series')
  {
      window.open("series.html","_self");
      // document.body.innerHTML='series';
  }
}
///////////////
var right = 0;
var maxMargin;
var jumpMargin = 150;
var right2 = 0;
var maxMargin2;
var jumpMargin2 = 150;
var right3 = 0;
var maxMargin3;
var jumpMargin3 = 150;
var right4 = 0;
var maxMargin4;
var jumpMargin4 = 150;
var right5 = 0;
var maxMargin5;
var jumpMargin5 = 150;

function setWidth(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".flt-leftt").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
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