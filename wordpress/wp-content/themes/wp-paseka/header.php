<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/selectivizr.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/respond.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body data-gr-c-s-loaded="true" <?php body_class(); ?>>

  <div class="header fixed">
    <div class="menu">
      <?php wpeHeadNav(); ?>
    </div>
    <div class="head-content-wrapper">
      <div class="head-content__top-line">
        <div class="head-content__top-line-left">
          <span>Доставка по всем городам России, странам СНГ и Европе</span>
        </div>
        <a href="<?php echo home_url(); ?>">
          <div class="head-content__top-line-central">
          </div>
        </a>
        <div class="head-content__top-line-right">
          <div class="head-content__top-line-right-phone">
            Задайте вопрос +7(812)407-11-43
          </div>
          <div class="head-content__top-line-right-call">
            <a class="_call active-element" href="#" data-modal="call-me">Заказать обратный звонок</a>
          </div>
        </div>
      </div>
      <div class="head-content__bottom-line">
        <div class="head-content__bottom-line-left">
          <p class="line1 max-width">Алтайский мёд</p>
          <p class="line2 max-width">в инновационной эко-упаковке,</p>
          <p class="line3 max-width">из пчелиного воска, которая</p>
          <p class="line4 max-width">сохраняет свойства мёда.</p>
          <p class="line1 min-width"><span style="font-family: DendaNewC;">Алтайский мёд</span> в инно-
            <br>вационной эко-упаковке,</p>
          <p class="line2 min-width">из пчелиного воска, которая</p>
          <p class="line3 min-width">сохраняет свойства мёда.</p>
          <div class="head-content__bottom-line-left__buy">
            <a class="_buy active-element _scollable" href="#proposion">Перейти к покупке</a>
          </div>
        </div>
        <div class="head-content__bottom-line-right">
          <img src="<?php echo get_template_directory_uri(); ?>/img/banka.png" class="">
        </div>
      </div>
    </div>
    <!--//head-content-wrapper-->
  </div>
  <!--//header-->
