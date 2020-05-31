// Set the date we're counting down to [[REGISTRATION 6/6]]
var countDownDateR1 = new Date("June 6, 2020 07:00:00").getTime();
var btnR1 = document.getElementById("btnCounterR1");

// Update the count down every 1 second
var xR1 = setInterval(function () {
  // Get today's date and time
  var nowR1 = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceR1 = countDownDateR1 - nowR1;

  // Time calculations for days, hours, minutes and seconds
  var daysR1 = Math.floor(distanceR1 / (1000 * 60 * 60 * 24));
  var hoursR1 = Math.floor(
    (distanceR1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesR1 = Math.floor((distanceR1 % (1000 * 60 * 60)) / (1000 * 60));
  var secondsR1 = Math.floor((distanceR1 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoR1").innerHTML =
    daysR1 + "d " + hoursR1 + "h " + minutesR1 + "m " + secondsR1 + "s ";

  // If the count down is over, write some text
  if (distanceR1 < 0) {
    clearInterval(xR1);
    document.getElementById("demoR1").innerHTML = "REGISTER now!";
    btnR1.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[REGISTRATION 7/6]]
var countDownDateR2 = new Date("June 7, 2020 07:00:00").getTime();
var btnR2 = document.getElementById("btnCounterR2");

// Update the count down every 1 second
var xR2 = setInterval(function () {
  // Get today's date and time
  var nowR2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceR2 = countDownDateR2 - nowR2;

  // Time calculations for days, hours, minutes and seconds
  var daysR2 = Math.floor(distanceR2 / (1000 * 60 * 60 * 24));
  var hoursR2 = Math.floor(
    (distanceR2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesR2 = Math.floor((distanceR2 % (1000 * 60 * 60)) / (1000 * 60));
  var secondsR2 = Math.floor((distanceR2 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoR2").innerHTML =
    daysR2 + "d " + hoursR2 + "h " + minutesR2 + "m " + secondsR2 + "s ";

  // If the count down is over, write some text
  if (distanceR2 < 0) {
    clearInterval(xR2);
    document.getElementById("demoR2").innerHTML = "REGISTER now!";
    btnR2.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 1]]
var countDownDate1 = new Date("June 6, 2020 8:30:00").getTime();
var btn1a = document.getElementById("btnCounter1a");
var btn1b = document.getElementById("btnCounter1b");

// Update the count down every 1 second
var x1 = setInterval(function () {
  // Get today's date and time
  var now1 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now1;

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor(
    (distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML =
    days1 + "d " + hours1 + "h " + minutes1 + "m " + seconds1 + "s ";

  // If the count down is over, write some text
  if (distance1 < 0) {
    clearInterval(x1);
    document.getElementById("demo1").innerHTML = "JOIN now!";
    btn1a.removeAttribute("disabled");
    btn1b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 2]]
var countDownDate2 = new Date("June 6, 2020 10:15:00").getTime();
var btn2a = document.getElementById("btnCounter2a");
var btn2b = document.getElementById("btnCounter2b");
// Update the count down every 1 second
var x2 = setInterval(function () {
  // Get today's date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor(
    (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo2").innerHTML =
    days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";

  // If the count down is over, write some text
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("demo2").innerHTML = "JOIN now!";
    btn2a.removeAttribute("disabled");
    btn2b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 3]]
var countDownDate3 = new Date("June 6, 2020 14:40:00").getTime();
var btn3a = document.getElementById("btnCounter3a");
var btn3b = document.getElementById("btnCounter3b");

// Update the count down every 1 second
var x3 = setInterval(function () {
  // Get today's date and time
  var now3 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;

  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor(
    (distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo3").innerHTML =
    days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ";

  // If the count down is over, write some text
  if (distance3 < 0) {
    clearInterval(x3);
    document.getElementById("demo3").innerHTML = "JOIN now!";
    btn3a.removeAttribute("disabled");
    btn3b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 4]]
var countDownDate4 = new Date("June 6, 2020 15:55:00").getTime();
var btn4a = document.getElementById("btnCounter4a");
var btn4b = document.getElementById("btnCounter4b");
// Update the count down every 1 second
var x4 = setInterval(function () {
  // Get today's date and time
  var now4 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance4 = countDownDate4 - now4;

  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor(
    (distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo4").innerHTML =
    days4 + "d " + hours4 + "h " + minutes4 + "m " + seconds4 + "s ";

  // If the count down is over, write some text
  if (distance4 < 0) {
    clearInterval(x4);
    document.getElementById("demo4").innerHTML = "JOIN now!";
    btn4a.removeAttribute("disabled");
    btn4b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 5]]
var countDownDate5 = new Date("June 7, 2020 8:30:00").getTime();
var btn5a = document.getElementById("btnCounter5a");
var btn5b = document.getElementById("btnCounter5b");
// Update the count down every 1 second
var x5 = setInterval(function () {
  // Get today's date and time
  var now5 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance5 = countDownDate5 - now5;

  // Time calculations for days, hours, minutes and seconds
  var days5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
  var hours5 = Math.floor(
    (distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo5").innerHTML =
    days5 + "d " + hours5 + "h " + minutes5 + "m " + seconds5 + "s ";

  // If the count down is over, write some text
  if (distance5 < 0) {
    clearInterval(x5);
    document.getElementById("demo5").innerHTML = "JOIN now!";
    btn5a.removeAttribute("disabled");
    btn5b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 6]]
var countDownDate6 = new Date("June 7, 2020 10:15:00").getTime();
var btn6a = document.getElementById("btnCounter6a");
var btn6b = document.getElementById("btnCounter6b");

// Update the count down every 1 second
var x6 = setInterval(function () {
  // Get today's date and time
  var now6 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance6 = countDownDate5 - now6;

  // Time calculations for days, hours, minutes and seconds
  var days6 = Math.floor(distance6 / (1000 * 60 * 60 * 24));
  var hours6 = Math.floor(
    (distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes6 = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds6 = Math.floor((distance6 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo6").innerHTML =
    days6 + "d " + hours6 + "h " + minutes6 + "m " + seconds6 + "s ";

  // If the count down is over, write some text
  if (distance6 < 0) {
    clearInterval(x6);
    document.getElementById("demo5").innerHTML = "JOIN now!";
    btn6a.removeAttribute("disabled");
    btn6b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 7]]
var countDownDate7 = new Date("June 7, 2020 14:40:00").getTime();
var btn7a = document.getElementById("btnCounter7a");
var btn7b = document.getElementById("btnCounter7b");

// Update the count down every 1 second
var x7 = setInterval(function () {
  // Get today's date and time
  var now7 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance7 = countDownDate7 - now7;

  // Time calculations for days, hours, minutes and seconds
  var days7 = Math.floor(distance7 / (1000 * 60 * 60 * 24));
  var hours7 = Math.floor(
    (distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes7 = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds7 = Math.floor((distance7 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo7").innerHTML =
    days7 + "d " + hours7 + "h " + minutes7 + "m " + seconds7 + "s ";

  // If the count down is over, write some text
  if (distance7 < 0) {
    clearInterval(x7);
    document.getElementById("demo7").innerHTML = "JOIN now!";
    btn7a.removeAttribute("disabled");
    btn7b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[SERMON 8]]
var countDownDate8 = new Date("June 7, 2020 15:55:00").getTime();
var btn8a = document.getElementById("btnCounter8a");
var btn8b = document.getElementById("btnCounter8b");

// Update the count down every 1 second
var x8 = setInterval(function () {
  // Get today's date and time
  var now8 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance8 = countDownDate8 - now8;

  // Time calculations for days, hours, minutes and seconds
  var days8 = Math.floor(distance8 / (1000 * 60 * 60 * 24));
  var hours8 = Math.floor(
    (distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes8 = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds8 = Math.floor((distance8 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo8").innerHTML =
    days8 + "d " + hours8 + "h " + minutes8 + "m " + seconds8 + "s ";

  // If the count down is over, write some text
  if (distance8 < 0) {
    clearInterval(x8);
    document.getElementById("demo8").innerHTML = "JOIN now!";
    btn8a.removeAttribute("disabled");
    btn8b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[WITNESSING SHARING SESSION 1]]
var countDownDateWSS1 = new Date("June 6, 2020 13:25:00").getTime();
var btnWSS1a = document.getElementById("btnCounterWSS1a");
var btnWSS1b = document.getElementById("btnCounterWSS1b");

// Update the count down every 1 second
var xWSS1 = setInterval(function () {
  // Get today's date and time
  var nowWSS1 = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceWSS1 = countDownDateWSS1 - nowWSS1;

  // Time calculations for days, hours, minutes and seconds
  var daysWSS1 = Math.floor(distanceWSS1 / (1000 * 60 * 60 * 24));
  var hoursWSS1 = Math.floor(
    (distanceWSS1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesWSS1 = Math.floor((distanceWSS1 % (1000 * 60 * 60)) / (1000 * 60));
  var secondsWSS1 = Math.floor((distanceWSS1 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoWSS1").innerHTML =
    daysWSS1 +
    "d " +
    hoursWSS1 +
    "h " +
    minutesWSS1 +
    "m " +
    secondsWSS1 +
    "s ";

  // If the count down is over, write some text
  if (distanceWSS1 < 0) {
    clearInterval(xWSS1);
    document.getElementById("demoWSS1").innerHTML = "JOIN now!";
    btnWSS1a.removeAttribute("disabled");
    btnWSS1b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[WITNESSING SHARING SESSION 2]]
var countDownDateWSS2 = new Date("June 7, 2020 13:25:00").getTime();
var btnWSS2a = document.getElementById("btnCounterWSS2a");
var btnWSS2b = document.getElementById("btnCounterWSS2b");

// Update the count down every 1 second
var xWSS2 = setInterval(function () {
  // Get today's date and time
  var nowWSS2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceWSS2 = countDownDateWSS2 - nowWSS2;

  // Time calculations for days, hours, minutes and seconds
  var daysWSS2 = Math.floor(distanceWSS2 / (1000 * 60 * 60 * 24));
  var hoursWSS2 = Math.floor(
    (distanceWSS2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesWSS2 = Math.floor((distanceWSS2 % (1000 * 60 * 60)) / (1000 * 60));
  var secondsWSS2 = Math.floor((distanceWSS2 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoWSS2").innerHTML =
    daysWSS2 +
    "d " +
    hoursWSS2 +
    "h " +
    minutesWSS2 +
    "m " +
    secondsWSS2 +
    "s ";

  // If the count down is over, write some text
  if (distanceWSS2 < 0) {
    clearInterval(xWSS2);
    document.getElementById("demoWSS2").innerHTML = "JOIN now!";
    btnWSS2a.removeAttribute("disabled");
    btnWSS2b.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[GROUP PHOTOGRAPHY 1]
var countDownDateGP1 = new Date("June 6, 2020 12:00:00").getTime();
var btnGP1 = document.getElementById("btnCounterGP1");

// Update the count down every 1 second
var xGP1 = setInterval(function () {
  // Get today's date and time
  var nowGP1 = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceGP1 = countDownDateGP1 - nowGP1;

  // Time calculations for days, hours, minutes and seconds
  var daysGP1 = Math.floor(distanceGP1 / (1000 * 60 * 60 * 24));
  var hoursGP1 = Math.floor(
    (distanceGP1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesGP1 = Math.floor((distanceGP1 % (1000 * 60 * 60)) / (1000 * 60));
  var secondsGP1 = Math.floor((distanceGP1 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoGP1").innerHTML =
    daysGP1 + "d " + hoursGP1 + "h " + minutesGP1 + "m " + secondsGP1 + "s ";

  // If the count down is over, write some text
  if (distanceGP1 < 0) {
    clearInterval(xGP1);
    document.getElementById("demoGP1").innerHTML = "UPLOAD now!";
    btnGP1.removeAttribute("disabled");
  }
}, 1000);

// Set the date we're counting down to [[GROUP PHOTOGRAPHY 2]]
var countDownDateGP2 = new Date("June 7, 2020 12:00:00").getTime();
var btnGP2 = document.getElementById("btnCounterGP2");

// Update the count down every 1 second
var xGP2 = setInterval(function () {
  // Get today's date and time
  var nowGP2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceGP2 = countDownDateGP2 - nowGP2;

  // Time calculations for days, hours, minutes and seconds
  var daysGP2 = Math.floor(distanceGP2 / (1000 * 60 * 60 * 24));
  var hoursGP2 = Math.floor(
    (distanceGP2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesGP2 = Math.floor((distanceGP2 % (1000 * 60 * 60)) / (1000 * 60));
  var secondsGP2 = Math.floor((distanceGP2 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoGP2").innerHTML =
    daysGP2 + "d " + hoursGP2 + "h " + minutesGP2 + "m " + secondsGP2 + "s ";

  // If the count down is over, write some text
  if (distanceGP2 < 0) {
    clearInterval(xGP2);
    document.getElementById("demoGP2").innerHTML = "UPLOAD now!";
    btnGP2.removeAttribute("disabled");
  }
}, 1000);
