/* わたしの献立帖 */
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback
} = React;
const LUCIDE = {
  "ArrowLeftRight": [["path", {
    "d": "M8 3 4 7l4 4"
  }], ["path", {
    "d": "M4 7h16"
  }], ["path", {
    "d": "m16 21 4-4-4-4"
  }], ["path", {
    "d": "M20 17H4"
  }]],
  "BookOpen": [["path", {
    "d": "M12 7v14"
  }], ["path", {
    "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
  }]],
  "BookmarkPlus": [["path", {
    "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  }], ["line", {
    "x1": "12",
    "x2": "12",
    "y1": "7",
    "y2": "13"
  }], ["line", {
    "x1": "15",
    "x2": "9",
    "y1": "10",
    "y2": "10"
  }]],
  "Calculator": [["rect", {
    "width": "16",
    "height": "20",
    "x": "4",
    "y": "2",
    "rx": "2"
  }], ["line", {
    "x1": "8",
    "x2": "16",
    "y1": "6",
    "y2": "6"
  }], ["line", {
    "x1": "16",
    "x2": "16",
    "y1": "14",
    "y2": "18"
  }], ["path", {
    "d": "M16 10h.01"
  }], ["path", {
    "d": "M12 10h.01"
  }], ["path", {
    "d": "M8 10h.01"
  }], ["path", {
    "d": "M12 14h.01"
  }], ["path", {
    "d": "M8 14h.01"
  }], ["path", {
    "d": "M12 18h.01"
  }], ["path", {
    "d": "M8 18h.01"
  }]],
  "CalendarDays": [["path", {
    "d": "M8 2v4"
  }], ["path", {
    "d": "M16 2v4"
  }], ["rect", {
    "width": "18",
    "height": "18",
    "x": "3",
    "y": "4",
    "rx": "2"
  }], ["path", {
    "d": "M3 10h18"
  }], ["path", {
    "d": "M8 14h.01"
  }], ["path", {
    "d": "M12 14h.01"
  }], ["path", {
    "d": "M16 14h.01"
  }], ["path", {
    "d": "M8 18h.01"
  }], ["path", {
    "d": "M12 18h.01"
  }], ["path", {
    "d": "M16 18h.01"
  }]],
  "Camera": [["path", {
    "d": "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }], ["circle", {
    "cx": "12",
    "cy": "13",
    "r": "3"
  }]],
  "Carrot": [["path", {
    "d": "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
  }], ["path", {
    "d": "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
  }], ["path", {
    "d": "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
  }]],
  "Check": [["path", {
    "d": "M20 6 9 17l-5-5"
  }]],
  "ChefHat": [["path", {
    "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
  }], ["path", {
    "d": "M6 17h12"
  }]],
  "ChevronRight": [["path", {
    "d": "m9 18 6-6-6-6"
  }]],
  "Circle": [["circle", {
    "cx": "12",
    "cy": "12",
    "r": "10"
  }]],
  "ClipboardPaste": [["path", {
    "d": "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
  }], ["path", {
    "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
  }], ["path", {
    "d": "m17 10 4 4-4 4"
  }]],
  "Cloud": [["path", {
    "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
  }]],
  "CloudOff": [["path", {
    "d": "m2 2 20 20"
  }], ["path", {
    "d": "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"
  }], ["path", {
    "d": "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
  }]],
  "CloudUpload": [["path", {
    "d": "M12 13v8"
  }], ["path", {
    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
  }], ["path", {
    "d": "m8 17 4-4 4 4"
  }]],
  "CookingPot": [["path", {
    "d": "M2 12h20"
  }], ["path", {
    "d": "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
  }], ["path", {
    "d": "m4 8 16-4"
  }], ["path", {
    "d": "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
  }]],
  "Copy": [["rect", {
    "width": "14",
    "height": "14",
    "x": "8",
    "y": "8",
    "rx": "2",
    "ry": "2"
  }], ["path", {
    "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
  }]],
  "Database": [["ellipse", {
    "cx": "12",
    "cy": "5",
    "rx": "9",
    "ry": "3"
  }], ["path", {
    "d": "M3 5V19A9 3 0 0 0 21 19V5"
  }], ["path", {
    "d": "M3 12A9 3 0 0 0 21 12"
  }]],
  "Download": [["path", {
    "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }], ["polyline", {
    "points": "7 10 12 15 17 10"
  }], ["line", {
    "x1": "12",
    "x2": "12",
    "y1": "15",
    "y2": "3"
  }]],
  "ExternalLink": [["path", {
    "d": "M15 3h6v6"
  }], ["path", {
    "d": "M10 14 21 3"
  }], ["path", {
    "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }]],
  "Flame": [["path", {
    "d": "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
  }]],
  "HardDriveDownload": [["path", {
    "d": "M12 2v8"
  }], ["path", {
    "d": "m16 6-4 4-4-4"
  }], ["rect", {
    "width": "20",
    "height": "8",
    "x": "2",
    "y": "14",
    "rx": "2"
  }], ["path", {
    "d": "M6 18h.01"
  }], ["path", {
    "d": "M10 18h.01"
  }]],
  "Heart": [["path", {
    "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  }]],
  "Instagram": [["rect", {
    "width": "20",
    "height": "20",
    "x": "2",
    "y": "2",
    "rx": "5",
    "ry": "5"
  }], ["path", {
    "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }], ["line", {
    "x1": "17.5",
    "x2": "17.51",
    "y1": "6.5",
    "y2": "6.5"
  }]],
  "ListOrdered": [["path", {
    "d": "M10 12h11"
  }], ["path", {
    "d": "M10 18h11"
  }], ["path", {
    "d": "M10 6h11"
  }], ["path", {
    "d": "M4 10h2"
  }], ["path", {
    "d": "M4 6h1v4"
  }], ["path", {
    "d": "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
  }]],
  "ListPlus": [["path", {
    "d": "M11 12H3"
  }], ["path", {
    "d": "M16 6H3"
  }], ["path", {
    "d": "M16 18H3"
  }], ["path", {
    "d": "M18 9v6"
  }], ["path", {
    "d": "M21 12h-6"
  }]],
  "ListX": [["path", {
    "d": "M11 12H3"
  }], ["path", {
    "d": "M16 6H3"
  }], ["path", {
    "d": "M16 18H3"
  }], ["path", {
    "d": "m19 10-4 4"
  }], ["path", {
    "d": "m15 10 4 4"
  }]],
  "Loader": [["path", {
    "d": "M12 2v4"
  }], ["path", {
    "d": "m16.2 7.8 2.9-2.9"
  }], ["path", {
    "d": "M18 12h4"
  }], ["path", {
    "d": "m16.2 16.2 2.9 2.9"
  }], ["path", {
    "d": "M12 18v4"
  }], ["path", {
    "d": "m4.9 19.1 2.9-2.9"
  }], ["path", {
    "d": "M2 12h4"
  }], ["path", {
    "d": "m4.9 4.9 2.9 2.9"
  }]],
  "LogIn": [["path", {
    "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
  }], ["polyline", {
    "points": "10 17 15 12 10 7"
  }], ["line", {
    "x1": "15",
    "x2": "3",
    "y1": "12",
    "y2": "12"
  }]],
  "LogOut": [["path", {
    "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }], ["polyline", {
    "points": "16 17 21 12 16 7"
  }], ["line", {
    "x1": "21",
    "x2": "9",
    "y1": "12",
    "y2": "12"
  }]],
  "Minus": [["path", {
    "d": "M5 12h14"
  }]],
  "Moon": [["path", {
    "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  }]],
  "PenLine": [["path", {
    "d": "M12 20h9"
  }], ["path", {
    "d": "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
  }]],
  "Pencil": [["path", {
    "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
  }], ["path", {
    "d": "m15 5 4 4"
  }]],
  "Plus": [["path", {
    "d": "M5 12h14"
  }], ["path", {
    "d": "M12 5v14"
  }]],
  "PlusCircle": [["circle", {
    "cx": "12",
    "cy": "12",
    "r": "10"
  }], ["path", {
    "d": "M8 12h8"
  }], ["path", {
    "d": "M12 8v8"
  }]],
  "QrCode": [["rect", {
    "width": "5",
    "height": "5",
    "x": "3",
    "y": "3",
    "rx": "1"
  }], ["rect", {
    "width": "5",
    "height": "5",
    "x": "16",
    "y": "3",
    "rx": "1"
  }], ["rect", {
    "width": "5",
    "height": "5",
    "x": "3",
    "y": "16",
    "rx": "1"
  }], ["path", {
    "d": "M21 16h-3a2 2 0 0 0-2 2v3"
  }], ["path", {
    "d": "M21 21v.01"
  }], ["path", {
    "d": "M12 7v3a2 2 0 0 1-2 2H7"
  }], ["path", {
    "d": "M3 12h.01"
  }], ["path", {
    "d": "M12 3h.01"
  }], ["path", {
    "d": "M12 16v.01"
  }], ["path", {
    "d": "M16 12h1"
  }], ["path", {
    "d": "M21 12v.01"
  }], ["path", {
    "d": "M12 21v-1"
  }]],
  "Refrigerator": [["path", {
    "d": "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
  }], ["path", {
    "d": "M5 10h14"
  }], ["path", {
    "d": "M15 7v6"
  }]],
  "Save": [["path", {
    "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
  }], ["path", {
    "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
  }], ["path", {
    "d": "M7 3v4a1 1 0 0 0 1 1h7"
  }]],
  "Search": [["circle", {
    "cx": "11",
    "cy": "11",
    "r": "8"
  }], ["path", {
    "d": "m21 21-4.3-4.3"
  }]],
  "Send": [["path", {
    "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
  }], ["path", {
    "d": "m21.854 2.147-10.94 10.939"
  }]],
  "Settings": [["path", {
    "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
  }], ["circle", {
    "cx": "12",
    "cy": "12",
    "r": "3"
  }]],
  "ShoppingBasket": [["path", {
    "d": "m15 11-1 9"
  }], ["path", {
    "d": "m19 11-4-7"
  }], ["path", {
    "d": "M2 11h20"
  }], ["path", {
    "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
  }], ["path", {
    "d": "M4.5 15.5h15"
  }], ["path", {
    "d": "m5 11 4-7"
  }], ["path", {
    "d": "m9 11 1 9"
  }]],
  "ShoppingCart": [["circle", {
    "cx": "8",
    "cy": "21",
    "r": "1"
  }], ["circle", {
    "cx": "19",
    "cy": "21",
    "r": "1"
  }], ["path", {
    "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
  }]],
  "Shuffle": [["path", {
    "d": "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
  }], ["path", {
    "d": "m18 2 4 4-4 4"
  }], ["path", {
    "d": "M2 6h1.9c1.5 0 2.9.9 3.6 2.2"
  }], ["path", {
    "d": "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"
  }], ["path", {
    "d": "m18 14 4 4-4 4"
  }]],
  "Soup": [["path", {
    "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
  }], ["path", {
    "d": "M7 21h10"
  }], ["path", {
    "d": "M19.5 12 22 6"
  }], ["path", {
    "d": "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
  }], ["path", {
    "d": "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
  }], ["path", {
    "d": "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
  }]],
  "Sparkles": [["path", {
    "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
  }], ["path", {
    "d": "M20 3v4"
  }], ["path", {
    "d": "M22 5h-4"
  }], ["path", {
    "d": "M4 17v2"
  }], ["path", {
    "d": "M5 18H3"
  }]],
  "Tag": [["path", {
    "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
  }], ["circle", {
    "cx": "7.5",
    "cy": "7.5",
    "r": ".5",
    "fill": "currentColor"
  }]],
  "Tags": [["path", {
    "d": "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
  }], ["path", {
    "d": "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
  }], ["circle", {
    "cx": "6.5",
    "cy": "9.5",
    "r": ".5",
    "fill": "currentColor"
  }]],
  "Trash2": [["path", {
    "d": "M3 6h18"
  }], ["path", {
    "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
  }], ["path", {
    "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
  }], ["line", {
    "x1": "10",
    "x2": "10",
    "y1": "11",
    "y2": "17"
  }], ["line", {
    "x1": "14",
    "x2": "14",
    "y1": "11",
    "y2": "17"
  }]],
  "Upload": [["path", {
    "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }], ["polyline", {
    "points": "17 8 12 3 7 8"
  }], ["line", {
    "x1": "12",
    "x2": "12",
    "y1": "3",
    "y2": "15"
  }]],
  "Users": [["path", {
    "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }], ["circle", {
    "cx": "9",
    "cy": "7",
    "r": "4"
  }], ["path", {
    "d": "M22 21v-2a4 4 0 0 0-3-3.87"
  }], ["path", {
    "d": "M16 3.13a4 4 0 0 1 0 7.75"
  }]],
  "Wand2": [["path", {
    "d": "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
  }], ["path", {
    "d": "m14 7 3 3"
  }], ["path", {
    "d": "M5 6v4"
  }], ["path", {
    "d": "M19 14v4"
  }], ["path", {
    "d": "M10 2v2"
  }], ["path", {
    "d": "M7 8H3"
  }], ["path", {
    "d": "M21 16h-4"
  }], ["path", {
    "d": "M11 3H9"
  }]],
  "X": [["path", {
    "d": "M18 6 6 18"
  }], ["path", {
    "d": "m6 6 12 12"
  }]],
  "ScanText": [["path", {
    "d": "M3 7V5a2 2 0 0 1 2-2h2"
  }], ["path", {
    "d": "M17 3h2a2 2 0 0 1 2 2v2"
  }], ["path", {
    "d": "M21 17v2a2 2 0 0 1-2 2h-2"
  }], ["path", {
    "d": "M7 21H5a2 2 0 0 1-2-2v-2"
  }], ["path", {
    "d": "M7 8h8"
  }], ["path", {
    "d": "M7 12h10"
  }], ["path", {
    "d": "M7 16h6"
  }]],
  "MessageCircle": [["path", {
    "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
  }]],
  "FileImage": [["path", {
    "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }], ["path", {
    "d": "M14 2v4a2 2 0 0 0 2 2h4"
  }], ["circle", {
    "cx": "10",
    "cy": "12",
    "r": "2"
  }], ["path", {
    "d": "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"
  }]],
  "GripVertical": [["circle", {
    "cx": "9",
    "cy": "12",
    "r": "1"
  }], ["circle", {
    "cx": "9",
    "cy": "5",
    "r": "1"
  }], ["circle", {
    "cx": "9",
    "cy": "19",
    "r": "1"
  }], ["circle", {
    "cx": "15",
    "cy": "12",
    "r": "1"
  }], ["circle", {
    "cx": "15",
    "cy": "5",
    "r": "1"
  }], ["circle", {
    "cx": "15",
    "cy": "19",
    "r": "1"
  }]],
  "LayoutList": [["rect", {
    "width": "7",
    "height": "7",
    "x": "3",
    "y": "3",
    "rx": "1"
  }], ["rect", {
    "width": "7",
    "height": "7",
    "x": "3",
    "y": "14",
    "rx": "1"
  }], ["path", {
    "d": "M14 4h7"
  }], ["path", {
    "d": "M14 9h7"
  }], ["path", {
    "d": "M14 15h7"
  }], ["path", {
    "d": "M14 20h7"
  }]],
  "Lightbulb": [["path", {
    "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
  }], ["path", {
    "d": "M9 18h6"
  }], ["path", {
    "d": "M10 22h4"
  }]],
  "Sun": [["circle", {
    "cx": "12",
    "cy": "12",
    "r": "4"
  }], ["path", {
    "d": "M12 2v2"
  }], ["path", {
    "d": "M12 20v2"
  }], ["path", {
    "d": "m4.93 4.93 1.41 1.41"
  }], ["path", {
    "d": "m17.66 17.66 1.41 1.41"
  }], ["path", {
    "d": "M2 12h2"
  }], ["path", {
    "d": "M20 12h2"
  }], ["path", {
    "d": "m6.34 17.66-1.41 1.41"
  }], ["path", {
    "d": "m19.07 4.93-1.41 1.41"
  }]],
  "Type": [["polyline", {
    "points": "4 7 4 4 20 4 20 7"
  }], ["line", {
    "x1": "9",
    "x2": "15",
    "y1": "20",
    "y2": "20"
  }], ["line", {
    "x1": "12",
    "x2": "12",
    "y1": "4",
    "y2": "20"
  }]]
};
function Icon({
  name,
  size = 18,
  className = '',
  strokeWidth = 2,
  fill
}) {
  const nodes = LUCIDE[name] || LUCIDE.Circle || [];
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill || 'none',
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: 'shrink-0 ' + className,
    "aria-hidden": "true"
  }, nodes.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
const FOODCOL = [[/鶏|ささみ|手羽|唐揚/, '#e6bf8a'], [/豚|べーこん|はむ/, '#d99a84'], [/牛|ひき肉|みんち|はんばーぐ/, '#8f4f3a'], [/鮭|さーもん/, '#f0875a'], [/さば|ぶり|たら/, '#a9a39a'], [/えび/, '#ef7d5e'], [/つな/, '#d8c4a6'], [/卵|たまご/, '#f5c842'], [/とまと|けちゃっぷ/, '#d8432e'], [/きゃべつ|れたす|きゅうり/, '#a9c96a'], [/ほうれん草|小松菜|ねぎ|ぶろっこりー|ぴーまん|しそ/, '#4f8a3c'], [/にんじん|かぼちゃ/, '#ee8a2a'], [/玉ねぎ|もやし|大根|白菜|豆腐/, '#f3ecd8'], [/なす/, '#5c3b6e'], [/じゃがいも|さつまいも/, '#e9cf8e'], [/しめじ|えのき|しいたけ|きのこ|まいたけ|えりんぎ/, '#c7a57a'], [/ちーず|ばたー/, '#f2d37a'], [/かれー/, '#b8762a'], [/味噌|みそ/, '#a8692c'], [/塩昆布|わかめ|のり/, '#3d4a35']];
function hashStr(s) {
  let h = 2166136261;
  for (const c of s || '') h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}
function rng(seed) {
  let x = seed || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) % 10000 / 10000;
  };
}
const illoCache = new Map();
function dishIllustration(r) {
  const key = (r.id || r.name) + '|' + (r.updatedAt || '');
  if (illoCache.has(key)) return illoCache.get(key);
  let url = '';
  try {
    const W = 480,
      H = 360,
      c = document.createElement('canvas');
    c.width = W;
    c.height = H;
    const g = c.getContext('2d');
    const rand = rng(hashStr(r.name));
    const names = (r.ingredients || []).map(i => canon(i.name)).concat(canon(r.name));
    const cols = [];
    names.forEach(n => {
      const f = FOODCOL.find(([re]) => re.test(n));
      if (f && !cols.includes(f[1])) cols.push(f[1]);
    });
    if (!cols.length) cols.push('#d9b88a', '#7fa45a');
    const n = canon(r.name);
    const kind = /汁|すーぷ|みそ汁|豚汁|しちゅー/.test(n) ? 'soup' : /丼|かれー|ごはん|ちゃーはん|おむらいす/.test(n) ? 'rice' : /ぱすた|うどん|そば|麺|やきそば/.test(n) ? 'noodle' : 'plate';
    const cloth = ['#efe3cf', '#e8dcc6', '#f0e6d6'][Math.floor(rand() * 3)];
    g.fillStyle = cloth;
    g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(150,110,70,.18)';
    g.lineWidth = 14;
    for (let x = -H; x < W; x += 46) {
      g.beginPath();
      g.moveTo(x, 0);
      g.lineTo(x + H, H);
      g.stroke();
    }
    g.fillStyle = '#6f8a4a';
    g.fillRect(W * .06, H * .12, W * .05, H * .76);
    g.fillStyle = '#b48a5a';
    g.fillRect(W * .89, H * .1, W * .035, H * .8);
    const cx = W / 2,
      cy = H / 2 + 6,
      R = kind === 'plate' ? 140 : 122;
    g.fillStyle = 'rgba(60,40,25,.18)';
    g.beginPath();
    g.ellipse(cx + 8, cy + 12, R, R * .96, 0, 0, 7);
    g.fill();
    g.fillStyle = kind === 'soup' ? '#7a4a2a' : '#fbf8f1';
    g.beginPath();
    g.arc(cx, cy, R, 0, 7);
    g.fill();
    g.strokeStyle = 'rgba(120,90,60,.25)';
    g.lineWidth = 3;
    g.beginPath();
    g.arc(cx, cy, R * .82, 0, 7);
    g.stroke();
    if (kind === 'soup') {
      g.fillStyle = '#c98f4f';
      g.beginPath();
      g.arc(cx, cy, R * .8, 0, 7);
      g.fill();
    }
    if (kind === 'rice') {
      g.fillStyle = '#fffdf6';
      g.beginPath();
      g.arc(cx, cy, R * .72, 0, 7);
      g.fill();
      if (/かれー/.test(n)) {
        g.fillStyle = '#b8762a';
        g.beginPath();
        g.ellipse(cx + R * .18, cy, R * .5, R * .62, 0, 0, 7);
        g.fill();
      }
    }
    const inner = R * (kind === 'plate' ? .66 : .62);
    if (kind === 'noodle') {
      g.lineWidth = 9;
      g.lineCap = 'round';
      for (let k = 0; k < 26; k++) {
        g.strokeStyle = k % 2 ? '#f3dfa6' : '#ebd08c';
        g.beginPath();
        const a = rand() * 7,
          rr = rand() * inner * .8;
        g.arc(cx + Math.cos(a) * rr * .3, cy + Math.sin(a) * rr * .3, inner * .35 + rand() * inner * .5, a, a + 1.2 + rand());
        g.stroke();
      }
    }
    const pieces = kind === 'soup' ? 16 : 24;
    for (let k = 0; k < pieces; k++) {
      const col = cols[k % cols.length];
      const a = rand() * Math.PI * 2,
        d = Math.sqrt(rand()) * inner;
      const x = cx + Math.cos(a) * d,
        y = cy + Math.sin(a) * d,
        s = 10 + rand() * (kind === 'plate' ? 22 : 16);
      g.save();
      g.translate(x, y);
      g.rotate(rand() * 3);
      g.fillStyle = col;
      g.strokeStyle = 'rgba(60,35,20,.18)';
      g.lineWidth = 2;
      g.beginPath();
      if (k % 3 === 0) {
        g.ellipse(0, 0, s, s * .62, 0, 0, 7);
      } else if (k % 3 === 1) {
        g.roundRect ? g.roundRect(-s * .7, -s * .5, s * 1.4, s, s * .25) : g.rect(-s * .7, -s * .5, s * 1.4, s);
      } else {
        g.moveTo(-s * .8, s * .5);
        g.lineTo(0, -s * .7);
        g.lineTo(s * .8, s * .5);
        g.closePath();
      }
      g.fill();
      g.stroke();
      g.fillStyle = 'rgba(255,255,255,.28)';
      g.beginPath();
      g.ellipse(-s * .25, -s * .15, s * .25, s * .12, 0, 0, 7);
      g.fill();
      g.restore();
    }
    if (kind === 'plate' || kind === 'rice') {
      g.fillStyle = '#4f8a3c';
      for (let k = 0; k < 5; k++) {
        const a = rand() * 7,
          d = inner * .5 * rand();
        g.beginPath();
        g.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 4, 2.2, a, 0, 7);
        g.fill();
      }
    }
    url = c.toDataURL('image/jpeg', .85);
  } catch (e) {
    url = '';
  }
  illoCache.set(key, url);
  return url;
}
let dbp = null,
  idbOK = false;
const mem = {
  recipes: new Map(),
  meta: new Map()
};
function openDB() {
  return new Promise((res, rej) => {
    try {
      const r = indexedDB.open('kondate-cho', 1);
      r.onupgradeneeded = () => {
        const d = r.result;
        if (!d.objectStoreNames.contains('recipes')) d.createObjectStore('recipes', {
          keyPath: 'id'
        });
        if (!d.objectStoreNames.contains('meta')) d.createObjectStore('meta');
      };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    } catch (e) {
      rej(e);
    }
  });
}
function run(st, mode, op) {
  return dbp.then(d => new Promise((res, rej) => {
    const t = d.transaction(st, mode);
    const r = op(t.objectStore(st));
    t.oncomplete = () => res(r ? r.result : undefined);
    t.onerror = () => rej(t.error);
    t.onabort = () => rej(t.error);
  }));
}
const store = {
  async init() {
    try {
      dbp = openDB();
      await dbp;
      idbOK = true;
      try {
        navigator.storage && navigator.storage.persist && navigator.storage.persist();
      } catch (e) {}
    } catch (e) {
      idbOK = false;
    }
    return idbOK;
  },
  async all() {
    if (!idbOK) return [...mem.recipes.values()];
    return run('recipes', 'readonly', s => s.getAll());
  },
  async put(r) {
    if (!idbOK) {
      mem.recipes.set(r.id, r);
      return;
    }
    return run('recipes', 'readwrite', s => s.put(r));
  },
  async del(id) {
    if (!idbOK) {
      mem.recipes.delete(id);
      return;
    }
    return run('recipes', 'readwrite', s => s.delete(id));
  },
  async clear() {
    if (!idbOK) {
      mem.recipes.clear();
      return;
    }
    return run('recipes', 'readwrite', s => s.clear());
  },
  async getMeta(k) {
    if (!idbOK) return mem.meta.get(k);
    return run('meta', 'readonly', s => s.get(k));
  },
  async setMeta(k, v) {
    if (!idbOK) {
      mem.meta.set(k, v);
      return;
    }
    return run('meta', 'readwrite', s => s.put(v, k));
  }
};
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const LS = {
  get(k, d) {
    try {
      const v = localStorage.getItem('kondate:' + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem('kondate:' + k, JSON.stringify(v));
    } catch (e) {}
  },
  del(k) {
    try {
      localStorage.removeItem('kondate:' + k);
    } catch (e) {}
  }
};
const clean = v => JSON.parse(JSON.stringify(v === undefined ? null : v));
const withTimeout = (p, ms) => Promise.race([p, new Promise(res => setTimeout(() => res('timeout'), ms))]);
function createLocalBackend() {
  const cache = {
    recipes: [],
    meta: {},
    shopping: []
  };
  let emit = () => {};
  const b = {
    kind: 'local',
    ok: true,
    async start(h) {
      emit = () => {
        h.recipes([...cache.recipes]);
        h.meta({
          ...cache.meta
        });
        h.shopping([...cache.shopping]);
      };
      b.ok = await store.init();
      try {
        cache.recipes = await store.all();
        for (const k of ['categories', 'plan', 'offDays', 'seeded']) {
          const v = await store.getMeta(k);
          if (v !== undefined) cache.meta[k] = v;
        }
        cache.shopping = (await store.getMeta('shopping')) || [];
      } catch (e) {
        b.ok = false;
      }
      emit();
      return () => {
        emit = () => {};
      };
    },
    putRecipe(r) {
      cache.recipes = [...cache.recipes.filter(x => x.id !== r.id), r];
      emit();
      return store.put(r);
    },
    delRecipe(id) {
      cache.recipes = cache.recipes.filter(x => x.id !== id);
      emit();
      return store.del(id);
    },
    setMeta(k, v) {
      cache.meta = {
        ...cache.meta,
        [k]: v
      };
      emit();
      return store.setMeta(k, v);
    },
    shopReplace(items) {
      cache.shopping = items;
      emit();
      return store.setMeta('shopping', items);
    },
    snapshot() {
      return {
        recipes: cache.recipes,
        meta: cache.meta,
        shopping: cache.shopping
      };
    }
  };
  return b;
}
function parseFirebaseConfig(text) {
  if (!text) return null;
  try {
    const j = JSON.parse(text);
    if (j && j.apiKey && j.projectId) return j;
  } catch (e) {}
  const o = {};
  for (const k of ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId']) {
    const m = text.match(new RegExp(k + '["\']?\\s*[:=]\\s*["\']([^"\']+)["\']'));
    if (m) o[k] = m[1];
  }
  return o.apiKey && o.projectId && o.appId ? o : null;
}
function fbErrorText(e) {
  const c = e && e.code || '';
  if (/operation-not-allowed|admin-restricted/.test(c)) return 'Firebaseで「匿名ログイン」が有効になっていません。手順書の「Authentication」の項目を確認してください。';
  if (/configuration-not-found/.test(c)) return 'FirebaseでAuthenticationがまだ始まっていません。手順書の「Authentication」の項目を確認してください。';
  if (/permission-denied/.test(c)) return 'データベースのルールで読み書きが拒否されました。手順書の「ルール」をそのまま貼り付けて公開してください。';
  if (/api-key-not-valid|invalid-api-key/.test(c)) return 'Firebaseの設定（apiKey）が正しくないようです。設定をもう一度貼り付けてください。';
  if (/network|unavailable/.test(c)) return 'インターネットにつながっていません。つながったら自動で同期されます。';
  if (/not-found/.test(c)) return 'Firestore Databaseがまだ作成されていません。手順書の「Firestore」の項目を確認してください。';
  return 'クラウドに接続できませんでした（' + (c || e && e.message || '不明なエラー') + '）';
}
let fbApp = null;
async function initFirebase(cfg) {
  if (!window.firebase) throw {
    code: 'load-failed',
    message: 'Firebaseを読み込めませんでした。通信状態を確認してください。'
  };
  if (!fbApp) {
    fbApp = firebase.initializeApp(cfg);
    try {
      await firebase.firestore().enablePersistence({
        synchronizeTabs: true
      });
    } catch (e) {}
  }
  const user = await new Promise(res => {
    const un = firebase.auth().onAuthStateChanged(u => {
      un();
      res(u);
    });
  });
  if (!user) await firebase.auth().signInAnonymously();
  return firebase.firestore();
}
function createCloudBackend(cfg, code) {
  let db = null;
  const unsubs = [];
  let onErr = () => {};
  const fam = () => db.collection('families').doc(code);
  const wr = p => {
    if (p && p.catch) p.catch(e => {
      console.error(e);
      onErr(e);
    });
    return p;
  };
  const b = {
    kind: 'cloud',
    code,
    ok: true,
    async connect() {
      db = await initFirebase(cfg);
      return db;
    },
    async start(h) {
      onErr = h.error;
      await b.connect();
      let first = 0;
      const ready = () => {
        if (++first === 3 && h.ready) h.ready();
      };
      unsubs.push(fam().collection('recipes').onSnapshot(s => {
        h.recipes(s.docs.map(d => d.data()));
        ready();
      }, e => h.error(e)));
      unsubs.push(fam().collection('meta').onSnapshot(s => {
        const m = {};
        s.docs.forEach(d => m[d.id] = d.data().value);
        h.meta(m);
        ready();
      }, e => h.error(e)));
      unsubs.push(fam().collection('shopping').onSnapshot(s => {
        h.shopping(s.docs.map(d => d.data()));
        ready();
      }, e => h.error(e)));
      return () => unsubs.forEach(u => u());
    },
    putRecipe(r) {
      return wr(fam().collection('recipes').doc(r.id).set(clean(r)));
    },
    delRecipe(id) {
      return wr(fam().collection('recipes').doc(id).delete());
    },
    setMeta(k, v) {
      return wr(fam().collection('meta').doc(k).set({
        value: clean(v),
        updatedAt: Date.now()
      }));
    },
    shopSet(it) {
      return wr(fam().collection('shopping').doc(it.id).set(clean(it)));
    },
    shopDel(ids) {
      const bt = db.batch();
      ids.forEach(id => bt.delete(fam().collection('shopping').doc(id)));
      return wr(bt.commit());
    },
    async probe() {
      await b.connect();
      await fam().collection('meta').doc('family').set({
        value: {
          createdAt: Date.now()
        },
        updatedAt: Date.now()
      }, {
        merge: true
      });
      return true;
    },
    async uploadAll({
      recipes = [],
      meta = {},
      shopping = []
    }) {
      const ps = [];
      for (let i = 0; i < recipes.length; i += 12) {
        const bt = db.batch();
        recipes.slice(i, i + 12).forEach(r => bt.set(fam().collection('recipes').doc(r.id), clean(r)));
        ps.push(bt.commit());
      }
      const bt = db.batch();
      Object.entries(meta).forEach(([k, v]) => {
        if (v !== undefined && k !== 'seeded') bt.set(fam().collection('meta').doc(k), {
          value: clean(v),
          updatedAt: Date.now()
        });
      });
      shopping.forEach(it => bt.set(fam().collection('shopping').doc(it.id), clean(it)));
      ps.push(bt.commit());
      return withTimeout(Promise.all(ps), 30000);
    }
  };
  return b;
}
function genFamilyCode() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const a = new Uint32Array(16);
  crypto.getRandomValues(a);
  let s = '';
  a.forEach((v, i) => {
    s += A[v % A.length];
    if (i % 4 === 3 && i < 15) s += '-';
  });
  return s;
}
const b64e = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64d = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
function inviteLink(cfg, code) {
  const c = {
    apiKey: cfg.apiKey,
    authDomain: cfg.authDomain,
    projectId: cfg.projectId,
    appId: cfg.appId
  };
  return location.origin + location.pathname + '#join=' + b64e(JSON.stringify({
    v: 1,
    c,
    f: code
  }));
}
function parseInvite(text) {
  try {
    const m = String(text || '').match(/#?join=([A-Za-z0-9_-]+)/);
    if (!m) return null;
    const j = JSON.parse(b64d(m[1]));
    if (j && j.c && j.c.apiKey && j.f) return {
      cfg: j.c,
      code: j.f
    };
  } catch (e) {}
  return null;
}
function qrDataURL(text) {
  try {
    const q = qrcode(0, 'L');
    q.addData(text);
    q.make();
    return q.createDataURL(5, 2);
  } catch (e) {
    return '';
  }
}
async function shareOrCopy(text, title, toast) {
  try {
    if (navigator.share) {
      await navigator.share({
        title,
        text
      });
      return;
    }
  } catch (e) {
    if (e && e.name === 'AbortError') return;
  }
  try {
    await navigator.clipboard.writeText(text);
    toast('コピーしました。LINEなどに貼り付けて送ってください');
  } catch (e) {
    toast('コピーできませんでした。長押しで選択してください');
  }
}
function downloadText(name, text) {
  const blob = new Blob([text], {
    type: 'application/json'
  });
  const u = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = u;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(u), 3000);
}
const z2h = s => (s || '').replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)).replace(/．/g, '.').replace(/／/g, '/').replace(/½/g, '1/2').replace(/¼/g, '1/4').replace(/¾/g, '3/4');
const kata2hira = s => (s || '').replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
const SYN = [['玉ねぎ', 'たまねぎ', '玉葱'], ['にんじん', '人参'], ['じゃがいも', '馬鈴薯'], ['しょうゆ', '醤油'], ['長ねぎ', 'ねぎ', '葱'], ['卵', 'たまご', '玉子'], ['豆腐', 'とうふ'], ['しいたけ', '椎茸'], ['しょうが', '生姜'], ['にんにく', '大蒜'], ['鮭', 'さけ', 'さーもん'], ['さば', '鯖'], ['ごはん', 'ご飯'], ['なす', '茄子'], ['ほうれん草', 'ほうれんそう'], ['こしょう', '胡椒'], ['砂糖', 'さとう'], ['ごま', '胡麻'], ['きゃべつ', 'キャベツ'], ['ぶろっこりー', 'ブロッコリー'], ['ぴーまん', 'ピーマン'], ['もやし', '萌やし'], ['大根', 'だいこん'], ['白菜', 'はくさい'], ['きのこ', '茸']].map(g => g.map(kata2hira));
function canon(name) {
  let n = kata2hira(z2h(name || '')).replace(/[（(][^）)]*[）)]/g, '').replace(/[\s　・●○◯◎★☆※]/g, '').toLowerCase();
  for (const g of SYN) {
    for (const w of g) {
      if (w && n.includes(w)) {
        n = n.replace(w, g[0]);
        break;
      }
    }
  }
  return n;
}
const MEAT = /肉|もも|むね|ばら|ろーす|こま|ひき|ささみ|みんち|手羽/;
function meatKey(n) {
  const c = n[0];
  return '鶏豚牛'.includes(c) && MEAT.test(n) ? c + '肉' : null;
}
function matchIng(a, b) {
  const x = canon(a),
    y = canon(b);
  if (!x || !y) return false;
  if (x.includes(y) || y.includes(x)) return true;
  const mx = meatKey(x);
  return !!mx && mx === meatKey(y);
}
const PANTRY = ['塩', 'こしょう', '塩こしょう', '砂糖', 'しょうゆ', 'みりん', '酒', '料理酒', '酢', '油', 'さらだ油', 'ごま油', 'おりーぶおいる', '味噌', 'みそ', 'だし', '顆粒だし', '和風だし', '白だし', '鶏がらすーぷの素', '鶏がらすーぷ', 'こんそめ', '片栗粉', '小麦粉', '薄力粉', 'まよねーず', 'けちゃっぷ', 'そーす', 'うすたーそーす', 'おいすたーそーす', 'めんつゆ', 'ばたー', '水', 'お湯', 'ぽん酢', '豆板醤', '甜麺醤', 'はちみつ', 'ごま', '白ごま', 'いりごま', 'かつお節', 'こめ油'].map(canon);
const PROTEIN = /鮭|さば|肉|鶏|豚|牛|卵|豆腐|えび|いか|たら|ぶり|あさり|ちーず/;
function isPantry(name) {
  const n = canon(name);
  if (!n) return false;
  if (PROTEIN.test(n) && !/すーぷ|だし|の素|ころ/.test(n)) return false;
  return PANTRY.some(p => n === p || n.includes(p) && n.length <= p.length + 3);
}
const UNITS = 'g|kg|ml|mL|cc|l|個|本|枚|切れ|片|かけ|袋|パック|丁|株|束|玉|缶|合|杯|尾|房|節|cm|つ';
const QTY_RE = new RegExp('^(大さじ|小さじ|カップ|約)?\\s*(\\d+(?:\\.\\d+)?(?:/\\d+)?)\\s*(' + UNITS + ')?');
function parseQty(amount) {
  const a = z2h(amount || '').replace(/\s/g, '');
  const m = a.match(QTY_RE);
  if (!m) return null;
  let pre = m[1] === '約' ? '' : m[1] || '';
  let v = m[2];
  let num = v.includes('/') ? +v.split('/')[0] / +v.split('/')[1] : +v;
  const rest = a.slice(m[0].length);
  if (rest && !/^[〜~～\-]?[\d.]*$|^(程度|くらい|ほど|強|弱)$/.test(rest)) return null;
  let unit = m[3] || '';
  if (unit === 'mL') unit = 'ml';
  if (unit === 'cc') unit = 'ml';
  if (unit === 'kg') {
    num *= 1000;
    unit = 'g';
  }
  return {
    num,
    unit: pre ? pre : unit,
    prefix: !!pre
  };
}
const fmtNum = n => {
  const r = Math.round(n * 100) / 100;
  return String(r);
};
function mergeAmounts(list) {
  const sums = new Map();
  const texts = [];
  for (const a of list) {
    if (!a) {
      continue;
    }
    const q = parseQty(a);
    if (q) {
      const k = q.unit;
      const cur = sums.get(k) || {
        num: 0,
        prefix: q.prefix
      };
      cur.num += q.num;
      sums.set(k, cur);
    } else if (!texts.includes(a.trim())) texts.push(a.trim());
  }
  const parts = [...sums.entries()].map(([u, v]) => v.prefix ? `${u}${fmtNum(v.num)}` : `${fmtNum(v.num)}${u}`);
  return [...parts, ...texts].join(' ＋ ');
}
const AMT_START = /(大さじ|小さじ|カップ|約)?\s*[0-9]|適量|少々|ひとつまみ|お好み|適宜|ひとかけ|少量|1つまみ|ひとつかみ/;
function parseIngLine(line) {
  let s = z2h(line).replace(/^[\s・●○◯◎★☆▪◆◇■□✓✔︎\-\*•＊]+/, '').trim();
  if (!s) return null;
  s = s.replace(/[…‥]+|\.{2,}|・{2,}|-{2,}|ー{3,}/g, ' ');
  const m = s.match(AMT_START);
  if (m && m.index > 0) {
    const name = s.slice(0, m.index).replace(/[\s　:：、,]+$/, '').trim();
    const amount = s.slice(m.index).trim();
    if (name) return {
      name,
      amount
    };
  }
  const sp = s.split(/[\s　:：]+/);
  if (sp.length > 1) return {
    name: sp[0],
    amount: sp.slice(1).join(' ')
  };
  return {
    name: s,
    amount: ''
  };
}
const KCAL = [[['鶏もも'], 200, 250], [['鶏むね'], 120, 250], [['ささみ'], 105, 50], [['手羽'], 190, 60], [['豚ばら'], 380, 100], [['豚ろーす'], 250, 100], [['豚こま', '豚肉', '豚切り落とし'], 230, 100], [['ひき肉', 'みんち'], 230, 100], [['牛'], 290, 100], [['鮭'], 135, 80], [['さば'], 210, 90], [['ぶり'], 250, 90], [['えび'], 85, 20], [['つな'], 70, 70], [['ういんなー'], 320, 20], [['べーこん'], 400, 17], [['はむ'], 210, 10], [['卵'], 150, 55], [['豆腐'], 65, 300], [['厚揚げ'], 150, 150], [['油揚げ'], 380, 30], [['納豆'], 190, 45], [['ごはん', 'ご飯'], 156, 150], [['米'], 356, 150], [['ぱすた', 'すぱげってぃ'], 350, 100], [['うどん'], 95, 200], [['そば'], 130, 170], [['中華麺'], 200, 150], [['食ぱん', 'パン'], 260, 60], [['じゃがいも'], 76, 150], [['さつまいも'], 130, 200], [['かぼちゃ'], 80, 150], [['玉ねぎ'], 37, 200], [['にんじん'], 37, 150], [['きゃべつ'], 23, 60], [['もやし'], 15, 200], [['ほうれん草', '小松菜'], 20, 40], [['ぶろっこりー'], 33, 15], [['しめじ', 'えのき', 'まいたけ', 'しいたけ', 'きのこ', 'えりんぎ'], 20, 100], [['なす'], 22, 80], [['とまと'], 20, 150], [['大根'], 18, 1000], [['白菜'], 14, 1000], [['ぴーまん'], 22, 35], [['長ねぎ'], 30, 100], [['きゅうり'], 14, 100], [['れたす'], 12, 300], [['ちーず'], 340, 20], [['牛乳'], 67, 200], [['生くりーむ'], 400, 200], [['ばたー'], 745, 10], [['油', 'おいる'], 900, 13], [['砂糖'], 384, 9], [['しょうゆ'], 71, 18], [['みりん'], 241, 18], [['酒'], 107, 15], [['味噌', 'みそ'], 192, 18], [['まよねーず'], 700, 12], [['けちゃっぷ'], 120, 15], [['小麦粉', '薄力粉'], 368, 9], [['片栗粉'], 330, 9], [['ごま'], 600, 9], [['はちみつ'], 300, 21], [['めんつゆ'], 100, 18], [['ぽん酢'], 60, 18]].map(([k, per100, piece]) => ({
  k: k.map(canon),
  per100,
  piece
}));
function estimateKcal(ings, servings) {
  let total = 0,
    hits = 0;
  for (const i of ings) {
    const n = canon(i.name);
    const e = KCAL.find(x => x.k.some(k => n.includes(k)));
    if (!e) continue;
    const q = parseQty(i.amount);
    let g = null;
    if (q) {
      if (q.unit === 'g' || q.unit === 'ml') g = q.num;else if (q.unit === '大さじ') g = q.num * e.piece;else if (q.unit === '小さじ') g = q.num * e.piece / 3;else if (q.unit === 'カップ') g = q.num * 200;else if (q.unit === '合') g = q.num * 150;else g = q.num * e.piece;
    } else if (/適量|少々|ひとつまみ|お好み/.test(i.amount || '')) g = e.per100 > 500 ? 3 : 0;else g = e.piece;
    total += e.per100 * (g || 0) / 100;
    hits++;
  }
  if (!hits) return null;
  return Math.round(total / Math.max(1, servings || 1) / 10) * 10;
}
const EMOJI = /[\p{Extended_Pictographic}️‍]/gu;
const STEP_NUM = /^\s*(?:STEP\s*\d+[\s.:：)）]*|手順\s*\d+[\s.:：)）]*|\(?\d{1,2}[.)）．、:：]\s*|[①-⑳⑴-⒇❶-❿➀-➉]\s*)/i;
function parseCaption(text, categories) {
  const raw = text || '';
  const res = {
    name: '',
    ingredients: [],
    steps: [],
    kcal: null,
    kcalBasis: '1人分',
    kcalEstimated: false,
    url: '',
    cats: [],
    servings: 1,
    memo: ''
  };
  const memo = [];
  const url = raw.match(/https?:\/\/(?:www\.)?instagram\.com\/[^\s]+/);
  if (url) res.url = url[0];
  const tags = [...raw.matchAll(/#([^\s#]+)/g)].map(m => m[1]);
  res.cats = categories.filter(c => tags.some(t => kata2hira(t).includes(kata2hira(c)) || kata2hira(c).includes(kata2hira(t))));
  const kc = z2h(raw).match(/(\d{2,4})\s*(?:kcal|ｋｃａｌ|キロカロリー)/i) || z2h(raw).match(/カロリー[^\d\n]{0,8}(\d{2,4})/);
  if (kc) {
    res.kcal = +kc[1];
    const ln = z2h(raw).split('\n').find(l => l.includes(kc[0])) || '';
    const pm = ln.match(/(\d+)\s*人(?:分|前)/),
      um = ln.match(/1\s*(個|切れ|枚|本|杯|皿|食)/);
    res.kcalBasis = /全量|全部|合計|トータル/.test(ln) ? '全量' : pm ? pm[1] + '人分' : um ? '1' + um[1] + 'あたり' : /100\s*g/.test(ln) ? '100gあたり' : '1人分';
  }
  const sv = z2h(raw).match(/(\d+)\s*人(?:分|前)/);
  if (sv) res.servings = +sv[1];
  const lines = raw.split(/\r?\n/).map(l => l.replace(EMOJI, '').replace(/#[^\s#]+/g, '').trim()).filter(Boolean);
  let mode = null,
    sawHeader = false;
  for (const line of lines) {
    const L = z2h(line);
    const plain = L.replace(/[【】\[\]<>＜＞《》〈〉『』「」■□◆◇▼▽☆★=＝~〜:：\s]/g, '');
    if (plain.length <= 16 && /^(材料|ingredients|用意するもの|食材)/i.test(plain)) {
      mode = 'ing';
      sawHeader = true;
      continue;
    }
    if (plain.length <= 16 && /^(作り方|つくり方|作りかた|手順|レシピ$|howto|作る手順)/i.test(plain)) {
      mode = 'step';
      sawHeader = true;
      continue;
    }
    {
      const mh = L.match(/^[【\[■□◆◇▼▽☆★＜<《〈『「\s]*(ポイント|コツ|memo|メモ|保存方法|保存|point|tips|おすすめ|ひとこと|備考|注意)[】\]＞>》〉』」\s]*[:：]?\s*(.*)$/i);
      if (mh && (plain.length <= 16 || /[:：】\]]/.test(L.slice(0, 12)))) {
        mode = 'other';
        const rest = mh[2].replace(/^[】\]＞>》〉』」:：\s]+/, '').trim();
        if (rest) memo.push((/^(保存|注意)/.test(mh[1]) ? mh[1] + '：' : '') + rest);else if (/^(保存|注意)/.test(mh[1])) memo.push(mh[1] + '：');
        continue;
      }
    }
    if (mode === 'other') {
      if (L.length < 24 && /kcal|カロリー/i.test(L)) continue;
      const t = L.replace(/^[・●○◯◎★☆\-•※]+\s*/, '');
      if (t) {
        if (memo.length && /：$/.test(memo[memo.length - 1])) memo[memo.length - 1] += t;else memo.push(t);
      }
      continue;
    }
    if (!res.name && !mode && L.length <= 30 && !STEP_NUM.test(L) && !/(大さじ|小さじ|\d+\s*(g|ml|cc|個|本|枚|切れ)|適量|少々)/.test(L)) {
      res.name = L.replace(/[【】\[\]「」『』]/g, '').replace(/(の)?(作り方|レシピ)$/, '').trim();
      continue;
    }
    if (mode === 'ing') {
      if (/^[\(（【\[＜<]?\s*[A-ZＡ-Ｚa-zａ-ｚ]\s*[\)）】\]＞>]?$/.test(L)) continue;
      if (/(人分|人前)/.test(L) && L.length < 14) continue;
      const p = parseIngLine(L);
      if (p) res.ingredients.push(p);
      continue;
    }
    if (mode === 'step') {
      if (L.length < 24 && /kcal|カロリー|^\d+人分/i.test(L)) continue;
      if (STEP_NUM.test(L) || !res.steps.length) res.steps.push(L.replace(STEP_NUM, '').trim());else {
        const prev = res.steps[res.steps.length - 1];
        res.steps[res.steps.length - 1] = prev + (/[\u3040-\u9fff]$/.test(prev) && /^[\u3040-\u9fff。、]/.test(L) ? '' : ' ') + L;
      }
      continue;
    }
    if (!sawHeader) {
      if (STEP_NUM.test(L)) res.steps.push(L.replace(STEP_NUM, '').trim());else if (/^[・●○◯◎★☆\-•]/.test(L) || L.length <= 26 && AMT_START.test(L) && /(大さじ|小さじ|\d+\s*(g|ml|cc|個|本|枚|切れ|片|袋|パック)|適量|少々)/.test(L)) {
        const p = parseIngLine(L);
        if (p) res.ingredients.push(p);
      }
    }
  }
  res.steps = res.steps.filter(Boolean);
  res.memo = memo.filter(x => !/：$/.test(x)).join('\n');
  if (res.kcal == null && res.ingredients.length) {
    const e = estimateKcal(res.ingredients, res.servings);
    if (e) {
      res.kcal = e;
      res.kcalEstimated = true;
    }
  }
  return res;
}
const HEADER_RE = /^(材料|ingredients|用意するもの|食材|作り方|つくり方|作りかた|手順|howto|作る手順)/i;
const stripHead = l => z2h(l).replace(/[【】\[\]<>＜＞《》〈〉『』「」■□◆◇▼▽☆★=＝~〜:：\s]/g, '');
function parseStepsText(t) {
  const lines = z2h(t || '').replace(/([①-⑳❶-❿➀-➉])/g, '\n$1').split(/\r?\n/).map(l => l.replace(EMOJI, '').replace(/#[^\s#]+/g, '').trim()).filter(Boolean).filter(l => !(stripHead(l).length <= 16 && HEADER_RE.test(stripHead(l))));
  const hasNum = lines.some(l => STEP_NUM.test(l));
  const out = [];
  for (const l of lines) {
    if (!hasNum || STEP_NUM.test(l) || !out.length) out.push(l.replace(STEP_NUM, '').trim());else out[out.length - 1] += (/[。.!！]$/.test(out[out.length - 1]) ? '' : ' ') + l;
  }
  return out.filter(Boolean);
}
function parseIngText(t) {
  return z2h(t || '').split(/\r?\n|\s[\/／]\s/).map(l => l.replace(EMOJI, '').trim()).filter(Boolean).filter(l => {
    const h = stripHead(l);
    if (h.length <= 16 && HEADER_RE.test(h)) return false;
    if (/(人分|人前)/.test(l) && l.length < 14) return false;
    if (/^[\(（【\[＜<]?\s*[A-ZＡ-Ｚa-zａ-ｚ]\s*[\)）】\]＞>]?$/.test(l)) return false;
    return true;
  }).map(parseIngLine).filter(Boolean);
}
function compressImage(file, max = 800) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onerror = () => rej(fr.error);
    fr.onload = () => {
      const img = new Image();
      img.onerror = () => rej(new Error('画像を読み込めませんでした'));
      img.onload = () => {
        const s = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * s);
        c.height = Math.round(img.height * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        res(c.toDataURL('image/jpeg', .78));
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}
let tessLoading = null;
function loadTesseract() {
  if (window.Tesseract) return Promise.resolve();
  if (!tessLoading) tessLoading = new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = 'vendor/tesseract/tesseract.min.js';
    s.onload = () => res();
    s.onerror = () => {
      tessLoading = null;
      rej(new Error('load'));
    };
    document.head.appendChild(s);
  });
  return tessLoading;
}
async function prepImage(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = () => rej(new Error('image'));
      i.src = url;
    });
    const scale = Math.min(2, Math.max(1, 1400 / img.width));
    const c = document.createElement('canvas');
    c.width = Math.round(img.width * scale);
    c.height = Math.round(img.height * scale);
    const g = c.getContext('2d', {
      willReadFrequently: true
    });
    g.drawImage(img, 0, 0, c.width, c.height);
    const d = g.getImageData(0, 0, c.width, c.height);
    const p = d.data;
    let sum = 0;
    for (let i = 0; i < p.length; i += 4) {
      const l = .299 * p[i] + .587 * p[i + 1] + .114 * p[i + 2];
      p[i] = p[i + 1] = p[i + 2] = l;
      sum += l;
    }
    if (sum / (p.length / 4) < 110) for (let i = 0; i < p.length; i += 4) {
      p[i] = p[i + 1] = p[i + 2] = 255 - p[i];
    }
    g.putImageData(d, 0, 0);
    return c;
  } finally {
    URL.revokeObjectURL(url);
  }
}
const CJK = '\\u3000-\\u30ff\\u3400-\\u9fff\\uf900-\\ufaff\\uff00-\\uffef';
const OCR_JUNK = [/^\d{1,2}[:：]\d{2}/, /いいね/, /件のコメント|コメント\s*\d|をすべて見る|コメントを追加/, /^返信/, /フォロー/, /翻訳を見る/, /続きを読む/, /^\d+\s*(秒|分|時間|日|週間)前/, /^(その他|もっと見る|オリジナル音源)$/, /^[•·.…\-_|ー\s]+$/, /^[^\u3040-\u9fff\uff10-\uff19]{1,2}$/, /^@?[a-z0-9._]{3,30}$/i];
function cleanOcr(t) {
  return (t || '').split('\n').map(l => l.replace(new RegExp('([' + CJK + '])[ \\t]+(?=[' + CJK + '])', 'g'), '$1').replace(/[ \t]{2,}/g, ' ').trim().replace(/^[\(（\[「|｜]\s*(?=[①-⑳❶-❿])/, '')).filter(l => l && !OCR_JUNK.some(r => r.test(l)));
}
async function ocrImages(files, onProg) {
  await loadTesseract();
  let cur = 1;
  const worker = await Tesseract.createWorker('jpn', 1, {
    workerPath: 'vendor/tesseract/worker.min.js',
    corePath: 'vendor/tesseract/',
    langPath: 'vendor/tesseract/lang',
    logger: m => {
      if (m.status === 'recognizing text') onProg(cur, Math.round((m.progress || 0) * 100), '読み取り中');else onProg(cur, Math.round((m.progress || 0) * 100), '準備中');
    }
  });
  const lines = [];
  try {
    await worker.setParameters({
      preserve_interword_spaces: '1'
    });
    for (let i = 0; i < files.length; i++) {
      cur = i + 1;
      const c = await prepImage(files[i]);
      const {
        data
      } = await worker.recognize(c);
      const tail = lines.slice(-12);
      for (const l of cleanOcr(data.text)) {
        if (i > 0 && tail.includes(l)) continue;
        lines.push(l);
      }
    }
  } finally {
    await worker.terminate();
  }
  return lines.join('\n');
}
const I = s => s.split('|').map(x => {
  const [n, a] = x.split(':');
  return {
    name: n,
    amount: a || ''
  };
});
const GENERIC = [{
  id: 'g1',
  name: '肉じゃが',
  kcal: 420,
  categories: ['主菜'],
  ingredients: I('豚こま切れ肉:150g|じゃがいも:3個|玉ねぎ:1個|にんじん:1本|しょうゆ:大さじ2|砂糖:大さじ1.5|みりん:大さじ2'),
  steps: ['材料を食べやすく切る。', '鍋で肉を炒め、野菜を加えてさらに炒める。', '水200mlと調味料を入れ、落としぶたをして15分煮る。']
}, {
  id: 'g2',
  name: '親子丼',
  kcal: 650,
  categories: ['丼', '主菜', '10分レシピ'],
  ingredients: I('鶏もも肉:200g|玉ねぎ:1/2個|卵:3個|ごはん:2杯|めんつゆ:大さじ4'),
  steps: ['鶏肉はひと口大、玉ねぎは薄切りにする。', 'めんつゆと水100mlで鶏肉と玉ねぎを煮る。', '溶き卵を回し入れ、半熟でごはんにのせる。']
}, {
  id: 'g3',
  name: '豚の生姜焼き',
  kcal: 480,
  categories: ['主菜', 'お弁当'],
  ingredients: I('豚ロース薄切り:250g|玉ねぎ:1/2個|しょうが:1かけ|しょうゆ:大さじ2|みりん:大さじ2|酒:大さじ1|キャベツ:2枚'),
  steps: ['しょうがをすりおろし、調味料と合わせる。', '豚肉と玉ねぎを焼き、たれを絡める。', '千切りキャベツを添える。']
}, {
  id: 'g4',
  name: '鮭のホイル焼き',
  kcal: 260,
  categories: ['主菜', 'ダイエット'],
  ingredients: I('鮭:2切れ|しめじ:1/2袋|玉ねぎ:1/2個|バター:10g|しょうゆ:小さじ2'),
  steps: ['ホイルに玉ねぎ、鮭、しめじをのせる。', 'バターをのせて包み、フライパンで蓋をして12分蒸し焼き。', 'しょうゆをかける。']
}, {
  id: 'g5',
  name: '麻婆豆腐',
  kcal: 380,
  categories: ['主菜'],
  ingredients: I('豆腐:1丁|ひき肉:150g|長ねぎ:1/2本|にんにく:1かけ|豆板醤:小さじ1|みそ:大さじ1|片栗粉:大さじ1'),
  steps: ['豆腐をさいの目に切る。', 'ひき肉、にんにく、豆板醤を炒め、水150mlとみそを加える。', '豆腐を煮て、水溶き片栗粉でとろみをつける。']
}, {
  id: 'g6',
  name: 'チキンカレー',
  kcal: 720,
  categories: ['主菜', '作り置き'],
  ingredients: I('鶏もも肉:250g|玉ねぎ:2個|にんじん:1本|じゃがいも:2個|カレールウ:1/2箱|ごはん:2杯'),
  steps: ['具材を切って炒める。', '水を加えて15分煮る。', '火を止めてルウを溶かし、5分煮込む。']
}, {
  id: 'g7',
  name: '野菜炒め',
  kcal: 300,
  categories: ['主菜', '10分レシピ'],
  ingredients: I('豚こま切れ肉:120g|キャベツ:1/4個|もやし:1袋|にんじん:1/3本|ピーマン:2個|鶏がらスープの素:小さじ1|塩こしょう:少々'),
  steps: ['野菜を切る。', '強火で肉、かたい野菜の順に炒める。', '調味して手早く仕上げる。']
}, {
  id: 'g8',
  name: 'ハンバーグ',
  kcal: 520,
  categories: ['主菜', 'お弁当'],
  ingredients: I('ひき肉:300g|玉ねぎ:1/2個|卵:1個|パン粉:大さじ4|牛乳:大さじ3|ケチャップ:大さじ3|ソース:大さじ2'),
  steps: ['みじん切りの玉ねぎを炒めて冷ます。', '材料をこねて成形する。', '両面を焼いて蓋をし8分蒸し焼き、ソースを煮詰める。']
}, {
  id: 'g9',
  name: '鶏の照り焼き',
  kcal: 430,
  categories: ['主菜', 'お弁当'],
  ingredients: I('鶏もも肉:300g|しょうゆ:大さじ2|みりん:大さじ2|砂糖:大さじ1|酒:大さじ1'),
  steps: ['鶏肉の皮目から焼く。', '裏返して蓋をし火を通す。', '調味料を加えて照りが出るまで煮絡める。']
}, {
  id: 'g10',
  name: '豚汁',
  kcal: 220,
  categories: ['汁物', '作り置き'],
  ingredients: I('豚こま切れ肉:100g|大根:5cm|にんじん:1/2本|長ねぎ:1/2本|豆腐:1/2丁|みそ:大さじ3|だし:600ml'),
  steps: ['具材を切る。', '豚肉と野菜を炒め、だしで煮る。', '豆腐を加え、みそを溶く。']
}, {
  id: 'g11',
  name: 'きのこの和風パスタ',
  kcal: 520,
  categories: ['主菜', '10分レシピ'],
  ingredients: I('パスタ:200g|しめじ:1袋|ベーコン:2枚|にんにく:1かけ|しょうゆ:大さじ1|バター:10g'),
  steps: ['パスタをゆでる。', 'にんにく、ベーコン、きのこを炒める。', 'パスタと調味料を和える。']
}, {
  id: 'g12',
  name: 'さばの味噌煮',
  kcal: 330,
  categories: ['主菜'],
  ingredients: I('さば:2切れ|しょうが:1かけ|みそ:大さじ2|砂糖:大さじ1|酒:大さじ2|みりん:大さじ1'),
  steps: ['さばに熱湯をかけて臭みを取る。', '煮汁とさばを入れ、落としぶたで10分煮る。', 'みそを溶いて煮詰める。']
}, {
  id: 'g13',
  name: 'トマトと卵の炒め物',
  kcal: 250,
  categories: ['副菜', '10分レシピ'],
  ingredients: I('卵:3個|トマト:2個|塩こしょう:少々|ごま油:大さじ1'),
  steps: ['卵を半熟に炒めて取り出す。', 'トマトを炒めて卵を戻す。', '塩こしょうで味を調える。']
}, {
  id: 'g14',
  name: 'ほうれん草のおひたし',
  kcal: 40,
  categories: ['副菜', 'ダイエット', '作り置き'],
  ingredients: I('ほうれん草:1束|しょうゆ:小さじ2|かつお節:適量'),
  steps: ['ほうれん草をゆでて水にとる。', '絞って切り、しょうゆとかつお節をかける。']
}, {
  id: 'g15',
  name: 'チャーハン',
  kcal: 580,
  categories: ['主菜', '10分レシピ'],
  ingredients: I('ごはん:2杯|卵:2個|長ねぎ:1/2本|ハム:4枚|鶏がらスープの素:小さじ1|しょうゆ:小さじ1'),
  steps: ['具材を刻む。', '卵を炒めてごはんを加え、ほぐす。', '具材と調味料で仕上げる。']
}, {
  id: 'g16',
  name: '鶏むねのさっぱり煮',
  kcal: 280,
  categories: ['主菜', 'ダイエット'],
  ingredients: I('鶏むね肉:300g|ブロッコリー:1/2株|ぽん酢:大さじ3|酢:大さじ1|砂糖:小さじ2'),
  steps: ['鶏むね肉をそぎ切りにする。', '煮汁で鶏肉を煮る。', 'ゆでたブロッコリーと合わせる。']
}, {
  id: 'g17',
  name: 'なすの揚げびたし風',
  kcal: 150,
  categories: ['副菜', '作り置き'],
  ingredients: I('なす:3本|めんつゆ:大さじ3|しょうが:1かけ|ごま油:大さじ2'),
  steps: ['なすを切って油で焼く。', 'めんつゆとしょうがの漬け汁に浸す。']
}, {
  id: 'g18',
  name: '豆腐とわかめの味噌汁',
  kcal: 60,
  categories: ['汁物', '10分レシピ'],
  ingredients: I('豆腐:1/2丁|乾燥わかめ:大さじ1|長ねぎ:1/4本|だし:600ml|みそ:大さじ2.5'),
  steps: ['だしを温め、さいの目に切った豆腐とわかめを入れる。', '火を止めてみそを溶き、ねぎを散らす。']
}, {
  id: 'g19',
  name: 'ふわふわ卵の中華スープ',
  kcal: 70,
  categories: ['汁物', '10分レシピ'],
  ingredients: I('卵:1個|長ねぎ:1/4本|鶏がらスープの素:小さじ2|しょうゆ:小さじ1|片栗粉:小さじ1|ごま油:少々'),
  steps: ['水500mlと鶏がらスープの素を煮立てる。', '水溶き片栗粉でとろみをつけ、溶き卵を回し入れる。', 'ねぎとごま油を加える。']
}, {
  id: 'g20',
  name: '野菜たっぷりミネストローネ',
  kcal: 120,
  categories: ['汁物', '作り置き'],
  ingredients: I('トマト缶:1/2缶|玉ねぎ:1/2個|にんじん:1/3本|キャベツ:2枚|ベーコン:2枚|コンソメ:小さじ2|塩こしょう:少々'),
  steps: ['野菜とベーコンを1cm角に切って炒める。', 'トマト缶、水400ml、コンソメを加えて10分煮る。', '塩こしょうで味を調える。']
}, {
  id: 'g21',
  name: 'なめこと豆腐の味噌汁',
  kcal: 55,
  categories: ['汁物'],
  ingredients: I('なめこ:1袋|豆腐:1/2丁|だし:600ml|みそ:大さじ2.5|長ねぎ:少々'),
  steps: ['だしでなめこと豆腐を煮る。', 'みそを溶いてねぎを散らす。']
}, {
  id: 'g22',
  name: 'きんぴらごぼう',
  kcal: 110,
  categories: ['副菜', '作り置き', 'お弁当'],
  ingredients: I('ごぼう:1本|にんじん:1/3本|ごま油:大さじ1|しょうゆ:大さじ1.5|みりん:大さじ1.5|砂糖:小さじ1|白ごま:適量'),
  steps: ['ごぼうとにんじんを細切りにする。', 'ごま油で炒め、調味料を加えて汁気がなくなるまで炒める。', 'ごまをふる。']
}, {
  id: 'g23',
  name: 'ポテトサラダ',
  kcal: 180,
  categories: ['副菜', '作り置き'],
  ingredients: I('じゃがいも:3個|きゅうり:1/2本|ハム:3枚|マヨネーズ:大さじ4|塩こしょう:少々'),
  steps: ['じゃがいもをゆでてつぶす。', '薄切りのきゅうりは塩もみ、ハムは細切りにする。', 'すべてをマヨネーズで和える。']
}, {
  id: 'g24',
  name: '小松菜のごま和え',
  kcal: 60,
  categories: ['副菜', '10分レシピ', 'ダイエット'],
  ingredients: I('小松菜:1束|すりごま:大さじ2|しょうゆ:小さじ2|砂糖:小さじ1'),
  steps: ['小松菜をゆでて水気を絞り、4cmに切る。', 'ごま、しょうゆ、砂糖で和える。']
}, {
  id: 'g25',
  name: 'もやしのナムル',
  kcal: 70,
  categories: ['副菜', '10分レシピ', '作り置き'],
  ingredients: I('もやし:1袋|ごま油:大さじ1|鶏がらスープの素:小さじ1/2|にんにく:少々|白ごま:適量'),
  steps: ['もやしをさっとゆでて水気を切る。', '調味料と和えてごまをふる。']
}, {
  id: 'g26',
  name: '薬味たっぷり冷奴',
  kcal: 90,
  categories: ['副菜', '10分レシピ', 'ダイエット'],
  ingredients: I('豆腐:1丁|長ねぎ:少々|しょうが:少々|かつお節:適量|しょうゆ:適量'),
  steps: ['豆腐を切って器に盛る。', '薬味とかつお節をのせ、しょうゆをかける。']
}, {
  id: 'g27',
  name: '牛丼',
  kcal: 680,
  categories: ['丼', '主菜'],
  ingredients: I('牛こま切れ肉:200g|玉ねぎ:1個|ごはん:2杯|しょうゆ:大さじ3|みりん:大さじ3|砂糖:大さじ1|だし:150ml|紅しょうが:適量'),
  steps: ['玉ねぎを薄切りにし、だしと調味料で煮る。', '牛肉を加えてアクを取りながら5分煮る。', 'ごはんにのせ、紅しょうがを添える。']
}, {
  id: 'g28',
  name: '甘辛豚丼',
  kcal: 650,
  categories: ['丼', '主菜', '10分レシピ'],
  ingredients: I('豚ばら薄切り:200g|玉ねぎ:1/2個|ごはん:2杯|しょうゆ:大さじ2|みりん:大さじ2|砂糖:大さじ1|しょうが:少々'),
  steps: ['豚肉と玉ねぎを焼く。', '調味料を加えて煮絡める。', 'ごはんにのせる。']
}, {
  id: 'g29',
  name: '天津飯',
  kcal: 560,
  categories: ['丼', '10分レシピ'],
  ingredients: I('卵:4個|かにかま:4本|長ねぎ:1/4本|ごはん:2杯|鶏がらスープの素:小さじ1|しょうゆ:大さじ1|酢:大さじ1|砂糖:大さじ1|片栗粉:大さじ1'),
  steps: ['卵にかにかまとねぎを混ぜて焼き、ごはんにのせる。', '水150mlと調味料を煮立て、水溶き片栗粉でとろみをつける。', 'あんをかける。']
}, {
  id: 'g30',
  name: 'フルーツヨーグルト',
  kcal: 120,
  categories: ['デザート', '10分レシピ'],
  ingredients: I('プレーンヨーグルト:200g|バナナ:1本|キウイ:1個|はちみつ:小さじ2'),
  steps: ['果物を食べやすく切る。', 'ヨーグルトにのせ、はちみつをかける。']
}, {
  id: 'g31',
  name: '牛乳かん',
  kcal: 90,
  categories: ['デザート', '作り置き'],
  ingredients: I('牛乳:400ml|粉寒天:2g|砂糖:大さじ3|みかん缶:1/2缶'),
  steps: ['水100mlと寒天を煮溶かし、砂糖と牛乳を加えて温める。', 'みかんを入れた型に流し、冷蔵庫で固める。']
}, {
  id: 'g32',
  name: 'レンジ焼きりんご',
  kcal: 150,
  categories: ['デザート'],
  ingredients: I('りんご:1個|バター:10g|砂糖:大さじ1|シナモン:少々'),
  steps: ['りんごを8等分にし、バターと砂糖をのせる。', 'ラップをして600Wで4分加熱し、シナモンをふる。']
}].map(g => ({
  ...g,
  generic: true
}));
const DEFAULT_CATS = ['主菜', '副菜', '汁物', '丼', 'デザート', '10分レシピ', 'ダイエット', 'お弁当', '作り置き'];
const SAMPLES = [{
  name: '鶏むねのレンジ蒸し ねぎ塩だれ',
  kcal: 290,
  categories: ['主菜', 'ダイエット', '10分レシピ'],
  instaUrl: '',
  ingredients: I('鶏むね肉:1枚(300g)|長ねぎ:1/2本|ごま油:大さじ1|鶏がらスープの素:小さじ1|塩こしょう:少々|酒:大さじ1'),
  steps: ['鶏むね肉にフォークで穴をあけ、酒をふる。', 'ラップをして600Wで3分、裏返して2分加熱し、そのまま5分おく。', '刻んだ長ねぎとごま油、鶏がらスープの素を混ぜてかける。']
}, {
  name: 'ツナとキャベツの塩昆布和え',
  kcal: 120,
  categories: ['副菜', '10分レシピ', '作り置き'],
  instaUrl: '',
  ingredients: I('キャベツ:1/4個|ツナ缶:1缶|塩昆布:大さじ2|ごま油:小さじ2'),
  steps: ['キャベツをざく切りにして塩もみし、水気を絞る。', 'ツナ、塩昆布、ごま油で和える。']
}, {
  name: '豚こまとじゃがいものカレー炒め',
  kcal: 410,
  categories: ['主菜', 'お弁当'],
  instaUrl: '',
  ingredients: I('豚こま切れ肉:200g|じゃがいも:2個|玉ねぎ:1/2個|カレー粉:小さじ2|しょうゆ:小さじ2|オリーブオイル:大さじ1'),
  steps: ['じゃがいもは細切りにして水にさらす。', '豚肉を炒め、じゃがいもと玉ねぎを加えて炒める。', 'カレー粉としょうゆで味をつける。']
}].map((s, i) => ({
  ...s,
  id: uid(),
  photo: '',
  sample: true,
  fav: i === 0,
  createdAt: Date.now() - i
}));
const DAYS = ['月', '火', '水', '木', '金', '土', '日'];
const ANY = 'なんでも';
const SLOT_PRESETS = [{
  label: '主菜だけ',
  slots: ['主菜']
}, {
  label: '主菜＋副菜',
  slots: ['主菜', '副菜']
}, {
  label: '主菜＋副菜＋汁物',
  slots: ['主菜', '副菜', '汁物']
}, {
  label: '丼＋汁物',
  slots: ['丼', '汁物']
}, {
  label: '丼＋汁物＋デザート',
  slots: ['丼', '汁物', 'デザート']
}];
const shuffle = a => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
const startOfDay = d => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x.getTime();
};
function thisMonday() {
  const d = new Date();
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  return startOfDay(d);
}
function nextMonday() {
  return thisMonday() + 7 * 864e5;
}
const dateKey = t => {
  const d = new Date(t);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const planDayIndex = (plan, t) => {
  if (!plan || !plan.weekStart) return -1;
  const i = Math.round((startOfDay(t) - startOfDay(plan.weekStart)) / 864e5);
  return i >= 0 && i < 7 ? i : -1;
};
const inSlot = (r, slot) => !slot || slot === ANY || (r.categories || []).includes(slot);
function scoreRecipe(r, fridge) {
  const ings = (r.ingredients || []).filter(i => i.name && !isPantry(i.name));
  const hit = ings.filter(i => fridge.some(f => matchIng(i.name, f)));
  return {
    hit: hit.length,
    total: ings.length,
    score: (ings.length ? hit.length / ings.length + hit.length * .15 : 0) + (r.fav && hit.length ? .2 : 0)
  };
}
function normDay(d) {
  if (!d || d.off) return {
    off: true
  };
  if (Array.isArray(d.items)) return d;
  if (d.id) return {
    items: [{
      slot: null,
      source: d.source,
      id: d.id,
      hit: d.hit,
      total: d.total
    }]
  };
  return {
    off: true
  };
}
const findRecipe = (it, recipes) => !it || it.empty || it.off ? null : it.source === 'mine' ? recipes.find(x => x.id === it.id) : GENERIC.find(x => x.id === it.id);
const dayItems = (d, recipes) => {
  const n = normDay(d);
  return n.off ? [] : n.items.map(it => ({
    it,
    r: findRecipe(it, recipes)
  }));
};
function pickForSlot(slot, n, {
  recipes,
  mode,
  fridge,
  favBoost
}, used) {
  const mine = recipes.filter(r => inSlot(r, slot)).map(r => ({
      source: 'mine',
      r
    })),
    gen = GENERIC.filter(r => inSlot(r, slot)).map(r => ({
      source: 'generic',
      r
    }));
  const out = [];
  const take = x => {
    out.push({
      slot,
      source: x.source,
      id: x.r.id,
      ...(x.s ? {
        hit: x.s.hit,
        total: x.s.total
      } : {})
    });
    used.add(x.r.id);
  };
  if (mode === 'fridge') {
    const sc = [...mine, ...gen].map(x => ({
      ...x,
      s: scoreRecipe(x.r, fridge)
    })).filter(x => x.s.hit > 0).sort((a, b) => b.s.score + (b.source === 'mine' ? .05 : 0) - (a.s.score + (a.source === 'mine' ? .05 : 0)));
    for (const x of sc) {
      if (out.length >= n) break;
      if (!used.has(x.r.id)) take(x);
    }
  }
  const ordered = shuffle(mine).sort((a, b) => favBoost ? (b.r.fav ? 1 : 0) - (a.r.fav ? 1 : 0) : 0);
  for (const x of [...ordered.filter(x => favBoost ? x.r.fav : false), ...ordered.filter(x => !(favBoost && x.r.fav)), ...shuffle(gen)]) {
    if (out.length >= n) break;
    if (!used.has(x.r.id)) take(mode === 'fridge' ? {
      ...x,
      s: scoreRecipe(x.r, fridge)
    } : x);
  }
  const pool = [...mine, ...gen];
  let k = 0;
  while (out.length < n) {
    if (!pool.length) {
      out.push({
        slot,
        empty: true
      });
      continue;
    }
    const x = pool[k % pool.length];
    k++;
    out.push({
      slot,
      source: x.source,
      id: x.r.id
    });
  }
  return out;
}
function planWeek(opts) {
  const off = opts.off || [];
  const slots = opts.slots && opts.slots.length ? opts.slots : ['主菜'];
  const cook = [0, 1, 2, 3, 4, 5, 6].filter(i => !off.includes(i));
  const n = cook.length;
  const used = new Set();
  const cols = slots.map(s => pickForSlot(s, n, opts, used));
  let dayList = Array.from({
    length: n
  }, (_, k) => ({
    items: cols.map(c => c[k])
  }));
  if (opts.mode === 'fridge') dayList.sort((a, b) => b.items.reduce((s, i) => s + (i.hit || 0), 0) - a.items.reduce((s, i) => s + (i.hit || 0), 0));
  const days = [];
  let k = 0;
  for (let i = 0; i < 7; i++) days.push(off.includes(i) ? {
    off: true
  } : dayList[k++] || {
    off: true
  });
  return days;
}
function autoPick(plan, recipes, slot, excludeIds) {
  const used = new Set(excludeIds);
  const fridge = plan.fridge || [];
  const all = [...recipes.map(r => ({
    source: 'mine',
    r
  })), ...GENERIC.map(r => ({
    source: 'generic',
    r
  }))].filter(x => inSlot(x.r, slot) && !used.has(x.r.id));
  if (!all.length) return null;
  let cands;
  if (plan.mode === 'fridge') cands = all.map(x => ({
    ...x,
    s: scoreRecipe(x.r, fridge)
  })).sort((a, b) => b.s.score - a.s.score + (Math.random() - .5) * .3).slice(0, 5);else {
    const mine = all.filter(x => x.source === 'mine');
    const favs = mine.filter(x => x.r.fav);
    cands = favs.length && Math.random() < .5 ? favs : mine.length ? mine : all;
  }
  const c = cands[Math.floor(Math.random() * cands.length)];
  return {
    slot,
    source: c.source,
    id: c.r.id,
    ...(c.s ? {
      hit: c.s.hit,
      total: c.s.total
    } : {})
  };
}
function buildShopping(plan, recipes, prevItems) {
  const byName = new Map();
  const fridge = plan.mode === 'fridge' ? plan.fridge || [] : [];
  (plan.days || []).forEach((d, idx) => {
    for (const {
      r
    } of dayItems(d, recipes)) {
      if (!r) continue;
      for (const i of r.ingredients || []) {
        if (!i.name) continue;
        if (fridge.some(f => matchIng(i.name, f))) continue;
        const key = canon(i.name);
        if (!byName.has(key)) byName.set(key, {
          name: i.name.replace(/[（(][^）)]*[）)]/g, '').trim() || i.name,
          amounts: [],
          from: new Set(),
          pantry: isPantry(i.name)
        });
        const e = byName.get(key);
        e.amounts.push(i.amount);
        e.from.add(DAYS[idx]);
      }
    }
  });
  const prevChecked = new Map((prevItems || []).filter(i => !i.manual).map(i => [canon(i.name), i.checked]));
  const items = [...byName.entries()].map(([k, e]) => ({
    id: uid(),
    name: e.name,
    amount: mergeAmounts(e.amounts),
    from: [...e.from].join('・'),
    group: e.pantry ? 'pantry' : 'food',
    checked: prevChecked.get(k) || false
  }));
  items.sort((a, b) => a.group === b.group ? 0 : a.group === 'food' ? -1 : 1);
  return [...items, ...(prevItems || []).filter(i => i.manual)];
}
function menuText(d, recipes) {
  return dayItems(d, recipes).filter(x => x.r).map(({
    it,
    r
  }) => `・${it.slot && it.slot !== ANY ? it.slot + '：' : ''}${r.name}`).join('\n');
}
function Chip({
  active,
  children,
  onClick,
  small
}) {
  return React.createElement("button", {
    type: "button",
    onClick: onClick,
    className: `shrink-0 rounded-full border ${small ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1.5 text-sm'} font-medium transition-colors ${active ? 'bg-primary text-pink border-primary' : 'bg-surface text-ink border-line hover:border-primary/60'}`
  }, children);
}
function Sheet({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, React.createElement("div", {
    className: "absolute inset-0 bg-ink/40",
    onClick: onClose
  }), React.createElement("div", {
    className: "sheet-enter relative w-full max-w-md max-h-[92%] flex flex-col bg-bg rounded-t-3xl sm:rounded-3xl shadow-2xl",
    style: {
      paddingBottom: 'env(safe-area-inset-bottom,0px)'
    }
  }, React.createElement("div", {
    className: "gutter flex items-center justify-between pt-4 pb-2"
  }, React.createElement("h2", {
    className: "font-display text-lg font-bold"
  }, title), React.createElement("button", {
    onClick: onClose,
    className: "p-2 -mr-2 rounded-full hover:bg-sunk",
    "aria-label": "\u9589\u3058\u308B"
  }, React.createElement(Icon, {
    name: "X",
    size: 20
  }))), React.createElement("div", {
    className: "gutter overflow-y-auto pb-4 min-h-0"
  }, children), footer && React.createElement("div", {
    className: "gutter py-3 border-t border-line bg-surface rounded-b-none sm:rounded-b-3xl"
  }, footer)));
}
function Confirm({
  state,
  onCancel
}) {
  if (!state) return null;
  return React.createElement(Sheet, {
    open: true,
    title: state.title,
    onClose: onCancel,
    footer: React.createElement("div", {
      className: "flex gap-2"
    }, React.createElement("button", {
      className: "flex-1 py-3 rounded-xl border border-line bg-surface font-medium",
      onClick: onCancel
    }, "\u3084\u3081\u308B"), React.createElement("button", {
      className: "flex-1 py-3 rounded-xl bg-danger text-pink font-bold",
      onClick: () => {
        state.onOk();
        onCancel();
      }
    }, state.ok || '削除する'))
  }, React.createElement("p", {
    className: "text-muted"
  }, state.body));
}
function Photo({
  r,
  className = '',
  showTag = false
}) {
  const src = r ? r.photo || dishIllustration(r) : '';
  return React.createElement("div", {
    className: `relative overflow-hidden ${className}`
  }, src ? React.createElement("img", {
    src: src,
    alt: r && r.name ? `${r.name}の${r.photo ? '写真' : 'イラスト'}` : '',
    className: "absolute inset-0 w-full h-full object-cover"
  }) : React.createElement("div", {
    className: "photo-ph absolute inset-0 flex items-center justify-center text-muted"
  }, React.createElement(Icon, {
    name: "ChefHat",
    size: 24,
    strokeWidth: 1.5
  })), showTag && r && !r.photo && React.createElement("span", {
    className: "absolute bottom-2 right-2 rounded-full bg-surface/90 text-muted px-2 py-0.5 text-[10px] font-bold"
  }, "\u30A4\u30E9\u30B9\u30C8"));
}
function FavButton({
  on,
  onClick,
  className = '',
  size = 18
}) {
  return React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    "aria-pressed": !!on,
    "aria-label": on ? 'お気に入りから外す' : 'お気に入りに追加',
    className: `rounded-full flex items-center justify-center transition-colors ${on ? 'text-danger' : 'text-muted hover:text-danger'} ${className}`
  }, React.createElement(Icon, {
    name: "Heart",
    size: size,
    fill: on ? 'currentColor' : 'none'
  }));
}
const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-pink font-bold px-4 py-3 active:scale-[.98] transition-transform disabled:opacity-50';
const btnGhost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface text-ink font-medium px-4 py-2.5 hover:border-primary/60';
const field = 'w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary';
function RecipeList({
  recipes,
  categories,
  onOpen,
  goNew,
  onFav
}) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const filtered = useMemo(() => {
    const nq = canon(q);
    return recipes.filter(r => (!cat || (cat === '__fav' ? r.fav : (r.categories || []).includes(cat))) && (!nq || canon(r.name).includes(nq) || (r.ingredients || []).some(i => canon(i.name).includes(nq)))).sort((a, b) => (b.fav ? 1 : 0) - (a.fav ? 1 : 0) || (b.createdAt || 0) - (a.createdAt || 0));
  }, [recipes, q, cat]);
  const counts = useMemo(() => {
    const m = {};
    recipes.forEach(r => (r.categories || []).forEach(c => m[c] = (m[c] || 0) + 1));
    return m;
  }, [recipes]);
  const favN = recipes.filter(r => r.fav).length;
  return React.createElement("div", {
    className: "flex flex-col gap-4"
  }, React.createElement("label", {
    className: "relative block"
  }, React.createElement("span", {
    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
  }, React.createElement(Icon, {
    name: "Search",
    size: 18
  })), React.createElement("input", {
    id: "search",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u6599\u7406\u540D\u30FB\u6750\u6599\u3067\u63A2\u3059\uFF08\u4F8B\uFF1A\u9D8F\u3080\u306D\uFF09",
    className: field + ' pl-10'
  })), React.createElement("div", {
    className: "scrollx -mx-4 px-4 flex gap-2"
  }, React.createElement(Chip, {
    active: !cat,
    onClick: () => setCat('')
  }, "\u3059\u3079\u3066 ", React.createElement("span", {
    className: "tnum opacity-70"
  }, recipes.length)), React.createElement(Chip, {
    active: cat === '__fav',
    onClick: () => setCat(cat === '__fav' ? '' : '__fav')
  }, React.createElement(Icon, {
    name: "Heart",
    size: 13,
    fill: "currentColor",
    className: "inline -mt-0.5 mr-1"
  }), "\u304A\u6C17\u306B\u5165\u308A ", React.createElement("span", {
    className: "tnum opacity-70"
  }, favN)), categories.map(c => React.createElement(Chip, {
    key: c,
    active: cat === c,
    onClick: () => setCat(cat === c ? '' : c)
  }, c, " ", React.createElement("span", {
    className: "tnum opacity-70"
  }, counts[c] || 0)))), filtered.length === 0 ? React.createElement("div", {
    className: "stamp rounded-2xl p-8 text-center text-muted flex flex-col items-center gap-3"
  }, React.createElement(Icon, {
    name: cat === '__fav' ? 'Heart' : 'BookOpen',
    size: 32,
    strokeWidth: 1.5
  }), React.createElement("p", null, cat === '__fav' ? 'お気に入りはまだありません。レシピの♡をタップすると追加されます。' : recipes.length ? '条件に合うレシピがありません。' : 'まだレシピがありません。最初の1品を登録しましょう。'), !recipes.length && React.createElement("button", {
    className: btnPrimary,
    onClick: goNew
  }, React.createElement(Icon, {
    name: "Plus"
  }), "\u30EC\u30B7\u30D4\u3092\u767B\u9332")) : React.createElement("ul", {
    className: "grid grid-cols-2 gap-3"
  }, filtered.map(r => React.createElement("li", {
    key: r.id,
    className: "relative"
  }, React.createElement("button", {
    onClick: () => onOpen(r),
    className: "ticket w-full text-left rounded-2xl overflow-hidden flex flex-col h-full hover:border-primary/60 transition-colors"
  }, React.createElement("div", {
    className: "relative"
  }, React.createElement(Photo, {
    r: r,
    className: "w-full aspect-[4/3]"
  }), r.kcal ? React.createElement("span", {
    className: "absolute bottom-2 left-2 rounded-full bg-surface/95 px-2 py-0.5 text-xs font-bold tnum flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "Flame",
    size: 12,
    className: "text-honey"
  }), r.kcal, React.createElement("span", {
    className: "font-normal"
  }, "kcal")) : null, r.sample && React.createElement("span", {
    className: "absolute top-2 left-2 rounded-full bg-honey text-pink px-2 py-0.5 text-[10px] font-bold label"
  }, "\u898B\u672C"), r.instaUrl && React.createElement("span", {
    className: "absolute bottom-2 right-2 rounded-full bg-surface/95 p-1"
  }, React.createElement(Icon, {
    name: "Instagram",
    size: 13
  }))), React.createElement("div", {
    className: "p-3 flex flex-col gap-1.5 min-w-0 flex-1"
  }, React.createElement("h3", {
    className: "font-display font-bold leading-snug text-[15px] line-clamp-2"
  }, r.name), React.createElement("div", {
    className: "flex flex-wrap gap-1 mt-auto"
  }, (r.categories || []).slice(0, 2).map(c => React.createElement("span", {
    key: c,
    className: "text-[11px] text-muted bg-sunk rounded px-1.5"
  }, c))))), React.createElement(FavButton, {
    on: r.fav,
    onClick: () => onFav(r),
    className: "absolute top-2 right-2 w-8 h-8 bg-surface/95 shadow-sm",
    size: 16
  })))));
}
function RecipeDetail({
  recipe,
  onClose,
  onEdit,
  onDelete,
  onSaveGeneric,
  onFav,
  onSend
}) {
  if (!recipe) return null;
  const r = recipe;
  return React.createElement(Sheet, {
    open: true,
    title: r.generic ? '定番レシピ' : 'レシピ',
    onClose: onClose,
    footer: r.generic ? React.createElement("button", {
      className: btnPrimary + ' w-full',
      onClick: () => onSaveGeneric(r)
    }, React.createElement(Icon, {
      name: "BookmarkPlus"
    }), "\u30DE\u30A4\u30EC\u30B7\u30D4\u306B\u4FDD\u5B58") : React.createElement("div", {
      className: "flex gap-2"
    }, React.createElement("button", {
      className: btnGhost + ' px-3',
      onClick: () => onDelete(r),
      "aria-label": "\u524A\u9664"
    }, React.createElement(Icon, {
      name: "Trash2",
      size: 18
    })), React.createElement("button", {
      className: btnGhost + ' flex-1',
      onClick: () => onSend(r)
    }, React.createElement(Icon, {
      name: "Send",
      size: 16
    }), "\u9001\u308B"), React.createElement("button", {
      className: btnPrimary + ' flex-[1.4]',
      onClick: () => onEdit(r)
    }, React.createElement(Icon, {
      name: "Pencil",
      size: 16
    }), "\u7DE8\u96C6\u3059\u308B"))
  }, React.createElement("div", {
    className: "flex flex-col gap-4"
  }, React.createElement(Photo, {
    r: r,
    className: "w-full aspect-[16/10] rounded-2xl",
    showTag: true
  }), React.createElement("div", null, React.createElement("div", {
    className: "flex items-start justify-between gap-3"
  }, React.createElement("h3", {
    className: "font-display text-2xl font-bold leading-tight min-w-0"
  }, r.name), !r.generic && React.createElement(FavButton, {
    on: r.fav,
    onClick: () => onFav(r),
    className: "w-10 h-10 border border-line bg-surface shrink-0",
    size: 20
  })), React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 mt-2"
  }, r.kcal ? React.createElement("span", {
    className: "inline-flex items-center gap-1 rounded-full bg-honey/15 text-ink px-2.5 py-0.5 text-sm font-bold tnum"
  }, React.createElement(Icon, {
    name: "Flame",
    size: 14,
    className: "text-honey"
  }), r.kcal, " kcal", React.createElement("span", {
    className: "font-normal text-muted text-xs"
  }, "/", basisOf(r), " \u76EE\u5B89")) : null, (r.categories || []).map(c => React.createElement("span", {
    key: c,
    className: "text-xs bg-sunk rounded-full px-2 py-0.5"
  }, c)))), r.instaUrl && React.createElement("a", {
    href: r.instaUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: btnGhost + ' justify-between'
  }, React.createElement("span", {
    className: "flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Instagram"
  }), "Instagram\u306E\u6295\u7A3F\u3092\u958B\u304F"), React.createElement(Icon, {
    name: "ExternalLink",
    size: 16
  })), React.createElement("section", null, React.createElement("h4", {
    className: "font-display font-bold mb-2 flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "ShoppingBasket",
    size: 18,
    className: "text-primary"
  }), "\u6750\u6599"), React.createElement("ul", {
    className: "ticket rounded-2xl divide-y divide-line/70"
  }, (r.ingredients || []).map((i, k) => React.createElement("li", {
    key: k,
    className: "flex justify-between gap-3 px-4 py-2"
  }, React.createElement("span", {
    className: "min-w-0"
  }, i.name), React.createElement("span", {
    className: "text-muted tnum shrink-0"
  }, i.amount))), !(r.ingredients || []).length && React.createElement("li", {
    className: "px-4 py-3 text-muted"
  }, "\u672A\u767B\u9332"))), React.createElement("section", null, React.createElement("h4", {
    className: "font-display font-bold mb-2 flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "CookingPot",
    size: 18,
    className: "text-primary"
  }), "\u4F5C\u308A\u65B9"), React.createElement("ol", {
    className: "flex flex-col gap-2"
  }, (r.steps || []).map((s, k) => React.createElement("li", {
    key: k,
    className: "flex gap-3"
  }, React.createElement("span", {
    className: "shrink-0 w-7 h-7 rounded-full bg-primary text-pink text-sm font-bold flex items-center justify-center tnum"
  }, k + 1), React.createElement("p", {
    className: "pt-0.5 min-w-0"
  }, s))), !(r.steps || []).length && React.createElement("li", {
    className: "text-muted"
  }, "\u672A\u767B\u9332"))), r.memo && React.createElement("section", {
    className: "rounded-2xl bg-honey/15 border border-honey/40 p-4"
  }, React.createElement("h4", {
    className: "font-display font-bold mb-1.5 flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Lightbulb",
    size: 18,
    className: "text-honey"
  }), "\u30DD\u30A4\u30F3\u30C8\u30FB\u30E1\u30E2"), React.createElement("p", {
    className: "whitespace-pre-line text-[15px] leading-relaxed"
  }, r.memo))));
}
function useDragSort(move) {
  const rows = useRef([]);
  const cur = useRef(null);
  const [active, setActive] = useState(null);
  const end = () => {
    cur.current = null;
    setActive(null);
  };
  const handle = i => ({
    style: {
      touchAction: 'none'
    },
    onPointerDown: e => {
      if (e.button) return;
      e.preventDefault();
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (_) {}
      cur.current = i;
      setActive(i);
    },
    onPointerMove: e => {
      if (cur.current == null) return;
      const y = e.clientY;
      let t = cur.current;
      rows.current.forEach((el, j) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (y >= r.top && y <= r.bottom) t = j;
      });
      if (t !== cur.current) {
        move(cur.current, t);
        cur.current = t;
        setActive(t);
      }
    },
    onPointerUp: end,
    onPointerCancel: end,
    onLostPointerCapture: end,
    onKeyDown: e => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        move(i, i - 1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        move(i, i + 1);
      }
    }
  });
  const rowRef = i => el => {
    rows.current[i] = el;
  };
  return {
    handle,
    rowRef,
    active
  };
}
const moveIn = (arr, from, to) => {
  if (to < 0 || to >= arr.length || from === to) return arr;
  const a = [...arr];
  const [x] = a.splice(from, 1);
  a.splice(to, 0, x);
  return a;
};
const KCAL_BASES = ['1人分', '2人分', '3人分', '4人分', '1個あたり', '1切れあたり', '100gあたり', '全量'];
const basisOf = r => r && r.kcalBasis || '1人分';
const emptyForm = () => ({
  id: null,
  name: '',
  photo: '',
  instaUrl: '',
  ingredients: [{
    name: '',
    amount: ''
  }, {
    name: '',
    amount: ''
  }, {
    name: '',
    amount: ''
  }],
  steps: [''],
  kcal: '',
  kcalBasis: '1人分',
  kcalEstimated: false,
  categories: [],
  memo: ''
});
function RecipeForm({
  initial,
  categories,
  onAddCategory,
  onSave,
  onCancel,
  toast
}) {
  const [f, setF] = useState(initial || emptyForm());
  const [caption, setCaption] = useState('');
  const [ocr, setOcr] = useState(null);
  const shotRef = useRef();
  const [newCat, setNewCat] = useState('');
  const [busy, setBusy] = useState(false);
  const fileRef = useRef();
  useEffect(() => {
    setF(initial || emptyForm());
    setCaption('');
  }, [initial]);
  const set = (k, v) => setF(p => ({
    ...p,
    [k]: v
  }));
  const setIng = (i, k, v) => setF(p => {
    const a = [...p.ingredients];
    a[i] = {
      ...a[i],
      [k]: v
    };
    return {
      ...p,
      ingredients: a
    };
  });
  const setStep = (i, v) => setF(p => {
    const a = [...p.steps];
    a[i] = v;
    return {
      ...p,
      steps: a
    };
  });
  const ingSort = useDragSort((a, b) => setF(p => ({
    ...p,
    ingredients: moveIn(p.ingredients, a, b)
  })));
  const stepSort = useDragSort((a, b) => setF(p => ({
    ...p,
    steps: moveIn(p.steps, a, b)
  })));
  async function onPhoto(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      setBusy(true);
      set('photo', await compressImage(file));
    } catch (err) {
      toast('画像を読み込めませんでした。別の画像を選んでください。');
    } finally {
      setBusy(false);
      e.target.value = '';
    }
  }
  async function onShots(e) {
    const files = [...(e.target.files || [])];
    e.target.value = '';
    if (!files.length) return;
    setOcr({
      i: 1,
      n: files.length,
      p: 0,
      stage: '準備中'
    });
    try {
      const text = await ocrImages(files, (i, p, stage) => setOcr({
        i,
        n: files.length,
        p,
        stage
      }));
      if (!text.trim()) toast('文字を読み取れませんでした。キャプション部分を大きく写したスクショで試してください');else {
        setCaption(c => (c.trim() ? c.trim() + '\n' : '') + text);
        toast('読み取りました。おかしな行を直してから「自動入力」を押してください');
      }
    } catch (err) {
      console.error(err);
      toast(navigator.onLine ? '読み取りに失敗しました。もう一度お試しください' : '読み取りの準備には、最初の1回だけインターネット接続が必要です');
    } finally {
      setOcr(null);
    }
  }
  async function autofill() {
    if (!caption.trim()) {
      toast('投稿文を貼り付けてから押してください。');
      return;
    }
    const rc = recipeCodeIn(caption);
    if (rc) {
      const r = await unpackRecipe(rc);
      if (r) {
        r.categories.forEach(c => onAddCategory(c));
        setF(prev => ({
          ...prev,
          name: r.name,
          instaUrl: r.instaUrl,
          ingredients: r.ingredients.length ? r.ingredients : prev.ingredients,
          steps: r.steps.length ? r.steps : prev.steps,
          kcal: r.kcal ? String(r.kcal) : '',
          kcalBasis: basisOf(r),
          kcalEstimated: false,
          memo: r.memo || prev.memo || '',
          categories: [...new Set([...prev.categories, ...r.categories])]
        }));
        setCaption('');
        toast('送られてきたレシピを入力しました。写真を足して保存してください');
        return;
      }
    }
    const p = parseCaption(caption, categories);
    setF(prev => ({
      ...prev,
      name: prev.name || p.name,
      instaUrl: prev.instaUrl || p.url,
      ingredients: p.ingredients.length ? p.ingredients : prev.ingredients,
      steps: p.steps.length ? p.steps : prev.steps,
      kcal: p.kcal != null ? String(p.kcal) : prev.kcal,
      kcalBasis: p.kcal != null ? p.kcalEstimated ? '1人分' : p.kcalBasis : prev.kcalBasis,
      kcalEstimated: p.kcal != null ? p.kcalEstimated : prev.kcalEstimated,
      memo: (prev.memo || '').trim() ? prev.memo : p.memo,
      categories: [...new Set([...prev.categories, ...p.cats])]
    }));
    toast(`材料${p.ingredients.length}件・手順${p.steps.length}件を入力しました${p.kcal != null ? p.kcalEstimated ? '（カロリーは材料から推定）' : '' : ''}`);
  }
  function estimate() {
    const ings = f.ingredients.filter(i => i.name.trim());
    const e = estimateKcal(ings, 2);
    if (e) {
      set('kcal', String(e));
      set('kcalBasis', '1人分');
      set('kcalEstimated', true);
      toast('材料（2人分想定）から1人分を推定しました');
    } else toast('推定できる材料が見つかりませんでした');
  }
  const [bulk, setBulk] = useState({
    ing: false,
    step: false
  });
  const [bulkText, setBulkText] = useState({
    ing: '',
    step: ''
  });
  function applyIng(text) {
    const list = parseIngText(text);
    if (!list.length) {
      toast('材料を読み取れませんでした');
      return false;
    }
    setF(p => {
      const keep = p.ingredients.filter(i => i.name.trim() || i.amount.trim());
      return {
        ...p,
        ingredients: [...keep, ...list]
      };
    });
    toast(`材料を${list.length}件入れました`);
    return true;
  }
  function applySteps(text) {
    const list = parseStepsText(text);
    if (!list.length) {
      toast('作り方を読み取れませんでした');
      return false;
    }
    setF(p => {
      const keep = p.steps.filter(x => x.trim());
      return {
        ...p,
        steps: [...keep, ...list]
      };
    });
    toast(`手順を${list.length}件に分けて入れました`);
    return true;
  }
  function onPasteIng(e, k) {
    const t = e.clipboardData && e.clipboardData.getData('text');
    if (!t || !/\n/.test(t.trim())) return;
    e.preventDefault();
    const list = parseIngText(t);
    if (!list.length) return;
    setF(p => {
      const a = [...p.ingredients];
      a.splice(k, 1, ...list);
      return {
        ...p,
        ingredients: a.filter((i, x) => i.name.trim() || i.amount.trim() || x >= a.length - 1)
      };
    });
    toast(`材料を${list.length}件に分けて入れました`);
  }
  function onPasteStep(e, k) {
    const t = e.clipboardData && e.clipboardData.getData('text');
    if (!t || !/\n|[①-⑳]/.test(t.trim())) return;
    const list = parseStepsText(t);
    if (list.length < 2) return;
    e.preventDefault();
    setF(p => {
      const a = [...p.steps];
      a.splice(k, 1, ...list);
      return {
        ...p,
        steps: a
      };
    });
    toast(`手順を${list.length}件に分けて入れました`);
  }
  function toggleCat(c) {
    set('categories', f.categories.includes(c) ? f.categories.filter(x => x !== c) : [...f.categories, c]);
  }
  function addCat() {
    const c = newCat.trim();
    if (!c) return;
    onAddCategory(c);
    if (!f.categories.includes(c)) set('categories', [...f.categories, c]);
    setNewCat('');
  }
  function submit(e) {
    e.preventDefault();
    if (!f.name.trim()) {
      toast('料理名を入れてください');
      return;
    }
    onSave({
      ...f,
      memo: (f.memo || '').trim(),
      kcalBasis: (f.kcalBasis || '').trim() || '1人分',
      name: f.name.trim(),
      kcal: f.kcal ? Math.round(+z2h(String(f.kcal)).replace(/[^\d.]/g, '') || 0) || null : null,
      ingredients: f.ingredients.filter(i => i.name.trim()).map(i => ({
        name: i.name.trim(),
        amount: i.amount.trim()
      })),
      steps: f.steps.map(s => s.trim()).filter(Boolean)
    });
  }
  return React.createElement("form", {
    onSubmit: submit,
    className: "flex flex-col gap-5"
  }, React.createElement("section", {
    className: "rounded-2xl border border-honey/50 bg-honey/10 p-4 flex flex-col gap-3"
  }, React.createElement("div", {
    className: "flex items-center gap-2 font-display font-bold"
  }, React.createElement(Icon, {
    name: "Sparkles",
    size: 18,
    className: "text-honey"
  }), "\u30A4\u30F3\u30B9\u30BF\u6295\u7A3F\u304B\u3089\u81EA\u52D5\u5165\u529B"), React.createElement("button", {
    type: "button",
    disabled: !!ocr,
    onClick: () => shotRef.current && shotRef.current.click(),
    className: btnGhost + ' w-full justify-center disabled:opacity-60'
  }, React.createElement(Icon, {
    name: "ScanText",
    size: 18
  }), "\u30B9\u30AF\u30B7\u30E7\u304B\u3089\u8AAD\u307F\u53D6\u308B"), React.createElement("input", {
    ref: shotRef,
    id: "shots",
    type: "file",
    accept: "image/*",
    multiple: true,
    className: "hidden",
    onChange: onShots
  }), ocr ? React.createElement("div", {
    className: "rounded-xl bg-surface border border-line p-3 flex flex-col gap-2",
    role: "status",
    "aria-live": "polite"
  }, React.createElement("p", {
    className: "text-sm flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Loader",
    size: 16,
    className: "animate-spin"
  }), ocr.n > 1 ? `${ocr.i}/${ocr.n}枚目を` : '', ocr.stage, "\u2026 ", React.createElement("span", {
    className: "tnum text-muted"
  }, ocr.p, "%")), React.createElement("div", {
    className: "h-1.5 rounded-full bg-sunk overflow-hidden"
  }, React.createElement("div", {
    className: "h-full bg-honey transition-all",
    style: {
      width: `${ocr.p}%`
    }
  })), ocr.stage === '準備中' && React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u521D\u56DE\u306F\u8AAD\u307F\u53D6\u308A\u7528\u30C7\u30FC\u30BF\uFF08\u7D0410MB\uFF09\u3092\u6E96\u5099\u3059\u308B\u305F\u3081\u3001\u5C11\u3057\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002")) : React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u30A4\u30F3\u30B9\u30BF\u306E\u30AD\u30E3\u30D7\u30B7\u30E7\u30F3\u3092\u300C\u7D9A\u304D\u3092\u8AAD\u3080\u300D\u3067\u5168\u90E8\u8868\u793A\u3057\u3066\u30B9\u30AF\u30B7\u30E7\u3002\u9577\u3044\u5834\u5408\u306F\u8907\u6570\u679A\u307E\u3068\u3081\u3066\u9078\u3079\u307E\u3059\u3002\u753B\u50CF\u306F\u3053\u306E\u30B9\u30DE\u30DB\u306E\u4E2D\u3060\u3051\u3067\u51E6\u7406\u3055\u308C\u307E\u3059\u3002"), React.createElement("textarea", {
    id: "caption",
    rows: 4,
    value: caption,
    onChange: e => setCaption(e.target.value),
    className: field + ' text-sm',
    placeholder: '投稿のキャプションをまるごと貼り付け\n（送られてきたレシピのリンクもここに貼れます）\n例）【材料】鶏むね肉 1枚 / 塩 少々…【作り方】①…'
  }), React.createElement("button", {
    type: "button",
    onClick: autofill,
    disabled: !!ocr,
    className: btnPrimary
  }, React.createElement(Icon, {
    name: "Wand2",
    size: 18
  }), "\u81EA\u52D5\u5165\u529B")), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("label", {
    htmlFor: "name",
    className: "text-sm font-bold"
  }, "\u6599\u7406\u540D"), React.createElement("input", {
    id: "name",
    value: f.name,
    onChange: e => set('name', e.target.value),
    className: field,
    placeholder: "\u4F8B\uFF1A\u9D8F\u3080\u306D\u306E\u306D\u304E\u5869\u30EC\u30F3\u30B8\u84B8\u3057"
  })), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u5199\u771F"), React.createElement("button", {
    type: "button",
    onClick: () => fileRef.current && fileRef.current.click(),
    className: "relative rounded-2xl overflow-hidden stamp"
  }, f.photo ? React.createElement("img", {
    src: f.photo,
    alt: "\u30D7\u30EC\u30D3\u30E5\u30FC",
    className: "w-full aspect-[16/10] object-cover"
  }) : React.createElement("div", {
    className: "aspect-[16/10] flex flex-col items-center justify-center gap-2 text-muted"
  }, React.createElement(Icon, {
    name: "Camera",
    size: 30,
    strokeWidth: 1.5
  }), React.createElement("span", {
    className: "text-sm"
  }, busy ? '読み込み中…' : 'タップして写真を選ぶ'))), f.photo && React.createElement("button", {
    type: "button",
    className: "self-end text-sm text-danger",
    onClick: () => set('photo', '')
  }, "\u5199\u771F\u3092\u5916\u3059"), React.createElement("input", {
    ref: fileRef,
    id: "photo",
    type: "file",
    accept: "image/*",
    className: "hidden",
    onChange: onPhoto
  })), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("label", {
    htmlFor: "insta",
    className: "text-sm font-bold flex items-center gap-1.5"
  }, React.createElement(Icon, {
    name: "Instagram",
    size: 16
  }), "Instagram\u306EURL"), React.createElement("input", {
    id: "insta",
    type: "url",
    inputMode: "url",
    value: f.instaUrl,
    onChange: e => set('instaUrl', e.target.value),
    className: field,
    placeholder: "https://www.instagram.com/p/..."
  })), React.createElement("div", {
    className: "flex flex-col gap-2"
  }, React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u6750\u6599"), React.createElement("button", {
    type: "button",
    onClick: () => setBulk(b => ({
      ...b,
      ing: !b.ing
    })),
    className: "text-xs font-bold text-primary flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "ClipboardPaste",
    size: 14
  }), "\u307E\u3068\u3081\u3066\u8CBC\u308A\u4ED8\u3051")), bulk.ing && React.createElement("div", {
    className: "rounded-xl bg-sunk p-3 flex flex-col gap-2"
  }, React.createElement("textarea", {
    id: "bulk-ing",
    rows: 5,
    value: bulkText.ing,
    onChange: e => setBulkText(b => ({
      ...b,
      ing: e.target.value
    })),
    className: field + ' text-sm',
    placeholder: '材料を何行でも貼り付け\n例）\n鶏むね肉 1枚\n長ねぎ…1/2本\n・ごま油 大さじ1'
  }), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("button", {
    type: "button",
    className: btnGhost + ' flex-1 text-sm',
    onClick: () => setBulk(b => ({
      ...b,
      ing: false
    }))
  }, "\u9589\u3058\u308B"), React.createElement("button", {
    type: "button",
    className: btnPrimary + ' flex-[2] text-sm py-2.5',
    onClick: () => {
      if (applyIng(bulkText.ing)) {
        setBulkText(b => ({
          ...b,
          ing: ''
        }));
        setBulk(b => ({
          ...b,
          ing: false
        }));
      }
    }
  }, React.createElement(Icon, {
    name: "ListPlus",
    size: 16
  }), "1\u884C\u305A\u3064\u6750\u6599\u306B\u5165\u308C\u308B"))), f.ingredients.length > 1 && React.createElement("p", {
    className: "text-xs text-muted -mt-1 flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "GripVertical",
    size: 13
  }), "\u5DE6\u306E\u6301\u3061\u624B\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u3001\u597D\u304D\u306A\u9806\u756A\u306B\u4E26\u3079\u66FF\u3048\u3089\u308C\u307E\u3059"), f.ingredients.map((i, k) => React.createElement("div", {
    key: k,
    ref: ingSort.rowRef(k),
    className: `flex gap-1.5 items-center rounded-xl transition-colors ${ingSort.active === k ? 'bg-honey/20 ring-2 ring-honey/50' : ''}`
  }, React.createElement("button", _extends({
    type: "button",
    "aria-label": `材料${k + 1}「${i.name || '未入力'}」を並べ替え（上下キーでも移動）`
  }, ingSort.handle(k), {
    className: "shrink-0 p-1.5 -ml-1 text-muted hover:text-ink cursor-grab active:cursor-grabbing rounded-lg"
  }), React.createElement(Icon, {
    name: "GripVertical",
    size: 18
  })), React.createElement("input", {
    id: `ing-n-${k}`,
    "aria-label": "\u6750\u6599\u540D",
    value: i.name,
    onChange: e => setIng(k, 'name', e.target.value),
    onPaste: e => onPasteIng(e, k),
    className: field + ' flex-[3] min-w-0',
    placeholder: "\u6750\u6599\u540D"
  }), React.createElement("input", {
    id: `ing-a-${k}`,
    "aria-label": "\u5206\u91CF",
    value: i.amount,
    onChange: e => setIng(k, 'amount', e.target.value),
    className: field + ' flex-[2] min-w-0',
    placeholder: "\u5206\u91CF"
  }), React.createElement("button", {
    type: "button",
    "aria-label": "\u3053\u306E\u6750\u6599\u3092\u524A\u9664",
    className: "p-2 text-muted hover:text-danger",
    onClick: () => set('ingredients', f.ingredients.filter((_, x) => x !== k))
  }, React.createElement(Icon, {
    name: "Minus",
    size: 18
  })))), React.createElement("button", {
    type: "button",
    className: btnGhost + ' self-start text-sm',
    onClick: () => set('ingredients', [...f.ingredients, {
      name: '',
      amount: ''
    }])
  }, React.createElement(Icon, {
    name: "Plus",
    size: 16
  }), "\u6750\u6599\u3092\u8FFD\u52A0")), React.createElement("div", {
    className: "flex flex-col gap-2"
  }, React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u4F5C\u308A\u65B9"), React.createElement("button", {
    type: "button",
    onClick: () => setBulk(b => ({
      ...b,
      step: !b.step
    })),
    className: "text-xs font-bold text-primary flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "ClipboardPaste",
    size: 14
  }), "\u307E\u3068\u3081\u3066\u8CBC\u308A\u4ED8\u3051")), bulk.step && React.createElement("div", {
    className: "rounded-xl bg-sunk p-3 flex flex-col gap-2"
  }, React.createElement("textarea", {
    id: "bulk-step",
    rows: 6,
    value: bulkText.step,
    onChange: e => setBulkText(b => ({
      ...b,
      step: e.target.value
    })),
    className: field + ' text-sm',
    placeholder: '作り方をまるごと貼り付け\n例）\n①鶏肉に穴をあける\n②ラップをして3分加熱\n③たれをかける'
  }), React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u2460\u2461\u30841. 2. \u306A\u3069\u306E\u756A\u53F7\u3054\u3068\u306B\u624B\u9806\u3092\u5206\u3051\u307E\u3059\u3002\u756A\u53F7\u304C\u306A\u3044\u5834\u5408\u306F1\u884C\u30921\u624B\u9806\u306B\u3057\u307E\u3059\u3002"), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("button", {
    type: "button",
    className: btnGhost + ' flex-1 text-sm',
    onClick: () => setBulk(b => ({
      ...b,
      step: false
    }))
  }, "\u9589\u3058\u308B"), React.createElement("button", {
    type: "button",
    className: btnPrimary + ' flex-[2] text-sm py-2.5',
    onClick: () => {
      if (applySteps(bulkText.step)) {
        setBulkText(b => ({
          ...b,
          step: ''
        }));
        setBulk(b => ({
          ...b,
          step: false
        }));
      }
    }
  }, React.createElement(Icon, {
    name: "ListOrdered",
    size: 16
  }), "\u624B\u9806\u306B\u5206\u3051\u3066\u5165\u308C\u308B"))), f.steps.map((s, k) => React.createElement("div", {
    key: k,
    ref: stepSort.rowRef(k),
    className: `flex gap-1.5 items-start rounded-xl transition-colors ${stepSort.active === k ? 'bg-honey/20 ring-2 ring-honey/50' : ''}`
  }, React.createElement("button", _extends({
    type: "button",
    "aria-label": `手順${k + 1}を並べ替え（上下キーでも移動）`
  }, stepSort.handle(k), {
    className: "shrink-0 mt-2 p-1.5 -ml-1 text-muted hover:text-ink cursor-grab active:cursor-grabbing rounded-lg"
  }), React.createElement(Icon, {
    name: "GripVertical",
    size: 18
  })), React.createElement("span", {
    className: "shrink-0 mt-2 w-7 h-7 rounded-full bg-primary text-pink text-sm font-bold flex items-center justify-center tnum"
  }, k + 1), React.createElement("textarea", {
    id: `step-${k}`,
    "aria-label": `手順${k + 1}`,
    rows: 2,
    value: s,
    onChange: e => setStep(k, e.target.value),
    onPaste: e => onPasteStep(e, k),
    className: field + ' flex-1 min-w-0'
  }), React.createElement("button", {
    type: "button",
    "aria-label": "\u3053\u306E\u624B\u9806\u3092\u524A\u9664",
    className: "p-2 mt-1 text-muted hover:text-danger",
    onClick: () => set('steps', f.steps.filter((_, x) => x !== k))
  }, React.createElement(Icon, {
    name: "Minus",
    size: 18
  })))), React.createElement("button", {
    type: "button",
    className: btnGhost + ' self-start text-sm',
    onClick: () => set('steps', [...f.steps, ''])
  }, React.createElement(Icon, {
    name: "Plus",
    size: 16
  }), "\u624B\u9806\u3092\u8FFD\u52A0")), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("label", {
    htmlFor: "memo",
    className: "text-sm font-bold flex items-center gap-1.5"
  }, React.createElement(Icon, {
    name: "Lightbulb",
    size: 16,
    className: "text-honey"
  }), "\u30DD\u30A4\u30F3\u30C8\u30FB\u30E1\u30E2"), React.createElement("textarea", {
    id: "memo",
    rows: 3,
    value: f.memo || '',
    onChange: e => set('memo', e.target.value),
    className: field + ' text-sm',
    placeholder: '例）加熱しすぎるとパサつくので余熱で火を通す\n冷蔵で2日保存OK／子ども用は辛味抜きで'
  })), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("label", {
    htmlFor: "kcal",
    className: "text-sm font-bold"
  }, "\u30AB\u30ED\u30EA\u30FC\u306E\u76EE\u5B89"), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("span", {
    className: "text-xs text-muted"
  }, "\u4F55\u3042\u305F\u308A\u306E\u30AB\u30ED\u30EA\u30FC\u304B"), React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, KCAL_BASES.map(b => React.createElement(Chip, {
    small: true,
    key: b,
    active: (f.kcalBasis || '1人分') === b,
    onClick: () => set('kcalBasis', b)
  }, b)), React.createElement(Chip, {
    small: true,
    active: !KCAL_BASES.includes(f.kcalBasis || '1人分'),
    onClick: () => {
      if (KCAL_BASES.includes(f.kcalBasis || '1人分')) set('kcalBasis', '');
    }
  }, "\u305D\u306E\u4ED6")), !KCAL_BASES.includes(f.kcalBasis || '1人分') && React.createElement("input", {
    id: "kcal-basis",
    value: f.kcalBasis,
    onChange: e => set('kcalBasis', e.target.value),
    className: field + ' text-sm',
    placeholder: "\u4F8B\uFF1A1\u30AB\u30C3\u30D7\u3042\u305F\u308A\u30016\u500B\u5206"
  })), React.createElement("div", {
    className: "flex gap-2 items-center"
  }, React.createElement("div", {
    className: "relative flex-1"
  }, React.createElement("input", {
    id: "kcal",
    inputMode: "numeric",
    value: f.kcal,
    onChange: e => {
      set('kcal', e.target.value);
      set('kcalEstimated', false);
    },
    className: field + ' pr-14 tnum',
    placeholder: "\u4F8B\uFF1A350"
  }), React.createElement("span", {
    className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted text-sm"
  }, "kcal")), React.createElement("button", {
    type: "button",
    onClick: estimate,
    className: btnGhost + ' text-sm shrink-0'
  }, React.createElement(Icon, {
    name: "Calculator",
    size: 16
  }), "\u6750\u6599\u304B\u3089\u63A8\u5B9A")), f.kcalEstimated && React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u6750\u6599\u304B\u3089\u306E\u6982\u7B97\u3067\u3059\u3002\u6295\u7A3F\u306B\u8A18\u8F09\u304C\u3042\u308C\u3070\u305D\u3061\u3089\u3092\u512A\u5148\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), React.createElement("div", {
    className: "flex flex-col gap-2"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u30AB\u30C6\u30B4\u30EA\uFF08\u8907\u6570\u9078\u3079\u307E\u3059\uFF09"), React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, categories.map(c => React.createElement(Chip, {
    key: c,
    active: f.categories.includes(c),
    onClick: () => toggleCat(c)
  }, f.categories.includes(c) && React.createElement(Icon, {
    name: "Check",
    size: 14,
    className: "inline -mt-0.5 mr-0.5"
  }), c))), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("input", {
    id: "newcat-form",
    value: newCat,
    onChange: e => setNewCat(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addCat();
      }
    },
    className: field + ' text-sm',
    placeholder: "\u65B0\u3057\u3044\u30AB\u30C6\u30B4\u30EA\u540D"
  }), React.createElement("button", {
    type: "button",
    onClick: addCat,
    className: btnGhost + ' shrink-0 text-sm'
  }, React.createElement(Icon, {
    name: "Tag",
    size: 16
  }), "\u8FFD\u52A0"))), React.createElement("div", {
    className: "flex gap-2 pt-2"
  }, onCancel && React.createElement("button", {
    type: "button",
    onClick: onCancel,
    className: btnGhost + ' flex-1'
  }, "\u3084\u3081\u308B"), React.createElement("button", {
    type: "submit",
    className: btnPrimary + ' flex-[2]'
  }, React.createElement(Icon, {
    name: "Save",
    size: 18
  }), f.id ? '変更を保存' : 'レシピを保存')));
}
const fmtMD = t => {
  const d = new Date(t);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};
