$(function() {
    $('#yes').click(function(event) {
        modal('Anh biết em sẽ đồng ý mà(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('Người quang minh chính đại không nói lời mờ ám！', A);
    });
});

function A() {
    modal('anh yêu em！', B);
}

function B() {
    modal('anh biết em đang đợi câu này của anh', C);
}

function C() {
    modal('Từ chối à? không có chuyện đấy đâu', D);
}

function D() {
    modal('Cả đời này cung không để em rời xa anh', E);
}

function E() {
    modal('Làm người yêu anh nhé!!', F);
}

function F() {
    modal('Sẽ yêu em thật nhiều ~', G);
}

function G() {
    modal('Sổ đỏ ghi tên em', H);
}

function H() {
    modal('Anh sẽ nấu cơm', I);
}
 function I() {
    modal('Tùy ý em mua sắm', J)
}
function I() {
    modal('Anh sẽ dỗ em ngủ', J)
}
function I() {
    modal('Anh sẽ hát cho em', J)
}
function I() {
    modal('Anh sẽ làm việc nhà', J)
}
function I() {
    modal('Em làm gì tùy thích！', J)
}

function J() {
    modal('Yêu em', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
