function tab(a){
  var id_val = a.getAttribute("id");
  var register = $api.dom("form.register");
  var login = $api.dom("form.login");
  var forget = $api.dom("form.forget");
  if(id_val=="register") {
    register.setAttribute("class","register show");
    login.setAttribute("class","login hide");
    forget.setAttribute("class","forget hide");
  }
  else if(id_val=="login"){
    register.setAttribute("class","register hide");
    login.setAttribute("class","login show");
    forget.setAttribute("class","forget hide");
  }
  else {
    register.setAttribute("class","register hide");
    login.setAttribute("class","login hide");
    forget.setAttribute("class","forget show");
  }
}
// function false(){
//   preventDefault();
// }
