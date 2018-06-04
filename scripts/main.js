var audio;

$.getJSON("scripts/songs.json",function(results){
	for(var i = 0; i < results.songs.length; i++ ){
		$("#songs").append('<div data-url="' + results.songs[i].url + '" data-menu-open="false" class="song"><h1 class="songTitle">' + results.songs[i].songName + '<span class="duration">' + results.songs[i].Duration + '</span><img id="play" src="images/play.png"><img id="pause" src="images/pause.png"</h1><ul><li>' + results.songs[i].artistName + '</li><li>' + results.songs[i].Album + '</li><li>' + results.songs[i].albumArt + '</li></ul></div>');
	}
	// $("#play").click(function(){
	// 	audio = new Audio($("#songs").attr('data-url'));
	// 	audio.play();
	// });
	
	$(".song").click(function(){
		audio = new Audio($(this).attr('data-url'));
		audio.play();
		

		$(this).toggleClass('menuOpen');
	});
});









