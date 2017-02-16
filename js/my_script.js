$(document).ready(function(){
$(window).on("load",function(){
     var i =0;
   var intV =   setInterval(function(){
          
      $(".loading p").text(i++ + "%");

    if(i == 101){
              clearInterval(intV);
         $(".loading").slideUp(function(){
        $(".logo").addClass("animated pulse");
       $(this).remove();
   });
        
    }
  },10);
});   

    $(".header , body").width($(window).width());
        $("body").height($(window).height());

     $(window).resize(function(){
       var windSize = $(window).width(),
           windHeight= $(window).height(); 
   

    $(".header , body").width(windSize);

    $("body").height(windSize);

       
    });
    //menu logic
    var elm = $(".bateau , .vieil , .couverture , .gabbiano , .roseau , .poisson1, .vieil-poisson , .poisson2 ,.bateau-poisson");
    
    $(".my-menu li:eq(0)").click(function(){ 
     $(".angelo").attr("src","img/angelo-night.png");      
     $(".info").slideDown();
     $(".action-close").show();        
     $(".profile").addClass("animated pulse");
     elm.animate({left : "+=300px"});       
     $(".fil-lune , .lune").animate({top : "-=300px"},function(){
     $(".lune").addClass("night").attr("src","img/lune.png");    
     $(this).animate({top: "+=300px"});
     });    

    });
    
    $(".my-menu li:eq(1)").click(function(){    
     $(".angelo").attr("src","img/angelo-night.png");
     $(".skills-content").animate("animated pulse");    
     $(".skills").slideDown();
     $(".action-close").show();    
     $(".skills-content").addClass("animated pulse");  
     elm.animate({left : "+=300px"});  
     $(".fil-lune , .lune").animate({top : "-=300px"},function(){
     $(".lune").addClass("night").attr("src","img/lune.png");    
     $(this).animate({top: "+=300px"});
    });  
        
    });
    
    $(".action-close").click(function(){
    $(".info,.skills").slideUp();
    $(".action-close").hide();
    $(".angelo").attr("src","img/angelo-day.png");      
    elm.animate({left : "-=300px"});   
    $(".fil-lune , .lune").animate({top : "-=300px"},function(){
    $(".lune").removeClass("night").attr("src","img/soleil.png");      
    $(this).animate({top: "+=300px"});
    });
    });
});