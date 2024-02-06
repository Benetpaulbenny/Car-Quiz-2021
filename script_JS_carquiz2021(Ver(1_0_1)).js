
                        /*-----Function Java Scripts-----*/

function result()
{
    
    var bal=" was the right answer! Score(-1)";
    var corr="Correct answer! Score(+2)";
    
    var otxt="Your total score is ";
    var otxt2=" (out of 30)";
	  var score=0;
	if(document.getElementById('correct1').checked)
		{	score = score+2;
      document.getElementById("cans1").innerHTML = corr;
      }
    else{   score = score-1;
            document.getElementById("ans1").innerHTML = "Cullinan"+bal;
        }

	if(document.getElementById('correct2').checked)
		{	score = score+2;
      document.getElementById("cans2").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans2").innerHTML = "ID.4"+bal;
        }
	if(document.getElementById('correct3').checked)
		{	score = score+2;
      document.getElementById("cans3").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans3").innerHTML = "Everest"+bal;
        }
    if(document.getElementById('correct4').checked)
		{	score = score+2;
      document.getElementById("cans4").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans4").innerHTML = "People's car"+bal;
        }
    if(document.getElementById('correct5').checked)
		{	score = score+2;
      document.getElementById("cans5").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans5").innerHTML = "Bavarian flag"+bal;
        }
    if(document.getElementById('correct6').checked)
		{	score = score+2;
      document.getElementById("cans6").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans6").innerHTML = "Honda E"+bal;
        }
    if(document.getElementById('correct7').checked)
		{	score = score+2;
      document.getElementById("cans7").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans7").innerHTML = "Andhra Pradesh"+bal;
        }
    if(document.getElementById('correct8').checked)
		{	score = score+2;
      document.getElementById("cans8").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans8").innerHTML = "48%"+bal;
        }
    if(document.getElementById('correct9').checked)
		{	score = score+2;
      document.getElementById("cans9").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans9").innerHTML = "April 2021"+bal;
        }
    if(document.getElementById('correct10').checked)
		{	score = score+2;
      document.getElementById("cans10").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans10").innerHTML = "EQ"+bal;
        }
    if(document.getElementById('correct11').checked)
		{	score = score+2;
      document.getElementById("cans11").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans11").innerHTML = "Toyota Innova Crysta"+bal;
        }
    if(document.getElementById('correct12').checked)
		{	score = score+2;
      document.getElementById("cans12").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans12").innerHTML = "Spirit of Ecstacy"+bal;
        }
    if(document.getElementById('correct13').checked)
		{	score = score+2;
      document.getElementById("cans13").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans13").innerHTML = "MG ZS EV"+bal;
        }
    if(document.getElementById('correct14').checked)
		{	score = score+2;
      document.getElementById("cans14").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans14").innerHTML = "Land Rover Defender"+bal;
        }
    if(document.getElementById('correct15').checked)
		{	score = score+2;
      document.getElementById("cans15").innerHTML = corr;
		}
    else{   score = score-1;
        document.getElementById("ans15").innerHTML = "Porsche 911 Turbo"+bal;
        }
    if(score < 0)
    {
        score = 0;
    }
                    //----Function for mood according to score------
    function mood(){
    var vhpy="Yeah! You made it.";
    var hpy="Congrats! You have done well.";
    var nor="Congrats! You scored good enough.";
    var sad="Keep calm and carry on!";
    var vsad="Tackle it the next time!";
    if(score == 30){
        document.getElementById("subtxt").innerHTML = vhpy;
      }
    if(score < 30 && score >= 21){
      document.getElementById("subtxt").innerHTML = hpy;
      }
    if(score <21 && score >10){
      document.getElementById("subtxt").innerHTML = nor;
      }
    if(score <= 10 && score > 0){
      document.getElementById("subtxt").innerHTML = sad;
      }
    if(score == 0){
      document.getElementById("subtxt").innerHTML = vsad;
      }
    }
    document.getElementById("ttl").innerHTML = otxt+score+otxt2;

            //-------set time for mood, disableing button and show score----
    setTimeout(function(){ mood(); }, 1500) ; 
    setTimeout(() => {document.getElementById('upbtn').disabled = false;}, 1000);
    setTimeout(() => {document.getElementById("scr").innerHTML = otxt+score+otxt2}, 1000);
    
 //alert("Your score is:"+score);
 // to print on browser
 //document.write("Your score is:"+score);
}
/*function totop(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/

                    //----function for popup no.1------
function toggle(){
  var blur = document.getElementById('maincontainer');
  blur.classList.toggle('active')
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')
}

/*function toggle2(){
  var blur = document.getElementById('maincontainer');
  blur.classList.toggle('active')
  var popup2 = document.getElementById('popup2');
  popup2.classList.toggle('active')
}*/
                    //-----Master function sbt()-------
function sbt(){
  //totop();
  toggle();
  document.getElementById('upbtn').disabled = true;
  setTimeout(() => {document.getElementById('sbt').disabled = true;}, 2500);
  
  setTimeout(function(){ result(); }, 3000) ;
  var calc="Calculating your score...";
  document.getElementById("scr").innerHTML = calc;
}

                    //-----scripts without function----
setTimeout(function(){ userscreen(); }, 1000);
setTimeout(function(){ headin(); }, 5000);

                  //----Webpage inspection, page source code, copy and paste options disabling----

document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
      e.keyCode === 73 || 
       e.keyCode === 85 || 
       e.keyCode === 86)) {
        alert("Access Denied!   :- Access to this webpage inspection or source code has been disabled due to some security reasons.");
        return false;
} else {
   return true;
}
};
$(document).keypress("u",function(e) {
if(e.ctrlKey)
{
return false;
}
else
{
return true;
}
});
                    //------user screen resolution alert----
function userscreen(){
  var swidth = screen.width;
  if(swidth <= 275){
    alert("Your screen resolution is low! You may not be able to get a best experience from this website. ");
  }
}

                  //------title activation function--------
function headin(){
  var view = document.getElementById('heding');
  var show = document.getElementById('head');
  heding.classList.toggle('active');
  head.classList.toggle('active');
}

                //--------function for popup no.2------
function tpop(){
  var fbk = document.getElementById('tpop');
  setTimeout(function(){ fbk.classList.toggle('active'); }, 7000);
  setTimeout(function(){ fbk.classList.toggle('active'); }, 20000);
}
/*function for_popup2(){
  setTimeout(function(){ toggle2(); }, 4000) ;
}*/ /*for second popup*/ /*second update*/





                            /*-----END OF JAVA SCRIPT------*/