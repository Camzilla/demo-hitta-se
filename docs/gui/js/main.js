$(function(){
    $('.stars-select').on('click', function() {
        if($(this).is('.selected')){
            $(this).removeClass('selected').find('[data-fa-i2svg]').removeClass('stars-on').attr('data-prefix', 'far');
            $(this).nextAll().removeClass('selected').find('[data-fa-i2svg]').removeClass('stars-on').attr('data-prefix', 'far');
            $(this).parent().next().children().removeClass('show-stars-text');

            if($(this).index() - 1 >= 0){
                $(this).parent().next().children().eq($(this).index() - 1).addClass('show-stars-text');
            }
        } else {
            $(this).addClass('selected').find('[data-fa-i2svg]').addClass('stars-on').attr('data-prefix', 'fas');
            $(this).prevAll().addClass('selected').find('[data-fa-i2svg]').addClass('stars-on').attr('data-prefix', 'fas');
            $(this).parent().next().children().removeClass('show-stars-text').eq($(this).index()).addClass('show-stars-text');
        }
    });
});
