"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}var LeftSidebar=function(){function t(){_classCallCheck(this,t),this.body=$("body"),this.window=$(window)}return _createClass(t,[{key:"initMenu",value:function(){var a,n,e,i,o;$("#side-menu").length&&((i=$("#side-menu li .collapse")).on({"show.bs.collapse":function(t){t=$(t.target).parents(".collapse.show");$("#side-menu .collapse.show").not(t).collapse("hide")}}),$("#side-menu a").each(function(){var t=window.location.href.split(/[?#]/)[0];this.href==t&&($(this).addClass("active"),$(this).parent().addClass("menuitem-active"),$(this).parent().parent().parent().addClass("show"),$(this).parent().parent().parent().parent().addClass("menuitem-active"),"sidebar-menu"!==(t=$(this).parent().parent().parent().parent().parent().parent()).attr("id")&&t.addClass("show"),$(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),"wrapper"!==(t=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id")&&t.addClass("show"),(t=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body")||t.addClass("menuitem-active"))})),$("#two-col-sidenav-main").length&&(a=$("#two-col-sidenav-main .nav-link"),n=$(".twocolumn-menu-item"),e=$(".twocolumn-menu-item .nav-second-level"),(i=$("#two-col-menu li .collapse")).on({"show.bs.collapse":function(){var t=$(this).closest(e).closest(e).find(i);(t.length?t:i).not($(this)).collapse("hide")}}),a.on("click",function(t){var e=$($(this).attr("href"));return!e.length||(t.preventDefault(),a.removeClass("active"),$(this).addClass("active"),n.removeClass("d-block"),e.addClass("d-block"),$.LayoutThemeApp.leftSidebar.changeSize("default"),!1)}),o=window.location.href,a.each(function(){this.href===o&&$(this).addClass("active")}),$("#two-col-menu a").each(function(){var t,e,a;this.href==o&&($(this).addClass("active"),$(this).parent().addClass("menuitem-active"),$(this).parent().parent().parent().addClass("show"),$(this).parent().parent().parent().parent().addClass("menuitem-active"),"sidebar-menu"!==(t=$(this).parent().parent().parent().parent().parent().parent()).attr("id")&&t.addClass("show"),$(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),"wrapper"!==(t=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id")&&t.addClass("show"),(t=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body")||t.addClass("menuitem-active"),e=null,a="#"+$(this).parents(".twocolumn-menu-item").attr("id"),$("#two-col-sidenav-main .nav-link").each(function(){$(this).attr("href")===a&&(e=$(this))}),e&&e.trigger("click"))}))}},{key:"init",value:function(){this.initMenu()}}]),t}(),Topbar=function(){function t(){_classCallCheck(this,t),this.body=$("body"),this.window=$(window)}return _createClass(t,[{key:"toggleRightSideBar",value:function(){document.body.classList.contains("right-bar-enabled")?document.body.classList.remove("right-bar-enabled"):document.body.classList.add("right-bar-enabled")}},{key:"initMenu",value:function(){var t=this;null!==(e=document.querySelector(".right-bar-toggle"))&&void 0!==e&&e.addEventListener("click",function(){t.toggleRightSideBar()}),$("#top-search").on("click",function(t){$("#search-dropdown").addClass("d-block")}),$(".topbar-dropdown").on("show.bs.dropdown",function(){$("#search-dropdown").removeClass("d-block")}),$(".navbar-nav a").each(function(){var t,e=window.location.href.split(/[?#]/)[0];this.href==e&&($(this).addClass("active"),$(this).parent().addClass("active"),$(this).parent().parent().addClass("active"),$(this).parent().parent().parent().addClass("active"),$(this).parent().parent().parent().parent().addClass("active"),$(this).parent().parent().parent().parent().hasClass("mega-dropdown-menu")?($(this).parent().parent().parent().parent().parent().addClass("active"),$(this).parent().parent().parent().parent().parent().parent().addClass("active")):(t=$(this).parent().parent()[0].querySelector(".dropdown-item"))&&(e=window.location.href.split(/[?#]/)[0],t.href!=e&&!t.classList.contains("dropdown-toggle")||t.classList.add("active")),(t=$(this).parent().parent().parent().parent().addClass("active").prev()).hasClass("nav-link")&&t.addClass("active"))}),$(".navbar-toggle").on("click",function(t){$(this).toggleClass("open"),$("#navigation").slideToggle(400)});var e=document.querySelectorAll("ul.navbar-nav .dropdown .dropdown-toggle"),n=!1;e.forEach(function(a){a.addEventListener("click",function(t){var e;a.parentElement.classList.contains("nav-item")||(n=!0,a.parentElement.parentElement.classList.add("show"),(e=a.parentElement.parentElement.parentElement.querySelector(".nav-link")).ariaExpanded=!0,e.classList.add("show"),bootstrap.Dropdown.getInstance(a).show())}),a.addEventListener("hide.bs.dropdown",function(t){n&&(t.preventDefault(),t.stopPropagation(),n=!1)})})}},{key:"init",value:function(){this.initMenu()}}]),t}(),RightSidebar=function(){function t(){_classCallCheck(this,t),this.body=$("body"),this.window=$(window)}return _createClass(t,[{key:"init",value:function(){$(document).on("click","body",function(t){1!==$(t.target).closest("#top-search").length&&$("#search-dropdown").removeClass("d-block"),0<$(t.target).closest(".right-bar-toggle, .right-bar").length||0<$(t.target).closest(".left-side-menu, .side-nav").length||$(t.target).hasClass("button-menu-mobile")||0<$(t.target).closest(".button-menu-mobile").length||($("body").removeClass("right-bar-enabled"),$("body").removeClass("sidebar-enable"))})}}]),t}(),ThemeCustomizer=function(){function t(){_classCallCheck(this,t),this.body=document.body,this.defaultConfig={leftbar:{color:"light",size:"default",position:"fixed"},layout:{color:"light",size:"fluid",mode:"default"},topbar:{color:"light"},sidebar:{user:!0}}}return _createClass(t,[{key:"initConfig",value:function(){var t,e=JSON.parse(JSON.stringify(this.defaultConfig));e.leftbar.color=null!==(t=this.body.getAttribute("data-leftbar-color"))&&void 0!==t?t:this.defaultConfig.leftbar.color,e.leftbar.size=null!==(t=this.body.getAttribute("data-leftbar-size"))&&void 0!==t?t:this.defaultConfig.leftbar.size,e.leftbar.position=null!==(t=this.body.getAttribute("data-leftbar-position"))&&void 0!==t?t:this.defaultConfig.leftbar.position,e.layout.color=null!==(t=this.body.getAttribute("data-layout-color"))&&void 0!==t?t:this.defaultConfig.layout.color,e.layout.size=null!==(t=this.body.getAttribute("data-layout-size"))&&void 0!==t?t:this.defaultConfig.layout.size,e.layout.mode=null!==(t=this.body.getAttribute("data-layout-mode"))&&void 0!==t?t:this.defaultConfig.layout.mode,e.topbar.color=null!==(t=this.body.getAttribute("data-topbar-color"))&&void 0!==t?t:this.defaultConfig.topbar.color,e.sidebar.user=null!==(t=this.body.getAttribute("data-sidebar-user"))&&void 0!==t?t:this.defaultConfig.sidebar.user,this.defaultConfig=JSON.parse(JSON.stringify(e)),this.config=e,this.setSwitchFromConfig()}},{key:"changeLeftbarColor",value:function(t){this.config.leftbar.color=t,this.body.setAttribute("data-leftbar-color",t),this.setSwitchFromConfig()}},{key:"changeLeftbarPosition",value:function(t){this.config.leftbar.position=t,this.body.setAttribute("data-leftbar-position",t),this.setSwitchFromConfig()}},{key:"changeLeftbarSize",value:function(t){this.config.leftbar.size=t,this.body.setAttribute("data-leftbar-size",t),this.setSwitchFromConfig()}},{key:"changeLayoutMode",value:function(t){this.config.layout.mode=t,this.body.setAttribute("data-layout-mode",t),this.setSwitchFromConfig()}},{key:"changeLayoutColor",value:function(t){this.config.layout.color=t,this.body.setAttribute("data-layout-color",t),this.setSwitchFromConfig()}},{key:"changeLayoutSize",value:function(t){this.config.layout.size=t,this.body.setAttribute("data-layout-size",t),this.setSwitchFromConfig()}},{key:"changeTopbarColor",value:function(t){this.config.topbar.color=t,this.body.setAttribute("data-topbar-color",t),this.setSwitchFromConfig()}},{key:"changeSidebarUser",value:function(t){(this.config.sidebar.user=t)?this.body.setAttribute("data-sidebar-user",t):this.body.removeAttribute("data-sidebar-user"),this.setSwitchFromConfig()}},{key:"resetTheme",value:function(){this.config=JSON.parse(JSON.stringify(this.defaultConfig)),this.changeLeftbarColor(this.config.leftbar.color),this.changeLeftbarPosition(this.config.leftbar.position),this.changeLeftbarSize(this.config.leftbar.size),this.changeLayoutColor(this.config.layout.color),this.changeLayoutSize(this.config.layout.size),this.changeLayoutMode(this.config.layout.mode),this.changeTopbarColor(this.config.topbar.color),this.changeSidebarUser(this.config.sidebar.user)}},{key:"initSwitchListener",value:function(){var t,a=this;document.querySelectorAll("input[name=leftbar-color]").forEach(function(e){e.addEventListener("change",function(t){a.changeLeftbarColor(e.value)})}),document.querySelectorAll("input[name=leftbar-size]").forEach(function(e){e.addEventListener("change",function(t){a.changeLeftbarSize(e.value)})}),document.querySelectorAll("input[name=leftbar-position]").forEach(function(e){e.addEventListener("change",function(t){a.changeLeftbarPosition(e.value)})}),document.querySelectorAll("input[name=layout-color]").forEach(function(e){e.addEventListener("change",function(t){a.changeLayoutColor(e.value)})}),document.querySelectorAll("input[name=layout-size]").forEach(function(e){e.addEventListener("change",function(t){a.changeLayoutSize(e.value)})}),document.querySelectorAll("input[name=layout-mode]").forEach(function(e){e.addEventListener("change",function(t){a.changeLayoutMode(e.value)})}),document.querySelectorAll("input[name=topbar-color]").forEach(function(e){e.addEventListener("change",function(t){a.changeTopbarColor(e.value)})}),document.querySelectorAll("input[name=sidebar-user]").forEach(function(e){e.addEventListener("change",function(t){a.changeSidebarUser(e.checked)})}),null!==(t=document.querySelector("#resetBtn"))&&void 0!==t&&t.addEventListener("click",function(t){a.resetTheme()}),null!==(t=document.querySelector(".button-menu-mobile"))&&void 0!==t&&t.addEventListener("click",function(){a.body.classList.toggle("sidebar-enable")})}},{key:"setSwitchFromConfig",value:function(){document.querySelectorAll(".right-bar input[type=checkbox]").forEach(function(t){t.checked=!1});var t,e,a,n,i,o,r,s,l=this.config;l&&(t=document.querySelector("input[type=checkbox][name=leftbar-color][value="+l.leftbar.color+"]"),e=document.querySelector("input[type=checkbox][name=leftbar-size][value="+l.leftbar.size+"]"),a=document.querySelector("input[type=checkbox][name=leftbar-position][value="+l.leftbar.position+"]"),n=document.querySelector("input[type=checkbox][name=layout-color][value="+l.layout.color+"]"),i=document.querySelector("input[type=checkbox][name=layout-size][value="+l.layout.size+"]"),o=document.querySelector("input[type=checkbox][name=layout-mode][value="+l.layout.type+"]"),r=document.querySelector("input[type=checkbox][name=topbar-color][value="+l.topbar.color+"]"),s=document.querySelector("input[type=checkbox][name=sidebar-user]"),t&&(t.checked=!0),e&&(e.checked=!0),a&&(a.checked=!0),n&&(n.checked=!0),i&&(i.checked=!0),o&&(o.checked=!0),r&&(r.checked=!0),s&&"true"===l.sidebar.user.toString()&&(s.checked=!0))}},{key:"init",value:function(){this.initConfig(),this.initSwitchListener()}}]),t}(),Layout=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"init",value:function(){this.themeCustomizer=new ThemeCustomizer,this.themeCustomizer.init(),this.leftSidebar=new LeftSidebar,this.topbar=new Topbar,this.rightSidebar=new RightSidebar(this),this.rightSidebar.init(),this.topbar.init(),this.leftSidebar.init()}}]),t}();window.addEventListener("DOMContentLoaded",function(t){(new Layout).init()});