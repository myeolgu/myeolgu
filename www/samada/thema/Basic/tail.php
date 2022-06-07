<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

?>
		<?php if($col_name) { ?>
			<?php if($col_name == "two") { ?>
					</div>
					<div class="col-md-<?php echo $col_side;?><?php echo ($at_set['side']) ? ' pull-left' : '';?> at-col at-side">
						<?php include_once($is_side_file); // Side ?>
					</div>
				</div>
			<?php } else { ?>
				</div><!-- .at-content -->
			<?php } ?>
			</div><!-- .at-container -->
		<?php } ?>
	</div><!-- .at-body -->

	<?php if(!$is_main_footer) { ?>
		<footer class="at-footer">
			<nav class="at-links">
				<div class="at-container sub-container">
					<ul class="pull-left">
						<li><a href="<?php echo G5_BBS_URL;?>/page.php?hid=intro">사이트 소개</a></li> 
						<li><a href="<?php echo G5_BBS_URL;?>/page.php?hid=provision">이용약관</a></li> 
						<li><a href="<?php echo G5_BBS_URL;?>/page.php?hid=privacy">개인정보처리방침</a></li>
						<li><a href="<?php echo G5_BBS_URL;?>/page.php?hid=noemail">사업제휴</a></li>
						<li><a href="<?php echo G5_BBS_URL;?>/page.php?hid=disclaimer">고객상담센터</a></li>
					</ul>
					<ul class="pull-right" id="pull-right-sub">
						<li><img src="thema/Basic/assets/img/footer_sns01.png" /></li>
						<li><img src="thema/Basic/assets/img/footer_sns03.png" /></li>
						<li><img src="thema/Basic/assets/img/footer_sns04.png" /></li>
					</ul>
					<div class="clearfix"></div>
				</div>
			</nav>
			<div id="footer_bottom">
				<div class="footer_parents">
					<ul class="footer_left col-md-2">
						<li><img src="thema/Basic/assets/img/footer_logo_pc.png" /></li>
					</ul>
					<ul class="footer_right col-md-10">
						
						학원명 : 사만다아카데미 대표이사 : 김희현대표전화 : 02-591-4004 팩스 : 02-592-4006 주소 : 서울시 서초구 서초대로 77길 15 3층<br>
						사업자등록번호 : 756-81-01042 학원운영등록번호 : 제 12543호 교습과정 및 비용<br>
						Copyrightⓒ2019 ALL SAMANTHA ACADEMY. ALL RIGHTS RESERVED.
					
					</ul>
				</div>
			</div>
		</footer>
	<?php } ?>
</div><!-- .wrapper -->

<div class="at-go">
	<div id="go-btn" class="go-btn">
		<span class="go-top cursor"><i class="fa fa-chevron-up"></i></span>
		<span class="go-bottom cursor"><i class="fa fa-chevron-down"></i></span>
	</div>
</div>

<!--[if lt IE 9]>
<script type="text/javascript" src="<?php echo THEMA_URL;?>/assets/js/respond.js"></script>
<![endif]-->

<!-- JavaScript -->
<script>
var sub_show = "<?php echo $at_set['subv'];?>";
var sub_hide = "<?php echo $at_set['subh'];?>";
var menu_startAt = "<?php echo ($m_sat) ? $m_sat : 0;?>";
var menu_sub = "<?php echo $m_sub;?>";
var menu_subAt = "<?php echo ($m_subsat) ? $m_subsat : 0;?>";
</script>
<script src="<?php echo THEMA_URL;?>/assets/bs3/js/bootstrap.min.js"></script>
<script src="<?php echo THEMA_URL;?>/assets/js/sly.min.js"></script>
<script src="<?php echo THEMA_URL;?>/assets/js/custom.js"></script>
<?php if($is_sticky_nav) { ?>
<script src="<?php echo THEMA_URL;?>/assets/js/sticky.js"></script>
<?php } ?>

<?php echo apms_widget('basic-sidebar'); //사이드바 및 모바일 메뉴(UI) ?>

<?php if($is_designer || $is_demo) include_once(THEMA_PATH.'/assets/switcher.php'); //Style Switcher ?>
