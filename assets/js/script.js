jQuery(document).ready(function() {

	jQuery(document).keydown(function (e) {
        if (e.keyCode == 27) {
            //$(modal_or_menu_element).closeElement();
            jQuery(".wpsearchform").hide();
        }
	});
    
	/* mobile navigation */ 
    jQuery('.hamburger').click(function(){
        if (jQuery(this).hasClass('open')){
            jQuery(this).removeClass('open');
            jQuery("#wrapper").css("right","0");
            jQuery('body, html').removeClass('scroll-hidden');
			jQuery('.logo_image img ').removeClass('visibility-h');
			jQuery('.logo_image img ').addClass('visibility-v');
			
            jQuery('.navbar').removeClass('open');
            jQuery('.sub-menu').slideUp();
            jQuery('em.submenu-caret').removeClass('toggled')
        }else {
            jQuery(this).addClass('open')
            jQuery("#wrapper").css("right","80%");
            jQuery('body, html').addClass('scroll-hidden');
			jQuery('.logo_image img ').addClass('visibility-h');
			jQuery('.logo_image img ').removeClass('visibility-v');
            jQuery('.navbar').addClass('open');
        }				
    })   
    if(jQuery('#phone-menu ul ul').length > 0){   
        jQuery('#phone-menu ul ul ').before('<em class="submenu-caret"></em>')
    }
    jQuery('.submenu-caret').click(function(){
        jQuery(this).next().slideToggle();
        jQuery(this).toggleClass('toggled');
        jQuery(this).parent().siblings().find('ul').slideUp();
        jQuery(this).parent().siblings().find('em').removeClass('toggled');	
    });
	
});