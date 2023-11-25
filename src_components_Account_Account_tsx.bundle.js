"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkaccount_mf"] = self["webpackChunkaccount_mf"] || []).push([["src_components_Account_Account_tsx"],{

/***/ "./src/apis/apiConstants.ts":
/*!**********************************!*\
  !*** ./src/apis/apiConstants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserDetailsAPIUrl: () => (/* binding */ getUserDetailsAPIUrl),\n/* harmony export */   peopleApiRoute: () => (/* binding */ peopleApiRoute),\n/* harmony export */   updateUserDetailsAPIUrl: () => (/* binding */ updateUserDetailsAPIUrl)\n/* harmony export */ });\n//People API constants\nvar peopleApiRoute = '/user';\nvar getUserDetailsAPIUrl = \"\".concat(peopleApiRoute, \"/getUserDetails\");\nvar updateUserDetailsAPIUrl = \"\".concat(peopleApiRoute, \"/update\");\n\n\n//# sourceURL=webpack://account_mf/./src/apis/apiConstants.ts?");

/***/ }),

/***/ "./src/apis/axiosInstance.ts":
/*!***********************************!*\
  !*** ./src/apis/axiosInstance.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosInstance: () => (/* binding */ axiosInstance)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"webpack/sharing/consume/default/axios/axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/util.ts\");\nvar _a;\n\n\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"https://mf-backend.onrender.com/\",\n    headers: (_a = {},\n        _a['Content-Type'] = 'application/json',\n        _a)\n});\naxiosInstance.interceptors.request.use(function (config) {\n    config.headers.Authorization = \"bearer \".concat((0,_util__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)());\n    return config;\n});\n\n\n//# sourceURL=webpack://account_mf/./src/apis/axiosInstance.ts?");

/***/ }),

/***/ "./src/apis/getUserDetailsAPI.ts":
/*!***************************************!*\
  !*** ./src/apis/getUserDetailsAPI.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserDetailsApi: () => (/* binding */ getUserDetailsApi)\n/* harmony export */ });\n/* harmony import */ var _apiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiConstants */ \"./src/apis/apiConstants.ts\");\n/* harmony import */ var _axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInstance */ \"./src/apis/axiosInstance.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar getUserDetailsApi = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var data, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, _axiosInstance__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.get(_apiConstants__WEBPACK_IMPORTED_MODULE_0__.getUserDetailsAPIUrl)];\n            case 1:\n                data = (_a.sent()).data;\n                return [2 /*return*/, {\n                        username: data.username,\n                        name: data.name,\n                        description: data.description,\n                        email: data.email\n                    }];\n            case 2:\n                error_1 = _a.sent();\n                console.log(error_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://account_mf/./src/apis/getUserDetailsAPI.ts?");

/***/ }),

/***/ "./src/apis/updateUserDetailsAPI.ts":
/*!******************************************!*\
  !*** ./src/apis/updateUserDetailsAPI.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUserDetailsApi: () => (/* binding */ updateUserDetailsApi)\n/* harmony export */ });\n/* harmony import */ var _apiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiConstants */ \"./src/apis/apiConstants.ts\");\n/* harmony import */ var _axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInstance */ \"./src/apis/axiosInstance.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/util.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\nvar updateUserDetailsApi = function (input) { return __awaiter(void 0, void 0, void 0, function () {\n    var response, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, _axiosInstance__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.put(_apiConstants__WEBPACK_IMPORTED_MODULE_0__.updateUserDetailsAPIUrl, __assign({}, input))];\n            case 1:\n                response = _a.sent();\n                (0,_util__WEBPACK_IMPORTED_MODULE_2__.setAccessToken)(response.data.token);\n                return [2 /*return*/, response];\n            case 2:\n                error_1 = _a.sent();\n                return [2 /*return*/, error_1.response];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://account_mf/./src/apis/updateUserDetailsAPI.ts?");

/***/ }),

