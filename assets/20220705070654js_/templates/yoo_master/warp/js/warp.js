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

(function(e){var f={},a,c=!1,b=document.documentElement,c=b.firstElementChild||b.firstChild,d=document.createElement("div");d.style.cssText="position:absolute;top:-100em;width:1.1px";b.insertBefore(d,c);c=0!==(d.getBoundingClientRect().width||1)%1;b.removeChild(d);c||(b=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()))&&(c=8==parseInt(b[1],10)||9==parseInt(b[1],10));a=c;e.fn.socialButtons=function(a){a=e.extend({wrapper:'<div class="socialbuttons clearfix" />'},a);if(!a.twitter&&!a.plusone&&
!a.facebook)return this;a.twitter&&!f.twitter&&(f.twitter=e.getScript("//web.archive.org/web/20190213224051/https://platform.twitter.com/widgets.js"));a.plusone&&!f.plusone&&(f.plusone=e.getScript("//web.archive.org/web/20190213224051/https://apis.google.com/js/plusone.js"));if(!window.FB&&a.facebook&&!f.facebook){e("body").append('<div id="fb-root"></div>');var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//web.archive.org/web/20190213224051/https://connect.facebook.net/en_US/all.js#xfbml=1",c.parentNode.insertBefore(b,
c));f.facebook=!0}return this.each(function(){var b=e(this).data("permalink"),c=e(a.wrapper).appendTo(this);a.twitter&&c.append('<div><a href="https://web.archive.org/web/20190213224051/http://twitter.com/share" class="twitter-share-button" data-url="'+b+'" data-count="none">Tweet</a></div>');a.plusone&&c.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="'+b+'"></div></div>');a.facebook&&c.append('<div><div class="fb-like" data-href="'+b+'" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div></div>')})};
var g={};e.matchHeight=function(a,b,c){var d=e(window),f=a&&g[a];if(!f){var f=g[a]={id:a,elements:b,deepest:c,match:function(){var a=this.revert(),b=0;e(this.elements).each(function(){b=Math.max(b,e(this).outerHeight())}).each(function(c){var d="outerHeight";"border-box"==a[c].css("box-sizing")&&(d="height");var g=e(this);c=a[c];d=c.height()+(b-g[d]());c.css("min-height",d+"px")})},revert:function(){var a=[],b=this.deepest;e(this.elements).each(function(){var c=b?e(this).find(b+":first"):e(this);
a.push(c.css("min-height",""))});return a},remove:function(){d.unbind("debouncedresize orientationchange",j);this.revert();delete g[this.id]}},j=function(){f.match()};d.bind("debouncedresize orientationchange",j)}return f};e.matchWidth=function(b,c,d){var f=e(window),k=b&&g[b];if(!k){if(a)return g[b]={match:function(){},revert:function(){},remove:function(){}},g[b];var k=g[b]={id:b,elements:c,selector:d,match:function(){this.revert();e(this.elements).each(function(){var a=e(this),b=a.width(),c=a.children(d),
f=0;c.each(function(a){a<c.length-1?f+=e(this).width():e(this).width(b-f)})})},revert:function(){e(c).children(d).css("width","")},remove:function(){f.unbind("debouncedresize orientationchange",j);this.revert();delete g[this.id]}},j=function(){k.match()};f.bind("debouncedresize orientationchange",j)}return k};e.fn.matchHeight=function(a){var b=0,c=[];this.each(function(){var b=a?e(this).find(a+":first"):e(this);c.push(b);b.css("min-height","")});this.each(function(){b=Math.max(b,e(this).outerHeight())});
return this.each(function(a){var d=e(this);a=c[a];d=a.height()+(b-d.outerHeight());a.css("min-height",d+"px")})};e.fn.matchWidth=function(a){return this.each(function(){var b=e(this),c=b.children(a),d=0;c.width(function(a,f){return a<c.length-1?(d+=f,f):b.width()-d})})};e.fn.smoothScroller=function(a){a=e.extend({duration:1E3,transition:"easeOutExpo"},a);return this.each(function(){e(this).bind("click",function(){var b=this.hash,c=e(this.hash).offset().top;if(window.location.href.replace(window.location.hash,
"")+b==this)return e("html:not(:animated),body:not(:animated)").animate({scrollTop:c},a.duration,a.transition,function(){window.location.hash=b.replace("#","")}),!1})})}})(jQuery);
(function(e){e.easing.jswing=e.easing.swing;e.extend(e.easing,{def:"easeOutQuad",swing:function(f,a,c,b,d){return e.easing[e.easing.def](f,a,c,b,d)},easeInQuad:function(f,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(f,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(f,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(f,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(f,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(f,a,c,b,d){return 1>
(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(f,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(f,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(f,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(f,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(f,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(f,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(f,a,
c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(f,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(f,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(f,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(f,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(f,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(f,a,c,b,d){return-b*
(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(f,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(f,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(f,a,c,b,d){f=1.70158;var g=0,e=b;if(0==a)return c;if(1==(a/=d))return c+b;g||(g=0.3*d);e<Math.abs(b)?(e=b,f=g/4):f=g/(2*Math.PI)*Math.asin(b/e);return-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/g))+c},easeOutElastic:function(f,a,c,b,d){f=1.70158;var g=0,e=b;
if(0==a)return c;if(1==(a/=d))return c+b;g||(g=0.3*d);e<Math.abs(b)?(e=b,f=g/4):f=g/(2*Math.PI)*Math.asin(b/e);return e*Math.pow(2,-10*a)*Math.sin((a*d-f)*2*Math.PI/g)+b+c},easeInOutElastic:function(f,a,c,b,d){f=1.70158;var e=0,h=b;if(0==a)return c;if(2==(a/=d/2))return c+b;e||(e=d*0.3*1.5);h<Math.abs(b)?(h=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/h);return 1>a?-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e)+c:0.5*h*Math.pow(2,-10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e)+b+c},easeInBack:function(e,
a,c,b,d,g){void 0==g&&(g=1.70158);return b*(a/=d)*a*((g+1)*a-g)+c},easeOutBack:function(e,a,c,b,d,g){void 0==g&&(g=1.70158);return b*((a=a/d-1)*a*((g+1)*a+g)+1)+c},easeInOutBack:function(e,a,c,b,d,g){void 0==g&&(g=1.70158);return 1>(a/=d/2)?b/2*a*a*(((g*=1.525)+1)*a-g)+c:b/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+c},easeInBounce:function(f,a,c,b,d){return b-e.easing.easeOutBounce(f,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+
c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(f,a,c,b,d){return a<d/2?0.5*e.easing.easeInBounce(f,2*a,0,b,d)+c:0.5*e.easing.easeOutBounce(f,2*a-d,0,b,d)+0.5*b+c}})})(jQuery);
(function(e){function f(a){var b={},c=/^jQuery\d+$/;e.each(a.attributes,function(a,d){d.specified&&!c.test(d.name)&&(b[d.name]=d.value)});return b}function a(){var a=e(this);a.val()===a.attr("placeholder")&&a.hasClass("placeholder")&&(a.data("placeholder-password")?a.hide().next().show().focus():a.val("").removeClass("placeholder"))}function c(){var b,c=e(this);if(""===c.val()||c.val()===c.attr("placeholder")){if(c.is(":password")){if(!c.data("placeholder-textinput")){try{b=c.clone().attr({type:"text"})}catch(d){b=
e("<input>").attr(e.extend(f(c[0]),{type:"text"}))}b.removeAttr("name").data("placeholder-password",!0).bind("focus.placeholder",a);c.data("placeholder-textinput",b).before(b)}c=c.hide().prev().show()}c.addClass("placeholder").val(c.attr("placeholder"))}else c.removeClass("placeholder")}var b="placeholder"in document.createElement("input"),d="placeholder"in document.createElement("textarea");e.fn.placeholder=b&&d?function(){return this}:function(){return this.filter((b?"textarea":":input")+"[placeholder]").bind("focus.placeholder",
a).bind("blur.placeholder",c).trigger("blur.placeholder").end()};e(function(){e("form").bind("submit.placeholder",function(){var b=e(".placeholder",this).each(a);setTimeout(function(){b.each(c)},10)})});e(window).bind("unload.placeholder",function(){e(".placeholder").val("")})})(jQuery);
(function(e){if(!e.event.special.debouncedresize){var f=e.event,a,c;a=f.special.debouncedresize={setup:function(){e(this).on("resize",a.handler)},teardown:function(){e(this).off("resize",a.handler)},handler:function(b,d){var e=this,h=arguments,l=function(){b.type="debouncedresize";f.dispatch.apply(e,h)};c&&clearTimeout(c);d?l():c=setTimeout(l,a.threshold)},threshold:150}}})(jQuery);


}
/*
     FILE ARCHIVED ON 22:40:51 Feb 13, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:07:29 Feb 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.064
  cdx.remote: 0.103
  esindex: 0.008
  LoadShardBlock: 125.002 (6)
  PetaboxLoader3.datanode: 167.33 (8)
  load_resource: 255.555 (2)
  PetaboxLoader3.resolve: 187.067 (2)
*/