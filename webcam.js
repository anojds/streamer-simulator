var video = document.querySelector("#videoElement");
     
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      alert("카메라를 감지할수 없습니다 죄송합니다 (ㅠ.ㅠ) \n다른 곳에서 카메라를 사용중이면 카메라 인식이 제대로 되지 않을수 있습니다");
      var camera = false
    });
}