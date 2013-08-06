var actions = {};
var interval;
var test = 1;

actions.blockHeight = [];
actions.init = function (){
   actions.p = document.getElementsByTagName('p');
   actions.h2 = document.getElementsByTagName('h2');
   actions.toggle = function (){
      var index = parseInt(this.innerHTML, 10)-1;
      var temp = parseInt(actions.p[index].style.height, 10);
      //Show
      if (temp < actions.blockHeight[index] && actions.p[index].style.height !== ''){
         var t = 0;   
         interval = setInterval(function() {
            if (t < actions.blockHeight[index]){
               t+=20;
               actions.p[index].style.height = t + 'px';
            } else {
               clearInterval(interval);
               actions.p[index].style.height = actions.blockHeight[index] + 'px'; 
               return;
            }
         }, 5);
         console.log(actions.p[index].offsetHeight);
         //Hide
      } else {
         console.log(actions.p[index].offsetHeight);
         actions.blockHeight[index] = actions.p[index].offsetHeight;
         var i = actions.blockHeight[index];
         interval = setInterval(function() {
            if (i >= 0){
               i-=20;
               actions.p[index].style.height = i + 'px';
            } else {
               clearInterval(interval);
               actions.p[index].style.height = 0 + 'px';
               return;
            }
         }, 5);
      }
   };
   for (var j = 0; j < actions.h2.length; j++){
      actions.h2[j].onclick = actions.toggle;
   }
};
actions.addElement = function (){
   var div = document.createElement('div');
   div.setAttribute('class', 'triangle');
   for (var i = 0; i < actions.h2.length; i++){
      actions.h2[i].insertBefore(div, actions.h2[i]);
   }
};
window.onload = actions.init;

/**
 * 
 */
var getTime = function(songLengthSeconds) {
	var minutes;
	var seconds;
	var formatedTime = minutes + ':' + (seconds<10 ? ('0' + seconds) : seconds);
	return formatedTime;
};




