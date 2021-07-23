export let api = new Object();
//let host = "https://admpanel.hermanitos.org.br";
let host = "http://localhost/admpanel";


api['login'] = host+"/functions/session.php";
api['logout'] = host+"/functions/logout.php";
api['list-cv'] = host+"/functions/list-cv";
api['filter-cv'] = host+"/functions/filter-cv";
api['get-cv'] = host+"/functions/get-cv";
api['create-cv'] = host+"/functions/create-cv";