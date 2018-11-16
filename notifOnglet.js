  /**  
  Plugin make By IMAD ABOULHOUDA
  **/
  (function($){

    $.fn.notifOnglet = function(options){
          var settings = $.extend({
          
            message: 'What are you doing man',
            soundMP3: '',
            sound:false,
        }, options );


        var title = $("title").html();
        var interval;
        if(settings.sound && $("body").find(settings.soundSelector).length == 0)
        {
            
            $("body").append("<audio id='playerSoundImad' style='display: none;'><source src='"+settings.soundMP3+"' type='audio/mpeg'></audio>");
        }
        $(window).blur(function(){
          titleEnv = 1;
          interval = setInterval(function(){
            if(titleEnv == 1)
            $("title").html(settings.message);
            else
            $("title").html(title);
            titleEnv = (titleEnv == 1) ? 0 : 1;
            if(settings.sound == true)
                $("#playerSoundImad")[0].play();
          },1000);
        });
        
        $(window).focus(function(){
          $("title").html(title);
           if(settings.sound == true)
                $("#playerSoundImad")[0].pause();
          clearInterval(interval);
        });
    };
  })(jQuery);
  