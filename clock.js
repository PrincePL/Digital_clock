

let digitalClock = () => {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dte = date.getDate();
    let mth = date.getMonth() + 1;
    let yer = date.getFullYear();

   var amorpm = hours >= 12 ? 'PM'  : 'AM';

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;
    document.getElementById("dte").innerHTML = dte +"/";
    document.getElementById("mth").innerHTML = mth +"/";
    document.getElementById("yer").innerHTML = yer ;

    setTimeout(digitalClock, 500);

}
digitalClock();

