/*
 * jQuery CashMeOusside Plugin 1.0
 * Copyright 2017, Jason Everett
 * http://blog.iJasonEverett.com
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
;(function ($) {
    function CashMeOusside (element, options) {
		this.element = element;
        this.settings = $.extend({}, $.fn.CashMeOusside.defaults, options);
        this.init();
	}

    $.extend(CashMeOusside.prototype, {
		init: function() {
 			$("body").append('<img id="cash-me-ousside" src="'+ this.settings.image +'" alt="howbowdah" />');
			$('#cash-me-ousside').css('position', 'fixed');
			$('#cash-me-ousside').css('left', '50%');
            $('#cash-me-ousside').css('margin-left', '-250px');
			$('#cash-me-ousside').css('bottom', '-500px');
			if(this.settings.hasSound){
				$("body").append('<audio id="cash-me-ousside-audio"><source src="'+ this.settings.sound +'" type="audio/mpeg"></source></audio>');
 			}
		},
		show: function() {
            var audio = document.getElementById('cash-me-ousside-audio');
			audio.play();
            $('#cash-me-ousside').animate({bottom:'0px'},500,function(){
    	        setTimeout(function(){hideMe();},1000);
            });
		}
	});

    var hideMe = function() {
        $('#cash-me-ousside').animate({bottom:'-500px'},500);
    };

    // A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn.CashMeOusside = function(options) {
		var plugin = this.data('plugin_cashmeousside');

        // has plugin instantiated ?
        if (plugin instanceof Plugin) {
            //do nothing
        } else {
            plugin = new CashMeOusside(this, options);
            this.data('plugin_cashmeousside', plugin);
        }

        return plugin;
	};

    $.fn.CashMeOusside.defaults = {
 		hasSound: true,
 		image: 'cashmeousside.png',
 		sound: 'cashmeoussidehowbowdah.mp3'
 	};
}(jQuery));