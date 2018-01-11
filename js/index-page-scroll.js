var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;

$(function(){
    function updateAnchors(){
        anchors = [];
        $('.full-page').each(function(i, element){
            anchors.push($(element).offset().top);
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(isAnimating){
            return false;
        }
        isAnimating = true;
        if(e.originalEvent.wheelDelta >= 0){
            currentAnchor--;
        } else {
            currentAnchor++;
        }
        if(currentAnchor > (anchors.length - 1) || currentAnchor < 0 ){
            currentAnchor = 0;
        }
        isAnimating = true;
        $('html, body').animate({
            scrollTop: parseInt(anchors[currentAnchor])
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();
});

jQuery(window).scroll(function(){
    var $page = $('.full-page');
    $page.each(function(i, el){
        var top = $(el).offset().top-500;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');

        if (scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
        }
    })
});

$(document).ready(function(){
    $('nav').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 500);
    });
});