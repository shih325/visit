function room_submit() {
	var input = $api.domAll("input[type!=radio]");
	var length = input.length;
	for (var i=0;i<length;i++){
		var input_val = $api.val(input[i]);
		alert(input_val);
	}
	
}