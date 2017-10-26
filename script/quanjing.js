function quanjing (){
  var panorama = api.require('panorama');
  quanjingOpen();

  function quanjingOpen(){
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
  }
}
