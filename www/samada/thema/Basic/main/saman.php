<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// 위젯 대표아이디 설정
$wid = 'CMBL';

// 게시판 제목 폰트 설정
$font = 'font-16 en';

// 게시판 제목 하단라인컬러 설정 - red, blue, green, orangered, black, orange, yellow, navy, violet, deepblue, crimson..
$line = 'navy';

// 사이드 위치 설정 - left, right
$side = ($at_set['side']) ? 'left' : 'right';

?>
<style>
	.widget-index .at-main,
	.widget-index .at-side { padding-top:10px; padding-bottom:0px; }
	.widget-index .div-title-underbar { margin-bottom:15px; }
	.widget-index .div-title-underbar span { padding-bottom:4px; }
	.widget-index .div-title-underbar span b { font-weight:500; }
	.widget-index .widget-img img { display:block; max-width:100%; /* 배너 이미지 */ }
	.widget-box { margin-bottom:25px; }
</style>

<?php echo apms_widget('basic-title', $wid.'-wt1', 'height=400px shadow=4', 'auto=0'); //타이틀 ?>

<div class="at-container widget-index">

	<div class="row at-row">
	
	
	
	

		<div class="noticeBar">
		
			<div id="notiveBar_lightgray"></div>
		
			<div id="noticeBar_box">
			<div class="noticeBar_left">NOTICE & EVENT +
			<div id="division">/</div>
				<div class="swiper-container">
				    <div class="swiper-wrapper">
						<div class="swiper-slide">피부국가자격증 수업시간표</div>
						<div class="swiper-slide">방문상담하고 왁싱실습체험도 하고!</div>
						<div class="swiper-slide">코로나바이러스 안내</div>
					</div>
			</div>
			
			
		
			
			
			
			</div>
			<div class="noticeBar_right">과정개강일
			
			
			
			<div class="noticeBar_right_box">빠른수강신청</div>
			
			<div class="swiper-container">
				    <div class="swiper-wrapper">
						<div class="swiper-slide">왁싱심화과정</div>
						<div class="swiper-slide">피부국가자격증과정</div>
						<div class="swiper-slide">왁싱샵 원장님대상 재교육과정</div>
					</div>
			</div>
			</div>
			</div>
		</div>
	
	
	<div class="eduMain">
		<div class="inner_cf">
			<div class="inner_cf_box1">
				<div class="inner_box_parents">
					<div id="lines" style="background-color:#84cfd6;"></div>
					<div id="inner_text_box1">
						<p>Waxing</p>
						<p>Special</p>
						<p><span>왁싱스페셜</span></p>
						
					</div>
					
					<div id="inner_text_bottom">
						<p>대한왁싱협회에서 인증하는 왁싱교육 과정</p>
					</div>
				
				</div>
			
			
				<div class="inner_box_top1">
					<div id="inner_box_top_text">교육과정</div>
				</div>
				<div class="inner_box_bottom1">
					<div id="inner_box_top_text">사만다소개</div>
				</div>
			</div>
			<div class="inner_cf_box2">
				<div class="inner_box_parents">
					<div id="lines" style="background-color:#ebbe93"></div>
					
					<div id="inner_text_box2">
						<p>Aesthetic</p>
						<p>Skin care</p>
						<p><span>피부미용과정</span></p>
						
					</div>
				
					<div id="inner_text_bottom">
						<p>대한왁싱협회에서 인증하는 왁싱교육 과정</p>
					</div>
				
				</div>
			
			
			
				<div class="inner_box_top2">
					<div id="inner_box_top_text">교육과정</div>
				</div>
				<div class="inner_box_bottom2">
					<div id="inner_box_top_text">학원갤러리</div>
				</div>
			</div>
			<div class="inner_cf_box3">
				<div class="inner_box_parents">
					<div id="lines" style="background-color:#8cc1f7"></div>
					<div id="inner_text_box3">
						<p>Consulting</p>
						<p><span>취업·창업 컨설팅</span></p>
						
					</div>
				
					<div id="inner_text_bottom">
						<p>대한왁싱협회에서 인증하는 왁싱교육 과정</p>
					</div>
				
				</div>
			
			
				<div class="inner_box_top3">
					<div id="inner_box_top_text" class="inner_box_top_text3">창업컨설팅</div>
				</div>
				<div class="inner_box_bottom3">
					<div id="inner_box_top_text">취업컨설팅</div>
				</div>
				
			
				
				
			</div>
			
		
			<div class="costomer">
				<div id="costomer_padding">
					<div id="costomer_box1">
						<p>CUSTOMER CENTER</p>
						<p><span>02-591-4004</span></p>
					</div>
					<div id="costomer_box2">
						<p><span>상담시간</span> 09:00~18:00</p>
						<p>주말/공휴일에도 24시간 온라인 상담접수 및 문의가 가능합니다</p>
					</div>
					<div id="costomer_box3">
						<ul class="costomer_icon">
							<li>온라인상담</li>
							<li>수강료조회</li>
							<li>오시는 길</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<div class="main-curri">
	
	<h2>SAMANTHA <span>WAXING</span></h2>
	<p>사만다 왁싱 교육과정 소개</p>
	
	
	
	<div id="curri_box">
		<div id="curri_special_box1">
		
			<strong>WAXING <br><strong>SPECIAL</strong></strong><br>
			<p>완벽한 왁싱이론과 프로페셔널한 실습을 통하여 왁싱의 기본부터 심화반, 강사반, 창업반, 취업집중반까지!</p>
			<p>구체적이고 다양한 커리큘럼으로 국내 1위 왁싱샵의 노하우를 전수합니다</p>
			<span class="nobox-more">MORE</span>
			
		</div>
		<div id="curri_special_box2">
							<strong>WAXING LICENSE</strong>
									<p>최단기간, 최대 합격률 <br> 대한왁싱협회 왁싱자격증 취득과정</p>
									<span class="nobox-more">MORE</span>
		</div>
		<div id="curri_special_box3">
			<strong>SAMANTHA STORY</strong>
									<p>사만다의 오랜 연구와 분석을 <br> 통해 인증받은 교육과정</p>
			<span class="nobox-more">MORE</span>
		</div>
		<div id="curri_special_box4">
			<strong>WAXING CONSULTING</strong>
			<p>왁싱샵 창업 컨설팅 및 <br> 취업 컨설팅 지원</p>
			<span class="nobox-more">MORE</span>
		
		</div>
		<div id="curri_special_box5">
			<strong>WAXING SHOP</strong>
			<p>국내 1위, 인증된 왁싱샵 연계로 <br>다양한 현장실습 & 높은 취업률 보장</p>
			<span class="nobox-more">MORE</span>
		</div>
	</div>
	

	</div>
	
	
	<div class="main-curri">
	
		<h2>SAMANTHA <span>AESTHETIC</span></h2>
		<p>사만다 피부미용 교육과정 소개</p>
	
	
	
	<div id="curri_box">
		<div id="curri_special_box10">
		
			<strong>AESTHETIC <br><strong>SKIN CARE</strong></strong><br>
			<p>국가자격증 취득반부터 피부미용 기초, 산전후 관리와 피부미용의 꽃 아로마 테라피까지 실제 피부미용샵 노하우 전수!</p>
			<p>실제 피부미용샵의 시스템을 그대로 재현한 사만다의 피부미용 과정을 만나보세요</p>
			<span class="nobox-more">MORE</span>
			
		</div>
		<div id="curri_special_box6">
			<strong>SAMANTHA STORY</strong>
			<p>사만다의 오랜 연구와 분석을<br> 통한 피부미용 교육과정</p>
			<span class="nobox-more">MORE</span>
		</div>
		<div id="curri_special_box7">
			<strong>AESTHETIC CURRICULUM</strong>
				<p>실제 피부미용샵을 그대로 재현한 <br>교육으로 최단기간 최대 기술력 전수</p>
			<span class="nobox-more">MORE</span>
		</div>
		<div id="curri_special_box8">
			<strong>WAXING CONSULTING</strong>
			<p>피부미용샵 창업 컨설팅 및 <br>취업 컨설팅 지원</p>
			<span class="nobox-more">MORE</span>
		
		</div>
		<div id="curri_special_box9">
			<strong>WAXING SHOP</strong>
			<p>현장실습처럼 피부미용샵을 재현한 <br>강의장에서 교육</p>
			<span class="nobox-more">MORE</span>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	
	
	
	</div>
	
	
	
	<div class="facilities">
		<h2>SAMANTHA <span>FACILITIES</span></h2>
		<p class="facilities_p">학생들이 실제 현장에서 교육받는듯한 환경을 제공하며</p>
		<p>업계최고의 실습실과 강의실을 보유하고 있습니다</p>
		
		<div class="facilities_images_box">
			<div id="facilities_mobile">
				<?php echo apms_widget('basic-title', $wid.'-wt2', 'height=300px shadow=4', 'auto=0'); //타이틀 ?>
			</div>
			<div id="facilities_1"></div>
			<div id="facilities_right_box">
				<div id="facilities_2"></div>
				<div id="facilities_3"></div>
				<div id="facilities_4"></div>
				<div id="facilities_5"></div>
				<div id="facilities_6"></div>
				<div id="facilities_7"></div>
				<div id="facilities_8"></div>
				<div id="facilities_9"></div>
				<div id="facilities_10"></div>
			</div>
		</div>
		
		<div id="pc_banner"></div>
		
	</div>
	
	
	
		
		<div class="lecturer">
		
			<h2>PROFESSINAL <span>LECTURER</span></h2>
			<p>왁싱협회인증을 받은 전문 왁싱강사와 피부미용 전문강사들의 체계적인 강의로 여러분의 꿈을 지원해드리겠습니다</p>
		
			<div class="lecturer_box swiper-container1">
				<ul class="samanda swiper-wrapper">
					<li class="swiper-slide">
						<span><p>1%의차이가</p><p>진짜 전문가의 차이</p>
					
						
						<div id="gray_lines"></div>
						<div id="gray_lines1"></div>
						
						<strong><p>알렉스</p><p>왁싱 전임실장</p></strong>
				
						</span>
					<img src="<?php echo THEMA_URL;?>/assets/img/teacher1.png">
				
					</li>
					<li class="swiper-slide">	
						<span><p>시작도 연습</p><p>마무리도 연습</p>
					
					
						<div id="gray_lines"></div>
						<div id="gray_lines1"></div>
					
						<strong><p>김희정</p><p>아카데미 부원장</p></strong>
						</span>
						<img src="<?php echo THEMA_URL;?>/assets/img/teacher2.png">
					
					</li>
					<li class="swiper-slide">	
						<span><p>왁싱은 자신을</p><p>디자인 하는 것이다</p>
					
				
						<div id="gray_lines"></div>
						<div id="gray_lines1"></div>
					
						<strong><p>이솔희</p><p>교육부(행정) 실장</p></strong>
						</span>
						<img src="<?php echo THEMA_URL;?>/assets/img/teacher3.png">
					
					</li>
					
					<li class="swiper-slide">	
						<span><p>정리는 아름다움의</p><p>시작, 왁싱은 기술</p>
					
						
						<div id="gray_lines"></div>
						<div id="gray_lines1"></div>
					
						<strong><p>김향</p><p>아카데미 원장</p></strong>
						</span>
						<img src="<?php echo THEMA_URL;?>/assets/img/teacher4.png">
					</li>
			
				</ul>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
			
	
		 
		
		</div>
	
		<div class="samanthaNews">
			<div id="samanthaNews_Box">
				<div id="samanthaNews_left">
					<div id="news_box">
						<h2>SAMANTHA NEWS</h2>
						<div id="view_more">
							<div id="view_more_width"></div>
							<div id="view_more_height"></div>
						</div>
					</div>
					
					<div class="samanthaNews_leftbox">
						<span>
							<h2>피부강사님의 테크닉</h2>
							<p>2020.08.27</p>
						</span>
					</div>
					<div class="samanthaNews_rightbox">
						<span>
							<h2>피부국가 자격증 모의테스트</h2>
							<p>2020.08.27</p>
						</span>
					</div>
				</div>
				
				
				
				<div id="samanthaNews_right">
					<div id="news_box">
						<h2>STUDENT REVIEW</h2>
						<div id="view_more">
							<div id="view_more_width"></div>
							<div id="view_more_height"></div>
						</div>
					</div>
					
					<div class="samanthaNews_leftbox" id="samanthaNews_left_sub">
						<span>
							<h2>베스트후기 왁싱 심화반</h2>
							<p>2020.08.27</p>
						</span>
					</div>
					<div class="samanthaNews_rightbox" id="samanthaNews_right_sub">
						<span>
							<h2>피부국가 자격증 모의테스트</h2>
							<p>2020.08.27</p>
						</span>
					</div>
				</div>
					
				
			</div>
			
		</div>
		

		
		<div class="instargram_box">
			<h2>SAMANTHA <span>INSTAGRAM</span></h2>
			<p>@samantha_academy</p>
		
			<div class="instargram_box_parents">
				<ul class="instr_box">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			
			
		
		</div>
	
		<div class="instargram_box_sub"></div>
		
		
		<div class="footerBanner"></div>
		
		<div class="footer_inner">
			<div id="footer_inner_box">
				<ul class="footer_sub_box">
					<li><h2>교육과정 확인</h2></li>
					<li><h2>온라인 상담</h2></li>
					<li><h2>수강료 조회</h2></li>
					<li><h2>카카오플친 추가</h2></li>
				</ul>
			</div>
		
		</div>
	
		<div class="footercompany">
			<ul class="footercompany_box">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</div>
		</div>
		
		<div id="rightmenu">
			<ul>
				<li><div class="rightmenu_subbox"></div></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		
				
</div>

	<script>

			var mySwiper = new Swiper('.swiper-container', {
					direction: 'vertical',
					slidesPerView: 1,
					loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				
				 autoplay: {
					delay: 3000,
				},
				
			})
			
			var mySwiper1 = new Swiper('.swiper-container1', {
					slidesPerView: 1,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
					},
				
				 navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
	
				
				 breakpoints: {
					991: {
						slidesPerView: 3,
					}
					
					

				},
	
	
				
			})

		$(document).ready(function(){
		$("#rightmenu > ul > li:nth-child(1)").mouseover(function() {	
			$(".rightmenu_subbox").css({ "left" : "50px"  });
			$("#rightmenu > ul > li:nth-child(1)").css({ "left" : "-100px"  });
		
		});
			
		$("#rightmenu > ul > li:nth-child(1)").mouseout(function() {	
			$(".rightmenu_subbox").css({ "left" : "50px"  });
			$("#rightmenu > ul > li:nth-child(1)").css({ "left" : "0px"  });
		
		});
		});

</script>


