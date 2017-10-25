function tab(a){
	var id_val = a.getAttribute("id");
	var your = $api.dom("div.your"),
		your1 = $api.dom("#your");
	var active = $api.hasCls(your1, "active1");
	var star = $api.dom("div.star"),
		star1 = $api.dom("#star");
	if(id_val=="your") {
		$api.removeCls(star1, "active1");
		$api.addCls(your1, "active1");
		your.setAttribute("class","your show");
		star.setAttribute("class","star hide");
	}
	else {
		$api.removeCls(your1, "active1");
		$api.addCls(star1, "active1");
		star.setAttribute("class","star show");
		your.setAttribute("class","your hide");
	}
}
