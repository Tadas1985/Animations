$(document).ready(function () {

	$('.box').on('click', function () {
		var animations = [ 'crawl', 'dangle', 'jump', 'stretch', 'flip','slalom','fade','grow','running','turn' ];
		var box = this;
		var animation = animations[Math.floor(Math.random() * 10)];

		$(box).addClass(animation);

		setTimeout(function () {
			$(box).removeClass(animation);
		}, 4000);
	});
});
