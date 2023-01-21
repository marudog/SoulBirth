var Today = new Date();
var Year = new Date().getFullYear();

var BirthDate = Array
    (
        new Date (Year, 0, 18) ,
        new Date (Year, 8, 10) ,
        new Date (Year, 4, 29) ,
        new Date (Year, 1, 27) ,
        new Date (Year, 5, 25) ,
        new Date (Year, 6, 28) ,
        new Date (Year, 10, 4) ,
        new Date (Year, 2, 2) ,
        new Date (Year, 9, 10) ,
        new Date (Year, 3, 15) ,
        new Date (Year, 11, 14)
    )

for (i = 0; i < BirthDate.length; i++) {
    if (Today > BirthDate[i])
    {
        BirthDate[i] = new Date (Year+1, BirthDate[i].getMonth(), BirthDate[i].getDate()) ;
    }

    CountDownTimer(BirthDate[i], "Birth" + i);
}

function CountDownTimer(dt, id) {

    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var timer;

    function showRemaining() {
        var Now = new Date();

        if (Now.getMonth() == end.getMonth() && Now.getDate() == end.getDate()) {
            clearInterval(timer);

            document.getElementById(id).innerHTML = '<center> 오늘 </center>';

            return;
        }

        var distance = end - Now;

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second)

        document.getElementById(id).innerHTML = '<center>' + days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초 </center>';
    }

    timer = setInterval(showRemaining, 1000);
}