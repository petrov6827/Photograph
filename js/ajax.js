$(function () {
    $('form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('POST'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            console.log('success');
        }).fail(function () {
            console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
    });
});