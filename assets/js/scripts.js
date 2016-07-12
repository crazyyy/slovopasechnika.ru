// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery == 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

$(document).ready(function() {
  $('.headnav li').each(function(index, el) {
    if ( $(this).hasClass('modal-contact') ) {
      $(this).children('a').attr('data-modal', 'contacts');
    } else if ( $(this).hasClass('modal-opt')  ) {
      $(this).children('a').attr('data-modal', 'opt');
    } else if ( $(this).hasClass('modal-delivery')  ) {
      $(this).children('a').attr('data-modal', 'delivery');
    }
  });
})



/** OWL carousel */
"function" !== typeof Object.create && (Object.create = function(f) {
  function g() {}
  g.prototype = f;
  return new g
});
(function(f, g, k) {
  var l = {
    init: function(a, b) {
      this.$elem = f(b);
      this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
      this.userOptions = a;
      this.loadContent()
    },
    loadContent: function() {
      function a(a) {
        var d, e = "";
        if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
        else {
          for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          b.$elem.html(e)
        }
        b.logIn()
      }
      var b = this,
        e;
      "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
    },
    logIn: function() {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
      this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
      this.$elem.css({
        opacity: 0
      });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars()
    },
    setVars: function() {
      if (0 === this.$elem.children().length) return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup()
    },
    onStartup: function() {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay && (this.options.autoPlay = 5E3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
    },
    eachMoveUpdate: function() {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
    },
    updateVars: function() {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
    },
    reload: function() {
      var a = this;
      g.setTimeout(function() {
        a.updateVars()
      }, 0)
    },
    watchVisibility: function() {
      var a = this;
      if (!1 === a.$elem.is(":visible")) a.$elem.css({
        opacity: 0
      }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
      else return !1;
      a.checkVisible = g.setInterval(function() {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
          opacity: 1
        }, 200), g.clearInterval(a.checkVisible))
      }, 500)
    },
    wrapItems: function() {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block")
    },
    baseClass: function() {
      var a = this.$elem.hasClass(this.options.baseClass),
        b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme)
    },
    updateItems: function() {
      var a, b;
      if (!1 === this.options.responsive) return !1;
      if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)
        for (this.options.itemsCustom.sort(function(a, b) {
            return a[0] - b[0]
          }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
    },
    response: function() {
      var a = this,
        b, e;
      if (!0 !== a.options.responsive) return !1;
      e = f(g).width();
      a.resizer = function() {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
          e = f(g).width();
          a.updateVars()
        }, a.options.responsiveRefreshRate))
      };
      f(g).resize(a.resizer)
    },
    updatePosition: function() {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp()
    },
    appendItemsSizes: function() {
      var a = this,
        b = 0,
        e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function(c) {
        var d = f(this);
        d.css({
          width: a.itemWidth
        }).data("owl-item", Number(c));
        if (0 === c % a.options.items || c === e) c > e || (b += 1);
        d.data("owl-roundPages", b)
      })
    },
    appendWrapperSizes: function() {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0
      });
      this.appendItemsSizes()
    },
    calculateAll: function() {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max()
    },
    calculateWidth: function() {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items)
    },
    max: function() {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
      return a
    },
    min: function() {
      return 0
    },
    loops: function() {
      var a = 0,
        b = 0,
        e, c;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
    },
    buildControls: function() {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons()
    },
    buildButtons: function() {
      var a = this,
        b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev = f("<div/>", {
        "class": "owl-prev",
        html: a.options.navigationText[0] || ""
      });
      a.buttonNext = f("<div/>", {
        "class": "owl-next",
        html: a.options.navigationText[1] || ""
      });
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
        a.preventDefault()
      });
      b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
        b.preventDefault();
        f(this).hasClass("owl-next") ? a.next() : a.prev()
      })
    },
    buildPagination: function() {
      var a = this;
      a.paginationWrapper = f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
        b.preventDefault();
        Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
      })
    },
    updatePagination: function() {
      var a, b, e, c, d, g;
      if (!1 === this.options.pagination) return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - this.itemsAmount % this.options.items;
      for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
        "class": "owl-page"
      }), g = f("<span></span>", {
        text: !0 === this.options.paginationNumbers ? a : "",
        "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
      }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      this.checkPagination()
    },
    checkPagination: function() {
      var a = this;
      if (!1 === a.options.pagination) return !1;
      a.paginationWrapper.find(".owl-page").each(function() {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
      })
    },
    checkNavigation: function() {
      if (!1 === this.options.navigation) return !1;
      !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
    },
    updateControls: function() {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
    },
    destroyControls: function() {
      this.owlControls && this.owlControls.remove()
    },
    next: function(a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
        if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
        else return this.currentItem = this.maximumItem, !1;
      this.goTo(this.currentItem, a)
    },
    prev: function(a) {
      if (this.isTransition) return !1;
      this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
      if (0 > this.currentItem)
        if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
        else return this.currentItem = 0, !1;
      this.goTo(this.currentItem, a)
    },
    goTo: function(a, b, e) {
      var c = this;
      if (c.isTransition) return !1;
      "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
      a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
      c.currentItem = c.owl.currentItem = a;
      if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
      a = c.positionsInArray[a];
      !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
        c.isCss3Finish = !0
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
        c.isCss3Finish = !0
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
        c.isCss3Finish = !0
      }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
      c.afterGo()
    },
    jumpTo: function(a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem = this.owl.currentItem = a;
      this.afterGo()
    },
    afterGo: function() {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
    },
    stop: function() {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval)
    },
    checkAp: function() {
      "stop" !== this.apStatus && this.play()
    },
    play: function() {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay) return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function() {
        a.next(!0)
      }, a.options.autoPlay)
    },
    swapSpeed: function(a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
    },
    addCssSpeed: function(a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease"
      }
    },
    removeTransition: function() {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: ""
      }
    },
    doTranslate: function(a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)"
      }
    },
    transition3d: function(a) {
      this.$owlWrapper.css(this.doTranslate(a))
    },
    css2move: function(a) {
      this.$owlWrapper.css({
        left: a
      })
    },
    css2slide: function(a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate({
        left: a
      }, {
        duration: b || e.options.slideSpeed,
        complete: function() {
          e.isCssFinish = !0
        }
      })
    },
    checkBrowser: function() {
      var a = k.createElement("div");
      a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
      }
    },
    moveEvents: function() {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
    },
    eventTypes: function() {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2]
    },
    disabledEvents: function() {
      this.$elem.on("dragstart.owl", function(a) {
        a.preventDefault()
      });
      this.$elem.on("mousedown.disableTextSelect", function(a) {
        return f(a.target).is("input, textarea, select, option")
      })
    },
    gestures: function() {
      function a(a) {
        if (void 0 !== a.touches) return {
          x: a.touches[0].pageX,
          y: a.touches[0].pageY
        };
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return {
            x: a.pageX,
            y: a.pageY
          };
          if (void 0 === a.pageX) return {
            x: a.clientX,
            y: a.clientY
          }
        }
      }

      function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
      }

      function e(b) {
        b = b.originalEvent || b || g.event;
        d.newPosX = a(b).x - h.offsetX;
        d.newPosY = a(b).y - h.offsetY;
        d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
        (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
        (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
        d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
        !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
      }

      function c(a) {
        a = a.originalEvent || a || g.event;
        var c;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
        d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
        0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
          a.stopImmediatePropagation();
          a.stopPropagation();
          a.preventDefault();
          f(a.target).off("click.disable")
        }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
        b("off")
      }
      var d = this,
        h = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null
        };
      d.isCssFinish = !0;
      d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
        c = c.originalEvent || c || g.event;
        var e;
        if (3 === c.which) return !1;
        if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
          !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
          d.newPosX = 0;
          d.newRelativeX = 0;
          f(this).css(d.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(c).x - e.left;
          h.offsetY = a(c).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = c.target || c.srcElement
        }
      })
    },
    getNewPosition: function() {
      var a = this.closestItem();
      a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);
      return a
    },
    closestItem: function() {
      var a = this,
        b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
        e = a.newPosX,
        c = null;
      f.each(b, function(d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1))
      });
      return a.currentItem
    },
    moveDirection: function() {
      var a;
      0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
      return a
    },
    customEvents: function() {
      var a = this;
      a.$elem.on("owl.next", function() {
        a.next()
      });
      a.$elem.on("owl.prev", function() {
        a.prev()
      });
      a.$elem.on("owl.play", function(b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play"
      });
      a.$elem.on("owl.stop", function() {
        a.stop();
        a.hoverStatus = "stop"
      });
      a.$elem.on("owl.goTo", function(b, e) {
        a.goTo(e)
      });
      a.$elem.on("owl.jumpTo", function(b, e) {
        a.jumpTo(e)
      })
    },
    stopOnHover: function() {
      var a = this;
      !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
        a.stop()
      }), a.$elem.on("mouseout", function() {
        "stop" !== a.hoverStatus && a.play()
      }))
    },
    lazyLoad: function() {
      var a, b, e, c, d;
      if (!1 === this.options.lazyLoad) return !1;
      for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
    },
    lazyPreload: function(a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
      }

      function c() {
        f += 1;
        d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
      }
      var d = this,
        f = 0,
        k;
      "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
      c()
    },
    autoHeight: function() {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
          e.wrapperOuter.addClass("autoHeight")
        }, 0)
      }

      function b() {
        d += 1;
        e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "")
      }
      var e = this,
        c = f(e.$owlItems[e.currentItem]).find("img"),
        d;
      void 0 !== c.get(0) ? (d = 0, b()) : a()
    },
    completeImg: function(a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
    },
    onVisibleItems: function() {
      var a;
      !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems
    },
    transitionTypes: function(a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in"
    },
    singleItemTransition: function() {
      var a = this,
        b = a.outClass,
        e = a.inClass,
        c = a.$owlItems.eq(a.currentItem),
        d = a.$owlItems.eq(a.prevItem),
        f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
        g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": g + "px",
        "-moz-perspective-origin": g + "px",
        "perspective-origin": g + "px"
      });
      d.css({
        position: "relative",
        left: f + "px"
      }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
        a.endPrev = !0;
        d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(d, b)
      });
      c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
        a.endCurrent = !0;
        c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(c, e)
      })
    },
    clearTransStyle: function(a, b) {
      a.css({
        position: "",
        left: ""
      }).removeClass(b);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
    },
    owlStatus: function() {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection
      }
    },
    clearEvents: function() {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer)
    },
    unWrap: function() {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
    },
    destroy: function() {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData()
    },
    reinit: function(a) {
      a = f.extend({}, this.userOptions, a);
      this.unWrap();
      this.init(a, this.$elem)
    },
    addItem: function(a, b) {
      var e;
      if (!a) return !1;
      if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
      this.setVars()
    },
    removeItem: function(a) {
      if (0 === this.$elem.children().length) return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars()
    }
  };
  f.fn.owlCarousel = function(a) {
    return this.each(function() {
      if (!0 === f(this).data("owl-init")) return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b)
    })
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1E3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["prev", "next"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1
  }
})(jQuery, window, document);
/** end OWL carousel */

