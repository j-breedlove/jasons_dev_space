import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 3rem;

    /* ============ COLORS ================ */
    --hue-color: 250; /* GREEN: 144,  Blue: 230, Purple: 250, Pink: 340 */

    /* HSL Color Mode */
    --first-color: hsl(var(--hue-color), 69%, 58%);
    --first-color-second: hsl(var(--hue-color), 71%, 47%);
    --first-color-alt: hsl(var(--hue-color), 55%, 50%);
    --first-color-lighter: hsl(var(--hue-color), 90%, 82%);

    --title-color: hsl(var(--hue-color), 10%, 15%);
    --text-color: hsl(var(--hue-color), 10%, 40%);
    --mainText: hsl(var(--hue-color), 10%, 20%);
    --text-color-light: hsl(var(--hue-color), 10%, 65%);
    --input-color: hsl(var(--hue-color), 70%, 88%);
    --body-color: hsl(var(--hue-color), 66%, 99%);
    --container-color: #fff;
    --scroll-bar-color: hsl(var(--hue-color), 15%, 85%);
    --scroll-thumb-color: hsl(var(--hue-color), 15%, 70%);
    --gradient-color: linear-gradient(
            140deg,
            rgba(93, 72, 199, 1) 0%,
            rgba(94, 91, 201, 1) 40%,
            rgba(101, 125, 157, 1) 100%
    );

    /*  ================ FONT AND TYPOGRAPHY ============== */
    --gullible-font: "Maven Pro", sans-serif;
    --body-font: "Poppins", sans-serif;
    --roboto-font: "Roboto", sans-serif;
    --robotomono-font: "Roboto Mono", monospace;
    --bigfat-font: "Russo One", sans-serif;

    /* 1rem = 16px, .5rem = 8px */
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 14px;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

    /* FONT WEIGHT */
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;

    /* Margin Size - BOTTOM */
    /* .25rem = 4px, .5rem= 8px, 1rem= 16px, .75rem= 12px */
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-25: 1.25rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /*  ======== Z-index ========= */
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;

    /*  ======== Background  ========= */
    --background-body-color: hsl(var(--hue-color), 66%, 99%);
    --border-color: none;
    --border-style: none;
    --footer-color: var(--first-color);
    // ... other variables from styles.css ...
  }
  // ... other global styles ...
`;

export default GlobalStyles;
