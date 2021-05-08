
//Adaptive functions
$(document).ready(function () {
    $('.header-menu__burger').click(function (event) {
        $('.header-menu__burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length>0){ 
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    })
}
ibg();