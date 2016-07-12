<?php /* Template Name: Home Page */ get_header(); ?>

  <div id="content">
    <div class="how-we-do">
      <div class="how-we-do-wrapper">
        <div class="line-text">
          <p>Разработка специалистов-пчеловодов «Слово пасечника» </p>
        </div>
        <div class="how-we-do-block1">
          <div class="how-we-do-block1__absolute-element-1">Сота</div>
          <div class="how-we-do-block1__absolute-element-2"></div>
          <div class="how-we-do-block1__absolute-element-3">добрые<br> пасечники</div>
          <a class="_mult" href="#" data-modal="etic-bee">
            <div class="how-we-do-block1__absolute-element-4">этичное<br>пчеловодство</div>
            <div class="how-we-do-block1__absolute-element-4-q">
              <span>посмотреть мультик</span>
            </div>
          </a>
          <div class="how-we-do-block1__absolute-element-5"></div>
          <div class="how-we-do-block1__absolute-element-6"></div>
          <div class="how-we-do-block1__absolute-element-7">Воск</div>
          <div class="how-we-do-block1__absolute-element-8"></div>
          <div class="how-we-do-block1__absolute-element-9">Мёд</div>
          <div class="how-we-do-block1__absolute-element-10"></div>
          <div class="how-we-do-block1__absolute-element-11"></div>
          <div class="how-we-do-block1__absolute-element-12">изготовлено<br>вручную</div>
          <div class="how-we-do-block1__absolute-element-13">фасовка<br>без нагрева</div>
        </div>
        <!--//how-we-do-block1-->
        <p class="line-text-center max-width">100% упаковка из воска с мёдом</p>
        <p class="line-text-center min-width">100% эко упаковка с мёдом</p>
        <div class="how-we-do-block2 max-width">
          <div class="how-we-do-block2-wrapper">
            <div class="how-we-do-block2__left-column">
              <p class="how-we-do-block2__left-column-line1">защищает<br> от солнечных лучей,<br> губительных для мёда</p>
              <p class="how-we-do-block2__left-column-line2">безопасна<br> для детей и животных</p>
              <p class="how-we-do-block2__left-column-line3">придаёт неповторимый<br>вкус и аромат</p>
            </div>
            <div class="how-we-do-block2__central-img">
            </div>
            <div class="how-we-do-block2__right-column">
              <p class="how-we-do-block2__right-column-line1">натуральный пчелиный воск</p>
              <p class="how-we-do-block2__right-column-line2">родная для мёда среда</p>
              <p class="how-we-do-block2__right-column-line3">невероятно приятная<br>на ощупь</p>
            </div>
          </div>
        </div>
        <!--//how-we-do-block2-->
        <div class="how-we-do-block2 min-width">
          <div class="how-we-do-block2-wrapper">
            <div class="how-we-do-block2__central-img">
            </div>
            <div class="how-we-do-block2__right-column">
              <p class="how-we-do-block2__left-column-line1">защищает от солнечных лучей,<br> губительных для мёда</p>
              <p class="how-we-do-block2__right-column-line1">натуральный пчелиный</p>
              <p class="how-we-do-block2__right-column-line2">родная для мёда среда</p>
              <p class="how-we-do-block2__left-column-line2">безопасна для<br> детей и животных</p>
              <p class="how-we-do-block2__left-column-line3">придаёт неповторимый<br>вкус и аромат</p>
              <p class="how-we-do-block2__right-column-line3">невероятно приятная<br>на ощупь</p>
            </div>
          </div>
        </div>
        <!--//how-we-do-block2-->
        <div class="how-we-do-block3">
          <div class="how-we-do-block3-line1">
            <p>Для чего нужна эко-упаковка?</p>
            <div></div>
          </div>
          <div class="how-we-do-block3-line2">
            <p>Сохраняет природные свойства мёда</p>
            <div></div>
          </div>
          <div class="how-we-do-block3-line3">
            <p class="first">Основной показатель <span class="bold">натуральности</span> и <span class="bold">зрелости мёда</span> - диастазное число.*</p>
            <p class="second">*Чем выше этот показатель, тем лучше продукт.</p>
          </div>
        </div>
        <!--//how-we-do-block3-->
        <div class="how-we-do-block4">
          <div class="how-we-do-block4__left-column">
            <p class="first">Большинство мёда в магазине</p>
            <p class="second">Слово Пасечника</p>
          </div>
          <div class="how-we-do-block4__central-img">
          </div>
          <div class="how-we-do-block4__right-column">
            <div class="how-we-do-block4__right-column-top">
              <ul>
                <li>• сладкий сироп со вкусом мёда</li>
              </ul>
            </div>
            <div class="how-we-do-block4__right-column-bottom">
              <ul>
                <li>• лечебные свойства;</li>
                <li>• косметический эффект;</li>
                <li>• натуральный и зрелый мёд;</li>
                <li>• мягкая защита от стресса.</li>
              </ul>
            </div>
          </div>
        </div>
        <!--//how-we-do-block4-->
      </div>
      <!--//how-we-do-wrapper-->
    </div>
    <!--//how-we-do-->
    <div id="proposion" class="proposion">
      <div class="proposion-wrapper">
        <p class="proposion-title">Наше предложение</p>
        <div class="proposion-block">
          <?php $postes = get_field('top_products'); if( $postes ): ?>
            <?php foreach( $postes as $p ): ?>
              <div class="proposion-item">
                <p class="proposion-item-title"><?php echo get_the_title( $p->ID ); ?></p>
                <div class="proposion-item-block">
                  <a href="#" data-modal="product-<?php echo $p->ID; ?>">
                    <?php echo get_the_post_thumbnail( $p->ID, 'full' ); ?>
                  </a>
                  <div class="proposion-item-block-price">
                    <span><?php the_field('price', $p->ID); ?> €</span>
                  </div>
                </div>
                <div class="proposion-item-block-buttons">
                  <a href="#" data-modal="product-<?php echo $p->ID; ?>" class="detail active-element">Подробнее</a>
                  <a href="<?php echo home_url(); ?>/cart.htm/product-<?php echo $p->ID; ?>" class="buy active-element">Купить</a>
                </div>
              </div>
            <?php endforeach; ?>
          <?php endif; ?>
        </div>
      </div>
      <!--//proposion-wrapper-->
    </div>
    <!--//proposion-->
    <div class="properties">
      <div class="properties-wrapper">
        <p class="properties-title">Какие свойства мёда сохраняет эко-упаковка?</p>
        <div class="properties-block">
          <div class="properties-block__left-column block1">
            <p class="properties-block__left-column-title">
              Первоначальный <span class="bold">вкус мёда</span>
            </p>
            <div class="properties-block__left-column-list">
              <p><span style="margin-top: 10px;"></span>не смешиваем различные сорта мёда
                <br> для выравнивания свойств и вкуса;</p>
              <p><span></span>фасуем мёд вручную, без нагрева;</p>
              <p><span></span>храним в родной для мёда среде.</p>
            </div>
          </div>
          <div class="properties-block__right-column">
            <span class="line ver-line1"></span>
            <div class="properties-block__right-column_text-block">
              <p class="title">Совет!</p>
              <p>Не добавляйте мёд в нагретый чай, лучше ешьте «вприкуску». Мёд должен нести только пользу!</p>
              <p>И поэтому мы решили, что вы должны знать о вреде веществ, которые выделяются в нагретом мёде свыше 40°С при промышленном производстве. Это метилфурфураль и другие вещества. Опасность в том, что большинство мёда на полках магазинов нагреты.</p>
              <a class="active-element" href="#" data-modal="subscribe">Как отличить нагретый мёд в магазине?</a>
            </div>
          </div>
        </div>
        <div class="properties-block">
          <div class="properties-block__left-column block2">
            <p class="properties-block__left-column-title">
              Косметическое средство <span class="bold">6в1</span>
            </p>
            <div class="properties-block__left-column-list">
              <p><span style="margin-top: 10px;"></span>омолаживающее кератолитическое действие, борьба с морщинами(anti-age терапия);</p>
              <p><span></span>избавляет от чёрных точек и сужает поры;</p>
              <p><span></span>эффективен при борьбе с акне в легкой стадии;</p>
              <p><span></span>противовоспалительное действие;</p>
              <p><span></span>лифтинг эффект;</p>
              <p><span></span>способствует обновлению эпидермиса.</p>
            </div>
          </div>
          <div class="properties-block__right-column">
            <span class="line ver-line2"></span>
            <div class="properties-block__right-column_text-block">
              <p class="title">Важно!</p>
              <p>
                Перед использованием обязательно проконсультируйтесь с врачом, так как мёд также является сильным аллергеном.
              </p>
              <p>
                Рецепт питательной маски из меда для лица:
              </p>
              <p>
                2 чайные ложки меда разотрите с 1 столовой ложкой творога. Добавьте еще 2 ст. ложки теплого молока. Все тщательно размешайте и наложите массу на лицо. По истечении 10-12-ти минут снимите ватным тампоном, смоченным в теплой воде. Не добавляйте мёд в нагретый чай, лучше ешьте «вприкуску». Мёд должен нести только пользу!
              </p>
              <a class="active-element" href="#" data-modal="subscribe">Получите косметические рецепты нашего дерматолога</a>
            </div>
          </div>
        </div>
        <div class="properties-block">
          <div class="properties-block__left-column block3">
            <p class="properties-block__left-column-title">
              Мёд как <span class="bold">лекарство</span>
            </p>
            <div class="properties-block__left-column-list">
              <p><span></span>мобилизирует все защитные функции организма</p>
              <p><span style="margin-top: 10px;"></span>одно из лучших средств для лечения дыхательных путей;</p>
              <p><span></span>возвращает жизненные силы;</p>
            </div>
          </div>
          <div class="properties-block__right-column">
            <span class="line ver-line3"></span>
            <div class="properties-block__right-column_text-block">
              <p class="title">Совет!</p>
              <p>Помните, что натуральный мёд имеет к себе некоторые требования. Самое первое и важное, это то, что его нельзя нагревать свыше 40°C градусов, потому что он теряет большинство своих полезных составлящих. Следующее важное требование - употреблять в пищу для максимальной пользы организму нужно только натуральный мёд. Искусственный мёд не имеет чудодейственной силы.</p>
              <a class="active-element" href="#" data-modal="subscribe" style="text-align: center;">Получить следующий совет</a>
            </div>
          </div>
        </div>
        <div class="properties-block">
          <div class="properties-block__left-column block4">
            <p class="properties-block__left-column-title">
              Восстанавливает нервные клетки и <span class="bold">защищает</span> от стрессов
            </p>
            <div class="properties-block__left-column-list">
              <p><span></span>оптимизирует эмоциональный фон;</p>
              <p><span></span>мягко успокаивает и снимает усталость;</p>
              <p><span></span>повышает уровень стрессоустойчиовости;</p>
            </div>
          </div>
          <div class="properties-block__right-column">
            <span class="line ver-line4"></span>
            <div class="properties-block__right-column_text-block">
              <p class="title" style="margin-bottom: 23px;">Личный совет, который применяет наша команда! </p>
              <p>Давно ли вы высыпались ? </p>
              <p>Попробуйте разводить 1 ст. ложку мёда в стакане тёплой воды и выпивать за 30-40 минут до отхода ко сну.</p>
              <p>Откуда рецепт:</p>
              <p>Есть свидетельства, что такой способ применялся славянами, китайцами, индийцами, римлянами, греками с древних времен.</p>
              <a class="active-element" href="#" data-modal="subscribe">Получите косметические рецепты нашего дерматолога</a>
            </div>
          </div>
        </div>
      </div>
      <div class="purple-prop-wrapper">
        <span class="purple-prop"></span>
      </div>
      <div class="properties-result">
        <span class="line1">Восстановление печени</span>
        <span class="line2">Мужской тонус</span>
        <span class="line3">Суперфуд</span>
        <span class="line4">Заменитель сахара</span>
      </div>
      <div class="properties-result2 min-width">
        <span class="line1">Восстановление печени</span>
        <span class="line2">Мужской тонус</span>
        <span class="line3">Суперфуд</span>
        <span class="line4">Заменитель сахара</span>
      </div>
    </div>
    <!--//properties-->
    <br>
    <div class="at-home">
      <div class="at-home-wrapper">
        <div class="at-home-title">Применение баночки дома</div>
        <div class="at-home-block">

          <div class="imgs">
            <?php if( have_rows('gallery') ): while ( have_rows('gallery') ) : the_row(); ?>
              <?php $image = get_sub_field('image'); if( !empty($image) ): ?>
                <div class="thumb"><img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" /></div>
              <?php endif; ?>
            <?php endwhile; endif; ?>
          </div>

          <div class="text">
            <?php if (have_posts()): while (have_posts()) : the_post(); ?>
              <?php the_content(); ?>
            <?php endwhile; endif; ?>
          </div>

        </div>
      </div>
      <!--//at-home-wrapper-->
    </div>
    <!--//at-home-->
    <div class="questions">
      <div class="questions-wrapper">
        <span class="line"></span>
        <div class="central-content">
          <div class="left">
            <p>Остались вопросы?</p>
            <p>Задай их менеджеру</p>
          </div>
          <div class="right">
            <p>+7(812)407-11-43</p>
            <a class="active-element" href="#" data-modal="call-me">Заказать обратный звонок</a>
          </div>
        </div>
        <span class="line"></span>
      </div>
    </div>
    <!--//questions-->
    <div class="videos">
      <div class="videos-wrapper">
        <div class="videos-title">Изменим мир вместе!</div>
        <div class="videos-block">
          <a class="active-element" href="<?php echo home_url(); ?>/cart.htm">Перейти к покупке</a>
          <p>Расскажите нам про свои идеи замены пластика и стекла<br><span class="bold">idea@slovopasechnika.ru</span></p>
        </div>
      </div>
      <!--//videos-->

      <div id="owl-demo" class="owl-carousel owl-theme true-highlight">
        <?php if( have_rows('reviews') ): while ( have_rows('reviews') ) : the_row(); ?>
          <div class="reviews-block-item">
            <?php $image = get_sub_field('author_photo'); if( !empty($image) ): ?>
              <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
            <?php endif; ?>
            <div class="reviews-block-item-text">
              <p class="reviews-block-item-text-title"><?php the_sub_field('author_name'); ?></p>
              <?php the_sub_field('review_body'); ?>
            </div>
          </div>
        <?php endwhile; endif; ?>
      </div>
    </div>
  </div>
  <!--//reviews-wrapper-->

<?php get_footer(); ?>
