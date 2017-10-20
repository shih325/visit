var panorama = api.require('panorama');
panorama.open({
    x: 0,
    y: 64,
    w: api.winWidth,
    h: 300,
    imgPath: '../image/quanjing.jpg',
    fixedOn: api.frameName
}, function(ret, err) {
    if (ret) {
        alert(JSON.stringify(ret));
    }
});
