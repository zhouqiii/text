//		下拉导航固定
			$(function() {
				$("#upfixed").hide();
				$(window).scroll(function() {
					if($(document).scrollTop() >= 210) {
						$("#upfixed").addClass("upfixed1").slideDown();
					} else {
						$("#upfixed").hide();
					}
				})
			})
//		show显示列表
			function show1(){
				document.getElementById("show1").style.display="block";
				document.getElementById("show1").style.position="relative";
			}
			function show2(){
				document.getElementById("show1").style.display="none";
				document.getElementById("show1").style.top="0px";

			}
			function show12(){
				document.getElementById("show1").style.display="block";
				document.getElementById("show1").style.position="fixed";
				document.getElementById("show1").style.top="50px";
				
			}
		//图片图层遮罩
			$(function(){
		  		$("#content1").mouseover(function(){          
		   		 $("#mask").show();
					});
		 		$("#content1").mouseout(function(){
		 		 	$("#mask").hide();
					});
				});
			$(function(){
		  		$("#content2").mouseover(function(){          
		   		 $("#mask2").show();
					});
		 		$("#content2").mouseout(function(){
		 		 	$("#mask2").hide();
					});
				});
			$(function(){
		  		$("#content3").mouseover(function(){          
		   		 $("#mask3").show();
					});
		 		$("#content3").mouseout(function(){
		 		 	$("#mask3").hide();
					});
				});
			$(function(){
		  		$("#content4").mouseover(function(){          
		   		 $("#mask4").show();
					});
		 		$("#content4").mouseout(function(){
		 		 	$("#mask4").hide();
					});
				});
			//左右滚动
			window.tt
			function moveStyleLeft() {
			var obj = document.getElementById('changeAction');
			if (parseInt(obj.style.left) < 0) {
			obj.style.left = parseInt(obj.style.left) + 10 + "px";
			}
			}
			
			function moveStyleRigtht() {
			var obj = document.getElementById('changeAction');
			if (parseInt(obj.style.left) > -1000) {
			obj.style.left = parseInt(obj.style.left) - 10 + "px";
			}
			}
			
			function efg() {
			clearInterval(window.tt);
			tt = setInterval('moveStyleLeft()', 1);
			}
			
			function abc() {
			clearInterval(window.tt);
			tt = setInterval('moveStyleRigtht()', 1);
			}

			//copy左右滚动
			window.ttcopy
			function moveStyleLeft1() {
			var obj = document.getElementById('changeActioncopy');
			if (parseInt(obj.style.left) < 0) {
			obj.style.left = parseInt(obj.style.left) + 10 + "px";
			}
			}
			
			function moveStyleRigtht1() {
			var obj = document.getElementById('changeActioncopy');
			if (parseInt(obj.style.left) > -1000) {
			obj.style.left = parseInt(obj.style.left) - 10 + "px";
			}
			}
			
			function efg1() {
			clearInterval(window.ttcopy);
			ttcopy = setInterval('moveStyleLeft1()', 1);
			}
			
			function abc1() {
			clearInterval(window.ttcopy);
			ttcopy = setInterval('moveStyleRigtht1()', 1);
			}

			//左右滚动切换
			function exhange(){
				document.getElementById("body3").style.display="none";
				document.getElementById("body3copy").style.display="block";
				document.getElementById("exhange2").style.textDecoration="underline";
				document.getElementById("exhange1").style.textDecoration="none";
			}
			function exhange1(){
				document.getElementById("body3").style.display="block";
				document.getElementById("body3copy").style.display="none";
				document.getElementById("exhange1").style.textDecoration="underline";
				document.getElementById("exhange2").style.textDecoration="none";
			}

			//顶部导航显示二维码
				//关注
			function showmin1(){
				document.getElementById("yc1").style.display="block";
			}
			function showmin2(){
				document.getElementById("yc1").style.display="none";
			}
				//下载
			function showmin11(){
				document.getElementById("yc2").style.display="block";
			}
			function showmin22(){
				document.getElementById("yc2").style.display="none";
			}
			//下拉秒杀出现时间显示 超过消失
			$(function() {
				$("#myclock").hide();
				$(window).scroll(function() {
					if($(document).scrollTop() >= 1940&&$(document).scrollTop()<=2460) {
						$("#myclock").addClass("#myclock1").slideDown();
					} else {
						$("#myclock").hide();
					}
				})
			})
			
			//秒杀限时系统时间
			function disptime(){
		   	    var today=new Date();// 获取当前时间 年份，月份，日等		
		        var yyyy=today.getFullYear();//年份
		 		var month=today.getMonth()+1;//月份
		  		var dd=today.getDate();//日
		  		var hh=today.getHours();//小时
		  		var mm=today.getMinutes();//分钟
		  		var ss=today.getSeconds();//秒
		 		var xq=today.getDay();//星期
		 		document.getElementById("myclock").innerHTML="当前时间"+yyyy+"/"+month+"/"+dd+"<br/>"+hh+":"+mm+":"+ss/*+" 星期"+xq*/;
		    
			}
  	  		setInterval("disptime()",1000);//1000ms=1s
  	  		
			//秒杀倒计时 	第一个		秒
			function ss(){
			var s=document.getElementById("ss").innerHTML;
			if( s>0){
				s--;
				document.getElementById("ss").innerHTML=s;
				}
			}
				//分钟
			function mm(){
				var s=document.getElementById("ss").innerHTML;
				var w=document.getElementById("mm").innerHTML;
				if( s==0 && w>0){
				 	w--;
				 	s=59;
				 	document.getElementById("mm").innerHTML=w;
				 	document.getElementById("ss").innerHTML=s;
				}
			}
				//小时
			function hh(){
				var w=document.getElementById("mm").innerHTML;
				var q=document.getElementById("hh").innerHTML;
				if( w==0 && q>0){
				 	q--;
				 	w=59;
				 	document.getElementById("hh").innerHTML=q;
				 	document.getElementById("mm").innerHTML=w;
				}	
			}
			setInterval("ss()",1000);
			setInterval("mm()",1000);
			setInterval("hh()",1000);
			//秒杀倒计时 	第二个		秒
			function ss1(){
			var s=document.getElementById("ss1").innerHTML;
			if( s>0){
				s--;
				document.getElementById("ss1").innerHTML=s;
				}
			}
				//分钟
			function mm1(){
				var s=document.getElementById("ss1").innerHTML;
				var w=document.getElementById("mm1").innerHTML;
				if( s==0 && w>0){
				 	w--;
				 	s=59;
				 	document.getElementById("mm1").innerHTML=w;
				 	document.getElementById("ss1").innerHTML=s;
				}
			}
				//小时
			function hh1(){
				var w=document.getElementById("mm1").innerHTML;
				var q=document.getElementById("hh1").innerHTML;
				if( w==0 && q>0){
				 	q--;
				 	w=59;
				 	document.getElementById("hh1").innerHTML=q;
				 	document.getElementById("mm1").innerHTML=w;
				}	
			}
			setInterval("ss1()",1000);
			setInterval("mm1()",1000);
			setInterval("hh1()",1000);
			//秒杀倒计时 	第三个		秒
			function ss2(){
			var s=document.getElementById("ss2").innerHTML;
			if( s>0){
				s--;
				document.getElementById("ss2").innerHTML=s;
				}
			}
				//分钟
			function mm2(){
				var s=document.getElementById("ss2").innerHTML;
				var w=document.getElementById("mm2").innerHTML;
				if( s==0 && w>0){
				 	w--;
				 	s=59;
				 	document.getElementById("mm2").innerHTML=w;
				 	document.getElementById("ss2").innerHTML=s;
				}
			}
				//小时
			function hh2(){
				var w=document.getElementById("mm2").innerHTML;
				var q=document.getElementById("hh2").innerHTML;
				if( w==0 && q>0){
				 	q--;
				 	w=59;
				 	document.getElementById("hh2").innerHTML=q;
				 	document.getElementById("mm2").innerHTML=w;
				}	
			}
			setInterval("ss2()",1000);
			setInterval("mm2()",1000);
			setInterval("hh2()",1000);
			//秒杀倒计时 	第四个		秒
			function ss3(){
			var s=document.getElementById("ss3").innerHTML;
			if( s>0){
				s--;
				document.getElementById("ss3").innerHTML=s;
				}
			}
				//分钟
			function mm3(){
				var s=document.getElementById("ss3").innerHTML;
				var w=document.getElementById("mm3").innerHTML;
				if( s==0 && w>0){
				 	w--;
				 	s=59;
				 	document.getElementById("mm3").innerHTML=w;
				 	document.getElementById("ss3").innerHTML=s;
				}
			}
				//小时
			function hh3(){
				var w=document.getElementById("mm3").innerHTML;
				var q=document.getElementById("hh3").innerHTML;
				if( w==0 && q>0){
				 	q--;
				 	w=59;
				 	document.getElementById("hh3").innerHTML=q;
				 	document.getElementById("mm3").innerHTML=w;
				}	
			}
			setInterval("ss3()",1000);
			setInterval("mm3()",1000);
			setInterval("hh3()",1000);
		//秒杀遮罩移入移出出现消失
			//第四个
			$(function(){
		  		$("#fg4").mouseover(function(){          
		   		 $("#fg4copy").show();
					});
		 		$("#fg4").mouseout(function(){
		 		 	$("#fg4copy").hide();
					});
				});
			//第三个
			$(function(){
		  		$("#fg3").mouseover(function(){          
		   		 $("#fg3copy").show();
					});
		 		$("#fg3").mouseout(function(){
		 		 	$("#fg3copy").hide();
					});
				});
			