/** jquery.jmodal */
(function($) {
  var current = null;
  $.jmodal = function(el, options) {
    $.jmodal.close();
    var remove, target;
    this.$body = $('body');
    this.options = $.extend({}, $.jmodal.defaults, options);
    this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
    if (el.is('a')) {
      target = el.attr('href');
      if (/^#/.test(target)) {
        this.$elm = $(target);
        if (this.$elm.length !== 1) return null;
        this.open();
      } else {
        this.$elm = $('<div>');
        this.$body.append(this.$elm);
        remove = function(event, jmodal) {
          jmodal.elm.remove();
        };
        this.showSpinner();
        el.trigger($.jmodal.AJAX_SEND);
        $.get(target).done(function(html) {
          if (!current) return;
          el.trigger($.jmodal.AJAX_SUCCESS);
          current.$elm.empty().append(html).on($.jmodal.CLOSE, remove);
          current.hideSpinner();
          current.open();
          el.trigger($.jmodal.AJAX_COMPLETE);
        }).fail(function() {
          el.trigger($.jmodal.AJAX_FAIL);
          current.hideSpinner();
          el.trigger($.jmodal.AJAX_COMPLETE);
        });
      }
    } else {
      this.$elm = el;
      this.$body.append(this.$elm);
      this.open();
    }
  };
  $.jmodal.prototype = {
    constructor: $.jmodal,
    open: function() {
      var m = this;
      if (this.options.doFade) {
        this.block();
        setTimeout(function() {
          m.show();
        }, this.options.fadeDuration * this.options.fadeDelay);
      } else {
        this.block();
        this.show();
      }
      if (this.options.escapeClose) {
        $(document).on('keydown.jmodal', function(event) {
          if (event.which == 27) $.jmodal.close();
        });
      }
      if (this.options.clickClose) this.blocker.click($.jmodal.close);
    },
    close: function() {
      this.unblock();
      this.hide();
      $(document).off('keydown.jmodal');
    },
    block: function() {
      var initialOpacity = this.options.doFade ? 0 : this.options.opacity;
      this.$elm.trigger($.jmodal.BEFORE_BLOCK, [this._ctx()]);
      this.blocker = $('<div class="jquery-jmodal blocker"></div>').css({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: this.options.zIndex,
        background: this.options.overlay,
        opacity: initialOpacity
      });
      this.$body.append(this.blocker);
      if (this.options.doFade) {
        this.blocker.animate({
          opacity: this.options.opacity
        }, this.options.fadeDuration);
      }
      this.$elm.trigger($.jmodal.BLOCK, [this._ctx()]);
    },
    unblock: function() {
      if (this.options.doFade) {
        this.blocker.fadeOut(this.options.fadeDuration, function() {
          $(this).remove();
        });
      } else {
        this.blocker.remove();
      }
    },
    show: function() {
      this.$elm.trigger($.jmodal.BEFORE_OPEN, [this._ctx()]);
      if (this.options.showClose) {
        this.closeButton = $('<a href="#close-jmodal" rel="jmodal:close" class="close-jmodal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
        this.$elm.append(this.closeButton);
      }
      this.$elm.addClass(this.options.jmodalClass + ' current');
      this.center();
      if (this.options.doFade) {
        this.$elm.fadeIn(this.options.fadeDuration);
      } else {
        this.$elm.show();
      }
      this.$elm.trigger($.jmodal.OPEN, [this._ctx()]);
    },
    hide: function() {
      this.$elm.trigger($.jmodal.BEFORE_CLOSE, [this._ctx()]);
      if (this.closeButton) this.closeButton.remove();
      this.$elm.removeClass('current');
      if (this.options.doFade) {
        this.$elm.fadeOut(this.options.fadeDuration);
      } else {
        this.$elm.hide();
      }
      this.$elm.trigger($.jmodal.CLOSE, [this._ctx()]);
    },
    showSpinner: function() {
      if (!this.options.showSpinner) return;
      this.spinner = this.spinner || $('<div class="' + this.options.jmodalClass + '-spinner"></div>').append(this.options.spinnerHtml);
      this.$body.append(this.spinner);
      this.spinner.show();
    },
    hideSpinner: function() {
      if (this.spinner) this.spinner.remove();
    },
    center: function() {
      this.$elm.css({
        position: 'absolute',
        top: "100px",
        left: "0",
        right: "0",
        margin: "0 auto !important",
        zIndex: this.options.zIndex + 1
      });
    },
    _ctx: function() {
      return {
        elm: this.$elm,
        blocker: this.blocker,
        options: this.options
      };
    }
  };
  $.jmodal.prototype.resize = $.jmodal.prototype.center;
  $.jmodal.close = function(event) {
    if (!current) return;
    if (event) event.preventDefault();
    current.close();
    var that = current.$elm;
    current = null;
    return that;
  };
  $.jmodal.resize = function() {
    if (!current) return;
  };
  $.jmodal.isActive = function() {
    return current ? true : false;
  }
  $.jmodal.defaults = {
    overlay: "#000",
    opacity: 0.75,
    zIndex: 1,
    escapeClose: true,
    clickClose: true,
    closeText: 'Close',
    closeClass: '',
    jmodalClass: "jmodal",
    spinnerHtml: null,
    showSpinner: true,
    showClose: true,
    fadeDuration: null,
    fadeDelay: 1.0
  };
  $.jmodal.BEFORE_BLOCK = 'jmodal:before-block';
  $.jmodal.BLOCK = 'jmodal:block';
  $.jmodal.BEFORE_OPEN = 'jmodal:before-open';
  $.jmodal.OPEN = 'jmodal:open';
  $.jmodal.BEFORE_CLOSE = 'jmodal:before-close';
  $.jmodal.CLOSE = 'jmodal:close';
  $.jmodal.AJAX_SEND = 'jmodal:ajax:send';
  $.jmodal.AJAX_SUCCESS = 'jmodal:ajax:success';
  $.jmodal.AJAX_FAIL = 'jmodal:ajax:fail';
  $.jmodal.AJAX_COMPLETE = 'jmodal:ajax:complete';
  $.fn.jmodal = function(options) {
    if (this.length === 1) {
      current = new $.jmodal(this, options);
    }
    return this;
  };
  $(document).on('click.jmodal', 'a[rel="jmodal:close"]', $.jmodal.close);
  $(document).on('click.jmodal', 'a[rel="jmodal:open"]', function(event) {
    event.preventDefault();
    $(this).jmodal();
  });
})(jQuery);
/** end jquery.jmodal */

/** imagesloaded */
(function() {
  'use strict';

  function EventEmitter() {}
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;

  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    while (i--) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return -1;
  }

  function alias(name) {
    return function aliasClosure() {
      return this[name].apply(this, arguments);
    };
  }
  proto.getListeners = function getListeners(evt) {
    var events = this._getEvents();
    var response;
    var key;
    if (typeof evt === 'object') {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          response[key] = events[key];
        }
      }
    } else {
      response = events[evt] || (events[evt] = []);
    }
    return response;
  };
  proto.flattenListeners = function flattenListeners(listeners) {
    var flatListeners = [];
    var i;
    for (i = 0; i < listeners.length; i += 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  proto.getListenersAsObject = function getListenersAsObject(evt) {
    var listeners = this.getListeners(evt);
    var response;
    if (listeners instanceof Array) {
      response = {};
      response[evt] = listeners;
    }
    return response || listeners;
  };
  proto.addListener = function addListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var listenerIsWrapped = typeof listener === 'object';
    var key;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
        listeners[key].push(listenerIsWrapped ? listener : {
          listener: listener,
          once: false
        });
      }
    }
    return this;
  };
  proto.on = alias('addListener');
  proto.addOnceListener = function addOnceListener(evt, listener) {
    return this.addListener(evt, {
      listener: listener,
      once: true
    });
  };
  proto.once = alias('addOnceListener');
  proto.defineEvent = function defineEvent(evt) {
    this.getListeners(evt);
    return this;
  };
  proto.defineEvents = function defineEvents(evts) {
    for (var i = 0; i < evts.length; i += 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  proto.removeListener = function removeListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var index;
    var key;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (index !== -1) {
          listeners[key].splice(index, 1);
        }
      }
    }
    return this;
  };
  proto.off = alias('removeListener');
  proto.addListeners = function addListeners(evt, listeners) {
    return this.manipulateListeners(false, evt, listeners);
  };
  proto.removeListeners = function removeListeners(evt, listeners) {
    return this.manipulateListeners(true, evt, listeners);
  };
  proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if (typeof evt === 'object' && !(evt instanceof RegExp)) {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          if (typeof value === 'function') {
            single.call(this, i, value);
          } else {
            multiple.call(this, i, value);
          }
        }
      }
    } else {
      i = listeners.length;
      while (i--) {
        single.call(this, evt, listeners[i]);
      }
    }
    return this;
  };
  proto.removeEvent = function removeEvent(evt) {
    var type = typeof evt;
    var events = this._getEvents();
    var key;
    if (type === 'string') {
      delete events[evt];
    } else if (type === 'object') {
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          delete events[key];
        }
      }
    } else {
      delete this._events;
    }
    return this;
  };
  proto.removeAllListeners = alias('removeEvent');
  proto.emitEvent = function emitEvent(evt, args) {
    var listeners = this.getListenersAsObject(evt);
    var listener;
    var i;
    var key;
    var response;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;
        while (i--) {
          listener = listeners[key][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias('emitEvent');
  proto.emit = function emit(evt) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args);
  };
  proto.setOnceReturnValue = function setOnceReturnValue(value) {
    this._onceReturnValue = value;
    return this;
  };
  proto._getOnceReturnValue = function _getOnceReturnValue() {
    if (this.hasOwnProperty('_onceReturnValue')) {
      return this._onceReturnValue;
    } else {
      return true;
    }
  };
  proto._getEvents = function _getEvents() {
    return this._events || (this._events = {});
  };
  EventEmitter.noConflict = function noConflict() {
    exports.EventEmitter = originalGlobalValue;
    return EventEmitter;
  };
  if (typeof define === 'function' && define.amd) {
    define('eventEmitter/EventEmitter', [], function() {
      return EventEmitter;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = EventEmitter;
  } else {
    this.EventEmitter = EventEmitter;
  }
}.call(this));
(function(window) {
  var docElem = document.documentElement;
  var bind = function() {};

  function getIEEvent(obj) {
    var event = window.event;
    event.target = event.target || event.srcElement || obj;
    return event;
  }
  if (docElem.addEventListener) {
    bind = function(obj, type, fn) {
      obj.addEventListener(type, fn, false);
    };
  } else if (docElem.attachEvent) {
    bind = function(obj, type, fn) {
      obj[type + fn] = fn.handleEvent ? function() {
        var event = getIEEvent(obj);
        fn.handleEvent.call(fn, event);
      } : function() {
        var event = getIEEvent(obj);
        fn.call(obj, event);
      };
      obj.attachEvent("on" + type, obj[type + fn]);
    };
  }
  var unbind = function() {};
  if (docElem.removeEventListener) {
    unbind = function(obj, type, fn) {
      obj.removeEventListener(type, fn, false);
    };
  } else if (docElem.detachEvent) {
    unbind = function(obj, type, fn) {
      obj.detachEvent("on" + type, obj[type + fn]);
      try {
        delete obj[type + fn];
      } catch (err) {
        obj[type + fn] = undefined;
      }
    };
  }
  var eventie = {
    bind: bind,
    unbind: unbind
  };
  if (typeof define === 'function' && define.amd) {
    define('eventie/eventie', eventie);
  } else {
    window.eventie = eventie;
  }
})(this);
(function(window, factory) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define(['eventEmitter/EventEmitter', 'eventie/eventie'], function(EventEmitter, eventie) {
      return factory(window, EventEmitter, eventie);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(window, require('wolfy87-eventemitter'), require('eventie'));
  } else {
    window.imagesLoaded = factory(window, window.EventEmitter, window.eventie);
  }
})(window, function factory(window, EventEmitter, eventie) {
  var $ = window.jQuery;
  var console = window.console;

  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }
  var objToString = Object.prototype.toString;

  function isArray(obj) {
    return objToString.call(obj) == '[object Array]';
  }

  function makeArray(obj) {
    var ary = [];
    if (isArray(obj)) {
      ary = obj;
    } else if (typeof obj.length == 'number') {
      for (var i = 0; i < obj.length; i++) {
        ary.push(obj[i]);
      }
    } else {
      ary.push(obj);
    }
    return ary;
  }

  function ImagesLoaded(elem, options, onAlways) {
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    }
    if (typeof elem == 'string') {
      elem = document.querySelectorAll(elem);
    }
    this.elements = makeArray(elem);
    this.options = extend({}, this.options);
    if (typeof options == 'function') {
      onAlways = options;
    } else {
      extend(this.options, options);
    }
    if (onAlways) {
      this.on('always', onAlways);
    }
    this.getImages();
    if ($) {
      this.jqDeferred = new $.Deferred();
    }
    var _this = this;
    setTimeout(function() {
      _this.check();
    });
  }
  ImagesLoaded.prototype = new EventEmitter();
  ImagesLoaded.prototype.options = {};
  ImagesLoaded.prototype.getImages = function() {
    this.images = [];
    for (var i = 0; i < this.elements.length; i++) {
      var elem = this.elements[i];
      this.addElementImages(elem);
    }
  };
  ImagesLoaded.prototype.addElementImages = function(elem) {
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    }
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }
    var nodeType = elem.nodeType;
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    }
    if (typeof this.options.background == 'string') {
      var children = elem.querySelectorAll(this.options.background);
      for (i = 0; i < children.length; i++) {
        var child = children[i];
        this.addElementBackgroundImages(child);
      }
    }
  };
  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };
  ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
    var style = getStyle(elem);
    var reURL = /url\(['"]*([^'"\)]+)['"]*\)/gi;
    var matches = reURL.exec(style.backgroundImage);
    while (matches !== null) {
      var url = matches && matches[1];
      if (url) {
        this.addBackground(url, elem);
      }
      matches = reURL.exec(style.backgroundImage);
    }
  };
  var getStyle = window.getComputedStyle || function(elem) {
    return elem.currentStyle;
  };
  ImagesLoaded.prototype.addImage = function(img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };
  ImagesLoaded.prototype.addBackground = function(url, elem) {
    var background = new Background(url, elem);
    this.images.push(background);
  };
  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    if (!this.images.length) {
      this.complete();
      return;
    }

    function onProgress(image, elem, message) {
      setTimeout(function() {
        _this.progress(image, elem, message);
      });
    }
    for (var i = 0; i < this.images.length; i++) {
      var loadingImage = this.images[i];
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    }
  };
  ImagesLoaded.prototype.progress = function(image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    this.emit('progress', this, image, elem);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    }
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && console) {
      console.log('progress: ' + message, image, elem);
    }
  };
  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emit(eventName, this);
    this.emit('always', this);
    if (this.jqDeferred) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  };

  function LoadingImage(img) {
    this.img = img;
  }
  LoadingImage.prototype = new EventEmitter();
  LoadingImage.prototype.check = function() {
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }
    this.proxyImage = new Image();
    eventie.bind(this.proxyImage, 'load', this);
    eventie.bind(this.proxyImage, 'error', this);
    eventie.bind(this.img, 'load', this);
    eventie.bind(this.img, 'error', this);
    this.proxyImage.src = this.img.src;
  };
  LoadingImage.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth !== undefined;
  };
  LoadingImage.prototype.confirm = function(isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emit('progress', this, this.img, message);
  };
  LoadingImage.prototype.handleEvent = function(event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  LoadingImage.prototype.onload = function() {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };
  LoadingImage.prototype.onerror = function() {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };
  LoadingImage.prototype.unbindEvents = function() {
    eventie.unbind(this.proxyImage, 'load', this);
    eventie.unbind(this.proxyImage, 'error', this);
    eventie.unbind(this.img, 'load', this);
    eventie.unbind(this.img, 'error', this);
  };

  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  Background.prototype = new LoadingImage();
  Background.prototype.check = function() {
    eventie.bind(this.img, 'load', this);
    eventie.bind(this.img, 'error', this);
    this.img.src = this.url;
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };
  Background.prototype.unbindEvents = function() {
    eventie.unbind(this.img, 'load', this);
    eventie.unbind(this.img, 'error', this);
  };
  Background.prototype.confirm = function(isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emit('progress', this, this.element, message);
  };
  ImagesLoaded.makeJQueryPlugin = function(jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) {
      return;
    }
    $ = jQuery;
    $.fn.imagesLoaded = function(options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  };
  ImagesLoaded.makeJQueryPlugin();
  return ImagesLoaded;
});
/** end imagesloaded */

