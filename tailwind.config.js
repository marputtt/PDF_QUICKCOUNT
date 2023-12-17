module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "800": "#595959",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "secondary": {
          "gray500": "#d9d9d9ff",
          "grey400": "#eff0f2ff"
        },
        "primary1": {
          "blue60": "#e2ddf5ff",
          "blue80": "#5228f5ff",
          "blue100": "#291477ff"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FourUnits": "64px",
        "HalfUnit": "8px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "FiveUnits": "80px",
        "Unit": "16px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%"
      },
      "scale": {
        "Large": "144px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "XSmall": "16px",
        "XLarge": "192px",
        "XXLarge": "288px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}