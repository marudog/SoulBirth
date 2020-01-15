var Today = new Date();
var Year = new Date().getFullYear();
var Week = new Array('[일]', '[월]', '[화]', '[수]', '[목]', '[금]', '[토]');

var WorkerBirth = Array
    (
        '1/18',      // Soulworker
        '9/10',      // Haru
        '5/29',      // Erwin
        '2/27',      // Lily
        '6/25',      // Stella
        '7/28',      // Jin
        '11/4',      // Iris           
        '3/2',       // Chii
        '10/10'      // Ephnel      
    );

for (i = 0; i < WorkerBirth.length; i++) {
    WorkerBirth[i] = WorkerBirth[i] + "/" + Year ;
    CountDownTimer(WorkerBirth[i], "Birth" + i) ;
}

function CountDownTimer(dt, id) {

    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var timer;


    function showRemaining() {

        var now = new Date();

        var distance = end - now;

        if (distance < 0) {

            clearInterval(timer);

            document.getElementById(id).innerHTML = '카운트다운이 끝났습니다. 곧 오픈합니다!';

            return;
        }

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second)


        document.getElementById(id).innerHTML = '<center>' + days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초 </center>';
    }

    timer = setInterval(showRemaining, 1000);
}