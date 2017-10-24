function map(){
  var map;
  var lonSelft, latSelf;
  // alert(api.systemType)
  map = api.require('bMap');
  var bMap = api.require('bMap'); // 初始化地图模块
  if (api.systemType == "ios") {  // 判断是不是ios设备，因为Android不需要init
      alert("ditu")
      map.initMapSDK(function (ret,err) {
          if (ret.status) {
              alert('地图初始化成功，可以从百度地图服务器检索信息了！');
          }else {
              alert(JSON.stringify(err));
          }
      });
  }
  //获取定位
  bMap.getLocation({
      accuracy: '100m',
      autoStop: true,
      filter: 1
  }, function (ret, err) {
      if (ret.status) {
          lonSelft = ret.lon;
          latSelf = ret.lat;
  // alert(JSON.stringify(ret));
  // alert('lonSelft1', lonSelft)
  // alert('latSelf1', latSelf)
  mapOpen();
  } else {
  alert("请把手机定位打开");
  }
  });
  function mapOpen() {
    map.open({
      rect: {
      x: 0,
      y: 0,
      w: 'auto',
      h: '300'
      },
      center: {
      lon: 116.297,
      lat: 40.109
      // lon: lonSelft,
      // lat: latSelf
      },
      zoomLevel: 15,
      showUserLocation: true,
      fixedOn: api.frameName,
      fixed: true
      }, function (ret) {
      if (ret.status) {
      alert('地图打开成功');
      addAn();
      addBillboard();
      }
    });
  }
  // 添加标注
  function addAn() {
  map.addAnnotations({
  annotations: [{
  id: 1,
  lon: 116.297,
  lat: 40.109
  }],
  icon: 'widget://',
  draggable: true
  }, function (ret) {
  if (ret) {
  // alert(ret.id);
  // setBubble();
  searchRoute();
  }
  });
  }
  // 设置布广告
  function addBillboard() {
  map.addBillboard({
  id: 4,
  coords: {
  lon: 116.297,
  lat: 40.109
  },
  bgImg: 'widget://image/bMapTest.png',
  content: {
  title: '鸿运度假村',
  subTitle: '灵宝市四平市场东',
  illus: 'http://ico.ooopic.com/ajax/iconpng/?id=145044.png'
  },
  styles: {
  titleColor: '#000',
  titleSize: 16,
  subTitleColor: '#999',
  subTitleSize: 12,
  illusAlign: 'left'
  }
  }, function (ret) {
  if (ret) {
  searchRoute();
  map.setRegion({
  lbLon: 116.297,
  lbLat: 40.109,
  rtLon: lonSelft,
  rtLat: latSelf,
  animation: true
  });
  }
  });
  }
  // 关闭map
  function close(){
    map.close();
  }
  // 设置搜素路线
  function searchRoute() {
  map.searchRoute({
  id: 1,
  type: 'drive',
  policy: 'ecar_fee_first',
  start: {
  lon: lonSelft,
  lat: latSelf
  },
  end: {
  lon: 116.297,
  lat: 40.109
  }
  }, function (ret, err) {
  if (ret.status) {
  map.drawRoute({
  id: 1,
  autoresizing: false,
  index: 0,
  styles: {
  start: {
  icon: 'widget://image/bmap_start.png'
  },
  end: {
  icon: 'widget://image/bmap_end.png'
  }
  }
  }, function (ret) {
                  });
              } else {
                  api.alert({msg: JSON.stringify(err)});
              }
          });
      }
      alert(map);
}
function close(){

  close();

  function close(){
    map.close();
  }
}
