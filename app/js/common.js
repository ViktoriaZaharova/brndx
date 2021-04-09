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
$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.project-col:hidden').slice(0, 4).slideDown();
});

$('.btn-sidebar-menu').on('click', function () {
   $('.sidebar-menu-row').fadeToggle();
});

// auto height textarea
function autosize(){
    let text = $('.form-add-comment textarea');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });

    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}
autosize();

$.datepicker.setDefaults(
    {
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });

$( function() {
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
    });
} );


function myFunction() {
    /* Get the text field */
    var copyText = $("[name='links']");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

}


