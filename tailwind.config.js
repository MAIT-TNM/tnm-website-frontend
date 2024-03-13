// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1690px",
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "7vw",
          sm: "4vw",
          lg: "7vw",
          xl: "7vw",
          "2xl": "7vw",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
      },
      colors: {
        customGray: "#919AA4",
      },
      boxShadow: {
        button: "0px 3px 10px #FA009159;",
        card: "0px 5px 18px #511AA433;",
      },
      spacing: {
        15: "3.7rem",
      },
      fontSize: {
        smtext: ["1.375rem", { lineHeight: "1.875rem" }],
        mdtext: ["1.75rem", { lineHeight: "2rem" }],
        foottext: ["1rem", { lineHeight: "1.25rem" }],
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities, config }) => {
      const { theme } = config();
      const [sectitle, sectitleExtras] = theme.fontSize["6xl"];
      const [title, titleExtras] = theme.fontSize["2xl"];
      const [subtitle, subtitleExtras] = theme.fontSize["lg"];
      const [herotitle, herotitleExtras] = theme.fontSize["8xl"];
      const [mdtext, mdtextExtras] = theme.fontSize["mdtext"];
      const [smtext, smtextExtras] = theme.fontSize["smtext"];
      const { fontSize } = theme;
      const { medium, light, semibold, thin } = theme.fontWeight;
      const { tighter, tight, normal } = theme.letterSpacing;
      const { none } = theme.lineHeight;
      const { colors } = theme;

      addComponents({
        ".text-title": {
          fontSize: title,
          lineHeight: titleExtras.lineHeight,
          fontWeight: medium,
        },

        ".text-subtitle": {
          fontSize: subtitle,
          lineHeight: subtitleExtras.lineHeight,
          fontWeight: light,
        },
        ".nav-menu": {
          fontSize: theme.fontSize["base"],
          display: "none",
          alignItems: "center",
          color: colors.darkviolet,
          background: "transparent",
          justifyContent: "center",
        },
        ".hero-title": {
          fontSize: "2rem",
          letterSpacing: tighter,
          color: colors.darkviolet,
          lineHeight: none,
          padding: "1rem",
        },
        ".hero-subtitle": {
          fontSize: "0.8rem",
          fontWeight: light,
        },
        ".dates": {
          fontSize: "1rem",
        },
        ".tagline": {
          fontSize: "0.7rem",
        },
        ".sec-title": {
          fontSize: theme.fontSize["5xl"],
          marginBottom: theme.spacing["12"],
          fontWeight: semibold,
          letterSpacing: tighter,
          lineHeight: none,
          color: colors.darkviolet,
        },
        ".sec-subtitle": {
          fontSize: title,
          fontWeight: medium,
          letterSpacing: normal,
          lineHeight: mdtextExtras.lineHeight,
          color: colors.darkviolet,
        },
        ".sec-content": {
          padding: `0 ${theme.spacing["7"]} ${theme.spacing["24"]}  ${theme.spacing["7"]}`,
        },
        ".sec-cont-text": {
          fontSize: subtitle,
          fontWeight: thin,
          letterSpacing: normal,
          lineHeight: smtextExtras.lineHeight,
          color: colors.textshade,
        },

        ".faq-title": {
          fontSize: subtitle,
          fontWeight: semibold,
          letterSpacing: normal,
          lineHeight: smtextExtras.lineHeight,
          color: colors.darkviolet,
        },
        ".foot-text": {
          fontWeight: thin,
          letterSpacing: normal,
          lineHeight: fontSize.foottext[1].lineHeight,
          color: colors.paleviolet,
          fontSize: fontSize.foottext[0],
        },

        "@screen sm": {
          ".hero-title": {
            fontSize: "2.5rem",
          },
          ".dates": {
            fontSize: "1.5rem",
          },
          ".tagline": {
            fontSize: "1.1rem",
          },
          ".hero-subtitle": {
            fontSize: "0.8rem",
          },
        },

        "@screen md": {
          ".nav-menu": {
            display: "flex",
            fontSize: theme.fontSize["base"],
            gap: theme.spacing["6"],
            background: "transparent",
          },
          ".hero-title": {
            fontSize: "4rem",
          },
          ".sec-content": {
            padding: `0 ${theme.spacing["10"]} ${theme.spacing["36"]}  ${theme.spacing["10"]}`,
          },

          ".faq-title": {
            fontSize: smtext,
          },
          ".sec-title": {
            fontSize: sectitle,
          },
          ".sec-cont-text": {
            fontSize: smtext,
          },
          ".sec-subtitle": {
            fontSize: mdtext,
          },
          ".dates": {
            fontSize: "2.5rem",
          },
          ".tagline": {
            fontSize: "1.5rem",
          },
          ".hero-subtitle": {
            fontSize: "1.1rem",
          },
        },
        "@screen lg": {
          ".nav-menu": {
            fontSize: theme.fontSize["base"],
            gap: theme.spacing["5"],
            background: "transparent",
          },
          ".hero-title": {
            fontSize: "5rem",
          },
          ".tagline": {
            fontSize: "2rem",
          },
          ".hero-subtitle": {
            fontSize: "1.8rem",
          },
        },
        "@screen xl": {
          ".hero-title": {
            fontSize: "6rem",
          },
          ".hero-subtitle": {
            fontSize: "2rem",
          },
          ".sec-content": {
            padding: `0 ${theme.spacing["15"]} ${theme.spacing["52"]}  ${theme.spacing["15"]}`,
          },
          ".dates": {
            fontSize: "3.5rem",
          },
          ".tagline": {
            fontSize: "2.3rem",
          },
        },
        "@screen 2xl": {
          ".hero-title": {
            fontSize: "7rem",
          },
          ".hero-subtitle": {
            fontSize: "2.3rem",
          },
          ".dates": {
            fontSize: "3.5rem",
          },
          ".tagline": {
            fontSize: "2.6rem",
          },
        },
      });

      addUtilities({
        ".min-h-screen": { minHeight: "100dvh" },
      });
    }),
  ],
};
