var ap2 = new APlayer({
    element: document.getElementById('bgm'),
    narrow: true,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    mode: 'circulation',
    music: {
        title: '爱你没错',
        author: '张信哲',
        url: 'http://akagi201.org/mylove/assets/ainimeicuo.mp3',
        pic: 'http://akagi201.org/mylove/assets/ainimeicuo.jpg'
    }
});

moment.locale('zh-cn');
document.getElementById("love-days").innerHTML = "小苞苞与小猪猪相恋了 " + moment("2018-11-14").toNow(true);
