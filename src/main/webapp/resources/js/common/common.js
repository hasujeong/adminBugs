
$(document).ready(function(){
	
	var menuNo = $('#menuNo').val();
	
	if(menuNo == 1) {
		$("#menubar li a").removeClass('active bg-gradient-primary');
		$('#menu1').addClass('active bg-gradient-primary');
	} else if(menuNo == 2) {
		$("#menubar li a").removeClass('active bg-gradient-primary');
		$('#menu2').addClass('active bg-gradient-primary');
	}  else if(menuNo == 3) {
		$("#menubar li a").removeClass('active bg-gradient-primary');
		$('#menu3').addClass('active bg-gradient-primary');
	} else {
		$("#menubar li a").removeClass('active bg-gradient-primary');
		$('#menu1').addClass('active bg-gradient-primary');
	}
	
});

/* 
*** 소스 상대 경로
 */
function getContextPath() {
	var offset = location.href.indexOf(location.host) + location.host.length;
	var ctxPath = location.href.substring(offset, location.href.indexOf('/',
			offset + 1));
	return ctxPath;
}

/* 
*** 숫자 콤마 함수
 */
function comma(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

