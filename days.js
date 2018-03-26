var day1 = new Date('2017-10-16');
var day2 = new Date('2017-12-31');

function timeafter(spec){return Math.floor((Date.now() - spec)/1000/3600/24);}

(function show(){
  var wemet = timeafter(day1);
  var wefil = timeafter(day2);
  
  console.log('we\'ve already met for about '+wemet+' days, and falled in love for '+wefil+' days, my darling.');
})();