/** jquery-photo-enlarger */
'use strict';
(function($) {
  $.fn.PhotoEnlarger = function(options) {
    var plugin = this,
      default_options = {
        'max_width': null,
        'max_width_container': null,
        'caption_fadein_speed': 500,
        'caption_fadeout_speed': 500,
        'enlarge_speed': 300,
        'shrink_speed': 300,
        'add_caption_function': null
      };
    plugin.options = $.extend(default_options, options);
    plugin.enlarge = function($thumb) {
      var $thumb_img = $thumb.find('img:first'),
        $thumb_lg_div = $('<div class="thumb-large">'),
        $thumb_lg_img = $('<img>');
      $thumb_lg_img.attr('src', $thumb_img.data('large_photo'));
      $thumb_lg_img.imagesLoaded().done(function() {
        var lg_img_orig_width = $thumb_lg_img[0].width,
          lg_img_orig_height = $thumb_lg_img[0].height,
          $caption = $('<div class="caption"><p></p></caption>'),
          $state_icon = $('<div class="state-icon">'),
          caption_text = $thumb_img.data('caption'),
          max_width = lg_img_orig_width,
          max_height = lg_img_orig_height;
        if (typeof $thumb.max_width !== 'undefined' && typeof $thumb.max_height !== 'undefined') {
          max_width = $thumb.max_width;
          max_height = $thumb.max_height;
        } else {
          if (plugin.options.max_width_container === null) {
            max_width = $thumb.parent().parent().width();
          } else if (plugin.options.max_width_container instanceof $) {
            max_width = plugin.options.max_width_container.width();
          }
          if (lg_img_orig_width > max_width) {
            max_height = lg_img_orig_height * (max_width / lg_img_orig_width);
          }
          if (default_options.max_width !== null) {
            max_width = default_options.max_width;
          }
          $thumb.max_width = max_width;
          $thumb.max_height = max_height;
          $thumb.width = $thumb_img[0].width;
          $thumb.height = $thumb_img[0].height;
        }
        $thumb_lg_div.hide();
        $thumb_lg_div.css({
          width: $thumb.width,
          height: $thumb.height
        });
        $thumb_lg_div.append($thumb_lg_img).append($state_icon);
        $thumb.append($thumb_lg_div);
        $thumb_lg_div.show();
        $thumb_lg_div.animate({
          width: max_width,
          height: max_height,
          marginLeft: -(max_width / 4)
        }, plugin.options.enlarge_speed, function() {
          if (typeof plugin.options.add_caption_function === 'function') {
            plugin.options.add_caption_function($caption, caption_text, $thumb_lg_div, plugin);
          } else if (typeof caption_text !== 'undefined' && caption_text !== '') {
            $caption.find('p:first').html(caption_text);
            $thumb_lg_div.append($caption);
            $thumb_lg_div.hover(function() {
              $caption.fadeIn(plugin.options.caption_fadein_speed);
            }, function() {
              $caption.fadeOut(plugin.options.caption_fadeout_speed);
            });
          }
          $thumb_lg_img.click(function() {
            plugin.shrink($thumb);
          });
          $state_icon.click(function() {
            plugin.shrink($thumb);
          });
        });
      });
    };
    plugin.shrink = function($thumb) {
      var $thumb_lg_div = $thumb.find('.thumb-large:first'),
        $caption = $thumb_lg_div.find('.caption:first'),
        shrink_photo = function() {
          $thumb_lg_div.animate({
            width: $thumb.width,
            height: $thumb.height,
            marginLeft: 0
          }, plugin.options.shrink_speed, function() {
            $thumb_lg_div.remove();
          });
        };
      if ($caption.length === 0) {
        shrink_photo();
      } else {
        $caption.fadeOut(100, shrink_photo);
      }
    };
    return plugin.each(function() {
      var $thumb = $(this),
        $thumb_img = $thumb.find('img:first'),
        $state_icon = $('<div class="state-icon">'),
        large_img_url = $thumb_img.data('large_photo'),
        _img = new Image();
      _img.src = large_img_url;
      $state_icon.click(function() {
        plugin.enlarge($thumb);
      });
      $thumb_img.click(function() {
        plugin.enlarge($thumb);
      });
      $thumb.append($state_icon);
      return $thumb;
    });
  };
}(jQuery));
/** end jquery-photo-enlarger */

