(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("@seregpie/claw")):"function"==typeof define&&define.amd?define(["@seregpie/claw"],b):a.VueClaw=b(a.Claw)})(this,function(a){"use strict";a=a&&a.hasOwnProperty("default")?a["default"]:a;var b=new Map,c={name:"Claw",bind:function(c,d){var e=d.arg,f=d.value,g=b.get(c);g||b.set(c,g=new a(c)),g.on(e,f)},update:function(a,c){var d=c.arg,e=c.value,f=b.get(a);f.off(d),f.on(d,e)},unbind:function(a,c){var d=c.arg,e=b.get(a);e.off(d),e.isIdle&&b.delete(a)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.directive(c.name,c),c});
