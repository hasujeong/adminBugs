$(document).ready(function(){
	//memoryChart();
	//searchChart();
	
});

/* 
** 메모리 사용량 차트
*/
function memoryChart() {
	var str = "";
	var totalstr = "";
	var regData = [];
	var cntData = [];
	var totalValue = 0;
	
	
	//var param = {colname : colname};
	
    $.ajax({
        url: ctxPath + "/memoryChart",
        type: "POST",
       // data: param,
        dataType: "json",
         beforeSend: function() {
	        //$("#loading2").show();
	    },
        success: function(data) {
           try{	
				regData = [];
				cntData = [];
				totalValue = 0;
	
				for(var i = 0; i < Object.keys(data).length; i++){ 					
					regData.push(data[i].reg);
					cntData.push(data[i].cnt);
					str = data[i].beforedate + ' ~ ' + data[i].nowdate;
					
					totalValue += parseInt(data[i].cnt);
				}

					totalValue = parseInt(totalValue) / parseInt(Object.keys(data).length);
					totalstr = '평균 응답시간 : ' + comma(totalValue.toFixed(2));
				
				$("#responseTime").html(str);
				$("#response_sub").text('응답시간 (' + colname +')');
				$("#totalresponse").html(totalstr);
					
				if (window.time_chart != 'undefined' && window.time_chart != null) {
		        	window.time_chart.destroy();
		   		}				
				
				var context = document .getElementById('searchChart').getContext('2d');
				var memChart = new Chart(context, {
				    type: 'line', // 차트의 형태
				    data: { // 차트에 들어갈 데이터
				        labels: [
				            //x 축
				            '1','2','3','4','5','6','7'
				        ],
				        datasets: [
				            { //데이터
				                label: 'test1', //차트 제목
				                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
				                data: [
				                    21,19,25,20,23,26,25 //x축 label에 대응되는 데이터 값
				                ],
				                backgroundColor: [
				                    //색상
				                    'rgba(255, 99, 132, 0.2)',
				                    'rgba(54, 162, 235, 0.2)',
				                    'rgba(255, 206, 86, 0.2)',
				                    'rgba(75, 192, 192, 0.2)',
				                    'rgba(153, 102, 255, 0.2)',
				                    'rgba(255, 159, 64, 0.2)'
				                ],
				                borderColor: [
				                    //경계선 색상
				                    'rgba(255, 99, 132, 1)',
				                    'rgba(54, 162, 235, 1)',
				                    'rgba(255, 206, 86, 1)',
				                    'rgba(75, 192, 192, 1)',
				                    'rgba(153, 102, 255, 1)',
				                    'rgba(255, 159, 64, 1)'
				                ],
				                borderWidth: 1 //경계선 굵기
				            }/* ,
				            {
				                label: 'test2',
				                fill: false,
				                data: [
				                    8, 34, 12, 24
				                ],
				                backgroundColor: 'rgb(157, 109, 12)',
				                borderColor: 'rgb(157, 109, 12)'
				            } */
				        ]
				    },
				    options: {
				        scales: {
				            yAxes: [
				                {
				                    ticks: {
				                        beginAtZero: true
				                    }
				                }
				            ]
				        }
				    }
				});
		    } catch(e){
				console.log(e);
			}
		},
		complete: function() {
			// $($("#loading2")).hide();
	    }
    });
}	


/* 
** 검색 리포트 차트
*/
function searchChart() {
	var str = "";
	var totalstr = "";
	var regData = [];
	var cntData = [];
	var totalValue = 0;
	
	
	//var param = {colname : colname};
	
    $.ajax({
        url: ctxPath + "/searchChart",
        type: "POST",
       // data: param,
        dataType: "json",
         beforeSend: function() {
	        //$("#loading2").show();
	    },
        success: function(data) {
           try{	
				regData = [];
				cntData = [];
				totalValue = 0;
	
				for(var i = 0; i < Object.keys(data).length; i++){ 					
					regData.push(data[i].reg);
					cntData.push(data[i].cnt);
					str = data[i].beforedate + ' ~ ' + data[i].nowdate;
					
					totalValue += parseInt(data[i].cnt);
				}

					totalValue = parseInt(totalValue) / parseInt(Object.keys(data).length);
					totalstr = '평균 응답시간 : ' + comma(totalValue.toFixed(2));
				
				$("#responseTime").html(str);
				$("#response_sub").text('응답시간 (' + colname +')');
				$("#totalresponse").html(totalstr);
					
				if (window.time_chart != 'undefined' && window.time_chart != null) {
		        	window.time_chart.destroy();
		   		}				
				
				var context = document .getElementById('searchChart').getContext('2d');
				var memChart = new Chart(context, {
				    type: 'line', // 차트의 형태
				    data: { // 차트에 들어갈 데이터
				        labels: [
				            //x 축
				            '1','2','3','4','5','6','7'
				        ],
				        datasets: [
				            { //데이터
				                label: 'test1', //차트 제목
				                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
				                data: [
				                    21,19,25,20,23,26,25 //x축 label에 대응되는 데이터 값
				                ],
				                backgroundColor: [
				                    //색상
				                    'rgba(255, 99, 132, 0.2)',
				                    'rgba(54, 162, 235, 0.2)',
				                    'rgba(255, 206, 86, 0.2)',
				                    'rgba(75, 192, 192, 0.2)',
				                    'rgba(153, 102, 255, 0.2)',
				                    'rgba(255, 159, 64, 0.2)'
				                ],
				                borderColor: [
				                    //경계선 색상
				                    'rgba(255, 99, 132, 1)',
				                    'rgba(54, 162, 235, 1)',
				                    'rgba(255, 206, 86, 1)',
				                    'rgba(75, 192, 192, 1)',
				                    'rgba(153, 102, 255, 1)',
				                    'rgba(255, 159, 64, 1)'
				                ],
				                borderWidth: 1 //경계선 굵기
				            }/* ,
				            {
				                label: 'test2',
				                fill: false,
				                data: [
				                    8, 34, 12, 24
				                ],
				                backgroundColor: 'rgb(157, 109, 12)',
				                borderColor: 'rgb(157, 109, 12)'
				            } */
				        ]
				    },
				    options: {
				        scales: {
				            yAxes: [
				                {
				                    ticks: {
				                        beginAtZero: true
				                    }
				                }
				            ]
				        }
				    }
				});
		    } catch(e){
				console.log(e);
			}
		},
		complete: function() {
			// $($("#loading2")).hide();
	    }
    });
}	
