// кнопка наверх
$("body").on("click", ".btn-scroll-up", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

// search dropdown
$('.btn-search').on('click', function () {
   $(this).siblings('.search-dropdown').fadeIn();
});

$(document).mouseup(function (e) { // событие увода мыши
    let div = $(".search-dropdown"); // тут указываем ID элемента
    if (!div.is(e.target) // если увели мышку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut();
    }
});

// input search
$(function () {
    $('.form-search input').keydown(checkInput).keyup(checkInput);
});

function checkInput() {
    if ($('.form-search input').val() === "") {
        $('.search-result').css('display', 'none');
    } else {
        $('.search-result').css('display', 'flex');
    }
}


// mobile menu
$('.btn-burger').on('click', function () {
    $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
});

// btn load
$('.project-row').each(function () {
    if ($(this).find('.project-col').length > 10) {
        $(this).find('.project-col').slice(10).hide();
    }
});

$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.project-col:hidden').slice(0, 4).slideDown();
});

$('.btn-sidebar-menu').on('click', function () {
   $('.sidebar-menu-row').fadeToggle();
});

