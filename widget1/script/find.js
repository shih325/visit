function tab(a){
	var id_val = a.getAttribute("id");
	
	var beijing = $api.dom("div.beijing"),
		beijing1 = $api.dom("#beijing");
	var tianjin = $api.dom("div.tianjin"),
		tianjin1 = $api.dom("#tianjin");
	var shanghai = $api.dom("div.shanghai"),
		shanghai1 = $api.dom("#shanghai");
	var hangzhou = $api.dom("div.hangzhou"),
		hangzhou1 = $api.dom("#hangzhou");
	var guangzhou = $api.dom("div.guangzhou"),
		guangzhou1 = $api.dom("#guangzhou");	
		
			
	var active = $api.hasCls(beijing1, "avtive");
	
		
	if(id_val=="tianjin") {
		$api.removeCls(beijing1, "active");
		$api.removeCls(shanghai1, "active");
		$api.removeCls(hangzhou1, "active");
		$api.removeCls(guangzhou1, "active");
		
		$api.addCls(tianjin1, "active");
		tianjin.setAttribute("class","tianjin show");
		
		beijing.setAttribute("class","beijing hide");
		shanghai.setAttribute("class","shanghai hide");
		hangzhou.setAttribute("class","hangzhou hide");
		guangzhou.setAttribute("class","guangzhou hide");
	}
	else if(id_val=="shanghai") {
		$api.removeCls(beijing1, "active");
		$api.removeCls(tianjin1, "active");
		$api.removeCls(hangzhou1, "active");
		$api.removeCls(guangzhou1, "active");
		
		$api.addCls(shanghai1, "active");
		shanghai.setAttribute("class","shanghai show");
		
		beijing.setAttribute("class","beijing hide");
		tianjin.setAttribute("class","tianjin hide");
		hangzhou.setAttribute("class","hangzhou hide");
		guangzhou.setAttribute("class","guangzhou hide");
	}else if(id_val=="hangzhou") {
		$api.removeCls(beijing1, "active");
		$api.removeCls(tianjin1, "active");
		$api.removeCls(shanghai1, "active");
		$api.removeCls(guangzhou1, "active");
		
		$api.addCls(hangzhou1, "active");
		hangzhou.setAttribute("class","hangzhou show");
		
		beijing.setAttribute("class","beijing hide");
		tianjin.setAttribute("class","tianjin hide");
		shanghai.setAttribute("class","shanghai hide");
		guangzhou.setAttribute("class","guangzhou hide");
	}else if(id_val=="guangzhou") {
		$api.removeCls(beijing1, "active");
		$api.removeCls(tianjin1, "active");
		$api.removeCls(shanghai1, "active");
		$api.removeCls(hangzhou1, "active");
		
		$api.addCls(guangzhou1, "active");
		guangzhou.setAttribute("class","guangzhou show");
		
		beijing.setAttribute("class","beijing hide");
		tianjin.setAttribute("class","tianjin hide");
		shanghai.setAttribute("class","shanghai hide");
		hangzhou.setAttribute("class","hangzhou hide");
	}else{
		$api.removeCls(tianjin1, "active");
		$api.removeCls(shanghai1, "active");
		$api.removeCls(hangzhou1, "active");
		$api.removeCls(guangzhou1, "active");
		
		$api.addCls(beijing1, "active");
		beijing.setAttribute("class","beijing show");
		
		tianjin.setAttribute("class","tianjin hide");
		shanghai.setAttribute("class","shanghai hide");
		hangzhou.setAttribute("class","hangzhou hide");
		guangzhou.setAttribute("class","guangzhou hide");
	}
	
}