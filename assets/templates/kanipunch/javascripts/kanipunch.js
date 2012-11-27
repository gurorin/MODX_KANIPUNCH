/*
* Theme Name: KANIPUNCH RESPONSIVE for MODX
* Theme URI: http://kanipunch.com/MODX/responsive/
* Description: A basic MODX theme based on Skeleton.
* Version: 1.0
* Author: KANIPUNCH
* Author URI: www.kanipunch.com
* License: MIT
* License URI: http://www.opensource.org/licenses/mit-license.php
* Copyright 2012, KANIPUNCH
* 11/22/2012
*/



/* /////////////////////////////////////////////////////////////////////////

	kanipunch.js
	
///////////////////////////////////////////////////////////////////////// */



/* 内容
-------------------------------------------------
 ・ready
 ・ページトップへ
------------------------------------------------- */



/* ready
----------------------------------------------------------*/
jQuery(document).ready(function() {
	
	//PIE.js for IE7-9
	if (window.PIE) {
		$('#wrap, .icon_img, .icon_label div, #site_info, #sns_icon li a, .tweet_list li, nav ul, nav ul li, nav ul li a, nav ul.children, nav ul.children li a, .inquiry_banner, .inquiry_banner li a, h2 , h2 span, a.button, .btn_submit input').each(function() {
			PIE.attach(this);
		});
	}
	
	//Tweet!
	$(".tweet").tweet({
		username: "modx_ja",
		//query: "MODX",
		avatar_size: 50,
		count: 3
	});
	
	//ページトップへ
	anchorWithinAPage(".pagetop a");
	
	//サイドメニュー制御
	$(".sidemenu ul li a").click(function(){
		$(this).next("ul").slideToggle().toggleClass("open");
		//カテゴリTOPも遷移可能にする
		/*
		if($(this).next("ul").hasClass('open')) {
			$(".sidemenu ul li:has(ul) > a[href]").unbind("click", handler1);
		} else {
			$(".sidemenu ul li:has(ul) > a[href]").bind("click", handler1);
    }
		*/
	});
	$(".sidemenu ul li:has(ul) > a[href]").bind("click", handler1);
});

function handler1(e){
	e.preventDefault().attr("href","#");
}



/* ページトップへ
--------------------------------------*/
function anchorWithinAPage(node) {
    jQuery(node).click(function(e) {
        e.preventDefault();
        var target = /(#[A-Za-z0-9_-]+)/.exec(this.href);
        if (target) {
            jQuery.scrollTo(jQuery(target[0]), 300, {easing:'easeOutQuart'});
        }
        //alert(this);
    });
}