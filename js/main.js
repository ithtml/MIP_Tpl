$(document).ready(function() {
    //���ض���
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        },
        600);
        $('.swtCenter').addClass("fixed");
        $('.scrollup').show();
        return false;
    });
    //�Ի���
    //�����
    $(".showMenu").on("click",
    function() {
        $(this).toggleClass('hideMenu');
        $(".popMenu").toggleClass('openMenu');
    });

    //�л�


});