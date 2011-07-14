/*function init(){
	window.scrollTo(0,1);
}*/

var jQT = new $.jQTouch({
    icon: 'jqtouch.png',
    addGlossToIcon: false,
    startupScreen: 'jqt_startup.png',
    statusBar: 'black',
    preloadImages: [
        '../../themes/jqt/img/back_button.png',
        '../../themes/jqt/img/back_button_clicked.png',
        '../../themes/jqt/img/button_clicked.png',
        '../../themes/jqt/img/grayButton.png',
        '../../themes/jqt/img/whiteButton.png',
        '../../themes/jqt/img/loading.gif'
        ]
});

$(function(){
    jQT.addAnimation({
        name: 'reveal',
        selector: '.revealme'
    });
});