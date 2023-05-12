$(function () {
    var index = 0;
    var imageNumber = 3;
    $('.change-row-s').click(function () {
        index--;
        if (index < 0) {
            index = imageNumber - 1;
        }
        $('.change').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log(index);
        $(".baner-img").eq(index).show().siblings().hide();
    })


    $('.change-row-n').click(function () {
        index++;
        if (index >= imageNumber) {
            index = 0;
        }
        console.log(index);
        $('.change').eq(index).addClass('selected').siblings().removeClass('selected');
        $(".baner-img").eq(index).show().siblings().hide();
    })
})
$(function () {
    $('.change').click(function () {
        var num = $(this).index();
        $(".baner-img").eq(num).show().siblings().hide();
        $('.change').eq(num).addClass('selected').siblings().removeClass('selected');
    })
})