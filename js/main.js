$(document).ready(function() {
    //返回顶部
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        },
        600);
        $('.swtCenter').addClass("fixed");
        $('.scrollup').show();
        return false;
    });
    //对话框
    //分类表
    $(".showMenu").on("click",
    function() {
        $(this).toggleClass('hideMenu');
        $(".popMenu").toggleClass('openMenu');
    });

    //切换


});