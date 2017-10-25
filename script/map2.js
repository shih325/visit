function closew(){
    var map = api.require('bMap');
	  map.close();
}


function quanjingw(){
  var panorama = api.require('panorama');
  // openquanjing();
  // function openquanjing(){
    panorama.open({
        x: 0,
        y: 0,
        w: api.winWidth,
        h: 300,
        imgPath: 'widget://image/quanjing.jpg',
        fixedOn: api.frameName
    }, function(ret, err) {
        if (ret) {
            // alert(JSON.stringify(ret));
        }
    });
// }
}
