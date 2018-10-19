(function($)
 {
    var s=skrollr.init({render:function(data){}})})(jQuery);
    $(document).ready(function()
        {
        $(".main").onepage_scroll(
            {
                sectionContainer:"section",easing:"ease",animationTime:900,pagination:true,updateURL:false
            })
        });
function init()
    {
        window.setTimeout(function()
            {
                start()
            },
        2e3)
    }
function start()
    {
        $("body").removeClass("loading").addClass("loaded")
    }
    $(window).load
    
(function()
    {
        init()
    });