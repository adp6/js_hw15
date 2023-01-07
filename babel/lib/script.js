"use strict";

require("core-js/modules/es.string.trim-start.js");
require("core-js/modules/es.string.trim-end.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.unscopables.flat.js");
var text1 = "     Hello World!     ";
var text2 = text1.trimStart();
var text3 = text2.trimEnd();
var myArr = [[1, 2], [3, 4], [5, 6]];
var newArr = myArr.flat();