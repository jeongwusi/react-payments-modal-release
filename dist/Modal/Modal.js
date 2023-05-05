var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
var ModalBackground = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  background-color: #344054;\n  opacity: 0.33;\n  width: 370px;\n  height: 750px;\n  border-radius: 10px;\n  padding: 10px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  background-color: #344054;\n  opacity: 0.33;\n  width: 370px;\n  height: 750px;\n  border-radius: 10px;\n  padding: 10px;\n  cursor: pointer;\n"])));
var ModalContainer = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-gap: 30px;\n  padding: 15px;\n  position: absolute;\n  background-color: white;\n  width: 370px;\n  height: 225px;\n  border-radius: 10px;\n  top: 545px;\n  font-size: 11px;\n  font-weight: bolder;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-gap: 30px;\n  padding: 15px;\n  position: absolute;\n  background-color: white;\n  width: 370px;\n  height: 225px;\n  border-radius: 10px;\n  top: 545px;\n  font-size: 11px;\n  font-weight: bolder;\n"])));
var Modal = function (_a) {
    var onClose = _a.onClose, children = _a.children;
    return (_jsxs(_Fragment, { children: [_jsx(ModalBackground, { onClick: onClose }), _jsx(ModalContainer, { children: children })] }));
};
export default Modal;
var templateObject_1, templateObject_2;
