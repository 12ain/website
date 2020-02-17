require.config({
	baseUrl: "js/lib"
});

require(['jquery'], function ($) {
	/**
	 * 存储获取数据函数
	 * @function get 存储数据
	 * @function set 获取数据
	 */
	const storage = {
		/**
		 * 存储名称为key的val数据
		 * @param {String} key 键值
		 * @param {String} val 数据
		 */
		set: function (key, val) {
			val && (localStorage[key] = JSON.stringify(val));
		},
		/**
		 * 获取名称为key的数据
		 * @param {String} key 键值
		 */
		get: function (key) {
			try {
				return JSON.parse(localStorage[key]);
			} catch (e) {
				return null;
			}
		}
	};

	// 存储内容变量
	var Storage = [];

	/**
	 * 加载存储内容
	 */
	var loadStorage = {
		/**
		 * 初始化内容存储
		 */
		init: function () {
			var bookMark = [{
				name: "精选",
				url: "choice()",
				icon: "icon/discover.png"
			}, {
				name: "微博",
				url: "https://weibo.com",
				icon: "icon/weibo.png"
			}, {
				name: "Github",
				url: "https://github.com",
				icon: "icon/google_now.png"
			}, {
				name: "简书",
				url: "https://www.jianshu.com",
				icon: "icon/jianshu.png"
			}, {
				name: "掘金",
				url: "https://juejin.im",
				icon: "icon/juejin.png"
			}, {
				name: "CSDN",
				url: "https://www.csdn.net",
				icon: "icon/csdn.png"
			}, {
				name: "BTSOW",
				url: "https://btio.pw",
				icon: "icon/baici_cd.png"
			}, {
				name: "TorrentKitty",
				url: "https://www.torrentkitty.tv",
				icon: "icon/bookster.png"
			}, {
				name: "小时光博客",
				url: "https://blog.abplan.top",
				icon: "icon/brevent.png"
			}, {
				name: "青工教务",
				url: "http://121.251.136.100/jwxt",
				icon: "icon/qg.jpg"
			}];
			for (var i = bookMark.length - 1; i > -1; i--) {
				storage.set("bookMark", bookMark);
			}
			var setData = { engines: "quark", bookcolor: "black" };
			for (var i = Object.keys(setData).length - 1; i > -1; i--) {
				storage.set("setData", setData);
			}
		},
		/**
		 * 加载设置数据 壁纸|LOGO|书签颜色|夜间模式
		 */
		setItem: function () {
			Storage.setData = storage.get("setData");
			if (Storage.setData === null) {
				this.init();
				Storage.setData = storage.get("setData");
			}
			// 加载LOGO
			if (Storage.setData.logo) {
				$(".logo").html('<img src="' + Storage.setData.logo + '" />');
			} else {
				$(".logo").html('<svg viewBox="0 0 3113 1024"><path d="M3112.906814 476.052327l-339.310283 140.921746A121.156099 121.156099 0 0 0 2896.216752 695.670633a159.955333 159.955333 0 0 0 124.816404-73.206102l86.01717 58.564881a259.515632 259.515632 0 0 1-211.565635 113.103428 253.659143 253.659143 0 0 1-251.828991-253.659144c0-96.266024 61.127095-259.149601 240.848076-259.149601S3112.906814 476.052327 3112.906814 476.052327z m-129.20877-39.897326a117.495794 117.495794 0 0 0-109.809153-53.440454 132.869075 132.869075 0 0 0-121.156099 146.412204zM2481.870215 26.932891h113.469458v753.65682h-113.469458zM2302.515265 298.161499h105.050756v475.839663c0 121.522129-73.206102 249.632808-241.214106 249.632807A241.580137 241.580137 0 0 1 1941.609182 873.19543l96.266024-40.629387a139.823655 139.823655 0 0 0 132.503045 92.97175c117.495794 0 131.404953-107.61297 131.404953-144.582052v-51.610301A166.909913 166.909913 0 0 1 2161.227488 793.400779a249.632808 249.632808 0 0 1-239.749984-256.221357 248.168686 248.168686 0 0 1 241.214106-256.221357 168.740065 168.740065 0 0 1 140.555716 63.323278zM2170.01222 695.670633A148.974418 148.974418 0 0 0 2307.639692 539.375605a139.823655 139.823655 0 1 0-277.085096 0A148.974418 148.974418 0 0 0 2170.01222 695.670633zM1619.136303 794.13284a256.221357 256.221357 0 1 1 256.221357-256.221357 256.221357 256.221357 0 0 1-256.221357 256.221357z m0-100.65839a150.072509 150.072509 0 0 0 143.48396-155.562967 143.84999 143.84999 0 1 0-286.96792 0 150.072509 150.072509 0 0 0 141.653807 155.562967zM1063.135958 794.13284a256.221357 256.221357 0 1 1 256.221357-256.221357 256.221357 256.221357 0 0 1-256.221357 256.221357z m0-100.65839a150.072509 150.072509 0 0 0 143.48396-155.562967A150.072509 150.072509 0 0 0 1063.135958 381.982486a150.072509 150.072509 0 0 0-143.48396 155.562966A150.072509 150.072509 0 0 0 1063.135958 693.47445zM767.749337 366.243174v-4.392366h-366.03051v107.246939h262.443875c-24.524044 146.412204-126.646556 214.493879-263.541967 214.493879A286.784905 286.784905 0 0 1 400.620735 110.021817a266.836242 266.836242 0 0 1 195.460293 76.500376L672.947435 110.021817a370.422876 370.422876 0 0 0-275.987005-109.809153 396.960088 396.960088 0 0 0 0 793.920176c222.54655 1.830153 407.757988-155.196936 370.788907-427.889666z" fill="#319FFF"></path></svg>');
			}
			// 删除掉VIA浏览器夜间模式的暗色支持
			$("head").on("DOMNodeInserted", function (evt) {
				if (evt.target.id === "via_inject_css_night") {
					$("#via_inject_css_night").remove();
				}
			});
			$("#via_inject_css_night").remove();
			// 加载夜间模式
			if (Storage.setData.nightMode === "1") {
				$("body").removeClass('theme-black theme-white').addClass('theme-white');
				$("body").css("background-image", "");
				$("#nightCss").removeAttr('disabled');
			} else {
				if (Storage.setData.wallpaper) {
					$("body").css("background-image", "url(" + Storage.setData.wallpaper + ")");
				} else {
					$("body").css("background-image", "");
				}
				$("body").removeClass('theme-black theme-white').addClass('theme-' + Storage.setData.bookcolor);
				$("#nightCss").attr('disabled', 'disabled');
			}
		}
	};
	loadStorage.setItem();

	/**
	 * DOM长按事件
	 */
	$.fn.longPress = function (fn) {
		var timeout = void 0,
			$this = this,
			startPos,
			movePos,
			endPos;
		for (var i = $this.length - 1; i > -1; i--) {
			$this[i].addEventListener("touchstart", function (e) {
				var touch = e.targetTouches[0];
				startPos = { x: touch.pageX, y: touch.pageY };
				timeout = setTimeout(function () {
					if ($this.attr("disabled") === undefined) {
						fn();
					}
				}, 700);
			}, { passive: true });
			$this[i].addEventListener("touchmove", function (e) {
				var touch = e.targetTouches[0];
				movePos = { x: touch.pageX - startPos.x, y: touch.pageY - startPos.y };
				(Math.abs(movePos.x) > 10 || Math.abs(movePos.y) > 10) && clearTimeout(timeout);
			}, { passive: true });
			$this[i].addEventListener("touchend", function () {
				clearTimeout(timeout);
			}, { passive: true });
		}
	};

	/**
	 * 首页书签模块
	 * @function init 初始化
	 * @function bind 绑定事件
	 * @function del 删除书签
	 * @function add 添加书签
	 */
	var bookMark = {
		init: function () {
			var _ = this;
			_.$bookmark = $('.bookmark');
			Storage.bookMark = storage.get("bookMark");
			if (Storage.bookMark === null) {
				loadStorage.init();
				Storage.bookMark = storage.get("bookMark");
			}
			var html = '';
			for (var i = 0; i < Storage.bookMark.length; i++) {
				html += '<div class="list" data-url="' + Storage.bookMark[i].url + '"><div class="img" style="background-image:url(' + Storage.bookMark[i].icon + ')"></div><div class="text">' + Storage.bookMark[i].name + "</div></div>";
			}
			_.$bookmark.html(html);
			_.bind();
		},
		bind: function () {
			var _ = this;
			// 绑定书签长按事件
			_.$bookmark.longPress(function () {
				if (_.status !== "editing") {
					_.status = "editing";
					require(['jquery-sortable'], function () {
						_.$bookmark.sortable({
							animation: 150,
							fallbackTolerance: 3,
							touchStartThreshold: 3,
							ghostClass: "ghost",
							filter: ".delbook,.addbook",
							onEnd: function (evt) {
								var startID = evt.oldIndex,
									endID = evt.newIndex;
								if (startID > endID) {
									Storage.bookMark.splice(endID, 0, Storage.bookMark[startID]);
									Storage.bookMark.splice(startID + 1, 1);
								} else {
									Storage.bookMark.splice(endID + 1, 0, Storage.bookMark[startID]);
									Storage.bookMark.splice(startID, 1);
								}
								storage.set("bookMark", Storage.bookMark);
							}
						});
					})
					$(document).click(function () {
						$(document).unbind("click");
						$(".delbook").addClass("animation");
						$(".addbook").addClass("animation");
						$(".delbook").on('transitionend', function (evt) {
							if (evt.target !== this) {
								return;
							}
							$(".delbook").remove();
							$(".addbook").remove();
							_.$bookmark.sortable("destroy");
							_.status = "";
						});
					});

					var $list = _.$bookmark.find(".list");

					for (var i = $list.length; i > -1; i--) {
						$list.eq(i).find(".img").prepend('<div class="delbook"></div>');
					}

					if ($list.length < 20) {
						_.$bookmark.append('<div class="list addbook"><div class="img"><svg viewBox="0 0 1024 1024"><path d="M736.1 480.2H543.8V287.9c0-17.6-14.4-32-32-32s-32 14.4-32 32v192.2H287.6c-17.6 0-32 14.4-32 32s14.4 32 32 32h192.2v192.2c0 17.6 14.4 32 32 32s32-14.4 32-32V544.2H736c17.6 0 32-14.4 32-32 0.1-17.6-14.3-32-31.9-32z" fill="#212121"></path></svg></div></div>');
						// 添加书签页面
						$('.addbook').click(function () {
							// 取消书签编辑状态
							$(document).click();

							// 插入html
							$('#app').append('<div class="addbook-shade"><div class="addbook-from"><div class="addbook-title">添加书签</div><div class="addbook-content"><input type="text" class="addbook-input addbook-name" placeholder="标题" /><input type="text" class="addbook-input addbook-url" placeholder="地址" /><div id="addbook-upload">点击选择图标</div><input type="file" id="addbook-pick" /></div><div class="addbook-btn"><a class="addbook-close">取消</a><a class="addbook-ok">确定</a></div></div></div>');

							//绑定事件
							$("#addbook-upload").click(function () {
								$("#addbook-pick").click();
							});

							$("#addbook-pick").on("change", function () {
								var file = this.files[0];
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.addEventListener("load", function () {
									$("#addbook-upload").html('<img src="' + this.result + '"></img><div>' + file.name + "</div>");
								});
							});

							$(".addbook-ok").click(function () {
								var name = $(".addbook-name").val(),
									url = $(".addbook-url").val(),
									icon = $("#addbook-upload img").attr("src");
								if (name.length && url.length) {
									if (!icon) {
										// 绘制文字图标
										var canvas = document.createElement("canvas");
										canvas.height = 100;
										canvas.width = 100;
										var context = canvas.getContext("2d");
										context.fillStyle = "#f5f5f5";
										context.arc(50, 50, 46, Math.PI * 2, 0, true);
										context.fill();
										context.fillStyle = "#222";
										context.font = "40px Arial";
										context.textAlign = "center";
										context.textBaseline = "middle";
										context.fillText(name.substr(0, 1), 50, 52);
										icon = canvas.toDataURL("image/png");
									}
									$(".addbook-close").click();
									bookMark.add(name, url, icon);
								}
							});

							$(".addbook-close").click(function () {
								$(".addbook-shade").css({ "animation": "fadeOut forwards .3s", "pointer-events": "none" });
								$(".addbook-from").css("animation", "down2 forwards .3s");
								setTimeout(function () {
									$(".addbook-shade").remove();
								}, 300);
							});

							$(".addbook-shade").click(function (evt) {
								if (evt.target === evt.currentTarget) {
									$(".addbook-close").click();
								}
							});
						})
					}
				}
			});
			_.$bookmark.on('click', '.list', function (evt) {
				evt.stopPropagation();
				var dom = $(evt.currentTarget);
				if (_.status !== "editing") {
					var url = dom.data("url");
					if (url) {
						switch (url) {
							case "choice()":
								choice();
								break;
							default:
								location.href = url;
						}
					}
				} else {
					if (evt.target.className === "delbook") {
						_.del(dom.index());
					}
				}
			});
		},
		del: function (index) {
			var _ = this;
			_.$bookmark.css("overflow", "visible");
			var dom = _.$bookmark.find('.list').eq(index);
			dom.css({ transform: "translateY(60px)", opacity: 0, transition: ".3s" });
			dom.on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				dom.remove();
				_.$bookmark.css("overflow", "hidden");
			});
			Storage.bookMark.splice(index, 1);
			storage.set("bookMark", Storage.bookMark);
		},
		add: function (name, url, icon) {
			var _ = this;
			url = url.match(/^(ht|f)tp(s?):\/\//) ? url : "http://" + url;
			var i = Storage.bookMark.length - 1;
			var dom = $('<div class="list" data-url="' + url + '"><div class="img" style="background-image:url(' + icon + ')"></div><div class="text">' + name + '</div></div>');
			_.$bookmark.append(dom);
			dom.css({ marginTop: "60px", opacity: "0" }).animate({ marginTop: 0, opacity: 1 }, 300);
			Storage.bookMark.push({ name: name, url: url, icon: icon });
			storage.set("bookMark", Storage.bookMark);
		}
	};
	// 初始化首页书签模块
	bookMark.init();

	/**
	 * 搜索历史模块
	 * @function init 初始化
	 * @function load 加载HTML
	 * @function bind 绑定事件
	 * @function add 添加历史
	 * @function empty 清空历史
	 */
	var searchHistory = {
		init: function () {
			var _ = this;
			_.$history = $('.history');
			var arr = storage.get("history");
			if (arr === null) {
				arr = [];
			}
			Storage.history = arr.slice(0, 10);
			_.load();
			_.bind();
		},
		load: function () {
			var _ = this;
			var html = '';
			var l = Storage.history.length;
			for (var i = 0; i < l; i++) {
				html += '<li>' + Storage.history[i] + '</li>';
			}
			_.$history.find('.content').html(html);
			if (l >= 1) {
				$('.emptyHistory').show();
			} else {
				$('.emptyHistory').hide();
			}
		},
		bind: function () {
			var _ = this;
			_.$history.click(function (evt) {
				if (evt.target.nodeName === "LI") {
					$('.search-input').val(evt.target.innerText).trigger("propertychange");
					$('.search-btn').click();
				} else if (evt.target.className === "emptyHistory") {
					$(".search-input").focus();
					$('.emptyHistory').addClass('animation');
				} else if (evt.target.className === "emptyHistory animation") {
					_.empty();
				}
			});
		},
		add: function (text) {
			var _ = this;
			var pos = Storage.history.indexOf(text);
			if (pos !== -1) {
				Storage.history.splice(pos, 1);
			}
			Storage.history.unshift(text);
			_.load();
			storage.set("history", Storage.history);
		},
		empty: function () {
			var _ = this;
			Storage.history = [];
			_.load();
			storage.set("history", Storage.history);
		}
	}
	// 初始化搜索历史模块
	searchHistory.init();

	/**
	 * 更改地址栏URL参数
	 * @param {string} param 参数
	 * @param {string} value 值
	 * @param {string} url 需要更改的URL,不设置此值会使用当前链接
	 */
	var changeParam = function (param, value, url) {
		url = url || location.href;
		var reg = new RegExp("(^|)" + param + "=([^&]*)(|$)");
		var tmp = param + "=" + value;
		return url.match(reg) ? url.replace(eval(reg), tmp) : url.match("[?]") ? url + "&" + tmp : url + "?" + tmp;
	};

	// 更改URL，去除后面的参数
	history.replaceState(null, document.title, location.origin + location.pathname);

	// 绑定主页虚假输入框点击事件
	$(".ornament-input-group").click(function () {
		$('body').css("pointer-events", "none");
		history.pushState(null, document.title, changeParam("page", "search"));
		$(".s-temp").focus();
		// 隐藏主页
		$(".ornament-input-group,.bookmark").addClass("animation");
		// 显示搜索页
		$(".page-search").show();
		setTimeout(function () {
			$(".page-search").on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				$(".page-search").off('transitionend');
				$(".search-input").val('').focus();
				$('body').css("pointer-events", "");
			}).addClass("animation");
			$(".history").show().addClass("animation");
			$(".input-bg").addClass("animation");
			$(".shortcut").addClass("animation");
		}, 1);
	});

	$(".page-search").click(function (evt) {
		if (evt.target === evt.currentTarget) {
			history.go(-1);
		}
	});

	// 返回按键被点击
	window.addEventListener("popstate", function (e) {
		if ($('.page-search').is(":visible")) {
			$('body').css("pointer-events", "none");
			history.replaceState(null, document.title, location.origin + location.pathname);
			//主页
			$(".ornament-input-group,.bookmark").removeClass("animation");
			//搜索页
			$(".history").removeClass("animation");
			$(".input-bg").removeClass("animation");
			$(".shortcut").removeClass("animation");
			$(".page-search").removeClass("animation");
			$(".page-search").on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				$(".page-search").off('transitionend');
				$(".page-search").hide();
				//搜索页内容初始化
				$(".suggestion").html("");
				$(".search-btn").html("取消");
				$(".shortcut1").show();
				$(".shortcut2,.shortcut3,.empty-input").hide();
				$(".search-input").val('');
				$('body').css("pointer-events", "");
				$('.emptyHistory').removeClass('animation');
			});
		}
	}, false);

	$(".suggestion").click(function (evt) {
		if (evt.target.nodeName === "SPAN") {
			$('.search-input').focus().val($(evt.target).parent().text()).trigger("propertychange");
			return;
		} else {
			searchText(evt.target.innerText);
		}

	});

	$(".search-input").on("input propertychange", function () {
		var t = $(this).val();
		$(".shortcut1,.shortcut2,.shortcut3").hide();
		if (!t) {
			$(".history").show();
			$(".empty-input").hide();
			$(".search-btn").html("取消");
			$(".shortcut1").show();
			$(".suggestion").hide();
		} else {
			$(".history").hide();
			$(".empty-input").show();
			$(".search-btn").html(/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(t) ? "进入" : "搜索");
			escape(t).indexOf("%u") < 0 ? $(".shortcut2").show() : $(".shortcut3").show();
			$.ajax({
				url: "https://suggestion.baidu.com/su",
				type: "GET",
				dataType: "jsonp",
				data: { wd: t, cb: "sug" },
				timeout: 5000,
				jsonpCallback: "sug",
				success: function (res) {
					var data = res.s;
					var isStyle = $(".suggestion").html();
					var html = "";
					for (var i = data.length; i > 0; i--) {
						var style = "";
						if (isStyle === "") {
							style = "animation: fadeInDown both .5s " + (i - 1) * 0.05 + 's"';
						}
						html += '<li style="' + style + '"><div>' + data[i - 1].replace(t, '<b>' + t + '</b>') + "</div><span></span></li>";
					}
					$(".suggestion").show().html(html).scrollTop($(".suggestion")[0].scrollHeight);
				}
			});
			$.ajax({
				url: "https://quark.sm.cn/api/qs",
				type: "GET",
				dataType: "jsonp",
				data: { query: t },
				timeout: 5000,
				success: function (res) {
					var data = res.data;
					var html = '<li>快搜:</li>';
					for (var i = 0, l = data.length; i < l; i++) {
						html += '<li>' + data[i] + '</li>';
					}
					$('.shortcut3').html(html);
				}
			});
		}
	});

	$(".empty-input").click(function () {
		$(".search-input").focus().val("").trigger("propertychange");
	});

	$(".shortcut1,.shortcut2").click(function (evt) {
		$(".search-input").focus().val($(".search-input").val() + evt.target.innerText).trigger("propertychange");
	});

	$(".shortcut3").click(function (evt) {
		if (evt.target.nodeName === "LI") {
			var text = evt.target.innerText;
			var data = {
				百科: "https://baike.baidu.com/item/",
				视频: "https://www.soku.com/m/y/video?q=",
				豆瓣: "https://m.douban.com/search/?q=",
				新闻: "https://news.baidu.com/news#/search/",
				图片: "https://cn.bing.com/images/search?q=",
				微博: "https://m.weibo.cn/search?containerid=100103type=1&q=",
				音乐: "http://m.music.migu.cn/v3/search?keyword=",
				知乎: "https://www.zhihu.com/search?q=",
				小说: "https://m.qidian.com/search?kw=",
				旅游: "https://h5.m.taobao.com/trip/rx-search/list/index.html?keyword=",
				地图: "https://m.amap.com/search/mapview/keywords=",
				电视剧: "https://m.v.qq.com/search.html?keyWord=",
				股票: "https://emwap.eastmoney.com/info/search/index?t=14&k=",
				汽车: "http://sou.m.autohome.com.cn/zonghe?q="
			}
			if (data[text]) {
				location.href = data[text] + $(".search-input").val();
			}
		}
	});

	$(".search-btn").click(function () {
		var text = $(".search-input").val();
		if ($(".search-btn").text() === "进入") {
			!text.match(/^(ht|f)tp(s?):\/\//) && (text = "http://" + text);
			searchHistory.add(text);
			location.href = text;
			history.go(-1);
		} else {
			if (!text) {
				$(".search-input").blur();
				history.go(-1);
			} else {
				searchText(text);
			}
		}
	});

	$(".search-input").keydown(function (evt) {
		// 使用回车键进行搜索
		evt.keyCode === 13 && $(".search-btn").click();
	});

	function searchText(text) {
		if (!text) {
			return;
		}
		searchHistory.add(text);
		history.go(-1);
		setTimeout(function () { // 异步执行 兼容QQ浏览器
			if (Storage.setData.engines === "via") {
				window.via.searchText(text);
			} else {
				location.href = {
					baidu: "https://www.baidu.com/s?wd=%s",
					quark: "https://quark.sm.cn/s?q=%s",
					google: "https://www.google.com.hk/search?q=%s",
					bing: "https://cn.bing.com/search?q=%s",
					sm: "https://m.sm.cn/s?q=%s",
					haosou: "https://www.so.com/s?q=%s",
					sogou: "https://www.sogou.com/web?query=%s",
					diy: Storage.setData.diyEngines
				}[Storage.setData.engines].replace("%s", text);
			}
		}, 1);
	}

	//精选页面
	function choice() {
		// 构建HTML
		var data = { '常用': [{ hl: "百度", shl: "百度一下你就知道", img: "baidu", url: "https://m.baidu.com" }, { hl: "腾讯", shl: "手机腾讯网", img: "qq", url: "https://xw.qq.com" }, { hl: "新浪", shl: "联通世界的超级平台", img: "sina", url: "https://sina.cn" }, { hl: "谷歌", shl: "最大的搜索引擎", img: "google", url: "https://www.google.com.hk" }, { hl: "搜狐", shl: "懂手机更懂你", img: "sina", url: "https://m.sohu.com" }, { hl: "网易", shl: "各有态度", img: "netease", url: "https://3g.163.com" }, { hl: "起点中文网", shl: "精彩小说大全", img: "qidian", url: "https://m.qidian.com" }, { hl: "淘宝", shl: "淘我喜欢", img: "taobao", url: "https://m.taobao.com" }, { hl: "京东", shl: "多好快省品质生活", img: "jd", url: "https://m.jd.com" }, { hl: "百度贴吧", shl: "最大的中文社区", img: "tieba", url: "http://c.tieba.baidu.com" }, { hl: "12306", shl: "你离世界只差一张票", img: "12306", url: "https://www.12306.cn" }, { hl: "飞猪", shl: "阿里旅行再升级", img: "flypig", url: "https://www.fliggy.com" }, { hl: "查快递", shl: "快递查询", img: "express_100", url: "https://m.kuaidi100.com" }, { hl: "优酷", shl: "热门视频全面覆盖", img: "youku", url: "https://www.youku.com" }, { hl: "爱奇艺", shl: "中国领先的视频门户", img: "iqiyi", url: "https://m.iqiyi.com" }, { hl: "斗鱼", shl: "每个人的直播平台", img: "douyu", url: "https://m.douyu.com" }, { hl: "虎牙", shl: "中国领先的互动直播平台", img: "huya", url: "https://m.huya.com" }, { hl: "美团", shl: "吃喝玩乐全都有", img: "meituan", url: "http://i.meituan.com" }, { hl: "小米", shl: "小米官网", img: "xiaomi", url: "https://m.mi.com" }, { hl: "58同城", shl: "让生活更简单", img: "tongcheng", url: "https://m.58.com" }, { hl: "九游", shl: "发现更多好游戏", img: "game_9", url: "http://a.9game.cn" }, { hl: "虎扑", shl: "最篮球的世界", img: "hupu", url: "https://m.hupu.com" }], '科技': [{ hl: "知乎", shl: "知识分享社区", img: "zhihu", url: "https://www.zhihu.com" }, { hl: "36kr", shl: "互联网创业资讯", img: "kr36", url: "https://36kr.com" }, { hl: "少数派", shl: "高质量应用推荐", img: "sspai", url: "https://sspai.com" }, { hl: "爱范儿", shl: "泛科技媒体", img: "ifanr", url: "https://www.ifanr.com" }, { hl: "ZEALER", shl: "电子产品评测网站", img: "zealer", url: "https://m.zealer.com" }, { hl: "瘾科技", shl: "科技新闻和测评", img: "engadget", url: "https://cn.engadget.com" }, { hl: "虎嗅网", shl: "科技媒体", img: "huxiu", url: "https://m.huxiu.com" }, { hl: "品玩", shl: "有品好玩的科技", img: "pingwest", url: "https://www.pingwest.com" }, { hl: "简书", shl: "优质原创的内容社区", img: "jianshu", url: "https://www.jianshu.com" }, { hl: "V2EX", shl: "关于分享和探索的地方", img: "v2ex", url: "https://www.v2ex.com" }], '生活': [{ hl: "豆瓣", shl: "一个神奇的社区", img: "douban", url: "https://m.douban.com/home_guide" }, { hl: "轻芒杂志", shl: "生活兴趣杂志", img: "qingmang", url: "http://zuimeia.com" }, { hl: "ONE", shl: "韩寒监制", img: "one", url: "http://m.wufazhuce.com" }, { hl: "蚂蜂窝", shl: "旅游攻略社区", img: "mafengwo", url: "https://m.mafengwo.cn" }, { hl: "小红书", shl: "可以买到国外的好东西", img: "xiaohongshu", url: "https://www.xiaohongshu.com" }, { hl: "什么值得买", shl: "应该能省点钱吧", img: "smzdm", url: "https://m.smzdm.com" }, { hl: "淘票票", shl: "不看书，就看几场电影吧", img: "taopiaopiao", url: "https://dianying.taobao.com" }, { hl: "下厨房", shl: "是男人就学做几道菜", img: "xiachufang", url: "https://m.xiachufang.com" }, { hl: "ENJOY", shl: "高端美食团购", img: "enjoy", url: "https://enjoy.ricebook.com" }], '工具': [{ hl: "豌豆荚设计", shl: "发现最优美的应用", img: "wandoujia", url: "https://m.wandoujia.com/award" }, { hl: "喜马拉雅听", shl: "音频分享平台", img: "ximalaya", url: "https://m.ximalaya.com" }, { hl: "Mozilla", shl: "学习web开发的最佳实践", img: "mozilla", url: "https://developer.mozilla.org/zh-CN" }, { hl: "网易公开课", shl: "人chou就要多学习", img: "netease_edu_study", url: "http://m.open.163.com" }, { hl: "石墨文档", shl: "可多人实时协作的云端文档", img: "sm", url: "https://shimo.im" }] },
			html = '<div class="page-bg"></div><div class="page-choice"><div class="page-content"><ul class="choice-ul">',
			tabHtml = '<li class="current">捷径</li>',
			contentHtml = `<li class="choice-cut swiper-slide">
				<div class="list weather w2 h2"><a href="https://caiyunapp.com/h5"><div class="content"><span>访问中</span><span></span><span></span></div></a></div>
				<div class="list type1 h2"><div class="content" style="background-image:linear-gradient(to right bottom, #00be96, #7dedc8)"><span class="hl">一言</span><span class="shl" id="hitokoto" style="float: left;width: 100%;height: 96px;white-space: pre-line;"><script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script></span></div></div>
				<div class="composition">
					<div class="list type1"><a href="https://www.zhihu.com"><div class="content" style="background-image:linear-gradient(to right bottom, #96beff, #619bff)"><img src="img/choice/zhihu.png" /><span class="hl">知乎</span><span class="shl">社区</span></div></a></div>
					<div class="list type1"><a href="https://tieba.baidu.com"><div class="content" style="background-image:linear-gradient(to right bottom, #96beff, #619bff)"><img src="img/choice/tieba.png" /><span class="hl">贴吧</span><span class="shl">社区</span></div></a></div>
				</div>
				<div class="list topsug w2 h3"><a href="https://s.weibo.com/top/summary"><div class="content" style="background-image:linear-gradient(to right bottom, #222250, #45455d)"><span>热搜榜</span></div></a></div>
				<div class="list type2 w2"><a href="https://quark.sm.cn/api/rest?format=html&method=lawservice.home&schema=v2"><div class="content" style="background-image:linear-gradient(to right bottom, #3e3e6f, #696993)"><img src="img/choice/law.png" /><div class="text"><p class="hl">夸克法律检索</p><p class="shl">专业权威法律检索</p></div></div></a></div>
				<div class="list type1"><a href="https://sina.cn"><div class="content"><img src="img/choice/sina.png" /><span class="hl">新浪网</span><span class="shl">新闻</span></div></a></div>
				<div class="list type1"><a href="https://quark.sm.cn/s?q=夸克学习"><div class="content" style="background-image:linear-gradient(to right bottom, #826fc3, #553cae)"><span class="hl">夸克学习</span></div></a></div>
				<div class="list type2 w2"><a href="https://xw.qq.com"><div class="content" style="background-image:linear-gradient(to right bottom, #becce9, #98b1cf)"><img src="img/choice/qq.png" /><div class="text"><p class="hl">腾讯新闻</p><p class="shl">新闻</p></div></div></a></div>
				<div class="list type2 w2"><a href="https://m.qidian.com"><div class="content"><div class="text"><p class="hl">起点中文网</p><p class="shl">精彩好书推荐</p></div></div></a></div>
				<div class="list type1"><a href="https://quark.sm.cn/s?q=垃圾分类"><div class="content" style="background-image:linear-gradient(to right bottom, #7cecc6, #15b695)"><span class="hl">垃圾分类</span><svg style="position: absolute;left: 26px;height: 55px;bottom: -16px;fill: #282727;" viewBox="0 0 1024 1024"><path d="M939.0592 18.0736H84.9408c-32.1536 0-58.2144 22.4256-58.2144 50.1248v5.5808c0 27.6992 26.0608 79.4112 58.2144 79.4112h37.0688l49.5104 821.0944c1.0752 17.7664 18.0736 31.6928 38.7584 31.6928h608.2048c20.736 0 37.7856-14.0288 38.7584-31.8464l45.056-820.9408h36.7104c32.1536 0 58.2656-51.712 58.2656-79.4112v-5.5808c0-27.6992-26.0608-50.1248-58.2144-50.1248zM243.1488 153.1392h537.9584l-13.8752 63.9488H250.2656l-7.1168-63.9488z m75.2128 478.5664c-23.552 13.7216-33.792-7.3728-33.792-7.3728-2.5088-11.7248-3.9424-23.9104-3.9424-36.5056 0-89.856 67.9424-163.072 152.2176-165.3248l-59.4944-39.168c-11.264-7.424-14.7456-23.1424-7.7312-35.072 7.0144-11.9808 21.8112-15.616 33.0752-8.192L501.248 407.552c5.4272 3.584 9.216 9.2672 10.7008 15.8208a27.0848 27.0848 0 0 1-2.9696 19.2512l-63.6928 108.7488c-4.5568 7.7824-12.3904 12.032-20.3776 12.032-4.352 0-8.704-1.2288-12.6464-3.84-11.264-7.424-14.7456-23.1424-7.7312-35.1232l29.952-51.0976c-58.5216 1.3312-105.728 52.1216-105.728 114.4832 0 5.9392 0.5632 11.6224 1.3824 17.3056-0.1024 0 5.3248 17.5616-11.776 26.5728z m309.0944 127.5392a172.70784 172.70784 0 0 1-28.5184 23.04c-75.5712 48.64-173.9264 31.232-221.44-38.4l-0.7168 71.2192c-0.1536 13.4656-11.4688 24.9344-25.344 25.4976-13.824 0.5632-24.9344-9.8816-24.7808-23.3984l1.2288-122.7776c0.1024-6.5024 2.816-12.8 7.5264-17.6128 4.7616-4.7104 11.1616-7.6288 17.8176-7.936l125.9008-5.2736c8.96-0.4096 16.8448 3.8912 21.1456 10.6496 2.3552 3.6352 3.6864 7.9872 3.6352 12.6976-0.1536 13.5168-11.4688 24.9344-25.2928 25.4976l-59.2384 2.5088c32.8192 48.4864 101.0688 60.6208 153.4976 26.8288 4.9664-3.2256 9.472-6.8096 13.7728-10.5472 0 0 11.8272-14.08 28.672-4.5568 24.32 12.544 12.1344 32.5632 12.1344 32.5632z m151.3472-140.0832l-102.5536 67.5328c-5.4272 3.5328-12.1856 4.864-18.7904 3.584a26.76224 26.76224 0 0 1-16.4864-10.3424l-74.7008-101.4784c-5.3248-7.2192-6.1952-16.128-3.0208-23.5008 1.6896-3.9936 4.608-7.5264 8.5504-10.0864 11.3152-7.424 27.0848-4.4032 35.328 6.7584l35.1232 47.7184c21.9136-54.272-6.0928-117.7088-63.4368-142.3872-5.4272-2.3552-10.9056-4.096-16.4352-5.5808 0 0-18.2784-1.9968-19.7632-21.248-3.2768-27.0848 20.1216-28.1088 20.1216-28.1088 11.776 2.3552 23.5008 5.8368 35.0208 10.8032 82.5856 35.5328 122.9824 126.8736 91.8016 205.1584l59.4944-39.168c11.264-7.424 27.0848-4.4032 35.2768 6.7584 8.2432 11.1104 5.7344 26.2144-5.5296 33.5872z"></path></svg></div></a></div>
			</li>`;

		$.each(data, function (i, n) {
			tabHtml += "<li>" + i + "</li>";
			contentHtml += '<li class="choice-li swiper-slide">';
			for (var i = 0, l = n.length; i < l; i++) {
				contentHtml += '<a href="' + n[i].url + '"><div><img src="img/choice/' + n[i].img + '.png" /><p>' + n[i].hl + '</p><p>' + n[i].shl + '</p></div></a>';
			}
			contentHtml += '</li>';
		});

		// HTML添加到APP
		$('#app').append(html + tabHtml + '<span class="active-span"></span></ul><div class="choice-swipe"><ul class="swiper-wrapper"><div style="position:absolute;text-align:center;top:50%;width:100%;margin-top:-64px;color:#444">正在加载页面中...</div></ul></div><div class="choice-close"></div></div></div>');

		var dom = $(".choice-ul li");
		var width = dom.width();
		$(".active-span").css("transform", "translate3d(" + (width / 2 - 9) + "px,0,0)");

		setTimeout(function () {
			$(".page-bg").addClass("animation");
			$(".page-choice").addClass("animation");
		}, 1);

		// 动画完成后加载，防止过渡动画卡顿
		$(".page-choice").on("transitionend", function (evt) {
			// 过滤掉子元素
			if (evt.target !== this) {
				return;
			}
			$(".page-choice").off("transitionend");
			$('.swiper-wrapper').html(contentHtml);
			// 绑定事件
			var last_page = 0;

			require(['Swiper'], function (Swiper) {
				var swiper = new Swiper('.choice-swipe', {
					on: {
						slideChange: function () {
							var i = this.activeIndex;
							dom.eq(last_page).removeClass("current");
							$(".active-span").css("transform", "translate3d(" + (width * i + width / 2 - 9) + "px,0,0)");
							dom.eq(i).addClass("current");
							last_page = i;
						}
					}
				});

				// 绑定TAB点击事件
				$(".choice-ul").click(function (evt) {
					if (evt.target.nodeName == "LI") {
						swiper.slideTo($(evt.target).index());
					}
				});
			})

			// 绑定关闭按钮事件
			$(".choice-close").click(function () {
				$(".page-choice").css('pointer-events', 'none').removeClass("animation");
				$(".page-bg").removeClass("animation");
				$(".page-choice").on('transitionend', function (evt) {
					if (evt.target !== this) {
						return;
					}
					$(".page-choice").remove();
					$(".page-bg").remove();
				});
			});

			// 地理位置|天气|气温|空气质量
			$.ajax({
				url: "https://restapi.amap.com/v3/ip?key=0547c4192c80ebdaf229be782469e920",
				type: "get",
				success: function (location) {
					$.ajax({
						url: "https://api.caiyunapp.com/v2.5/Y2FpeXVuX25vdGlmeQ==/" + location.rectangle.split(';')[0] + "/realtime",
						type: "get",
						dataType: "jsonp",
						success: function (data) {
							var skycon = {
								CLEAR_DAY: {
									name: "晴",
									color: "#ff6666,#ff7e7e",
									icon: 'sunny'
								},
								CLEAR_NIGHT: {
									name: "晴",
									color: "#ff6666,#ff7e7e",
									icon: 'sunny'
								},
								PARTLY_CLOUDY_DAY: {
									name: "多云",
									color: "#a9c3eb,#1b9ce2",
									icon: "cloudy"
								},
								PARTLY_CLOUDY_NIGHT: {
									name: "多云",
									color: "#a9c3eb,#1b9ce2",
									icon: "cloudy"
								},
								CLOUDY: {
									name: "阴",
									color: "#9adbd9,#4b9cc2",
									icon: "cloudy"
								},
								LIGHT_HAZE: {
									name: "轻度雾霾",
									color: "#9E9E9E,#787676",
									icon: ""
								},
								MODERATE_HAZE: {
									name: "中度雾霾",
									color: "#9E9E9E,#787676",
									icon: ""
								},
								HEAVY_HAZE: {
									name: "重度雾霾",
									color: "#9E9E9E,#787676",
									icon: ""
								},
								LIGHT_RAIN: {
									name: "小雨",
									color: "#3c4887,#8b7bd0",
									icon: "rainy"
								},
								MODERATE_RAIN: {
									name: "中雨",
									color: "#3c4887,#8b7bd0",
									icon: "rainy"
								},
								HEAVY_RAIN: {
									name: "大雨",
									color: "#3c4887,#8b7bd0",
									icon: "rainy"
								},
								STORM_RAIN: {
									name: "暴雨",
									color: "#3c4887,#8b7bd0",
									icon: "rainy"
								},
								FOG: {
									name: "雾",
									color: "#9E9E9E,#787676",
									icon: ""
								},
								LIGHT_SNOW: {
									name: "小雪",
									color: "#bbb,#758595",
									icon: "snowy"
								},
								MODERATE_SNOW: {
									name: "中雪",
									color: "#bbb,#758595",
									icon: "snowy"
								},
								HEAVY_SNOW: {
									name: "大雪",
									color: "#bbb,#758595",
									icon: "snowy"
								},
								STORM_SNOW: {
									name: "暴雪",
									color: "#bbb,#758595",
									icon: "snowy"
								},
								DUST: {
									name: "浮尘",
									color: "#f98c24,#fc5830",
									icon: ""
								},
								SAND: {
									name: "沙尘",
									color: "#f98c24,#fc5830",
									icon: ""
								},
								WIND: {
									name: "大风",
									color: "#f98c24,#fc5830",
									icon: ""
								},
								THUNDER_SHOWER: {
									name: "雷阵雨",
									color: "#3c4887,#8b7bd0",
									icon: "rainy"
								},
								HAIL: {
									name: "冰雹",
									color: "#3c4887,#8b7bd0",
									icon: ""
								},
								SLEET: {
									name: "雨夹雪",
									color: "#3c4887,#8b7bd0",
									icon: "rainy"
								},
							};

							var html = '<span>' + Math.round(data.result.realtime.temperature) + '</span><span>' + skycon[data.result.realtime.skycon].name + '</span><span>' + location.city.replace(/市$/, '') + ' · 空气' + data.result.realtime.air_quality.description.chn + '</span><div class="' + skycon[data.result.realtime.skycon].icon + '"></div>',
								color = skycon[data.result.realtime.skycon].color.split(',');
							$('.weather').find('.content').html(html).css("background-image", "linear-gradient(to right bottom," + color[0] + "," + color[1] + ")");
						}
					});
				}
			});

			// 微博热搜
			$.ajax({
				url: "https://s.weibo.com/ajax/jsonp/gettopsug?_cb=gettopsug",
				type: "get",
				dataType: "jsonp",
				jsonpCallback: "gettopsug",
				success: function (res) {
					var html = '';
					for (var i = 0; i < 4; i++) {
						html += '<p><span>' + (i + 1) + '</span><span>' + res.data.list[i].num + '</span><span>' + res.data.list[i].word + '</span></p>';
					}
					$('.topsug').find('.content').append(html);
				}
			});
		})
	}

	$(".logo").click(() => {
		if (window.via) {
			self.location = "folder://";
		}
	}).longPress(() => {
		$('#app').append(`<div class="set-from">
			<div class="set-header">
				<div class="set-back"></div>
				<p class="set-logo">主页设置</p>
			</div>
			<ul class="set-option-from">
				<li class="set-option" data-value="engines">
					<p class="set-title">搜索引擎</p>
					<select class="set-select">
						<option value="google">谷歌</option>
						<option value="quark">夸克</option>
						<option value="via" style="display:none">跟随VIA</option>
						<option value="baidu">百度</option>
						<option value="bing">必应</option>
						<option value="sm">神马</option>
						<option value="haosou">好搜</option>
						<option value="sogou">搜狗</option>
						<option value="diy">自定义</option>
					</select>
				</li>
				<li class="set-option" data-value="wallpaper">
					<p class="set-title">背景</p>
				</li>
				<li class="set-option" data-value="logo">
					<p class="set-title">LOGO</p>
				</li>
				<li class="set-option" data-value="bookcolor">
					<p class="set-title">图标颜色</p>
					<select class="set-select">
						<option value="black">暗色图标</option>
						<option value="white">浅色图标</option>
					</select>
					<p class="set-description">主页书签文字颜色</p>
				</li>
				<li class="set-option" data-value="nightMode">
					<p class="set-title">夜间模式</p>
					<select class="set-select">
						<option value="0">关闭</option>
						<option value="1">开启</option>
					</select>
				</li>
				<li class="set-option" data-value="delLogo">
					<p class="set-title">恢复默认背景和LOGO</p>
				</li>
				<li class="set-option" data-value="openurl">
					<p class="set-title">原项目Github地址</p>
					<p class="set-description">https://github.com/liumingye/quarkHomePage</p>
				</li>
				<li class="set-option">
					<p class="set-title">关于</p>
					<p class="set-description">当前版本：基于1.43（20191108测试版）修改<br>原作者：BigLop</p>
				</li>
			</ul>
			<input type="file" id="set-upload" />
		</div>`);

		$(".set-from").show();

		if (window.via) { // 只有VIA浏览器才能显示
			$('option[value=via]').show();
		}

		$.each(Storage.setData, function (i, n) {
			var select = $(".set-option[data-value=" + i + "]").find(".set-select");
			if (select) {
				select.val(n);
			}
		});

		$(".set-back").click(function () {
			$(".set-from").css("pointer-events", "none").removeClass("animation");
			$(".set-from").on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				$(".set-from").remove();
			});
		});

		$(".set-option").click(function () {
			var value = $(this).data("value");
			if (value === "wallpaper") {
				$("#set-upload").change(function () {
					var files = this.files;
					var reader = new FileReader();
					reader.readAsDataURL(files[0]);
					reader.addEventListener("load", function () {
						Storage.setData.wallpaper = this.result;
						storage.set("setData", Storage.setData);
						$("body").css("background-image", "url(" + Storage.setData.wallpaper + ")");
					});
				});
				$("#set-upload").click();
			} else if (value === "logo") {
				$("#set-upload").change(function () {
					var files = this.files;
					var reader = new FileReader();
					reader.readAsDataURL(files[0]);
					reader.addEventListener("load", function () {
						Storage.setData.logo = this.result;
						storage.set("setData", Storage.setData);
						$(".logo").html('<img src="' + Storage.setData.logo + '" />');
					});
				});
				$("#set-upload").click();
			} else if (value === "delLogo") {
				Storage.setData.wallpaper = "";
				Storage.setData.logo = "";
				Storage.setData.bookcolor = "black";
				storage.set("setData", Storage.setData);
				location.reload();
			} else if (value === "openurl") {
				open($(this).find('.set-description').text());
			}
		});

		$(".set-select").change(function () {
			var dom = $(this),
				item = dom.parent().data("value"),
				value = dom.val();
			if (item === "engines" && value === "diy") {
				var engines = prompt("输入搜索引擎网址，（用“%s”代替搜索字词）");
				if (engines) {
					Storage.setData.diyEngines = engines;
				} else {
					dom.val(Storage.setData.engines);
					return;
				}
			}
			// 保存设置
			Storage.setData[item] = value;
			storage.set("setData", Storage.setData);
			// 应用设置
			loadStorage.setItem();
		});
		$(".set-from").addClass('animation');
	});

	// 下滑进入搜索
	require(['touchSwipe'], function () {
		$(".page-home").swipe({
			swipeStatus: function (event, phase, direction, distance) {
				if ($('.delbook').length !== 0) {
					return;
				}
				if (phase === 'move') {
					if (distance <= 10 || direction !== "down") {
						return;
					}
					var height = $(document).height();
					$('.ornament-input-group').css({ 'transform': 'translate3d(0,' + (distance / height) * 70 + 'px,0)', 'transition': 'none' });
					$('.logo').attr("disabled", "disabled").css({ 'opacity': 1 - (distance / height) * 4, 'transition': 'none' });
					$('.bookmark').attr("disabled", "disabled").css({ 'opacity': 1 - (distance / height) * 4, 'transform': 'scale(' + (1 - (distance / height) * .2) + ')', 'transition': 'none' });
				} else if (phase === 'end' || phase === 'cancel') {
					$('.logo').removeAttr("disabled").removeAttr('style');
					$('.bookmark').removeAttr("disabled").removeAttr('style');
					$('.ornament-input-group').removeAttr('style');
					if (distance >= 100 && direction === "down") {
						$('.ornament-input-group').click();
						$('.logo').css('opacity', '0');
						$('.bookmark').css('opacity', '0');
						setTimeout(function () {
							$('.logo').css('opacity', '');
							$('.bookmark').css('opacity', '');
						}, 200);
					}
				}
			}
		});
	})

})