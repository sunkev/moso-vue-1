webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ripple = function () {
    function Ripple(element, e) {
        _classCallCheck(this, Ripple);

        this.element = element;
        this.ripple = document.createElement('DIV');
        this.ripple.classList.add('ripple');
        this.element.querySelector('.ink-ripple').appendChild(this.ripple);

        this.init(e);
    }

    _createClass(Ripple, [{
        key: 'init',
        value: function init(e) {
            var _this = this;

            var elWidth = this.element.offsetWidth,
                elHeight = this.element.offsetHeight;
            var rippleSize = elWidth < elHeight ? elHeight : elWidth;

            this.ripple.classList.remove('active');

            var boundingBox = this.element.getBoundingClientRect();

            var leftOffset = e.clientX - boundingBox.left - rippleSize / 2;
            var topOffset = e.clientY - boundingBox.top - rippleSize / 2;

            if (this.element.classList.contains('icon-button')) {
                leftOffset = 0;
                topOffset = 0;
            }

            this.ripple.style.width = rippleSize + 'px';
            this.ripple.style.height = rippleSize + 'px';
            this.ripple.style.left = leftOffset + 'px';
            this.ripple.style.top = topOffset + 'px';
            this.ripple.classList.add('active');

            document.addEventListener('mouseup', function () {
                _this.remove();
            });
        }

        /**
         * Remove the ripple
         */

    }, {
        key: 'remove',
        value: function remove() {
            var _this2 = this;

            this.ripple.classList.add('active-out');

            setTimeout(function () {
                _this2.ripple.remove();
            }, 1000);
        }
    }]);

    return Ripple;
}();

/* harmony default export */ __webpack_exports__["a"] = (Ripple);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(71);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_lazy_img__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_lazy_img___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_v_lazy_img__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_profile_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_profile_vue__);
// VUE IMPORTS




// DIRECTIVES
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.directive('ripple', __webpack_require__(8));

// VUE COMPONENTS
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-sidenav', __webpack_require__(9));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-profile-picture', __webpack_require__(12));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-drawer-list', __webpack_require__(15));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-toolbar', __webpack_require__(18));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-project', __webpack_require__(21));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-timeline', __webpack_require__(24));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('timeline-item', __webpack_require__(27));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-profile', __webpack_require__(30));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('profile-item', __webpack_require__(33));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-progressbar', __webpack_require__(36));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-card-cover', __webpack_require__(39));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('moso-card-reveal', __webpack_require__(42));

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('nano-ripple', __webpack_require__(45));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('nano-tabs', __webpack_require__(48));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('nano-tab', __webpack_require__(52));

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('version-badge', __webpack_require__(56));

// V-LAZY-IMG
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_v_lazy_img___default.a);

// VUE-ROUTER
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

// IMPORT FOR FIRST/MOST IMPORTANT COMPONENT, CONST FOR ASYNC LOADING

var resume = __webpack_require__(62);
var portfolio = __webpack_require__(65);
var notfound = __webpack_require__(68);

// ROUTES
var routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_3__views_profile_vue___default.a, name: 'Profile ' }, { path: '/profile', component: __WEBPACK_IMPORTED_MODULE_3__views_profile_vue___default.a, name: 'Profile' }, { path: '/resume', component: resume, name: 'Resume' }, { path: '/portfolio', component: portfolio, name: 'Portfolio' }, { path: '/404', component: notfound, name: '404 - not found' }, { path: '*', redirect: '404' }];

var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
    routes: routes
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    router: router,

    methods: {
        toggleSidenav: function toggleSidenav() {
            this.$refs.sidenav.toggle();
        },
        closeSidenav: function closeSidenav() {
            this.$refs.sidenav.close();
        }
    }
}).$mount('#app');

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){"use strict";function o(e,t,o){e.attachEvent?e.attachEvent("on"+t,o):e.addEventListener(t,o,{capture:!1,passive:!0})}function r(e,t,o){e.classList.remove("lazy-load-error"),e.classList.remove("lazy-load-progress"),e.classList.add("lazy-load-success"),o?e.style.backgroundImage="url('"+t+"')":e.src=t}function s(e){e.classList.remove("lazy-load-error"),e.classList.remove("lazy-load-success"),e.classList.add("lazy-load-progress")}function a(e){e.classList.remove("lazy-load-success"),e.classList.remove("lazy-load-progress"),e.classList.add("lazy-load-error")}Object.defineProperty(t,"__esModule",{value:!0});var n={load_image:function(e,t,r){var s=new Image;o(s,"load",t),o(s,"error",r),s.src=e},install:function(e){e.directive("lazy-load",function(e,t,o){var l=t.value;s(e),n.load_image(l,function(){return r(e,l)},function(){return a(e)})}),e.directive("lazy-load-bg",function(e,t,o){var l=t.value;s(e),n.load_image(l,function(){return r(e,l,!0)},function(){return a(e)})})}};t.default=n}])});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (true) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Ripple_js__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/* harmony default export */ __webpack_exports__["default"] = ({
    inserted: function inserted(el) {
        new RippleContainer(el);
    }
});

