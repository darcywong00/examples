KeymanWeb.KR(new Keyboard_lisu_basic());

function Keyboard_lisu_basic() {
    this.KI = "Keyboard_lisu_basic";
    this.KN = "Lisu Basic 0.3";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0
    };
    this.KDU = 0;
    this.KLS = {
        "default": ["", "", "", "", "", "", "", "", "", "", "", "˗", "꓿", "", "", "", "Q", "ꓪ", "ꓰ", "ꓣ", "ꓔ", "ꓬ", "ꓴ", "ꓲ", "ꓳ", "ꓑ", "", "", "", "", "", "", "ꓮ", "ꓢ", "ꓓ", "ꓝ", "ꓖ", "ꓧ", "ꓙ", "ꓗ", "ꓡ", "ꓼ", "ʼ", "", "", "", "", "", "", "ꓜ", "ꓫ", "ꓚ", "ꓦ", "ꓐ", "ꓠ", "ꓟ", "ꓹ", "ꓸ", "", "", "", "", "", "", ""],
        "shift": ["", "", "", "", "", "", "", "", "", "", "", "ˍ", "", "", "", "", "★", "▪", "ꓱ", "ꓤ", "ꓕ", "ꓻ", "ꓵ", "꓾", "ˍ", "ꓒ", "", "", "", "", "", "", "ꓯ", "•", "ꓷ", "ꓞ", "ꓨ", "ꓺ", "ꓩ", "ꓘ", "ꓶ", "ꓽ", "", "", "", "", "", "", "", "“", "”", "ꓛ", "ꓥ", "ꓭ", "", "", "", "", "", "", "", "", "", "", ""]
    };
    this.KV.BK = (function(x) {
        var e = Array.apply(null, Array(65)).map(String.prototype.valueOf, ""),
            r = [],
            v, i, m = ['default', 'shift', 'ctrl', 'shift-ctrl', 'alt', 'shift-alt', 'ctrl-alt', 'shift-ctrl-alt'];
        for (i = m.length - 1; i >= 0; i--)
            if ((v = x[m[i]]) || r.length) r = (v ? v : e).slice().concat(r);
        return r
    })(this.KLS);
    this.KH = '';
    this.KM = 0;
    this.KBVER = "1.0";
    this.KMBM = 0x0010;
    this.KVKL = {
        "tablet": {
            "layer": [{
                "id": "default",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": ""
                    }, {
                        "id": "K_2",
                        "text": ""
                    }, {
                        "id": "K_3",
                        "text": ""
                    }, {
                        "id": "K_4",
                        "text": ""
                    }, {
                        "id": "K_5",
                        "text": ""
                    }, {
                        "id": "K_6",
                        "text": ""
                    }, {
                        "id": "K_7",
                        "text": ""
                    }, {
                        "id": "K_8",
                        "text": ""
                    }, {
                        "id": "K_9",
                        "text": ""
                    }, {
                        "id": "K_0",
                        "text": ""
                    }, {
                        "id": "K_HYPHEN",
                        "text": "\u02D7"
                    }, {
                        "id": "K_EQUAL",
                        "text": "\uA4FF"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": 100,
                        "sp": 1
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_Q",
                        "text": "Q",
                        "pad": 75
                    }, {
                        "id": "K_W",
                        "text": "\uA4EA"
                    }, {
                        "id": "K_E",
                        "text": "\uA4F0"
                    }, {
                        "id": "K_R",
                        "text": "\uA4E3"
                    }, {
                        "id": "K_T",
                        "text": "\uA4D4"
                    }, {
                        "id": "K_Y",
                        "text": "\uA4EC"
                    }, {
                        "id": "K_U",
                        "text": "\uA4F4"
                    }, {
                        "id": "K_I",
                        "text": "\uA4F2"
                    }, {
                        "id": "K_O",
                        "text": "\uA4F3"
                    }, {
                        "id": "K_P",
                        "text": "\uA4D1"
                    }, {
                        "id": "K_LBRKT",
                        "text": ""
                    }, {
                        "id": "K_RBRKT",
                        "text": ""
                    }, {
                        "id": "T_new_26",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_BKQUOTE",
                        "text": ""
                    }, {
                        "id": "K_A",
                        "text": "\uA4EE"
                    }, {
                        "id": "K_S",
                        "text": "\uA4E2"
                    }, {
                        "id": "K_D",
                        "text": "\uA4D3"
                    }, {
                        "id": "K_F",
                        "text": "\uA4DD"
                    }, {
                        "id": "K_G",
                        "text": "\uA4D6"
                    }, {
                        "id": "K_H",
                        "text": "\uA4E7"
                    }, {
                        "id": "K_J",
                        "text": "\uA4D9"
                    }, {
                        "id": "K_K",
                        "text": "\uA4D7"
                    }, {
                        "id": "K_L",
                        "text": "\uA4E1"
                    }, {
                        "id": "K_COLON",
                        "text": "\uA4FC"
                    }, {
                        "id": "K_QUOTE",
                        "text": "\u02BC"
                    }, {
                        "id": "K_BKSLASH",
                        "text": ""
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": 160,
                        "sp": 1,
                        "nextlayer": "shift"
                    }, {
                        "id": "K_oE2",
                        "text": ""
                    }, {
                        "id": "K_Z",
                        "text": "\uA4DC"
                    }, {
                        "id": "K_X",
                        "text": "\uA4EB"
                    }, {
                        "id": "K_C",
                        "text": "\uA4DA"
                    }, {
                        "id": "K_V",
                        "text": "\uA4E6"
                    }, {
                        "id": "K_B",
                        "text": "\uA4D0"
                    }, {
                        "id": "K_N",
                        "text": "\uA4E0"
                    }, {
                        "id": "K_M",
                        "text": "\uA4DF"
                    }, {
                        "id": "K_COMMA",
                        "text": "\uA4F9"
                    }, {
                        "id": "K_PERIOD",
                        "text": "\uA4F8"
                    }, {
                        "id": "K_SLASH",
                        "text": ""
                    }, {
                        "id": "T_new_52",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": 140,
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": 930
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": 145,
                        "sp": 1
                    }]
                }]
            }, {
                "id": "shift",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": ""
                    }, {
                        "id": "K_2",
                        "text": ""
                    }, {
                        "id": "K_3",
                        "text": ""
                    }, {
                        "id": "K_4",
                        "text": ""
                    }, {
                        "id": "K_5",
                        "text": ""
                    }, {
                        "id": "K_6",
                        "text": ""
                    }, {
                        "id": "K_7",
                        "text": ""
                    }, {
                        "id": "K_8",
                        "text": ""
                    }, {
                        "id": "K_9",
                        "text": ""
                    }, {
                        "id": "K_0",
                        "text": ""
                    }, {
                        "id": "K_HYPHEN",
                        "text": "\u02CD"
                    }, {
                        "id": "K_EQUAL",
                        "text": ""
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": 100,
                        "sp": 1
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_Q",
                        "text": "\u2605",
                        "pad": 75
                    }, {
                        "id": "K_W",
                        "text": "\u25AA"
                    }, {
                        "id": "K_E",
                        "text": "\uA4F1"
                    }, {
                        "id": "K_R",
                        "text": "\uA4E4"
                    }, {
                        "id": "K_T",
                        "text": "\uA4D5"
                    }, {
                        "id": "K_Y",
                        "text": "\uA4FB"
                    }, {
                        "id": "K_U",
                        "text": "\uA4F5"
                    }, {
                        "id": "K_I",
                        "text": "\uA4FE"
                    }, {
                        "id": "K_O",
                        "text": "\u02CD"
                    }, {
                        "id": "K_P",
                        "text": "\uA4D2"
                    }, {
                        "id": "K_LBRKT",
                        "text": ""
                    }, {
                        "id": "K_RBRKT",
                        "text": ""
                    }, {
                        "id": "T_new_81",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_BKQUOTE",
                        "text": ""
                    }, {
                        "id": "K_A",
                        "text": "\uA4EF"
                    }, {
                        "id": "K_S",
                        "text": "\u2022"
                    }, {
                        "id": "K_D",
                        "text": "\uA4F7"
                    }, {
                        "id": "K_F",
                        "text": "\uA4DE"
                    }, {
                        "id": "K_G",
                        "text": "\uA4E8"
                    }, {
                        "id": "K_H",
                        "text": "\uA4FA"
                    }, {
                        "id": "K_J",
                        "text": "\uA4E9"
                    }, {
                        "id": "K_K",
                        "text": "\uA4D8"
                    }, {
                        "id": "K_L",
                        "text": "\uA4F6"
                    }, {
                        "id": "K_COLON",
                        "text": "\uA4FD"
                    }, {
                        "id": "K_QUOTE",
                        "text": ""
                    }, {
                        "id": "K_BKSLASH",
                        "text": ""
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": 160,
                        "sp": 1,
                        "nextlayer": "default"
                    }, {
                        "id": "K_oE2",
                        "text": ""
                    }, {
                        "id": "K_Z",
                        "text": "\u201C"
                    }, {
                        "id": "K_X",
                        "text": "\u201D"
                    }, {
                        "id": "K_C",
                        "text": "\uA4DB"
                    }, {
                        "id": "K_V",
                        "text": "\uA4E5"
                    }, {
                        "id": "K_B",
                        "text": "\uA4ED"
                    }, {
                        "id": "K_N",
                        "text": ""
                    }, {
                        "id": "K_M",
                        "text": ""
                    }, {
                        "id": "K_COMMA",
                        "text": ""
                    }, {
                        "id": "K_PERIOD",
                        "text": ""
                    }, {
                        "id": "K_SLASH",
                        "text": ""
                    }, {
                        "id": "T_new_107",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": 140,
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": 930
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": 145,
                        "sp": 1
                    }]
                }]
            }]
        },
        "phone": {
            "layer": [{
                "id": "default",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": ""
                    }, {
                        "id": "K_2",
                        "text": ""
                    }, {
                        "id": "K_3",
                        "text": ""
                    }, {
                        "id": "K_4",
                        "text": ""
                    }, {
                        "id": "K_5",
                        "text": ""
                    }, {
                        "id": "K_6",
                        "text": ""
                    }, {
                        "id": "K_7",
                        "text": ""
                    }, {
                        "id": "K_8",
                        "text": ""
                    }, {
                        "id": "K_9",
                        "text": ""
                    }, {
                        "id": "K_0",
                        "text": ""
                    }, {
                        "id": "K_HYPHEN",
                        "text": "\u02D7"
                    }, {
                        "id": "K_EQUAL",
                        "text": "\uA4FF"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": 100,
                        "sp": 1
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_Q",
                        "text": "Q",
                        "pad": 75
                    }, {
                        "id": "K_W",
                        "text": "\uA4EA"
                    }, {
                        "id": "K_E",
                        "text": "\uA4F0"
                    }, {
                        "id": "K_R",
                        "text": "\uA4E3"
                    }, {
                        "id": "K_T",
                        "text": "\uA4D4"
                    }, {
                        "id": "K_Y",
                        "text": "\uA4EC"
                    }, {
                        "id": "K_U",
                        "text": "\uA4F4"
                    }, {
                        "id": "K_I",
                        "text": "\uA4F2"
                    }, {
                        "id": "K_O",
                        "text": "\uA4F3"
                    }, {
                        "id": "K_P",
                        "text": "\uA4D1"
                    }, {
                        "id": "K_LBRKT",
                        "text": ""
                    }, {
                        "id": "K_RBRKT",
                        "text": ""
                    }, {
                        "id": "T_new_26",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_BKQUOTE",
                        "text": ""
                    }, {
                        "id": "K_A",
                        "text": "\uA4EE"
                    }, {
                        "id": "K_S",
                        "text": "\uA4E2"
                    }, {
                        "id": "K_D",
                        "text": "\uA4D3"
                    }, {
                        "id": "K_F",
                        "text": "\uA4DD"
                    }, {
                        "id": "K_G",
                        "text": "\uA4D6"
                    }, {
                        "id": "K_H",
                        "text": "\uA4E7"
                    }, {
                        "id": "K_J",
                        "text": "\uA4D9"
                    }, {
                        "id": "K_K",
                        "text": "\uA4D7"
                    }, {
                        "id": "K_L",
                        "text": "\uA4E1"
                    }, {
                        "id": "K_COLON",
                        "text": "\uA4FC"
                    }, {
                        "id": "K_QUOTE",
                        "text": "\u02BC"
                    }, {
                        "id": "K_BKSLASH",
                        "text": ""
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": 160,
                        "sp": 1,
                        "nextlayer": "shift"
                    }, {
                        "id": "K_oE2",
                        "text": ""
                    }, {
                        "id": "K_Z",
                        "text": "\uA4DC"
                    }, {
                        "id": "K_X",
                        "text": "\uA4EB"
                    }, {
                        "id": "K_C",
                        "text": "\uA4DA"
                    }, {
                        "id": "K_V",
                        "text": "\uA4E6"
                    }, {
                        "id": "K_B",
                        "text": "\uA4D0"
                    }, {
                        "id": "K_N",
                        "text": "\uA4E0"
                    }, {
                        "id": "K_M",
                        "text": "\uA4DF"
                    }, {
                        "id": "K_COMMA",
                        "text": "\uA4F9"
                    }, {
                        "id": "K_PERIOD",
                        "text": "\uA4F8"
                    }, {
                        "id": "K_SLASH",
                        "text": ""
                    }, {
                        "id": "T_new_52",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": 140,
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": 930
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": 145,
                        "sp": 1
                    }]
                }]
            }, {
                "id": "shift",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": ""
                    }, {
                        "id": "K_2",
                        "text": ""
                    }, {
                        "id": "K_3",
                        "text": ""
                    }, {
                        "id": "K_4",
                        "text": ""
                    }, {
                        "id": "K_5",
                        "text": ""
                    }, {
                        "id": "K_6",
                        "text": ""
                    }, {
                        "id": "K_7",
                        "text": ""
                    }, {
                        "id": "K_8",
                        "text": ""
                    }, {
                        "id": "K_9",
                        "text": ""
                    }, {
                        "id": "K_0",
                        "text": ""
                    }, {
                        "id": "K_HYPHEN",
                        "text": "\u02CD"
                    }, {
                        "id": "K_EQUAL",
                        "text": ""
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": 100,
                        "sp": 1
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_Q",
                        "text": "\u2605",
                        "pad": 75
                    }, {
                        "id": "K_W",
                        "text": "\u25AA"
                    }, {
                        "id": "K_E",
                        "text": "\uA4F1"
                    }, {
                        "id": "K_R",
                        "text": "\uA4E4"
                    }, {
                        "id": "K_T",
                        "text": "\uA4D5"
                    }, {
                        "id": "K_Y",
                        "text": "\uA4FB"
                    }, {
                        "id": "K_U",
                        "text": "\uA4F5"
                    }, {
                        "id": "K_I",
                        "text": "\uA4FE"
                    }, {
                        "id": "K_O",
                        "text": "\u02CD"
                    }, {
                        "id": "K_P",
                        "text": "\uA4D2"
                    }, {
                        "id": "K_LBRKT",
                        "text": ""
                    }, {
                        "id": "K_RBRKT",
                        "text": ""
                    }, {
                        "id": "T_new_81",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_BKQUOTE",
                        "text": ""
                    }, {
                        "id": "K_A",
                        "text": "\uA4EF"
                    }, {
                        "id": "K_S",
                        "text": "\u2022"
                    }, {
                        "id": "K_D",
                        "text": "\uA4F7"
                    }, {
                        "id": "K_F",
                        "text": "\uA4DE"
                    }, {
                        "id": "K_G",
                        "text": "\uA4E8"
                    }, {
                        "id": "K_H",
                        "text": "\uA4FA"
                    }, {
                        "id": "K_J",
                        "text": "\uA4E9"
                    }, {
                        "id": "K_K",
                        "text": "\uA4D8"
                    }, {
                        "id": "K_L",
                        "text": "\uA4F6"
                    }, {
                        "id": "K_COLON",
                        "text": "\uA4FD"
                    }, {
                        "id": "K_QUOTE",
                        "text": ""
                    }, {
                        "id": "K_BKSLASH",
                        "text": ""
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": 160,
                        "sp": 1,
                        "nextlayer": "default"
                    }, {
                        "id": "K_oE2",
                        "text": ""
                    }, {
                        "id": "K_Z",
                        "text": "\u201C"
                    }, {
                        "id": "K_X",
                        "text": "\u201D"
                    }, {
                        "id": "K_C",
                        "text": "\uA4DB"
                    }, {
                        "id": "K_V",
                        "text": "\uA4E5"
                    }, {
                        "id": "K_B",
                        "text": "\uA4ED"
                    }, {
                        "id": "K_N",
                        "text": ""
                    }, {
                        "id": "K_M",
                        "text": ""
                    }, {
                        "id": "K_COMMA",
                        "text": ""
                    }, {
                        "id": "K_PERIOD",
                        "text": ""
                    }, {
                        "id": "K_SLASH",
                        "text": ""
                    }, {
                        "id": "T_new_107",
                        "text": "",
                        "width": 10,
                        "sp": 10
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": 140,
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": 930
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": 145,
                        "sp": 1
                    }]
                }]
            }]
        }
    };
    this.s7 = "QWERTYUIOPqwertyuiopASDFGHJKL:asdfghjkl;'ZXCVBzxcvbnm,.=-_";
    this.s8 = "★▪ꓱꓤꓕꓻꓵ꓾ˍꓒQꓪꓰꓣꓔꓬꓴꓲꓳꓑꓯ•ꓷꓞꓨꓺꓩꓘꓶꓽꓮꓢꓓꓝꓖꓧꓙꓗꓡꓼʼ“”ꓛꓥꓭꓜꓫꓚꓦꓐꓠꓟꓹꓸ꓿˗ˍ";
    this.s9 = "NM";
    this.KVER = "10.0.977.0";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "ʼ");
        } else if (k.KKM(e, 16384, 188)) {
            r = m = 1;
            k.KO(0, t, "ꓹ");
        } else if (k.KKM(e, 16384, 189)) {
            r = m = 1;
            k.KO(0, t, "˗");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, "ꓸ");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "ꓽ");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ꓼ");
        } else if (k.KKM(e, 16384, 187)) {
            r = m = 1;
            k.KO(0, t, "꓿");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ꓯ");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "ꓭ");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "ꓛ");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ꓷ");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ꓱ");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "ꓞ");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "ꓨ");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ꓺ");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "꓾");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "ꓩ");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "ꓘ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ꓶ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ˍ");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "ꓒ");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "★");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ꓤ");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "•");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ꓕ");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ꓵ");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "ꓥ");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "▪");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "”");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "ꓻ");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "“");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "ˍ");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ꓮ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ꓐ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ꓚ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ꓓ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ꓰ");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ꓝ");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ꓖ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ꓧ");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ꓲ");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ꓙ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ꓗ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ꓡ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ꓟ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ꓠ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ꓳ");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ꓑ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ꓣ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ꓢ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ꓔ");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ꓴ");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "ꓦ");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ꓪ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "ꓫ");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ꓬ");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ꓜ");
        }
        return r;
    };
}