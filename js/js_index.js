// ---------- CWK Individual jQuary ----------

$(document).ready(function() { // jQuery Load
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {
            $('.hurry_scroll').fadeOut();
        } else {
            $('.hurry_scroll').fadeIn();
        }
    });

    $('.btnall').click(function() {
        $(this).addClass('on').siblings('button').removeClass('on');
        $('.port_win').show();
    });

    $('.btnweb').click(function() {
        $(this).addClass('on').siblings('button').removeClass('on');
        $('.port_win').show();
        $('.port_win:not([data-category="web"])').hide();
    });

    $('.btnim').click(function() {
        $(this).addClass('on').siblings('button').removeClass('on');
        $('.port_win').show();
        $('.port_win:not([data-category="manipulation"])').hide();
    });

    $('.btnis').click(function() {
        $(this).addClass('on').siblings('button').removeClass('on');
        $('.port_win').show();
        $('.port_win:not([data-category="iconset"])').hide();
    });

    $('.btnetc').click(function() {
        $(this).addClass('on').siblings('button').removeClass('on');
        $('.port_win').show();
        $('.port_win:not([data-category="etc"])').hide();
    });
}) // jQuery Closed

$(function() {
    boxRollovers();
});

function boxRollovers() {
    $selector = $(".contact_win");
    XAngle = 0;
    YAngle = 0;
    Z = 0;
    
    $selector.on("mousemove", function(e){
        var $this = $(this);
        var XRel = e.pageX - $this.offset().left;
        var YRel = e.pageY - $this.offset().top;
        var width = $this.width();
    
        YAngle = -(0.5 - (XRel / width)) * 40; 
        XAngle = (0.5 - (YRel / width)) * 40;
        updateView($this.children(".contact_mail"));
    });
    
    $selector.on("mouseleave", function(){
        oLayer = $(this).children(".contact_mail");
        oLayer.css({"transform": "perspective(30rem) translateZ(0) rotateX(0deg) rotateY(0deg)", "transition": "all .15s linear 0s"});
    });
}

function updateView(oLayer) {
    oLayer.css({"transform": "perspective(30rem) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)", "transition": "none"});
}