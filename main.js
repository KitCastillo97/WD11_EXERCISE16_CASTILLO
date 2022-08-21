function LengthConverter(source , valNum) {
    valNum = parseFloat(valNum);
    var centi = document.getElementById("centi");
    var milli = document.getElementById("milli");
    var kilo = document.getElementById("kilo");
    var meters = document.getElementById("meters");
if (source=="centi") {
    milli.value=(valNum*10);
    kilo.value=(valNum/100000);
    meters.value=(valNum/100);
  }
if (source=="milli") {
    kilo.value=(valNum/1000000);
    meters.value=(valNum/1000);
    centi.value=(valNum/10);
  }
if (source=="kilo") {
    meters.value=(valNum*1000);
    centi.value=(valNum*100000);
    milli.value=(valNum*1000000);
  }
if (source=="meters") {
    centi.value=(valNum*100);
    milli.value=(valNum*1000);
    kilo.value=(valNum/1000);
  }
  };