/** scroll */
$(document).ready(function() {
  $("._scollable").click(function(event) {
    event.preventDefault();
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height() - 50;
    } else {
      dest = $(this.hash).offset().top - 50;
    }
    $('html,body').animate({
      scrollTop: dest
    }, 1000, 'swing');
  });
});
/** end scroll */

/** main.js */
$(document).ready(function() {
  $(window).scroll(function(e) {
    if ($(window).scrollTop() > 14) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
});
$(function() {
  $('.selected').click(function(e) {
    var list = $(this).parent().find('.options');
    list.toggle();
    e.preventDefault();
  });
  $(document).bind('click', function(e) {
    var clicked = $(e.target);
    if (!clicked.parents().hasClass('menu')) $('.options').hide();
  });
});
$(function() {
  $('a[data-modal]').on('click', function() {
    var id = $(this).data('modal');
    $('#' + id).jmodal();
    return false;
  });
});
$(function() {
  $('.altay-detail__left-colunm__small-img img').on('click', function() {
    var src = $(this).attr('src');
    src = src.replace(".jpg", "_big.jpg");
    $('.altay-detail__left-colunm__big-img').find('img').attr('src', src);
    return false;
  });
  $('.grech-detail__left-colunm__small-img img').on('click', function() {
    var src = $(this).attr('src');
    src = src.replace(".jpg", "_big.jpg");
    $('.grech-detail__left-colunm__big-img').find('img').attr('src', src);
    return false;
  });
  $('.dyagil-detail__left-colunm__small-img img').on('click', function() {
    var src = $(this).attr('src');
    src = src.replace(".jpg", "_big.jpg");
    $('.dyagil-detail__left-colunm__big-img').find('img').attr('src', src);
    return false;
  });
  $('.design-block__left-column__img-block-small img').on('click', function() {
    var src = $(this).attr('src');
    src = src.replace(".jpg", "_big.jpg");
    $('.design-block__left-column__img-big').attr('src', src);
    return false;
  });
});
$(document).on('click', '._call_me_send', function() {
  if ($('#phones_0').val() == '') {
    alert('Необходимо указать номер телефона');
    return false;
  }
  $.ajax({
    type: 'GET',
    url: '/sendData',
    data: {
      type: 'call-me',
      phone: $('#phones_0').val()
    },
    success: function(response) {
      $('#phones_0').val('');
      $('#call-me-button').prop('checked', false);
      $.jmodal.close();
      $('#thanks').jmodal();
    },
    error: function(jqXHR) {
      alert(jqXHR.responseText);
    }
  });
  return false;
});
$(document).on('click', '._letter_top_link', function() {
  if ($('._letter_top_email').val() == '') {
    alert('Необходимо указать email');
    return false;
  }
  $.ajax({
    type: 'GET',
    url: '/sendData',
    data: {
      type: 'letter-top',
      email: $('._letter_top_email').val()
    },
    success: function(response) {
      $('._letter_top_email').val('');
      $.jmodal.close();
      $('#thanks').jmodal();
    },
    error: function(jqXHR) {
      alert(jqXHR.responseText);
    }
  });
  return false;
});
$(document).on('click', '._subscribe_link', function() {
  if ($('._subscribe_text').val() == '') {
    alert('Необходимо указать email');
    return false;
  }
  $.ajax({
    type: 'GET',
    url: '/sendData',
    data: {
      type: 'subscribe',
      email: $('._subscribe_text').val()
    },
    success: function(response) {
      $('._subscribe_text').val('');
      $.jmodal.close();
      $('#thanks').jmodal();
    },
    error: function(jqXHR) {
      alert(jqXHR.responseText);
    }
  });
  return false;
});
$(document).on('click', '._super_call', function() {
  if ($('#phones_1').val() == '') {
    alert('Необходимо указать номер телефона');
    return false;
  }
  if ($('._super_call_email').val() == '') {
    alert('Необходимо указать email');
    return false;
  }
  $.ajax({
    type: 'GET',
    url: '/sendData',
    data: {
      type: 'super',
      phone: $('#phones_1').val(),
      email: $('._super_call_email').val()
    },
    success: function(response) {
      $('._super_call_email').val('');
      $('#phones_1').val('');
      $.jmodal.close();
      $('#thanks').jmodal();
    },
    error: function(jqXHR) {
      alert(jqXHR.responseText);
    }
  });
  return false;
});
$(document).on('click', '._wooden_call', function() {
  if ($('#phones_2').val() == '') {
    alert('Необходимо указать номер телефона');
    return false;
  }
  if ($('._wooden_call_email').val() == '') {
    alert('Необходимо указать email');
    return false;
  }
  $.ajax({
    type: 'GET',
    url: '/sendData',
    data: {
      type: 'wooden',
      phone: $('#phones_2').val(),
      email: $('._wooden_call_email').val()
    },
    success: function(response) {
      $('._wooden_call_email').val('');
      $('#phones_2').val('');
      $('#wooden-call-me-button').prop('checked', false);
      $.jmodal.close();
      $('#thanks').jmodal();
    },
    error: function(jqXHR) {
      alert(jqXHR.responseText);
    }
  });
  return false;
});
/** end main.js */

if ($(window).width() >= 1024) {
  var widthW = 900;
} else if ($(window).width() < 1024 && $(window).width() >= 700) {
  var widthW = 700;
} else {
  var widthW = 460;
}

jQuery(function($) {


  $('#owl-demo').owlCarousel({
    autoPlay: 5000,
    navigation: true, // Show next and prev buttons
    slideSpeed: 1000,
    paginationSpeed: 500,
    singleItem: true
  });

  $('#owl-demo2').owlCarousel({
    // autoPlay: 5000,
    navigation: true, // Show next and prev buttons
    slideSpeed: 2000,
    paginationSpeed: 1000,
    singleItem: true

  });

});

/** cart  */
var disable = 1;

$(document).on('change', '._cart_special', function() {
  $('._cart_summ').toggleClass('cart_hidden');
  $('._cart_next').toggleClass('cart_hidden');
  $('._cart_arrow').toggleClass('cart_hidden');
  return false;
});
$(function() {
  $('.thumb').PhotoEnlarger({
    'max_width': 700
  });
});
$(function() {
  dest = $('#content').offset().top - 50;
  $('html,body').animate({
    scrollTop: dest
  }, 1000, 'swing');

  var summ = 0;
  $('.cart-general__cart-block1__table input').each(function() {
    if ($(this).val() != '') {
      if ($(this).val() < 0) {
        $(this).val(0);
      }
      summ = summ + ($(this).val() * $(this).attr('data-price'));
    }
  });
  $('._buy_summ').text(summ + ' €.');
});

$(document).on('click', '._buy_next', function() {
  $('.cart-general__cart-block1').hide();
  $('.cart-general__cart-block2').show();
  $('.cart-general__cart-block3').show();
  $('.cart-general__cart-result-wrapper').hide();
  $('.cart_step_active').removeClass('cart_step_active');
  $('.cart_step2').addClass('cart_step_active');

  dest = $('#content').offset().top - 50;
  $('html,body').animate({
    scrollTop: dest
  }, 1000, 'swing');

  return false;
});

$(document).on('change', '.cart-general__cart-block1__table input', function() {
  var summ = 0;

  $('.cart-general__cart-block1__table input').each(function() {
    if ($(this).val() != '') {
      if ($(this).val() < 0) {
        $(this).val(0);
      }
      summ = summ + ($(this).val() * $(this).attr('data-price'));
    }
  });
  $('._buy_summ').text(summ + ' €.');

  return false;
});

$(document).on('click', '._clear_cart_line', function() {
  $(this).closest('tr').find('input').val('');

  var summ = 0;

  $('.cart-general__cart-block1__table input').each(function() {
    if ($(this).val() != '') {
      if ($(this).val() < 0) {
        $(this).val(0);
      }
      summ = summ + ($(this).val() * $(this).attr('data-price'));
    }
  });
  $('._buy_summ').text(summ + ' €.');

  return false;
});
$(document).on('change', '#first', function() {
  if ($(this).prop('checked') == true) {
    $('#second').prop('checked', false);
  }
});
$(document).on('change', '#second', function() {
  if ($(this).prop('checked') == true) {
    $('#first').prop('checked', false);
  }
});

$(document).on('click', '._finish_buy', function() {
  if ($('._finish_tel').val() == '') {
    alert('Необходимо указать номер телефона');
    return false;
  }
  if ($('._finish_email').val() == '') {
    alert('Необходимо указать email');
    return false;
  }

  if ($('#first').prop('checked') == false && $('#second').prop('checked') == false) {
    alert('Выберите способ доставки');
    return false;
  }


  items = '{';
  if ($('#first').prop('checked') == true) {
    items += '"dost":"1"';
  }

  if ($('#second').prop('checked') == true) {
    items += '"dost":"2"';
  }

  $('.cart-general__cart-block1__table input').each(function() {
    if ($(this).val() != '') {
      items += ', "' + $(this).attr('id') + '":"' + $(this).val() + '"';
    }
  });

  if ($('#i-wonna-gift').prop('checked') == true) {
    items += ',"special":"1"';
  }

  items += '}';
  console.log(items);
  $.ajax({
    type: 'GET',
    url: '/sendData',
    data: {
      data: $.parseJSON(items),
      type: 'cart',
      phone: $('._finish_tel').val(),
      email: $('._finish_email').val()
    },
    success: function(response) {
      //            alert('Спасибо за заказ. Наш менеджер свяжется с вами в ближайшее время.');
      $('#thanks').jmodal();
      $('.cart-general__cart-block1__table').find('input').val('');
      $('._buy_summ').text('0 €.');
      $('._cart_summ').show();
      $('._cart_next').hide();
      $('._cart_arrow').hide();
      $('.cart-general__cart-block1').show();
      $('.cart-general__cart-result-wrapper').show();
      $('.cart-general__cart-block2').hide();
      $('.cart-general__cart-block3').hide();
      $('#special-cart').prop('checked', false);
      $('#first').prop('checked', false);
      $('#second').prop('checked', false);
      $('._finish_tel').val('');
      $('._finish_email').val('');
    },
    error: function(jqXHR) {
      alert(jqXHR.responseText);
    }
  });
  return false;
});
/** end cart  */
