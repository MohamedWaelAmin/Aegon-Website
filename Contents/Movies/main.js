var counter=parseInt(document.getElementById('rate1').innerText);
var counterr=parseInt(document.getElementById('rate2').innerText);
var rating=parseInt(document.getElementById('rate').innerText);
document.getElementById("like").onclick =function()
{
     if(counter<47 && rating<98 &&(counterr>3|| counterr<6))
     {
    counter=46;
    rating=98;
    // counterr=4;
   }
    document.getElementById('rate1').innerText=counter;
    document.getElementById('rate2').innerText=counterr;
    document.getElementById('rate').innerText=rating;
};

document.getElementById("dislike").onclick =function()
{
   if(counterr<5 && (rating<99 || rating>96) && (counter>44|| counter<47))
   {
       counterr++
       counter--;
       rating--;
   }
   document.getElementById('rate1').innerText=counter;
   document.getElementById('rate2').innerText=counterr;
   document.getElementById('rate').innerText=rating;
}; 
//      document.getElementById("like").onclick =function()
//  {
//     if(counter<47 && rating<98 &&(counterr>3|| counterr<6))
//      {
//         counter++;
//         rating++;
//         counterr--
//      }
//      document.getElementById('rate1').innerText=counter;
//      document.getElementById('rate2').innerText=counterr;
//      document.getElementById('rate').innerText=rating;
//  };

// document.getElementById("dislike").onclick =function()
// {
//     if(counterr<5 && (rating<99 || rating>96) && (counter>44|| counter<47))
//     {
//         counterr++
//         counter--;
//         rating--;
//     }
//     document.getElementById('rate1').innerText=counter;
//     document.getElementById('rate2').innerText=counterr;
//     document.getElementById('rate').innerText=rating;
// }; 
document.getElementById("playing").onclick =function()
{
    document.write(document.getElementById("bodyyrrr"));
}


var firstImg=document.getElementById("sizeimage");
var secondImg=document.getElementById("sizeimage");
var thirdImg=document.getElementById("sizeimage");
 

function scrollWin(){
window.scrollTo(0,2000);
}
     var arabic=document.getElementById("Arabicc");
     var english=document.getElementById("Englishh");
     var change_text=document.getElementById("arabi");
     ///////////////////////////////////////////////////////////
     english.onclick=function ena(){
        change_text.innerHTML="This is the text";
    }
arabic.onclick=function ara(){
    change_text.innerHTML="هو النص";
}

  function change(){
    // document.body.innerHTML="";
    window.open("file:///D:/%D8%A7%D9%84%D9%83%D9%84%D9%8A%D8%A9/%D9%83%D9%84%D9%8A%D8%A9%20%D8%B7%D9%86%D8%B7%D8%A7/OSS%20Project/games.html");
  }

function validateChangelang(){
    if(document.getElementsByName("Chlanguage")[0].value == "Default")
    {
        document.body.innerText='English';
        // window.open("main.html");
    }
    else
    {
        document.body.innerText='Arabic';
        // window.open("kickoxer.html");
    }
}
