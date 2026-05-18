const path = require("path");

// __dirname = Projektroot (dort liegt diese Datei)
const tailwindConfig = path.join(__dirname, "tailwind.config.ts");

module.exports = {
  plugins: {
    tailwindcss: { config: tailwindConfig },
    autoprefixer: {},
  },
};
