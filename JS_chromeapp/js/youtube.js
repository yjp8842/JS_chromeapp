// 2. 이 코드는 IFrame Player API 코드를 비동기 적으로로드합니다.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3.이 함수는 <iframe> (및 YouTube 플레이어)을 만듭니다.API 코드 다운로드 후.

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
	height: '360',
	width: '640',
	videoId: 'EkRuV-h6Bv0',
	events: {
	'onReady': onPlayerReady,
	'onStateChange': onPlayerStateChange
	}
});
}

// 4. API는 동영상 플레이어가 준비되면이 함수를 호출합니다.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. API는 플레이어의 상태가 변경 될 때이 함수를 호출합니다.이 함수는 비디오 
//(상태 = 1)를 재생할 때 플레이어는 0 초 동안 재생 한 다음 중지해야합니다.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 0000);
			done = true;
	}
}

function stopVideo() {
  player.stopVideo();
}