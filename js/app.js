let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let currenTime = new Date();

    hrs.innerHTML = currenTime.getHours();
    min.innerHTML = currenTime.getMinutes();
    sec.innerHTML = currenTime.getSeconds();
},1000);