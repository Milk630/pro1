
function banner(){
	
	var index = 0;
	var pic = $('#m-banner li');//拿到所有li
	var curren = $('#curren span');//所有的span
	
	//定时器
	var timer = setInterval(autoPlay,2000);
	
	//轮播函数
	function autoPlay(){
		
		pic.eq(index).css({display:'block'})
		pic.eq(index).siblings().css({display:'none'})
		curren.eq(index).addClass('current')
		curren.eq(index).siblings().removeClass('current')
		
		if(index >= 8){
			index = 0;
		}else{
			index ++;
		}
		
	}
	
	//移入按钮区域
	for(let i = 0; i < curren.length; i++){
		
		//移入事件
		curren[i].onmouseover = function(){
			clearInterval(timer);//移入停止定时器
			index = i;
			pic.eq(index).css({display:'block'})
			pic.eq(index).siblings().css({display:'none'})
			curren.eq(index).addClass('current')
			curren.eq(index).siblings().removeClass('current')
		}
		
		//移出事件	
		curren[i].onmouseout = function(){
			timer = setInterval(autoPlay,2000);//定时器开始
		}
		
	}
	
	var boxarr = $('.category-info');
	var boxArr = $('.category-info-detail');
	var zgq = document.getElementById('zgq');
	
	boxArr.on('mouseenter',function(){							//移入事件
	
		this.style.opacity = 1;
		$('.one').css({borderTopRightRadius: '0'})
		$('.six').css({borderBottomRightRadius: '0'})
		$(this).children('li').css({background:'#fff'})
		$(this).prev().children('li').css({background:'#fff'})
		
		var num = $(this).attr('index');
		
		$.get('./json/banner.json',function(res){
			
		var index = 0;
		var str = "<ul>"
		for(var i = 0; i < res[num].length; i++){
			index++;
				str += `
					<li style='list-style: none;'>
						<a href="#" class="zgqa">
							<img originalSrc="${res[num][i].src}" alt="" class="zgqb" />
							<span class="zgqc">${res[num][i].name}</span>
						</a>
					</li>
				`
				if(index % 4 ==0){
					str += `</ul><ul>`
				}
			}
		str +='<li><a href="#" class=""><div class="zgqd"><div class="zgqe">▶</div><span>查看全部</span></div></a></li>';
		zgq.innerHTML = str;
		lazy();
		})
		
	})
	
	$('#zgq').on('mouseenter',function(){
		
		boxArr.off('mouseleave');								//解绑移出事件
		
	})
	
	$('#zgq').on('mouseleave',function(){						//移出事件
	
		var x = $('.category-info-detail');
		
			x.css({opacity :'0.9'});
			$('.one').css({borderTopRightRadius: '10px'});
			$('.six').css({borderBottomRightRadius: '10px'});
			$(x).children('li').css({background:'#EEE'});
			$(x).prev().children('li').css({background:'#eee'});
			zgq.innerHTML = '';
			
	})
	
	boxArr.on('mouseleave',function(){							//移出事件
	
		this.style.opacity = 0.9;
		$('.one').css({borderTopRightRadius: '10px'})
		$('.six').css({borderBottomRightRadius: '10px'})
		$(this).children('li').css({background:'#EEE'})
		$(this).prev().children('li').css({background:'#eee'})
	})	
		
}