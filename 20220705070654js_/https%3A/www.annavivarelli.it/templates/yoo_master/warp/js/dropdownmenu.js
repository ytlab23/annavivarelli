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

(function(d){var e=function(){};d.extend(e.prototype,{name:"dropdownMenu",options:{mode:"default",itemSelector:"li",firstLevelSelector:"li.level1",dropdownSelector:"ul",duration:600,remainTime:800,remainClass:"remain",matchHeight:!0,transition:"easeOutExpo",withopacity:!0,centerDropdown:!1,reverseAnimation:!1,fixWidth:!1,fancy:null,boundary:d(window),boundarySelector:null},initialize:function(e,g){this.options=d.extend({},this.options,g);var a=this,h=null,t=!1;this.menu=e;this.dropdowns=[];this.options.withopacity=
d.support.opacity?this.options.withopacity:!1;if(this.options.fixWidth){var u=5;this.menu.children().each(function(){u+=d(this).width()});this.menu.css("width",u)}this.options.matchHeight&&this.matchHeight();this.menu.find(this.options.firstLevelSelector).each(function(s){var l=d(this),b=l.find(a.options.dropdownSelector).css({overflow:"hidden"});if(b.length){b.css("overflow","hidden").show();b.data("init-width",parseFloat(b.css("width")));b.data("columns",b.find(".column").length);b.data("single-width",
1<b.data("columns")?b.data("init-width")/b.data("columns"):b.data("init-width"));var f=d("<div>").css({overflow:"hidden"}).append("<div></div>"),e=f.find("div:first");b.children().appendTo(e);f.appendTo(b);a.dropdowns.push({dropdown:b,div:f,innerdiv:e});b.hide()}l.bind({mouseenter:function(){t=!0;a.menu.trigger("menu:enter",[l,s]);if(h){if(h.index==s)return;h.item.removeClass(a.options.remainClass);h.div.hide().parent().hide()}if(b.length){b.parent().find("div").css({width:"",height:"","min-width":"",
"min-height":""});b.removeClass("flip").removeClass("stack");l.addClass(a.options.remainClass);f.stop().show();b.show();a.options.centerDropdown&&b.css("margin-left",-1*(parseFloat(b.data("init-width"))/2-l.width()/2));var c=b.css("width",b.data("init-width")).data("init-width");dpitem=a.options.boundarySelector?d(a.options.boundarySelector,f):f;boundary={top:0,left:0,width:a.options.boundary.width()};e.css({"min-width":c});try{d.extend(boundary,a.options.boundary.offset())}catch(g){}if(dpitem.offset().left<
boundary.left||dpitem.offset().left+c-boundary.left>boundary.width)b.addClass("flip"),dpitem.offset().left<boundary.left&&(b.removeClass("flip").addClass("stack"),c=b.css("width",b.data("single-width")).data("single-width"),e.css({"min-width":c}),a.options.centerDropdown&&b.css({"margin-left":""}));var m=parseFloat(b.height());switch(a.options.mode){case "showhide":c={width:c,height:m};f.css(c);break;case "diagonal":var j={width:0,height:0},c={width:c,height:m};a.options.withopacity&&(j.opacity=0,
c.opacity=1);f.css(j).animate(c,a.options.duration,a.options.transition);break;case "height":j={width:c,height:0};c={height:m};a.options.withopacity&&(j.opacity=0,c.opacity=1);f.css(j).animate(c,a.options.duration,a.options.transition);break;case "width":j={width:0,height:m};c={width:c};a.options.withopacity&&(j.opacity=0,c.opacity=1);f.css(j).animate(c,a.options.duration,a.options.transition);break;case "slide":b.css({width:c,height:m});f.css({width:c,height:m,"margin-top":-1*m}).animate({"margin-top":0},
a.options.duration,a.options.transition);break;default:j={width:c,height:m},c={},a.options.withopacity&&(j.opacity=0,c.opacity=1),f.css(j).animate(c,a.options.duration,a.options.transition)}h={item:l,div:f,index:s}}else h=active=null},mouseleave:function(c){if(c.srcElement&&d(c.srcElement).hasClass("module"))return!1;t=!1;b.length?window.setTimeout(function(){if(!(t||"none"==f.css("display"))){a.menu.trigger("menu:leave",[l,s]);var b=function(){l.removeClass(a.options.remainClass);h=null;f.hide().parent().hide()};
if(a.options.reverseAnimation)switch(a.options.mode){case "showhide":b();break;case "diagonal":var c={width:0,height:0};a.options.withopacity&&(c.opacity=0);f.stop().animate(c,a.options.duration,a.options.transition,function(){b()});break;case "height":c={height:0};a.options.withopacity&&(c.opacity=0);f.stop().animate(c,a.options.duration,a.options.transition,function(){b()});break;case "width":c={width:0};a.options.withopacity&&(c.opacity=0);f.stop().animate(c,a.options.duration,a.options.transition,
function(){b()});break;case "slide":f.stop().animate({"margin-top":-1*parseFloat(f.data("dpheight"))},a.options.duration,a.options.transition,function(){b()});break;default:c={},a.options.withopacity&&(c.opacity=0),f.stop().animate(c,a.options.duration,a.options.transition,function(){b()})}else b()}},a.options.remainTime):a.menu.trigger("menu:leave")}})});if(this.options.fancy){var k=d.extend({mode:"move",transition:"easeOutExpo",duration:500,onEnter:null,onLeave:null},this.options.fancy),n=this.menu.append('<div class="fancy bg1"><div class="fancy-1"><div class="fancy-2"><div class="fancy-3"></div></div></div></div>').find(".fancy:first").hide(),
q=this.menu.find(".active:first"),p=null,v=function(a,d){if(!d||!(p&&a.get(0)==p.get(0)))n.stop().show().css("visibility","visible"),"move"==k.mode?!q.length&&!d?n.hide():n.animate({left:a.position().left+"px",width:a.width()+"px"},k.duration,k.transition):d?n.css({opacity:q?0:1,left:a.position().left+"px",width:a.width()+"px"}).animate({opacity:1},k.duration):n.animate({opacity:0},k.duration),p=d?a:null};this.menu.bind({"menu:enter":function(a,d,b){v(d,!0);if(k.onEnter)k.onEnter(d,b,n)},"menu:leave":function(a,
d,b){v(q,!1);if(k.onLeave)k.onLeave(d,b,n)},"menu:fixfancy":function(){p&&n.stop().show().css({left:p.position().left+"px",width:p.width()+"px"})}});q.length&&"move"==k.mode&&v(q,!0)}},matchHeight:function(){this.menu.find("li.level1.parent").each(function(){var e=0;d(this).find("ul.level2").each(function(){var g=d(this),a=g.parents(".dropdown:first").show();e=Math.max(g.height(),e);a.hide()}).css("min-height",e)})}});d.fn[e.prototype.name]=function(){var r=arguments,g=r[0]?r[0]:null;return this.each(function(){var a=
d(this);if(e.prototype[g]&&a.data(e.prototype.name)&&"initialize"!=g)a.data(e.prototype.name)[g].apply(a.data(e.prototype.name),Array.prototype.slice.call(r,1));else if(!g||d.isPlainObject(g)){var h=new e;e.prototype.initialize&&h.initialize.apply(h,d.merge([a],r));a.data(e.prototype.name,h)}else d.error("Method "+g+" does not exist on jQuery."+e.name)})}})(jQuery);


}
/*
     FILE ARCHIVED ON 12:35:56 May 15, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:07:29 Feb 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.095
  cdx.remote: 0.176
  esindex: 0.013
  LoadShardBlock: 115.688 (6)
  PetaboxLoader3.datanode: 172.257 (8)
  load_resource: 168.36 (2)
  PetaboxLoader3.resolve: 87.78 (2)
*/