/***/ "./src/components/Account/Account.tsx":
/*!********************************************!*\
  !*** ./src/components/Account/Account.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"webpack/sharing/consume/default/@mui/material/@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"webpack/sharing/consume/default/react-hook-form/react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apis_getUserDetailsAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/getUserDetailsAPI */ \"./src/apis/getUserDetailsAPI.ts\");\n/* harmony import */ var _apis_updateUserDetailsAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apis/updateUserDetailsAPI */ \"./src/apis/updateUserDetailsAPI.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ \"./src/util.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\nvar styles = function () { return ({\n    saveButton: {\n        backgroundColor: \"#F38181\",\n        \"&:hover\": {\n            backgroundColor: \"#C06C84\",\n        },\n    },\n}); };\nvar label = { inputProps: { 'aria-label': 'Color switch demo' } };\nvar Account = function () {\n    var classes = styles();\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n    }), errorResponse = _a[0], setErrorResponse = _a[1];\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isNotificationEnabled = _b[0], setIsNotificationEnabled = _b[1];\n    var _c = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        defaultValues: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0,_apis_getUserDetailsAPI__WEBPACK_IMPORTED_MODULE_3__.getUserDetailsApi)()];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        }); }); },\n    }), register = _c.register, handleSubmit = _c.handleSubmit, control = _c.control, reset = _c.reset, _d = _c.formState, errors = _d.errors, isLoading = _d.isLoading, isDirty = _d.isDirty;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n        if (Notification.permission === 'granted') {\n            setIsNotificationEnabled(true);\n            return;\n        }\n        setIsNotificationEnabled(false);\n    }, []);\n    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0,_apis_updateUserDetailsAPI__WEBPACK_IMPORTED_MODULE_4__.updateUserDetailsApi)(data)];\n                case 1:\n                    response = _a.sent();\n                    if (response.status >= 200 && response.status < 300) {\n                        reset(data);\n                        setErrorResponse({\n                            email: \"\",\n                            username: \"\",\n                        });\n                    }\n                    else {\n                        if (response.data.includes(\"username\")) {\n                            setErrorResponse({\n                                email: \"\",\n                                username: response.data,\n                            });\n                        }\n                        if (response.data.includes(\"email\")) {\n                            setErrorResponse({\n                                username: \"\",\n                                email: response.data,\n                            });\n                        }\n                    }\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, !isLoading && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, { component: 'div' },\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, { component: 'h3', variant: 'h5', color: 'primary' }, \"Your profile details\"),\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, { component: 'form', onSubmit: handleSubmit(onSubmit), noValidate: true },\n            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { container: true, gap: 10, sx: { marginTop: \"20px\" } },\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, mobile: 5 },\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, __assign({ name: 'username', control: control }, register(\"username\", {\n                        required: {\n                            value: true,\n                            message: \"Username is required\",\n                        },\n                    }), { render: function (_a) {\n                            var _b;\n                            var field = _a.field;\n                            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, __assign({ id: 'username', label: 'Username', variant: 'standard', error: !!errors.username || !!errorResponse.username, helperText: ((_b = errors.username) === null || _b === void 0 ? void 0 : _b.message) || errorResponse.username }, field)));\n                        } }))),\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, mobile: 5 },\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, __assign({ name: 'name', control: control }, register(\"name\", {\n                        required: {\n                            value: true,\n                            message: \"Name is required\",\n                        },\n                    }), { render: function (_a) {\n                            var _b;\n                            var field = _a.field;\n                            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, __assign({ id: 'name', label: 'Name', variant: 'standard', error: !!errors.name, helperText: (_b = errors.name) === null || _b === void 0 ? void 0 : _b.message }, field)));\n                        } }))),\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, mobile: 5 },\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, __assign({ name: 'email', control: control, render: function (_a) {\n                            var _b;\n                            var field = _a.field;\n                            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, __assign({ id: 'email', label: 'Email', type: 'email', variant: 'standard', error: !!errors.email || !!errorResponse.email, helperText: ((_b = errors.email) === null || _b === void 0 ? void 0 : _b.message) || errorResponse.email }, field)));\n                        } }, register(\"email\", {\n                        required: {\n                            value: true,\n                            message: \"Email is required\",\n                        },\n                    })))),\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, mobile: 5 },\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, { name: 'description', control: control, render: function (_a) {\n                            var field = _a.field;\n                            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, __assign({ id: 'description', label: 'Description', variant: 'standard', multiline: true, placeholder: 'Write about yourself...' }, field)));\n                        } })),\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, mobile: 5, alignSelf: 'end' },\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, { type: 'submit', id: 'saveButton', sx: classes.saveButton, style: { minWidth: '50%' }, disabled: !isDirty }, \"Save\")),\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, mobile: 5 },\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.InputLabel, { htmlFor: \"notification-switch\" }, \"Allow notification\"),\n                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Switch, __assign({ id: 'notification-switch' }, label, { color: \"secondary\", checked: isNotificationEnabled, onChange: function () { return setIsNotificationEnabled(_util__WEBPACK_IMPORTED_MODULE_5__.notificationPermissionHandler); } })))))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);\n\n\n//# sourceURL=webpack://account_mf/./src/components/Account/Account.tsx?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAccessToken: () => (/* binding */ clearAccessToken),\n/* harmony export */   clearUserInfoFromStorage: () => (/* binding */ clearUserInfoFromStorage),\n/* harmony export */   getAccessToken: () => (/* binding */ getAccessToken),\n/* harmony export */   getUserInfoFromStorage: () => (/* binding */ getUserInfoFromStorage),\n/* harmony export */   notificationPermissionHandler: () => (/* binding */ notificationPermissionHandler),\n/* harmony export */   setAccessToken: () => (/* binding */ setAccessToken),\n/* harmony export */   setUserInfoInStorage: () => (/* binding */ setUserInfoInStorage)\n/* harmony export */ });\nvar getAccessToken = function () { return sessionStorage.getItem(\"userToken\"); };\nvar setAccessToken = function (token) {\n    return sessionStorage.setItem(\"userToken\", token);\n};\nvar clearAccessToken = function () { return sessionStorage.removeItem(\"userToken\"); };\nvar setUserInfoInStorage = function (userInfo) {\n    return sessionStorage.setItem(\"userInfo\", JSON.stringify(userInfo));\n};\nvar getUserInfoFromStorage = function () { return sessionStorage.getItem(\"userInfo\"); };\nvar clearUserInfoFromStorage = function () { return sessionStorage.removeItem(\"userInfo\"); };\nvar notificationPermissionHandler = function () {\n    console.log('called notification enabled function');\n    if (!(\"Notification\" in window)) {\n        return false;\n    }\n    else if (Notification.permission === 'denied') {\n        alert('Notification is blocked!!! Please enable it from the browser.');\n    }\n    else if (Notification.permission === \"default\") {\n        // We need to ask the user for permission\n        Notification.requestPermission().then(function (permission) {\n            // If the user accepts, let's create a notification\n            if (permission === \"granted\") {\n                return true;\n            }\n        });\n        return false;\n    }\n};\n\n\n//# sourceURL=webpack://account_mf/./src/util.ts?");

/***/ })

}]);