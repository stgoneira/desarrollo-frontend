import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Saludo(_ref) {
  var {
    nombre,
    children
  } = _ref;
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h1", {
      children: "Saludo"
    }), /*#__PURE__*/_jsxs("p", {
      children: ["Hola Mundo ", nombre, "!!!!"]
    }), children]
  });
}
