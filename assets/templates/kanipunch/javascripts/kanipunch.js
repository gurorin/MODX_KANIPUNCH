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
	
	
	
	/* ------------------------------------
	
	   サイドメニュー制御
	
	--------------------------------------- */
	
	// 「#menu」が存在するときのみ動作する
	if($('.sidemenu').length){
	
	var active = '';
	
	// 現在のURLを配列で取得
	var nowURL = document.URL.split('/');//var nowURL = location.href.split('/');
	
	// 親のディレクトリ取得
	var endDir = nowURL.slice(nowURL.length-2,nowURL.length-1) + active;
	
	
	
	/* 現在のカテゴリのサブメニューをopen
	--------------------------------------- */
	
	// ディレクトリ名によって分岐
	switch (endDir){ 
	case 'company':
	var active = 2;
	break;
	case 'service':
	var active = 3;
	break;
	case 'product':
	var active = 4;
	break;
	case 'inquiry':
	var active = 5;
	break;
	}
	
	// Class を追加する対象を決定
	var targetElem = '.sidemenu > ul > li:nth-child(' + active + ') > ul';
	
	// 対象へClassを追加
	//$(targetElem).addClass('open');
	
	// 対象のCSSを指定
	$(targetElem).css('display','block');
	
	}
	
	
	
	/* 現在のページをハイライト
	--------------------------------------- */
	var num = nowURL.length - 2;//現在のURLから階層を判別

	for (var i = 0; i < num; i++){
		nowURL.shift();//末尾の2つのみに配列を整形
	}

  var currentLink;
  while(nowURL.length){
    currentLink=$('.sidemenu > ul > li > ul > li').find("a[href$='../"+nowURL.join('/')+"']");
    if(currentLink.length){
      currentLink.css({
        //fontWeight: 'bold',
				backgroundColor: '#F0F0F0'
        //color: '#73C71F'
      });
      break;
    }
    nowURL.pop();
  }
	
	
	
	/* サブメニューのtoggle機能
	--------------------------------------- */
	
	//ルートまでの相対パスを取得
	var rootPath = "";
	var repeatNum = num - 3;
	
	for (var i = 0; i < repeatNum; i++){
		var rootPath = rootPath + "../";
	}
	
	$(".sidemenu ul li a").click(function(){
		$(this).next("ul").slideToggle().toggleClass("open");
		//カテゴリTOPも遷移可能にする
		if($(this).next("ul").hasClass('open')) {
			$(".sidemenu ul li:has(ul) > a[href]").unbind("click", handler1);
			$(".sidemenu ul li:has(ul) > a").css('background-image','url(' + rootPath + 'assets/templates/kanipunch/images/arrow.png)');
		} else {
			$(".sidemenu ul li:has(ul) > a[href]").bind("click", handler1);
    }
	});
	$(".sidemenu ul li:has(ul) > a[href]").bind("click", handler1);
});

function handler1(e){
	e.preventDefault().attr("href","#");
}



/* ページトップへ
----------------------------------------------------------*/
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