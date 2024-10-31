//default 16x16 grid
$(document).ready(function() {
  var size = 16;
  function grid(){
    for (var x = 0; x < size; x++) {
      for (var y = 0; y < size; y++) {
        $(".container").append("<div class='squares'></div>");
      }
    }
  }
 grid();
 color(); 

  //Get user input for custom grid size
$("#getSize").click(function(){
  $(".container").empty();
  size = prompt("what size should the new grid be?");
  var newVal = 960/size;
  grid();
  $(".squares").css('height',newVal); 
  $(".squares").css('width',newVal);
  color();
  
  
 
  
});


  //default black color for div on hover
 function color(){
   $('.squares').hover(function () {
			$(this).css('background-color', "#000");
});
 }
  
  //eraser
  $("#eraser").click(function(){
    $('.squares').hover(function(){
     $(this).css('background-color', "white"); 
    });
  });
  
  //choose a random color
  function ColorGen(){
     var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  
  

  $("#random").click(function(){
    var randomColor = ColorGen();
    $('.squares').hover(function(){
     $(this).css('background-color', randomColor); 
    });
  });
  
  //clear the canvas
  
  $("#clear").click(function(){
    $('.squares').css('background-color', 'white');
  });

});
