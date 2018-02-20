KeymanWeb.KR(new Keyboard_easy_chakma());

function Keyboard_easy_chakma() {
    this.KI = "Keyboard_easy_chakma";
    this.KN = "Easy Chakma";
    this.KMINVER = "9.0";
    this.KV = {
        F: ' 1em "RibengUni"',
        K102: 0
    };
    this.KDU = 0;
    this.KLS = {
        "shift": ["~", "!", "@", "#", "$", "%", "𑅆", "𑄀", "𑅅", "(", ")", "_", ";", "", "", "", "𑄁", "𑄠", "𑄔", "𑄜", "𑄒", "𑄍", "𑄏", "𑄐", "𑄊", "𑄅", "{", "}", "𑄂", "", "", "", "𑄱", "𑄫", "𑄩", "𑄃", "𑅁", "𑄞", "𑄈", "𑄗", "𑄙", ":", "\"", "", "", "", "", "", "", "𑅀", "𑄯", "𑄰", "𑄣", "𑄕", "𑄲", "𑄆", "<", ">", "𑅃", "", "", "", "", "", ""],
        "default": ["`", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿", "𑄶", "-", "=", "", "", "", "𑄋", "𑄡", "𑄓", "𑄛", "𑄑", "𑄌", "𑄎", "𑄦", "𑄉", "𑄤", "[", "]", "𑅂", "", "", "", "𑄭", "𑄪", "𑄨", "𑄧", "𑄳", "𑄝", "𑄇", "𑄖", "𑄘", "𑄴", "'", "", "", "", "", "", "", "𑄄", "𑄮", "‌𑄬", "𑄢", "𑄚", "𑄥", "𑄟", ",", ".", "𑅄", "", "", "", "", "", ""]
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
    this.KBVER = "1.18";
    this.KMBM = 0x0010;
    this.KS = 1;
    this.KVKL = {
        "tablet": {
            "layer": [{
                "id": "default",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "U_11137",
                        "text": "\uD804\uDD37",
                        "pad": ""
                    }, {
                        "id": "U_11138",
                        "text": "\uD804\uDD38"
                    }, {
                        "id": "U_11138",
                        "text": "\uD804\uDD39"
                    }, {
                        "id": "U_1113A",
                        "text": "\uD804\uDD3A"
                    }, {
                        "id": "U_1113B",
                        "text": "\uD804\uDD3B"
                    }, {
                        "id": "U_1113C",
                        "text": "\uD804\uDD3C"
                    }, {
                        "id": "U_1113D",
                        "text": "\uD804\uDD3D"
                    }, {
                        "id": "U_1113E",
                        "text": "\uD804\uDD3E"
                    }, {
                        "id": "U_1113F",
                        "text": "\uD804\uDD3F"
                    }, {
                        "id": "U_11136",
                        "text": "\uD804\uDD36"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "U_1110B",
                        "text": "\uD804\uDD0B",
                        "pad": ""
                    }, {
                        "id": "U_11121",
                        "text": "\uD804\uDD21"
                    }, {
                        "id": "U_11113",
                        "text": "\uD804\uDD13"
                    }, {
                        "id": "U_1111B",
                        "text": "\uD804\uDD1B"
                    }, {
                        "id": "U_11111",
                        "text": "\uD804\uDD11"
                    }, {
                        "id": "U_1110C",
                        "text": "\uD804\uDD0C"
                    }, {
                        "id": "U_1110E",
                        "text": "\uD804\uDD0E"
                    }, {
                        "id": "U_11126",
                        "text": "\uD804\uDD26"
                    }, {
                        "id": "U_11109",
                        "text": "\uD804\uDD09"
                    }, {
                        "id": "U_11124",
                        "text": "\uD804\uDD24"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "U_1112D",
                        "text": "\uD804\uDD2D"
                    }, {
                        "id": "U_1112A",
                        "text": "\uD804\uDD2A"
                    }, {
                        "id": "U_11128",
                        "text": "\uD804\uDD28"
                    }, {
                        "id": "U_11127",
                        "text": "\uD804\uDD27"
                    }, {
                        "id": "U_11133",
                        "text": "\uD804\uDD33"
                    }, {
                        "id": "K_H", //"id": "U_1111D",
                        "text": "\uD804\uDD1D"
                    }, {
                        "id": "U_11107",
                        "text": "\uD804\uDD07"
                    }, {
                        "id": "U_11116",
                        "text": "\uD804\uDD16"
                    }, {
                        "id": "U_11118",
                        "text": "\uD804\uDD18"
                    }, {
                        "id": "U_11134",
                        "text": "\uD804\uDD34"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": "",
                        "sp": 1,
                        "nextlayer": "shift"
                    }, {
                        "id": "U_11104",
                        "text": "\uD804\uDD04"
                    }, {
                        "id": "U_1112E",
                        "text": "\uD804\uDD2E"
                    }, {
                        "id": "K_C",
                        "text": "\uD804\uDD2C"
                    }, {
                        "id": "U_11122",
                        "text": "\uD804\uDD22"
                    }, {
                        "id": "U_1111A",
                        "text": "\uD804\uDD1A"
                    }, {
                        "id": "U_11125",
                        "text": "\uD804\uDD25"
                    }, {
                        "id": "U_1111F",
                        "text": "\uD804\uDD1F"
                    }, {
                        "id": "U_11144",
                        "text": "\uD804\uDD44",
                        "sk": [{
                            "text": "\uD804\uDD46",
                            "id": "U_11146"
                        }]
                    }, {
                        "id": "U_11145",
                        "text": "\uD804\uDD45",
                        "sk": [{
                            "text": "\uD804\uDD42",
                            "id": "U_11142"
                        }]
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_CONTROL",
                        "text": "*Symbol*",
                        "sp": "1",
                        "nextlayer": "symbol"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "",
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": "625"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "",
                        "sp": 1
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "",
                        "sp": 1
                    }]
                }, {
                    "id": 6,
                    "key": []
                }]
            }, {
                "id": "shift",
                "row": [{
                    "id": 1,
                    "key": []
                }, {
                    "id": 2,
                    "key": [{
                        "id": "U_11101",
                        "text": "\uD804\uDD01",
                        "pad": ""
                    }, {
                        "id": "U_11120",
                        "text": "\uD804\uDD20"
                    }, {
                        "id": "U_11114",
                        "text": "\uD804\uDD14"
                    }, {
                        "id": "U_1111C",
                        "text": "\uD804\uDD1C"
                    }, {
                        "id": "U_11112",
                        "text": "\uD804\uDD12"
                    }, {
                        "id": "U_1110D",
                        "text": "\uD804\uDD0D"
                    }, {
                        "id": "U_1110F",
                        "text": "\uD804\uDD0F"
                    }, {
                        "id": "U_11110",
                        "text": "\uD804\uDD10"
                    }, {
                        "id": "U_1110A",
                        "text": "\uD804\uDD0A"
                    }, {
                        "id": "U_11105",
                        "text": "\uD804\uDD05"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "U_11131",
                        "text": "\uD804\uDD31"
                    }, {
                        "id": "U_1112B",
                        "text": "\uD804\uDD2B"
                    }, {
                        "id": "U_11129",
                        "text": "\uD804\uDD29"
                    }, {
                        "id": "U_11103",
                        "text": "\uD804\uDD03"
                    }, {
                        "id": "U_11141",
                        "text": "\uD804\uDD41"
                    }, {
                        "id": "U_1111E",
                        "text": "\uD804\uDD1E"
                    }, {
                        "id": "U_11108",
                        "text": "\uD804\uDD08"
                    }, {
                        "id": "U_11117",
                        "text": "\uD804\uDD17"
                    }, {
                        "id": "U_11119",
                        "text": "\uD804\uDD19"
                    }, {
                        "id": "U_11100",
                        "text": "\uD804\uDD00"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*abc*",
                        "width": "",
                        "sp": 1,
                        "nextlayer": "default"
                    }, {
                        "id": "U_11140",
                        "text": "\uD804\uDD40"
                    }, {
                        "id": "U_1112F",
                        "text": "\uD804\uDD2F"
                    }, {
                        "id": "U_11130",
                        "text": "\uD804\uDD30"
                    }, {
                        "id": "U_11123",
                        "text": "\uD804\uDD23"
                    }, {
                        "id": "U_11115",
                        "text": "\uD804\uDD15"
                    }, {
                        "id": "U_11132",
                        "text": "\uD804\uDD32"
                    }, {
                        "id": "U_11106",
                        "text": "\uD804\uDD06"
                    }, {
                        "id": "U_11143",
                        "text": "\uD804\uDD43"
                    }, {
                        "id": "U_11102",
                        "text": "\uD804\uDD02",
                        "width": "100"
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_CONTROL",
                        "text": "*Symbol*",
                        "sp": "1",
                        "nextlayer": "symbol"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "",
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": "625"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "",
                        "sp": 1
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "",
                        "sp": 1
                    }]
                }, {
                    "id": 6,
                    "key": []
                }]
            }, {
                "id": "symbol",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "U_0031",
                        "text": "1",
                        "pad": ""
                    }, {
                        "id": "U_0032",
                        "text": "2"
                    }, {
                        "id": "U_0033",
                        "text": "3"
                    }, {
                        "id": "U_0034",
                        "text": "4"
                    }, {
                        "id": "U_0035",
                        "text": "5"
                    }, {
                        "id": "U_0036",
                        "text": "6"
                    }, {
                        "id": "U_0037",
                        "text": "7"
                    }, {
                        "id": "U_0038",
                        "text": "8"
                    }, {
                        "id": "U_0039",
                        "text": "9"
                    }, {
                        "id": "U_0030",
                        "text": "0"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "U_0021",
                        "text": "!",
                        "pad": ""
                    }, {
                        "id": "U_0040",
                        "text": "@"
                    }, {
                        "id": "U_0023",
                        "text": "#"
                    }, {
                        "id": "U_0023",
                        "text": "$"
                    }, {
                        "id": "U_0025",
                        "text": "%"
                    }, {
                        "id": "U_005E",
                        "text": "^"
                    }, {
                        "id": "U_0026",
                        "text": "&"
                    }, {
                        "id": "U_002A",
                        "text": "*"
                    }, {
                        "id": "U_0028",
                        "text": "("
                    }, {
                        "id": "U_0029",
                        "text": ")"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "U_002D",
                        "text": "-"
                    }, {
                        "id": "U_005F",
                        "text": "_"
                    }, {
                        "id": "U_003D",
                        "text": "="
                    }, {
                        "id": "U_002B",
                        "text": "+"
                    }, {
                        "id": "U_007B",
                        "text": "{"
                    }, {
                        "id": "U_007D",
                        "text": "}"
                    }, {
                        "id": "U_005B",
                        "text": "["
                    }, {
                        "id": "U_005D",
                        "text": "]"
                    }, {
                        "id": "U_005C",
                        "text": "\\",
                        "sk": [{
                            "text": "\/",
                            "id": "U_002F"
                        }, {
                            "text": "|",
                            "id": "U_007C"
                        }]
                    }, {
                        "id": "U_007E",
                        "text": "~",
                        "sk": [{
                            "text": "`",
                            "id": "U_0060"
                        }]
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": "",
                        "sp": 1,
                        "nextlayer": "shift"
                    }, {
                        "id": "U_003A",
                        "text": ":"
                    }, {
                        "id": "U_003B",
                        "text": ";"
                    }, {
                        "id": "U_0022",
                        "text": "\""
                    }, {
                        "id": "U_0027",
                        "text": "'"
                    }, {
                        "id": "U_003C",
                        "text": "<"
                    }, {
                        "id": "U_003E",
                        "text": ">"
                    }, {
                        "id": "U_002C",
                        "text": ","
                    }, {
                        "id": "U_002E",
                        "text": "."
                    }, {
                        "id": "U_003F",
                        "text": "?"
                    }]
                }, {
                    "id": 5,
                    "key": [{
                        "id": "K_CONTROL",
                        "text": "*abc*",
                        "sp": "1",
                        "nextlayer": "default"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "",
                        "sp": 1
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": "625"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "",
                        "sp": 1
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "",
                        "sp": 1
                    }]
                }]
            }],
            "font": "RibengUni",
            "fontsize": ""
        }
    };
    this.s14 = "𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑅄";
    this.s15 = "𑄃𑄄𑄅𑄆";
    this.s16 = ".................................";
    this.s17 = "𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑅄";
    this.s18 = "....";
    this.s19 = "𑄃𑄄𑄅𑄆";
    this.KVER = "10.0.1021.0";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 8) && k.KCM(4, t, "𑄳", 1) && k.KA(1, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            r = m = 1;
            k.KO(4, t, "𑄬𑄬");
        } else if (k.KKM(e, 16384, 8) && k.KCM(3, t, "𑄳", 1) && k.KA(1, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            r = m = 1;
            k.KO(3, t, "𑄬");
        } else if (k.KKM(e, 16400, 49)) {
            r = m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16400, 222)) {
            r = m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16400, 51)) {
            r = m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16400, 52)) {
            r = m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16400, 53)) {
            r = m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16400, 55)) {
            r = m = 1;
            k.KO(0, t, "𑄀");
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 57)) {
            r = m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16400, 48)) {
            r = m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16400, 56)) {
            r = m = 1;
            k.KO(0, t, "𑅅");
        } else if (k.KKM(e, 16400, 187)) {
            r = m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16384, 188)) {
            r = m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16384, 189)) {
            r = m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑅄𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑅄𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑅄𑄬𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑅄𑄬𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑅄𑄬𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑅄𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑅄𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑅄𑄬");
        } else if (k.KKM(e, 16384, 191) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑅄𑄬");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "𑅄");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "𑅄");
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "𑄶");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "𑄷");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "𑄸");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "𑄹");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "𑄺");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "𑄻");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "𑄼");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "𑄽");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "𑄾");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "𑄿");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "𑄴");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16384, 187)) {
            r = m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16400, 191)) {
            r = m = 1;
            k.KO(0, t, "𑅃");
        } else if (k.KKM(e, 16400, 50)) {
            r = m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "𑄱");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄕𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄕𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄕𑄬𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄕𑄬𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄕𑄬𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄕𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄕𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄕𑄬");
        } else if (k.KKM(e, 16400, 66) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄕𑄬");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "𑄕");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "𑄕");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "𑄰");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "𑄩");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄔𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄔𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄔𑄬𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄔𑄬𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄔𑄬𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄔𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄔𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄔𑄬");
        } else if (k.KKM(e, 16400, 69) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄔𑄬");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "𑄔");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "𑄔");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄃𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄃𑄬𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄃𑄬𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄃𑄬𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄃𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄃𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄃𑄬");
        } else if (k.KKM(e, 16400, 70) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄃𑄬");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "𑄃");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "𑄃");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "𑅁");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄞𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄞𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄞𑄬𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄞𑄬𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄞𑄬𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄞𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄞𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄞𑄬");
        } else if (k.KKM(e, 16400, 72) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄞𑄬");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "𑄞");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "𑄞");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄐𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄐𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄐𑄬𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄐𑄬𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄐𑄬𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄐𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄐𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄐𑄬");
        } else if (k.KKM(e, 16400, 73) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄐𑄬");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "𑄐");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "𑄐");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄈𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄈𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄈𑄬𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄈𑄬𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄈𑄬𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄈𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄈𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄈𑄬");
        } else if (k.KKM(e, 16400, 74) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄈𑄬");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "𑄈");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "𑄈");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄗𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄗𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄗𑄬𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄗𑄬𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄗𑄬𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄗𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄗𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄗𑄬");
        } else if (k.KKM(e, 16400, 75) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄗𑄬");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "𑄗");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "𑄗");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄙𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄙𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄙𑄬𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄙𑄬𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄙𑄬𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄙𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄙𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄙𑄬");
        } else if (k.KKM(e, 16400, 76) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄙𑄬");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "𑄙");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "𑄙");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄆𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄆𑄬𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄆𑄬𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄆𑄬𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄆𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄆𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄆𑄬");
        } else if (k.KKM(e, 16400, 77) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄆𑄬");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "𑄆");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "𑄆");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "𑄲");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄊𑄠𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄊𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄊𑄬𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄊𑄬𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄊𑄬𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄊𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄊𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄊𑄬");
        } else if (k.KKM(e, 16400, 79) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄊𑄬");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "𑄊");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "𑄊");
        } else if (k.KKM(e, 16400, 80) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄅𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄅𑄬𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄅𑄬𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄅𑄬𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄅𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄅𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄅𑄬");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄅𑄬");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "𑄅");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "𑄅");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "𑄁");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄜𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄜𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄜𑄬𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄜𑄬𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄜𑄬𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄜𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄜𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄜𑄬");
        } else if (k.KKM(e, 16400, 82) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄜𑄬");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "𑄜");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "𑄜");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "𑄫");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄒𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄒𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄒𑄬𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄒𑄬𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄒𑄬𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄒𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄒𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄒𑄬");
        } else if (k.KKM(e, 16400, 84) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄒𑄬");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "𑄒");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "𑄒");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄏𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄏𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄏𑄬𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄏𑄬𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄏𑄬𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄏𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄏𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄏𑄬");
        } else if (k.KKM(e, 16400, 85) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄏𑄬");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "𑄏");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "𑄏");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄣𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄣𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄣𑄬𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄣𑄬𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄣𑄬𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄣𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄣𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄣𑄬");
        } else if (k.KKM(e, 16400, 86) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄣𑄬");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "𑄣");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "𑄣");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄠𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄠𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄠𑄬𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄠𑄬𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄠𑄬𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄠𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄠𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄠𑄬");
        } else if (k.KKM(e, 16400, 87) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄠𑄬");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "𑄠");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "𑄠");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "𑄯");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄍𑄠𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄍𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄍𑄬𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄍𑄬𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄍𑄬𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄍𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄍𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄍𑄬");
        } else if (k.KKM(e, 16400, 89) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄍𑄬");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "𑄍");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "𑄍");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "𑅀");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "𑅂");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "𑅆");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "𑄭");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄚𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄚𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄚𑄬𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄚𑄬𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄚𑄬𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄚𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄚𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄚𑄬");
        } else if (k.KKM(e, 16384, 66) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄚𑄬");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "𑄚");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "𑄚");
        } else if (k.KKM(e, 16384, 67) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "‌𑄬𑄬");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "‌𑄬");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "‌𑄬");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "𑄨");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄓𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄓𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄓𑄬𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄓𑄬𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄓𑄬𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄓𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄓𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄓𑄬");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄓𑄬");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "𑄓");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "𑄓");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "𑄧");
        } else if (k.KKM(e, 16384, 71) && k.KCM(2, t, "𑄬𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄬𑄬");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "𑄬", 1)) {
            r = m = 1;
            k.KO(1, t, "𑄬");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "𑄳");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄝𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄝𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄝𑄬𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄝𑄬𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄝𑄬𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄝𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄝𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄝𑄬");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄝𑄬");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "𑄝");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "𑄝");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄦𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄦𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄦𑄬𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄦𑄬𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄦𑄬𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄦𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄦𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄦𑄬");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄦𑄬");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "𑄦");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "𑄦");
        } else if (k.KKM(e, 16384, 74) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄇𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄇𑄬𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄇𑄬𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄇𑄬𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄇𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄇𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄇𑄬");
        } else if (k.KKM(e, 16384, 74) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄇𑄬");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "𑄇");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "𑄇");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄖𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄖𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄖𑄬𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄖𑄬𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄖𑄬𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄖𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄖𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄖𑄬");
        } else if (k.KKM(e, 16384, 75) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄖𑄬");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "𑄖");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "𑄖");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄘𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄘𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄘𑄬𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄘𑄬𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄘𑄬𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄘𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄘𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄘𑄬");
        } else if (k.KKM(e, 16384, 76) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄘𑄬");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "𑄘");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "𑄘");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄟𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄟𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄟𑄬𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄟𑄬𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄟𑄬𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄟𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄟𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄟𑄬");
        } else if (k.KKM(e, 16384, 77) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄟𑄬");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "𑄟");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "𑄟");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄥𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄥𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄥𑄬𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄥𑄬𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄥𑄬𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄥𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄥𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄥𑄬");
        } else if (k.KKM(e, 16384, 78) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄥𑄬");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "𑄥");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "𑄥");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄉𑄠𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄉𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄉𑄬𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄉𑄬𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄉𑄬𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄉𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄉𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄉𑄬");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄉𑄬");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "𑄉");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "𑄉");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄤𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄤𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄤𑄬𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄤𑄬𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄤𑄬𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄤𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄤𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄤𑄬");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄤𑄬");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "𑄤");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "𑄤");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄋𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄋𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄋𑄬𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄋𑄬𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄋𑄬𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄋𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄋𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄋𑄬");
        } else if (k.KKM(e, 16384, 81) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄋𑄬");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "𑄋");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "𑄋");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄛𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄛𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄛𑄬𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄛𑄬𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄛𑄬𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄛𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄛𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄛𑄬");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄛𑄬");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "𑄛");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "𑄛");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "𑄪");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄑𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄑𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄑𑄬𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄑𑄬𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄑𑄬𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄑𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄑𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄑𑄬");
        } else if (k.KKM(e, 16384, 84) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄑𑄬");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "𑄑");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "𑄑");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄎𑄠𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄎𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄎𑄬𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄎𑄬𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄎𑄬𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄎𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄎𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄎𑄬");
        } else if (k.KKM(e, 16384, 85) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄎𑄬");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "𑄎");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "𑄎");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄢𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄢𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄢𑄬𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄢𑄬𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄢𑄬𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄢𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄢𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄢𑄬");
        } else if (k.KKM(e, 16384, 86) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄢𑄬");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "𑄢");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "𑄢");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳𑄡𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄡𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄡𑄬𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄡𑄬𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄡𑄬𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄡𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄡𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄡𑄬");
        } else if (k.KKM(e, 16384, 87) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄡𑄬");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "𑄡");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "𑄡");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "𑄮");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄌𑄠𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄌𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄌𑄬𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄌𑄬𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄌𑄬𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄌𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄌𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄌𑄬");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄌𑄬");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "𑄌");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "𑄌");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(4, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳𑄄𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄄𑄬𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(3, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄄𑄬𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KCM(3, t, "‌𑄬𑄬", 3)) {
            r = m = 1;
            k.KO(3, t, "𑄄𑄬𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s14, 1, t);
            k.KO(-1, t, "𑄳𑄄𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄄𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(2, t, "‌");
            k.KIO(-1, this.s15, 1, t);
            k.KO(-1, t, "𑄳𑄄𑄬");
        } else if (k.KKM(e, 16384, 90) && k.KCM(2, t, "‌𑄬", 2)) {
            r = m = 1;
            k.KO(2, t, "𑄄𑄬");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "𑄄");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "𑄄");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "𑄂");
        } else if (k.KKM(e, 16400, 221)) {
            r = m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "~");
        }
        if (m) {
            r = this.g1(t, e);
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KA(0, k.KC(18, 1, t), this.s14) && k.KCM(17, t, "𑄳", 1) && k.KA(2, k.KC(16, 1, t), this.s14) && k.KCM(15, t, "𑄳", 1) && k.KA(4, k.KC(14, 1, t), this.s15) && k.KCM(13, t, "𑄳‌", 2) && k.KA(7, k.KC(11, 1, t), this.s15) && k.KCM(10, t, "𑄳‌", 2) && k.KA(10, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(13, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(15, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(18, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 11, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 14, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 16, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(18, 1, t), this.s14) && k.KCM(17, t, "𑄳", 1) && k.KA(2, k.KC(16, 1, t), this.s14) && k.KCM(15, t, "𑄳", 1) && k.KA(4, k.KC(14, 1, t), this.s14) && k.KCM(13, t, "𑄳‌", 2) && k.KA(7, k.KC(11, 1, t), this.s15) && k.KCM(10, t, "𑄳‌", 2) && k.KA(10, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(13, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(15, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(18, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 11, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 14, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 16, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(17, 1, t), this.s14) && k.KCM(16, t, "𑄳", 1) && k.KA(2, k.KC(15, 1, t), this.s14) && k.KCM(14, t, "𑄳‌", 2) && k.KA(5, k.KC(12, 1, t), this.s15) && k.KCM(11, t, "𑄳‌", 2) && k.KA(8, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(10, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(13, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(15, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(17, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 9, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 11, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 14, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 16, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(17, 1, t), this.s14) && k.KCM(16, t, "𑄳", 1) && k.KA(2, k.KC(15, 1, t), this.s14) && k.KCM(14, t, "𑄳‌", 2) && k.KA(5, k.KC(12, 1, t), this.s14) && k.KCM(11, t, "𑄳‌", 2) && k.KA(8, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(10, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(13, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(15, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(17, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 9, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 11, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 14, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 16, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(14, 1, t), this.s14) && k.KCM(13, t, "𑄳", 1) && k.KA(2, k.KC(12, 1, t), this.s14) && k.KCM(11, t, "𑄳", 1) && k.KA(4, k.KC(10, 1, t), this.s15) && k.KCM(9, t, "𑄳", 1) && k.KA(6, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(9, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(11, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(14, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 12, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(14, 1, t), this.s14) && k.KCM(13, t, "𑄳", 1) && k.KA(2, k.KC(12, 1, t), this.s14) && k.KCM(11, t, "𑄳", 1) && k.KA(4, k.KC(10, 1, t), this.s14) && k.KCM(9, t, "𑄳", 1) && k.KA(6, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(9, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(11, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(14, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 12, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(13, 1, t), this.s14) && k.KCM(12, t, "𑄳", 1) && k.KA(2, k.KC(11, 1, t), this.s14) && k.KCM(10, t, "𑄳", 1) && k.KA(4, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(6, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(9, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(11, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(13, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 12, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(13, 1, t), this.s14) && k.KCM(12, t, "𑄳", 1) && k.KA(2, k.KC(11, 1, t), this.s14) && k.KCM(10, t, "𑄳", 1) && k.KA(4, k.KC(9, 1, t), this.s14) && k.KCM(8, t, "𑄳", 1) && k.KA(6, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(9, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(11, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(13, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 12, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(12, 1, t), this.s14) && k.KCM(11, t, "𑄳", 1) && k.KA(2, k.KC(10, 1, t), this.s14) && k.KCM(9, t, "𑄳", 1) && k.KA(4, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(7, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(9, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(12, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(12, 1, t), this.s15) && k.KCM(11, t, "𑄳", 1) && k.KA(2, k.KC(10, 1, t), this.s15) && k.KCM(9, t, "𑄳", 1) && k.KA(4, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(7, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(9, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(12, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(11, 1, t), this.s14) && k.KCM(10, t, "𑄳", 1) && k.KA(2, k.KC(9, 1, t), this.s14) && k.KCM(8, t, "𑄳‌", 2) && k.KA(5, k.KC(6, 1, t), this.s15) && k.KCM(5, t, "𑄳", 1) && k.KA(7, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(9, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(11, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(11, 1, t), this.s15) && k.KCM(10, t, "𑄳", 1) && k.KA(2, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳‌", 2) && k.KA(5, k.KC(6, 1, t), this.s14) && k.KCM(5, t, "𑄳", 1) && k.KA(7, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(9, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(11, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 10, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s14) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s14) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s14) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s15) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s15) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s15) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(10, 1, t), this.s15) && k.KCM(9, t, "𑄳", 1) && k.KA(2, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(5, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(7, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(10, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(9, t, "‌", 1) && k.KA(1, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(4, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(6, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(9, this.s14, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(9, t, "‌", 1) && k.KA(1, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(4, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(6, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(9, this.s14, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s14) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s14) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(9, t, "‌", 1) && k.KA(1, k.KC(8, 1, t), this.s14) && k.KCM(7, t, "𑄳‌", 2) && k.KA(4, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(6, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(9, this.s14, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 7, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(9, t, "‌", 1) && k.KA(1, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(4, k.KC(5, 1, t), this.s15) && k.KCM(4, t, "𑄳", 1) && k.KA(6, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(9, this.s15, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s14) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s14, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(9, t, "‌", 1) && k.KA(1, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(4, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(6, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(9, this.s15, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(9, t, "‌", 1) && k.KA(1, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳‌", 2) && k.KA(4, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳", 1) && k.KA(6, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(9, this.s15, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 7, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(9, 1, t), this.s15) && k.KCM(8, t, "𑄳", 1) && k.KA(2, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(5, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(7, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(9, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 8, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(8, t, "‌", 1) && k.KA(1, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(4, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(6, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(8, this.s14, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(8, t, "‌", 1) && k.KA(1, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(4, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(6, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(8, this.s14, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(8, t, "‌", 1) && k.KA(1, k.KC(7, 1, t), this.s14) && k.KCM(6, t, "𑄳‌", 2) && k.KA(4, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(6, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(8, this.s14, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 7, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(8, t, "‌", 1) && k.KA(1, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(4, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "𑄳", 1) && k.KA(6, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(8, this.s15, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(8, t, "‌", 1) && k.KA(1, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(4, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(6, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(8, this.s15, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 7, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KCM(8, t, "‌", 1) && k.KA(1, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳‌", 2) && k.KA(4, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "𑄳", 1) && k.KA(6, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(8, this.s15, 2, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 5, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 7, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳", 1) && k.KA(2, k.KC(6, 1, t), this.s14) && k.KCM(5, t, "𑄳‌", 2) && k.KA(5, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(8, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(8, 1, t), this.s15) && k.KCM(7, t, "𑄳", 1) && k.KA(2, k.KC(6, 1, t), this.s14) && k.KCM(5, t, "𑄳‌", 2) && k.KA(5, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "𑄬𑄬", 2)) {
            m = 1;
            k.KIO(8, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄬");
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳", 1) && k.KA(2, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳‌", 2) && k.KA(5, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(7, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s15, 6, t);
            k.KO(-1, t, "𑄬");
        } else if (k.KA(0, k.KC(7, 1, t), this.s15) && k.KCM(6, t, "𑄳", 1) && k.KA(2, k.KC(5, 1, t), this.s14) && k.KCM(4, t, "𑄳‌", 2) && k.KA(5, k.KC(2, 1, t), this.s14) && k.KCM(1, t, "𑄬", 1)) {
            m = 1;
            k.KIO(7, this.s15, 1, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "𑄳");
            k.KIO(-1, this.s14, 6, t);
            k.KO(-1, t, "𑄬");
        }
        return r;
    };
}