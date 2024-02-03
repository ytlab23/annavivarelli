var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(e){var a=function(){};e.extend(a.prototype,{name:"accordionMenu",options:{mode:"default",display:null,collapseall:!1,toggler:"span.level1.parent",content:"ul.level2",onaction:function(){}},initialize:function(a,b){var b=e.extend({},this.options,b),f=a.find(b.toggler);f.each(function(a){var c=e(this),d=c.next(b.content).wrap("<div>").parent();d.data("height",d.height());c.hasClass("active")||a==b.display?d.show():d.hide().css("height",0);c.bind("click",function(){g(a)})});var g=function(a){var c=
e(f.get(a)),d=e([]);c.hasClass("active")&&(d=c,c=e([]));b.collapseall&&(d=f.filter(".active"));switch(b.mode){case "slide":c.next().stop().show().animate({height:c.next().data("height")},400);d.next().stop().animate({height:0},400,function(){d.next().hide()});setTimeout(function(){b.onaction.apply(this,[c,d])},401);break;default:c.next().show().css("height",c.next().data("height")),d.next().hide().css("height",0),b.onaction.apply(this,[c,d])}c.addClass("active").parent().addClass("active");d.removeClass("active").parent().removeClass("active")}}});
e.fn[a.prototype.name]=function(){var h=arguments,b=h[0]?h[0]:null;return this.each(function(){var f=e(this);if(a.prototype[b]&&f.data(a.prototype.name)&&"initialize"!=b)f.data(a.prototype.name)[b].apply(f.data(a.prototype.name),Array.prototype.slice.call(h,1));else if(!b||e.isPlainObject(b)){var g=new a;a.prototype.initialize&&g.initialize.apply(g,e.merge([f],h));f.data(a.prototype.name,g)}else e.error("Method "+b+" does not exist on jQuery."+a.name)})}})(jQuery);


}
/*
     FILE ARCHIVED ON 05:21:25 Apr 29, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:07:29 Feb 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.065
  cdx.remote: 0.104
  esindex: 0.01
  LoadShardBlock: 102.539 (6)
  PetaboxLoader3.datanode: 164.416 (8)
  load_resource: 165.781 (2)
  PetaboxLoader3.resolve: 72.65 (2)
*/