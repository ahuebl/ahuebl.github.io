/*
function demo(x) {  // pass a counter object by ADDRESS
  x.reset(0);
}

var counter = {
  num: 0,
  inc: function(howMuch) {
    this.num = this.num + howMuch;
  },
  count: function() {
    return this.num;
  },
  reset: function(startNum) {
    this.num = startNum;
  }
};

for (counter.reset(10); counter.count() > 0; counter.inc(-1)) {
  console.log( "current value: " + counter.count());
  demo(counter);
}
*/

function incrementer(incAmount) {
    this.num = 0;
    this.amount = incAmount;
    this.inc = function() {
      this.num = this.amount;
    };
    this.value = function() {
      return this.num;
    };
  }
  
  var inc1 = new incrementer(2);
  var inc2 = new incrementer(1);
  var inc3 = new incrementer(10);
  
  inc1.inc(); inc1.inc(); console.log(inc1.value());
  console.log(inc2.value());
  inc3.inc(); console.log(inc3.value());