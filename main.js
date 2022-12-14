(() => {
    "use strict";

    function v(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function a(e, t) {
        return (a = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && a(e, t)
    }

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function o(e, t) {
        if (t && ("object" === s(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return h(e)
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function e(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var u = function () {
        l(s, Phaser.GameObjects.DOMElement);
        var a = e(s);

        function s(t, e) {
            var n, i;
            return v(this, s), (n = a.call(this, t, 0, 0)).createFromCache(e).setOrigin(0, 0).setDepth(99999).setScrollFactor(0, 0), n.node.style.width = "100%", n.node.style.height = "100%", n.pointerEvents = "none", t.scale.fullscreenTarget = document.getElementById("game"), t.getInputs && (e = t.getInputs(), i = e.className, window[i] = {}, e.funcs.forEach(function (e) {
                return window[i][e.name] = e.func.bind(t)
            })), t.add.existing(h(n)), n
        }
        return n(s, null, [{
            key: "preload",
            value: function (e, t) {
                e.load.html(t, "assets/html/".concat(t, ".html"))
            }
        }]), s
    }();

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }

    function f(e) {
        return function (e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || c(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var i, a, s = [],
                    o = !0,
                    r = !1;
                try {
                    for (n = n.call(e); !(o = (i = n.next()).done) && (s.push(i.value), !t || s.length !== t); o = !0);
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return s
            }
        }(e, t) || c(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function t() {
        Object.entries(L).forEach(function (e) {
            var t = p(e, 2),
                e = t[0],
                t = t[1];
            return _[e] = null !== (e = null === (e = JSON.parse(localStorage.getItem("".concat(R).concat(e)))) || void 0 === e ? void 0 : e.value) && void 0 !== e ? e : t
        })
    }

    function y(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
        return Array.from({
            length: e
        }, function (e, t) {
            return t + n
        })
    }

    function E(e, t, n, i, a) {
        return (e - t) / (n - t) * (a - i) + i || (i + a) / 2
    }

    function g(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2,
            i = e < 0 ? -1 : 1,
            a = 0 === (e = Math.abs(e)) ? 0 : Math.pow(.1, n);
        return "".concat(t ? b(e * i) : "").concat(+(Math.max(100 * e, a) * i).toFixed(n), "%")
    }

    function T(e) {
        return null == e ? void 0 : e[H(0, e.length - 1)]
    }

    function A() {
        return C = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
    }

    function I(e, t) {
        return D() * (t - e) + e
    }

    function S(e) {
        return null == e ? void 0 : e[k(0, e.length - 1)]
    }

    function O(e) {
        return null == e ? void 0 : e.map(function (e) {
            return {
                v: e,
                sort: D()
            }
        }).sort(function (e, t) {
            return e.sort - t.sort
        }).map(function (e) {
            return e.v
        })
    }
    var R = "IOP_",
        L = {
            MUSIC_VOLUME: .5,
            SFX_VOLUME: .5,
            SAVES: [],
            ACHIEVEMENTS: {},
            STATS: {},
            BASIC_ITEM_TYPES: ["ARMOR", "AXE", "BELT", "BOOTS", "BOW", "DAGGER", "GLOVES", "HELMET", "MAGIC_RING", "SWORD"],
            UNIQUE_ITEM_TYPES: [],
            UNIQUE_UNIT_TYPES: ["ASSASSIN", "BARBARIAN", "CLERIC", "PALADIN", "RANGER"],
            FF_BUTTON_ENABLED: !1
        },
        _ = {},
        P = function (e) {
            return _[e]
        },
        N = function (e, t) {
            t = Phaser.Utils.Objects.DeepCopy(t);
            _[e] = t;
            t = JSON.stringify({
                value: t
            });
            localStorage.setItem("".concat(R).concat(e), t)
        },
        b = function (e) {
            return 0 <= e ? "+" : ""
        },
        w = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2,
                i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 2,
                a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 2;
            return e < 1e4 ? "".concat(t ? b(e) : "").concat(+e.toFixed(n)) : e < 1e6 ? "".concat(t ? b(e) : "").concat(+(e / 1e3).toFixed(i), "k") : "".concat(t ? b(e) : "").concat(+(e / 1e6).toFixed(a), "m")
        },
        x = function (e, t) {
            return Math.random() * (t - e) + e
        },
        H = function (e, t) {
            return Math.floor(x(e, t + 1))
        },
        C = 1,
        B = function () {
            return C = Math.max((C + (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1)) % Number.MAX_SAFE_INTEGER, 1)
        },
        D = function () {
            var e = 1e4 * Math.sin(C);
            return B(), e - Math.floor(e)
        },
        k = function (e, t) {
            return Math.floor(I(e, t + 1))
        };

    function G(t, e) {
        var n, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, n)), i
    }

    function M(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? G(Object(n), !0).forEach(function (e) {
                m(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function U(e, t, n, i, a, s) {
        var o = n(t),
            r = i(t),
            u = a(t),
            s = s(t);
        return {
            name: "".concat(e, " (Tier ").concat(t, ")"),
            desc: "".concat(V(o, r, u), " ").concat(F(s)),
            speed: s,
            func: function (e, t, n, i) {
                return e.gainStats({
                    power: o,
                    speed: r,
                    health: u,
                    maxHealth: u
                }, t, n, i)
            }
        }
    }

    function W(e, t) {
        return null !== (e = null === (e = Z[e]) || void 0 === e ? void 0 : e.call(Z, t)) && void 0 !== e ? e : K(t)
    }
    var V = function (e, t, n) {
            var i = [];
            return 0 !== e && i.push("".concat(w(e, !0), " POW")), 0 !== t && i.push("".concat(w(t, !0), " SPD")), 0 !== n && i.push("".concat(w(n, !0), " HP")), i.join(", ")
        },
        F = function (e) {
            return "every ".concat(w(e / 1e3), " second").concat(1e3 === e ? "" : "s")
        },
        K = function (e) {
            return U("Belt", e, function (e) {
                return 0
            }, function (e) {
                return 0
            }, function (e) {
                return 3 * e
            }, function (e) {
                return 3e3
            })
        },
        j = ["ARMOR", "AXE", "BELT", "BOOK", "BOOTS", "BOW", "CARD", "DAGGER", "FOOD", "GLOVES", "HELMET", "KEY", "MAGIC_RING", "SWORD"],
        Y = ["HAMMER", "NECKLACE", "POTION", "SHIELD"],
        q = M(M(M({}, ["CARD", "FOOD", "MAGIC_RING", "NECKLACE", "KEY"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, .35))
        }, {})), ["BELT", "BOOK", "BOOTS", "CARD", "DAGGER", "GLOVES", "HELMET", "POTION"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, .5))
        }, {})), ["ARMOR", "AXE", "BOW", "SWORD", "HAMMER", "SHIELD"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, .75))
        }, {})),
        X = M(M(M(M({}, ["ARMOR", "BELT", "BOOK", "BOOTS", "GLOVES", "HAMMER", "HELMET", "SHIELD"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, "THUD"))
        }, {})), ["FOOD"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, "APPLE"))
        }, {})), ["CARD", "KEY", "MAGIC_RING", "NECKLACE", "POTION"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, "POWERUP"))
        }, {})), ["AXE", "BOW", "DAGGER", "SWORD"].reduce(function (e, t) {
            return M(M({}, e), {}, m({}, t, "SWORD"))
        }, {})),
        Q = {},
        Z = {
            ARMOR: function (e) {
                return U("Armor", e, function (e) {
                    return 0
                }, function (e) {
                    return -e
                }, function (e) {
                    return 6 * e
                }, function (e) {
                    return 5e3
                })
            },
            AXE: function (e) {
                return U("Axe", e, function (e) {
                    return 6 * e
                }, function (e) {
                    return -e
                }, function (e) {
                    return 0
                }, function (e) {
                    return 5e3
                })
            },
            BELT: K,
            BOOK: function (e) {
                var a = e,
                    s = e;
                return {
                    name: "Book (Tier ".concat(e, ")"),
                    desc: "".concat(V(a, s, 0), " ").concat(F(1e3), ". Resets unit's ability charge"),
                    speed: 1e3,
                    func: function (e, t, n, i) {
                        e.gainStats({
                            power: a,
                            speed: s
                        }, t, n, i), e.resetAbility()
                    }
                }
            },
            BOOTS: function (e) {
                return U("Boots", e, function (e) {
                    return 0
                }, function (e) {
                    return 3 * e
                }, function (e) {
                    return 0
                }, function (e) {
                    return 3e3
                })
            },
            BOW: function (e) {
                return U("Bow", e, function (e) {
                    return 3 * e
                }, function (e) {
                    return 2 * e
                }, function (e) {
                    return 0
                }, function (e) {
                    return 5e3
                })
            },
            CARD: function (e) {
                var o = e;
                return {
                    name: "Cards (Tier ".concat(e, ")"),
                    desc: "".concat(w(o, !0), " to a random stat ").concat(F(1e3)),
                    speed: 1e3,
                    func: function (e, t, n, i) {
                        var a = S(["power", "speed", "health"]),
                            s = m({}, "".concat(a), o);
                        "health" === a && (s.maxHealth = o), e.gainStats(s, t, n, i)
                    }
                }
            },
            DAGGER: function (e) {
                return U("Dagger", e, function (e) {
                    return e
                }, function (e) {
                    return 2 * e
                }, function (e) {
                    return 0
                }, function (e) {
                    return 3e3
                })
            },
            FOOD: function (e) {
                var a = 2 * e;
                return {
                    name: "Food (Tier ".concat(e, ")"),
                    desc: "".concat(w(a, !0), " HP, heal ").concat(g(.2), " of missing health ").concat(F(5e3)),
                    speed: 5e3,
                    func: function (e, t, n, i) {
                        e.gainStats({
                            health: a,
                            maxHealth: a
                        }, t, n, i), e.heal(.2 * (e.stats.maxHealth - e.stats.health))
                    }
                }
            },
            GLOVES: function (e) {
                return U("Gloves", e, function (e) {
                    return 0
                }, function (e) {
                    return e
                }, function (e) {
                    return 2 * e
                }, function (e) {
                    return 3e3
                })
            },
            HELMET: function (e) {
                return U("Helmet", e, function (e) {
                    return e
                }, function (e) {
                    return 0
                }, function (e) {
                    return 2 * e
                }, function (e) {
                    return 3e3
                })
            },
            KEY: function (e) {
                var s = 8 * e;
                return {
                    name: "Cursed Key (Tier ".concat(e, ")"),
                    desc: "".concat(w(s, !0), " SPD, lose ").concat(g(.2), " of your current health ").concat(F(5e3)),
                    speed: 5e3,
                    func: function (e, t, n, i) {
                        var a = .2 * e.stats.health;
                        e.gainStats({
                            speed: s
                        }, t, n, i), 0 < a && e.damage(a)
                    }
                }
            },
            MAGIC_RING: function (e) {
                return U("Magic Ring", e, function (e) {
                    return e
                }, function (e) {
                    return e
                }, function (e) {
                    return e
                }, function (e) {
                    return 3e3
                })
            },
            SWORD: function (e) {
                return U("Sword", e, function (e) {
                    return 3 * e
                }, function (e) {
                    return 0
                }, function (e) {
                    return 0
                }, function (e) {
                    return 3e3
                })
            },
            HAMMER: function () {
                return {
                    name: "Hammer",
                    desc: "".concat(g(.25, !0, 0), " POW ").concat(F(5e3), " then ").concat(g(-.25, !0, 0), " POW over the next ").concat(w(2.5), " second").concat("s", "."),
                    speed: 5e3,
                    func: function (t, e, n, i) {
                        var a, s, o, r;
                        t.scene.inCombat && (a = .25 * t.stats.power, t.gainStats({
                            power: a
                        }, e, n, i), t.addTempStats({
                            power: a
                        }), s = 0, o = t.scene.tweens.addCounter({
                            from: 0,
                            to: a,
                            duration: 2500,
                            onUpdate: function (e) {
                                e = Math.floor(e.getValue()) - s;
                                0 < e && (t.gainStats({
                                    power: -e
                                }), t.addTempStats({
                                    power: -e
                                }), s += e)
                            },
                            onComplete: function () {
                                t.scene.events.off("EXIT_COMBAT", r);
                                var e = -(a - s);
                                t.gainStats({
                                    power: e
                                }), t.addTempStats({
                                    power: e
                                })
                            },
                            onStop: function () {
                                t.scene.events.off("EXIT_COMBAT", r)
                            }
                        }), t.scene.events.on("EXIT_COMBAT", r = function () {
                            return o.stop()
                        }))
                    }
                }
            },
            NECKLACE: function () {
                return {
                    name: "Amulet",
                    desc: "Revives fallen unit with 1 HP ".concat(F(1e4)),
                    speed: 1e4,
                    func: function (e, t, n, i) {
                        return e.revive(1, t, n, i)
                    }
                }
            },
            POTION: function () {
                return {
                    name: "Potion",
                    desc: "Heal ".concat(g(.25), " health ").concat(F(5e3)),
                    speed: 5e3,
                    func: function (e, t, n, i) {
                        return e.gainStats({
                            health: .25 * e.stats.maxHealth
                        }, t, n, i)
                    }
                }
            },
            SHIELD: function () {
                return {
                    name: "Shield",
                    desc: "".concat(g(.05, !0, 0), " HP for the rest of this battle ").concat(F(5e3)),
                    speed: 5e3,
                    func: function (e, t, n, i) {
                        var a;
                        e.scene.inCombat && (a = .05 * e.stats.maxHealth, e.gainStats({
                            health: a,
                            maxHealth: a
                        }, t, n, i), e.addTempStats({
                            health: a,
                            maxHealth: a
                        }))
                    }
                }
            }
        },
        z = 5,
        J = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
            return "".concat(e, "_TIER_").concat((t - 1) % z + 1)
        };

    function $(t, e) {
        var n, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, n)), i
    }

    function ee(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? $(Object(n), !0).forEach(function (e) {
                m(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function te(e) {
        return "assets/img/items/".concat(J(e).toPathCase(), ".png")
    }

    function ne(e, t, n) {
        return {
            name: e,
            desc: t,
            img: te(n),
            unlockType: "ITEM",
            unlock: n,
            onActivate: function () {
                return e = n, -1 === (t = P("BASIC_ITEM_TYPES")).indexOf(e) && t.push(e), void N("BASIC_ITEM_TYPES", t);
                var e, t
            },
            onDeactivate: function () {
                return e = n, (t = P("BASIC_ITEM_TYPES")).splice(t.indexOf(e), 1), void N("BASIC_ITEM_TYPES", t);
                var e, t
            },
            isActive: function () {
                return e = n, -1 !== P("BASIC_ITEM_TYPES").indexOf(e);
                var e
            }
        }
    }

    function ie(e, t, n) {
        return {
            name: e,
            desc: t,
            img: "assets/img/units/".concat(n.toPathCase(), ".png"),
            unlockType: "UNIT",
            unlock: n,
            onActivate: function () {
                return e = n, -1 === (t = P("UNIQUE_UNIT_TYPES")).indexOf(e) && t.push(e), void N("UNIQUE_UNIT_TYPES", t);
                var e, t
            },
            onDeactivate: function () {
                return e = n, (t = P("UNIQUE_UNIT_TYPES")).splice(t.indexOf(e), 1), void N("UNIQUE_UNIT_TYPES", t);
                var e, t
            },
            isActive: function () {
                return e = n, -1 !== P("UNIQUE_UNIT_TYPES").indexOf(e);
                var e
            }
        }
    }

    function ae() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2,
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "RANDOM",
            i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3] ? e : e.filter(function (e) {
                return !e.dead
            });
        switch (n) {
            case "RANDOM":
                return O(i).slice(0, t);
            case "LOWEST_HP":
                return i.sort(function (e, t) {
                    return e.stats.health - t.stats.health
                }), i.slice(0, t);
            case "HIGHEST_HP":
                return i.sort(function (e, t) {
                    return t.stats.health - e.stats.health
                }), i.slice(0, t);
            case "LOWEST_PERCENT_HP":
                return i.sort(function (e, t) {
                    return e.stats.health / e.stats.maxHealth - t.stats.health / t.stats.maxHealth
                }), i.slice(0, t);
            case "HIGHEST_PERCENT_HP":
                return i.sort(function (e, t) {
                    return t.stats.health / t.stats.maxHealth - e.stats.health / e.stats.maxHealth
                }), i.slice(0, t)
        }
    }

    function se(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .6,
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "NORMAL",
            a = 4 < arguments.length ? arguments[4] : void 0;
        e.forEach(function (e) {
            return Oe(t, e, n, i, a)
        })
    }

    function oe(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .6,
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "NORMAL",
            a = 4 < arguments.length ? arguments[4] : void 0;
        t && e.attack(t, function () {
            null != a && a(t), null != t && t.heal(e.stats.power * n, e)
        }, i, !1)
    }

    function re(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .6,
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "NORMAL",
            a = 4 < arguments.length ? arguments[4] : void 0;
        e.forEach(function (e) {
            return oe(t, e, n, i, a)
        })
    }

    function ue(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie,
            e = null !== (e = De[e]) && void 0 !== e ? e : {
                power: .33,
                maxHealth: .34,
                speed: .33
            };
        return {
            power: e.power * t,
            maxHealth: e.maxHealth * t,
            speed: e.speed * t,
            health: e.maxHealth * t
        }
    }

    function ce(e) {
        return null !== (e = Re[e]) && void 0 !== e ? e : {
            name: "Basic Attack",
            desc: "Attack a random enemy for 60% POW.",
            func: function (e, t, n) {
                n = Se(n);
                Oe(e, n, .6)
            }
        }
    }

    function le(e) {
        return null !== (e = Pe[e]) && void 0 !== e ? e : "ARROW"
    }

    function he(e) {
        return null !== (e = Ne[e]) && void 0 !== e ? e : "SWORD"
    }

    function de(e) {
        ke || (ke = !0, e.load.html("achievement-html", "assets/html/achievement.html"))
    }

    function fe(e) {
        Ge || (Ge = !0, pe = e.cache.html.get("achievement-html"))
    }

    function me(e, t) {
        var n = Ee[e],
            i = document.createElement("div");
        i.innerHTML = pe, i.querySelector(".achievement-name").innerText = n.name, i.querySelector(".achievement-desc").innerText = n.desc;
        var a = i.querySelector(".achievement-img");
        if (a.src = n.img, t = "boolean" != typeof t ? P("ACHIEVEMENTS")[e] : t) {
            a.classList.remove("silhouette");
            var s = i.querySelector(".enable-button");
            s.classList.remove("no-display");
            var o = i.querySelector(".progress-text");
            switch (n.unlockType) {
                case "UNIT":
                    var r = ce(n.unlock);
                    o.innerText = "".concat(n.unlock.toTitleCase(), ": ").concat(r.desc);
                    break;
                case "ITEM":
                    r = W(n.unlock, 1);
                    o.innerText = "".concat(r.name, ": ").concat(r.desc);
                    break;
                case "FF_BUTTON":
                    o.innerText = "The fast forward button allows you to fast forward the game at 3x speed."
            }
            n.isActive() || (s.innerText = "Enable", s.classList.remove("secondary-button"), a.classList.add("greyed-out")), s.addEventListener("click", function () {
                n.isActive() ? (n.onDeactivate(), s.innerText = "Enable", s.classList.remove("secondary-button"), a.classList.add("greyed-out")) : (n.onActivate(), s.innerText = "Disable", s.classList.add("secondary-button"), a.classList.remove("greyed-out"))
            })
        } else {
            t = n.getProgress();
            i.querySelector(".progress-text").innerText = "".concat(w(t.total, !1, 0), " / ").concat(w(t.target, !1, 0))
        }
        return i
    }
    var pe, ye = function (e, t, n) {
            return {
                name: e,
                desc: t,
                img: te(n),
                unlockType: "ITEM",
                unlock: n,
                onActivate: function () {
                    return e = n, -1 === (t = P("UNIQUE_ITEM_TYPES")).indexOf(e) && t.push(e), void N("UNIQUE_ITEM_TYPES", t);
                    var e, t
                },
                onDeactivate: function () {
                    return e = n, (t = P("UNIQUE_ITEM_TYPES")).splice(t.indexOf(e), 1), void N("UNIQUE_ITEM_TYPES", t);
                    var e, t
                },
                isActive: function () {
                    return e = n, -1 !== P("UNIQUE_ITEM_TYPES").indexOf(e);
                    var e
                }
            }
        },
        ve = function (i) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
            return {
                getProgress: function () {
                    var e = P("STATS");
                    "string" == typeof i && (i = [i]);
                    var n = 0;
                    return Object.values(e).forEach(function (t) {
                        i.forEach(function (e) {
                            return t = null === t || void 0 === t ? void 0 : t[e]
                        }), "number" == typeof t && (n += t)
                    }), {
                        total: n,
                        target: t
                    }
                }
            }
        },
        Ee = {
            KILL_GOBLIN_BIG_BOSS: ee(ee({}, ye("I thought Big Boss was a Snake...", "Kill the Goblin Big Boss", "POTION")), ve(["BOSS_WINS", "GOBLIN_BIG_BOSS"])),
            KILL_WITCH_KING: ee(ee({}, ne("Which King?", "Kill the Witch King", "CARD")), ve(["BOSS_WINS", "WITCH_KING"])),
            KILL_DEFILED_SPRIGGAN: ee(ee({}, ie("I Speak for the Trees", "Kill the Defiled Spriggan", "WARLORD")), ve(["BOSS_WINS", "DEFILED_SPRIGGAN"])),
            KILL_CINDER_DRAGON: ee(ee({}, ye("Fus Ro Dead", "Kill the Cinder Dragon", "NECKLACE")), ve(["BOSS_WINS", "CINDER_DRAGON"])),
            KILL_THE_INEVITABLE: ee(ee({}, ne("1 in 14,000,605 Chance", "Kill The Inevitable", "BOOK")), ve(["BOSS_WINS", "THE_INEVITABLE"])),
            POWER_GAINS_TOTAL_1: ee(ee({}, ie("His power level is over 9000!", "Gain a total of over 9000 power", "ARTIFICER")), ve(["POWER_GAINS", "TOTAL"], 9001)),
            DAMAGE_TOTAL_1: ee(ee({}, ye("That's a lot of damage!", "Deal a total of 100000 damage to enemies", "HAMMER")), ve(["DAMAGE", "TOTAL"], 1e5)),
            HEAL_1: ee(ee({}, ie("Time Heals All Wounds", "Heal a total of 20000 health", "DRUID")), ve(["HEAL", "TOTAL"], 2e4)),
            HAG_ENCOUNTERS_1: ee(ee({}, ne("Ehehehehe", "Encounter 5 Hags", "KEY")), ve("HAG_ENCOUNTERS", 5)),
            ZOMBIE_KILLER_1: ee(ee({}, ne("Groovy", "Kill a total of 15 Zombies", "FOOD")), ve(["KILLED", "ZOMBIE"], 15)),
            DAGGER_1: ee(ee({}, ie("That's Not a Knife. THIS is a Knife!", "Gain stats from daggers 200 times", "ROGUE")), ve(["ITEM_ABILITY_USED", "DAGGER"], 200)),
            RECRUIT_1: ee(ee({}, ie("Pile On!", "Recruit 5 units", "MONK")), ve(["RECRUIT_ACCEPTS", "TOTAL"], 5)),
            SUIT_UP_1: ee(ee({}, ye("The Last Suit You'll Ever Wear", "Have a helmet, armor, gloves, belt, and boots at the same time.", "SHIELD")), {}, {
                getProgress: function () {
                    var e = Object.values(P("SAVES")).map(function (e) {
                        return null === (e = e.items) || void 0 === e ? void 0 : e.map(function (e) {
                            return e.type
                        }).filter(function (e) {
                            return 0 < (null == e ? void 0 : e.length)
                        })
                    }).map(function (t) {
                        return ["HELMET", "ARMOR", "GLOVES", "BELT", "BOOTS"].filter(function (e) {
                            return t.includes(e)
                        }).length
                    });
                    return {
                        total: 0 < e.length ? Math.max.apply(Math, f(e)) : 0,
                        target: 5
                    }
                }
            }),
            TIER_1: {
                name: "I Am Master of My Own Domain",
                desc: "Get past tier 10",
                img: "assets/img/ui/fastForward.png",
                unlockType: "FF_BUTTON",
                unlock: "FF_BUTTON",
                onActivate: function () {
                    return N("FF_BUTTON_ENABLED", !0)
                },
                onDeactivate: function () {
                    return N("FF_BUTTON_ENABLED", !1)
                },
                isActive: function () {
                    return P("FF_BUTTON_ENABLED")
                },
                getProgress: function () {
                    var e = Object.values(P("SAVES")).map(function (e) {
                        return e.tier - 1
                    });
                    return {
                        total: 0 < e.length ? Math.max.apply(Math, f(e)) : 0,
                        target: 10
                    }
                }
            }
        },
        ge = {
            r: 156,
            g: 0,
            b: 0
        },
        Te = {
            r: 0,
            g: 156,
            b: 0
        },
        Ae = 220,
        Ie = 500,
        Se = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "RANDOM",
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2] ? e : e.filter(function (e) {
                    return !e.dead
                });
            switch (t) {
                case "RANDOM":
                    return S(n);
                case "LOWEST_HP":
                    return n.sort(function (e, t) {
                        return e.stats.health - t.stats.health
                    }), n[0];
                case "HIGHEST_HP":
                    return n.sort(function (e, t) {
                        return t.stats.health - e.stats.health
                    }), n[0];
                case "LOWEST_PERCENT_HP":
                    return n.sort(function (e, t) {
                        return e.stats.health / e.stats.maxHealth - t.stats.health / t.stats.maxHealth
                    }), n[0];
                case "HIGHEST_PERCENT_HP":
                    return n.sort(function (e, t) {
                        return t.stats.health / t.stats.maxHealth - e.stats.health / e.stats.maxHealth
                    }), n[0]
            }
        },
        Oe = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .6,
                i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "NORMAL",
                a = 4 < arguments.length ? arguments[4] : void 0;
            t && e.attack(t, function () {
                null != a && a(t), null != t && t.damage(e.stats.power * n, e)
            }, i)
        },
        Re = {
            ASSASSIN: {
                name: "Assassinate",
                desc: "Attack the enemy with the lowest HP for 30% POW. Has a 50% chance to do 3x damage.",
                func: function (e, t, n) {
                    n = Se(n, "LOWEST_HP");
                    I(0, 1) < .5 ? Oe(e, n, .9, "SPECIAL") : Oe(e, n, .3)
                }
            },
            BARBARIAN: {
                name: "Berserk",
                desc: "If above 50% HP, attack a random enemy for 80% POW and damage self for 10% HP. If below 50% HP, heal self for 20% HP.",
                func: function (e, t, n) {
                    .5 < e.stats.health / e.stats.maxHealth ? (n = Se(n)) && (Oe(e, n, .8), e.damage(.1 * e.stats.maxHealth, e)) : (e.heal(.2 * e.stats.maxHealth, e), e.scene.effects.HEAL.play())
                }
            },
            CLERIC: {
                name: "Heal",
                desc: "Heal the ally with the lowest percentage HP for 30% POW.",
                func: function (e, t, n) {
                    t = Se(t.filter(function (e) {
                        return e.stats.health < e.stats.maxHealth
                    }), "LOWEST_PERCENT_HP");
                    oe(e, t, .3)
                }
            },
            PALADIN: {
                name: "Powerful Swing",
                desc: "Attack the enemy with the highest HP for 60% POW.",
                func: function (e, t, n) {
                    n = Se(n, "HIGHEST_HP");
                    Oe(e, n, .6)
                }
            },
            RANGER: {
                name: "Spread Shot",
                desc: "Attack up to 3 random enemies for 15% POW.",
                func: function (e, t, n) {
                    n = ae(n, 3);
                    se(e, n, .15)
                }
            },
            ARTIFICER: {
                name: "Infinite POWER!!!",
                desc: "Attack the enemy with the highest HP for 35% POW. All POW stat gains are doubled. When this unit falls, it loses 5% POW.",
                func: function (e, t, n) {
                    n = Se(n, "HIGHEST_HP");
                    Oe(e, n, .35)
                }
            },
            DRUID: {
                name: "Power of Nature",
                desc: "Heal all allies for 10% POW",
                func: function (e, t, n) {
                    t = ae(t.filter(function (e) {
                        return e.stats.health < e.stats.maxHealth
                    }), 5);
                    re(e, t, .1)
                }
            },
            MONK: {
                name: "Pressure Points",
                desc: "Attack up to 2 random enemies for 20% POW. Has a 50% chance to stun for 2 seconds.",
                func: function (e, t, n) {
                    n = ae(n, 2);
                    se(e, n, .2, "NORMAL", function (e) {
                        I(0, 1) < .5 && e.stun(2e3)
                    })
                }
            },
            ROGUE: {
                name: "Sticky Fingers",
                desc: "Attack a random enemy for 30% POW. Steal 10% of their POW for the rest of this battle.",
                func: function (n, e, t) {
                    t = Se(t);
                    Oe(n, t, .3, "NORMAL", function (e) {
                        var t = .1 * e.stats.power;
                        e.gainStats({
                            power: -t
                        }, ge, e.x, e.y), e.addTempStats({
                            power: -t
                        }), n.gainStats({
                            power: t
                        }, Te, n.x, n.y), n.addTempStats({
                            power: t
                        })
                    })
                }
            },
            WARLORD: {
                name: "Rally Around Me!",
                desc: "Attack a random enemy for 30% POW. All allies gain 5% POW for the rest of this battle.",
                func: function (n, e, t) {
                    t = Se(t);
                    Oe(n, t, .3), ae(e.filter(function (e) {
                        return e !== n
                    }), 5).forEach(function (t) {
                        n.attack(t, function () {
                            var e;
                            null != n && null !== (e = n.scene) && void 0 !== e && e.inCombat && (e = .05 * t.stats.power, t.gainStats({
                                power: e
                            }, Te, t.x, t.y), t.addTempStats({
                                power: e
                            }))
                        }, "SPECIAL")
                    })
                }
            },
            HAG: {
                name: "I Curse You!",
                desc: "You must choose one of your items of power to destroy.",
                func: function (e, t, n) {}
            },
            GOBLIN_BOOMER: {
                name: "Barrel Bombs",
                desc: "Attack up to 2 random enemies for 25% POW.",
                func: function (e, t, n) {
                    n = ae(n, 2);
                    se(e, n, .25)
                }
            },
            GOBLIN_BIG_BOSS: {
                name: "Revive Goblin",
                desc: "Revive a fallen ally goblin with full HP or attack a random enemy for 60% POW.",
                func: function (e, t, n) {
                    t = Se(t.filter(function (e) {
                        return e.dead
                    }), "RANDOM", !0);
                    t ? function (e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "NORMAL",
                            a = 4 < arguments.length ? arguments[4] : void 0;
                        t && e.attack(t, function () {
                            null != a && a(t), null != t && t.revive(n, Te, t.x, t.y)
                        }, i, !1)
                    }(e, t, t.stats.maxHealth, "SPECIAL") : (n = Se(n), Oe(e, n, .6))
                }
            },
            ZOMBIE: {
                name: "I'll Be Back",
                desc: "Attack the enemy with the lowest health for 50% POW. Automatically revives 5 seconds after dying with 1 HP.",
                func: function (e, t, n) {
                    n = Se(n, "LOWEST_HP");
                    Oe(e, n, .5)
                }
            },
            VAMPIRE: {
                name: "Drink Blood",
                desc: "Attack a random enemy for 30% POW. Heal self for the same amount.",
                func: function (t, e, n) {
                    n = Se(n);
                    Oe(t, n, .3, "NORMAL", function (e) {
                        return null == t ? void 0 : t.heal(.3 * t.stats.power, t)
                    })
                }
            },
            WITCH_KING: {
                name: "Mortal Coil",
                desc: "Attack all enemies for 15% POW. Heal all allies for 50% POW",
                func: function (t, e, n) {
                    n = ae(n, 5);
                    se(t, n, .15);
                    e = ae(e.filter(function (e) {
                        return e !== t
                    }), 5);
                    re(t, e, .5, "SPECIAL")
                }
            },
            DEEP_ELF_ASSASSIN: {
                name: "Assassinate",
                desc: "Attack the enemy with the lowest HP for 30% POW. Has a 50% chance to do 3x damage.",
                func: function (e, t, n) {
                    n = Se(n, "LOWEST_HP");
                    I(0, 1) < .5 ? Oe(e, n, .9, "SPECIAL") : Oe(e, n, .3)
                }
            },
            DEEP_ELF_RANGER: {
                name: "Spread Shot",
                desc: "Attack up to 3 random enemies for 15% POW",
                func: function (e, t, n) {
                    n = ae(n, 3);
                    se(e, n, .15)
                }
            },
            DEFILED_SPRIGGAN: {
                name: "Stronger Together",
                desc: "Attack a random enemy for 60% POW. All allies gain 10% POW, SPD, and HP for the rest of this battle.",
                func: function (a, e, t) {
                    t = Se(t);
                    Oe(a, t, .6), ae(e.filter(function (e) {
                        return e !== a
                    }), 5).forEach(function (i) {
                        a.attack(i, function () {
                            var e, t, n;
                            null != a && null !== (n = a.scene) && void 0 !== n && n.inCombat && (e = .1 * i.stats.power, t = .1 * i.stats.speed, n = .1 * i.stats.maxHealth, i.gainStats({
                                power: e,
                                speed: t,
                                health: n,
                                maxHealth: n
                            }, Te, i.x, i.y), i.addTempStats({
                                power: e,
                                speed: t,
                                health: n,
                                maxHealth: n
                            }))
                        }, "SPECIAL")
                    })
                }
            },
            HELLION: {
                name: "Growth",
                desc: "Gain +10% POW for the rest of this battle. Attack the enemy with the highest HP for 40% POW.",
                func: function (e, t, n) {
                    var i = .1 * e.stats.power;
                    e.gainStats({
                        power: i
                    }, Te, e.x, e.y), e.addTempStats({
                        power: i
                    });
                    n = Se(n, "HIGHEST_HP");
                    Oe(e, n, .4)
                }
            },
            DRAGONKIN_EVOKER: {
                name: "Heal and Harm",
                desc: "Heal a random damaged ally for 30% POW and attack a random enemy for 30% POW.",
                func: function (e, t, n) {
                    n = Se(n);
                    Oe(e, n, .3);
                    t = Se(t.filter(function (e) {
                        return e.stats.health < e.stats.maxHealth
                    }));
                    oe(e, t, .3, "SPECIAL")
                }
            },
            CINDER_DRAGON: {
                name: "I'm A Dragon, Bitch",
                desc: "Attack all enemies for 20% POW",
                func: function (e, t, n) {
                    n = ae(n, 5);
                    se(e, n, .2)
                }
            },
            STAR_ELEMENTAL: {
                name: "From Dust to Dust",
                desc: "Attack the enemy with the highest health for 10% POW and stun them for 1 second.",
                func: function (e, t, n) {
                    n = Se(n, "HIGHEST_HP");
                    Oe(e, n, .1, "NORMAL", function (e) {
                        return e.stun(1e3)
                    })
                }
            },
            SANCTUM_GUARDIAN: {
                name: "Immovable Object",
                desc: "Attack the enemy with the lowest health for 40% POW. Gain +10% HP for the rest of this battle.",
                func: function (e, t, n) {
                    n = Se(n, "LOWEST_HP");
                    Oe(e, n, .4);
                    n = .1 * e.stats.maxHealth;
                    e.gainStats({
                        health: n,
                        maxHealth: n
                    }, Te, e.x, e.y), e.addTempStats({
                        health: n,
                        maxHealth: n
                    })
                }
            },
            THE_INEVITABLE: {
                name: "I Am Inevitable",
                desc: "Attack up to 3 enemies with the highest health for 20% POW and reset their ability charge.",
                func: function (e, t, n) {
                    n = ae(n, 3, "HIGHEST_HP");
                    se(e, n, .2, "NORMAL", function (e) {
                        return null == e ? void 0 : e.resetAbility()
                    })
                }
            }
        },
        Le = ["BARBARIAN", "PALADIN", "ASSASSIN", "CLERIC", "RANGER", "ARTIFICER", "DRUID", "ROGUE", "MONK", "WARLORD", "HAG", "GOBLIN", "GOBLIN_BOOMER", "GOBLIN_VETERAN", "GOBLIN_BIG_BOSS", "BANSHEE", "ZOMBIE", "VAMPIRE", "WITCH_KING", "WRAITH", "DEEP_ELF_ASSASSIN", "DEEP_ELF_RANGER", "DEEP_ELF_WIZARD", "DEFILED_SPRIGGAN", "TREEFOLK", "HELLION", "DRAGONKIN_KNIGHT", "DRAGONKIN_EVOKER", "CINDER_DRAGON", "STAR_ELEMENTAL", "PLANAR_ADEPT", "SANCTUM_GUARDIAN", "THE_INEVITABLE"],
        _e = ["ARROW", "DAGGER", "POISON_DAGGER", "HEAL", "HAMMER", "CLUB", "HEAVY_CLUB", "CRUDE_DAGGER", "EXPLOSIVE", "DARK_MAGIC", "PINK_MAGIC", "BLUE_MAGIC", "SHORT_BLADE", "FIRE", "ROCK", "BLUE_BALL", "SPEAR", "INEVITABLE_ATTACK", "DUST"],
        Pe = {
            ASSASSIN: "DAGGER",
            ASSASSIN_SPECIAL: "POISON_DAGGER",
            BARBARIAN: "CLUB",
            CLERIC: "HEAL",
            PALADIN: "HAMMER",
            RANGER: "ARROW",
            ARTIFICER: "HEAVY_CLUB",
            DRUID: "HEAL",
            ROGUE: "DAGGER",
            MONK: "BLUE_MAGIC",
            WARLORD: "DAGGER",
            WARLORD_SPECIAL: "DUST",
            HAG: "DARK_MAGIC",
            GOBLIN: "CRUDE_DAGGER",
            GOBLIN_BOOMER: "EXPLOSIVE",
            GOBLIN_VETERAN: "CRUDE_DAGGER",
            GOBLIN_BIG_BOSS: "CRUDE_DAGGER",
            GOBLIN_BIG_BOSS_SPECIAL: "HEAL",
            VAMPIRE: "PINK_MAGIC",
            BANSHEE: "DARK_MAGIC",
            ZOMBIE: "ROCK",
            WITCH_KING: "DARK_MAGIC",
            WITCH_KING_SPECIAL: "HEAL",
            WRAITH: "DARK_MAGIC",
            DEEP_ELF_ASSASSIN: "DAGGER",
            DEEP_ELF_ASSASSIN_SPECIAL: "POISON_DAGGER",
            DEEP_ELF_RANGER: "ARROW",
            DEEP_ELF_WIZARD: "DARK_MAGIC",
            DEFILED_SPRIGGAN: "ROCK",
            DEFILED_SPRIGGAN_SPECIAL: "BLUE_MAGIC",
            TREEFOLK: "ROCK",
            HELLION: "DAGGER",
            DRAGONKIN_KNIGHT: "SHORT_BLADE",
            DRAGONKIN_EVOKER: "DARK_MAGIC",
            DRAGONKIN_EVOKER_SPECIAL: "HEAL",
            CINDER_DRAGON: "FIRE",
            STAR_ELEMENTAL: "BLUE_BALL",
            PLANAR_ADEPT: "BLUE_MAGIC",
            SANCTUM_GUARDIAN: "SPEAR",
            THE_INEVITABLE: "INEVITABLE_ATTACK"
        },
        Ne = {
            PALADIN: "THUD",
            BARBARIAN: "THUD",
            CLERIC: "HEAL",
            ARTIFICER: "THUD",
            DRUID: "HEAL",
            MONK: "FIRE",
            WARLORD_SPECIAL: "HORN",
            HAG: "FIRE",
            GOBLIN_BIG_BOSS_SPECIAL: "HEAL",
            ZOMBIE: "THUD",
            VAMPIRE: "FIRE",
            BANSHEE: "FIRE",
            WITCH_KING: "FIRE",
            WITCH_KING_SPECIAL: "HEAL",
            WRAITH: "FIRE",
            DEEP_ELF_WIZARD: "FIRE",
            DEFILED_SPRIGGAN: "THUD",
            TREEFOLK: "THUD",
            DEFILED_SPRIGGAN_SPECIAL: "POWERUP",
            DRAGONKIN_EVOKER: "FIRE",
            DRAGONKIN_EVOKER_SPECIAL: "HEAL",
            CINDER_DRAGON: "FIRE",
            STAR_ELEMENTAL: "FIRE",
            PLANAR_ADEPT: "FIRE",
            THE_INEVITABLE: "FIRE"
        },
        be = {
            GOBLIN: ["I wanna join you guys", "Glarbl?"],
            GOBLIN_BOOMER: ["I join?", "Boomer OK?"]
        },
        we = {
            PALADIN: ["Good riddance"]
        },
        xe = [
            ["GOBLIN", "GOBLIN_BOOMER", "GOBLIN_VETERAN"],
            ["BANSHEE", "ZOMBIE", "VAMPIRE"],
            ["DEEP_ELF_ASSASSIN", "DEEP_ELF_RANGER", "DEEP_ELF_WIZARD"],
            ["HELLION", "DRAGONKIN_KNIGHT", "DRAGONKIN_EVOKER"],
            ["STAR_ELEMENTAL", "PLANAR_ADEPT", "SANCTUM_GUARDIAN"]
        ],
        He = [
            ["GOBLIN_BIG_BOSS", "GOBLIN", "GOBLIN", "GOBLIN", "GOBLIN"],
            ["WITCH_KING", "WRAITH", "WRAITH"],
            ["DEFILED_SPRIGGAN", "TREEFOLK", "TREEFOLK", "TREEFOLK", "TREEFOLK"],
            ["CINDER_DRAGON"],
            ["THE_INEVITABLE", "STAR_ELEMENTAL", "STAR_ELEMENTAL", "STAR_ELEMENTAL", "STAR_ELEMENTAL"]
        ],
        Ce = [
            ["GOBLIN", "GOBLIN_BOOMER"],
            ["VAMPIRE", "ZOMBIE"],
            ["DEEP_ELF_ASSASSIN", "DEEP_ELF_RANGER"],
            ["HELLION", "DRAGONKIN_EVOKER"],
            ["STAR_ELEMENTAL", "SANCTUM_GUARDIAN"]
        ],
        Be = ["ASSASSIN", "BARBARIAN", "CLERIC", "PALADIN", "RANGER", "DRUID", "ROGUE", "ARTIFICER", "WARLORD", "MONK"],
        De = {
            ASSASSIN: {
                power: .2,
                maxHealth: .3,
                speed: .5
            },
            BARBARIAN: {
                power: .7,
                maxHealth: .2,
                speed: .1
            },
            CLERIC: {
                power: .2,
                maxHealth: .5,
                speed: .3
            },
            PALADIN: {
                power: .4,
                maxHealth: .4,
                speed: .2
            },
            RANGER: {
                power: .3,
                maxHealth: .4,
                speed: .3
            },
            ARTIFICER: {
                power: .4,
                maxHealth: .4,
                speed: .2
            },
            DRUID: {
                power: .2,
                maxHealth: .5,
                speed: .3
            },
            MONK: {
                power: .3,
                maxHealth: .4,
                speed: .3
            },
            ROGUE: {
                power: .2,
                maxHealth: .3,
                speed: .5
            },
            WARLORD: {
                power: .7,
                maxHealth: .2,
                speed: .1
            },
            GOBLIN: {
                power: .1,
                maxHealth: .4,
                speed: .5
            },
            GOBLIN_BOOMER: {
                power: .3,
                maxHealth: .5,
                speed: .2
            },
            GOBLIN_VETERAN: {
                power: .4,
                maxHealth: .3,
                speed: .3
            },
            GOBLIN_BIG_BOSS: {
                power: .3,
                maxHealth: 1,
                speed: .2
            },
            BANSHEE: {
                power: .2,
                maxHealth: .3,
                speed: .5
            },
            ZOMBIE: {
                power: .4,
                maxHealth: .4,
                speed: .2
            },
            VAMPIRE: {
                power: .2,
                maxHealth: .5,
                speed: .3
            },
            WITCH_KING: {
                power: .2,
                maxHealth: .8,
                speed: .5
            },
            WRAITH: {
                power: .3,
                maxHealth: .3,
                speed: .4
            },
            DEEP_ELF_ASSASSIN: {
                power: .2,
                maxHealth: .3,
                speed: .5
            },
            DEEP_ELF_RANGER: {
                power: .3,
                maxHealth: .4,
                speed: .3
            },
            DEEP_ELF_WIZARD: {
                power: .5,
                maxHealth: .2,
                speed: .3
            },
            DEFILED_SPRIGGAN: {
                power: .1,
                maxHealth: .9,
                speed: .5
            },
            HELLION: {
                power: .4,
                maxHealth: .1,
                speed: .5
            },
            DRAGONKIN_KNIGHT: {
                power: .2,
                maxHealth: .6,
                speed: .2
            },
            DRAGONKIN_EVOKER: {
                power: .5,
                maxHealth: .2,
                speed: .3
            },
            CINDER_DRAGON: {
                power: .3,
                maxHealth: 1,
                speed: .2
            },
            STAR_ELEMENTAL: {
                power: .1,
                maxHealth: .1,
                speed: .8
            },
            PLANAR_ADEPT: {
                power: .3,
                maxHealth: .1,
                speed: .6
            },
            SANCTUM_GUARDIAN: {
                power: .1,
                maxHealth: .8,
                speed: .1
            },
            THE_INEVITABLE: {
                power: .2,
                maxHealth: .8,
                speed: .5
            }
        },
        ke = !1,
        Ge = !1;

    function Me(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var Ue = function () {
        l(t, Phaser.Scene);
        var e = Me(t);

        function t() {
            return v(this, t), e.call(this, {
                key: "Achievements"
            })
        }
        return n(t, [{
            key: "preload",
            value: function () {
                u.preload(this, "achievements"), de(this)
            }
        }, {
            key: "create",
            value: function () {
                fe(this), new u(this, "achievements");
                var t = document.getElementById("achievements"),
                    n = P("ACHIEVEMENTS");
                Object.keys(Ee).forEach(function (e) {
                    return t.appendChild(me(e, !!n[e]))
                })
            }
        }, {
            key: "getInputs",
            value: function () {
                var e = this;
                return {
                    className: "Achievements",
                    funcs: [{
                        name: "back",
                        func: function () {
                            return e.scene.stop()
                        }
                    }]
                }
            }
        }]), t
    }();

    function We(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var Ve = function () {
        l(t, Phaser.Scene);
        var e = We(t);

        function t() {
            return v(this, t), e.call(this, {
                key: "Credits"
            })
        }
        return n(t, [{
            key: "preload",
            value: function () {
                u.preload(this, "credits")
            }
        }, {
            key: "create",
            value: function () {
                new u(this, "credits")
            }
        }, {
            key: "getInputs",
            value: function () {
                var e = this;
                return {
                    className: "Credits",
                    funcs: [{
                        name: "back",
                        func: function () {
                            return e.scene.stop()
                        }
                    }]
                }
            }
        }]), t
    }();

    function Fe(t, e) {
        var n, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, n)), i
    }
    var Ke, je = function () {
        function a(e, t) {
            var n, i = this;
            v(this, a), this.scene = e, this.saveDate = t, this.allStats = P("STATS"), this.stats = null !== (n = this.allStats[t]) && void 0 !== n ? n : {}, delete this.allStats[t], e.events.on("DAMAGE", function (e) {
                var t = e.amt,
                    n = e.attackerType,
                    e = e.defenderType;
                return i.addDamage(t, n, e)
            }), e.events.on("HEAL", function (e) {
                var t = e.amt,
                    n = e.healerType,
                    e = e.healedType;
                return i.addHeal(t, n, e)
            }), e.events.on("HURT", function (e) {
                var t = e.amt,
                    n = e.attackerType,
                    e = e.defenderType;
                return i.addHurt(t, n, e)
            }), e.events.on("KILL", function (e) {
                var t = e.attackerType,
                    e = e.defenderType;
                return i.addKill(t, e)
            }), e.events.on("DEATH", function (e) {
                var t = e.attackerType,
                    e = e.defenderType;
                return i.addDeath(t, e)
            }), e.events.on("REVIVE", function (e) {
                e = e.unitType;
                return i.addRevive(e)
            }), e.events.on("UNIT_ABILITY_USED", function (e) {
                e = e.unitType;
                return i.addUnitAbilityUse(e)
            }), e.events.on("ITEM_ABILITY_USED", function (e) {
                e = e.itemType;
                return i.addItemAbilityUse(e)
            }), e.events.on("POWER_GAIN", function (e) {
                var t = e.amt,
                    e = e.unitType;
                return i.addPowerGain(t, e)
            }), e.events.on("SPEED_GAIN", function (e) {
                var t = e.amt,
                    e = e.unitType;
                return i.addSpeedGain(t, e)
            }), e.events.on("HEALTH_GAIN", function (e) {
                var t = e.amt,
                    e = e.unitType;
                return i.addMaxHealthGain(t, e)
            }), e.events.on("POWER_LOSS", function (e) {
                var t = e.amt,
                    e = e.unitType;
                return i.addPowerLoss(t, e)
            }), e.events.on("SPEED_LOSS", function (e) {
                var t = e.amt,
                    e = e.unitType;
                return i.addSpeedLoss(t, e)
            }), e.events.on("HEALTH_LOSS", function (e) {
                var t = e.amt,
                    e = e.unitType;
                return i.addMaxHealthLoss(t, e)
            }), e.events.on("ITEM_BUY", function (e) {
                e = e.itemType;
                return i.addItemBuy(e)
            }), e.events.on("ITEM_DESTROY", function (e) {
                e = e.itemType;
                return i.addItemDestroy(e)
            }), e.events.on("HAG_ENCOUNTER", function () {
                return i.addHagEncounter()
            }), e.events.on("RECRUIT_ENCOUNTER", function (e) {
                e = e.unitType;
                return i.addRecruitEncounter(e)
            }), e.events.on("RECRUIT_DECLINE", function (e) {
                e = e.unitType;
                return i.addRecruitDeclined(e)
            }), e.events.on("RECRUIT_ACCEPT", function (e) {
                var t = e.recruitType,
                    e = e.replacedType;
                return i.addRecruitAccepted(t, e)
            }), e.events.on("BATTLE_ENCOUNTER", function () {
                return i.addBattleEncounter()
            }), e.events.on("SHOP_ENCOUNTER", function () {
                return i.addShopEncounter()
            }), e.events.on("BOSS_ENCOUNTER", function (e) {
                e = e.bossType;
                return i.addBossEncounter(e)
            }), e.events.on("BATTLE_WIN", function () {
                return i.addBattleWin()
            }), e.events.on("BOSS_WIN", function (e) {
                e = e.bossType;
                return i.addBossWin(e)
            }), e.events.on("LOSS", function () {
                return i.addLoss()
            })
        }
        return n(a, [{
            key: "addValue",
            value: function (i) {
                var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                "string" == typeof i && (i = [i]);
                var o = this.stats;
                i.forEach(function (e, t) {
                    var n;
                    t === i.length - 1 ? (o[e] = null !== (n = o[e]) && void 0 !== n ? n : s, o[e] += a) : (o[e] = null !== (n = o[e]) && void 0 !== n ? n : {}, o[e].TOTAL = null !== (n = o[e].TOTAL) && void 0 !== n ? n : 0, o[e].TOTAL += a), o = o[e]
                })
            }
        }, {
            key: "addDamage",
            value: function (e, t, n) {
                this.addValue(["DAMAGE", t], e), this.addValue(["DAMAGED", n], e)
            }
        }, {
            key: "addHeal",
            value: function (e, t, n) {
                this.addValue(["HEAL", t], e), this.addValue(["HEALED", n], e)
            }
        }, {
            key: "addHurt",
            value: function (e, t, n) {
                this.addValue(["HURT", n], e), this.addValue(["DAMAGED_BY", t], e)
            }
        }, {
            key: "addKill",
            value: function (e, t) {
                this.addValue(["KILLS", e]), this.addValue(["KILLED", t])
            }
        }, {
            key: "addDeath",
            value: function (e, t) {
                this.addValue(["KILLED_BY", e]), this.addValue(["DEATHS", t])
            }
        }, {
            key: "addRevive",
            value: function (e) {
                this.addValue(["REVIVES", e])
            }
        }, {
            key: "addUnitAbilityUse",
            value: function (e) {
                this.addValue(["ABILITY_USED", e])
            }
        }, {
            key: "addItemAbilityUse",
            value: function (e) {
                this.addValue(["ITEM_ABILITY_USED", e])
            }
        }, {
            key: "addPowerGain",
            value: function (e, t) {
                this.addValue(["POWER_GAINS", t], e)
            }
        }, {
            key: "addSpeedGain",
            value: function (e, t) {
                this.addValue(["SPEED_GAINS", t], e)
            }
        }, {
            key: "addMaxHealthGain",
            value: function (e, t) {
                this.addValue(["HEALTH_GAINS", t], e)
            }
        }, {
            key: "addPowerLoss",
            value: function (e, t) {
                this.addValue(["POWER_LOSSES", t], e)
            }
        }, {
            key: "addSpeedLoss",
            value: function (e, t) {
                this.addValue(["SPEED_LOSSES", t], e)
            }
        }, {
            key: "addMaxHealthLoss",
            value: function (e, t) {
                this.addValue(["HEALTH_LOSSES", t], e)
            }
        }, {
            key: "addItemBuy",
            value: function (e) {
                this.addValue(["ITEM_BUYS", e])
            }
        }, {
            key: "addItemDestroy",
            value: function (e) {
                this.addValue(["ITEM_DESTROYS", e])
            }
        }, {
            key: "addHagEncounter",
            value: function () {
                this.addValue("HAG_ENCOUNTERS")
            }
        }, {
            key: "addRecruitEncounter",
            value: function (e) {
                this.addValue(["RECRUIT_ENCOUNTERS", e])
            }
        }, {
            key: "addRecruitDeclined",
            value: function (e) {
                this.addValue(["RECRUIT_DECLINES", e])
            }
        }, {
            key: "addRecruitAccepted",
            value: function (e, t) {
                this.addValue(["RECRUIT_ACCEPTS", e]), this.addValue(["REPLACED_UNITS", t])
            }
        }, {
            key: "addBattleEncounter",
            value: function () {
                this.addValue("BATTLE_ENCOUNTERS")
            }
        }, {
            key: "addShopEncounter",
            value: function () {
                this.addValue("SHOP_ENCOUNTERS")
            }
        }, {
            key: "addBossEncounter",
            value: function (e) {
                this.addValue(["BOSS_ENCOUNTERS", e])
            }
        }, {
            key: "addBattleWin",
            value: function () {
                this.addValue("BATTLE_WINS")
            }
        }, {
            key: "addBossWin",
            value: function (e) {
                this.addValue(["BOSS_WINS", e])
            }
        }, {
            key: "addLoss",
            value: function () {
                this.addValue("LOSSES")
            }
        }, {
            key: "flush",
            value: function () {
                var n = this;
                N("STATS", function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Fe(Object(n), !0).forEach(function (e) {
                            m(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }(m({}, this.saveDate, this.stats), this.allStats));
                var i = P("ACHIEVEMENTS");
                Object.entries(Ee).filter(function (e) {
                    var t = p(e, 2),
                        e = t[0];
                    t[1];
                    return !i[e] && function (e) {
                        e = Ee[e].getProgress();
                        return e.total >= e.target
                    }(e)
                }).forEach(function (e) {
                    var t = p(e, 2),
                        e = t[0],
                        t = t[1];
                    i[e] = !0, N("ACHIEVEMENTS", i), t.onActivate(), n.scene.unlockAchievement(e)
                })
            }
        }]), a
    }();

    function Ye(e, t, n) {
        return (Ye = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
            e = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                return e
            }(e, t);
            if (e) {
                t = Object.getOwnPropertyDescriptor(e, t);
                return t.get ? t.get.call(n) : t.value
            }
        })(e, t, n || e)
    }

    function qe(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var Xe, Qe = !1,
        Ze = !1,
        ze = function () {
            l(u, Phaser.Physics.Matter.Image);
            var r = qe(u);

            function u(e, t, n, i, a, s) {
                var o;
                return v(this, u), (s = r.call(this, e.matter.world, a, s, J(t, n), null, {
                    shape: Ke[J(t, n).toPathCase()]
                })).type = t, s.tier = n, s.charge = 0, s.ability = W(t, n), s.color = i || (null !== (o = Q[o = t]) && void 0 !== o ? o : {
                    r: H(0, 255),
                    g: H(0, 255),
                    b: H(0, 255)
                }), s.effectSound = null !== (o = X[o = t]) && void 0 !== o ? o : "SWORD", s.overlaps = [], s.setScale(null !== (t = q[t = t]) && void 0 !== t ? t : .75).setDepth(11).setCollisionCategory(4).setCollidesWith(4).setStatic(!0), e.add.existing(h(s)), s
            }
            return n(u, [{
                key: "startActivating",
                value: function () {
                    var e, a = this;
                    null !== (e = this.activationTween) && void 0 !== e && e.stop(), this.activationTween = this.scene.tweens.add({
                        targets: this,
                        charge: 1,
                        duration: (1 - this.charge) * this.ability.speed,
                        onUpdate: function (e) {
                            var t = Math.pow(a.charge, 4);
                            a.setTint(Phaser.Display.Color.GetColor(255 - t * (255 - a.color.r), 255 - t * (255 - a.color.g), 255 - t * (255 - a.color.b))), a.emit("abilityChargeUpdated", {
                                charge: a.charge,
                                paused: !1
                            })
                        },
                        onComplete: function () {
                            a.charge = 0, a.overlaps = [], a.scene.matter.overlap(a.body, a.scene.allies, function (t, e, n) {
                                var i = e.gameObject;
                                a.overlaps.push(i), a.scene.effects[a.effectSound].play();
                                n = null !== (e = n.supports.filter(function (e) {
                                    return e.body.id === t.id
                                })[0]) && void 0 !== e ? e : n.supports[0];
                                a.ability.func(i, a.color, n.x, n.y)
                            }), B(a.scene.allies.length - a.overlaps.length), a.startActivating(), a.scene.events.emit("ITEM_ABILITY_USED", {
                                itemType: a.type
                            }), a.emit("overlapsUpdated", {
                                units: a.overlaps
                            })
                        },
                        onStop: function () {
                            var e = Math.pow(a.charge, 4);
                            a.setTint(Phaser.Display.Color.GetColor(255 - e * (255 - a.color.r), 255 - e * (255 - a.color.g), 255 - e * (255 - a.color.b))), a.emit("abilityChargeUpdated", {
                                charge: a.charge,
                                paused: !0
                            })
                        }
                    })
                }
            }, {
                key: "stopActivating",
                value: function () {
                    var e;
                    null !== (e = this.activationTween) && void 0 !== e && e.stop()
                }
            }, {
                key: "resetActivating",
                value: function () {
                    this.charge = 0, this.startActivating()
                }
            }, {
                key: "updateOverlaps",
                value: function () {
                    this.overlaps = this.scene.matter.intersectBody(this.body, this.scene.allies).map(function (e) {
                        return e.gameObject
                    }), this.emit("overlapsUpdated", {
                        units: this.overlaps
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    var e;
                    null !== (e = this.activationTween) && void 0 !== e && e.stop(), Ye(d(u.prototype), "destroy", this).call(this)
                }
            }], [{
                key: "preload",
                value: function (t) {
                    Qe || ([].concat(f(j.reduce(function (e, t) {
                        return [].concat(f(e), f(y(z).map(function (e) {
                            return J(t, e)
                        })))
                    }, [])), f(Y.map(function (e) {
                        return J(e)
                    }))).forEach(function (e) {
                        return t.load.image(e, "assets/img/items/".concat(e.toPathCase(), ".png"))
                    }), t.load.json("items-matter", "assets/data/matter/items.json"), Qe = !0)
                }
            }, {
                key: "create",
                value: function (e) {
                    Ze || (Ke = e.cache.json.get("items-matter"), Ze = !0)
                }
            }]), u
        }();

    function Je(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var $e = !1,
        et = !1,
        tt = function () {
            l(c, Phaser.Physics.Matter.Image);
            var u = Je(c);

            function c(e, t, n, i) {
                var a, s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : .5,
                    o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                    r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 0;
                return v(this, c), (a = u.call(this, e.matter.world, o, r, t, null, {
                    shape: Xe[t.toPathCase()]
                })).type = t, a.charge = s, a.stats = i, a.ability = ce(t), a.projectile = le(t), a.specialProjectile = le("".concat(t, "_SPECIAL")), a.attackSound = he(t), a.specialAttackSound = he("".concat(t, "_SPECIAL")), a.home = {
                    x: o,
                    y: r
                }, a.isAlly = n, a.dead = !1, a.numStuns = 0, a.powMultiplier = "ARTIFICER" === t ? 2 : 1, a.powDeathLoss = "ARTIFICER" === t ? .05 : 0, a.autoReviveTime = "ZOMBIE" === t ? 5e3 : 0, a.damageTextObj = void 0, a.damageAmt = 0, a.tempStats = {
                    power: 0,
                    speed: 0,
                    health: 0,
                    maxHealth: 0
                }, a.setScale(.28).setDepth(10).setFlipX(!n).setCollisionCategory(2).setCollidesWith(2).setStatic(!0), e.add.existing(h(a)), a
            }
            return n(c, [{
                key: "startAbility",
                value: function () {
                    var e, t = this;
                    this.active && !this.dead && this.scene.inCombat && (null !== (e = this.abilityTween) && void 0 !== e && e.stop(), this.abilityTween = this.scene.tweens.add({
                        targets: this,
                        charge: 1,
                        duration: (1 - this.charge) * this.getAbilityDuration(),
                        onUpdate: function (e) {
                            t.emit("abilityChargeUpdated", {
                                charge: t.charge,
                                paused: !1
                            })
                        },
                        onComplete: function () {
                            t.charge = 0, t.ability.func(t, t.isAlly ? t.scene.allies : t.scene.enemies, t.isAlly ? t.scene.enemies : t.scene.allies), t.startAbility(), t.isAlly && t.scene.events.emit("UNIT_ABILITY_USED", {
                                unitType: t.type
                            })
                        },
                        onStop: function () {
                            t.emit("abilityChargeUpdated", {
                                charge: t.charge,
                                paused: !0
                            })
                        }
                    }))
                }
            }, {
                key: "stopAbility",
                value: function () {
                    var e;
                    null !== (e = this.abilityTween) && void 0 !== e && e.stop()
                }
            }, {
                key: "resetAbility",
                value: function () {
                    this.charge = 0, this.startAbility()
                }
            }, {
                key: "stun",
                value: function () {
                    var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 2e3;
                    this.numStuns++, this.stopAbility(), this.scene.time.delayedCall(t, function () {
                        e.numStuns--, 0 === e.numStuns && e.startAbility()
                    })
                }
            }, {
                key: "getAbilityDuration",
                value: function () {
                    var e = [].concat(f(this.scene.allies.map(function (e) {
                        return e.stats.speed
                    })), f(this.scene.enemies.map(function (e) {
                        return null === (e = e.stats) || void 0 === e ? void 0 : e.speed
                    }).filter(function (e) {
                        return "number" == typeof e
                    })));
                    return Math.max.apply(Math, f(e)) / this.stats.speed * 2e3
                }
            }, {
                key: "attack",
                value: function (e, t) {
                    var n, i, a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "NORMAL",
                        s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                    switch (null !== (n = this.attackTween) && void 0 !== n && n.stop(), this.x = this.home.x, a) {
                        case "NORMAL":
                            i = this.projectile, this.scene.effects[this.attackSound].play();
                            break;
                        case "SPECIAL":
                            i = this.specialProjectile, this.scene.effects[this.specialAttackSound].play()
                    }
                    this.attackTween = this.scene.tweens.add({
                        targets: this,
                        x: this.home.x + 20 * (this.isAlly ? 1 : -1),
                        duration: 300,
                        yoyo: !0,
                        ease: "Quint.easeOut"
                    });
                    var a = Phaser.Math.Angle.Between(this.x, this.y, e.x, e.y),
                        o = this.scene.getProjectile(this.x, this.y, i, a);
                    this.scene.tweens.add({
                        targets: o,
                        x: e.x,
                        y: e.y,
                        duration: 450,
                        onComplete: function () {
                            null != e && e.active && (t(), s && (o.scene.cameras.main.shake(100, .01), o.scene.effects.STAB.play())), o.setActive(!1).setVisible(!1)
                        }
                    })
                }
            }, {
                key: "damage",
                value: function (e, t) {
                    var n, i, a = this;
                    this.dead || (n = Math.min(this.stats.health, e), this.stats.health -= n, null !== (e = this.damageTween) && void 0 !== e && e.stop(), this.tint = 16711680, i = null !== (t = null == t ? void 0 : t.type) && void 0 !== t ? t : "NONE", this.damageTween = this.scene.tweens.addCounter({
                        from: 0,
                        to: 255,
                        duration: 500,
                        onUpdate: function (e) {
                            e = Math.floor(e.getValue());
                            a.tint = Phaser.Display.Color.GetColor(255, e, e)
                        },
                        onComplete: function () {
                            0 < a.stats.health ? a.tint = 16777215 : (a.isAlly ? a.scene.events.emit("DEATH", {
                                attackerType: i,
                                defenderType: a.type
                            }) : a.scene.events.emit("KILL", {
                                attackerType: i,
                                defenderType: a.type
                            }), a.die())
                        }
                    }), this.emit("gainStats", {
                        stats: {
                            health: -n
                        }
                    }), 0 < n && (this.isAlly ? this.scene.events.emit("HURT", {
                        amt: n,
                        attackerType: i,
                        defenderType: this.type
                    }) : this.scene.events.emit("DAMAGE", {
                        amt: n,
                        attackerType: i,
                        defenderType: this.type
                    })), null !== (t = this.damageTextObj) && void 0 !== t && t.active ? (this.damageAmt += n, this.damageTextObj.setText(w(-this.damageAmt, !0, 0))) : (this.damageAmt = n, this.damageTextObj = this.scene.getPopupText(this.x, this.y - 30, w(-this.damageAmt, !0, 0), ge), this.scene.uiTweens.add({
                        targets: this.damageTextObj,
                        y: this.damageTextObj.y - 20,
                        alpha: 0,
                        duration: 500,
                        ease: "Quint.easeIn",
                        onComplete: function () {
                            a.damageTextObj.setActive(!1), a.damageTextObj = void 0
                        }
                    })))
                }
            }, {
                key: "heal",
                value: function (e, t) {
                    var n, i = this;
                    this.dead || (n = Math.min(this.stats.maxHealth - this.stats.health, e), this.stats.health += n, null !== (e = this.damageTween) && void 0 !== e && e.stop(), this.tint = 65280, this.damageTween = this.scene.tweens.addCounter({
                        from: 0,
                        to: 255,
                        duration: 500,
                        onUpdate: function (e) {
                            e = Math.floor(e.getValue());
                            i.tint = Phaser.Display.Color.GetColor(e, 255, e)
                        }
                    }), this.emit("gainStats", {
                        stats: {
                            health: n
                        }
                    }), this.isAlly && 0 < n && (t = null !== (t = null == t ? void 0 : t.type) && void 0 !== t ? t : "NONE", this.scene.events.emit("HEAL", {
                        amt: n,
                        healerType: t,
                        healedType: this.type
                    })))
                }
            }, {
                key: "die",
                value: function () {
                    var e, t = this;
                    this.stopAbility(), this.tint = 4013373, this.dead = !0, this.emit("dead"), this.autoReviveTime && this.scene.time.delayedCall(this.autoReviveTime, function () {
                        t.active && t.scene.inCombat && 0 < t.getAllies().filter(function (e) {
                            return !e.dead
                        }).length && t.revive(1, Te, t.x, t.y)
                    }), this.powDeathLoss && (e = (this.stats.power - this.tempStats.power * this.powMultiplier) * this.powDeathLoss, this.gainStats({
                        power: -e
                    }, ge, this.x, this.y))
                }
            }, {
                key: "revive",
                value: function (e, t, n, i) {
                    var a;
                    this.dead && (this.stats.health = e, this.tint = 16777215, this.dead = !1, this.startAbility(), t && (a = this.scene.getPopupText(n, i, "??????", t), this.scene.uiTweens.add({
                        targets: a,
                        y: a.y - 20,
                        alpha: 0,
                        duration: 500,
                        ease: "Quint.easeIn",
                        onComplete: function () {
                            return a.setActive(!1)
                        }
                    })), this.emit("revive"), this.emit("gainStats", {
                        stats: {
                            health: e
                        }
                    }), this.isAlly && this.scene.events.emit("REVIVE", {
                        unitType: this.type
                    }))
                }
            }, {
                key: "addTempStats",
                value: function (e) {
                    var t;
                    this.tempStats.power += null !== (t = e.power) && void 0 !== t ? t : 0, this.tempStats.speed += null !== (t = e.speed) && void 0 !== t ? t : 0, this.tempStats.health += null !== (t = e.health) && void 0 !== t ? t : 0, this.tempStats.maxHealth += null !== (e = e.maxHealth) && void 0 !== e ? e : 0
                }
            }, {
                key: "resetTempStats",
                value: function () {
                    this.gainStats({
                        power: -this.tempStats.power,
                        speed: -this.tempStats.speed,
                        health: -this.tempStats.health,
                        maxHealth: -this.tempStats.maxHealth
                    }), this.tempStats = {
                        power: 0,
                        speed: 0,
                        health: 0,
                        maxHealth: 0
                    }
                }
            }, {
                key: "syncScale",
                value: function () {
                    var e, t;
                    this.isAlly && (t = this.getAllies().map(function (e) {
                        var t;
                        return null === (t = e.getTotalStats) || void 0 === t ? void 0 : t.call(e)
                    }).filter(function (e) {
                        return "number" == typeof e
                    }), e = Math.min.apply(Math, f(t)), t = Math.max.apply(Math, f(t)), this.setScale(E(this.getTotalStats(), e, t, .23, .33)))
                }
            }, {
                key: "getTotalStats",
                value: function () {
                    return this.stats.power + this.stats.speed + this.stats.maxHealth
                }
            }, {
                key: "getAllies",
                value: function () {
                    var t = this,
                        e = this.isAlly ? this.scene.allies : this.scene.enemies;
                    return e = !(!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) ? e.filter(function (e) {
                        return e !== t
                    }) : e
                }
            }, {
                key: "gainStats",
                value: function (e, t, n, i) {
                    var a, s, o = "\n";
                    "number" == typeof e.power && 0 !== e.power && (a = e.power * this.powMultiplier, this.stats.power += a, this.stats.power < 1 && (this.stats.power = 1), o += "?????? ".concat(w(a, !0, 0), "\n"), this.isAlly && (0 < a ? this.scene.events.emit("POWER_GAIN", {
                        amt: a,
                        unitType: this.type
                    }) : this.scene.events.emit("POWER_LOSS", {
                        amt: a,
                        unitType: this.type
                    }))), "number" == typeof e.speed && 0 !== e.speed && (this.stats.speed += e.speed, this.stats.speed < 1 && (this.stats.speed = 1), o += "?????? ".concat(w(e.speed, !0, 0), "\n"), this.isAlly && (0 < e.speed ? this.scene.events.emit("SPEED_GAIN", {
                        amt: e.speed,
                        unitType: this.type
                    }) : this.scene.events.emit("SPEED_LOSS", {
                        amt: e.speed,
                        unitType: this.type
                    }))), "number" == typeof e.maxHealth && 0 !== e.maxHealth && (this.stats.maxHealth += e.maxHealth, this.stats.maxHealth < 1 && (this.stats.maxHealth = 1), o += "????????? ".concat(w(e.maxHealth, !0, 0), "\n"), this.isAlly && (0 < e.maxHealth ? this.scene.events.emit("HEALTH_GAIN", {
                        amt: e.maxHealth,
                        unitType: this.type
                    }) : this.scene.events.emit("HEALTH_LOSS", {
                        amt: e.maxHealth,
                        unitType: this.type
                    }))), "number" == typeof e.health && 0 < this.stats.health && (this.stats.health += e.health, this.stats.health > this.stats.maxHealth && (this.stats.health = this.stats.maxHealth), this.stats.health < 1 && (this.stats.health = 1), e.maxHealth !== e.health && 0 < e.health && (o += "????????? ".concat(w(e.health, !1, 0), "\n"))), void 0 !== t && (s = this.scene.getPopupText(n, i, o, t), this.scene.uiTweens.add({
                        targets: s,
                        y: s.y - 20,
                        alpha: 0,
                        duration: 500,
                        ease: "Quint.easeIn",
                        onComplete: function () {
                            return s.setActive(!1)
                        }
                    })), this.getAllies().forEach(function (e) {
                        return e.syncScale()
                    }), this.emit("gainStats", {
                        stats: {
                            power: e.power * this.powMultiplier,
                            speed: e.speed,
                            health: e.health,
                            maxHealth: e.maxHealth
                        }
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    var e;
                    null !== (e = this.attackTween) && void 0 !== e && e.stop(), null !== (e = this.damageTween) && void 0 !== e && e.stop(), null !== (e = this.abilityTween) && void 0 !== e && e.stop(), Ye(d(c.prototype), "destroy", this).call(this)
                }
            }], [{
                key: "preload",
                value: function (t) {
                    $e || ($e = !0, Le.forEach(function (e) {
                        return t.load.image(e, "assets/img/units/".concat(e.toPathCase(), ".png"))
                    }), _e.forEach(function (e) {
                        return t.load.image(e, "assets/img/projectiles/".concat(e.toPathCase(), ".png"))
                    }), t.load.json("units-matter", "assets/data/matter/units.json"))
                }
            }, {
                key: "create",
                value: function (e) {
                    et || (et = !0, Xe = e.cache.json.get("units-matter"))
                }
            }]), c
        }(),
        nt = 1920,
        it = 1080,
        at = {
            x: 960,
            y: 540
        };

    function st(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var ot, rt, ut = function () {
            l(s, Phaser.GameObjects.Container);
            var a = st(s);

            function s(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                v(this, s);
                var i = a.call(this, e, t, n),
                    t = e.add.image(0, 0, "trail"),
                    n = e.add.image(nt, 0, "trail");
                return i.add(t), i.add(n), i.moveTween = e.tweens.add({
                    targets: h(i),
                    x: -nt,
                    repeat: -1,
                    duration: 1e4
                }), e.add.existing(h(i)), i
            }
            return n(s, [{
                key: "startMoving",
                value: function () {
                    this.moveTween.resume()
                }
            }, {
                key: "stopMoving",
                value: function () {
                    this.moveTween.pause()
                }
            }], [{
                key: "preload",
                value: function (e) {
                    e.load.image("trail", "assets/img/environment/trail.png")
                }
            }]), s
        }(),
        ct = function () {
            function c(i, n) {
                v(this, c), this.scene = i, this.item = n;
                var e = document.createElement("div");
                e.style.transform = "translateY(100%)", e.classList.add("info-hud", "col", "full-height"), e.innerHTML = ot, this.div = e, document.getElementById("item-hud").appendChild(e);
                var t = e.querySelector(".item-info-img"),
                    a = e.querySelector(".ability"),
                    s = e.querySelector(".ability-text"),
                    o = e.querySelector(".ability-name"),
                    r = e.querySelector(".ability-desc"),
                    u = f(e.querySelectorAll(".overlap-unit-img"));
                t.src = "assets/img/items/".concat(J(n.type, n.tier).toPathCase(), ".png"), a.style.width = 0 === n.charge ? 0 : "max(".concat(100 * n.charge, "%, 40px)"), a.style.background = "var(--light)", s.innerText = g(n.charge, !1, 0), o.innerText = n.ability.name, r.innerText = n.ability.desc, u.forEach(function (e) {
                    var t = e.dataset.index,
                        t = i.allies[t];
                    e.src = "assets/img/units/".concat(t.type.toPathCase(), ".png"), n.overlaps.includes(t) && e.classList.remove("silhouette")
                }), n.on("abilityChargeUpdated", function (e) {
                    var t = e.charge,
                        e = e.paused,
                        e = void 0 !== e && e;
                    a.style.width = 0 === t ? 0 : "max(".concat(100 * t, "%, 40px)"), a.style.background = e ? "var(--light)" : "rgb(".concat(n.color.r, ",").concat(n.color.g, ",").concat(n.color.b, ")"), s.innerText = g(t, !1, 0)
                }), n.on("overlapsUpdated", function (e) {
                    var n = e.units;
                    u.forEach(function (e) {
                        var t = e.dataset.index,
                            t = i.allies[t];
                        n.includes(t) ? e.classList.remove("silhouette") : e.classList.add("silhouette")
                    })
                }), i.events.on("RECRUIT_ACCEPT", function () {
                    u.forEach(function (e) {
                        var t = e.dataset.index,
                            t = i.allies[t];
                        e.src = "assets/img/units/".concat(t.type.toPathCase(), ".png")
                    })
                }), setTimeout(function () {
                    return e.style.transform = "translateY(0)"
                }, 100)
            }
            return n(c, [{
                key: "hide",
                value: function () {
                    var e = this;
                    this.div.style.transform = "translateY(100%)", setTimeout(function () {
                        return e.div.remove()
                    }, 1e3)
                }
            }], [{
                key: "preload",
                value: function (e) {
                    e.load.html("item-info-hud-html", "assets/html/item-info-hud.html")
                }
            }, {
                key: "create",
                value: function (e) {
                    ot = e.cache.html.get("item-info-hud-html")
                }
            }]), c
        }();

    function lt(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var ht, dt = function () {
        l(o, Phaser.Events.EventEmitter);
        var s = lt(o);

        function o(e, t) {
            var n, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            v(this, o), (n = s.call(this)).scene = e, n.item = t, n.slot = i;
            var a = document.createElement("div");
            return a.style.transform = "translateY(-100%)", a.style.transitionDelay = "".concat(.5 * i, "s"), a.classList.add("hud", "col"), a.innerHTML = rt, n.div = a, (t.isAlly ? document.getElementById("ally-huds") : document.getElementById("enemy-huds")).insertChildAtIndex(a, i), a.querySelector(".item-hud-card").addEventListener("mouseenter", function () {
                return e.hud.showItemInfo(t)
            }), a.querySelector(".item-hud-card").addEventListener("click", function () {
                return n.emit("acceptPressed", {
                    item: t
                })
            }), a.querySelector(".destroy-button").addEventListener("click", function () {
                return n.emit("destroyPressed", {
                    item: t
                })
            }), a.querySelector(".item-img").src = "assets/img/items/".concat(J(t.type, t.tier).toPathCase(), ".png"), a.querySelector(".item-name").innerText = t.ability.name, a.querySelector(".item-desc").innerText = t.ability.desc, setTimeout(function () {
                return a.style.transform = "translateY(0)"
            }, 100), n
        }
        return n(o, [{
            key: "showDestroyButton",
            value: function () {
                this.div.querySelector(".destroy-button").classList.remove("no-display")
            }
        }, {
            key: "hide",
            value: function () {
                var e = this;
                this.div.style.transform = "translateY(-100%)", setTimeout(function () {
                    return e.div.remove()
                }, 1e3 + 500 * this.slot)
            }
        }], [{
            key: "preload",
            value: function (e) {
                e.load.html("item-shop-hud-html", "assets/html/item-shop-hud.html")
            }
        }, {
            key: "create",
            value: function (e) {
                rt = e.cache.html.get("item-shop-hud-html")
            }
        }]), o
    }();

    function ft(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var mt, pt = function () {
            l(m, Phaser.Events.EventEmitter);
            var f = ft(m);

            function m(e, a) {
                var s, t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                v(this, m), (s = f.call(this)).scene = e, s.unit = a, s.slot = t;
                var n = document.createElement("div");
                n.style.transform = "translateY(-100%)", n.style.transitionDelay = "".concat(.5 * t, "s"), n.classList.add("hud", "col"), n.innerHTML = ht, s.div = n, s.recruitButton = n.querySelector(".recruit-button"), (a.isAlly ? document.getElementById("ally-huds") : document.getElementById("enemy-huds")).insertChildAtIndex(n, t), n.querySelector(".unit-hud-card").addEventListener("mouseenter", function () {
                    return e.hud.showUnitInfo(a)
                }), n.querySelector(".unit-name").innerText = a.type.toTitleCase();
                var i = n.querySelector(".unit-img"),
                    o = n.querySelector(".pow-text"),
                    r = n.querySelector(".spd-text"),
                    u = n.querySelector(".hp-text"),
                    c = n.querySelector(".total-text"),
                    l = n.querySelector(".health"),
                    h = n.querySelector(".decay"),
                    d = n.querySelector(".ability");
                i.src = "assets/img/units/".concat(a.type.toPathCase(), ".png"), a.isAlly || (i.style.transform = "scaleX(-1)"), o.innerText = w(a.stats.power, !1, 0), r.innerText = w(a.stats.speed, !1, 0), u.innerText = w(a.stats.maxHealth, !1, 0), c.innerText = "Total: ".concat(w(a.getTotalStats(), !1, 0));
                t = 0 === a.stats.health ? 0 : "max(".concat(a.stats.health / a.stats.maxHealth * 100, "%, 10px)");
                return l.style.width = t, h.style.width = t, d.style.width = "max(".concat(100 * a.charge, "%, 10px)"), n.querySelector(".recruit-button").addEventListener("click", function () {
                    return s.emit("recruitPressed", {
                        unit: a
                    })
                }), a.on("gainStats", function (e) {
                    var t = e.stats,
                        n = t.power,
                        i = t.speed,
                        e = (t.health, t.maxHealth);
                    o.innerText = w(a.stats.power, !1, 0), r.innerText = w(a.stats.speed, !1, 0), u.innerText = w(a.stats.maxHealth, !1, 0), c.innerText = "Total: ".concat(w(a.getTotalStats(), !1, 0));
                    t = 0 === a.stats.health ? 0 : "max(".concat(a.stats.health / a.stats.maxHealth * 100, "%, 10px)");
                    l.style.width = t, h.style.width = t, s.flashTextColor(o, n), s.flashTextColor(r, i), s.flashTextColor(u, e)
                }), a.on("abilityChargeUpdated", function (e) {
                    var t = e.charge,
                        e = e.paused,
                        e = void 0 !== e && e;
                    d.style.width = "max(".concat(100 * t, "%, 10px)"), d.style.background = e ? "var(--light)" : ""
                }), a.on("dead", function () {
                    i.style.filter = "grayscale(100%)", l.style.width = 0, h.style.width = 0
                }), a.on("revive", function () {
                    i.style.filter = ""
                }), setTimeout(function () {
                    return n.style.transform = "translateY(0)"
                }, 100), s
            }
            return n(m, [{
                key: "flashTextColor",
                value: function (e, t) {
                    "number" == typeof t && (0 < t ? (e.classList.add("green-text"), e.classList.add("enlarge"), setTimeout(function () {
                        e.classList.remove("green-text"), e.classList.remove("enlarge")
                    }, 1)) : t < 0 && (e.classList.add("red-text"), e.classList.add("enlarge"), setTimeout(function () {
                        e.classList.remove("red-text"), e.classList.remove("enlarge")
                    }, 1)))
                }
            }, {
                key: "setRecruitButtonText",
                value: function (e) {
                    this.recruitButton.innerText = e
                }
            }, {
                key: "hide",
                value: function () {
                    var e = this;
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (this.div.style.transitionDelay = "0s"), this.div.style.transform = "translateY(-100%)", setTimeout(function () {
                        return e.div.remove()
                    }, 1e3 + 500 * this.slot)
                }
            }], [{
                key: "preload",
                value: function (e) {
                    e.load.html("unit-hud-html", "assets/html/unit-hud.html")
                }
            }, {
                key: "create",
                value: function (e) {
                    ht = e.cache.html.get("unit-hud-html")
                }
            }]), m
        }(),
        yt = function () {
            function y(e, a) {
                var s = this;
                v(this, y), this.scene = e, this.unit = a;
                var t = document.createElement("div");
                t.style.transform = "translateY(100%)", t.classList.add("info-hud", "col", "full-height"), t.innerHTML = mt, this.div = t, document.getElementById("unit-hud").appendChild(t), t.querySelector(".unit-name").innerText = a.type.toTitleCase();
                var n = t.querySelector(".unit-info-img"),
                    o = t.querySelector(".pow-text"),
                    r = t.querySelector(".spd-text"),
                    u = t.querySelector(".hp-text"),
                    c = t.querySelector(".health"),
                    l = t.querySelector(".decay"),
                    h = t.querySelector(".health-percent"),
                    d = t.querySelector(".health-text"),
                    i = t.querySelector(".ability"),
                    f = t.querySelector(".ability-text"),
                    m = t.querySelector(".ability-name"),
                    p = t.querySelector(".ability-desc");
                n.src = "assets/img/units/".concat(a.type.toPathCase(), ".png"), o.innerText = w(a.stats.power, !1, 0), r.innerText = w(a.stats.speed, !1, 0), u.innerText = w(a.stats.maxHealth, !1, 0);
                e = 0 === a.stats.health ? 0 : "max(".concat(a.stats.health / a.stats.maxHealth * 100, "%, 40px)");
                c.style.width = e, l.style.width = e, h.innerText = g(a.stats.health / a.stats.maxHealth, !1, 0), d.innerText = "".concat(w(a.stats.health, !1, 0), " / ").concat(w(a.stats.maxHealth, !1, 0)), i.style.width = "max(".concat(100 * a.charge, "%, 40px)"), f.innerText = g(a.charge, !1, 0), m.innerText = "Ability: ".concat(a.ability.name), p.innerText = a.ability.desc, a.on("gainStats", function (e) {
                    var t = e.stats,
                        n = t.power,
                        i = t.speed,
                        e = (t.health, t.maxHealth);
                    o.innerText = w(a.stats.power, !1, 0), r.innerText = w(a.stats.speed, !1, 0), u.innerText = w(a.stats.maxHealth, !1, 0);
                    t = 0 === a.stats.health ? 0 : "max(".concat(a.stats.health / a.stats.maxHealth * 100, "%, 40px)");
                    c.style.width = t, l.style.width = t, h.innerText = g(a.stats.health / a.stats.maxHealth, !1, 0), d.innerText = "".concat(w(a.stats.health, !1, 0), " / ").concat(w(a.stats.maxHealth, !1, 0)), s.flashTextColor(o, n), s.flashTextColor(r, i), s.flashTextColor(u, e)
                }), a.on("abilityChargeUpdated", function (e) {
                    var t = e.charge,
                        e = e.paused,
                        e = void 0 !== e && e;
                    i.style.width = "max(".concat(100 * t, "%, 40px)"), i.style.background = e ? "var(--light)" : "", f.innerText = g(t, !1, 0)
                }), a.on("dead", function () {
                    n.style.filter = "grayscale(100%)", c.style.width = 0, l.style.width = 0
                }), a.on("revive", function () {
                    n.style.filter = ""
                }), setTimeout(function () {
                    return t.style.transform = "translateY(0)"
                }, 100)
            }
            return n(y, [{
                key: "flashTextColor",
                value: function (e, t) {
                    "number" == typeof t && (0 < t ? (e.classList.add("green-text"), e.classList.add("enlarge"), setTimeout(function () {
                        e.classList.remove("green-text"), e.classList.remove("enlarge")
                    }, 100)) : t < 0 && (e.classList.add("red-text"), e.classList.add("enlarge"), setTimeout(function () {
                        e.classList.remove("red-text"), e.classList.remove("enlarge")
                    }, 100)))
                }
            }, {
                key: "hide",
                value: function () {
                    var e = this;
                    this.div.style.transform = "translateY(100%)", setTimeout(function () {
                        return e.div.remove()
                    }, 1e3)
                }
            }], [{
                key: "preload",
                value: function (e) {
                    e.load.html("unit-info-hud-html", "assets/html/unit-info-hud.html")
                }
            }, {
                key: "create",
                value: function (e) {
                    mt = e.cache.html.get("unit-info-hud-html")
                }
            }]), y
        }();

    function vt(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Et(e) {
        e < Pt && (_t = 0, Pt = 1);
        for (var t = Pt; t < e; t++) _t += 6 * t * 2 * 46, 1 < t && (_t += 9 * (t - 1) * 2 * 46), 2 < t && (_t += 9 * (t - 2) * 2 * 46), 3 < t && (_t += 6 * (t - 3) * 2 * 46);
        return (Ie + _t / 5) * (.5 + .04 * ((Pt = e) - 1))
    }

    function gt(e, t) {
        return {
            type: "INFO",
            title: e,
            text: t,
            nextText: 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "Next"
        }
    }
    var Tt, At, It, St = function () {
            l(a, Phaser.GameObjects.Container);
            var i = vt(a);

            function a(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                return v(this, a), (n = i.call(this, e, t, n)).setDepth(110), n.infoText = e.add.text(0, 0, "", {
                    fontSize: "18px",
                    fontFamily: "Roboto",
                    color: "var(--dark)",
                    align: "center"
                }).setOrigin(.5, .5), n.add(n.infoText), e.add.existing(h(n)), n
            }
            return n(a, [{
                key: "setAllies",
                value: function () {
                    this.allyHuds = this.showHuds(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "UNITS", this.allyHuds)
                }
            }, {
                key: "setEnemies",
                value: function () {
                    this.enemyHuds = this.showHuds(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "UNITS", this.enemyHuds)
                }
            }, {
                key: "hideHuds",
                value: function (e) {
                    null != e && e.forEach(function (e) {
                        return e.hide()
                    })
                }
            }, {
                key: "showHuds",
                value: function (t, e) {
                    var i = this,
                        a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                    a.filter(function (e) {
                        return !t.includes(e.unit)
                    }).forEach(function (e) {
                        return e.hide(!0)
                    });
                    var s = [];
                    switch (e) {
                        case "UNITS":
                            t.forEach(function (t, e) {
                                var n = a.find(function (e) {
                                    return e.unit === t
                                });
                                n ? s.push(n) : ((e = new pt(i.scene, t, e)).addListener("recruitPressed", function (e) {
                                    e = e.unit;
                                    return i.scene.recruitUnit(e)
                                }), s.push(e))
                            });
                            break;
                        case "RECRUIT":
                            t.forEach(function (t, e) {
                                var n = a.find(function (e) {
                                    return e.unit === t
                                });
                                n ? s.push(n) : ((e = new pt(i.scene, t, e)).addListener("recruitPressed", function (e) {
                                    e = e.unit;
                                    return i.scene.recruitUnit(e)
                                }), e.setRecruitButtonText("Decline"), s.push(e))
                            }), this.showRecruitButtons();
                            break;
                        case "ITEM_SHOP":
                            t.forEach(function (t, e) {
                                var n = a.find(function (e) {
                                    return e.unit === t
                                });
                                n ? s.push(n) : ((e = new dt(i.scene, t, e)).addListener("acceptPressed", function (e) {
                                    e = e.item;
                                    return i.scene.selectShopItem(e)
                                }), s.push(e))
                            });
                            break;
                        case "CURSE":
                            t.forEach(function (t, e) {
                                var n = a.find(function (e) {
                                    return e.unit === t
                                });
                                n ? s.push(n) : ((e = new dt(i.scene, t, e)).showDestroyButton(), e.addListener("destroyPressed", function (e) {
                                    e = e.item;
                                    return i.scene.destroyItem(e)
                                }), s.push(e))
                            })
                    }
                    return s
                }
            }, {
                key: "setInfoText",
                value: function () {
                    var t = this,
                        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    0 < e.length && (e += "\n\n?????? ".concat(this.scene.encounterIndex, "\n?????? ").concat(this.scene.tier)), this.infoText.text = e, this.infoText.alpha = 1, this.scene.uiTweens.addCounter({
                        from: 72,
                        to: 18,
                        duration: 2e3,
                        ease: "Quint.easeIn",
                        onUpdate: function (e) {
                            return t.infoText.setFontSize(e.getValue())
                        },
                        onComplete: function () {
                            n && t.scene.uiTweens.add({
                                targets: t.infoText,
                                alpha: 0,
                                duration: 2e3
                            })
                        }
                    })
                }
            }, {
                key: "showRecruitButtons",
                value: function () {
                    f(document.getElementsByClassName("recruit-button")).forEach(function (e) {
                        return e.classList.remove("no-display")
                    })
                }
            }, {
                key: "hideRecruitButtons",
                value: function () {
                    f(document.getElementsByClassName("recruit-button")).forEach(function (e) {
                        return e.classList.add("no-display")
                    })
                }
            }, {
                key: "showUnitInfo",
                value: function (e) {
                    var t;
                    e && (null === (t = this.unitInfoPanel) || void 0 === t ? void 0 : t.unit) !== e && (null !== (t = this.unitInfoPanel) && void 0 !== t && t.hide(), this.unitInfoPanel = new yt(this.scene, e))
                }
            }, {
                key: "showItemInfo",
                value: function (e) {
                    var t;
                    e && (null === (t = this.itemInfoPanel) || void 0 === t ? void 0 : t.item) !== e && (null !== (t = this.itemInfoPanel) && void 0 !== t && t.hide(), this.itemInfoPanel = new ct(this.scene, e))
                }
            }], [{
                key: "preload",
                value: function (e) {
                    e.load.image("panel-beige", "assets/img/ui/panel_beigeLight.png"), pt.preload(e), yt.preload(e), dt.preload(e), ct.preload(e)
                }
            }, {
                key: "create",
                value: function (e) {
                    pt.create(e), yt.create(e), dt.create(e), ct.create(e)
                }
            }]), a
        }(),
        Ot = function () {
            function s(e, t, n) {
                var i = this;
                v(this, s), this.scene = e, this.pages = t, this.onClose = n, this.pageIndex = 0;
                var a = document.createElement("div");
                a.style.transform = "scale(0)", a.classList.add("info-popup", "container", "col", "interactive"), a.innerHTML = Tt, this.div = a, document.getElementById("game-container").appendChild(a), this.body = a.querySelector(".info-popup-body"), this.nextButton = a.querySelector(".next-button"), this.skipButton = a.querySelector(".skip-button"), this.nextButton.addEventListener("click", function () {
                    return i.nextPage()
                }), this.skipButton.addEventListener("click", function () {
                    return i.skip()
                }), this.nextPage(0), setTimeout(function () {
                    return a.style.transform = "scale(1)"
                }, 100)
            }
            return n(s, [{
                key: "nextPage",
                value: function () {
                    if (this.pageIndex += 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, this.pageIndex >= this.pages.length) this.skip();
                    else {
                        var e = this.pages[this.pageIndex];
                        switch (e.type) {
                            case "INFO":
                                this.body.innerHTML = At;
                                var t = this.body.querySelector(".info-popup-title");
                                e.title ? (t.innerText = e.title, t.classList.remove("no-display")) : t.classList.add("no-display"), this.body.querySelector(".info-popup-text").innerText = e.text;
                                break;
                            case "ACHIEVEMENT":
                                this.body.innerHTML = It, this.body.querySelector(".achievement").appendChild(me(e.achievementType))
                        }
                        this.nextButton.innerText = e.nextText, this.pageIndex === this.pages.length - 1 && this.skipButton.classList.add("no-display")
                    }
                }
            }, {
                key: "skip",
                value: function () {
                    this.onClose(), this.hide()
                }
            }, {
                key: "hide",
                value: function () {
                    var e = this;
                    this.div.style.transform = "scale(0)", setTimeout(function () {
                        return e.div.remove()
                    }, 1e3)
                }
            }], [{
                key: "preload",
                value: function (e) {
                    e.load.html("info-popup-html", "assets/html/info-popup.html"), e.load.html("info-popup-info-html", "assets/html/info-popup-info.html"), e.load.html("info-popup-achievement-html", "assets/html/info-popup-achievement.html"), de(e)
                }
            }, {
                key: "create",
                value: function (e) {
                    Tt = e.cache.html.get("info-popup-html"), At = e.cache.html.get("info-popup-info-html"), It = e.cache.html.get("info-popup-achievement-html"), fe(e)
                }
            }]), s
        }(),
        Rt = function () {
            function o(e, t, n, i) {
                var a = this;
                v(this, o), this.scene = e, this.unit = t;
                var s = document.createElement("div"),
                    e = t.isAlly ? e.allies.findIndex(function (e) {
                        return e === t
                    }) < 3 : 3 <= e.enemies.findIndex(function (e) {
                        return e === t
                    });
                s.style.left = "".concat(t.x - 110 + 960, "px"), s.style.top = "".concat(t.y - 165 + 540, "px"), this.translateX = e ? "75%" : "-75%", s.style.transform = "translateX(".concat(this.translateX, ") scale(0)"), s.classList.add("bubble", "bubble-bottom-".concat(e ? "left" : "right")), s.innerText = n, this.div = s, document.getElementById("game-container").appendChild(s), setTimeout(function () {
                    return s.style.transform = "translateX(".concat(a.translateX, ") scale(1)")
                }, 100), "number" == typeof i && setTimeout(function () {
                    return a.hide()
                }, i)
            }
            return n(o, [{
                key: "hide",
                value: function () {
                    var e = this;
                    this.div.style.transform = "translateX(".concat(this.translateX, ") scale(0)"), setTimeout(function () {
                        return e.div.remove()
                    }, 1e3)
                }
            }]), o
        }(),
        Lt = [
            ["PALADIN", "ARTIFICER"],
            ["BARBARIAN", "WARLORD"],
            ["ASSASSIN", "ROGUE"],
            ["CLERIC", "DRUID"],
            ["RANGER", "MONK"]
        ],
        _t = 0,
        Pt = 1,
        ve = function (e) {
            return {
                type: "ACHIEVEMENT",
                achievementType: e,
                nextText: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "Next"
            }
        },
        ye = function (n, i) {
            return i.map(function (e, t) {
                return gt(n, e, t === i.length - 1 ? "Got it" : "Next")
            })
        },
        Nt = {
            TUTORIAL: ye("Tutorial", ["You just chose your first Item of Power. You can drag it around in your party area by using your mouse.", "When your Items of Power activate, they will apply their effects to whichever unit(s) they are overlapping. Try to position your items so they overlap as many units as possible.", "When in combat, your units will automatically use their abilities (attacks) when their blue ability bar is full. This bar charges faster depending on your unit's speed (SPD).", "Each unit has a unique ability (attack) which can be as simple as the Paladin's \"Attack the enemy with the highest health for 60% of your power stat\" or as complex as the Barbarian's where they only attack if above 50% health otherwise heal themself. Be sure to hover over each of your units so you know each of their unique abilities.", "Your goal is to survive for as long as possible while defeating bosses and unlocking new items and units by completing achievements. You can check your progress of your achievements on the main menu. Good luck!"]),
            DEATH: [gt("You Lost!", "All of your units have fallen.\n\nTip: ".concat(T(["You can place your Items of Power on top of multiple units and they'll all get the effects!", "Each of your units have different abilities. Hover over them to see what they do.", "Increasing your unit's speed will allow them to use their unique abilities more often.", "Your units will slightly resize based on their total stats. This may make it easier or harder to stack more Items of Power on them.", "You can adjust the rotation of your items by gently pushing them against other items or the edges of the play field.", "You can pause the game by pressing the button at the bottom of the screen. This is useful for adjusting your items between battles."])), "Try Again")],
            PLAYTEST: ye("Congratulations!", ["You're officially better than the developer! While playtesting this is as far as I got into the game before I lost.", "Nice job on getting this far. If you join the discord and direct message me (Vykri) with the phrase 'Suck it, loser. I'm better than you.', I'll give you a special discord role.", "It seriously blows my mind that anyone would play my game long enough to get this far and honestly I don't expect anyone to ever see this message.", "For getting this far, I'll let you in on what I'm planning on adding in the next major update. I plan on adding asynchronous multiplayer where you can battle against snapshots of other player's parties, branching paths to choose from, and random item modifiers. Hope to see you again when that is done!"]),
            ACHIEVEMENT_KILL_GOBLIN_BIG_BOSS: [ve("KILL_GOBLIN_BIG_BOSS")].concat(f(ye("Killed Goblin Big Boss", ["Congratulations on killing the first boss! There are 5 unique bosses in this version of the game and the first time killing each will reward you new unlockables having a chance to show up.", "For killing the Goblin Big Boss you now have a chance to get the Potion. Anything you unlock will also be available in any new runs you start. You can disable any unlocks in the Achievements menu."]))),
            ACHIEVEMENT_KILL_WITCH_KING: [ve("KILL_WITCH_KING")].concat(f(ye("Killed Witch King", ["Nice job! That AOE attack was pretty strong. By the way, here's a tip; you can adjust the rotation of your items by gently pushing them against your other items.", "Also, FYI, the game is automatically saving between each encounter. You can close this page right now if you want and you'll be able to load right back into this run. You can also have save files for multiple runs, so feel free to start new games and experiement with different builds all you want."]))),
            ACHIEVEMENT_KILL_DEFILED_SPRIGGAN: [ve("KILL_DEFILED_SPRIGGAN")].concat(f(ye("Killed Defiled Spriggan", ["That was a fun boss, right? In case you killed the Defiled Spriggan too fast to realize it, it was increasing the stats of all it's allies each time it attacked.", "Also, you unlocked the Warlord. They have a similar ability to the boss you just killed. The Warlord now has a chance of appearing as a random recruit or they have a chance to replace the Barbarian when you start a new game."]))),
            ACHIEVEMENT_KILL_CINDER_DRAGON: [ve("KILL_CINDER_DRAGON")].concat(f(ye("Killed Cinder Dragon", ["Hey, you're getting pretty far in. Be sure to take a look at the achievement list by pressing the button in the top right to see if there's anything you could be working towards.", "The Amulet will revive fallen units. It's completely useless while travelling, but during battle, it can really help keep those key units alive."]))),
            ACHIEVEMENT_KILL_THE_INEVITABLE: [ve("KILL_THE_INEVITABLE")].concat(f(ye("Killed The Inevitable", ["Nice job killing each of the bosses for the first time! Now you can keep going for as long as you can stay alive while continuing to work on those achievements to get more unlockable items and units. Have you unlocked the Artificer yet? That's a pretty fun unit. They get double POW stats.", "For killing The Inevitable you unlocked the Books. They have higher stat bonuses than other items, but they reset your unit's ability bar every time they activate which makes them unable to attack in battle.", "If you're enjoying the game, I hope to hear from you in either the itch.io comments or on the Discord (which you can find in the top right corner of the main menu). There's nothing I love more than hearing from people that have played my games. Every comment literally makes my day. Even saying something as simple as \"hey, I enjoyed your game\" means the world to me. Good luck getting as far as you can and completing the rest of the achievements!"]))),
            ACHIEVEMENT_HEAL_1: [ve("HEAL_1", "Got it")],
            ACHIEVEMENT_DAGGER_1: [ve("DAGGER_1", "Got it")],
            ACHIEVEMENT_RECRUIT_1: [ve("RECRUIT_1", "Got it")],
            ACHIEVEMENT_ZOMBIE_KILLER_1: [ve("ZOMBIE_KILLER_1", "Got it")],
            ACHIEVEMENT_DAMAGE_TOTAL_1: [ve("DAMAGE_TOTAL_1", "Got it")],
            ACHIEVEMENT_HAG_ENCOUNTERS_1: [ve("HAG_ENCOUNTERS_1", "Got it")],
            ACHIEVEMENT_POWER_GAINS_TOTAL_1: [ve("POWER_GAINS_TOTAL_1", "Got it")],
            ACHIEVEMENT_SUIT_UP_1: [ve("SUIT_UP_1", "Got it")],
            ACHIEVEMENT_TIER_1: [ve("TIER_1")].concat(f(ye("Master", ["Wow, I didn't think anyone would actually get this far. Seriously, thank you for playing Items of Power. If you want more of a challenge, you can try to beat my highest score. I was able to get to encounter 289 (tier 22) while playtesting.", "If you haven't already joined the Discord or left a comment on itch.io, please consider doing so. I'd really like to hear your thoughts on the game. I'm open to suggestions if there's something you'd really like to see added or if there's something about the game that you didn't like.", "Also, you unlocked the fast forward button. I was considering putting it behind a small paywall, but decided against it. I'll probably just end up doing a Patreon or something. Still trying to figure that part out, but for now I just want people to enjoy the game.", "Be sure to come back soon. I have plans for at least 2 more huge updates that I'd like to get done. Thanks again for playing!"])))
        },
        bt = ["STAB", "SWORD", "THUD", "APPLE", "POWERUP", "HEAL", "FIRE", "HORN"];

    function wt(t, e) {
        var n, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, n)), i
    }

    function xt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? wt(Object(n), !0).forEach(function (e) {
                m(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function Ht(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var Ct = ["SHOP", "BATTLE", "BATTLE", "BATTLE", "SHOP", "BATTLE", "BATTLE", "BATTLE", "RECRUIT", "SHOP", "BATTLE", "BATTLE", "BOSS"],
        Bt = {
            x: -850,
            y: 0
        },
        Dt = function () {
            l(t, Phaser.Scene);
            var e = Ht(t);

            function t() {
                return v(this, t), e.call(this, {
                    key: "Game"
                })
            }
            return n(t, [{
                key: "preload",
                value: function () {
                    u.preload(this, "game"), St.preload(this), ut.preload(this), Ot.preload(this), ze.preload(this), tt.preload(this), this.load.image("line", "assets/img/ui/line.png")
                }
            }, {
                key: "create",
                value: function (e) {
                    var t, n, i = this,
                        a = e.save,
                        a = void 0 === a ? (t = P("UNIQUE_UNIT_TYPES"), e = Lt.map(function (e) {
                            e = T(e.filter(function (e) {
                                return t.includes(e)
                            }));
                            return {
                                type: e,
                                stats: ue(e, Ie),
                                charge: .5,
                                tempStats: {
                                    power: 0,
                                    speed: 0,
                                    health: 0,
                                    maxHealth: 0
                                }
                            }
                        }), {
                            date: Date.now(),
                            seed: H(1, Number.MAX_SAFE_INTEGER - 1),
                            tier: 1,
                            encounter: 0,
                            allies: e,
                            items: [],
                            itemActiveTime: 0,
                            dead: !1
                        }) : a;
                    this.uiTweens || (this.uiTweens = new Phaser.Tweens.TweenManager(this), this.uiTweens.boot(), this.uiTweens.start()), ze.create(this), tt.create(this), St.create(this), Ot.create(this), new u(this, "game"), this.trail = new ut(this), this.add.image(0, 0, "line"), this.hud = new St(this), this.encounterIndex = a.encounter, this.tier = a.tier, this.saveDate = a.date, this.itemsActive = !0, this.itemActiveTime = a.itemActiveTime, this.paused = !1, this.timeScale = 1, this.lost = !1, this.inCombat = !1, this.achievementPopups = [], this.hoverDt = 0, this.popupTexts = this.add.group({
                        classType: Phaser.GameObjects.Text
                    }), this.projectiles = this.add.group({
                        classType: Phaser.GameObjects.Image
                    }), this.effects = bt.reduce(function (e, t) {
                        return xt(xt({}, e), {}, m({}, t, i.sound.add(t)))
                    }, {}), A(a.seed), this.cameras.main.centerOn(0, 0), this.matter.world.setBounds(-960, -540, 960, 1080, 2e3), Object.values(this.matter.world.walls).forEach(function (e) {
                        return e.collisionFilter.category = 4
                    }), this.mouseSpring = this.matter.add.mouseSpring({
                        stiffness: .005
                    }), this.mouseSpring.constraint.collisionFilter.category = 4, this.matter.world.on("dragstart", function (e) {
                        var t = e.gameObject;
                        t && (t.isStatic() && t.setStatic(!1), n = setInterval(function () {
                            return t.updateOverlaps()
                        }, 100))
                    }), this.matter.world.on("dragend", function (e) {
                        e = e.gameObject;
                        e && (clearInterval(n), i.freezeItem(e))
                    }), P("FF_BUTTON_ENABLED") && document.getElementById("ff-button").classList.remove("no-display"), this.enemies = [], this.allies = a.allies.map(function (e) {
                        return new tt(i, e.type, !0, e.stats, e.charge)
                    }), this.allies.forEach(function (e, t) {
                        t = i.getUnitPosition(!0, t, i.allies.length);
                        e.x = t.x, e.y = t.y, e.home = t, e.addListener("dead", i.checkLoss, i), e.syncScale()
                    }), this.hud.setAllies(this.allies), this.items = a.items.map(function (e) {
                        var t = new ze(i, e.type, e.tier, e.color, e.position.x, e.position.y);
                        return t.charge = e.charge, t.angle = e.angle, t.startActivating(), t.setStatic(!1), i.freezeItem(t), t
                    }), this.achievementManager = new je(this, a.date), this.setState(this.getEncounter()), this.encounterIndex++, this.input.keyboard.on("keydown-P", function () {
                        return i.togglePause()
                    }), this.input.keyboard.on("keydown-F", function () {
                        P("FF_BUTTON_ENABLED") && i.toggleFastForward()
                    })
                }
            }, {
                key: "update",
                value: function (e, t) {
                    this.itemsActive && (this.itemActiveTime += t);
                    var n = this.input.activePointer.worldX,
                        i = this.input.activePointer.worldY;
                    this.mouseSpring.pointer && (n <= -960 || 0 <= n || i <= -540 || 540 <= i) && this.mouseSpring.stopDrag(), this.hoverDt += t, 250 <= this.hoverDt && (this.hoverDt = 0, t = this.matter.intersectPoint(n, i, [].concat(f(this.allies), f(this.enemies)).filter(function (e) {
                        return e instanceof tt
                    })), this.hud.showUnitInfo(null === (t = t[0]) || void 0 === t ? void 0 : t.gameObject), i = this.matter.intersectPoint(n, i, [].concat(f(this.items), f(this.enemies)).filter(function (e) {
                        return e instanceof ze
                    })), this.hud.showItemInfo(null === (i = i[0]) || void 0 === i ? void 0 : i.gameObject))
                }
            }, {
                key: "togglePause",
                value: function () {
                    this.paused = !this.paused;
                    var e = document.getElementById("play-button"),
                        t = e.querySelector("img");
                    this.paused ? (this.time.timeScale = 0, this.tweens.timeScale = 0, t.src = "assets/img/ui/play.png", e.classList.remove("secondary-button")) : (this.time.timeScale = this.timeScale, this.tweens.timeScale = this.timeScale, t.src = "assets/img/ui/pause.png", e.classList.add("secondary-button"))
                }
            }, {
                key: "setPaused",
                value: function () {
                    this.paused !== (!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) && this.togglePause()
                }
            }, {
                key: "toggleFastForward",
                value: function () {
                    var e = document.getElementById("ff-button").querySelector("img");
                    1 === this.timeScale ? (this.timeScale = 3, e.src = "assets/img/ui/fastFastForward.png") : (this.timeScale = 1, e.src = "assets/img/ui/fastForward.png"), this.paused || (this.time.timeScale = this.timeScale, this.tweens.timeScale = this.timeScale)
                }
            }, {
                key: "setFastForward",
                value: function () {
                    (!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) !== (1 !== this.timeScale) && this.toggleFastForward()
                }
            }, {
                key: "saveGame",
                value: function () {
                    var e, t = this,
                        n = P("SAVES"),
                        i = n.findIndex(function (e) {
                            return e.date === t.saveDate
                        }),
                        e = {
                            date: (e = this).saveDate,
                            seed: C,
                            tier: e.tier,
                            encounter: e.encounterIndex,
                            allies: e.allies.map(function (e) {
                                return {
                                    type: e.type,
                                    stats: e.stats,
                                    charge: e.charge,
                                    tempStats: e.tempStats
                                }
                            }),
                            items: e.items.map(function (e) {
                                return {
                                    type: e.type,
                                    tier: e.tier,
                                    charge: e.charge,
                                    position: {
                                        x: e.x,
                                        y: e.y
                                    },
                                    angle: e.angle,
                                    color: e.color
                                }
                            }),
                            itemActiveTime: e.itemActiveTime,
                            dead: !!e.lost
                        }; - 1 !== i ? n[i] = e : n.unshift(e), N("SAVES", n), this.achievementManager.flush()
                }
            }, {
                key: "getEncounter",
                value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.encounterIndex;
                    return Ct[e % Ct.length]
                }
            }, {
                key: "setState",
                value: function (e) {
                    var t, n = this;
                    switch (this.saveGame(), this.state = e, null !== (t = this.enemies) && void 0 !== t && t.forEach(function (e) {
                        return e.destroy()
                    }), this.enemies = [], e) {
                        case "TRAVEL":
                            var i = function () {
                                n.trail.startMoving(), n.time.delayedCall(k(3e3, 5e3), function () {
                                    n.setState(n.getEncounter()), n.encounterIndex++
                                })
                            };
                            1 === this.encounterIndex ? (this.setPaused(!0), new Ot(this, Nt.TUTORIAL, function () {
                                n.setPaused(!1), i()
                            })) : 290 === this.encounterIndex ? (this.setPaused(!0), new Ot(this, Nt.PLAYTEST, function () {
                                n.setPaused(!1), i()
                            })) : i();
                            break;
                        case "SHOP":
                            this.items.forEach(function (e) {
                                return e.stopActivating()
                            }), this.itemsActive = !1;
                            var a = this.items.length,
                                a = 5 < a ? Math.pow(E(a, 5, 15, 0, 1), 3) : 0;
                            I(0, 1) < a ? (this.enemies = [new tt(this, "HAG", !1, ue("HAG"))], this.selected = !1, this.moveEnemiesToPositions(function () {
                                n.trail.stopMoving(), n.hud.setInfoText("?????????!");
                                var e = O(n.items).slice(0, 5);
                                n.hud.setEnemies(e, "CURSE"), n.curseBubble = new Rt(n, n.enemies[0], "I curse you! You must choose one of your Items of Power to destroy")
                            }), this.events.emit("HAG_ENCOUNTER")) : (this.enemies = function (e, t) {
                                for (var n, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 3, a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : .25, o = [], r = O(P("UNIQUE_ITEM_TYPES").filter(function (t) {
                                        return 0 === e.items.filter(function (e) {
                                            return e.type === t
                                        }).length
                                    })), u = 0; u < a && u < r.length; u++) I(0, 1) < s && (n = r.shift(), o.push(new ze(e, n, 1)));
                                for (var c = O(P("BASIC_ITEM_TYPES")), l = i - o.length, h = 0; h < l; h++) {
                                    var d = c.shift();
                                    o.push(new ze(e, d, t))
                                }
                                return o
                            }(this, this.tier), this.selected = !1, this.moveEnemiesToPositions(function () {
                                n.trail.stopMoving(), n.hud.setInfoText("????????????\n??????", 1 !== n.encounterIndex), n.hud.setEnemies(n.enemies, "ITEM_SHOP"), n.enemies.forEach(function (e) {
                                    e.setInteractive(), e.on("pointerdown", function () {
                                        return n.selectShopItem(e)
                                    })
                                })
                            }), this.events.emit("SHOP_ENCOUNTER"));
                            break;
                        case "RECRUIT":
                            this.items.forEach(function (e) {
                                return e.stopActivating()
                            }), this.itemsActive = !1;
                            var s = function (e) {
                                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                        i = P("UNIQUE_UNIT_TYPES"),
                                        e = [].concat(f(Ce[(e - 1) % z]), f(Be.filter(function (t) {
                                            return i.includes(t) && !n.find(function (e) {
                                                return e.type === t
                                            })
                                        })));
                                    return null !== (e = S(e)) && void 0 !== e ? e : "GOBLIN"
                                }(this.tier, this.allies),
                                o = Math.min.apply(Math, f(this.allies.map(function (e) {
                                    return e.getTotalStats()
                                }))),
                                o = ue(s, 1.1 * o);
                            this.enemies = [new tt(this, s, !1, o)], this.recruited = !1, this.moveEnemiesToPositions(function () {
                                var e;
                                n.trail.stopMoving(), n.hud.setInfoText("??????"), n.hud.setEnemies(n.enemies, "RECRUIT"), n.recruitBubble = new Rt(n, n.enemies[0], null !== (e = T(be[e = s])) && void 0 !== e ? e : T(["May I join your party?", "Can I please join your party?", "Please let me join. I'll die out there alone!", "You gotta let me join.", "If you don't let me join, you're gonna regret it."]))
                            }), this.events.emit("RECRUIT_ENCOUNTER", {
                                unitType: s
                            });
                            break;
                        case "BATTLE":
                            var r = 1 + k(0, Math.min(this.tier + 1, 4)),
                                u = Et(this.tier) * (Math.min(r + 1.5, 5) / r);
                            this.enemies = y(r).map(function () {
                                var e = (t = n.tier, null !== (t = S(xe[(t - 1) % z])) && void 0 !== t ? t : "GOBLIN"),
                                    t = ue(e, u);
                                return new tt(n, e, !1, t)
                            }), this.winning = !1, this.moveEnemiesToPositions(function () {
                                n.inCombat = !0, n.events.emit("ENTER_COMBAT"), n.trail.stopMoving(), n.hud.setInfoText("??????!"), n.hud.setEnemies(n.enemies), n.allies.forEach(function (e) {
                                    return e.startAbility()
                                }), n.enemies.forEach(function (e) {
                                    e.startAbility(), e.addListener("dead", n.checkWin, n)
                                }), n.startEnrageEvent()
                            }), this.events.emit("BATTLE_ENCOUNTER");
                            break;
                        case "BOSS":
                            var r = (o = this.tier, null !== (o = He[(o - 1) % z]) && void 0 !== o ? o : He[0]),
                                o = r.length,
                                c = Et(this.tier + 1) * (Math.min(o + 1.5, 5) / o);
                            this.enemies = r.map(function (e) {
                                return new tt(n, e, !1, ue(e, c))
                            }), this.winning = !1, this.tier++, this.moveEnemiesToPositions(function () {
                                n.inCombat = !0, n.events.emit("ENTER_COMBAT"), n.trail.stopMoving(), n.hud.setInfoText("Boss???!"), n.hud.setEnemies(n.enemies), n.allies.forEach(function (e) {
                                    return e.startAbility()
                                }), n.enemies.forEach(function (e) {
                                    e.startAbility(), e.addListener("dead", n.checkWin, n)
                                }), n.startEnrageEvent()
                            }), this.events.emit("BOSS_ENCOUNTER", {
                                bossType: r[0]
                            })
                    }
                }
            }, {
                key: "startEnrageEvent",
                value: function () {
                    var e = this;
                    this.enrageEvent = this.time.addEvent({
                        delay: 1e4,
                        callback: function () {
                            e.enrageEvent = e.time.addEvent({
                                delay: 5e3,
                                loop: !0,
                                callback: function () {
                                    return e.enemies.forEach(function (e) {
                                        return e.gainStats({
                                            power: .25 * e.stats.power
                                        }, ge, e.x, e.y)
                                    })
                                }
                            })
                        }
                    })
                }
            }, {
                key: "stopEnrageEvent",
                value: function () {
                    var e;
                    null !== (e = this.enrageEvent) && void 0 !== e && e.remove()
                }
            }, {
                key: "freezeItem",
                value: function (e) {
                    function t(e, t, n) {
                        return i = Math.max(i, Math.abs(n.separation))
                    }
                    var n = this,
                        i = 0;
                    setTimeout(function () {
                        e.on("collideActive", t), setTimeout(function () {
                            e.off("collideActive", t), 1 <= i && (e.x = Bt.x, e.y = Bt.y), e.isStatic() || n.mouseSpring.body === e.body || e.setStatic(!0), e.updateOverlaps()
                        }, 50)
                    }, 250)
                }
            }, {
                key: "getPopupText",
                value: function (e, t, n, i) {
                    return this.popupTexts.get(e, t).setText(n).setAlpha(1).setScale(1).setActive(!0).setVisible(!0).setStroke("#ffffff", 3).setOrigin(.5, .5).setStyle({
                        fontSize: "24px",
                        fontFamily: "Roboto",
                        color: "rgb(".concat(i.r, ",").concat(i.g, ",").concat(i.b, ")")
                    }).setDepth(50)
                }
            }, {
                key: "getProjectile",
                value: function (e, t, n, i) {
                    return this.projectiles.get(e, t, n).setTexture(n).setAlpha(1).setScale(.5).setRotation(i).setActive(!0).setVisible(!0).setDepth(60)
                }
            }, {
                key: "getUnitPosition",
                value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 5,
                        i = e ? -1 : 1,
                        a = Math.ceil(n / 3),
                        s = t % 3,
                        e = Math.floor(t / 3),
                        n = 0 + (n - 3 < t && n % 3 != 0 && n % 3 % 2 == 0 ? 110 : 0);
                    return {
                        x: i * nt / 4 + -i * Ae / 2 * (a - 1) + i * e * Ae,
                        y: s % 2 == 0 ? n + Ae * Math.ceil(s / 2) : n - Ae * Math.ceil(s / 2)
                    }
                }
            }, {
                key: "moveEnemiesToPositions",
                value: function (n) {
                    var i = this,
                        a = 0;
                    this.enemies.forEach(function (e, t) {
                        t = i.getUnitPosition(!1, t, i.enemies.length);
                        e.x = t.x + 480 + 180, e.y = t.y, e.home = t, i.tweens.add({
                            targets: e,
                            x: t.x,
                            duration: 2e3,
                            onComplete: function () {
                                ++a >= i.enemies.length && n()
                            }
                        })
                    })
                }
            }, {
                key: "selectShopItem",
                value: function (t) {
                    var e = this;
                    this.selected || (this.selected = !0, this.items.push(t), t.removeInteractive(), this.hud.setInfoText(), this.hud.setEnemies(), this.enemies = this.enemies.filter(function (e) {
                        return e.body.id !== t.body.id
                    }), this.uiTweens.add({
                        targets: t,
                        x: -110,
                        angle: k(-180, 180),
                        duration: 300,
                        ease: "Quint.easeOut",
                        onComplete: function () {
                            t.isStatic() && t.setStatic(!1), e.freezeItem(t)
                        }
                    }), this.uiTweens.add({
                        targets: this.enemies,
                        alpha: 0,
                        duration: 500,
                        onComplete: function () {
                            e.items.forEach(function (e) {
                                return e.startActivating()
                            }), e.itemsActive = !0, e.setPaused(!1), e.setState("TRAVEL")
                        }
                    }), this.events.emit("ITEM_BUY", {
                        itemType: t.type
                    }))
                }
            }, {
                key: "destroyItem",
                value: function (t) {
                    var e, n = this;
                    this.selected || (this.selected = !0, this.items.splice(this.items.findIndex(function (e) {
                        return e === t
                    }), 1), this.hud.setEnemies(), this.curseBubble.hide(), e = this.enemies[0], new Rt(this, e, "ehehehehe", 1e3), e.attack(t, function () {
                        n.tweens.add({
                            targets: t,
                            alpha: 0,
                            duration: 1500,
                            onComplete: function () {
                                t.destroy(), n.items.forEach(function (e) {
                                    return e.startActivating()
                                }), n.itemsActive = !0, n.setPaused(!1), n.setState("TRAVEL")
                            }
                        }), e.flipX = !1, n.tweens.add({
                            targets: e,
                            x: 1180,
                            y: H(-540, 540),
                            duration: 1e3
                        })
                    }), this.events.emit("ITEM_DESTROY", {
                        itemType: t.type
                    }))
                }
            }, {
                key: "recruitUnit",
                value: function (t) {
                    var n = this;
                    if (!this.recruited) {
                        if (this.recruited = !0, this.hud.hideRecruitButtons(), this.hud.setEnemies(), this.recruitBubble.hide(), this.enemies.includes(t)) {
                            var i = T(this.allies);
                            return this.uiTweens.add({
                                targets: i,
                                x: t.x,
                                y: t.y,
                                duration: 300,
                                onComplete: function () {
                                    n.uiTweens.add({
                                        targets: i,
                                        x: i.home.x,
                                        y: i.home.y,
                                        ease: "Power1",
                                        duration: 500,
                                        onComplete: function () {
                                            return new Rt(n, i, (e = i.type, null !== (e = T(we[e])) && void 0 !== e ? e : T(["Get out of here, loser. We're going shopping.", "No way.", "Hahahaha, no.", "Looks like you're blasting off again!"])), 3e3);
                                            var e
                                        }
                                    }), n.uiTweens.add({
                                        targets: t,
                                        x: 1180,
                                        y: H(-540, 540),
                                        angle: H(360, 720),
                                        duration: 500,
                                        onComplete: function () {
                                            n.items.forEach(function (e) {
                                                return e.startActivating()
                                            }), n.itemsActive = !0, n.setPaused(!1), n.setState("TRAVEL")
                                        }
                                    })
                                }
                            }), void this.events.emit("RECRUIT_DECLINE", {
                                unitType: t.type
                            })
                        }
                        var e = this.allies.findIndex(function (e) {
                                return e === t
                            }),
                            a = this.allies[e],
                            s = this.enemies[0];
                        s.isAlly = !0, s.home = xt({}, a.home), s.addListener("dead", this.checkLoss, this), this.allies[e] = s, this.enemies = [], this.hud.setAllies(this.allies), this.uiTweens.add({
                            targets: s,
                            x: a.x,
                            y: a.y,
                            duration: 300,
                            onComplete: function () {
                                s.flipX = !1, n.uiTweens.add({
                                    targets: a,
                                    x: -1180,
                                    y: H(-540, 540),
                                    angle: H(360, 720),
                                    duration: 500,
                                    onComplete: function () {
                                        a.destroy(), n.allies.forEach(function (e) {
                                            return e.syncScale()
                                        }), n.items.forEach(function (e) {
                                            e.updateOverlaps(), e.startActivating()
                                        }), n.itemsActive = !0, n.setPaused(!1), n.setState("TRAVEL")
                                    }
                                })
                            }
                        }), this.events.emit("RECRUIT_ACCEPT", {
                            recruitType: s.type,
                            replacedType: a.type
                        })
                    }
                }
            }, {
                key: "checkWin",
                value: function () {
                    var e = this;
                    this.winning || 0 < this.enemies.filter(function (e) {
                        return 0 < e.stats.health
                    }).length || (this.winning = !0, this.stopEnrageEvent(), this.hud.setInfoText(), this.hud.setEnemies(), this.tweens.add({
                        targets: this.enemies,
                        alpha: 0,
                        duration: 500,
                        delay: 1e3,
                        onComplete: function () {
                            e.inCombat = !1, e.events.emit("EXIT_COMBAT"), e.enemies.forEach(function (e) {
                                return e.destroy()
                            }), e.enemies = [], e.allies.forEach(function (e) {
                                e.revive(1, Te, e.x, e.y), e.stopAbility(), e.resetTempStats()
                            }), e.setState("TRAVEL")
                        }
                    }), "BATTLE" === this.getEncounter(this.encounterIndex - 1) ? this.events.emit("BATTLE_WIN") : this.events.emit("BOSS_WIN", {
                        bossType: this.enemies[0].type
                    }))
                }
            }, {
                key: "checkLoss",
                value: function () {
                    var e, t = this;
                    this.lost || 0 < this.allies.filter(function (e) {
                        return 0 < e.stats.health
                    }).length || (this.lost = !0, this.inCombat = !1, this.events.emit("EXIT_COMBAT"), this.events.emit("LOSS"), (e = P("SAVES")).find(function (e) {
                        return e.date === t.saveDate
                    }).dead = !0, N("SAVES", e), this.achievementManager.flush(), this.setPaused(!0), new Ot(this, Nt.DEATH, function () {
                        return t.scene.start("MainMenu", {})
                    }))
                }
            }, {
                key: "unlockAchievement",
                value: function (e) {
                    var n, i = this;
                    this.achievementPopups.push(e), 1 === this.achievementPopups.length && (n = this.paused, this.setPaused(!0), function e() {
                        var t = i.achievementPopups[0];
                        if (!t) return i.setPaused(n), void(P("FF_BUTTON_ENABLED") ? document.getElementById("ff-button").classList.remove("no-display") : (document.getElementById("ff-button").classList.add("no-display"), i.setFastForward(!1)));
                        new Ot(i, Nt["ACHIEVEMENT_".concat(t)], function () {
                            i.achievementPopups.shift(), e()
                        })
                    }())
                }
            }, {
                key: "getInputs",
                value: function () {
                    return {
                        className: "Game",
                        funcs: [{
                            name: "startOptions",
                            func: this.startOptions
                        }, {
                            name: "togglePause",
                            func: this.togglePause
                        }, {
                            name: "toggleFastForward",
                            func: this.toggleFastForward
                        }]
                    }
                }
            }, {
                key: "startOptions",
                value: function () {
                    var e = this,
                        t = this.paused;
                    this.setPaused(!0), this.scene.launch("MainMenu", {
                        isOverlay: !0,
                        onClose: function () {
                            e.setPaused(t), P("FF_BUTTON_ENABLED") ? document.getElementById("ff-button").classList.remove("no-display") : (document.getElementById("ff-button").classList.add("no-display"), e.setFastForward(!1))
                        }
                    })
                }
            }]), t
        }(),
        kt = ["assets/audio/music/sfxvalley-background-3.mp3", "assets/audio/music/sfxvalley-cinematic-instrumental.mp3", "assets/audio/music/sfxvalley-medieval.mp3"],
        Gt = function () {
            function t(e) {
                v(this, t), this.game = e, this.curTrack = 0, this.curKey = "", 0 < kt.length && this.nextSong()
            }
            return n(t, [{
                key: "nextSong",
                value: function () {
                    this.curMusic = this.game.music.add("music-".concat(this.curTrack)), this.curMusic.on("complete", this.nextSong, this), this.curMusic.play(), this.curTrack = (this.curTrack + 1) % kt.length
                }
            }, {
                key: "playSong",
                value: function (e) {
                    this.curKey !== e && (this.curKey = e, this.curMusic.off("complete", this.nextSong, this), this.curMusic.stop(), this.curMusic = this.game.music.add(e), this.curMusic.play({
                        loop: !0
                    }))
                }
            }, {
                key: "resumeOverworldSongs",
                value: function () {
                    this.curKey = "", this.curMusic.stop(), this.nextSong()
                }
            }], [{
                key: "preload",
                value: function (n) {
                    kt.forEach(function (e, t) {
                        return n.load.audio("music-".concat(t), e)
                    })
                }
            }]), t
        }();

    function Mt(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var Ut = !1,
        Wt = function () {
            l(t, Phaser.Scene);
            var e = Mt(t);

            function t() {
                return v(this, t), e.call(this, {
                    key: "MainMenu"
                })
            }
            return n(t, [{
                key: "preload",
                value: function () {
                    var t = this;
                    this.loading = this.add.text(at.x, at.y, "?????????...", {
                        fontSize: "72px"
                    }).setOrigin(.5), bt.forEach(function (e) {
                        return t.load.audio(e, "assets/audio/effects/".concat(e.toPathCase(), ".wav"))
                    }), this.load.image("panel-blue", "assets/img/ui/panel_blue.png"), this.load.image("panel-beige", "assets/img/ui/panel_beigeLight.png"), this.load.html("save-slot-html", "assets/html/save-slot.html"), ut.preload(this), ze.preload(this), u.preload(this, "main-menu"), Gt.preload(this)
                }
            }, {
                key: "create",
                value: function (e) {
                    var s = this,
                        t = e.isOverlay,
                        t = void 0 !== t && t,
                        e = e.onClose;
                    this.loading.destroy(), new u(this, "main-menu"), this.isOverlay = t, this.onClose = e;
                    e = P("SAVES");
                    0 < e.length && document.getElementById("load-game-button").classList.remove("no-display");
                    var o = this.cache.html.get("save-slot-html"),
                        r = document.getElementById("save-slots");
                    e.forEach(function (n) {
                        var t = document.createElement("div");
                        t.innerHTML = o, t.querySelector("#save-date").innerText = "Save Started On:\n".concat(new Date(n.date).toLocaleString()), t.querySelector("#tier").innerText = "Tier: ".concat(n.tier), t.querySelector("#encounter").innerText = "Encounter: ".concat(n.encounter), t.querySelector("#playtime").innerText = "Play time:\n".concat(n.itemActiveTime.toTimeString()), t.querySelectorAll(".unit-name").forEach(function (e, t) {
                            return e.innerText = n.allies[t].type.toTitleCase()
                        });
                        var e = t.querySelector("#load-button");
                        n.dead ? (e.classList.add("no-display"), t.querySelector("#dead-text").classList.remove("no-display")) : e.addEventListener("click", function () {
                            return s.loadGame(n.date)
                        });
                        var i = !1,
                            a = t.querySelector("#delete-button");
                        a.addEventListener("click", function () {
                            var e;
                            i ? ((e = P("SAVES")).splice(e.findIndex(function (e) {
                                return e.date === n.date
                            }), 1), N("SAVES", e), t.remove()) : (a.innerText = "Are you sure?", i = !0)
                        }), r.appendChild(t)
                    }), Ut || (this.game.musicManager = new Gt(this.game), Ut = !0), this.cameras.main.centerOn(0, 0), t ? document.getElementById("resume-button").classList.remove("no-display") : (this.trail = new ut(this, 0, 0), document.getElementById("resume-button").classList.add("no-display"))
                }
            }, {
                key: "loadGame",
                value: function (t) {
                    var e;
                    "number" == typeof t ? (e = P("SAVES").find(function (e) {
                        return e.date === t
                    }), this.scene.start("Game", {
                        save: e
                    })) : this.scene.start("Game", {})
                }
            }, {
                key: "getInputs",
                value: function () {
                    var t = this;
                    return {
                        className: "MainMenu",
                        funcs: [{
                            name: "startGame",
                            func: this.loadGame
                        }, {
                            name: "resumeGame",
                            func: function () {
                                var e;
                                t.scene.stop(), null !== (e = t.onClose) && void 0 !== e && e.call(t)
                            }
                        }, {
                            name: "startAchievements",
                            func: function () {
                                return t.scene.launch("Achievements")
                            }
                        }, {
                            name: "startOptions",
                            func: function () {
                                return t.scene.launch("Options")
                            }
                        }, {
                            name: "startCredits",
                            func: function () {
                                return t.scene.launch("Credits")
                            }
                        }, {
                            name: "showSaves",
                            func: function () {
                                document.getElementById("menu").classList.add("no-display"), document.getElementById("saves").classList.remove("no-display")
                            }
                        }, {
                            name: "hideSaves",
                            func: function () {
                                document.getElementById("saves").classList.add("no-display"), document.getElementById("menu").classList.remove("no-display")
                            }
                        }]
                    }
                }
            }]), t
        }();

    function Vt(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = d(n);
            return o(this, i ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var Ft = function () {
            l(t, Phaser.Scene);
            var e = Vt(t);

            function t() {
                return v(this, t), e.call(this, {
                    key: "Options"
                })
            }
            return n(t, [{
                key: "preload",
                value: function () {
                    u.preload(this, "options")
                }
            }, {
                key: "create",
                value: function () {
                    new u(this, "options"), document.getElementById("music-volume").value = P("MUSIC_VOLUME"), document.getElementById("sfx-volume").value = P("SFX_VOLUME")
                }
            }, {
                key: "getInputs",
                value: function () {
                    var t = this;
                    return {
                        className: "Options",
                        funcs: [{
                            name: "back",
                            func: this.back
                        }, {
                            name: "updateMusicVolume",
                            func: function (e) {
                                return t.game.music.volume = e
                            }
                        }, {
                            name: "updateSfxVolume",
                            func: function (e) {
                                return t.game.sound.volume = e
                            }
                        }]
                    }
                }
            }, {
                key: "back",
                value: function (e) {
                    var t;
                    e && (t = parseFloat(document.getElementById("music-volume").value), e = parseFloat(document.getElementById("sfx-volume").value), N("MUSIC_VOLUME", t), N("SFX_VOLUME", e)), this.game.music.volume = P("MUSIC_VOLUME"), this.game.sound.volume = P("SFX_VOLUME"), this.scene.stop()
                }
            }]), t
        }(),
        Kt = 0;
    window.onload = function () {
        t();
        var e = new Phaser.Game({
            type: Phaser.WEBGL,
            width: nt,
            height: it,
            backgroundColor: 0,
            parent: "game",
            dom: {
                createContainer: !0,
                domPointerEvents: "none"
            },
            physics: {
                default: "matter",
                matter: {
                    gravity: {
                        y: 0
                    }
                }
            },
            scene: [Wt, Ue, Ft, Ve, Dt]
        });
        e.music = Phaser.Sound.SoundManagerCreator.create(e).setVolume(P("MUSIC_VOLUME")), e.sound.setVolume(P("SFX_VOLUME")), e.domContainer.style.transformOrigin = "center", jt(e), window.onresize = function () {
            return jt(e)
        }
    };
    var jt = function (e) {
        e.domContainer.classList.add("no-display"), Kt++, setTimeout(function () {
            e.domContainer.style.transform = "scale(".concat(e.canvas.offsetWidth / nt, ", ").concat(e.canvas.offsetHeight / it, ")"), 0 == --Kt && e.domContainer.classList.remove("no-display")
        }, 100)
    }
})();