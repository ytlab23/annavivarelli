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

(function(d){var e=function(){};d.extend(e.prototype,{name:"search",options:{url:document.location.href,param:"search",method:"post",minLength:3,delay:300,match:":not(li.skip)",skipClass:"skip",loadingClass:"loading",filledClass:"filled",resultClass:"result",resultsHeaderClass:"results-header",moreResultsClass:"more-results",noResultsClass:"no-results",listClass:"results",hoverClass:"selected",msgResultsHeader:"Search Results",msgMoreResults:"More Results",msgNoResults:"No results found",onSelect:function(a){window.location=
a.data("choice").url},onLoadedResults:function(a){return a}},initialize:function(a,b){this.options=d.extend({},this.options,b);var c=this;this.value=this.timer=null;this.form=a.parent("form:first");this.input=a;this.input.attr("autocomplete","off");this.input.bind({keydown:function(a){c.form[c.input.val()?"addClass":"removeClass"](c.options.filledClass);if(a&&a.which&&!a.shiftKey)switch(a.which){case 13:c.done(c.selected);a.preventDefault();break;case 38:c.pick("prev");a.preventDefault();break;case 40:c.pick("next");
a.preventDefault();break;case 27:case 9:c.hide()}},keyup:function(){c.trigger()},blur:function(a){c.hide(a)}});this.form.find("button[type=reset]").bind("click",function(){c.form.removeClass(c.options.filledClass);c.value=null;c.input.focus()});this.choices=d("<ul>").addClass(this.options.listClass).hide().insertAfter(this.input)},request:function(a){var b=this;this.form.addClass(this.options.loadingClass);d.ajax(d.extend({url:this.options.url,type:this.options.method,dataType:"json",success:function(a){a=
b.options.onLoadedResults.apply(this,[a]);b.form.removeClass(b.options.loadingClass);b.suggest(a)}},a))},pick:function(a){var b=null;"string"!==typeof a&&!a.hasClass(this.options.skipClass)&&(b=a);if("next"==a||"prev"==a)b=this.selected?this.selected[a](this.options.match):this.choices.children(this.options.match)["next"==a?"first":"last"]();null!=b&&b.length&&(this.selected=b,this.choices.children().removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass))},done:function(a){a?
(a.hasClass(this.options.moreResultsClass)?this.input.parent("form").submit():a.data("choice")&&this.options.onSelect.apply(this,[a]),this.hide()):this.input.parent("form").submit()},trigger:function(){var a=this.value,b=this;this.value=this.input.val();if(this.value.length<this.options.minLength)return this.hide();this.value!=a&&(this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){var a={};a[b.options.param]=b.value;b.request({data:a})},this.options.delay,this))},
suggest:function(a){if(a){var b=this,c={mouseover:function(){b.pick(d(this))},click:function(){b.done(d(this))}};!1===a?this.hide():(this.selected=null,this.choices.empty(),this.options.msgResultsHeader&&d("<li>").addClass(this.options.resultsHeaderClass+" "+this.options.skipClass).html(this.options.msgResultsHeader).appendTo(this.choices).bind(c),a.results&&0<a.results.length?(d(a.results).each(function(){d("<li>").data("choice",this).addClass(b.options.resultClass).append(d("<h3>").html(this.title)).append(d("<div>").html(this.text)).appendTo(b.choices).bind(c)}),
this.options.msgMoreResults&&d("<li>").addClass(b.options.moreResultsClass+" "+b.options.skipClass).html(b.options.msgMoreResults).appendTo(b.choices).bind(c),this.show()):this.options.msgNoResults&&(d("<li>").addClass(this.options.resultClass+" "+this.options.noResultsClass+" "+this.options.skipClass).html(this.options.msgNoResults).appendTo(this.choices).bind(c),this.show()))}},show:function(){this.visible||(this.visible=!0,this.choices.fadeIn(200))},hide:function(){this.visible&&(this.visible=
!1,this.choices.removeClass(this.options.hoverClass).fadeOut(200))}});d.fn[e.prototype.name]=function(){var a=arguments,b=a[0]?a[0]:null;return this.each(function(){var c=d(this);if(e.prototype[b]&&c.data(e.prototype.name)&&"initialize"!=b)c.data(e.prototype.name)[b].apply(c.data(e.prototype.name),Array.prototype.slice.call(a,1));else if(!b||d.isPlainObject(b)){var f=new e;e.prototype.initialize&&f.initialize.apply(f,d.merge([c],a));c.data(e.prototype.name,f)}else d.error("Method "+b+" does not exist on jQuery."+
e.name)})}})(jQuery);


}
/*
     FILE ARCHIVED ON 12:35:51 May 15, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:15:06 Feb 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.133
  exclusion.robots.policy: 0.117
  cdx.remote: 0.151
  esindex: 0.012
  LoadShardBlock: 1149.802 (6)
  PetaboxLoader3.resolve: 1026.84 (5)
  PetaboxLoader3.datanode: 310.659 (8)
  load_resource: 348.121 (2)
*/