

$(function () {
  $('[data-toggle="popover"]').popover();

  
})

window.onload = function() {
    $('#progressBar div').width("80%");
    
    var transitionEvent = whichTransitionEvent();
    $('#progressBar div').one(transitionEvent,function(event){
    	var completed = $('#progressBar div').width();
    	var f = $('#progressBar div').width() / $('#progressBar div').parent().width() * 100;
    	$('#progressBar div').text(Math.round(f)+"%");
    });

};


function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

