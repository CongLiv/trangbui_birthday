$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			$('#b11').animate({top:240, left: vw-400},500);
			$('#b22').animate({top:240, left: vw-300},500);
			$('#b33').animate({top:240, left: vw-200},500);
			$('#b44').animate({top:240, left: vw-100},500);
			$('#b55').animate({top:240, left: vw},500);
			$('#b66').animate({top:240, left: vw+100},500);
			$('#b77').animate({top:240, left: vw+200},500);
			$('#b88').animate({top:240, left: vw+300},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b11').animate({top:240, left: vw-400},500);
		$('#b22').animate({top:240, left: vw-300},500);
		$('#b33').animate({top:240, left: vw-200},500);
		$('#b44').animate({top:240, left: vw-100},500);
		$('#b55').animate({top:240, left: vw},500);
		$('#b66').animate({top:240, left: vw+100},500);
		$('#b77').animate({top:240, left: vw+200},500);
		$('#b88').animate({top:240, left: vw+300},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	// Danh sách các ảnh kỷ niệm
	var memoryPhotos = [
		'images/DSCF3315.JPG',
		'images/fxn 2024-11-30 174723.031.JPG',
		'images/fxn 2024-11-30 185605.788.jpg',
		'images/fxn 2025-01-19 211149.950.JPG',
		'images/IMG_0145.jpg',
		'images/IMG_1239.jpg',
		'images/IMG_1613.jpg',
		'images/IMG_1773.jpg',
		'images/IMG_20240201_020026_Original.jpg',
		'images/IMG_4223.jpg',
		'images/IMG_6438.jpg',
		'images/IMG_6457.jpg',
		'images/IMG_7022.jpg',
		'images/IMG_7491.jpg',
		'images/IMG_8656.jpg',
		'images/IMG_9668.jpg',
		'images/IMG_9759.jpg',
		'images/instc 2024-03-08 223334.853.JPG',
		'images/Messenger_creation_161ea9f4-6c0e-4723-a01b-ec701237c755_Original 2.jpg',
		'images/Messenger_creation_161ea9f4-6c0e-4723-a01b-ec701237c755_Original.jpg',
		'images/quality_restoration_20250825202040426.PNG'
	];

	// Hàm tạo ảnh bay lên
	function createFlyingPhoto(photoSrc, delay) {
		setTimeout(function() {
			var $photo = $('<img>', {
				class: 'memory-photo',
				src: photoSrc,
				alt: 'Kỷ niệm'
			});
			
			// Vị trí ngẫu nhiên theo chiều ngang
			var randomLeft = Math.random() * (window.innerWidth - 100);
			var animationDuration = 18 + Math.random() * 6; // Từ 18-24 giây (chậm hơn)
			
			$photo.css({
				left: randomLeft + 'px',
				animationDuration: animationDuration + 's'
			});
			
			$('#memories-container').append($photo);
			
			// Xóa ảnh sau khi animation kết thúc
			setTimeout(function() {
				$photo.remove();
			}, (animationDuration + 2) * 1000);
		}, delay);
	}

	// Hàm bắt đầu hiệu ứng ảnh bay lên
	function startMemoryPhotos() {
		var container = $('#memories-container');
		container.empty();
		
		// Chỉ tạo một số ảnh nhất định, không tạo thêm ảnh ngẫu nhiên (thưa hơn)
		var photosToShow = Math.min(memoryPhotos.length, 15); // Tối đa 15 ảnh
		
		for (var i = 0; i < photosToShow; i++) {
			var delay = i * 1500; // Mỗi ảnh cách nhau 1.5 giây (thưa hơn)
			var photoIndex = Math.floor((i / photosToShow) * memoryPhotos.length);
			createFlyingPhoto(memoryPhotos[photoIndex], delay);
		}
	}

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i = 0;
		var birthdayMessageShown = false;

		function msgLoop (currentIndex) {
			if (currentIndex > 0) {
				$(".message p:nth-child("+currentIndex+")").fadeOut('slow');
			}
			
			setTimeout(function() {
				currentIndex = currentIndex + 1;
				var $currentP = $(".message p:nth-child("+currentIndex+")");
				
				if ($currentP.length > 0) {
					$currentP.fadeIn('slow');
					
					// Kiểm tra nếu là dòng "Chúc mừng sinh nhật!!!!!"
					if ($currentP.hasClass('birthday-message') && !birthdayMessageShown) {
						birthdayMessageShown = true;
						// Sau khi hiển thị dòng chúc mừng, bắt đầu hiệu ứng ảnh bay lên
						setTimeout(function() {
							startMemoryPhotos();
							// Tiếp tục tạo ảnh bay lên trong 30 giây (thưa hơn)
							var photoInterval = setInterval(function() {
								var randomPhoto = memoryPhotos[Math.floor(Math.random() * memoryPhotos.length)];
								createFlyingPhoto(randomPhoto, 0);
							}, 2000); // Mỗi 2 giây một ảnh (thưa hơn)
							
							setTimeout(function() {
								clearInterval(photoInterval);
							}, 30000);
						}, 1500);
					}
					
					if(currentIndex >= 15){
						setTimeout(function() {
							$(".message p:nth-child("+currentIndex+")").fadeOut('slow').promise().done(function () {
								$('.cake').fadeIn('fast');
							});
						}, 2000);
					}
					else{
						setTimeout(function() {
							msgLoop(currentIndex);
						}, 2000);
					}
				}
			}, 800);
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');