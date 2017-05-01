$(function() {
    var myScroll2 = null;

    function menuInit() {
        var _menuScroll = $(".menuScroll");
        var _menuScroll_size = _menuScroll.find("li").length;
        var liWidth = 0;
        $(".menuScroll li").each(function() {
            liWidth += $(this).outerWidth();
        });
        _menuScroll.css({ width: liWidth + 1 + 'px' });

        function loaded() {
            //Ʒ�����Ķ���������ťjs
            myScroll2 = new IScroll(".menus", { ventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
            var localUrl = document.location.href.split('/')[document.location.href.split('/').length - 2];
            //alert(document.location.href.split('/')[document.location.href.split('/').length-2]);
            var navUrl = [];
            $(".menuScroll li").each(function(index, element) {
                navUrl.push($(this).find("a").attr("href").split('/')[$(this).find("a").attr("href").split('/').length - 2]);
                //alert($(this).find("a").attr("href").split('/')[$(this).find("a").attr("href").split('/').length-2]);		
            });
            //alert(navUrl)
            for (var i = 0, j = navUrl.length; i < j; i++) {
                if (navUrl[i]) {
                    if (navUrl[i].toString() == localUrl.toString()) {
                        var _this = document.querySelector('#menuScroll li:nth-child(' + i + ')');
                        $(".menuScroll li").eq(i).addClass("active").siblings().removeClass("active");
                        myScroll2.scrollToElement(_this);
                    }
                }
            }
        }
        window.addEventListener("DOMContentLoaded", loaded, false);
    }
    menuInit();
    $(window).resize(function() {
        menuInit();
    });
    /*notice ͨ������*/
    function AutoScroll(obj) {
        var objHeight = $(obj).height();
        $(obj).find("ul:first").animate({
            marginTop: -objHeight + "px"
        }, 500, function() {
            $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
        });
    };
    setInterval(function() { AutoScroll("#noticeScroll") }, 4500);

})