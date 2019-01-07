const cursorColor = "#d801af",
const cursorAccentColor = "#0b011c",
const foregroundColor = "#cab3f7",
const backgroundColor = "#0b011c",
const selectionColor = "rgba(188, 151, 205, 0.3)",
const borderColor = "#d801af",

const colors = {
  black: "#283034",
  red: "#ff2e97",
  green: "#a7da1e",
  yellow: "#50e3c2",
  blue: "#42c6ff",
  magenta: "#ff2afc",
  cyan: "#1ea8fc",
  white: "#d9e0e9",
  lightBlack: "#435056",
  lightRed: "#ff2e97",
  lightGreen: "#a7da1e",
  lightYellow: "#50e3c2",
  lightBlue: "#42c6ff",
  lightMagenta: "#ff2afc",
  lightCyan: "#1ea8fc",
  lightWhite: "#f4f6f9"
};

exports.decorateConfig = config => Object.assign({}, config, {
  cursorColor,
  cursorAccentColor,
  foregroundColor,
  backgroundColor,
  selectionColor,
  borderColor,
  colors
})
