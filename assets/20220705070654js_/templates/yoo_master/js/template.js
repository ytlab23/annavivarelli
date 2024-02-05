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

(function($){

	$(document).ready(function() {

		var config = $('body').data('config') || {};
		
		// Accordion menu
		$('.menu-sidebar').accordionMenu({ mode:'slide' });

		// Dropdown menu
		$('#menu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown'});

		// Smoothscroller
		$('a[href="#page"]').smoothScroller({ duration: 500 });

		// Social buttons
		$('article[data-permalink]').socialButtons(config);

	});

	$.onMediaQuery('(min-width: 960px)', {
		init: function() {
			if (!this.supported) this.matches = true;
		},
		valid: function() {
			$.matchWidth('grid-block', '.grid-block', '.grid-h').match();
			$.matchHeight('main', '#maininner, #sidebar-a, #sidebar-b').match();
			$.matchHeight('top-a', '#top-a .grid-h', '.deepest').match();
			$.matchHeight('top-b', '#top-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-a', '#bottom-a .grid-h', '.deepest').match();
			$.matchHeight('bottom-b', '#bottom-b .grid-h', '.deepest').match();
			$.matchHeight('innertop', '#innertop .grid-h', '.deepest').match();
			$.matchHeight('innerbottom', '#innerbottom .grid-h', '.deepest').match();
		},
		invalid: function() {
			$.matchWidth('grid-block').remove();
			$.matchHeight('main').remove();
			$.matchHeight('top-a').remove();
			$.matchHeight('top-b').remove();
			$.matchHeight('bottom-a').remove();
			$.matchHeight('bottom-b').remove();
			$.matchHeight('innertop').remove();
			$.matchHeight('innerbottom').remove();
		}
	});

	var pairs = [];

	$.onMediaQuery('(min-width: 480px) and (max-width: 959px)', {
		valid: function() {
			$.matchHeight('sidebars', '.sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b').match();
			pairs = [];
			$.each(['.sidebars-1 #sidebar-a > .grid-box', '.sidebars-1 #sidebar-b > .grid-box', '#top-a .grid-h', '#top-b .grid-h', '#bottom-a .grid-h', '#bottom-b .grid-h', '#innertop .grid-h', '#innerbottom .grid-h'], function(i, selector) {
				for (var i = 0, elms = $(selector), len = parseInt(elms.length / 2); i < len; i++) {
					var id = 'pair-' + pairs.length;
					$.matchHeight(id, [elms.get(i * 2), elms.get(i * 2 + 1)], '.deepest').match();
					pairs.push(id);
				}
			});
		},
		invalid: function() {
			$.matchHeight('sidebars').remove();
			$.each(pairs, function() { $.matchHeight(this).remove(); });
		}
	});

	$.onMediaQuery('(max-width: 767px)', {
		valid: function() {
			var header = $('#header-responsive');
			if (!header.length) {
				header = $('<div id="header-responsive"/>').prependTo('#header');
				$('#logo').clone().removeAttr('id').addClass('logo').appendTo(header);
				$('.searchbox').first().clone().removeAttr('id').appendTo(header);
				$('#menu').responsiveMenu().next().addClass('menu-responsive').appendTo(header);
			}
		}
	});

})(jQuery);

}
/*
     FILE ARCHIVED ON 00:06:14 Feb 20, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:07:29 Feb 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.086
  esindex: 0.01
  LoadShardBlock: 177.019 (6)
  PetaboxLoader3.datanode: 197.028 (8)
  load_resource: 254.46 (2)
  PetaboxLoader3.resolve: 134.745 (2)
*/