var RippleContainer = function () {
    function RippleContainer(element) {
        var _this = this;

        _classCallCheck(this, RippleContainer);

        this.element = element;
        this.ripples = [];

        if (this.element.classList.contains('disabled')) return;

        this.init();

        this.element.addEventListener('mousedown', function (e) {
            _this.create(e);
        });
    }

    _createClass(RippleContainer, [{
        key: 'init',
        value: function init() {
            this.element.innerHTML += '<div class="ink-ripple"></div>';
            this.element.classList.add('has-ripple');
        }
    }, {
        key: 'create',
        value: function create(e) {
            this.ripples.push(new __WEBPACK_IMPORTED_MODULE_0__classes_Ripple_js__["a" /* default */](this.element, e));
        }
    }]);

    return RippleContainer;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(11),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-sidenav/moso-sidenav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-sidenav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-400760b2", Component.options)
  } else {
    hotAPI.reload("data-v-400760b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            sidenavShow: false
        };
    },


    props: {
        sidenavSwipe: Boolean,
        sidenavSwipeThreshold: {
            type: Number,
            default: 15
        },
        sidenavSwipeDistance: {
            type: Number,
            default: 100
        }
    },

    computed: {
        classes: function classes() {
            return this.sidenavShow && 'sidenav-open';
        }
    },

    methods: {
        show: function show() {
            this.open();
        },
        open: function open() {
            document.querySelector('body').classList.add('open-sidenav');
            this.sidenavShow = true;
            this.$el.focus();
            this.$emit('open');
        },
        close: function close() {
            document.querySelector('body').classList.remove('open-sidenav');
            this.sidenavShow = false;
            this.$el.blur();
            this.$emit('close');
        },
        toggle: function toggle() {
            if (this.sidenavShow) {
                this.close();
            } else {
                this.open();
            }
        },
        isHorizontallyInside: function isHorizontallyInside(positionX) {
            return positionX > 0 && positionX < this.mountedRect.left + this.mountedRect.width;
        },
        isVerticallyInside: function isVerticallyInside(positionY) {
            return positionY > 0 && positionY < this.mountedRect.top + this.mountedRect.height;
        },
        isFromStartWhenClosed: function isFromStartWhenClosed(positionX) {
            if (this.sidenavShow) {
                return true;
            }
            return positionX < this.sidenavSwipeThreshold;
        }
    },

    mounted: function mounted() {
        if (!this.sidenavSwipe) {
            return;
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (!this.sidenavSwipe) {
            return;
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "sidenav",
    class: _vm.classes,
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.close($event)
      }
    }
  }, [_c('div', {
    staticClass: "sidenav-content"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "sidenav-backdrop"
    }
  }, [(_vm.sidenavShow) ? _c('div', {
    staticClass: "sidenav-backdrop",
    on: {
      "click": function($event) {
        _vm.close();
      }
    }
  }) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-400760b2", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(14),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-profile-picture/moso-profile-picture.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-profile-picture.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69e02e67", Component.options)
  } else {
    hotAPI.reload("data-v-69e02e67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        image: String
    },

    mounted: function mounted() {}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "profile-picture"
  }, [_c('div', {
    staticClass: "media"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: (_vm.image),
      expression: "image"
    }],
    attrs: {
      "alt": "Morten Sørensen"
    }
  })]), _vm._v(" "), _vm._t("name"), _vm._v(" "), _vm._t("position")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69e02e67", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(17),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-drawer-list/moso-drawer-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-drawer-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48834467", Component.options)
  } else {
    hotAPI.reload("data-v-48834467", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {}
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "drawer-list"
  }, [_c('ul', {
    attrs: {
      "id": "drawerMenu"
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48834467", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(20),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-toolbar/moso-toolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-toolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-562a5ff2", Component.options)
  } else {
    hotAPI.reload("data-v-562a5ff2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        fixed: {
            default: false,
            type: Boolean
        }
    },

    mounted: function mounted() {},


    computed: {
        classes: function classes() {
            return {
                'fixed': this.fixed
            };
        }
    }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "toolbar",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-562a5ff2", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(23),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-project/moso-project.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-project.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d357e72", Component.options)
  } else {
    hotAPI.reload("data-v-3d357e72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        image: {
            type: String
        },

        name: {
            type: String
        },

        link: {
            type: String
        }
    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "project"
  }, [_c('div', {
    staticClass: "project-icon"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: (_vm.image),
      expression: "image"
    }],
    attrs: {
      "alt": _vm.name
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "project-content"
  }, [_c('h3', {
    staticClass: "project-title"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": _vm.link,
      "title": _vm.name,
      "rel": "noopener"
    }
  }, [_vm._v(_vm._s(_vm.link))]), _vm._v(" "), _vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d357e72", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(26),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-timeline/moso-timeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-timeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9eb7ad2e", Component.options)
  } else {
    hotAPI.reload("data-v-9eb7ad2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "timeline"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9eb7ad2e", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(29),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-timeline/moso-timeline-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-timeline-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9391d9b2", Component.options)
  } else {
    hotAPI.reload("data-v-9391d9b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        entry: {
            type: String
        },

        location: {
            type: String
        },

        time: {
            type: String
        }
    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('h3', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.entry))]), _vm._v(" "), _c('div', {
    staticClass: "information"
  }, [(_vm.location) ? _c('span', {
    staticClass: "location"
  }, [_c('img', {
    attrs: {
      "src": "/images/map-marker.svg",
      "alt": ""
    }
  }), _vm._v(" " + _vm._s(_vm.location) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.time))])]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9391d9b2", module.exports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(32),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-profile/moso-profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46966ac7", Component.options)
  } else {
    hotAPI.reload("data-v-46966ac7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        image: {
            type: String
        },

        name: {
            type: String
        },

        position: {
            type: String
        }
    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "profile"
  }, [_c('div', {
    staticClass: "profile-image"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: (_vm.image),
      expression: "image"
    }],
    attrs: {
      "alt": _vm.name
    }
  })]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('h6', [_vm._v(_vm._s(_vm.position))]), _vm._v(" "), _c('div', {
    staticClass: "icon-group"
  }, [_c('ul', [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46966ac7", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(35),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-profile/moso-profile-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-profile-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da2606ee", Component.options)
  } else {
    hotAPI.reload("data-v-da2606ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        link: {
            type: String
        },

        linkClass: {
            type: String
        },

        icon: {
            type: String
        },

        svg: {
            type: String
        },

        title: {
            type: String
        }
    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "button icon-button",
    class: _vm.linkClass,
    attrs: {
      "href": _vm.link,
      "tabindex": "-1",
      "title": _vm.title,
      "rel": "noopener"
    }
  }, [(_vm.svg) ? _c('img', {
    attrs: {
      "src": _vm.svg,
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('i', {
    staticClass: "mdi",
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), _c('nano-ripple')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-da2606ee", module.exports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(38),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-progressbar/moso-progressbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-progressbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25df75e7", Component.options)
  } else {
    hotAPI.reload("data-v-25df75e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        name: {
            type: String
        },

        percentage: {
            type: String
        }

    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progressbar-container"
  }, [_c('div', {
    staticClass: "progressbar-values"
  }, [_c('span', [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.percentage) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "progressbar"
  }, [_c('span', {
    staticClass: "progress",
    style: ('width: ' + _vm.percentage + '%')
  }, [_c('span', {
    staticClass: "thumb"
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25df75e7", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(41),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-card/moso-card-cover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-card-cover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d7c9c31", Component.options)
  } else {
    hotAPI.reload("data-v-7d7c9c31", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        image: {
            type: String
        },

        cardTitle: {
            type: String
        },

        link: {
            type: String
        }
    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-img-cover"
  }, [_c('div', {
    staticClass: "card-img"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: (_vm.image),
      expression: "image"
    }],
    attrs: {
      "alt": _vm.cardTitle
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card-img-cover-content"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('div', {
    staticClass: "card-title",
    attrs: {
      "title": _vm.cardTitle
    }
  }, [_vm._v(_vm._s(_vm.cardTitle))]), _vm._v(" "), _c('a', {
    staticClass: "card-subtitle",
    attrs: {
      "href": _vm.link,
      "title": _vm.cardTitle,
      "rel": "noopener"
    }
  }, [_vm._v(_vm._s(_vm.link))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d7c9c31", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(44),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/moso-card/moso-card-reveal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moso-card-reveal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c402627a", Component.options)
  } else {
    hotAPI.reload("data-v-c402627a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            cardReveal: false
        };
    },


    props: {
        image: {
            type: String
        },

        cardTitle: {
            type: String
        },

        link: {
            type: String
        }
    },

    computed: {
        classes: function classes() {
            return this.cardReveal && 'revealed';
        }
    },

    methods: {
        reveal: function reveal() {
            this.open();
        },
        open: function open() {
            this.$el.classList.add('revealed');
            this.cardReveal = true;
            this.$emit('open');
        },
        close: function close() {
            this.$el.classList.remove('revealed');
            this.cardReveal = false;
            this.$emit('close');
        },
        toggle: function toggle() {
            if (this.cardReveal) {
                this.close();
            } else {
                this.open();
            }
        }
    },

    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card card-reveal"
  }, [_c('div', {
    staticClass: "card-image",
    on: {
      "click": function($event) {
        _vm.toggle();
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: (_vm.image),
      expression: "image"
    }],
    attrs: {
      "alt": _vm.cardTitle
    }
  }), _vm._v(" "), _c('nano-ripple')], 1), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('h2', {
    staticClass: "card-title",
    on: {
      "click": function($event) {
        _vm.toggle();
      }
    }
  }, [_vm._v(_vm._s(_vm.cardTitle))]), _vm._v(" "), _c('p', {
    staticClass: "card-url"
  }, [_c('a', {
    attrs: {
      "href": _vm.link,
      "title": _vm.cardTitle,
      "rel": "noopener"
    }
  }, [_vm._v(_vm._s(_vm.link))])]), _vm._v(" "), _c('div', {
    staticClass: "card-button"
  }, [_c('button', {
    staticClass: "button button--raised button-primary",
    attrs: {
      "aria-label": "Read more"
    },
    on: {
      "click": function($event) {
        _vm.toggle();
      }
    }
  }, [_vm._v("\n                Read more\n                "), _c('nano-ripple')], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-reveal",
    class: _vm.classes
  }, [_c('p', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.cardTitle))]), _vm._v(" "), _c('span', {
    staticClass: "close",
    on: {
      "click": function($event) {
        _vm.close();
      }
    }
  }, [_c('i', {
    staticClass: "mdi mdi-close"
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-description"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c402627a", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(47),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/nano-ripple/nano-ripple.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nano-ripple.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-402e6a9b", Component.options)
  } else {
    hotAPI.reload("data-v-402e6a9b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Ripple_js__ = __webpack_require__(2);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            element: null
        };
    },


    methods: {
        init: function init() {
            this.element.classList.add('has-ripple');
        },
        create: function create(e) {
            this.ripples.push(new __WEBPACK_IMPORTED_MODULE_0__classes_Ripple_js__["a" /* default */](this.element, e));
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.element = this.$el.parentElement;
        this.ripples = [];

        if (this.element.classList.contains('disabled')) return;

        this.init();

        this.element.addEventListener('mousedown', function (e) {
            _this.create(e);
        });
    }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ink-ripple"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-402e6a9b", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(51),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/nano-tabs/nano-tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nano-tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-363300b7", Component.options)
  } else {
    hotAPI.reload("data-v-363300b7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_throttle__ = __webpack_require__(50);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        hashes: {
            default: false
        },

        icon: {
            type: String
        },

        svg: {
            type: String
        },

        fixed: {
            default: false,
            type: Boolean
        },

        transparent: {
            default: false,
            type: Boolean
        }
    },

    data: function data() {
        return {
            tabs: {},
            activeTab: null,
            activeTabNumber: null,
            contentHeight: '0px',
            contentWidth: '0px',
            transitionOff: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.observeElementChanges();
            window.addEventListener('resize', _this.calculateOnResize);

            if (Object.keys(_this.tabs).length && !_this.activeTab) {
                var firstTab = Object.keys(_this.tabs)[0];

                _this.selectTab(_this.tabs[firstTab]);
            }

            _this.calculatePosition();
        });
    },
    beforeDestroy: function beforeDestroy() {
        if (this.parentObserver) {
            this.parentObserver.disconnect();
        }
        window.removeEventListener('resize', this.calculateOnResize);
    },


    computed: {
        tabClasses: function tabClasses() {
            return {
                'transition-off': this.transitionOff,
                'transparent': this.transparent,
                'fixed': this.fixed
            };
        },
        indicatorClasses: function indicatorClasses() {
            var toLeft = this.lastIndicatorNumber > this.activeTabNumber;

            this.lastIndicatorNumber = this.activeTabNumber;

            return {
                'to-right': !toLeft,
                'to-left': toLeft
            };
        }
    },

    methods: {
        observeElementChanges: function observeElementChanges() {
            this.parentObserver = new MutationObserver(Object(__WEBPACK_IMPORTED_MODULE_0__utils_throttle__["a" /* default */])(this.calculateOnWatch, 50));
            this.parentObserver.observe(this.$refs.tabContent, {
                childList: true,
                attributes: true,
                subtree: true
            });
        },
        debounceTransition: function debounceTransition() {
            var _this2 = this;

            window.clearTimeout(this.transitionControl);
            this.transitionControl = window.setTimeout(function () {
                _this2.calculatePosition();
                _this2.transitionOff = false;
            }, 1);
        },
        calculateOnWatch: function calculateOnWatch() {
            this.calculatePosition();
            this.debounceTransition();
        },
        calculateOnResize: function calculateOnResize() {
            this.transitionOff = true;
            this.calculateOnWatch();
        },
        getTabClass: function getTabClass(tab) {
            return {
                'active': this.activeTab && this.activeTab.id && this.activeTab.id === tab.id,
                'disabled': tab.disabled
            };
        },
        registerTab: function registerTab(tab) {
            this.tabs[tab.id] = tab;

            if (tab.selected) {
                this.selectTab(tab);
            }
        },
        selectTab: function selectTab(selectedTab) {
            this.activeTab = selectedTab;
            this.activeTabNumber = this.getTabIndex(selectedTab.id);

            this.calculatePosition();
            this.$emit('change', this.activeTabNumber);
        },
        getTabIndex: function getTabIndex(id) {
            var idList = Object.keys(this.tabs);

            return idList.indexOf(id);
        },
        calculatePosition: function calculatePosition() {
            var _this3 = this;

            window.requestAnimationFrame(function () {
                _this3.calculateIndicatorPosition();
                _this3.calculateTabsWidthAndPosition();
                _this3.calculateContentHeight();
            });
        },
        calculateIndicatorPosition: function calculateIndicatorPosition() {
            if (this.$refs.tabHeader && this.$refs.tabHeader[this.activeTabNumber]) {
                var tabsWidth = this.$el.offsetWidth;
                var activeTab = this.$refs.tabHeader[this.getTabIndex(this.activeTab.id)];
                var left = activeTab.offsetLeft;
                var right = tabsWidth - left - activeTab.offsetWidth;

                this.$refs.indicator.style.left = left + 'px';
                this.$refs.indicator.style.right = right + 'px';
            }
        },
        calculateTabsWidthAndPosition: function calculateTabsWidthAndPosition() {
            var width = this.$el.offsetWidth;
            var index = 0;
            this.contentWidth = width * this.activeTabNumber + 'px';

            for (var tabId in this.tabs) {
                var tab = this.tabs[tabId];
                tab.$el.style.width = width + 'px';
                tab.$el.style.left = width * index + 'px';
                index++;
            }
        },
        calculateContentHeight: function calculateContentHeight() {
            var _this4 = this;

            this.$nextTick(function () {
                if (Object.keys(_this4.tabs).length) {
                    var height = _this4.tabs[_this4.activeTab.id].$el.offsetHeight;

                    _this4.contentHeight = height + 'px';
                }
            });
        }
    }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Throttle.js
var debounce = function debounce(callback, limit) {
  var wait = false;

  return function () {
    if (!wait) {
      callback.call();
      wait = true;

      window.setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tabs",
    class: _vm.tabClasses
  }, [_c('ul', [_vm._l((_vm.tabs), function(tab) {
    return _c('li', {
      ref: "tabHeader",
      refInFor: true,
      class: _vm.getTabClass(tab),
      attrs: {
        "id": tab.id,
        "disabled": tab.disabled
      }
    }, [(_vm.hashes) ? _c('a', {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      attrs: {
        "href": tab.href
      },
      on: {
        "click": function($event) {
          _vm.selectTab(tab)
        }
      }
    }, [(tab.svg) ? _c('svg', {
      attrs: {
        "viewBox": "0 0 24 24"
      },
      domProps: {
        "innerHTML": _vm._s(tab.svg)
      }
    }) : _vm._e(), _vm._v(" "), (tab.icon) ? _c('i', {
      staticClass: "hidden-xs hidden-sm mdi",
      class: tab.icon
    }) : _vm._e(), _vm._v("\n                " + _vm._s(tab.name) + "\n            ")]) : _c('a', {
      directives: [{
        name: "ripple",
        rawName: "v-ripple"
      }],
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.selectTab(tab)
        }
      }
    }, [(tab.svg) ? _c('svg', {
      attrs: {
        "viewBox": "0 0 24 24"
      },
      domProps: {
        "innerHTML": _vm._s(tab.svg)
      }
    }) : _vm._e(), _vm._v(" "), (tab.icon) ? _c('i', {
      staticClass: "hidden-xs hidden-sm mdi",
      class: tab.icon
    }) : _vm._e(), _vm._v("\n                " + _vm._s(tab.name) + "\n            ")])])
  }), _vm._v(" "), _c('span', {
    ref: "indicator",
    staticClass: "tabs-indicator",
    class: _vm.indicatorClasses
  })], 2), _vm._v(" "), _c('div', {
    ref: "tabContent",
    staticClass: "tabs-content",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "tabs-wrapper",
    style: ({
      transform: ("translate3D(-" + _vm.contentWidth + ", 0, 0)")
    })
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-363300b7", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(55),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/nano-tabs/nano-tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nano-tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3f74428", Component.options)
  } else {
    hotAPI.reload("data-v-e3f74428", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getClosestVueParent__ = __webpack_require__(54);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        name: {
            required: true
        },

        selected: {
            default: false
        },

        icon: {
            type: String
        },

        svg: {
            type: String
        }
    },

    data: function data() {
        return {};
    },


    computed: {
        href: function href() {
            return '#' + this.id;
        },
        id: function id() {
            return this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted: function mounted() {
        this.parentTabs = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getClosestVueParent__["a" /* default */])(this.$parent, 'tabs');

        if (!this.parentTabs) {
            throw new Error('You must wrap the nano-tab in a nano-tabs');
        }

        this.parentTabs.registerTab(this);
    }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// getClosestVueParent

var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el) {
    return false;
  }

  if ($parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

/* harmony default export */ __webpack_exports__["a"] = (getClosestVueParent);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e3f74428", module.exports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(58),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/components/version-badge/version-badge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] version-badge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41e96865", Component.options)
  } else {
    hotAPI.reload("data-v-41e96865", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        version: String
    },

    mounted: function mounted() {}
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "version-badge"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.version))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41e96865", module.exports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(61),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/views/profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4915ecc7", Component.options)
  } else {
    hotAPI.reload("data-v-4915ecc7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {}
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "lg-5 xl-4 profile-widgets"
  }, [_c('div', {
    staticClass: "widget"
  }, [_c('div', {
    staticClass: "widget__body"
  }, [_c('moso-profile', {
    attrs: {
      "image": "/images/profile.jpg",
      "name": "Morten Sørensen",
      "position": "Interface Consultant at Netcompany"
    }
  }, [_c('profile-item', {
    attrs: {
      "link": "https://github.com/moso",
      "link-class": "github",
      "svg": "/images/github.svg",
      "title": "GitHub"
    }
  }), _vm._v(" "), _c('profile-item', {
    attrs: {
      "link": "https://codepen.io/moso",
      "link-class": "codepen",
      "svg": "/images/codepen.svg",
      "title": "CodePen"
    }
  }), _vm._v(" "), _c('profile-item', {
    attrs: {
      "link": "https://facebook.com/moso.profil",
      "link-class": "facebook",
      "svg": "/images/facebook.svg",
      "title": "Facebook"
    }
  }), _vm._v(" "), _c('profile-item', {
    attrs: {
      "link": "https://twitter.com/mosodotio",
      "link-class": "twitter",
      "svg": "/images/twitter.svg",
      "title": "Twitter"
    }
  }), _vm._v(" "), _c('profile-item', {
    attrs: {
      "link": "https://dk.linkedin.com/in/mosoio",
      "link-class": "linkedin",
      "svg": "/images/linkedin.svg",
      "title": "LinkedIn"
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "widget"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "widget__body"
  }, [_c('moso-progressbar', {
    attrs: {
      "name": "HTML5/CSS3/Sass",
      "percentage": "100"
    }
  }), _vm._v(" "), _c('moso-progressbar', {
    attrs: {
      "name": "JS (jQuery/Vue)",
      "percentage": "75"
    }
  }), _vm._v(" "), _c('moso-progressbar', {
    attrs: {
      "name": "PHP",
      "percentage": "70"
    }
  }), _vm._v(" "), _c('moso-progressbar', {
    attrs: {
      "name": "CMS (WordPress)",
      "percentage": "80"
    }
  }), _vm._v(" "), _c('moso-progressbar', {
    attrs: {
      "name": "Graphics (Photoshop/Illustrator)",
      "percentage": "90"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "button button-primary button--raised",
    attrs: {
      "href": "/files/morten-sorensen-cv-2017.pdf",
      "title": "Download CV (da)",
      "rel": "noopener"
    }
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#ffffff",
      "d": "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"
    }
  })]), _vm._v("\n                        Download CV (da)\n                        "), _c('nano-ripple')], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "lg-7 xl-8"
  }, [_c('div', {
    staticClass: "widget tabs-widget"
  }, [_c('nano-tabs', {
    attrs: {
      "transparent": "",
      "fixed": ""
    }
  }, [_c('nano-tab', {
    attrs: {
      "svg": "<path d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z' />",
      "name": "About"
    }
  }, [_c('div', {
    staticClass: "tab-content bio"
  }, [_c('h4', [_vm._v("Bio")]), _vm._v(" "), _c('p', [_vm._v("With 15+ years of experience with making websites, I see myself as a veteran. I often tell people around me that I'm from the generation that designed websites for IE6 in XHTML Strict, which, for the unfamiliar, was utterly horrible. It's something we can all laugh about now but back then, it was the challenge that drove us.")]), _vm._v(" "), _c('p', [_vm._v("That same challenge is still driving me today but in a different way. I could have built this website in any ordinary way, but I've decided to use "), _c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "title": "Vue.js",
      "rel": "noopener"
    }
  }, [_vm._v("Vue.js")]), _vm._v("-components, not to make it harder but to use the technology I have in front of me. I love using new technologies and (still) try my best to keep up with the latest trends. That's why this site is made with Google's "), _c('a', {
    attrs: {
      "href": "https://material.google.com",
      "title": "Material Design",
      "rel": "noopener"
    }
  }, [_vm._v("Material Design")]), _vm._v(".")]), _vm._v(" "), _c('p', [_vm._v("When not coding at work, "), _c('a', {
    attrs: {
      "href": "https://krve.io",
      "title": "@krve",
      "rel": "noopener"
    }
  }, [_vm._v("@krve")]), _vm._v(" and I have a project called "), _c('a', {
    attrs: {
      "href": "https://getnano.io",
      "title": "Nano",
      "rel": "noopener"
    }
  }, [_vm._v("Nano")]), _vm._v(". While there's nothing on that page but a logo, we're working creating a full-blown UI web-framework based on "), _c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "title": "Vue.js",
      "rel": "noopener"
    }
  }, [_vm._v("Vue.js")]), _vm._v("-components and "), _c('a', {
    attrs: {
      "href": "https://sass-lang.org",
      "title": "Sass",
      "rel": "noopener"
    }
  }, [_vm._v("Sass")]), _vm._v(". We're not quite finished yet but if you're interested, we have a dev-branch on "), _c('a', {
    attrs: {
      "href": "https://github.com/getnano/nano-framework/tree/dev",
      "title": "GitHub",
      "rel": "noopener"
    }
  }, [_vm._v("GitHub")]), _vm._v(" that you can check out and follow.\n\n                            ")]), _c('p', [_vm._v("When I'm not building webexperiences, I love spending time with my family. I also have a hobby where I activate small computers, such as the two Raspberry Pi 3's I have, where one the family's media center, and is collecting data from my weatherstation, the other acts as my personal cloudstorage, an ODROID C2 that acts as my main server for various projects and services, and a C.H.I.P. that runs a tor relay.")])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content tab-content--no-padding personal-information"
  }, [_c('h4', [_vm._v("Personal information")]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Name:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_vm._v("Morten Sørensen")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Age:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_vm._v("33")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Position:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_vm._v("Interface Consultant")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Nationality:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_vm._v("Danish")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Location:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_vm._v("Vammen, Denmark")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Web:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_c('a', {
    attrs: {
      "href": "https://moso.io",
      "title": "https://moso.io"
    }
  }, [_vm._v("https://moso.io")])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content tab-content--no-padding contact-information"
  }, [_c('h4', [_vm._v("Contact information")]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("E-mail:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_c('a', {
    attrs: {
      "href": "mailto:morten@moso.io",
      "title": "morten@moso.io"
    }
  }, [_vm._v("morten@moso.io")])])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Phone:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_vm._v(" ")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "column-item column-item--left"
  }, [_vm._v("Social:")]), _vm._v(" "), _c('div', {
    staticClass: "column-item column-item--right"
  }, [_c('ul', {
    staticClass: "list list--inline list--social"
  }, [_c('li', [_c('a', {
    staticClass: "button icon-button icon-button--small",
    attrs: {
      "href": "https://github.com/moso",
      "title": "GitHub",
      "rel": "noopener"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/github.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('nano-ripple')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "button icon-button icon-button--small",
    attrs: {
      "href": "https://codepen.io/moso",
      "title": "CodePen",
      "rel": "noopener"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/codepen.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('nano-ripple')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "button icon-button icon-button--small facebook",
    attrs: {
      "href": "https://facebook.com/moso.profil",
      "title": "Facebook",
      "rel": "noopener"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/facebook.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('nano-ripple')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "button icon-button icon-button--small twitter",
    attrs: {
      "href": "https://twitter.com/mosodotio",
      "title": "Twitter",
      "rel": "noopener"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/twitter.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('nano-ripple')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "button icon-button icon-button--small linkedin",
    attrs: {
      "href": "https://dk.linkedin.com/in/mosoio",
      "title": "LinkedIn",
      "rel": "noopener"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/linkedin.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('nano-ripple')], 1)])])])])])]), _vm._v(" "), _c('nano-tab', {
    attrs: {
      "svg": "<path d='M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z' />",
      "name": "Projects"
    }
  }, [_c('div', {
    staticClass: "tab-content projects"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "md-6"
  }, [_c('moso-project', {
    attrs: {
      "image": "/images/assets/nano-logo.png",
      "name": "Nano",
      "link": "https://getnano.io"
    }
  }, [_c('p', [_c('strong', [_vm._v("Flex")]), _vm._v("ible, mobile-first and responsive, front-end framework made with custom-made "), _c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "title": "Vue.js",
      "rel": "noopener"
    }
  }, [_vm._v("Vue.js")]), _vm._v("-components and "), _c('a', {
    attrs: {
      "href": "https://sass-lang",
      "title": "Sass",
      "rel": "noopener"
    }
  }, [_vm._v("Sass")]), _vm._v(".")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6"
  }, [_c('moso-project', {
    attrs: {
      "image": "/images/assets/3up-logo.png",
      "name": "3up CDN",
      "link": "https://cdn.3up.dk"
    }
  }, [_c('p', [_vm._v("A fast, global "), _c('a', {
    attrs: {
      "href": "https://en.wikipedia.org/wiki/Content_delivery_network",
      "title": "content delivery network",
      "rel": "noopener"
    }
  }, [_vm._v("content delivery network")]), _vm._v(" for stuff that is published to npm. 3up is built upon FOSS technologies from "), _c('a', {
    attrs: {
      "href": "https://unpkg.com",
      "title": "unpkg",
      "rel": "noopener"
    }
  }, [_vm._v("unpkg")]), _vm._v(" and works by caching the npm packages on their permanent URLs.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6"
  }, [_c('moso-project', {
    attrs: {
      "image": "/images/assets/flexgrid-logo.png",
      "name": "Flexgrid",
      "link": "https://flexgrid.co"
    }
  }, [_c('p', [_vm._v("A simple grid based on "), _c('a', {
    attrs: {
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
      "title": "flexbox",
      "rel": "noopener"
    }
  }, [_vm._v("flexbox")]), _vm._v(" layout. Flexgrid is an integral part of the "), _c('a', {
    attrs: {
      "href": "https://getnano.io",
      "title": "Nano",
      "rel": "noopener"
    }
  }, [_vm._v("Nano")]), _vm._v(" framework, and, if not modified, uses "), _c('a', {
    attrs: {
      "href": "https://getbootstrap.com",
      "title": "Bootstrap",
      "rel": "noopener"
    }
  }, [_vm._v("Bootstrap")]), _vm._v("'s rigid ruleset.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6"
  }, [_c('moso-project', {
    attrs: {
      "image": "/images/assets/shade-theme.png",
      "name": "Shade Ghost theme",
      "link": "https://github.com/moso/shade-ghost-theme"
    }
  }, [_c('p', [_vm._v("Theme made for my "), _c('a', {
    attrs: {
      "href": "https://ghost.moso.io",
      "title": "Ghost"
    }
  }, [_vm._v("Ghost")]), _vm._v(" blog. Built with Bootstrap 4 and flex, and available at the "), _c('a', {
    attrs: {
      "href": "http://marketplace.ghost.org/themes/free",
      "title": "Ghost market place",
      "rel": "noopener"
    }
  }, [_vm._v("Ghost market place")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "https://github.com/moso/shade-ghost-theme",
      "title": "GitHub",
      "rel": "noopener"
    }
  }, [_vm._v("GitHub")]), _vm._v(".")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6"
  }, [_c('moso-project', {
    attrs: {
      "image": "/images/assets/hyper-logo.png",
      "name": "hyper-arc-dark-controls",
      "link": "https://github.com/moso/hyper-arc-dark-controls"
    }
  }, [_c('p', [_vm._v("Pretty window controls from the Arc Dark theme for the "), _c('a', {
    attrs: {
      "href": "https://hyper.is",
      "title": "Hyper",
      "rel": "noopener"
    }
  }, [_vm._v("Hyper")]), _vm._v(" terminal.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6"
  }, [_c('moso-project', {
    attrs: {
      "image": "/images/assets/hyper-logo.png",
      "name": "hyper-dark-scrollbar",
      "link": "https://github.com/moso/hyper-dark-scrollbar"
    }
  }, [_c('p', [_vm._v("Sleek scrollbar-replacement for the "), _c('a', {
    attrs: {
      "href": "https://hyper.is",
      "title": "Hyper",
      "rel": "noopener"
    }
  }, [_vm._v("Hyper")]), _vm._v(" terminal, replacing the clonky standard scrollbar with a pretty, modern one.")])])], 1)])])])]), _vm._v(" "), _c('nano-tab', {
    staticClass: "demo",
    attrs: {
      "svg": "<path d='M19.45,13.29L17.5,12L19.45,10.71M12.77,18.78V15.17L16.13,12.93L18.83,14.74M12,13.83L9.26,12L12,10.17L14.74,12M11.23,18.78L5.17,14.74L7.87,12.93L11.23,15.17M4.55,10.71L6.5,12L4.55,13.29M11.23,5.22V8.83L7.87,11.07L5.17,9.26M12.77,5.22L18.83,9.26L16.13,11.07L12.77,8.83M21,9.16C21,9.15 21,9.13 21,9.12C21,9.1 21,9.08 20.97,9.06C20.97,9.05 20.97,9.03 20.96,9C20.96,9 20.95,9 20.94,8.96C20.94,8.95 20.93,8.94 20.92,8.93C20.92,8.91 20.91,8.89 20.9,8.88C20.89,8.86 20.88,8.85 20.88,8.84C20.87,8.82 20.85,8.81 20.84,8.79C20.83,8.78 20.83,8.77 20.82,8.76A0.04,0.04 0 0,0 20.78,8.72C20.77,8.71 20.76,8.7 20.75,8.69C20.73,8.67 20.72,8.66 20.7,8.65C20.69,8.64 20.68,8.63 20.67,8.62C20.66,8.62 20.66,8.62 20.66,8.61L12.43,3.13C12.17,2.96 11.83,2.96 11.57,3.13L3.34,8.61C3.34,8.62 3.34,8.62 3.33,8.62C3.32,8.63 3.31,8.64 3.3,8.65C3.28,8.66 3.27,8.67 3.25,8.69C3.24,8.7 3.23,8.71 3.22,8.72C3.21,8.73 3.2,8.74 3.18,8.76C3.17,8.77 3.17,8.78 3.16,8.79C3.15,8.81 3.13,8.82 3.12,8.84C3.12,8.85 3.11,8.86 3.1,8.88C3.09,8.89 3.08,8.91 3.08,8.93C3.07,8.94 3.06,8.95 3.06,8.96C3.05,9 3.05,9 3.04,9C3.03,9.03 3.03,9.05 3.03,9.06C3,9.08 3,9.1 3,9.12C3,9.13 3,9.15 3,9.16C3,9.19 3,9.22 3,9.26V14.74C3,14.78 3,14.81 3,14.84C3,14.85 3,14.87 3,14.88C3,14.9 3,14.92 3.03,14.94C3.03,14.95 3.03,14.97 3.04,15C3.05,15 3.05,15 3.06,15.04C3.06,15.05 3.07,15.06 3.08,15.07C3.08,15.09 3.09,15.11 3.1,15.12C3.11,15.14 3.12,15.15 3.12,15.16C3.13,15.18 3.15,15.19 3.16,15.21C3.17,15.22 3.17,15.23 3.18,15.24C3.2,15.25 3.21,15.27 3.22,15.28C3.23,15.29 3.24,15.3 3.25,15.31C3.27,15.33 3.28,15.34 3.3,15.35C3.31,15.36 3.32,15.37 3.33,15.38C3.34,15.38 3.34,15.38 3.34,15.39L11.57,20.87C11.7,20.96 11.85,21 12,21C12.15,21 12.3,20.96 12.43,20.87L20.66,15.39C20.66,15.38 20.66,15.38 20.67,15.38C20.68,15.37 20.69,15.36 20.7,15.35C20.72,15.34 20.73,15.33 20.75,15.31C20.76,15.3 20.77,15.29 20.78,15.28C20.79,15.27 20.8,15.25 20.82,15.24C20.83,15.23 20.83,15.22 20.84,15.21C20.85,15.19 20.87,15.18 20.88,15.16C20.88,15.15 20.89,15.14 20.9,15.12C20.91,15.11 20.92,15.09 20.92,15.07C20.93,15.06 20.94,15.05 20.94,15.04C20.95,15 20.96,15 20.96,15C20.97,14.97 20.97,14.95 20.97,14.94C21,14.92 21,14.9 21,14.88C21,14.87 21,14.85 21,14.84C21,14.81 21,14.78 21,14.74V9.26C21,9.22 21,9.19 21,9.16Z' />",
      "name": "Demos"
    }
  }, [_c('div', {
    staticClass: "tab-content demo-content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "md-6 xl-4"
  }, [_c('moso-card-cover', {
    attrs: {
      "image": "/images/assets/demos/collections.jpg",
      "card-title": "Collection with Bootstrap Collapse",
      "link": "https://cdpn.io/JKGGBX"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6 xl-4"
  }, [_c('moso-card-cover', {
    attrs: {
      "image": "/images/assets/demos/faq-example.jpg",
      "card-title": "Bootstrap FAQ Example",
      "link": "https://cdpn.io/vKGxMx"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6 xl-4"
  }, [_c('moso-card-cover', {
    attrs: {
      "image": "/images/assets/demos/pricing-tables.jpg",
      "card-title": "Material Design Pricing Tables",
      "link": "https://cdpn.io/xZyGPj"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6 xl-4"
  }, [_c('moso-card-cover', {
    attrs: {
      "image": "/images/assets/demos/timeline.jpg",
      "card-title": "Simple Timeline",
      "link": "https://cdpn.io/MpPRgg"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6 xl-4"
  }, [_c('moso-card-cover', {
    attrs: {
      "image": "/images/assets/demos/floating-labels.jpg",
      "card-title": "Material Design Floating Labels",
      "link": "https://cdpn.io/rVdbXB"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "md-6 xl-4"
  }, [_c('moso-card-cover', {
    attrs: {
      "image": "/images/assets/demos/progress-switches.jpg",
      "card-title": "Material Design Progress \"Switches\"",
      "link": "https://cdpn.io/evQxRE"
    }
  })], 1)])])])], 1)], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "widget__header"
  }, [_c('h3', {
    staticClass: "title"
  }, [_c('img', {
    attrs: {
      "src": "/images/plus-one.svg",
      "alt": ""
    }
  }), _vm._v(" Skills")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4915ecc7", module.exports)
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(64),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/views/resume.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] resume.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c9e367f", Component.options)
  } else {
    hotAPI.reload("data-v-5c9e367f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {}
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-fluid resume"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "lg-6"
  }, [_c('div', {
    staticClass: "widget"
  }, [_c('div', {
    staticClass: "widget__header"
  }, [_c('h3', {
    staticClass: "title"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#000000",
      "fill-opacity": "0.87",
      "d": "M14,6H10V4H14M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z"
    }
  })]), _vm._v("\n                        Experience\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "widget__body"
  }, [_c('moso-timeline', [_c('timeline-item', {
    attrs: {
      "entry": "Interface Consultant",
      "location": "Netcompany A/S",
      "time": "Oct, 2017 -"
    }
  }, [_c('p', [_vm._v("Development and consultancy on front-end- and UI design of larger, webbased projects for both the private- and the public sector.")])]), _vm._v(" "), _c('timeline-item', {
    attrs: {
      "entry": "Lead Front-End Developer",
      "location": "Indexed",
      "time": "Apr, 2017 - Oct, 2017"
    }
  }, [_c('p', [_vm._v("Development and design of responsive, mobile-friendly websites and webshops - mostly WordPress, with Bootstrap and Sass/CSS3 as front-end - now with much more responsibility and freedom of expression. Development of small plugins and custom things and bits for WordPress based on customer demands - all with version control (Git), of course. Conversion of design (typically a PSD) into real front-end. Serveradministration (Debian/Ubuntu).")])]), _vm._v(" "), _c('timeline-item', {
    attrs: {
      "entry": "Front-End Developer",
      "location": "Eyeforce ApS",
      "time": "Apr, 2015 - Mar, 2017"
    }
  }, [_c('p', [_vm._v("Development and design of responsive, mobile-friendly websites, webshops, and Android apps, with Bootstrap and Sass/CSS3 as front-end, and Laravel as backend. Front-end design for small and large Laravel-systems, all with version control (Git), of course. Conversion of design (typically a PSD) into real front-end. Development and design of catalogues and brochures for print. Graphic design of logos, og cropping/adjusting of misc web-elements to, eg, Facebook. Serveradministration (Debian/Ubuntu).")])]), _vm._v(" "), _c('timeline-item', {
    attrs: {
      "entry": "Freelance Webdeveloper",
      "location": "3up",
      "time": "Jan, 2014 - Apr, 2015"
    }
  }, [_c('p', [_vm._v("I started my own company to pick up experience during my education as Webintegrator. During that time I got to work with optimization of webshops, and redesigning logos and social media buttons to fasten up the website.")])])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "lg-6"
  }, [_c('div', {
    staticClass: "widget"
  }, [_c('div', {
    staticClass: "widget__header"
  }, [_c('h3', {
    staticClass: "title"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#000000",
      "fill-opacity": "0.87",
      "d": "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
    }
  })]), _vm._v("\n                        Education\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "widget__body"
  }, [_c('moso-timeline', [_c('timeline-item', {
    attrs: {
      "entry": "Webintegrator",
      "location": "Mercantec",
      "time": "Mar, 2016"
    }
  }, [_c('p', [_vm._v("In 2016 I passed the Webintegrator exam by making a project that looked a bit like Stack Overflow (that was actually in the assignment), just with a dash of Material Design.")])]), _vm._v(" "), _c('timeline-item', {
    attrs: {
      "entry": "IT-Supporter",
      "location": "Mercantec",
      "time": "Sep, 2012"
    }
  }, [_c('p', [_vm._v("In 2012 I passed the IT-Supporter exam by doing a bit of troubleshooting on an exam-machine, and telling the examiners how much I knew about group policies and heritance. They told me I should have told them about this magical thing called a Raspberry Pi, that I had set up as a small webserver integrated perfectly with Active Directory. But I thought it was too simple, and since it wasn't in the assignment, I thought I'd fail if I did. Oh well...")])]), _vm._v(" "), _c('timeline-item', {
    attrs: {
      "entry": "CCNA",
      "location": "Mercantec",
      "time": "Sep, 2012"
    }
  }, [_c('p', [_vm._v("As part of the IT-Supporter exam, I passed the CCNA exam with a final score of 82.6.")])])], 1)], 1)])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c9e367f", module.exports)
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(67),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/views/portfolio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] portfolio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f8f5134", Component.options)
  } else {
    hotAPI.reload("data-v-9f8f5134", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {}
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row portfolio"
  }, [_c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/boligadmin.jpg",
      "card-title": "Boligadmin",
      "link": "https://boligadmin.com"
    }
  }, [_c('p', [_vm._v("Administration, including a landingpage built with "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(", and an app that handles, eg, landlord/tenant contracts, as well as a large administration part for landlords and associations.")]), _vm._v(" "), _c('p', [_vm._v("The administration part is built with "), _c('a', {
    attrs: {
      "href": "https://www.w3schools.com/css/css3_flexbox.asp"
    }
  }, [_vm._v("Flexbox")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "https://material.google.com"
    }
  }, [_vm._v("Material Design")]), _vm._v(".")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/vkons.jpg",
      "card-title": "Vestergaard Konstruktion",
      "link": "http://vkons.dk"
    }
  }, [_c('p', [_vm._v("Website built for a construction company, showing, eg, individual house-types, aswell as inspiration sections.")]), _vm._v(" "), _c('p', [_vm._v("Built with "), _c('a', {
    attrs: {
      "href": "https://laravel.com"
    }
  }, [_vm._v("Laravel")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(", and special-designed elements.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/boligstart.jpg",
      "card-title": "Boligstart",
      "link": "http://boligstart.dk"
    }
  }, [_c('p', [_vm._v("Resident portal with user registration, house- and news view, and specially designed partner-pages. A unique backend administration was designed that makes it easy to handle statistics on everything from buildings and tenants, to banners and other different areas.")]), _vm._v(" "), _c('p', [_vm._v("Built with "), _c('a', {
    attrs: {
      "href": "https://laravel.com"
    }
  }, [_vm._v("Laravel")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(".")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/facet.jpg",
      "card-title": "Facet Herning",
      "link": "http://facet-herning.dk"
    }
  }, [_c('p', [_vm._v("Jewelry store website built with "), _c('a', {
    attrs: {
      "href": "https://laravel.com"
    }
  }, [_vm._v("Laravel")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(".")]), _vm._v(" "), _c('p', [_vm._v("Every part of the site is a section that is inserted in the CMS, and can be pulled out and plugged into another Laravel site.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/scratcher.jpg",
      "card-title": "Scratcher",
      "link": "https://scratcher.dk"
    }
  }, [_c('p', [_vm._v("Landingpage for a company that works with selling online scratching card campaigns for businesses as marketing.")]), _vm._v(" "), _c('p', [_vm._v("Built with "), _c('a', {
    attrs: {
      "href": "https://laravel.com"
    }
  }, [_vm._v("Laravel")]), _vm._v(" sections, "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(", and specially designed Flexbox elements.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/viborggulvforum.jpg",
      "card-title": "Viborg Gulvforum",
      "link": "http://viborggulvforum.dk"
    }
  }, [_c('p', [_vm._v("Website for a flooring company, displaying their product catalog, and product view.")]), _vm._v(" "), _c('p', [_vm._v("Built with "), _c('a', {
    attrs: {
      "href": "https://laravel.com"
    }
  }, [_vm._v("Laravel")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(", and a few specially designed elements.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/rush.jpg",
      "card-title": "Rush Danmark",
      "link": "https://rushdanmark.dk"
    }
  }, [_c('p', [_vm._v("WordPress theme for the Danish branch of the popular trampoline park. Built completely from scratch, as the customer wanted something unique.")]), _vm._v(" "), _c('p', [_vm._v("Built with "), _c('a', {
    attrs: {
      "href": "http://getbootstrap.com"
    }
  }, [_vm._v("Bootstrap")]), _vm._v(" for responsiveness, a few Flexbox elements, and the sourcecode is bundled with "), _c('a', {
    attrs: {
      "href": "https://webpackjs.org"
    }
  }, [_vm._v("webpack")]), _vm._v(".")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sm-12 md-6 lg-6 xl-3"
  }, [_c('moso-card-reveal', {
    attrs: {
      "image": "/images/assets/portfolio/3up.jpg",
      "card-title": "3up CDN",
      "link": "https://cdn.3up.dk"
    }
  }, [_c('p', [_vm._v("3up CDN is a "), _c('a', {
    attrs: {
      "href": "http://www.symkat.com/cookieless-domains"
    }
  }, [_vm._v("cookieless")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://en.wikipedia.org/wiki/Content_delivery_network"
    }
  }, [_vm._v("content delivery network")]), _vm._v(" that handles static content. However, 3up only caches URL's from "), _c('a', {
    attrs: {
      "href": "https://npmjs.org"
    }
  }, [_vm._v("NPM")]), _vm._v(", and then instructs the browser to cache the content. We support tags and versions, like \""), _c('em', [_vm._v("3.0.0")]), _vm._v("\" or \""), _c('em', [_vm._v("latest")]), _vm._v("\", as well as json-ified lists")]), _vm._v(" "), _c('p', [_vm._v("3up is based on "), _c('a', {
    attrs: {
      "href": "https://unpkg.com"
    }
  }, [_vm._v("unpkg")]), _vm._v("'s "), _c('a', {
    attrs: {
      "href": "http://expressjs.com/"
    }
  }, [_vm._v("expressjs")]), _vm._v("-server with modifications, and the front-end is built with "), _c('a', {
    attrs: {
      "href": "https://v4-alpha.getbootstrap.com/"
    }
  }, [_vm._v("Bootstrap 4")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "https://vuejs.org"
    }
  }, [_vm._v("Vue.js")]), _vm._v(".")])])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9f8f5134", module.exports)
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(70),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/morten/Code/3up/moso-vue/src/js/views/notfound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] notfound.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e987f61", Component.options)
  } else {
    hotAPI.reload("data-v-2e987f61", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "md-8 md-offset-2"
  }, [_c('div', {
    staticClass: "not-found"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h1', [_vm._v("404")]), _vm._v(" "), _c('p', [_vm._v("It looks like your found a")]), _vm._v(" "), _c('h2', [_vm._v("dead link")]), _vm._v(" "), _c('img', {
    staticClass: "link-image",
    attrs: {
      "src": "/images/assets/dead_link.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Nevertheless, you can always "), _c('a', {
    attrs: {
      "href": "javascript:history.back()",
      "title": "go back",
      "rel": "noopener"
    }
  }, [_vm._v("go back")]), _vm._v(" to where you came from, or go to the "), _c('a', {
    attrs: {
      "href": "/",
      "title": "front page",
      "rel": "noopener"
    }
  }, [_vm._v("front page")]), _vm._v(".")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e987f61", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[3]);