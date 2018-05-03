var tl = new TimelineLite();
/*
tl.to(".tp1", 2.3, {strokeDashoffset:"0"});
tl.to(".tp1", 0.2, {fillOpacity:1}, "-=1.7");
tl.to(".tp2", 2.3, {strokeDashoffset:"0"}, "-=1.7");
tl.to(".tp2", 0.2, {fillOpacity:1}, "-=1.4");*/
tl.to(".tp3", 2.3, {strokeDashoffset:"0"},"-=1.5");
tl.to(".tp3", 0.2, {fillOpacity:1}, "-=2");
tl.to(".tp4", 2.3, {strokeDashoffset:"0"}, "-=1.3");
tl.to(".tp4", 0.2, {fillOpacity:1}, "-=1.6");

/*-- Stagger animation with a function call on each complete for showing opacity --*/ 

var tl2 = new TimelineLite();

tl.staggerTo(".tp", 2.5, {strokeDashoffset:"0", onComplete:opac, onCompleteParams:["{self}"]}, 1.5);

function opac(elem){
  console.log(elem);
  tl2.to(elem.target, 0.2, {fillOpacity:1});
}