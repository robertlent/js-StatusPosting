var main = function () {
    $('.btn').click(function () {
	    var postTime = new Date($.now()).toLocaleTimeString();
        var post = $('.status-box').val() + ' posted at: ' + postTime;
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('140');
        $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function () {
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
        if (charactersLeft < 0 || charactersLeft === 140) {
            $('.btn').addClass('disabled');
        } else {
            $('.btn').removeClass('disabled');
        }
    });
    $('.btn').addClass('disabled');
};

$(document).ready(main);
