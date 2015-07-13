var myApp = angular.module('myApp', []);
myApp.controller('PortfolioListController', function( $scope ) {

	$scope.portfolios = [
	{name: 'vessel1309', title: 'Call of Booty', date: '2013-09-01', description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', imageurl: 'drunkenPirate_thumb3.png' },
	{name: 'innocents1404', title: 'The Sack of the Innocents', date: '2014-04-15', description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', imageurl: 'drunkenPirate_thumb2.png' },
	{name: 'firstmate1210', title: 'Pipe and First Mate', date: '2012-10-01', description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', imageurl: 'drunkenPirate_thumb1.png' }
	]

	$scope.addPortfolio = function (new_portfolio) {
		$scope.portfolios.push(new_portfolio);
	};

	// $(document).ready(function(){

	// $('.menus h3').on('click', function(e) {
	// 	$(this).next('ul').toggleClass('open');
	// 	updateHeight();
	// 	e.preventDefault(); return false;
	// });

// 	var $window = $(window);
// 	var width = $window.width();

// 	var breakpoints = [
// 	{breakfour: "1050px" }, 
// 	{breakthree: "760px" }, 
// 	{breaktwo: "520px" }, 
// 	{breakone: "360px" }
// 	];

// 	function checkWidth(){
// 		if (width >= 1050){
// 			$(".showBreakpoint").val("$break-four: 1050px or higher. Current: " + $window.width());
// 		} else if (width >= 760) {
// 			$(".showBreakpoint").val("$break-three: 760px or higher. Current: " + $window.width());
// 		} else if (width >= 520) {
// 			$(".showBreakpoint").val("$break-two: 520px or higher. Current: " + $window.width());
// 		} else if (width >= 740) {
// 			$(".showBreakpoint").val("$break-one: 360px or higher. Current: " + $window.width());
// 		}
// 	}

// 	checkWidth();

// 	$(window).resize (function(){
// 		width = $window.width();
// 		checkWidth();
// 	});

// // visibleHeight grabs the window height and subtracts that from the overall document height leaving the height of the area that is currently visible in the users' browser

// var visibleHeight = $(document).height() - $(window).height();
// var items;

// storeElements();

// $(window).on('resize', function() {
// 	updateHeight();
// });

// $(window).on('scroll', function() {
// 	loadContent();
// });

// function storeElements() {
// 	items = $('.portfolio-item:lt(3)').clone();
//     //Strip the first class from selection
//     items.removeClass('first');
// }

// function updateHeight() {
// 	visibleHeight = $(document).height() - $(window).height();
// 	console.log("Visible height: " + visibleHeight);
// }

// function loadContent() {
//  // Check if the scroll position is more than (scrolled past) or equal to (currently at) visibleHeight
//  if($(window).scrollTop() >= visibleHeight) {
//  // If it is, remove the scroll event handler from the window so we can process the content
//  $(window).unbind('scroll');
//  // Cache loading-wrap for use later        
//  var loadingWrap = $('.loading-wrap');
//  //Fade loading-wrap in and once the fade completes...        
//  loadingWrap.fadeIn(function() {
//             // ...set a small Timeout to simulate "loading" the content
//             setTimeout(function() {
//                 // Attach our cloned items before the loading-wrap. This will slot in nicely between the loading icon and the current portfolio-items
//                 loadingWrap.before(items);
//                 // Hide loading-wrap and once hidden updateHeight, storeElements and re-attach the scroll event to the window with instructions to run this function again
//                 loadingWrap.hide(function() {
//                 	updateHeight();
//                 	storeElements();
//                 	$(window).on('scroll', function() { loadContent(); });
//                 });
//             }, 500);
//         });
});
