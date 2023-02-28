////////////////header gallary/////////////
let slideIndex = 0;
 showSlides();
 
 function showSlides() {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   slides[slideIndex-1].style.display = "block";  
   setTimeout(showSlides, 2500);
 }
 ////////////////////////////////////////////////
 //////////////////search////////////////////
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
function searchh(){
  var x=["Assassin’s Creed Origins","Assassin’s Creed Syndicate","Battlefield 2042","Call Of Duty Modern Warfare","Crash Team Racing","Fifa23","God of War","Grand Theft Auto V","Mortal Kombat","Nba 2k23","Need For Speed","Pes 23","resident evil 2","Tomb Raider","Uncharted 4","WWE 2K23","All of Us Are Dead ","Anne Rice's Mayfair Witches","constantine" ,"Flash","Hunters","Lockwood & Co","National Treasure Edge of History","Rise of Empires Ottoman","Spartacus Gods of the Arena" ,"Spartacus","squde game","The one","Willow","Alita Battle Angel 2019","Aquaman 2018","Black Adam 2022","Blood And Bone","Bloodshot 2020","Expendables 3","Free guy","Gods Of Egypt 2016","John Wick 2017","kickoxer","Prince of Persia The Sands of Time","Resident evil","sand","Terra Formars","The one","War craft"];
  var sercch=document.getElementsByName("search")[0].value;
  // var sercch=document.getElementsByName("search")[0].value;
  // if(sercch=="Assassin’s Creed Origins"|| sercch=="Assassin’s Creed Syndicate"|| sercch=="Battlefield 2042"||sercch=="Call Of Duty Modern Warfare"||sercch=="Crash Team Racing"||sercch=="Fifa23"||
  // sercch=="God of War" ||sercch=="Grand Theft Auto V" ||sercch=="Mortal Kombat"||sercch=="Nba 2k23"||sercch=="Need For Speed"||sercch=="Pes 23"||
  // sercch=="resident evil 2" ||sercch=="Tomb Raider"||sercch=="Uncharted 4"||sercch=="WWE 2K23")
  // {
  //       window.open("Contents/games/"+sercch+".html");
  // }
  // else  if(sercch=="Alita Battle Angel 2019" || sercch=="Aquaman 2018" || sercch=="Black Adam 2022" || sercch=="Blood And Bone" || sercch=="Bloodshot 2020" || sercch=="Expendables 3" || 
  // sercch=="Free guy" || sercch=="Gods Of Egypt 2016" || sercch=="John Wick 2017" || sercch=="kickoxer" || sercch=="Prince of Persia The Sands of Time" || sercch=="Resident evil" || 
  // sercch=="sand" || sercch=="Terra Formars" || sercch=="The one" || sercch=="War craft")
  // {
  //   window.open("Contents/Movies/"+sercch+".html");
  // }
  // else  if(sercch=="All of Us Are Dead " || sercch=="Anne Rice's Mayfair Witches" || sercch=="constantine" || sercch=="Flash" || sercch=="Hunters" || sercch=="Lockwood & Co" || 
  // sercch=="National Treasure Edge of History" || sercch=="Rise of Empires Ottoman" || sercch=="Spartacus Gods of the Arena" || sercch=="Spartacus" || sercch=="squde game" || sercch=="The Ark" || 
  // sercch=="Willow")
  // {
  //   window.open("Contents/Series/"+sercch+".html");
  // }
   if(sercch=="")
  {
    alert("Please Enter Your Search");
      }
     else if(!x.includes(sercch))
      {
        alert("We don't have your search. Please Try again!!");
      }
}