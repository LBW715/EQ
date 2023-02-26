if (typeof browser === "undefined") {
    var browser = chrome;
}
(function(e) {
    function t(t) {
        for (var i, l, r = t[0], o = t[1], A = t[2], d = 0, g = []; d < r.length; d++)
            l = r[d],
            Object.prototype.hasOwnProperty.call(a, l) && a[l] && g.push(a[l][0]),
            a[l] = 0;
        for (i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
        c && c(t);
        while (g.length)
            g.shift()();
        return n.push.apply(n, A || []),
        s()
    }
    function s() {
        for (var e, t = 0; t < n.length; t++) {
            for (var s = n[t], i = !0, r = 1; r < s.length; r++) {
                var o = s[r];
                0 !== a[o] && (i = !1)
            }
            i && (n.splice(t--, 1),
            e = l(l.s = s[0]))
        }
        return e
    }
    var i = {}
      , a = {
        app: 0
    }
      , n = [];
    function l(t) {
        if (i[t])
            return i[t].exports;
        var s = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, l),
        s.l = !0,
        s.exports
    }
    l.m = e,
    l.c = i,
    l.d = function(e, t, s) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }
    ,
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var s = Object.create(null);
        if (l.r(s),
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                l.d(s, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return s
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , o = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var A = 0; A < r.length; A++)
        t(r[A]);
    var c = o;
    n.push([0, "chunk-vendors"]),
    s()
}
)({
    0: function(e, t, s) {
        e.exports = s("56d7")
    },
    1499: function(e, t, s) {},
    "272f": function(e, t, s) {
        "use strict";
        var i = s("bf51")
          , a = s.n(i);
        a.a
    },
    "56d7": function(e, t, s) {
        "use strict";
        s.r(t);
        var i = s("2b0e")
          , a = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                attrs: {
                    id: "app"
                }
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col align-center section dail-section"
            }, [s("div", {
                staticClass: "col align-center dial-wrapper"
            }, [s("div", {
                staticClass: "dial-label"
            }, [e._v("Freq")]), s("Dial", {
                attrs: {
                    size: e.dialSize,
                    value: e.freqValue,
                    min: 0,
                    max: 1,
                    disabled: e.freqDisabled,
                    "wheel-sensitivity": e.settings.sensitivity
                },
                on: {
                    change: e.freqDialHandler
                }
            }), s("NumberEditLabel", {
                attrs: {
                    value: e.fixedFrequency,
                    label: e.freqLabel,
                    min: 10,
                    max: e.nyquist,
                    disabled: e.freqDisabled
                },
                on: {
                    change: e.freqInputHandler
                }
            })], 1), s("div", {
                staticClass: "col align-center dial-wrapper"
            }, [s("div", {
                staticClass: "dial-label"
            }, [e._v("Gain")]), s("div", {
                staticClass: "zeroer",
                class: {
                    disabled: e.gainDisabled
                },
                on: {
                    click: function(t) {
                        e.gainDisabled ? e.$noOp : e.gainDialHandler(0)
                    }
                }
            }, [s("i", {
                staticClass: "eq8 arrow_drop_down zeroer"
            })]), s("Dial", {
                attrs: {
                    size: e.dialSize,
                    value: e.gainValue,
                    min: -20,
                    max: 20,
                    disabled: e.gainDisabled,
                    "wheel-sensitivity": e.settings.sensitivity
                },
                on: {
                    change: e.gainDialHandler
                }
            }), s("NumberEditLabel", {
                attrs: {
                    value: e.gainValue,
                    label: e.toFixed(e.gainValue) + " dB",
                    min: -20,
                    max: 20,
                    disabled: e.gainDisabled
                },
                on: {
                    change: e.gainDialHandler
                }
            })], 1), s("div", {
                staticClass: "col align-center dial-wrapper"
            }, [s("div", {
                staticClass: "dial-label"
            }, [e._v("Q")]), s("Dial", {
                attrs: {
                    size: e.dialSize,
                    value: e.qValue,
                    min: 0,
                    max: 10,
                    disabled: e.qDisabled,
                    "wheel-sensitivity": e.settings.sensitivity
                },
                on: {
                    change: e.qDialHandler
                }
            }), s("NumberEditLabel", {
                attrs: {
                    value: e.qValue,
                    label: e.toFixed(e.qValue),
                    min: 0,
                    max: 10,
                    disabled: e.qDisabled
                },
                on: {
                    change: e.qDialHandler
                }
            })], 1)]), s("div", {
                staticClass: "col"
            }, [s("FrequencyResponsePlot", {
                attrs: {
                    disabled: !e.eqEnabled,
                    filters: e.frFilters,
                    context: e.frAudioContext,
                    "freq-start": e.freqStart,
                    "active-node": e.selectedFilter ? e.selectedFilter.id : null,
                    "wheel-sensitivity": e.settings.sensitivity
                },
                on: {
                    "handle-selected": e.handleSelected,
                    "filter-changed": e.frFilterChanged
                }
            }), s("div", {
                staticClass: "grow row"
            }, e._l(e.frFilters, (function(t) {
                return s("div", {
                    key: t.id,
                    staticClass: "section grow col align-center justify-center",
                    class: {
                        selected: e.selectedFilter && t.id === e.selectedFilter.id,
                        selectable: e.eqEnabled && t.enabled
                    },
                    on: {
                        click: function(s) {
                            return e.selectFilter(t)
                        }
                    }
                }, [s("Choose", {
                    attrs: {
                        options: e.filterOptions,
                        selected: e.filterTypeForFilter(t),
                        disabled: !e.eqEnabled,
                        direction: "up"
                    },
                    on: {
                        change: function(s) {
                            var i = arguments.length
                              , a = Array(i);
                            while (i--)
                                a[i] = arguments[i];
                            return e.changeFilterType.apply(void 0, [t].concat(a))
                        }
                    }
                }), s("div", {
                    staticClass: "grow row align-center justify-end"
                }, [s("Checkbox", {
                    staticClass: "filter-enable-checkbox",
                    attrs: {
                        value: t.enabled,
                        disabled: !e.eqEnabled
                    },
                    on: {
                        input: function(s) {
                            return e.toggleFilterEnabled(t)
                        }
                    }
                }), s("span", {
                    staticClass: "no-select"
                }, [e._v(e._s(t.id))])], 1)], 1)
            }
            )), 0)], 1), s("div", {
                staticClass: "col section justify-space-between"
            }, [s("div", {
                staticClass: "col align-center mb3"
            }, [s("div", {
                staticClass: "master-enable",
                attrs: {
                    title: "Enable/Disable"
                },
                on: {
                    click: e.toggleMasterEnabled
                }
            }, [s("i", {
                staticClass: "eq8 power_settings_new",
                class: {
                    enabled: e.eqEnabled
                }
            })])]), s("div", {
                staticClass: "col justify-center align-center"
            }, [s("i", {
                staticClass: "eq8 save settings-btn",
                attrs: {
                    title: "Save As Preset"
                },
                on: {
                    click: function(t) {
                        e.savePresetOpen = !0
                    }
                }
            })]), s("div", {
                staticClass: "col justify-center align-center"
            }, [s("i", {
                staticClass: "eq8 tune settings-btn",
                attrs: {
                    title: "Presets"
                },
                on: {
                    click: function(t) {
                        e.presetsOpen = !0
                    }
                }
            })]), s("div", {
                staticClass: "col justify-center align-center"
            }, [s("i", {
                staticClass: "eq8 refresh settings-btn",
                attrs: {
                    title: "Reset"
                },
                on: {
                    click: e.handleReset
                }
            })]), s("div", {
                staticClass: "col justify-center align-center"
            }, [s("i", {
                staticClass: "eq8 settings settings-btn",
                attrs: {
                    title: "Options"
                },
                on: {
                    click: function(t) {
                        e.settingsOpen = !0
                    }
                }
            })]), s("div", {
                staticClass: "col align-center my2"
            }, [s("div", {
                staticClass: "dial-label"
            }, [e._v("Preamp")]), s("div", {
                staticClass: "zeroer",
                class: {
                    disabled: !e.eqEnabled
                },
                on: {
                    click: function(t) {
                        e.eqEnabled ? e.preampDialHandler(1) : e.$noOp
                    }
                }
            }, [s("i", {
                staticClass: "eq8 arrow_drop_down zeroer"
            })]), s("Dial", {
                attrs: {
                    size: e.dialSize,
                    value: e.preampMultiplier,
                    min: 0,
                    max: 2,
                    disabled: !e.eqEnabled,
                    "wheel-sensitivity": e.settings.sensitivity
                },
                on: {
                    change: e.preampDialHandler
                }
            }), s("NumberEditLabel", {
                attrs: {
                    value: e.preampMultiplier,
                    label: e.toFixed(e.preampMultiplier),
                    min: 0,
                    max: 2,
                    disabled: !e.eqEnabled
                },
                on: {
                    change: e.preampDialHandler
                }
            })], 1)])]), e.settingsOpen ? s("SettingsModal", {
                on: {
                    close: function(t) {
                        e.settingsOpen = !1
                    }
                },
                model: {
                    value: e.settingsValue,
                    callback: function(t) {
                        e.settingsValue = t
                    },
                    expression: "settingsValue"
                }
            }) : e._e(), e.presetsOpen ? s("PresetsModal", {
                on: {
                    close: function(t) {
                        e.presetsOpen = !1
                    },
                    delete: e.deletePreset,
                    load: e.loadPreset
                },
                model: {
                    value: e.presetsValue,
                    callback: function(t) {
                        e.presetsValue = t
                    },
                    expression: "presetsValue"
                }
            }) : e._e(), e.savePresetOpen ? s("SavePresetModal", {
                attrs: {
                    img: e.presetImage
                },
                on: {
                    close: function(t) {
                        e.savePresetOpen = !1
                    },
                    save: e.savePreset
                }
            }) : e._e()], 1)
        }
          , n = []
          , l = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "dial",
                class: e.dialClass,
                style: e.dialStyle,
                on: {
                    drag: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [s("div", {
                staticClass: "dial-grip",
                style: e.gripStyle,
                on: {
                    mousedown: e.mousedown,
                    wheel: e.mousewheel
                }
            }, [s("div", {
                staticClass: "dial-grip-tick",
                style: e.tickStyle
            })]), s("svg", {
                staticClass: "dial-svg",
                style: e.svgStyle,
                attrs: {
                    viewBox: e.viewbox
                }
            }, [s("circle", {
                attrs: {
                    cx: e.dialCircleAdjustment,
                    cy: e.dialCircleAdjustment,
                    r: e.dialCircleSize
                }
            }), s("path", {
                attrs: {
                    d: e.trackPath,
                    fill: "none"
                }
            }), s("path", {
                staticClass: "fill",
                style: e.fillStyle,
                attrs: {
                    d: e.trackPath,
                    fill: "none"
                }
            })])])
        }
          , r = []
          , o = {
            name: "Dial",
            props: {
                value: {
                    type: Number,
                    default: 0
                },
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 100
                },
                size: {
                    type: Number,
                    default: 100
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                wheelSensitivity: {
                    type: Number,
                    default: 2048
                }
            },
            data() {
                return {
                    posX: 0,
                    posY: 0
                }
            },
            computed: {
                dialClass() {
                    return this.disabled ? "disabled" : null
                },
                dialCircleSize() {
                    return .38 * this.size
                },
                dialCircleAdjustment() {
                    return .5 * this.size
                },
                svgStyle() {
                    return {
                        strokeDasharray: 1.84 * this.size,
                        strokeWidth: `${.05 * this.size}px`
                    }
                },
                dialStyle() {
                    return {
                        width: `${this.size}px`,
                        height: `${this.size}px`
                    }
                },
                tickStyle() {
                    const e = this.size;
                    return {
                        width: `${.08 * e}px`,
                        height: `${.08 * e}px`,
                        borderRadius: "50%"
                    }
                },
                gripStyle() {
                    const e = `${.82 * this.size}px`;
                    return {
                        width: e,
                        height: e,
                        transform: `translate(-50%, -50%) rotate(${this.rotation}deg)`
                    }
                },
                viewbox() {
                    return `0 0 ${this.size} ${this.size}`
                },
                trackPath() {
                    const e = this.size / 5
                      , t = this.size - this.size / 4
                      , s = .4 * this.size;
                    return `M${e},${t} A ${s} ${s} 0 1 1 ${this.size - e} ${t}`
                },
                fillStyle() {
                    const e = this.size
                      , t = this.rotation
                      , s = 1.84 * e
                      , i = s - s * ((t + 132) / 264);
                    return {
                        strokeDashoffset: i,
                        strokeWidth: `${.06 * e}px`
                    }
                },
                rotation() {
                    const {min: e, max: t} = this
                      , s = this.value
                      , i = (s + Math.abs(e)) / (t - e) * 264;
                    return i - 132
                }
            },
            methods: {
                mousedown(e) {
                    if (this.disabled)
                        return;
                    const {pageX: t, pageY: s} = e;
                    [this.posX,this.posY] = [t, s],
                    document.addEventListener("mousemove", this.mousemove),
                    document.addEventListener("mouseup", this.mouseup)
                },
                mousemove(e) {
                    const {pageX: t, pageY: s} = e
                      , {min: i, max: a} = this
                      , n = (a - i) / 256
                      , l = (a - i) / 256
                      , r = (s - this.posY) * n
                      , o = (t - this.posX) * l;
                    this.posY = s,
                    this.posX = t;
                    const A = r - o;
                    let c = this.value - A;
                    c < i && (c = i),
                    c > a && (c = a),
                    0 !== A && this.$emit("change", c)
                },
                mouseup() {
                    document.removeEventListener("mousemove", this.mousemove),
                    document.removeEventListener("mouseup", this.mouseup)
                },
                mousewheel(e) {
                    if (this.disabled)
                        return;
                    const {deltaY: t} = e
                      , {min: s, max: i} = this
                      , a = (i - s) / this.wheelSensitivity
                      , n = -t * a
                      , l = Math.max(s, Math.min(this.value + n, i));
                    0 !== n && this.$emit("change", l)
                }
            }
        }
          , A = o
          , c = (s("cce7"),
        s("2877"))
          , d = Object(c["a"])(A, l, r, !1, null, "07e21e69", null)
          , g = d.exports
          , h = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "choose",
                class: {
                    open: e.show,
                    disabled: e.disabled
                }
            }, [s("div", {
                staticClass: "choose-display",
                on: {
                    click: e.openOptions
                }
            }, [e.selected.iconClass ? s("i", {
                class: e.selected.iconClass
            }) : e._e(), e.selected.text ? s("span", [e._v(e._s(e.selected.text))]) : e._e(), s("i", {
                staticClass: "eq8 arrow_drop_down bigger-icon"
            })]), e.show ? s("div", {
                ref: "popup",
                staticClass: "choose-popup",
                style: e.popupStyle
            }, e._l(e.options, (function(t) {
                return s("div", {
                    key: t.value,
                    staticClass: "option",
                    attrs: {
                        title: t.title
                    },
                    on: {
                        click: function(s) {
                            return e.optionSelected(t)
                        }
                    }
                }, [t.iconClass ? s("i", {
                    class: t.iconClass
                }) : e._e(), t.text ? s("span", [e._v(e._s(t.text))]) : e._e()])
            }
            )), 0) : e._e()])
        }
          , u = []
          , p = {
            name: "Choose",
            data() {
                return {
                    show: !1
                }
            },
            props: {
                selected: Object,
                options: Array,
                direction: {
                    type: String,
                    default: "down"
                },
                disabled: Boolean
            },
            computed: {
                popupStyle() {
                    const e = {
                        left: 0,
                        width: "100%",
                        textAlign: this.options && this.options.length && this.options[0].icon ? "center" : "left"
                    };
                    return "up" === this.direction ? e.bottom = 0 : e.top = 0,
                    e
                }
            },
            methods: {
                openOptions() {
                    this.show = !0,
                    setTimeout(()=>document.addEventListener("click", this.bodyClickHandler))
                },
                bodyClickHandler() {
                    document.removeEventListener("click", this.bodyClickHandler),
                    this.show = !1
                },
                optionSelected(e) {
                    this.$emit("change", e),
                    this.show = !1
                }
            }
        }
          , C = p
          , E = (s("5f72"),
        Object(c["a"])(C, h, u, !1, null, "61d0f37a", null))
          , B = E.exports
          , f = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "edit-label"
            }, [e.edit ? e._e() : s("div", {
                staticClass: "edit-label-text",
                on: {
                    click: e.labelClicked
                }
            }, [e._v(e._s(e.label))]), e.edit ? s("input", {
                ref: "textinput",
                staticClass: "edit-label-input",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.valInternal
                },
                on: {
                    blur: e.blur,
                    input: e.key,
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.blur(t)
                    }
                }
            }) : e._e()])
        }
          , Q = []
          , m = {
            name: "EditLabel",
            props: ["value", "label", "min", "max", "disabled"],
            data() {
                return {
                    edit: !1,
                    valInternal: 0
                }
            },
            mounted() {
                this.valInternal = this.value
            },
            methods: {
                labelClicked() {
                    this.disabled || (this.valInternal = this.value,
                    this.edit = !0,
                    this.$nextTick(()=>{
                        const e = this.$refs.textinput;
                        e && (e.focus(),
                        e.select())
                    }
                    ))
                },
                blur() {
                    let e = this.valInternal;
                    void 0 !== this.min && e < this.min && (e = this.min),
                    void 0 !== this.max && e > this.max && (e = this.max),
                    this.valInternal = e,
                    this.edit = !1,
                    this.$emit("change", this.valInternal)
                },
                key(e) {
                    let t = parseFloat(e.target.value);
                    isNaN(t) || (this.valInternal = t)
                }
            },
            watch: {
                value(e) {
                    this.valInternal = e
                }
            }
        }
          , I = m
          , v = (s("d6b4"),
        Object(c["a"])(I, f, Q, !1, null, "43310f86", null))
          , b = v.exports
          , y = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "checkbox-wrapper"
            }, [s("div", {
                staticClass: "checkbox",
                class: e.klass,
                on: {
                    click: e.handler
                }
            })])
        }
          , w = []
          , q = {
            name: "Checkbox",
            props: {
                value: Boolean,
                disabled: Boolean
            },
            data() {
                return {
                    internalVal: this.value
                }
            },
            methods: {
                handler() {
                    this.disabled || (this.internalVal = !this.internalVal,
                    this.$emit("input", this.internalVal))
                }
            },
            computed: {
                klass() {
                    return {
                        checked: this.internalVal,
                        disabled: this.disabled
                    }
                }
            },
            watch: {
                value(e) {
                    this.internalVal = e
                }
            }
        }
          , F = q
          , x = (s("db00"),
        Object(c["a"])(F, y, w, !1, null, "76d3b2af", null))
          , Y = x.exports
          , k = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "canvas-wrapper",
                staticStyle: {
                    width: "600px",
                    height: "250px"
                }
            }, [s("canvas", {
                ref: "grid",
                attrs: {
                    id: "grid",
                    width: "600px",
                    height: "250px"
                }
            }), s("canvas", {
                ref: "graph",
                attrs: {
                    id: "graph",
                    width: "600px",
                    height: "250px"
                },
                on: {
                    mouseup: e.mouseup,
                    mousedown: e.mousedown
                }
            })])
        }
          , S = [];
        function W(e, t, s) {
            let i, a;
            return (!t || t < 0) && (t = 250),
            function() {
                const n = s || this
                  , l = +new Date
                  , r = arguments;
                i && l < i + t ? (clearTimeout(a),
                a = setTimeout((function() {
                    i = l,
                    e.apply(n, r)
                }
                ), t)) : (i = l,
                e.apply(n, r))
            }
        }
        var M = s("ca32")
          , P = s.n(M);
        const R = 2 * Math.PI
          , _ = 8
          , V = 2 * _
          , $ = 20
          , H = {
            100: 100,
            "1k": 1e3,
            "10k": 1e4
        }
          , G = {
            highpass: !1,
            lowshelf: !0,
            peaking: !0,
            notch: !1,
            highshelf: !0,
            lowpass: !1
        }
          , L = {
            highpass: !1,
            lowshelf: !1,
            peaking: !0,
            notch: !0,
            highshelf: !1,
            lowpass: !1
        };
        var j = {
            name: "FrequencyResponsePlot",
            props: {
                activeNode: {
                    type: Number
                },
                filters: {
                    type: Array
                },
                context: {
                    type: AudioContext
                },
                freqStart: {
                    type: Number
                },
                disabled: {
                    type: Boolean
                },
                wheelSensitivity: {
                    type: Number
                }
            },
            data() {
                return {
                    drawing: null,
                    filterNodes: {},
                    handleLocations: {},
                    dragging: !1
                }
            },
            created() {
                for (let e = 1; e <= 8; ++e)
                    this.filterNodes[String(e)] = this.context.createBiquadFilter(),
                    e > 1 && this.filterNodes[String(e)].connect(this.filterNodes[String(e - 1)]),
                    7 === e && this.filterNodes[String(e)].connect(this.context.destination)
            },
            mounted() {
                this.drawing = this.$refs.graph.getContext("2d"),
                this.gridDrawing = this.$refs.grid.getContext("2d");
                const {width: e, height: t} = this.$refs.grid;
                this.drawGrid(e, t),
                this.$refs.graph.addEventListener("mousemove", W(this.mousemove.bind(this), 50)),
                this.$refs.graph.addEventListener("wheel", W(this.mousewheel.bind(this), 50)),
                this.$bus.$on("request-fr-snapshot", this.createSnapshot.bind(this))
            },
            methods: {
                drawGrid(e, t) {
                    this.gridDrawing.clearRect(0, 0, e, t),
                    this.gridDrawing.font = "8px sans-serif";
                    const s = e / Math.log10(this.nyquist / this.freqStart);
                    for (let i = 1, a = this.freqStart; a < this.nyquist; ++i,
                    a = Math.pow(10, i))
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(e=>{
                            if (i <= 1 && 1 === e)
                                return;
                            let n = Math.floor(s * Math.log10(e * a / this.freqStart)) + .5;
                            this.gridDrawing.beginPath(),
                            this.gridDrawing.lineWidth = 1,
                            this.gridDrawing.strokeStyle = 1 === e ? P.a.graphLineBright : P.a.graphLine,
                            this.gridDrawing.moveTo(n, 0),
                            this.gridDrawing.lineTo(n, t),
                            this.gridDrawing.stroke()
                        }
                        );
                    Object.entries(H).forEach(e=>{
                        let i = s * Math.log10(e[1] / this.freqStart);
                        this.gridDrawing.lineWidth = .5,
                        this.gridDrawing.textAlign = "center",
                        this.gridDrawing.strokeStyle = P.a.graphText,
                        this.gridDrawing.strokeText(e[0], Math.floor(i) + 10.5, t - 2.5)
                    }
                    );
                    for (let i = 5 - $; i < $; i += 5) {
                        const s = .5 * t - .5 * t / $ * i
                          , a = Math.floor(s) + .5;
                        this.gridDrawing.strokeStyle = 0 === i ? P.a.graphLineBright : P.a.graphLine,
                        this.gridDrawing.beginPath(),
                        this.gridDrawing.moveTo(0, a),
                        this.gridDrawing.lineTo(e, a),
                        this.gridDrawing.stroke(),
                        this.gridDrawing.strokeStyle = P.a.graphText,
                        this.gridDrawing.strokeText(i.toFixed(0), 10.5, a + .5)
                    }
                },
                drawHandles(e, t, s, i, a) {
                    const n = this.drawing;
                    this.handleLocations = {},
                    i.forEach(e=>{
                        const i = Math.floor(s * Math.log10(e.frequency / this.freqStart))
                          , l = (G[e.type] ? Math.min(Math.max(10, a[i]), t + 10) : .5 * t) - 10;
                        n.strokeStyle = this.disabled ? P.a.disabled : P.a.accent,
                        n.lineWidth = 2,
                        n.beginPath(),
                        n.arc(i, l, _, 0, R),
                        n.stroke(),
                        e.id === this.activeNode && (n.fillStyle = this.disabled ? P.a.disabled : P.a.accent,
                        n.fill(),
                        n.strokeStyle = "black"),
                        n.lineWidth = 1,
                        n.textAlign = "center",
                        n.strokeText(e.id, i, l + .5 * _),
                        this.handleLocations[e.id] = {
                            x: i,
                            y: l
                        }
                    }
                    )
                },
                drawFrLine(e, t, s, i) {
                    e.clearRect(0, 0, t, s);
                    const a = new Float32Array(t)
                      , n = t / Math.log10(this.nyquist / this.freqStart);
                    for (let A = 0; A < t; ++A)
                        a[A] = Math.pow(10, A / n) * this.freqStart;
                    const l = []
                      , r = this.filters.filter(e=>e.enabled);
                    r.forEach(e=>{
                        const s = this.filterNodes[e.id];
                        s.frequency.value = e.frequency,
                        s.gain.value = e.gain,
                        s.Q.value = e.q,
                        s.type = e.type;
                        const i = new Float32Array(t);
                        s.getFrequencyResponse(a, i, new Float32Array(t)),
                        l.push(i)
                    }
                    ),
                    e.beginPath(),
                    e.lineWidth = i,
                    e.strokeStyle = this.disabled ? P.a.disabled : P.a.line;
                    const o = [];
                    for (let A = 0; A < t; ++A) {
                        let t = l.reduce((e,t)=>e * t[A], 1)
                          , i = 20 * Math.log10(Math.abs(t) || 1);
                        const a = .5 * s * (1 - i / $);
                        0 === A ? e.moveTo(A, a) : e.lineTo(A, a),
                        o.push(a)
                    }
                    return e.stroke(),
                    {
                        m: n,
                        enabledFilters: r,
                        yVals: o
                    }
                },
                draw() {
                    if (!this.drawing)
                        return;
                    const {width: e, height: t} = this.$refs.graph
                      , {m: s, enabledFilters: i, yVals: a} = this.drawFrLine(this.drawing, e, t, 2);
                    this.drawHandles(e, t, s, i, a)
                },
                createSnapshot() {
                    const {width: e, height: t} = this.$refs.graph
                      , s = document.createElement("canvas");
                    s.width = e,
                    s.height = t;
                    const i = s.getContext("2d");
                    this.drawFrLine(i, e, t, 8),
                    this.$bus.$emit("fr-snapshot", s.toDataURL("image/png"))
                },
                mousedown(e) {
                    if (this.disabled)
                        return;
                    const {offsetX: t, offsetY: s} = e
                      , i = Object.entries(this.handleLocations).find(e=>{
                        const {x: i, y: a} = e[1]
                          , [n,l] = [i + _, a + _]
                          , [r,o] = [n - t, l - s];
                        return r > 0 && o > 0 && r < V && o < V
                    }
                    );
                    i && (this.$emit("handle-selected", parseInt(i[0])),
                    this.dragging = !0,
                    document.body.style.cursor = "grabbing")
                },
                mouseup() {
                    this.dragging = !1,
                    document.body.style.cursor = ""
                },
                mousemove(e) {
                    if (this.disabled)
                        return;
                    const {offsetX: t, offsetY: s} = e;
                    if (t || s)
                        if (this.dragging) {
                            const e = this.filters.find(e=>e.id === this.activeNode);
                            if (e) {
                                const i = this.xToFrequency(t, this.$refs.graph.width);
                                G[e.type] ? this.$emit("filter-changed", {
                                    id: e.id,
                                    frequency: i,
                                    gain: this.yToGain(s, this.$refs.graph.height)
                                }) : this.$emit("filter-changed", {
                                    id: e.id,
                                    frequency: i
                                })
                            }
                        } else {
                            const e = Object.values(this.handleLocations).some(({x: e, y: i})=>{
                                const [a,n] = [e + _, i + _]
                                  , [l,r] = [a - t, n - s];
                                return l > 0 && r > 0 && l < V && r < V
                            }
                            );
                            document.body.style.cursor = e ? "grab" : ""
                        }
                },
                mousewheel(e) {
                    if (this.disabled)
                        return;
                    const t = this.filters.find(e=>e.id === this.activeNode);
                    if (t && L[t.type]) {
                        const s = Math.max(0, Math.min(t.q - e.deltaY / (this.wheelSensitivity / 10), 10));
                        this.$emit("filter-changed", {
                            id: t.id,
                            q: s
                        })
                    }
                },
                xToFrequency(e, t) {
                    const s = t / Math.log10(this.nyquist / this.freqStart);
                    return Math.pow(10, e / s) * this.freqStart
                },
                yToGain(e, t) {
                    return $ * (-2 * e / t + 1)
                }
            },
            computed: {
                nyquist() {
                    return .5 * this.context.sampleRate
                }
            },
            watch: {
                filters() {
                    window.requestAnimationFrame(this.draw)
                },
                activeNode() {
                    window.requestAnimationFrame(this.draw)
                },
                disabled() {
                    window.requestAnimationFrame(this.draw)
                }
            }
        }
          , D = j
          , T = (s("c1f1"),
        Object(c["a"])(D, k, S, !1, null, "e39aea00", null))
          , O = T.exports
          , U = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("transition", {
                attrs: {
                    name: "modal",
                    appear: ""
                }
            }, [s("div", {
                staticClass: "modal-mask",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [s("div", {
                staticClass: "modal-wrapper"
            }, [s("div", {
                staticClass: "modal-container col",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [s("h2", [e._v("Settings")]), s("div", {
                staticClass: "settings-wrap"
            }, [s("div", {
                staticClass: "row align-start settings-section"
            }, [s("span", {
                staticClass: "mr3"
            }, [e._v("Mousewheel Sensitivity:")]), s("div", {
                staticClass: "col"
            }, [s("Slider", {
                attrs: {
                    min: 0,
                    max: 9,
                    step: 1,
                    orient: "horizontal"
                },
                model: {
                    value: e.sensitivity,
                    callback: function(t) {
                        e.sensitivity = t
                    },
                    expression: "sensitivity"
                }
            }), s("div", {
                staticClass: "row grow justify-space-between mt1"
            }, [s("small", [e._v("Less")]), s("small", [e._v("More")])])], 1)])]), s("div", {
                staticClass: "col grow justify-flex-end align-center"
            }, [s("button", {
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [e._v("Close")])])])])])])
        }
          , N = []
          , z = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "slider-wrap",
                class: {
                    vert: "vertical" === e.orient
                }
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.localVal,
                    expression: "localVal"
                }],
                attrs: {
                    type: "range",
                    min: e.min,
                    max: e.max,
                    step: e.step
                },
                domProps: {
                    value: e.localVal
                },
                on: {
                    __r: function(t) {
                        e.localVal = t.target.value
                    }
                }
            })])
        }
          , J = []
          , K = {
            name: "Slider",
            props: {
                min: Number,
                max: Number,
                step: Number,
                value: Number,
                orient: String
            },
            computed: {
                localVal: {
                    get() {
                        return this.value
                    },
                    set(e) {
                        this.$emit("input", parseInt(e))
                    }
                }
            }
        }
          , X = K
          , Z = (s("272f"),
        Object(c["a"])(X, z, J, !1, null, "51e258e6", null))
          , ee = Z.exports
          , te = {
            name: "SettingsModal",
            props: ["value"],
            data() {
                const e = [];
                for (let t = 0; t < 10; ++t)
                    e.push(0 === t ? 64 : 2 * e[t - 1]);
                return e.reverse(),
                {
                    dataValues: e
                }
            },
            components: {
                Slider: ee
            },
            computed: {
                sensitivity: {
                    get() {
                        return this.dataValues.indexOf(this.value.sensitivity)
                    },
                    set(e) {
                        this.$emit("input", {
                            ...this.value,
                            sensitivity: this.dataValues[e]
                        })
                    }
                }
            }
        }
          , se = te
          , ie = (s("ab37"),
        Object(c["a"])(se, U, N, !1, null, "ed5e2660", null))
          , ae = ie.exports
          , ne = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("transition", {
                attrs: {
                    name: "modal",
                    appear: ""
                }
            }, [i("div", {
                staticClass: "modal-mask",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [i("div", {
                staticClass: "modal-wrapper"
            }, [i("div", {
                staticClass: "modal-container col",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [i("h2", [e._v("Presets")]), i("div", {
                staticClass: "presets-wrapper grow"
            }, e._l(e.presets, (function(t) {
                return i("div", {
                    key: t.id,
                    staticClass: "preset-entry py2"
                }, [i("div", {
                    staticClass: "row align-center",
                    on: {
                        click: function(s) {
                            return e.loadPreset(t.id)
                        }
                    }
                }, [i("div", {
                    staticClass: "preset-img-wrap mx2"
                }, [t.preset.image ? i("img", {
                    attrs: {
                        src: t.preset.image,
                        alt: t.preset.name
                    }
                }) : i("img", {
                    attrs: {
                        src: s("7685"),
                        alt: t.preset.name
                    }
                })]), i("i", {
                    staticClass: "eq8 mx2",
                    class: t.preset.icon
                }), i("div", {
                    staticClass: "grow"
                }, [e._v(e._s(t.preset.name))]), t.preset.locked ? e._e() : i("i", {
                    staticClass: "eq8 clearclose mx2",
                    attrs: {
                        title: "Delete Preset"
                    },
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            e.confirm(t.id, !0)
                        }
                    }
                })]), e.confirmId === t.id ? i("transition", {
                    attrs: {
                        name: "grow",
                        appear: ""
                    }
                }, [i("div", {
                    staticClass: "confirm-container"
                }, [i("div", {
                    staticClass: "confirmation row align-center"
                }, [i("span", {
                    staticClass: "mx3"
                }, [e._v("Are you sure you want to delete this preset?")]), i("div", {
                    staticClass: "confirm-controls align-center"
                }, [i("button", {
                    staticClass: "small mx1",
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            e.deletePreset(t.id)
                        }
                    }
                }, [e._v("Yes")]), i("button", {
                    staticClass: "small mx1",
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            e.confirm(t.id, !1)
                        }
                    }
                }, [e._v("No")])])])])]) : e._e()], 1)
            }
            )), 0), i("div", {
                staticClass: "row justify-center"
            }, [i("button", {
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [e._v("Close")])])])])])])
        }
          , le = []
          , re = {
            name: "PresetsModal",
            props: ["value"],
            data() {
                return {
                    confirmId: null,
                    confirms: {}
                }
            },
            methods: {
                loadPreset(e) {
                    this.$emit("load", e)
                },
                confirm(e, t) {
                    this.confirmId = t ? e : null
                },
                deletePreset(e) {
                    this.$emit("delete", e),
                    this.confirm(e, !1)
                }
            },
            computed: {
                presets() {
                    const e = Object.entries(this.value).reduce((e,t)=>{
                        return e.push({
                            id: t[0],
                            preset: t[1]
                        }),
                        e
                    }
                    , []);
                    return e.sort((e,t)=>{
                        return "Default" === e.preset.name ? -1 : "Default" === t.preset.name ? 1 : t.preset.name - e.preset.name
                    }
                    ),
                    e
                }
            }
        }
          , oe = re
          , Ae = (s("eb49"),
        Object(c["a"])(oe, ne, le, !1, null, "58f1122c", null))
          , ce = Ae.exports
          , de = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("transition", {
                attrs: {
                    name: "modal",
                    appear: ""
                }
            }, [s("div", {
                staticClass: "modal-mask",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [s("div", {
                staticClass: "modal-wrapper"
            }, [s("div", {
                staticClass: "modal-container col",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [s("h2", [e._v("Save Preset")]), s("div", {
                staticClass: "mx4 my2 row align-center justify-space-evenly"
            }, [s("div", [e.img ? s("img", {
                attrs: {
                    src: e.img,
                    alt: "Preset Screenshot"
                }
            }) : e._e()]), s("div", {
                staticClass: "grow px2"
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.name,
                    expression: "name"
                }],
                attrs: {
                    placeholder: "Preset name"
                },
                domProps: {
                    value: e.name
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.name = t.target.value)
                    }
                }
            })]), s("div", [s("Choose", {
                attrs: {
                    options: e.iconOpts,
                    selected: e.selectedIcon,
                    direction: "up"
                },
                on: {
                    change: e.handleIcon
                }
            })], 1)]), s("div", {
                staticClass: "row justify-center align-center"
            }, [s("button", {
                staticClass: "mx2",
                attrs: {
                    disabled: !e.name
                },
                on: {
                    click: function(t) {
                        return e.$emit("save", {
                            name: e.name,
                            icon: e.selectedIcon.value,
                            image: e.img
                        })
                    }
                }
            }, [e._v("Save")]), s("button", {
                staticClass: "mx2",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [e._v("Cancel")])])])])])])
        }
          , ge = [];
        const he = [{
            iconClass: ["eq8", "audiotrack"],
            value: "audiotrack",
            title: ""
        }, {
            iconClass: ["eq8", "favorite"],
            value: "favorite",
            title: ""
        }, {
            iconClass: ["eq8", "headset"],
            value: "headset",
            title: ""
        }, {
            iconClass: ["eq8", "speaker"],
            value: "speaker",
            title: ""
        }, {
            iconClass: ["eq8", "mic"],
            value: "mic",
            title: ""
        }, {
            iconClass: ["eq8", "volume_up"],
            value: "volume_up",
            title: ""
        }];
        var ue = {
            name: "SavePresetModal",
            props: ["value", "img"],
            components: {
                Choose: B
            },
            data() {
                return {
                    name: "",
                    iconOpts: he,
                    selectedIcon: he[0]
                }
            },
            methods: {
                handleIcon(e) {
                    this.selectedIcon = e
                }
            }
        }
          , pe = ue
          , Ce = (s("7d17"),
        Object(c["a"])(pe, de, ge, !1, null, "2ca3c430", null))
          , Ee = Ce.exports;
        const Be = window.AudioContext || window.webkitAudioContext
          , fe = [{
            iconClass: ["eq8", "highpass"],
            value: "highpass",
            title: "High Pass",
            qEnabled: !1,
            gainEnabled: !1
        }, {
            iconClass: ["eq8", "lowshelf"],
            value: "lowshelf",
            title: "Low Shelf",
            qEnabled: !1,
            gainEnabled: !0
        }, {
            iconClass: ["eq8", "peaking"],
            value: "peaking",
            title: "Peaking",
            qEnabled: !0,
            gainEnabled: !0
        }, {
            iconClass: ["eq8", "notch"],
            value: "notch",
            title: "Notch",
            qEnabled: !0,
            gainEnabled: !1
        }, {
            iconClass: ["eq8", "highshelf"],
            value: "highshelf",
            title: "High Shelf",
            qEnabled: !1,
            gainEnabled: !0
        }, {
            iconClass: ["eq8", "lowpass"],
            value: "lowpass",
            title: "Low Pass",
            qEnabled: !1,
            gainEnabled: !1
        }]
          , Qe = browser.runtime.connect({
            name: "eq8"
        });
        var me = {
            name: "app",
            components: {
                FrequencyResponsePlot: O,
                Dial: g,
                Choose: B,
                NumberEditLabel: b,
                Checkbox: Y,
                SavePresetModal: Ee,
                SettingsModal: ae,
                PresetsModal: ce
            },
            data() {
                return {
                    eqEnabled: !0,
                    dialSize: 55,
                    filterOptions: fe,
                    freqStart: 10,
                    preampMultiplier: 1,
                    selectedFilter: null,
                    frAudioContext: new Be,
                    frFilters: [],
                    settings: {},
                    presets: {},
                    presetImage: null,
                    settingsOpen: !1,
                    presetsOpen: !1,
                    savePresetOpen: !1
                }
            },
            created() {
                this.$bus.$on("fr-snapshot", e=>this.presetImage = e),
                Qe.onMessage.addListener(e=>"SET::STATE" === e.type ? this.stateUpdateHandler(e.state) : this.$noOp()),
                this.$runtime.sendMessage({
                    type: "GET::STATE"
                }).then(this.stateUpdateHandler).then(()=>this.selectedFilter = this.frFilters[0])
            },
            methods: {
                stateUpdateHandler({filters: e, enabled: t, preampMultiplier: s, settings: i, presets: a}) {
                    this.frFilters = this.$arrayCopy(e),
                    this.eqEnabled = t,
                    this.preampMultiplier = s,
                    this.settings = this.$arrayCopy(i),
                    this.presets = a,
                    this.selectedFilter && (this.selectedFilter = this.frFilters.find(e=>e.id === this.selectedFilter.id && e.enabled))
                },
                gainDialHandler(e) {
                    const t = Object.assign(this.selectedFilter, {
                        gain: e
                    });
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: t
                    })
                },
                preampDialHandler(e) {
                    Qe.postMessage({
                        type: "SET::PREAMP",
                        preampMultiplier: e
                    })
                },
                qDialHandler(e) {
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: Object.assign(this.selectedFilter, {
                            q: e
                        })
                    })
                },
                freqDialHandler(e) {
                    const t = Math.log10(this.nyquist / this.freqStart)
                      , s = this.nyquist * Math.pow(10, t * (e - 1));
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: Object.assign(this.selectedFilter, {
                            frequency: s
                        })
                    })
                },
                changeFilterType(e, t) {
                    const s = t.value.endsWith("pass") ? 0 : 1
                      , i = 0;
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: Object.assign(e, {
                            type: t.value,
                            q: s,
                            gain: i
                        })
                    })
                },
                freqInputHandler(e) {
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: Object.assign(this.selectedFilter, {
                            frequency: e
                        })
                    })
                },
                toFixed(e) {
                    return e.toFixed(2)
                },
                frequencyToValue(e) {
                    return Math.log10(e / this.nyquist) / Math.log10(this.nyquist / this.freqStart) + 1
                },
                handleSelected(e) {
                    const t = this.frFilters.find(t=>t.id === e);
                    t && (this.selectedFilter = t)
                },
                filterTypeForFilter(e) {
                    return e ? this.filterOptions.find(t=>t.value === e.type) : {}
                },
                selectFilter(e) {
                    this.eqEnabled && e.enabled && (this.selectedFilter = e)
                },
                toggleFilterEnabled(e) {
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: Object.assign(e, {
                            enabled: !e.enabled
                        })
                    })
                },
                frFilterChanged(e) {
                    const t = this.frFilters.find(t=>t.id === e.id);
                    t && (delete e.id,
                    Qe.postMessage({
                        type: "SET::FILTER",
                        filter: Object.assign(t, e)
                    }))
                },
                toggleMasterEnabled() {
                    Qe.postMessage({
                        type: "SET::ENABLED",
                        enabled: !this.eqEnabled
                    })
                },
                handleReset() {
                    Qe.postMessage({
                        type: "RESET::FILTERS"
                    })
                },
                savePreset(e) {
                    const t = {
                        name: e.name,
                        icon: e.icon,
                        image: this.presetImage,
                        filters: this.frFilters,
                        preampMultiplier: this.preampMultiplier
                    };
                    Qe.postMessage({
                        type: "SAVE::PRESET",
                        preset: t
                    }),
                    this.savePresetOpen = !1
                },
                loadPreset(e) {
                    Qe.postMessage({
                        type: "LOAD::PRESET",
                        id: e
                    }),
                    this.presetsOpen = !1
                },
                deletePreset(e) {
                    Qe.postMessage({
                        type: "DELETE::PRESET",
                        id: e
                    })
                }
            },
            computed: {
                nyquist() {
                    return .5 * this.frAudioContext.sampleRate
                },
                fixedFrequency() {
                    return this.selectedFilter ? this.selectedFilter.frequency : this.freqStart
                },
                freqLabel() {
                    const e = this.fixedFrequency;
                    return e >= 1e3 ? `${(e / 1e3).toFixed(2)} kHz` : `${e.toFixed(2)} Hz`
                },
                freqDisabled() {
                    return !this.eqEnabled
                },
                gainDisabled() {
                    return !this.eqEnabled || !this.filterTypeForFilter(this.selectedFilter).gainEnabled
                },
                qDisabled() {
                    return !this.eqEnabled || !this.filterTypeForFilter(this.selectedFilter).qEnabled
                },
                gainValue() {
                    return this.selectedFilter ? this.selectedFilter.gain : 0
                },
                qValue() {
                    return this.selectedFilter ? this.selectedFilter.q : 1
                },
                freqValue() {
                    return this.frequencyToValue(this.selectedFilter ? this.selectedFilter.frequency : this.freqStart)
                },
                presetsValue: {
                    get() {
                        return this.presets
                    },
                    set(e) {
                        console.log("here"),
                        Qe.postMessage({
                            type: "SET::PRESETS",
                            presets: e
                        })
                    }
                },
                settingsValue: {
                    get() {
                        return this.settings
                    },
                    set(e) {
                        console.log(e),
                        Qe.postMessage({
                            type: "SET::SETTINGS",
                            settings: e
                        })
                    }
                }
            },
            watch: {
                savePresetOpen(e) {
                    e ? this.$bus.$emit("request-fr-snapshot") : this.presetImage = null
                }
            }
        }
          , Ie = me
          , ve = (s("5c0b"),
        Object(c["a"])(Ie, a, n, !1, null, null, null))
          , be = ve.exports;
        i["a"].config.devtools = !1,
        i["a"].config.productionTip = !1,
        i["a"].prototype.$noOp = ()=>{}
        ,
        i["a"].prototype.$runtime = browser.runtime,
        i["a"].prototype.$arrayCopy = e=>JSON.parse(JSON.stringify(e)),
        i["a"].prototype.$bus = new i["a"],
        new i["a"]({
            render: e=>e(be)
        }).$mount("#app")
    },
    "5bc2": function(e, t, s) {},
    "5c0b": function(e, t, s) {
        "use strict";
        var i = s("e332")
          , a = s.n(i);
        a.a
    },
    "5f72": function(e, t, s) {
        "use strict";
        var i = s("f8d4")
          , a = s.n(i);
        a.a
    },
    7685: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "7d17": function(e, t, s) {
        "use strict";
        var i = s("8838")
          , a = s.n(i);
        a.a
    },
    "81a3": function(e, t, s) {},
    8838: function(e, t, s) {},
    a913: function(e, t, s) {},
    ab37: function(e, t, s) {
        "use strict";
        var i = s("de4e")
          , a = s.n(i);
        a.a
    },
    bdc0: function(e, t, s) {},
    bf51: function(e, t, s) {},
    c1f1: function(e, t, s) {
        "use strict";
        var i = s("5bc2")
          , a = s.n(i);
        a.a
    },
    ca32: function(e, t, s) {
        e.exports = {
            accent: "#ffc30e",
            graphLine: "#404040",
            graphLineBright: "#5c5c5c",
            graphText: "gray",
            line: "#09b8f0",
            disabled: "#b4b4b4"
        }
    },
    cce7: function(e, t, s) {
        "use strict";
        var i = s("a913")
          , a = s.n(i);
        a.a
    },
    d6b4: function(e, t, s) {
        "use strict";
        var i = s("81a3")
          , a = s.n(i);
        a.a
    },
    db00: function(e, t, s) {
        "use strict";
        var i = s("bdc0")
          , a = s.n(i);
        a.a
    },
    de4e: function(e, t, s) {},
    e332: function(e, t, s) {
        e.exports = {
            accent: "#ffc30e",
            graphLine: "#404040",
            graphLineBright: "#5c5c5c",
            graphText: "gray",
            line: "#09b8f0",
            disabled: "#b4b4b4"
        }
    },
    eb49: function(e, t, s) {
        "use strict";
        var i = s("1499")
          , a = s.n(i);
        a.a
    },
    f8d4: function(e, t, s) {}
});
