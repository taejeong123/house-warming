// 메인 슬라이더
let current = 0;
let isMoving = false;

$('button.prev').on('click', (e) => {
    if(isMoving) return;
    isMoving =  true;
    current++;
    if(current > 0) current = -2;
    moveSlide(current);
});

$('button.next').on('click', (e) => {
    if(isMoving) return;
    isMoving =  true;
    current--;
    if(current < -2) current = 0;
    moveSlide(current);
});

function moveSlide(current) {
    $('.slide-pannel').css('left', 100 * current + "%");
    setTimeout(() => { isMoving = false; }, 600);
}
// 메인 슬라이더

// 모바일 메뉴 이벤트
$('.nav-icon').on('click', function() {
    $('.mobile-nav').stop().slideDown();
    $(this).hide();
    $('.nav-icon-close').show();
});
$('.nav-icon-close').on('click', function() {
    $('.mobile-nav').stop().slideUp();
    $(this).hide();
    $('.nav-icon').show();
});
// 모바일 메뉴 이벤트