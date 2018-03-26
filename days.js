var day1 = new Date('2017-10-16');
var day2 = new Date('2017-12-31');

function timeafter(spec){return Math.floor((Date.now() - spec)/1000/3600/24);}

(function show(){
  var wemet = timeafter(day1);
  var wefil = timeafter(day2);
 
  var style = 'font-size:3em; font-family:"微软雅黑"; color:#EA9DAA; text-shadow: -1px 1px 1px #FFBCC8A2, -2px 2px 1px #FFBCC891, -3px 3px 1px #FFBCC880, -4px 4px 1px #FFBCC86F, -5px 5px 1px #FFBCC85E, -6px 6px 1px #FFBCC84D, -7px 7px 1px #FFBCC83C, -8px 8px 1px #FFBCC82B, -9px 9px 1px #FFBCC81A';	
  console.log('%c we\'ve already met for about '+wemet+' days, and falled in love for '+wefil+' days, my darling.', style); 
})();