const slotLabel = s => s && s !== ANY ? s : '';
function RecipePicker({
  open,
  title,
  slot,
  onClose,
  recipes,
  onChoose,
  onAuto,
  onRemove,
  onOff
}) {
  const [q, setQ] = useState('');
  const [src, setSrc] = useState('fav');
  const [onlySlot, setOnlySlot] = useState(true);
  useEffect(() => {
    if (open) {
      setQ('');
      setOnlySlot(true);
      const pool = recipes.filter(r => inSlot(r, slot));
      setSrc(pool.some(r => r.fav) ? 'fav' : pool.length ? 'mine' : 'generic');
    }
  }, [open, slot]);
  if (!open) return null;
  const useSlot = onlySlot && slot && slot !== ANY;
  const nq = canon(q);
  const base = (src === 'fav' ? recipes.filter(r => r.fav) : src === 'mine' ? recipes : GENERIC).filter(r => !useSlot || inSlot(r, slot));
  const list = base.filter(r => !nq || canon(r.name).includes(nq) || (r.ingredients || []).some(i => canon(i.name).includes(nq)));
  return React.createElement(Sheet, {
    open: true,
    title: title,
    onClose: onClose
  }, React.createElement("div", {
    className: "flex flex-col gap-3"
  }, React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, onAuto && React.createElement("button", {
    onClick: onAuto,
    className: btnGhost + ' text-sm flex-1'
  }, React.createElement(Icon, {
    name: "Shuffle",
    size: 16
  }), "\u304A\u307E\u304B\u305B"), onRemove && React.createElement("button", {
    onClick: onRemove,
    className: btnGhost + ' text-sm flex-1'
  }, React.createElement(Icon, {
    name: "Trash2",
    size: 16
  }), "\u3053\u306E\u54C1\u3092\u5916\u3059"), onOff && React.createElement("button", {
    onClick: onOff,
    className: btnGhost + ' text-sm flex-1'
  }, React.createElement(Icon, {
    name: "Moon",
    size: 16
  }), "\u3053\u306E\u65E5\u306F\u4F5C\u3089\u306A\u3044")), React.createElement("label", {
    className: "relative block"
  }, React.createElement("span", {
    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
  }, React.createElement(Icon, {
    name: "Search",
    size: 16
  })), React.createElement("input", {
    id: "picker-search",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u6599\u7406\u540D\u30FB\u6750\u6599\u3067\u63A2\u3059",
    className: field + ' pl-10 text-sm'
  })), React.createElement("div", {
    className: "grid grid-cols-3 gap-1 p-1 rounded-xl bg-sunk text-sm"
  }, [['fav', 'お気に入り'], ['mine', 'マイレシピ'], ['generic', '定番']].map(([k, l]) => React.createElement("button", {
    key: k,
    onClick: () => setSrc(k),
    className: `rounded-lg py-1.5 font-bold ${src === k ? 'bg-surface shadow-sm' : 'text-muted'}`
  }, l))), slot && slot !== ANY && React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement(Chip, {
    small: true,
    active: onlySlot,
    onClick: () => setOnlySlot(true)
  }, "\u300C", slot, "\u300D\u3060\u3051"), React.createElement(Chip, {
    small: true,
    active: !onlySlot,
    onClick: () => setOnlySlot(false)
  }, "\u3059\u3079\u3066\u306E\u30AB\u30C6\u30B4\u30EA")), React.createElement("ul", {
    className: "flex flex-col gap-1"
  }, list.map(r => React.createElement("li", {
    key: r.id
  }, React.createElement("button", {
    onClick: () => onChoose(src === 'generic' ? 'generic' : 'mine', r),
    className: "w-full flex items-center gap-3 p-2 rounded-xl hover:bg-sunk text-left"
  }, React.createElement(Photo, {
    r: r,
    className: "w-12 h-12 rounded-lg shrink-0"
  }), React.createElement("span", {
    className: "flex-1 min-w-0"
  }, React.createElement("span", {
    className: "block truncate font-medium"
  }, r.name), React.createElement("span", {
    className: "text-xs text-muted tnum"
  }, r.kcal ? `${r.kcal}kcal` : '', (r.categories || []).length ? `・${r.categories.slice(0, 3).join('・')}` : '')), r.fav && React.createElement(Icon, {
    name: "Heart",
    size: 14,
    fill: "currentColor",
    className: "text-danger"
  }), React.createElement(Icon, {
    name: "ChevronRight",
    size: 16,
    className: "text-muted"
  })))), !list.length && React.createElement("li", {
    className: "text-sm text-muted p-3 text-center"
  }, src === 'fav' ? 'お気に入りはまだありません' : '見つかりませんでした', useSlot ? '。「すべてのカテゴリ」も見てみてください' : ''))));
}
const NOTE_PRESETS = ['温めて食べてね', '冷蔵庫に入ってるよ', 'ご飯は炊飯器にあるよ', 'ポン酢かソースをかけてね！', '先に寝てるね、おつかれさま'];
function NoteSheet({
  state,
  note,
  onClose,
  onSave,
  onDelete
}) {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    if (state) {
      setText(note && note.text || '');
      setName(LS.get('nickname', ''));
    }
  }, [state]);
  if (!state) return null;
  return React.createElement(Sheet, {
    open: true,
    title: `伝えたいこと・${state.label}`,
    onClose: onClose,
    footer: React.createElement("div", {
      className: "flex gap-2"
    }, note && React.createElement("button", {
      className: btnGhost + ' px-3',
      "aria-label": "\u4F1D\u3048\u305F\u3044\u3053\u3068\u3092\u6D88\u3059",
      onClick: () => {
        onDelete();
        onClose();
      }
    }, React.createElement(Icon, {
      name: "Trash2",
      size: 18
    })), React.createElement("button", {
      className: btnPrimary + ' flex-1',
      disabled: !text.trim(),
      onClick: () => {
        LS.set('nickname', name.trim());
        onSave(text.trim(), name.trim());
        onClose();
      }
    }, React.createElement(Icon, {
      name: "Send",
      size: 16
    }), "\u3053\u306E\u5185\u5BB9\u3067\u6B8B\u3059"))
  }, React.createElement("div", {
    className: "flex flex-col gap-3"
  }, React.createElement("p", {
    className: "text-sm text-muted"
  }, "\u300C\u4ECA\u65E5\u300D\u306E\u753B\u9762\u306B\u5927\u304D\u304F\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u5BB6\u65CF\u3067\u5171\u6709\u3057\u3066\u3044\u308C\u3070\u3001\u5BB6\u65CF\u306E\u30B9\u30DE\u30DB\u306B\u3082\u3059\u3050\u53CD\u6620\u3055\u308C\u307E\u3059\u3002"), React.createElement("textarea", {
    id: "note-text",
    rows: 4,
    value: text,
    onChange: e => setText(e.target.value),
    className: field + ' text-base',
    placeholder: "\u4F8B\uFF09\u30DD\u30F3\u9162\u304B\u30BD\u30FC\u30B9\u3092\u304B\u3051\u3066\u306D\uFF01\u3054\u98EF\u306F\u708A\u98EF\u5668\u306B\u3042\u308A\u307E\u3059"
  }), React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, NOTE_PRESETS.map(p => React.createElement(Chip, {
    small: true,
    key: p,
    onClick: () => setText(t => t.trim() ? t.trim() + '\n' + p : p)
  }, p))), React.createElement("div", {
    className: "flex flex-col gap-1"
  }, React.createElement("label", {
    htmlFor: "note-name",
    className: "text-xs font-bold text-muted"
  }, "\u3060\u308C\u304B\u3089\uFF08\u3053\u306E\u30B9\u30DE\u30DB\u3067\u899A\u3048\u307E\u3059\uFF09"), React.createElement("input", {
    id: "note-name",
    value: name,
    onChange: e => setName(e.target.value),
    className: field + ' text-sm',
    placeholder: "\u4F8B\uFF1A\u30DE\u30DE"
  }))));
}
function NoteBubble({
  note,
  onEdit,
  big
}) {
  if (!note) return null;
  const t = new Date(note.at || Date.now());
  return React.createElement("button", {
    onClick: onEdit,
    className: `relative w-full text-left rounded-3xl bg-honey/20 border-2 border-honey/50 ${big ? 'p-5' : 'px-3 py-2'} flex gap-3 items-start`
  }, React.createElement("span", {
    className: `shrink-0 rounded-full bg-honey text-pink flex items-center justify-center ${big ? 'w-10 h-10' : 'w-6 h-6'}`
  }, React.createElement(Icon, {
    name: "MessageCircle",
    size: big ? 20 : 13
  })), React.createElement("span", {
    className: "min-w-0 flex-1"
  }, React.createElement("span", {
    className: `block whitespace-pre-line font-bold ${big ? 'text-xl leading-relaxed' : 'text-sm line-clamp-2'}`
  }, note.text), big && React.createElement("span", {
    className: "block text-xs text-muted mt-1.5 tnum"
  }, note.name ? `${note.name}より・` : '', t.getMonth() + 1, "/", t.getDate(), " ", String(t.getHours()).padStart(2, '0'), ":", String(t.getMinutes()).padStart(2, '0'), "\u3000\u30BF\u30C3\u30D7\u3067\u7DE8\u96C6")));
}
function SlotPicker({
  slots,
  setSlots,
  categories,
  addCategory,
  recipes
}) {
  const toggle = c => setSlots(slots.includes(c) ? slots.filter(x => x !== c) : [...slots, c]);
  const preset = p => {
    p.slots.forEach(c => {
      if (c !== ANY) addCategory(c);
    });
    setSlots(p.slots);
  };
  const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  const none = slots.filter(s => s !== ANY && !recipes.some(r => inSlot(r, s)) && !GENERIC.some(r => inSlot(r, s)));
  const genOnly = slots.filter(s => s !== ANY && !recipes.some(r => inSlot(r, s)) && GENERIC.some(r => inSlot(r, s)));
  return React.createElement("div", {
    className: "flex flex-col gap-2"
  }, React.createElement("span", {
    className: "text-xs font-bold text-muted label flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "LayoutList",
    size: 13
  }), "1\u65E5\u306E\u7D44\u307F\u5408\u308F\u305B\uFF08\u3044\u304F\u3064\u3067\u3082\u9078\u3079\u307E\u3059\uFF09"), React.createElement("div", {
    className: "scrollx -mx-4 px-4 flex gap-2"
  }, SLOT_PRESETS.map(p => React.createElement(Chip, {
    small: true,
    key: p.label,
    active: same(slots, p.slots),
    onClick: () => preset(p)
  }, p.label))), React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, [...categories, ANY].map(c => {
    const i = slots.indexOf(c);
    return React.createElement(Chip, {
      small: true,
      key: c,
      active: i >= 0,
      onClick: () => toggle(c)
    }, i >= 0 && React.createElement("span", {
      className: "tnum mr-1 opacity-80"
    }, i + 1), c);
  })), React.createElement("p", {
    className: "rounded-xl bg-sunk px-3 py-2 text-sm font-bold"
  }, slots.length ? slots.join(' ＋ ') : 'まだ選ばれていません（主菜1品になります）'), genOnly.length > 0 && React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u300C", genOnly.join('」「'), "\u300D\u306E\u30DE\u30A4\u30EC\u30B7\u30D4\u304C\u307E\u3060\u306A\u3044\u305F\u3081\u3001\u5B9A\u756A\u30EC\u30B7\u30D4\u3067\u88DC\u3044\u307E\u3059\u3002"), none.length > 0 && React.createElement("p", {
    className: "text-xs text-danger"
  }, "\u300C", none.join('」「'), "\u300D\u306E\u30EC\u30B7\u30D4\u304C\u306A\u3044\u305F\u3081\u7A7A\u6B04\u306B\u306A\u308A\u307E\u3059\u3002\u30EC\u30B7\u30D4\u306B\u305D\u306E\u30AB\u30C6\u30B4\u30EA\u3092\u4ED8\u3051\u308B\u3068\u9078\u3070\u308C\u307E\u3059\u3002"));
}
function WeekPlan({
  plan,
  setPlan,
  recipes,
  categories,
  addCategory,
  onOpen,
  onMakeList,
  offDays,
  setOffDays,
  slots,
  setSlots,
  notes,
  onEditNote
}) {
  const [mode, setMode] = useState(plan.mode || 'balanced');
  const [fridgeIn, setFridgeIn] = useState('');
  const [fridge, setFridge] = useState(plan.fridge || []);
  const [favBoost, setFavBoost] = useState(true);
  const [week, setWeek] = useState(() => (new Date().getDay() + 6) % 7 >= 4 ? 'next' : 'this');
  const [pick, setPick] = useState(null);
  function addFridge() {
    const parts = fridgeIn.split(/[、,，\s　]+/).map(s => s.trim()).filter(Boolean);
    if (!parts.length) return;
    setFridge([...new Set([...fridge, ...parts])]);
    setFridgeIn('');
  }
  const cookN = 7 - offDays.length;
  function generate() {
    setPlan({
      mode,
      fridge,
      slots,
      days: planWeek({
        recipes,
        mode,
        fridge,
        slots,
        favBoost,
        off: offDays
      }),
      weekStart: week === 'this' ? thisMonday() : nextMonday(),
      createdAt: Date.now()
    });
  }
  const days = (plan.days || []).map(normDay);
  function setDay(idx, d) {
    const next = days.map((x, i) => i === idx ? d : x);
    setPlan({
      ...plan,
      days: next
    });
  }
  const usedIds = () => days.flatMap(d => d.off ? [] : d.items.map(i => i.id)).filter(Boolean);
  function choose(source, r) {
    const {
      day,
      item
    } = pick;
    const d = days[day];
    const prev = item >= 0 ? d.items[item] : null;
    const slot = prev ? prev.slot : slots.find(s => inSlot(r, s)) || null;
    const s = plan.mode === 'fridge' ? scoreRecipe(r, plan.fridge || []) : null;
    const it = {
      slot,
      source,
      id: r.id,
      ...(s ? {
        hit: s.hit,
        total: s.total
      } : {})
    };
    const items = d.off ? [it] : item >= 0 ? d.items.map((x, i) => i === item ? it : x) : [...d.items, it];
    setDay(day, {
      ...d,
      off: undefined,
      items
    });
    setPick(null);
  }
  function auto(day, item) {
    const d = days[day];
    const slot = item >= 0 ? d.items[item].slot : d.off ? slots[0] || null : null;
    const it = autoPick(plan, recipes, slot, usedIds());
    if (!it) return;
    if (d.off) {
      setDay(day, {
        items: slots.length ? slots.map(sl => autoPick(plan, recipes, sl, usedIds()) || {
          slot: sl,
          empty: true
        }) : [it]
      });
      return;
    }
    setDay(day, {
      ...d,
      items: item >= 0 ? d.items.map((x, i) => i === item ? it : x) : [...d.items, it]
    });
  }
  const ws = plan.weekStart || null;
  const dateOf = i => ws ? fmtMD(ws + i * 864e5) : '';
  const todayIdx = planDayIndex(plan, Date.now());
  const cooking = days.filter(d => !d.off);
  const totalK = cooking.reduce((s, d) => s + dayItems(d, recipes).reduce((a, {
    r
  }) => a + (r && r.kcal || 0), 0), 0);
  const pd = pick ? days[pick.day] : null;
  const pItem = pick && pick.item >= 0 && pd && !pd.off ? pd.items[pick.item] : null;
  return React.createElement("div", {
    className: "flex flex-col gap-5"
  }, React.createElement("div", {
    className: "grid grid-cols-2 gap-1 p-1 rounded-2xl bg-sunk"
  }, [['fridge', 'Refrigerator', '食材から提案'], ['balanced', 'Shuffle', '献立から買い物']].map(([m, ic, l]) => React.createElement("button", {
    key: m,
    onClick: () => setMode(m),
    className: `rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-1.5 ${mode === m ? 'bg-surface shadow-sm text-ink' : 'text-muted'}`
  }, React.createElement(Icon, {
    name: ic,
    size: 16
  }), l))), React.createElement("section", {
    className: "ticket rounded-2xl p-4 flex flex-col gap-4"
  }, mode === 'fridge' ? React.createElement("div", {
    className: "flex flex-col gap-3"
  }, React.createElement("p", {
    className: "text-sm text-muted"
  }, "\u51B7\u8535\u5EAB\u306E\u98DF\u6750\u3092\u5165\u308C\u308B\u3068\u3001\u305D\u308C\u3092\u4F7F\u3046\u30EC\u30B7\u30D4\u3092\u512A\u5148\u3057\u3066\u9078\u3073\u307E\u3059\u3002\u624B\u6301\u3061\u3092\u591A\u304F\u4F7F\u3046\u65E5\u307B\u3069\u9031\u306E\u524D\u534A\u306B\u4E26\u3073\u307E\u3059\u3002"), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("input", {
    id: "fridge",
    value: fridgeIn,
    onChange: e => setFridgeIn(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addFridge();
      }
    },
    className: field,
    placeholder: "\u4F8B\uFF1A\u9D8F\u3080\u306D\u3001\u30AD\u30E3\u30D9\u30C4\u3001\u5375"
  }), React.createElement("button", {
    onClick: addFridge,
    className: btnGhost + ' shrink-0',
    "aria-label": "\u98DF\u6750\u3092\u8FFD\u52A0"
  }, React.createElement(Icon, {
    name: "Plus"
  }))), React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, fridge.map(x => React.createElement("span", {
    key: x,
    className: "inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-sm"
  }, x, React.createElement("button", {
    "aria-label": `${x}を外す`,
    onClick: () => setFridge(fridge.filter(y => y !== x)),
    className: "text-muted hover:text-danger"
  }, React.createElement(Icon, {
    name: "X",
    size: 14
  })))), !fridge.length && React.createElement("span", {
    className: "text-sm text-muted"
  }, "\u307E\u3060\u98DF\u6750\u304C\u3042\u308A\u307E\u305B\u3093"))) : React.createElement("p", {
    className: "text-sm text-muted"
  }, "\u4FDD\u5B58\u30EC\u30B7\u30D4\u304B\u3089\u9078\u3073\u3001\u4F7F\u3046\u6750\u6599\u3092\u307E\u3068\u3081\u3066\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u306B\u3057\u307E\u3059\u3002"), React.createElement(SlotPicker, {
    slots: slots,
    setSlots: setSlots,
    categories: categories,
    addCategory: addCategory,
    recipes: recipes
  }), mode === 'balanced' && React.createElement("label", {
    className: "flex items-center gap-2 text-sm cursor-pointer"
  }, React.createElement("input", {
    id: "favboost",
    type: "checkbox",
    checked: favBoost,
    onChange: e => setFavBoost(e.target.checked),
    className: "w-4 h-4 accent-[rgb(var(--primary))]"
  }), React.createElement(Icon, {
    name: "Heart",
    size: 14,
    className: "text-danger",
    fill: "currentColor"
  }), "\u304A\u6C17\u306B\u5165\u308A\u3092\u591A\u3081\u306B\u5165\u308C\u308B"), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("span", {
    className: "text-xs font-bold text-muted label flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "Moon",
    size: 13
  }), "\u4F5C\u3089\u306A\u3044\u66DC\u65E5\uFF08\u5916\u98DF\u30FB\u4F5C\u308A\u7F6E\u304D\u30FB\u304A\u4F11\u307F\uFF09"), React.createElement("div", {
    className: "grid grid-cols-7 gap-1"
  }, DAYS.map((d, i) => {
    const on = offDays.includes(i);
    return React.createElement("button", {
      key: d,
      onClick: () => setOffDays(on ? offDays.filter(x => x !== i) : [...offDays, i].sort()),
      "aria-pressed": on,
      className: `aspect-square rounded-xl text-sm font-bold border flex flex-col items-center justify-center ${on ? 'bg-ink text-bg border-ink' : 'bg-surface border-line'}`
    }, d, on && React.createElement("span", {
      className: "text-[9px] font-medium leading-none mt-0.5"
    }, "\u4F11"));
  }))), React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, React.createElement("span", {
    className: "text-xs font-bold text-muted label flex items-center gap-1"
  }, React.createElement(Icon, {
    name: "CalendarDays",
    size: 13
  }), "\u3044\u3064\u306E\u732E\u7ACB\uFF1F"), React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, [['this', '今週', thisMonday()], ['next', '来週', nextMonday()]].map(([k, l, t]) => React.createElement(Chip, {
    key: k,
    active: week === k,
    onClick: () => setWeek(k)
  }, l, "\uFF08", fmtMD(t), "\u301C", fmtMD(t + 6 * 864e5), "\uFF09")))), React.createElement("button", {
    onClick: generate,
    disabled: mode === 'fridge' && !fridge.length || cookN === 0,
    className: btnPrimary
  }, React.createElement(Icon, {
    name: "Sparkles",
    size: 18
  }), "1\u9031\u9593\u306E\u732E\u7ACB\u3092\u3064\u304F\u308B")), days.length > 0 && React.createElement("section", {
    className: "flex flex-col gap-3"
  }, React.createElement("div", {
    className: "flex items-end justify-between gap-2"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "font-display text-xl font-bold"
  }, "\u3053\u306E\u9031\u306E\u732E\u7ACB"), React.createElement("p", {
    className: "text-xs text-muted tnum"
  }, ws ? `${dateOf(0)}（月）〜 ${dateOf(6)}（日）` : '', "\u30FB", plan.mode === 'fridge' ? '食材から提案' : 'バランス自動')), React.createElement("span", {
    className: "text-xs text-muted tnum text-right"
  }, "\u4F5C\u308B\u65E5 ", cooking.length, "\u65E5", React.createElement("br", null), "1\u65E5 \u7D04", cooking.length ? Math.round(totalK / cooking.length) : 0, " kcal")), React.createElement("ol", {
    className: "flex flex-col gap-3"
  }, days.map((d, idx) => {
    const key = ws ? dateKey(ws + idx * 864e5) : null;
    const note = key && notes[key];
    const isToday = idx === todayIdx;
    const label = `${DAYS[idx]}曜（${dateOf(idx)}）`;
    return React.createElement("li", {
      key: idx,
      className: `rounded-2xl overflow-hidden ${d.off ? 'stamp bg-sunk/50' : 'ticket'} ${isToday ? 'ring-2 ring-honey' : ''}`
    }, React.createElement("div", {
      className: `flex items-center gap-2 px-3 py-2 ${d.off ? '' : 'bg-sunk/70'}`
    }, React.createElement("span", {
      className: `font-display text-lg font-bold ${d.off ? 'text-muted' : ''}`
    }, DAYS[idx]), React.createElement("span", {
      className: "text-xs text-muted tnum"
    }, dateOf(idx)), isToday && React.createElement("span", {
      className: "rounded-full bg-honey text-pink text-[10px] font-bold px-2 py-0.5"
    }, "\u4ECA\u65E5"), React.createElement("span", {
      className: "flex-1"
    }), key && React.createElement("button", {
      onClick: () => onEditNote(key, label),
      "aria-label": `${label}の伝えたいこと`,
      className: `p-1.5 rounded-lg ${note ? 'text-honey' : 'text-muted hover:text-ink'}`
    }, React.createElement(Icon, {
      name: "MessageCircle",
      size: 17
    })), d.off ? React.createElement("button", {
      onClick: () => auto(idx, -1),
      className: "rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-bold flex items-center gap-1"
    }, React.createElement(Icon, {
      name: "CookingPot",
      size: 14
    }), "\u4F5C\u308B") : React.createElement(React.Fragment, null, React.createElement("button", {
      onClick: () => setPick({
        day: idx,
        item: -1
      }),
      className: "rounded-lg border border-line bg-surface px-2 py-1 text-xs font-bold flex items-center gap-1"
    }, React.createElement(Icon, {
      name: "Plus",
      size: 13
    }), "\u54C1\u3092\u8FFD\u52A0"), React.createElement("button", {
      onClick: () => setDay(idx, {
        off: true
      }),
      className: "rounded-lg px-2 py-1 text-xs text-muted flex items-center gap-1 hover:text-ink"
    }, React.createElement(Icon, {
      name: "Moon",
      size: 13
    }), "\u4F11\u307F"))), d.off ? React.createElement("p", {
      className: "px-3 pb-3 text-sm text-muted"
    }, "\u4F5C\u3089\u306A\u3044\u65E5\uFF08\u5916\u98DF\u30FB\u4F5C\u308A\u7F6E\u304D\u30FB\u304A\u4F11\u307F\uFF09") : React.createElement("ul", null, dayItems(d, recipes).map(({
      it,
      r
    }, k) => React.createElement("li", {
      key: k,
      className: "flex items-center gap-2 px-3 py-2 border-t border-line/70"
    }, React.createElement("button", {
      onClick: () => r && onOpen(r),
      className: "flex-1 min-w-0 flex items-center gap-3 text-left"
    }, React.createElement(Photo, {
      r: r,
      className: "w-12 h-12 rounded-xl shrink-0"
    }), React.createElement("span", {
      className: "min-w-0"
    }, React.createElement("span", {
      className: "flex items-center gap-1.5"
    }, slotLabel(it.slot) && React.createElement("span", {
      className: "text-[10px] font-bold rounded bg-primary/10 text-primary px-1.5"
    }, it.slot), it.source === 'generic' && React.createElement("span", {
      className: "text-[10px] font-bold text-honey"
    }, "\u5B9A\u756A")), React.createElement("span", {
      className: "block font-bold leading-snug truncate"
    }, r ? r.name : '該当するレシピがありません', r && r.fav && React.createElement(Icon, {
      name: "Heart",
      size: 12,
      fill: "currentColor",
      className: "inline ml-1 -mt-0.5 text-danger"
    })), React.createElement("span", {
      className: "block text-xs text-muted tnum"
    }, r && r.kcal ? `${r.kcal}kcal` : '', plan.mode === 'fridge' && it.total ? `　手持ち ${it.hit || 0}/${it.total}` : ''))), React.createElement("button", {
      onClick: () => setPick({
        day: idx,
        item: k
      }),
      className: "shrink-0 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs font-bold flex items-center gap-1 hover:border-primary/60"
    }, React.createElement(Icon, {
      name: "ArrowLeftRight",
      size: 14
    }), "\u5909\u66F4"))), !d.items.length && React.createElement("li", {
      className: "px-3 py-3 border-t border-line/70 text-sm text-muted"
    }, "\u54C1\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u300C\u54C1\u3092\u8FFD\u52A0\u300D\u304B\u3089\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002")), note && React.createElement("div", {
      className: "px-3 pb-3"
    }, React.createElement(NoteBubble, {
      note: note,
      onEdit: () => onEditNote(key, label)
    })));
  })), React.createElement("button", {
    onClick: onMakeList,
    disabled: !cooking.length,
    className: btnPrimary
  }, React.createElement(Icon, {
    name: "ShoppingCart",
    size: 18
  }), "\u3053\u306E\u732E\u7ACB\u3067\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u3092\u4F5C\u308B")), React.createElement(RecipePicker, {
    open: !!pick,
    slot: pItem ? pItem.slot : null,
    recipes: recipes,
    onClose: () => setPick(null),
    title: pick ? `${DAYS[pick.day]}曜日・${pItem ? (slotLabel(pItem.slot) || 'この品') + 'を変更' : '品を追加'}` : '',
    onChoose: choose,
    onAuto: pick && pick.item >= 0 ? () => {
      auto(pick.day, pick.item);
      setPick(null);
    } : null,
    onRemove: pItem ? () => {
      setDay(pick.day, {
        ...pd,
        items: pd.items.filter((_, i) => i !== pick.item)
      });
      setPick(null);
    } : null,
    onOff: pick ? () => {
      setDay(pick.day, {
        off: true
      });
      setPick(null);
    } : null
  }));
}
function TodayView({
  plan,
  recipes,
  notes,
  onOpen,
  goPlan,
  onEditNote,
  onShare
}) {
  const now = Date.now();
  const t = new Date(now);
  const key = dateKey(now);
  const idx = planDayIndex(plan, now);
  const d = idx >= 0 ? normDay(plan.days[idx]) : null;
  const list = d && !d.off ? dayItems(d, recipes).filter(x => x.r) : [];
  const note = notes[key];
  const label = `今日（${t.getMonth() + 1}/${t.getDate()}）`;
  const tmr = planDayIndex(plan, now + 864e5);
  const td = tmr >= 0 ? normDay(plan.days[tmr]) : null;
  const tList = td && !td.off ? dayItems(td, recipes).filter(x => x.r) : [];
  const kcal = list.reduce((s, {
    r
  }) => s + (r.kcal || 0), 0);
  return React.createElement("div", {
    className: "flex flex-col gap-5"
  }, React.createElement("div", {
    className: "text-center pt-1"
  }, React.createElement("p", {
    className: "text-sm font-bold text-muted tnum"
  }, t.getMonth() + 1, "\u6708", t.getDate(), "\u65E5\uFF08", DAYS[(t.getDay() + 6) % 7], "\uFF09"), React.createElement("h2", {
    className: "font-display text-3xl font-black flex items-center justify-center gap-2 mt-0.5"
  }, React.createElement(Icon, {
    name: "Sparkles",
    size: 26,
    className: "text-honey"
  }), "\u4ECA\u65E5\u306E\u732E\u7ACB", React.createElement(Icon, {
    name: "Sparkles",
    size: 26,
    className: "text-honey"
  })), list.length > 0 && React.createElement("p", {
    className: "text-xs text-muted tnum mt-1"
  }, list.length, "\u54C1\u30FB\u5408\u8A08 \u7D04", kcal, " kcal\uFF08\u76EE\u5B89\uFF09")), note ? React.createElement(NoteBubble, {
    note: note,
    big: true,
    onEdit: () => onEditNote(key, label)
  }) : React.createElement("button", {
    onClick: () => onEditNote(key, label),
    className: "stamp rounded-3xl p-4 text-muted flex items-center justify-center gap-2 font-bold"
  }, React.createElement(Icon, {
    name: "MessageCircle",
    size: 18
  }), "\u4F1D\u3048\u305F\u3044\u3053\u3068\u3092\u66F8\u304F"), list.length > 0 ? React.createElement("div", {
    className: "flex flex-col gap-3"
  }, list.map(({
    it,
    r
  }, k) => React.createElement("button", {
    key: k,
    onClick: () => onOpen(r),
    className: `ticket rounded-3xl overflow-hidden text-left ${k === 0 ? '' : 'flex items-center gap-3 p-2.5'}`
  }, k === 0 ? React.createElement(React.Fragment, null, React.createElement(Photo, {
    r: r,
    className: "w-full aspect-[4/3]"
  }), React.createElement("div", {
    className: "p-4 flex flex-col gap-1"
  }, slotLabel(it.slot) && React.createElement("span", {
    className: "self-start text-xs font-bold rounded-full bg-primary text-pink px-2.5 py-0.5"
  }, it.slot), React.createElement("span", {
    className: "font-display text-2xl font-bold leading-snug"
  }, r.name), React.createElement("span", {
    className: "text-sm text-muted flex items-center gap-1"
  }, r.kcal ? React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: "Flame",
    size: 14,
    className: "text-honey"
  }), r.kcal, " kcal") : null, React.createElement("span", {
    className: "ml-auto text-primary font-bold flex items-center gap-0.5"
  }, "\u4F5C\u308A\u65B9\u3092\u898B\u308B", React.createElement(Icon, {
    name: "ChevronRight",
    size: 16
  }))))) : React.createElement(React.Fragment, null, React.createElement(Photo, {
    r: r,
    className: "w-20 h-20 rounded-2xl shrink-0"
  }), React.createElement("span", {
    className: "min-w-0 flex-1"
  }, slotLabel(it.slot) && React.createElement("span", {
    className: "text-xs font-bold rounded-full bg-primary/10 text-primary px-2 py-0.5"
  }, it.slot), React.createElement("span", {
    className: "block font-display text-lg font-bold leading-snug mt-1"
  }, r.name), React.createElement("span", {
    className: "block text-xs text-muted tnum"
  }, r.kcal ? `${r.kcal} kcal` : '')), React.createElement(Icon, {
    name: "ChevronRight",
    size: 18,
    className: "text-muted mr-1"
  }))))) : React.createElement("div", {
    className: "ticket rounded-3xl p-6 text-center flex flex-col items-center gap-3"
  }, React.createElement("span", {
    className: "w-14 h-14 rounded-full bg-sunk flex items-center justify-center text-muted"
  }, React.createElement(Icon, {
    name: d && d.off ? 'Moon' : 'CalendarDays',
    size: 26
  })), React.createElement("p", {
    className: "font-bold"
  }, d && d.off ? '今日は作らない日です' : '今日の献立はまだ決まっていません'), React.createElement("p", {
    className: "text-sm text-muted"
  }, d && d.off ? '外食・作り置き・お休みの日。メニューを入れるときは献立タブから。' : '献立タブで「今週」の献立をつくると、ここに表示されます。'), React.createElement("button", {
    className: btnGhost,
    onClick: goPlan
  }, React.createElement(Icon, {
    name: "CalendarDays",
    size: 16
  }), "\u732E\u7ACB\u3092\u3072\u3089\u304F")), React.createElement("button", {
    onClick: onShare,
    className: btnPrimary
  }, React.createElement(Icon, {
    name: "Send",
    size: 18
  }), "\u4ECA\u65E5\u306E\u732E\u7ACB\u3092LINE\u306A\u3069\u3067\u77E5\u3089\u305B\u308B"), tList.length > 0 && React.createElement("section", {
    className: "rounded-2xl bg-sunk/70 p-4"
  }, React.createElement("h3", {
    className: "text-xs font-bold text-muted label mb-2"
  }, "\u660E\u65E5\u306E\u732E\u7ACB"), React.createElement("ul", {
    className: "flex flex-col gap-1"
  }, tList.map(({
    it,
    r
  }, k) => React.createElement("li", {
    key: k
  }, React.createElement("button", {
    onClick: () => onOpen(r),
    className: "flex items-center gap-2 text-left w-full"
  }, slotLabel(it.slot) && React.createElement("span", {
    className: "text-[10px] font-bold rounded bg-surface px-1.5"
  }, it.slot), React.createElement("span", {
    className: "truncate font-medium"
  }, r.name)))))));
}
function Shopping({
  items,
  setItems,
  hasPlan,
  goPlan,
  toast
}) {
  const [name, setName] = useState('');
  const toggle = id => setItems(items.map(i => i.id === id ? {
    ...i,
    checked: !i.checked
  } : i));
  const add = () => {
    const n = name.trim();
    if (!n) return;
    setItems([...items, {
      id: uid(),
      name: n,
      amount: '',
      group: 'manual',
      manual: true,
      checked: false
    }]);
    setName('');
  };
  const left = items.filter(i => !i.checked).length;
  const groups = [['food', '食材', 'Carrot'], ['manual', '追加したもの', 'PenLine'], ['pantry', '調味料・常備品（家にあれば不要）', 'Soup']];
  async function copy() {
    const txt = items.filter(i => !i.checked).map(i => `□ ${i.name}${i.amount ? ' ' + i.amount : ''}`).join('\n');
    try {
      await navigator.clipboard.writeText(txt);
      toast('未チェックの品をコピーしました');
    } catch (e) {
      toast('コピーできませんでした');
    }
  }
  if (!items.length) return React.createElement("div", {
    className: "stamp rounded-2xl p-8 text-center text-muted flex flex-col items-center gap-3"
  }, React.createElement(Icon, {
    name: "ShoppingCart",
    size: 32,
    strokeWidth: 1.5
  }), React.createElement("p", null, hasPlan ? '献立タブの「買い物リストを作る」で作成できます。' : 'まず1週間の献立をつくりましょう。'), React.createElement("button", {
    className: btnPrimary,
    onClick: goPlan
  }, React.createElement(Icon, {
    name: "CalendarDays"
  }), "\u732E\u7ACB\u3078"), React.createElement("div", {
    className: "flex gap-2 w-full mt-2"
  }, React.createElement("input", {
    id: "manual-add-empty",
    value: name,
    onChange: e => setName(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') add();
    },
    className: field,
    placeholder: "\u624B\u3067\u8FFD\u52A0\uFF08\u4F8B\uFF1A\u725B\u4E73\uFF09"
  }), React.createElement("button", {
    onClick: add,
    className: btnGhost + ' shrink-0',
    "aria-label": "\u8FFD\u52A0"
  }, React.createElement(Icon, {
    name: "Plus"
  }))));
  return React.createElement("div", {
    className: "flex flex-col gap-4"
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "font-display text-xl font-bold"
  }, "\u8CB7\u3044\u7269\u30EA\u30B9\u30C8"), React.createElement("p", {
    className: "text-xs text-muted tnum"
  }, "\u6B8B\u308A ", left, " / ", items.length, " \u54C1")), React.createElement("div", {
    className: "flex gap-1"
  }, React.createElement("button", {
    onClick: copy,
    className: "p-2.5 rounded-xl hover:bg-sunk text-muted",
    "aria-label": "\u30EA\u30B9\u30C8\u3092\u30B3\u30D4\u30FC"
  }, React.createElement(Icon, {
    name: "Copy",
    size: 18
  })), React.createElement("button", {
    onClick: () => setItems(items.filter(i => !i.checked)),
    className: "p-2.5 rounded-xl hover:bg-sunk text-muted",
    "aria-label": "\u30C1\u30A7\u30C3\u30AF\u6E08\u307F\u3092\u6D88\u3059"
  }, React.createElement(Icon, {
    name: "ListX",
    size: 18
  })))), React.createElement("div", {
    className: "h-2 rounded-full bg-sunk overflow-hidden"
  }, React.createElement("div", {
    className: "h-full bg-primary transition-all",
    style: {
      width: `${items.length ? (items.length - left) / items.length * 100 : 0}%`
    }
  })), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("input", {
    id: "manual-add",
    value: name,
    onChange: e => setName(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') add();
    },
    className: field,
    placeholder: "\u624B\u3067\u8FFD\u52A0\uFF08\u4F8B\uFF1A\u725B\u4E73\uFF09"
  }), React.createElement("button", {
    onClick: add,
    className: btnGhost + ' shrink-0',
    "aria-label": "\u8FFD\u52A0"
  }, React.createElement(Icon, {
    name: "Plus"
  }))), groups.map(([g, label, ic]) => {
    const list = items.filter(i => (i.group || 'food') === g);
    if (!list.length) return null;
    return React.createElement("section", {
      key: g
    }, React.createElement("h3", {
      className: "text-xs font-bold text-muted label mb-2 flex items-center gap-1.5"
    }, React.createElement(Icon, {
      name: ic,
      size: 14
    }), label), React.createElement("ul", {
      className: "ticket rounded-2xl divide-y divide-line/70"
    }, list.map(i => React.createElement("li", {
      key: i.id
    }, React.createElement("label", {
      className: "flex items-center gap-3 px-4 py-3 cursor-pointer"
    }, React.createElement("input", {
      type: "checkbox",
      id: `chk-${i.id}`,
      checked: i.checked,
      onChange: () => toggle(i.id),
      className: "sr-only peer"
    }), React.createElement("span", {
      className: `w-6 h-6 shrink-0 rounded-md border-2 flex items-center justify-center ${i.checked ? 'bg-primary border-primary text-pink' : 'border-line bg-surface'}`
    }, i.checked && React.createElement(Icon, {
      name: "Check",
      size: 14,
      strokeWidth: 3
    })), React.createElement("span", {
      className: `flex-1 min-w-0 ${i.checked ? 'line-through text-muted' : ''}`
    }, React.createElement("span", {
      className: "block"
    }, i.name), i.from && React.createElement("span", {
      className: "block text-[11px] text-muted"
    }, i.from, "\u66DC")), React.createElement("span", {
      className: `text-sm tnum text-right shrink-0 max-w-[45%] ${i.checked ? 'text-muted' : ''}`
    }, i.amount), i.manual && React.createElement("button", {
      type: "button",
      "aria-label": `${i.name}を削除`,
      onClick: e => {
        e.preventDefault();
        setItems(items.filter(x => x.id !== i.id));
      },
      className: "text-muted hover:text-danger"
    }, React.createElement(Icon, {
      name: "X",
      size: 16
    })))))));
  }));
}
const sendable = r => ({
  name: r.name,
  memo: r.memo || '',
  kcal: r.kcal || null,
  kcalBasis: basisOf(r),
  categories: r.categories || [],
  instaUrl: r.instaUrl || '',
  ingredients: (r.ingredients || []).map(i => ({
    name: i.name,
    amount: i.amount || ''
  })),
  steps: r.steps || []
});
async function packRecipe(r) {
  const json = JSON.stringify({
    v: 1,
    r: sendable(r)
  });
  try {
    if (window.CompressionStream) {
      const s = new Blob([json]).stream().pipeThrough(new CompressionStream('deflate-raw'));
      const buf = new Uint8Array(await new Response(s).arrayBuffer());
      let bin = '';
      buf.forEach(b => bin += String.fromCharCode(b));
      return 'z' + btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
  } catch (e) {}
  return 'j' + b64e(json);
}
async function unpackRecipe(code) {
  try {
    const kind = code[0],
      body = code.slice(1);
    let json;
    if (kind === 'z') {
      const bin = atob(body.replace(/-/g, '+').replace(/_/g, '/'));
      const buf = Uint8Array.from(bin, c => c.charCodeAt(0));
      const s = new Blob([buf]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
      json = await new Response(s).text();
    } else json = b64d(body);
    const d = JSON.parse(json);
    if (d && d.r && d.r.name) return sendable(d.r);
  } catch (e) {
    console.error(e);
  }
  return null;
}
const recipeCodeIn = t => {
  const m = String(t || '').match(/#recipe=([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
};
async function recipeLink(r) {
  return location.origin + location.pathname + '#recipe=' + (await packRecipe(r));
}
function recipeText(r) {
  const L = [`【レシピ】${r.name}`];
  if (r.kcal) L.push(`約${r.kcal}kcal（${basisOf(r)}）`);
  if ((r.ingredients || []).length) {
    L.push('', '■材料');
    r.ingredients.forEach(i => L.push(`・${i.name}${i.amount ? '　' + i.amount : ''}`));
  }
  if ((r.steps || []).length) {
    L.push('', '■作り方');
    r.steps.forEach((s, k) => L.push(`${k + 1}. ${s}`));
  }
  if (r.memo) L.push('', '■ポイント', r.memo);
  if (r.instaUrl) L.push('', 'Instagram：' + r.instaUrl);
  return L.join('\n');
}
function SendSheet({
  recipe,
  onClose,
  toast
}) {
  const [busy, setBusy] = useState(false);
  if (!recipe) return null;
  const r = recipe;
  async function sendMessage() {
    setBusy(true);
    try {
      const link = await recipeLink(r);
      await shareOrCopy(`${recipeText(r)}\n\n――――\n献立帖アプリに追加するときはこちら：\n${link}`, r.name, toast);
    } finally {
      setBusy(false);
    }
  }
  async function sendFile() {
    const json = JSON.stringify({
      app: 'kondate-cho',
      version: 2,
      kind: 'recipe',
      exportedAt: new Date().toISOString(),
      recipes: [{
        ...r,
        id: uid(),
        fav: false,
        sample: false,
        createdAt: Date.now()
      }],
      categories: r.categories || []
    });
    const fn = `recipe-${r.name.replace(/[\\/:*?"<>|\s]+/g, '_').slice(0, 30)}.json`;
    try {
      const file = new File([json], fn, {
        type: 'application/json'
      });
      if (navigator.canShare && navigator.canShare({
        files: [file]
      })) {
        await navigator.share({
          files: [file],
          title: r.name
        });
        return;
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
    try {
      downloadText(fn, json);
      toast('ファイルを保存しました。LINEなどで送ってください');
    } catch (e) {
      toast('ファイルを作れませんでした');
    }
  }
  return React.createElement(Sheet, {
    open: true,
    title: "\u3053\u306E\u30EC\u30B7\u30D4\u3092\u9001\u308B",
    onClose: onClose
  }, React.createElement("div", {
    className: "flex flex-col gap-3"
  }, React.createElement("div", {
    className: "flex items-center gap-3 rounded-2xl bg-sunk p-3"
  }, React.createElement(Photo, {
    r: r,
    className: "w-14 h-14 rounded-xl shrink-0"
  }), React.createElement("div", {
    className: "min-w-0"
  }, React.createElement("p", {
    className: "font-bold truncate"
  }, r.name), React.createElement("p", {
    className: "text-xs text-muted tnum"
  }, "\u6750\u6599", (r.ingredients || []).length, "\u54C1\u30FB\u624B\u9806", (r.steps || []).length, "\u3064", r.kcal ? `・${r.kcal}kcal` : ''))), React.createElement("button", {
    disabled: busy,
    onClick: sendMessage,
    className: btnPrimary + ' justify-start text-left'
  }, React.createElement(Icon, {
    name: "MessageCircle",
    size: 20
  }), React.createElement("span", {
    className: "flex flex-col"
  }, React.createElement("span", null, "LINE\u306A\u3069\u3067\u9001\u308B"), React.createElement("span", {
    className: "text-xs font-normal opacity-80"
  }, "\u30EC\u30B7\u30D4\u306E\u6587\u7AE0\u3068\u3001\u732E\u7ACB\u5E16\u306B\u8FFD\u52A0\u3067\u304D\u308B\u30EA\u30F3\u30AF\u3092\u9001\u308A\u307E\u3059"))), React.createElement("button", {
    onClick: sendFile,
    className: btnGhost + ' justify-start text-left py-3'
  }, React.createElement(Icon, {
    name: "FileImage",
    size: 20
  }), React.createElement("span", {
    className: "flex flex-col"
  }, React.createElement("span", {
    className: "font-bold"
  }, "\u5199\u771F\u4ED8\u304D\u3067\u9001\u308B\uFF08\u30D5\u30A1\u30A4\u30EB\uFF09"), React.createElement("span", {
    className: "text-xs text-muted"
  }, "\u53D7\u3051\u53D6\u3063\u305F\u4EBA\u306F\u3001\u8A2D\u5B9A\u306E\u300CJSON\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3080\u300D\u3067\u8FFD\u52A0\u3057\u307E\u3059"))), React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u30EA\u30F3\u30AF\u306B\u306F\u5199\u771F\u306F\u5165\u308A\u307E\u305B\u3093\u3002\u5199\u771F\u3082\u6E21\u3057\u305F\u3044\u3068\u304D\u306F\u30D5\u30A1\u30A4\u30EB\u3067\u9001\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u732E\u7ACB\u5E16\u3092\u4F7F\u3063\u3066\u3044\u306A\u3044\u4EBA\u306B\u3082\u3001\u6587\u7AE0\u3060\u3051\u3067\u30EC\u30B7\u30D4\u304C\u8AAD\u3081\u308B\u3088\u3046\u306B\u9001\u3089\u308C\u307E\u3059\u3002")));
}
function ReceiveSheet({
  recipe,
  onClose,
  onAdd,
  onEditFirst
}) {
  if (!recipe) return null;
  const r = recipe;
  return React.createElement(Sheet, {
    open: true,
    title: "\u9001\u3089\u308C\u3066\u304D\u305F\u30EC\u30B7\u30D4",
    onClose: onClose,
    footer: React.createElement("div", {
      className: "flex gap-2"
    }, React.createElement("button", {
      className: btnGhost + ' flex-1',
      onClick: onEditFirst
    }, React.createElement(Icon, {
      name: "Pencil",
      size: 16
    }), React.createElement("span", {
      className: "whitespace-nowrap"
    }, "\u76F4\u3057\u3066\u8FFD\u52A0")), React.createElement("button", {
      className: btnPrimary + ' flex-[2]',
      onClick: onAdd
    }, React.createElement(Icon, {
      name: "BookmarkPlus",
      size: 18
    }), "\u732E\u7ACB\u5E16\u306B\u8FFD\u52A0"))
  }, React.createElement("div", {
    className: "flex flex-col gap-3"
  }, React.createElement(Photo, {
    r: r,
    className: "w-full aspect-[16/9] rounded-2xl",
    showTag: true
  }), React.createElement("div", null, React.createElement("h3", {
    className: "font-display text-xl font-bold"
  }, r.name), React.createElement("p", {
    className: "text-sm text-muted tnum"
  }, r.kcal ? `約${r.kcal}kcal（${basisOf(r)}）・` : '', "\u6750\u6599", r.ingredients.length, "\u54C1\u30FB\u624B\u9806", r.steps.length, "\u3064")), React.createElement("ul", {
    className: "ticket rounded-2xl divide-y divide-line/70 text-sm"
  }, r.ingredients.slice(0, 8).map((i, k) => React.createElement("li", {
    key: k,
    className: "flex justify-between gap-3 px-4 py-1.5"
  }, React.createElement("span", null, i.name), React.createElement("span", {
    className: "text-muted"
  }, i.amount))), r.ingredients.length > 8 && React.createElement("li", {
    className: "px-4 py-1.5 text-muted"
  }, "\u307B\u304B", r.ingredients.length - 8, "\u54C1"))));
}
const FONT_OPTIONS = [{
  id: 'rounded',
  label: 'まるもじ',
  desc: '丸くてやさしい・いちばん読みやすい',
  family: '"M PLUS Rounded 1c"',
  css: 'M+PLUS+Rounded+1c:wght@400;500;700;800;900'
}, {
  id: 'maru',
  label: 'ふんわり',
  desc: 'やわらかい丸ゴシック',
  family: '"Zen Maru Gothic"',
  css: 'Zen+Maru+Gothic:wght@500;700;900'
}, {
  id: 'kiwi',
  label: 'てがき風',
  desc: '手書きのようなかわいさ',
  family: '"Kiwi Maru"',
  css: 'Kiwi+Maru:wght@400;500'
}, {
  id: 'kaku',
  label: 'くっきり',
  desc: 'すっきりした角ゴシック',
  family: '"Zen Kaku Gothic New"',
  css: 'Zen+Kaku+Gothic+New:wght@400;500;700;900'
}];
function ensureFont(id) {
  const f = FONT_OPTIONS.find(x => x.id === id);
  if (!f || document.getElementById('font-' + id)) return;
  const l = document.createElement('link');
  l.id = 'font-' + id;
  l.rel = 'stylesheet';
  l.href = `https://fonts.googleapis.com/css2?family=${f.css}&display=swap`;
  document.head.appendChild(l);
}
function applyDisplay(d) {
  const r = document.documentElement;
  r.dataset.font = d.font || 'rounded';
  r.dataset.size = d.size || 'normal';
  ensureFont(r.dataset.font);
}
function DisplaySection({
  display,
  setDisplay
}) {
  useEffect(() => {
    FONT_OPTIONS.forEach(f => ensureFont(f.id));
  }, []);
  return React.createElement("section", {
    className: "flex flex-col gap-3"
  }, React.createElement("h3", {
    className: "font-display font-bold flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Type",
    size: 18,
    className: "text-primary"
  }), "\u6587\u5B57\u306E\u7A2E\u985E\u3068\u5927\u304D\u3055"), React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, FONT_OPTIONS.map(f => React.createElement("button", {
    key: f.id,
    onClick: () => setDisplay({
      ...display,
      font: f.id
    }),
    "aria-pressed": display.font === f.id,
    className: `rounded-2xl border p-3 text-left ${display.font === f.id ? 'border-primary bg-primary/10 ring-1 ring-primary' : 'border-line bg-surface'}`
  }, React.createElement("span", {
    className: "block text-lg",
    style: {
      fontFamily: f.family + ',sans-serif',
      fontWeight: 700
    }
  }, f.label), React.createElement("span", {
    className: "block text-sm",
    style: {
      fontFamily: f.family + ',sans-serif'
    }
  }, "\u4ECA\u65E5\u306F\u89AA\u5B50\u4E3C\u3068\u5473\u564C\u6C41"), React.createElement("span", {
    className: "block text-[11px] text-muted mt-0.5"
  }, f.desc)))), React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, [['normal', 'ふつう'], ['large', '大きめ']].map(([k, l]) => React.createElement(Chip, {
    key: k,
    active: (display.size || 'normal') === k,
    onClick: () => setDisplay({
      ...display,
      size: k
    })
  }, "\u6587\u5B57\uFF1A", l))), React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u3053\u306E\u8A2D\u5B9A\u306F\u3053\u306E\u30B9\u30DE\u30DB\u3060\u3051\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002"));
}
function FamilySection({
  backend,
  toast,
  askConfirm,
  localSnapshot
}) {
  const share = LS.get('share', null);
  const saved = LS.get('fbcfg', null);
  const [cfgText, setCfgText] = useState('');
  const [joinText, setJoinText] = useState('');
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');
  const [showQR, setShowQR] = useState(false);
  async function create() {
    setErr('');
    const cfg = parseFirebaseConfig(cfgText || (saved ? JSON.stringify(saved) : ''));
    if (!cfg) {
      setErr('Firebaseの設定を読み取れませんでした。「const firebaseConfig = {…}」の部分をまるごと貼り付けてください。');
      return;
    }
    const code = genFamilyCode();
    const cloud = createCloudBackend(cfg, code);
    setBusy('Firebaseに接続しています…');
    try {
      const t = await withTimeout(cloud.probe(), 20000);
      if (t === 'timeout') throw {
        code: 'unavailable'
      };
      setBusy('レシピをアップロードしています…');
      const snap = localSnapshot();
      await cloud.uploadAll(snap);
      LS.set('fbcfg', cfg);
      LS.set('share', {
        cfg,
        code
      });
      LS.set('justCreated', true);
      location.reload();
    } catch (e) {
      console.error(e);
      setErr(fbErrorText(e));
      setBusy('');
    }
  }
  async function joinFrom(text) {
    const inv = parseInvite(text);
    if (!inv) {
      setErr('招待リンクを読み取れませんでした。送られてきたリンクをまるごと貼り付けてください。');
      return;
    }
    location.hash = 'join=' + text.split('join=')[1];
    location.reload();
  }
  if (backend.kind === 'cloud' && share) {
    const link = inviteLink(share.cfg, share.code);
    return React.createElement("section", {
      className: "flex flex-col gap-3"
    }, React.createElement("h3", {
      className: "font-display font-bold flex items-center gap-2"
    }, React.createElement(Icon, {
      name: "Users",
      size: 18,
      className: "text-primary"
    }), "\u5BB6\u65CF\u3067\u5171\u6709"), React.createElement("div", {
      className: "rounded-2xl bg-primary/10 border border-primary/30 p-4 flex flex-col gap-1"
    }, React.createElement("p", {
      className: "font-bold flex items-center gap-2"
    }, React.createElement(Icon, {
      name: "Cloud",
      size: 16
    }), "\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u3092\u5171\u6709\u4E2D"), React.createElement("p", {
      className: "text-xs text-muted"
    }, "\u30EC\u30B7\u30D4\u30FB\u732E\u7ACB\u30FB\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u304C\u3001\u53C2\u52A0\u3057\u3066\u3044\u308B\u5168\u54E1\u306E\u753B\u9762\u306B\u3059\u3050\u53CD\u6620\u3055\u308C\u307E\u3059\u3002\u30AA\u30D5\u30E9\u30A4\u30F3\u4E2D\u306E\u5909\u66F4\u306F\u3001\u3064\u306A\u304C\u3063\u305F\u3068\u304D\u306B\u540C\u671F\u3055\u308C\u307E\u3059\u3002"), React.createElement("p", {
      className: "text-xs text-muted mt-1 tnum"
    }, "\u5BB6\u65CF\u30B3\u30FC\u30C9\uFF1A", React.createElement("span", {
      className: "font-mono text-ink select-all"
    }, share.code))), React.createElement("p", {
      className: "text-sm"
    }, "\u5BB6\u65CF\u3092\u62DB\u5F85\u3059\u308B\u306B\u306F\u3001\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u9001\u308B\u304B\u3001QR\u30B3\u30FC\u30C9\u3092\u5BB6\u65CF\u306E\u30B9\u30DE\u30DB\u3067\u8AAD\u307F\u53D6\u3063\u3066\u3082\u3089\u3044\u307E\u3059\u3002"), React.createElement("div", {
      className: "grid grid-cols-2 gap-2"
    }, React.createElement("button", {
      className: btnPrimary,
      onClick: () => shareOrCopy(`わたしの献立帖に招待します。このリンクを開くと参加できます。\n${link}`, '献立帖への招待', toast)
    }, React.createElement(Icon, {
      name: "Send",
      size: 16
    }), "\u30EA\u30F3\u30AF\u3092\u9001\u308B"), React.createElement("button", {
      className: btnGhost,
      onClick: () => setShowQR(!showQR)
    }, React.createElement(Icon, {
      name: "QrCode",
      size: 16
    }), "QR\u30B3\u30FC\u30C9")), showQR && React.createElement("div", {
      className: "flex flex-col items-center gap-2 rounded-2xl bg-white p-4"
    }, React.createElement("img", {
      src: qrDataURL(link),
      alt: "\u62DB\u5F85\u7528QR\u30B3\u30FC\u30C9",
      className: "w-56 h-56",
      style: {
        imageRendering: 'pixelated'
      }
    }), React.createElement("p", {
      className: "text-xs text-neutral-600"
    }, "\u5BB6\u65CF\u306E\u30B9\u30DE\u30DB\u306E\u30AB\u30E1\u30E9\u3067\u8AAD\u307F\u53D6\u3063\u3066\u304F\u3060\u3055\u3044")), React.createElement("p", {
      className: "text-xs text-muted"
    }, "\u3053\u306E\u30EA\u30F3\u30AF\u3092\u77E5\u3063\u3066\u3044\u308B\u4EBA\u306F\u8AB0\u3067\u3082\u30EC\u30B7\u30D4\u3092\u898B\u3066\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002\u5BB6\u65CF\u4EE5\u5916\u306B\u306F\u9001\u3089\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"), React.createElement("button", {
      className: btnGhost + ' text-sm',
      onClick: () => askConfirm({
        title: 'この端末で共有をやめる',
        ok: '共有をやめる',
        body: 'この端末は「端末内のみ」に戻ります。いまの家族のレシピ・献立・買い物リストはこの端末にコピーして残します。家族側のデータはそのまま残り、ほかの家族は引き続き使えます。',
        onOk: async () => {
          try {
            const s = backend.snapshot ? backend.snapshot() : null;
            if (s) {
              await store.init();
              for (const r of s.recipes) await store.put(r);
              for (const [k, v] of Object.entries(s.meta)) await store.setMeta(k, v);
              await store.setMeta('shopping', s.shopping);
              await store.setMeta('seeded', true);
            }
          } catch (e) {}
          LS.del('share');
          location.reload();
        }
      })
    }, React.createElement(Icon, {
      name: "LogOut",
      size: 16
    }), "\u3053\u306E\u7AEF\u672B\u3067\u5171\u6709\u3092\u3084\u3081\u308B"));
  }
  return React.createElement("section", {
    className: "flex flex-col gap-3"
  }, React.createElement("h3", {
    className: "font-display font-bold flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Users",
    size: 18,
    className: "text-primary"
  }), "\u5BB6\u65CF\u3067\u5171\u6709"), React.createElement("p", {
    className: "text-sm text-muted"
  }, "\u3044\u307E\u306F\u300C\u3053\u306E\u7AEF\u672B\u306E\u307F\u300D\u306B\u4FDD\u5B58\u3057\u3066\u3044\u307E\u3059\u3002\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u3092\u3064\u304F\u308B\u3068\u3001\u30EC\u30B7\u30D4\u30FB\u732E\u7ACB\u30FB\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u3092\u5BB6\u65CF\u5168\u54E1\u3067\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306B\u5171\u6709\u3067\u304D\u307E\u3059\uFF08\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u54C1\u3082\u3059\u3050\u53CD\u6620\uFF09\u3002"), err && React.createElement("p", {
    className: "rounded-xl bg-danger/10 text-danger text-sm p-3"
  }, err), busy ? React.createElement("p", {
    className: "rounded-xl bg-sunk text-sm p-3 flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Loader",
    size: 16,
    className: "animate-spin"
  }), busy) : React.createElement(React.Fragment, null, React.createElement("details", {
    className: "rounded-2xl border border-line bg-surface p-4",
    open: !!saved
  }, React.createElement("summary", {
    className: "font-bold cursor-pointer"
  }, "\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u3092\u3064\u304F\u308B\uFF08\u306F\u3058\u3081\u3066\u306E\u4EBA\uFF09"), React.createElement("div", {
    className: "flex flex-col gap-2 mt-3"
  }, React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u624B\u9806\u66F8\u306E\u3068\u304A\u308A\u306BFirebase\u3067\u4F5C\u3063\u305F\u300CfirebaseConfig\u300D\u3092\u8CBC\u308A\u4ED8\u3051\u307E\u3059\u3002\u3053\u306E\u7AEF\u672B\u306E\u30EC\u30B7\u30D4\u30FB\u732E\u7ACB\u30FB\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u304C\u305D\u306E\u307E\u307E\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u306B\u5165\u308A\u307E\u3059\u3002"), React.createElement("textarea", {
    id: "fbcfg",
    rows: 6,
    value: cfgText || (saved ? JSON.stringify(saved, null, 1) : ''),
    onChange: e => setCfgText(e.target.value),
    className: field + ' text-xs font-mono',
    placeholder: 'const firebaseConfig = {\n  apiKey: "...",\n  authDomain: "...",\n  projectId: "...",\n  ...\n};'
  }), React.createElement("button", {
    className: btnPrimary,
    onClick: create
  }, React.createElement(Icon, {
    name: "CloudUpload",
    size: 16
  }), "\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u3092\u3064\u304F\u308B"))), React.createElement("details", {
    className: "rounded-2xl border border-line bg-surface p-4"
  }, React.createElement("summary", {
    className: "font-bold cursor-pointer"
  }, "\u62DB\u5F85\u3055\u308C\u3066\u53C2\u52A0\u3059\u308B"), React.createElement("div", {
    className: "flex flex-col gap-2 mt-3"
  }, React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u9001\u3089\u308C\u3066\u304D\u305F\u30EA\u30F3\u30AF\u3092\u958B\u3051\u3070\u81EA\u52D5\u3067\u53C2\u52A0\u753B\u9762\u306B\u306A\u308A\u307E\u3059\u3002\u3046\u307E\u304F\u958B\u3051\u306A\u3044\u3068\u304D\u306F\u3001\u30EA\u30F3\u30AF\u3092\u3053\u3053\u306B\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002"), React.createElement("textarea", {
    id: "joinlink",
    rows: 3,
    value: joinText,
    onChange: e => setJoinText(e.target.value),
    className: field + ' text-xs font-mono',
    placeholder: "https://\u2026#join=\u2026"
  }), React.createElement("button", {
    className: btnGhost,
    onClick: () => joinFrom(joinText)
  }, React.createElement(Icon, {
    name: "LogIn",
    size: 16
  }), "\u53C2\u52A0\u3059\u308B")))));
}
function JoinSheet({
  invite,
  onCancel,
  localSnapshot
}) {
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');
  const mine = (localSnapshot().recipes || []).filter(r => !r.sample);
  const [includeMine, setIncludeMine] = useState(true);
  async function join() {
    setErr('');
    setBusy('家族の献立帖に接続しています…');
    const cloud = createCloudBackend(invite.cfg, invite.code);
    try {
      const t = await withTimeout(cloud.probe(), 20000);
      if (t === 'timeout') throw {
        code: 'unavailable'
      };
      if (includeMine && mine.length) {
        setBusy('あなたのレシピを追加しています…');
        await cloud.uploadAll({
          recipes: mine
        });
      }
      LS.set('share', {
        cfg: invite.cfg,
        code: invite.code
      });
      history.replaceState(null, '', location.pathname + location.search);
      location.reload();
    } catch (e) {
      console.error(e);
      setErr(fbErrorText(e));
      setBusy('');
    }
  }
  return React.createElement(Sheet, {
    open: true,
    title: "\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u306B\u53C2\u52A0",
    onClose: onCancel,
    footer: busy ? React.createElement("p", {
      className: "text-sm flex items-center gap-2 py-2"
    }, React.createElement(Icon, {
      name: "Loader",
      size: 16,
      className: "animate-spin"
    }), busy) : React.createElement("div", {
      className: "flex gap-2"
    }, React.createElement("button", {
      className: btnGhost + ' flex-1',
      onClick: onCancel
    }, "\u3084\u3081\u308B"), React.createElement("button", {
      className: btnPrimary + ' flex-[2]',
      onClick: join
    }, React.createElement(Icon, {
      name: "Users",
      size: 18
    }), "\u53C2\u52A0\u3059\u308B"))
  }, React.createElement("div", {
    className: "flex flex-col gap-3"
  }, React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-primary text-pink flex items-center justify-center"
  }, React.createElement(Icon, {
    name: "Users",
    size: 28
  })), React.createElement("p", null, "\u62DB\u5F85\u30EA\u30F3\u30AF\u304B\u3089\u958B\u304D\u307E\u3057\u305F\u3002\u53C2\u52A0\u3059\u308B\u3068\u3001\u5BB6\u65CF\u306E\u30EC\u30B7\u30D4\u30FB1\u9031\u9593\u732E\u7ACB\u30FB\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u3092\u3053\u306E\u7AEF\u672B\u3067\u3082\u898B\u305F\u308A\u7DE8\u96C6\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002"), mine.length > 0 && React.createElement("label", {
    className: "flex items-start gap-2 text-sm rounded-xl bg-sunk p-3 cursor-pointer"
  }, React.createElement("input", {
    id: "include-mine",
    type: "checkbox",
    checked: includeMine,
    onChange: e => setIncludeMine(e.target.checked),
    className: "mt-1 w-4 h-4"
  }), React.createElement("span", null, "\u3053\u306E\u7AEF\u672B\u306B\u4FDD\u5B58\u3057\u3066\u3044\u308B\u81EA\u5206\u306E\u30EC\u30B7\u30D4\uFF08", mine.length, "\u4EF6\uFF09\u3082\u5BB6\u65CF\u306E\u732E\u7ACB\u5E16\u306B\u8FFD\u52A0\u3059\u308B")), err && React.createElement("p", {
    className: "rounded-xl bg-danger/10 text-danger text-sm p-3"
  }, err)));
}
function Settings({
  display,
  setDisplay,
  open,
  onClose,
  categories,
  setCategories,
  removeCategory,
  exportData,
  importData,
  backend,
  removeSamples,
  hasSamples,
  askConfirm,
  toast,
  localSnapshot
}) {
  const [nc, setNc] = useState('');
  const [paste, setPaste] = useState('');
  const [exportText, setExportText] = useState('');
  const fileRef = useRef();
  async function doExport() {
    const r = await exportData();
    if (r && r.fallbackText) setExportText(r.fallbackText);
  }
  function onFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => importData(String(fr.result));
    fr.readAsText(file);
    e.target.value = '';
  }
  const addC = () => {
    if (nc.trim()) {
      setCategories([...new Set([...categories, nc.trim()])]);
      setNc('');
    }
  };
  return React.createElement(Sheet, {
    open: open,
    onClose: onClose,
    title: "\u8A2D\u5B9A\u30FB\u5171\u6709\u30FB\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"
  }, React.createElement("div", {
    className: "flex flex-col gap-7"
  }, backend.kind === 'local' && !backend.ok && React.createElement("p", {
    className: "rounded-xl bg-danger/10 text-danger text-sm p-3"
  }, "\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u4FDD\u5B58\u9818\u57DF\u304C\u4F7F\u3048\u306A\u3044\u305F\u3081\u3001\u30DA\u30FC\u30B8\u3092\u9589\u3058\u308B\u3068\u30C7\u30FC\u30BF\u304C\u6D88\u3048\u307E\u3059\u3002\u3053\u307E\u3081\u306B\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), React.createElement(FamilySection, {
    backend: backend,
    toast: toast,
    askConfirm: askConfirm,
    localSnapshot: localSnapshot
  }), React.createElement(DisplaySection, {
    display: display,
    setDisplay: setDisplay
  }), React.createElement("section", {
    className: "flex flex-col gap-3"
  }, React.createElement("h3", {
    className: "font-display font-bold flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Tags",
    size: 18,
    className: "text-primary"
  }), "\u30AB\u30C6\u30B4\u30EA"), React.createElement("ul", {
    className: "flex flex-wrap gap-2"
  }, categories.map(c => React.createElement("li", {
    key: c,
    className: "inline-flex items-center gap-1 rounded-full border border-line bg-surface pl-3 pr-1.5 py-1 text-sm"
  }, c, React.createElement("button", {
    "aria-label": `${c}を削除`,
    onClick: () => askConfirm({
      title: `「${c}」を削除`,
      body: 'レシピからもこのカテゴリが外れます。レシピ自体は残ります。',
      onOk: () => removeCategory(c)
    }),
    className: "p-0.5 text-muted hover:text-danger"
  }, React.createElement(Icon, {
    name: "X",
    size: 14
  }))))), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("input", {
    id: "newcat",
    value: nc,
    onChange: e => setNc(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') addC();
    },
    className: field,
    placeholder: "\u4F8B\uFF1A\u304A\u3064\u307E\u307F"
  }), React.createElement("button", {
    onClick: addC,
    className: btnGhost + ' shrink-0'
  }, React.createElement(Icon, {
    name: "Plus",
    size: 16
  }), "\u8FFD\u52A0"))), React.createElement("section", {
    className: "flex flex-col gap-3"
  }, React.createElement("h3", {
    className: "font-display font-bold flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "HardDriveDownload",
    size: 18,
    className: "text-primary"
  }), "\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"), React.createElement("p", {
    className: "text-sm text-muted"
  }, "\u30EC\u30B7\u30D4\uFF08\u5199\u771F\u8FBC\u307F\uFF09\u30FB\u30AB\u30C6\u30B4\u30EA\u30FB\u732E\u7ACB\u30FB\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u3092JSON\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002", backend.kind === 'cloud' ? '家族共有中も、念のため月に1回ほど保存しておくと安心です。' : '機種変更やブラウザのデータ削除の前に。'), React.createElement("button", {
    onClick: doExport,
    className: btnPrimary
  }, React.createElement(Icon, {
    name: "Download",
    size: 18
  }), "JSON\u3067\u66F8\u304D\u51FA\u3059"), exportText && React.createElement("div", {
    className: "flex flex-col gap-2"
  }, React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u30D5\u30A1\u30A4\u30EB\u4FDD\u5B58\u304C\u3067\u304D\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u5185\u5BB9\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002\u30B3\u30D4\u30FC\u3057\u3066\u30E1\u30E2\u7B49\u306B\u4FDD\u5B58\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), React.createElement("textarea", {
    id: "export-text",
    readOnly: true,
    rows: 4,
    value: exportText,
    onFocus: e => e.target.select(),
    className: field + ' text-xs font-mono'
  }), React.createElement("button", {
    className: btnGhost,
    onClick: async () => {
      try {
        await navigator.clipboard.writeText(exportText);
        toast('コピーしました');
      } catch (e) {
        const t = document.getElementById('export-text');
        t && t.select();
      }
    }
  }, React.createElement(Icon, {
    name: "Copy",
    size: 16
  }), "\u30B3\u30D4\u30FC")), React.createElement("button", {
    onClick: () => fileRef.current && fileRef.current.click(),
    className: btnGhost
  }, React.createElement(Icon, {
    name: "Upload",
    size: 18
  }), "JSON\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3080"), React.createElement("input", {
    ref: fileRef,
    id: "import-file",
    type: "file",
    accept: "application/json,.json",
    className: "hidden",
    onChange: onFile
  }), React.createElement("details", {
    className: "text-sm"
  }, React.createElement("summary", {
    className: "cursor-pointer text-muted"
  }, "\u8CBC\u308A\u4ED8\u3051\u3066\u5FA9\u5143\u3059\u308B"), React.createElement("div", {
    className: "flex flex-col gap-2 mt-2"
  }, React.createElement("textarea", {
    id: "import-paste",
    rows: 4,
    value: paste,
    onChange: e => setPaste(e.target.value),
    className: field + ' text-xs font-mono',
    placeholder: "{\"app\":\"kondate-cho\",...}"
  }), React.createElement("button", {
    className: btnGhost,
    onClick: () => {
      importData(paste);
      setPaste('');
    }
  }, "\u3053\u306E\u5185\u5BB9\u3067\u5FA9\u5143"))), React.createElement("p", {
    className: "text-xs text-muted"
  }, "\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3084\u3001\u9001\u3089\u308C\u3066\u304D\u305F\u30EC\u30B7\u30D4\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u3059\u3002\u540C\u3058\u30EC\u30B7\u30D4\u306F\u4E0A\u66F8\u304D\u3001\u65B0\u3057\u3044\u30EC\u30B7\u30D4\u306F\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002", backend.kind === 'cloud' ? '家族共有中は家族全員のデータに反映されます。' : '')), hasSamples && React.createElement("section", {
    className: "flex flex-col gap-2"
  }, React.createElement("h3", {
    className: "font-display font-bold"
  }, "\u898B\u672C\u30EC\u30B7\u30D4"), React.createElement("p", {
    className: "text-sm text-muted"
  }, "\u6700\u521D\u306B\u5165\u3063\u3066\u3044\u308B\u300C\u898B\u672C\u300D\u30DE\u30FC\u30AF\u306E\u30EC\u30B7\u30D4\u3092\u307E\u3068\u3081\u3066\u6D88\u305B\u307E\u3059\u3002"), React.createElement("button", {
    className: btnGhost,
    onClick: () => askConfirm({
      title: '見本レシピを削除',
      body: '「見本」マークのついたレシピをすべて削除します。',
      onOk: removeSamples
    })
  }, React.createElement(Icon, {
    name: "Trash2",
    size: 16
  }), "\u898B\u672C\u3092\u3059\u3079\u3066\u524A\u9664")), React.createElement("p", {
    className: "text-xs text-muted flex items-center gap-1.5"
  }, React.createElement(Icon, {
    name: "Database",
    size: 14
  }), "\u4FDD\u5B58\u5148\uFF1A", backend.kind === 'cloud' ? '家族共有（Firebase）＋この端末のキャッシュ' : backend.ok ? 'この端末のブラウザ（IndexedDB）' : '一時メモリ')));
}
function App() {
  const backend = useMemo(() => {
    const s = LS.get('share', null);
    return s && s.cfg && s.code ? createCloudBackend(s.cfg, s.code) : createLocalBackend();
  }, []);
  const [ready, setReady] = useState(false);
  const [cloudErr, setCloudErr] = useState('');
  const [online, setOnline] = useState(navigator.onLine);
  const [recipes, setRecipes] = useState([]);
  const [meta, setMeta] = useState({});
  const [shopRaw, setShopRaw] = useState([]);
  const [tab, setTab] = useState(LS.get('tab', 'today'));
  const [display, setDisplayS] = useState(() => LS.get('display', {
    font: 'rounded',
    size: 'normal'
  }));
  const [noteSheet, setNoteSheet] = useState(null);
  const [detail, setDetail] = useState(null);
  const [editing, setEditing] = useState(null);
  const [settings, setSettings] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const tRef = useRef();
  const [invite, setInvite] = useState(() => parseInvite(location.hash));
  const [sending, setSending] = useState(null);
  const [received, setReceived] = useState(null);
  useEffect(() => {
    const check = async () => {
      const c = recipeCodeIn(location.hash);
      if (!c) return;
      const r = await unpackRecipe(c);
      history.replaceState(null, '', location.pathname + location.search);
      if (r) setReceived(r);else toast('レシピのリンクを読み取れませんでした');
    };
    check();
    addEventListener('hashchange', check);
    return () => removeEventListener('hashchange', check);
  }, []);
  function addReceived(edit) {
    const r = received;
    setReceived(null);
    const cats = [...new Set([...categories, ...r.categories])];
    if (cats.length !== categories.length) setCategories(cats);
    const base = {
      ...r,
      id: uid(),
      photo: '',
      fav: false,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    if (edit) {
      setEditing({
        ...emptyForm(),
        ...base,
        id: null,
        kcal: r.kcal ? String(r.kcal) : '',
        ingredients: r.ingredients.length ? r.ingredients : [{
          name: '',
          amount: ''
        }],
        steps: r.steps.length ? r.steps : ['']
      });
      go('new');
    } else {
      wr(backend.putRecipe(base));
      toast(`「${r.name}」を献立帖に追加しました`);
      go('list');
    }
  }
  const snapRef = useRef({
    recipes: [],
    meta: {},
    shopping: []
  });
  const toast = useCallback(m => {
    setToastMsg(m);
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToastMsg(''), 2800);
  }, []);
  const categories = meta.categories || DEFAULT_CATS;
  const plan = meta.plan || {
    mode: 'balanced',
    fridge: [],
    days: []
  };
  const offDays = meta.offDays || [];
  const slots = meta.slots || plan.slots || ['主菜'];
  const notes = meta.notes || {};
  const deviceId = useMemo(() => {
    let d = LS.get('device', '');
    if (!d) {
      d = uid();
      LS.set('device', d);
    }
    return d;
  }, []);
  const todayKey = dateKey(Date.now());
  const todayNote = notes[todayKey];
  const [seenAt, setSeenAt] = useState(() => LS.get('noteSeen', 0));
  const unseen = !!(todayNote && todayNote.by !== deviceId && (todayNote.at || 0) > seenAt);
  const shopping = useMemo(() => [...shopRaw].sort((a, b) => (a.order || 0) - (b.order || 0)), [shopRaw]);
  snapRef.current = {
    recipes,
    meta,
    shopping
  };
  backend.snapshot = backend.snapshot || (() => snapRef.current);
  const wr = (p, msg = '保存できませんでした。容量や通信を確認してください。') => Promise.resolve(p).catch(e => {
    console.error(e);
    toast(backend.kind === 'cloud' ? fbErrorText(e) : msg);
  });
  useEffect(() => {
    const on = () => setOnline(true),
      off = () => setOnline(false);
    addEventListener('online', on);
    addEventListener('offline', off);
    return () => {
      removeEventListener('online', on);
      removeEventListener('offline', off);
    };
  }, []);
  useEffect(() => {
    let stop = () => {};
    let alive = true;
    const h = {
      recipes: setRecipes,
      meta: setMeta,
      shopping: setShopRaw,
      error: e => {
        console.error(e);
        setCloudErr(fbErrorText(e));
        setReady(true);
      },
      ready: () => setReady(true)
    };
    (async () => {
      try {
        stop = await backend.start(h);
      } catch (e) {
        h.error(e);
        return;
      }
      if (backend.kind === 'local') {
        const s = backend.snapshot();
        if (!s.meta.seeded && s.recipes.length === 0) {
          for (const r of SAMPLES) await backend.putRecipe(r);
          await backend.setMeta('seeded', true);
          await backend.setMeta('offDays', []);
          await backend.setMeta('slots', ['主菜', '副菜']);
          const p = {
            mode: 'balanced',
            fridge: [],
            slots: ['主菜', '副菜'],
            days: planWeek({
              recipes: SAMPLES,
              mode: 'balanced',
              slots: ['主菜', '副菜'],
              favBoost: true,
              off: []
            }),
            weekStart: thisMonday(),
            createdAt: Date.now()
          };
          await backend.setMeta('notes', {
            [dateKey(Date.now())]: {
              text: '（見本）ポン酢かソースをかけてね！\nご飯は炊飯器にあります',
              at: Date.now(),
              by: 'sample',
              name: ''
            }
          });
          await backend.setMeta('plan', p);
          await backend.shopReplace(buildShopping(p, SAMPLES, []));
        }
        setReady(true);
      } else {
        setTimeout(() => alive && setReady(true), 4000);
        if (LS.get('justCreated', false)) {
          LS.del('justCreated');
          setSettings(true);
          toast('家族の献立帖ができました。家族を招待しましょう');
        }
      }
    })();
    return () => {
      alive = false;
      stop && stop();
    };
  }, []);
  const setCategories = c => wr(backend.setMeta('categories', c));
  const setPlan = p => {
    setMeta(m => ({
      ...m,
      plan: p
    }));
    wr(backend.setMeta('plan', p));
  };
  const setOffDays = o => {
    setMeta(m => ({
      ...m,
      offDays: o
    }));
    wr(backend.setMeta('offDays', o));
  };
  const setSlots = v => {
    setMeta(m => ({
      ...m,
      slots: v
    }));
    wr(backend.setMeta('slots', v));
  };
  const setDisplay = d => {
    setDisplayS(d);
    LS.set('display', d);
    applyDisplay(d);
  };
  function setNote(key, val) {
    const cutoff = dateKey(Date.now() - 30 * 864e5);
    const next = {};
    Object.entries(notes).forEach(([k, v]) => {
      if (k >= cutoff) next[k] = v;
    });
    if (val) next[key] = val;else delete next[key];
    setMeta(m => ({
      ...m,
      notes: next
    }));
    wr(backend.setMeta('notes', next));
  }
  useEffect(() => {
    if (tab === 'today' && todayNote && (todayNote.at || 0) > seenAt) {
      setSeenAt(todayNote.at);
      LS.set('noteSeen', todayNote.at);
    }
  }, [tab, todayNote && todayNote.at]);
  const lastToast = useRef(0);
  useEffect(() => {
    if (unseen && tab !== 'today' && lastToast.current !== todayNote.at) {
      lastToast.current = todayNote.at;
      toast(`${todayNote.name ? todayNote.name + 'から' : ''}今日の伝えたいことが届きました`);
    }
  }, [unseen, todayNote && todayNote.at]);
  function shareToday() {
    const now = Date.now();
    const t = new Date(now);
    const i = planDayIndex(plan, now);
    const d = i >= 0 ? normDay(plan.days[i]) : null;
    const L = [`【今日の献立】${t.getMonth() + 1}/${t.getDate()}（${DAYS[(t.getDay() + 6) % 7]}）`];
    if (d && !d.off) L.push(menuText(d, recipes) || '（まだ決まっていません）');else L.push(d ? '今日は作らない日です' : '（まだ決まっていません）');
    if (todayNote && todayNote.text) L.push('', `■伝えたいこと${todayNote.name ? '（' + todayNote.name + 'より）' : ''}`, todayNote.text);
    L.push('', '献立帖で見る：' + location.origin + location.pathname);
    shareOrCopy(L.join('\n'), '今日の献立', toast);
  }
  function setShopping(next) {
    const base = Date.now();
    next = next.map((it, i) => ({
      ...it,
      order: it.order != null ? it.order : base + i
    }));
    if (backend.kind === 'local') {
      wr(backend.shopReplace(next));
      return;
    }
    setShopRaw(next);
    const prev = new Map(shopRaw.map(i => [i.id, i]));
    const ids = new Set(next.map(i => i.id));
    const removed = shopRaw.filter(i => !ids.has(i.id)).map(i => i.id);
    if (removed.length) wr(backend.shopDel(removed));
    next.forEach(i => {
      const p = prev.get(i.id);
      if (!p || JSON.stringify(p) !== JSON.stringify(i)) wr(backend.shopSet(i));
    });
  }
  const go = t => {
    setTab(t);
    window.scrollTo({
      top: 0
    });
    LS.set('tab', t);
  };
  async function saveRecipe(f) {
    const prev = recipes.find(r => r.id === f.id);
    const r = {
      ...prev,
      ...f,
      id: f.id || uid(),
      createdAt: prev ? prev.createdAt : Date.now(),
      updatedAt: Date.now()
    };
    delete r.kcalEstimated;
    if (prev && prev.sample) delete r.sample;
    if (backend.kind === 'cloud' && r.photo && r.photo.length > 900000) {
      toast('写真が大きすぎます。別の写真を選んでください');
      return;
    }
    wr(backend.putRecipe(r));
    setEditing(null);
    toast(prev ? '変更を保存しました' : 'レシピを保存しました');
    go('list');
    setDetail(r);
  }
  function deleteRecipe(r) {
    setConfirm({
      title: `「${r.name}」を削除`,
      body: backend.kind === 'cloud' ? '家族全員の献立帖から削除されます。元に戻せません。' : 'このレシピを削除します。元に戻せません（バックアップがあれば復元できます）。',
      onOk: () => {
        wr(backend.delRecipe(r.id));
        setDetail(null);
        toast('削除しました');
      }
    });
  }
  function toggleFav(r) {
    const n = {
      ...r,
      fav: !r.fav
    };
    wr(backend.putRecipe(n));
    toast(n.fav ? 'お気に入りに追加しました' : 'お気に入りから外しました');
  }
  function addCategory(c) {
    if (!categories.includes(c)) setCategories([...categories, c]);
  }
  function removeCategory(c) {
    setCategories(categories.filter(x => x !== c));
    recipes.filter(r => (r.categories || []).includes(c)).forEach(r => wr(backend.putRecipe({
      ...r,
      categories: r.categories.filter(x => x !== c)
    })));
  }
  function removeSamples() {
    recipes.filter(r => r.sample).forEach(r => wr(backend.delRecipe(r.id)));
    toast('見本を削除しました');
  }
  function saveGeneric(g) {
    const f = {
      ...emptyForm(),
      name: g.name,
      ingredients: g.ingredients.map(i => ({
        ...i
      })),
      steps: [...g.steps],
      kcal: String(g.kcal),
      categories: g.categories.filter(c => categories.includes(c))
    };
    setDetail(null);
    setEditing(f);
    go('new');
  }
  async function exportData() {
    const data = {
      app: 'kondate-cho',
      version: 2,
      exportedAt: new Date().toISOString(),
      recipes,
      categories,
      plan,
      shopping,
      offDays,
      slots,
      notes
    };
    const json = JSON.stringify(data);
    const d = new Date();
    const fn = `kondate-backup-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}.json`;
    try {
      const file = new File([json], fn, {
        type: 'application/json'
      });
      if (navigator.canShare && navigator.canShare({
        files: [file]
      }) && /iPhone|iPad|Android/i.test(navigator.userAgent)) {
        await navigator.share({
          files: [file],
          title: '献立帖のバックアップ'
        });
        return {};
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return {};
    }
    try {
      downloadText(fn, json);
      toast('バックアップを保存しました');
      return {};
    } catch (e) {
      return {
        fallbackText: json
      };
    }
  }
  function importData(text) {
    let d;
    try {
      d = JSON.parse(text);
    } catch (e) {
      toast('JSONとして読めませんでした。ファイルを確認してください。');
      return;
    }
    if (!d || !Array.isArray(d.recipes)) {
      toast('献立帖のバックアップではないようです');
      return;
    }
    let n = 0;
    for (const r of d.recipes) {
      if (!r || !r.id || !r.name) continue;
      wr(backend.putRecipe(r));
      n++;
    }
    if (Array.isArray(d.categories)) setCategories([...new Set([...categories, ...d.categories])]);
    if (d.plan && Array.isArray(d.plan.days)) setPlan(d.plan);
    if (Array.isArray(d.shopping)) setShopping(d.shopping);
    if (Array.isArray(d.offDays)) setOffDays(d.offDays);
    if (Array.isArray(d.slots)) setSlots(d.slots);
    if (d.notes && typeof d.notes === 'object') {
      const nx = {
        ...notes,
        ...d.notes
      };
      setMeta(m => ({
        ...m,
        notes: nx
      }));
      wr(backend.setMeta('notes', nx));
    }
    toast(d.kind === 'recipe' ? `「${(d.recipes[0] || {}).name || 'レシピ'}」を追加しました` : `${n}件のレシピを復元しました`);
    setSettings(false);
  }
  function makeList() {
    setShopping(buildShopping(plan, recipes, shopping).map(i => ({
      ...i,
      order: undefined
    })));
    toast('買い物リストを作りました');
    go('shop');
  }
  const detailObj = detail && !detail.generic ? recipes.find(r => r.id === detail.id) || null : detail;
  const shopLeft = shopping.filter(i => !i.checked).length;
  const TABS = [['today', 'Sun', '今日'], ['list', 'BookOpen', 'レシピ'], ['new', 'PlusCircle', '登録'], ['plan', 'CalendarDays', '献立'], ['shop', 'ShoppingCart', '買い物']];
  const titles = {
    today: '今日の献立',
    list: 'レシピ一覧',
    new: editing && editing.id ? 'レシピを編集' : '新規登録',
    plan: '1週間献立',
    shop: '買い物リスト'
  };
  if (!ready) return React.createElement("div", {
    className: "boot"
  }, "\u732E\u7ACB\u5E16\u3092\u3072\u3089\u3044\u3066\u3044\u307E\u3059\u2026");
  return React.createElement("div", {
    className: "min-h-full"
  }, React.createElement("header", {
    className: "sticky z-30 bg-bg/95 backdrop-blur border-b border-line",
    style: {
      top: 'env(safe-area-inset-top,0px)'
    }
  }, React.createElement("div", {
    className: "gutter max-w-md mx-auto flex items-center justify-between py-3"
  }, React.createElement("div", {
    className: "flex items-center gap-2.5 min-w-0"
  }, React.createElement("span", {
    className: "w-9 h-9 rounded-full bg-primary text-pink flex items-center justify-center shrink-0"
  }, React.createElement(Icon, {
    name: "ChefHat",
    size: 20
  })), React.createElement("div", {
    className: "leading-tight min-w-0"
  }, React.createElement("p", {
    className: "text-[10px] text-muted label flex items-center gap-1"
  }, backend.kind === 'cloud' ? React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: online ? 'Users' : 'CloudOff',
    size: 11
  }), online ? '家族で共有中' : 'オフライン・後で同期') : 'MY KITCHEN NOTE'), React.createElement("h1", {
    className: "font-display text-lg font-black truncate"
  }, titles[tab]))), React.createElement("button", {
    onClick: () => setSettings(true),
    className: "p-2.5 rounded-full hover:bg-sunk",
    "aria-label": "\u8A2D\u5B9A\u30FB\u5171\u6709\u30FB\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"
  }, React.createElement(Icon, {
    name: "Settings",
    size: 20
  })))), cloudErr && React.createElement("div", {
    className: "gutter max-w-md mx-auto pt-3"
  }, React.createElement("div", {
    className: "rounded-xl bg-danger/10 text-danger text-sm p-3 flex flex-col gap-2"
  }, React.createElement("p", null, cloudErr), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("button", {
    className: "underline",
    onClick: () => location.reload()
  }, "\u518D\u8AAD\u307F\u8FBC\u307F"), React.createElement("button", {
    className: "underline",
    onClick: () => setConfirm({
      title: '端末内モードに戻す',
      ok: '戻す',
      body: 'この端末の共有設定を外して「端末内のみ」に戻します。家族側のデータは消えません。',
      onOk: () => {
        LS.del('share');
        location.reload();
      }
    })
  }, "\u7AEF\u672B\u5185\u30E2\u30FC\u30C9\u306B\u623B\u3059")))), React.createElement("main", {
    className: "gutter max-w-md mx-auto pt-4",
    style: {
      paddingBottom: 'calc(96px + env(safe-area-inset-bottom,0px))'
    }
  }, tab === 'today' && React.createElement(TodayView, {
    plan: plan,
    recipes: recipes,
    notes: notes,
    onOpen: setDetail,
    goPlan: () => go('plan'),
    onEditNote: (key, label) => setNoteSheet({
      key,
      label
    }),
    onShare: shareToday
  }), tab === 'list' && React.createElement(RecipeList, {
    recipes: recipes,
    categories: categories,
    onOpen: setDetail,
    onFav: toggleFav,
    goNew: () => {
      setEditing(null);
      go('new');
    }
  }), tab === 'new' && React.createElement(RecipeForm, {
    initial: editing,
    categories: categories,
    onAddCategory: addCategory,
    onSave: saveRecipe,
    onCancel: editing ? () => {
      setEditing(null);
      go('list');
    } : null,
    toast: toast
  }), tab === 'plan' && React.createElement(WeekPlan, {
    plan: plan,
    setPlan: setPlan,
    recipes: recipes,
    categories: categories,
    onOpen: setDetail,
    onMakeList: makeList,
    offDays: offDays,
    setOffDays: setOffDays,
    slots: slots,
    setSlots: setSlots,
    addCategory: addCategory,
    notes: notes,
    onEditNote: (key, label) => setNoteSheet({
      key,
      label
    })
  }), tab === 'shop' && React.createElement(Shopping, {
    items: shopping,
    setItems: setShopping,
    hasPlan: !!(plan.days && plan.days.length),
    goPlan: () => go('plan'),
    toast: toast
  })), React.createElement("nav", {
    className: "fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur border-t border-line",
    style: {
      paddingBottom: 'env(safe-area-inset-bottom,0px)'
    },
    "aria-label": "\u30E1\u30A4\u30F3"
  }, React.createElement("div", {
    className: "gutter max-w-md mx-auto grid grid-cols-5"
  }, TABS.map(([k, ic, l]) => React.createElement("button", {
    key: k,
    onClick: () => {
      if (k === 'new' && tab !== 'new') setEditing(null);
      go(k);
    },
    "aria-current": tab === k ? 'page' : undefined,
    className: `relative flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold ${tab === k ? 'text-primary' : 'text-muted'}`
  }, React.createElement("span", {
    className: `px-3 py-1 rounded-full ${tab === k ? 'bg-primary/10' : ''}`
  }, React.createElement(Icon, {
    name: ic,
    size: 22
  })), l, k === 'today' && unseen && React.createElement("span", {
    className: "absolute top-2 right-[26%] w-2.5 h-2.5 rounded-full bg-danger ring-2 ring-surface",
    "aria-label": "\u65B0\u3057\u3044\u4F1D\u3048\u305F\u3044\u3053\u3068"
  }), k === 'shop' && shopLeft > 0 && React.createElement("span", {
    className: "absolute top-1.5 right-[22%] min-w-[18px] h-[18px] px-1 rounded-full bg-honey text-pink text-[10px] flex items-center justify-center tnum"
  }, shopLeft))))), toastMsg && React.createElement("div", {
    className: "fixed inset-x-0 z-[60] flex justify-center gutter pointer-events-none",
    style: {
      bottom: 'calc(84px + env(safe-area-inset-bottom,0px))'
    }
  }, React.createElement("div", {
    className: "rounded-2xl bg-ink text-bg text-sm px-4 py-2 shadow-lg max-w-md"
  }, toastMsg)), React.createElement(RecipeDetail, {
    recipe: detailObj,
    onClose: () => setDetail(null),
    onEdit: r => {
      setDetail(null);
      setEditing({
        ...emptyForm(),
        ...r,
        kcal: r.kcal ? String(r.kcal) : '',
        ingredients: r.ingredients && r.ingredients.length ? r.ingredients : [{
          name: '',
          amount: ''
        }],
        steps: r.steps && r.steps.length ? r.steps : ['']
      });
      go('new');
    },
    onDelete: deleteRecipe,
    onSaveGeneric: saveGeneric,
    onFav: toggleFav,
    onSend: r => setSending(r)
  }), React.createElement(SendSheet, {
    recipe: sending,
    onClose: () => setSending(null),
    toast: toast
  }), React.createElement(ReceiveSheet, {
    recipe: received,
    onClose: () => setReceived(null),
    onAdd: () => addReceived(false),
    onEditFirst: () => addReceived(true)
  }), React.createElement(Settings, {
    display: display,
    setDisplay: setDisplay,
    open: settings,
    onClose: () => setSettings(false),
    categories: categories,
    setCategories: setCategories,
    removeCategory: removeCategory,
    exportData: exportData,
    importData: importData,
    backend: backend,
    removeSamples: removeSamples,
    hasSamples: recipes.some(r => r.sample),
    askConfirm: setConfirm,
    toast: toast,
    localSnapshot: () => snapRef.current
  }), invite && !(backend.kind === 'cloud' && LS.get('share', {}).code === invite.code) && React.createElement(JoinSheet, {
    invite: invite,
    localSnapshot: () => snapRef.current,
    onCancel: () => {
      setInvite(null);
      history.replaceState(null, '', location.pathname + location.search);
    }
  }), invite && backend.kind === 'cloud' && LS.get('share', {}).code === invite.code && (history.replaceState(null, '', location.pathname + location.search), null), React.createElement(NoteSheet, {
    state: noteSheet,
    note: noteSheet && notes[noteSheet.key],
    onClose: () => setNoteSheet(null),
    onSave: (text, name) => {
      setNote(noteSheet.key, {
        text,
        name,
        at: Date.now(),
        by: deviceId
      });
      toast('伝えたいことを残しました');
    },
    onDelete: () => {
      setNote(noteSheet.key, null);
      toast('消しました');
    }
  }), React.createElement(Confirm, {
    state: confirm,
    onCancel: () => setConfirm(null)
  }));
}
applyDisplay(LS.get('display', {
  font: 'rounded',
  size: 'normal'
}));
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}