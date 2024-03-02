const manifest = require('./manifest');

module.exports.code = (htmlContent) => {

    const html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="` + manifest.asset('main.css') +`">
    </head>
    <style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--primary-base: #E1F073;--wp--preset--color--primary-dark: #BBC860;--wp--preset--color--primary-light: #EBF5A2;--wp--preset--color--primary-pastel: #F5FAD0;--wp--preset--color--primary-tint: #F9FCE3;--wp--preset--color--green-base: #64C67E;--wp--preset--color--green-dark: #53A569;--wp--preset--color--green-light: #7ECF93;--wp--preset--color--green-pastel: #B1E2BE;--wp--preset--color--green-tint: #E0F4E5;--wp--preset--color--yellow-base: #FFC73B;--wp--preset--color--yellow-dark: #F2B007;--wp--preset--color--yellow-light: #FFDE9F;--wp--preset--color--yellow-pastel: #FFF4DF;--wp--preset--color--yellow-tint: #FFFAEF;--wp--preset--color--red-base: #FA7456;--wp--preset--color--red-dark: #D06148;--wp--preset--color--red-light: #FCA28E;--wp--preset--color--red-pastel: #FDD1C7;--wp--preset--color--red-tint: #FEE3DD;--wp--preset--color--blue-base: #0EC8E9;--wp--preset--color--blue-dark: #08788C;--wp--preset--color--blue-light: #6EDEF2;--wp--preset--color--blue-pastel: #CFF4FB;--wp--preset--color--blue-tint: #E7FAFD;--wp--preset--color--black-10: #FBFBFB;--wp--preset--color--black-20: #F6F6F6;--wp--preset--color--black-30: #EDEDEE;--wp--preset--color--black-40: #CACACB;--wp--preset--color--black-50: #B8B9B9;--wp--preset--color--black-60: #7A7B7C;--wp--preset--color--black-70: #575859;--wp--preset--color--black-80: #3D3D3F;--wp--preset--color--black-100: #222325;--wp--preset--color--white-20: #2F3032;--wp--preset--color--white-30: #38393B;--wp--preset--color--white-40: #4E4F51;--wp--preset--color--white-50: #69696B;--wp--preset--color--white-60: #9E9E9F;--wp--preset--color--white-70: #D3D3D3;--wp--preset--color--white-80: #E4E5E5;--wp--preset--color--white-100: #FFFFFF;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--header-1: 56px;--wp--preset--font-size--header-2: 40px;--wp--preset--font-size--header-3: 30px;--wp--preset--font-size--header-4: 24px;--wp--preset--font-size--body-large: 20px;--wp--preset--font-size--body-medium: 16px;--wp--preset--font-size--body-small: 14px;--wp--preset--font-size--body-xs: 12px;--wp--preset--font-family--red-hat-display-regular: "Red Hat Display Regular", serif;--wp--preset--font-family--red-hat-display-regular-italic: "Red Hat Display Regular - Italic", serif;--wp--preset--font-family--red-hat-display-bold: "Red Hat Display Bold", serif;--wp--preset--font-family--red-hat-display-bold-italic: "Red Hat Display Bold - Italic", serif;--wp--preset--font-family--red-hat-display-extra-bold: "Red Hat Display Extra Bold", serif;--wp--preset--font-family--red-hat-display-extra-bold-italic: "Red Hat Display Extra Bold - Italic", serif;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}body { margin: 0;--wp--style--global--content-size: 1120px;--wp--style--global--wide-size: 1280px; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}body{font-family: var(--wp--preset--font-family--red-hat-display-regular);padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: underline;}.wp-element-button, .wp-block-button__link{background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;line-height: inherit;padding: calc(0.667em + 2px) calc(1.333em + 2px);text-decoration: none;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-primary-base-color{color: var(--wp--preset--color--primary-base) !important;}.has-primary-dark-color{color: var(--wp--preset--color--primary-dark) !important;}.has-primary-light-color{color: var(--wp--preset--color--primary-light) !important;}.has-primary-pastel-color{color: var(--wp--preset--color--primary-pastel) !important;}.has-primary-tint-color{color: var(--wp--preset--color--primary-tint) !important;}.has-green-base-color{color: var(--wp--preset--color--green-base) !important;}.has-green-dark-color{color: var(--wp--preset--color--green-dark) !important;}.has-green-light-color{color: var(--wp--preset--color--green-light) !important;}.has-green-pastel-color{color: var(--wp--preset--color--green-pastel) !important;}.has-green-tint-color{color: var(--wp--preset--color--green-tint) !important;}.has-yellow-base-color{color: var(--wp--preset--color--yellow-base) !important;}.has-yellow-dark-color{color: var(--wp--preset--color--yellow-dark) !important;}.has-yellow-light-color{color: var(--wp--preset--color--yellow-light) !important;}.has-yellow-pastel-color{color: var(--wp--preset--color--yellow-pastel) !important;}.has-yellow-tint-color{color: var(--wp--preset--color--yellow-tint) !important;}.has-red-base-color{color: var(--wp--preset--color--red-base) !important;}.has-red-dark-color{color: var(--wp--preset--color--red-dark) !important;}.has-red-light-color{color: var(--wp--preset--color--red-light) !important;}.has-red-pastel-color{color: var(--wp--preset--color--red-pastel) !important;}.has-red-tint-color{color: var(--wp--preset--color--red-tint) !important;}.has-blue-base-color{color: var(--wp--preset--color--blue-base) !important;}.has-blue-dark-color{color: var(--wp--preset--color--blue-dark) !important;}.has-blue-light-color{color: var(--wp--preset--color--blue-light) !important;}.has-blue-pastel-color{color: var(--wp--preset--color--blue-pastel) !important;}.has-blue-tint-color{color: var(--wp--preset--color--blue-tint) !important;}.has-black-10-color{color: var(--wp--preset--color--black-10) !important;}.has-black-20-color{color: var(--wp--preset--color--black-20) !important;}.has-black-30-color{color: var(--wp--preset--color--black-30) !important;}.has-black-40-color{color: var(--wp--preset--color--black-40) !important;}.has-black-50-color{color: var(--wp--preset--color--black-50) !important;}.has-black-60-color{color: var(--wp--preset--color--black-60) !important;}.has-black-70-color{color: var(--wp--preset--color--black-70) !important;}.has-black-80-color{color: var(--wp--preset--color--black-80) !important;}.has-black-100-color{color: var(--wp--preset--color--black-100) !important;}.has-white-20-color{color: var(--wp--preset--color--white-20) !important;}.has-white-30-color{color: var(--wp--preset--color--white-30) !important;}.has-white-40-color{color: var(--wp--preset--color--white-40) !important;}.has-white-50-color{color: var(--wp--preset--color--white-50) !important;}.has-white-60-color{color: var(--wp--preset--color--white-60) !important;}.has-white-70-color{color: var(--wp--preset--color--white-70) !important;}.has-white-80-color{color: var(--wp--preset--color--white-80) !important;}.has-white-100-color{color: var(--wp--preset--color--white-100) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-primary-base-background-color{background-color: var(--wp--preset--color--primary-base) !important;}.has-primary-dark-background-color{background-color: var(--wp--preset--color--primary-dark) !important;}.has-primary-light-background-color{background-color: var(--wp--preset--color--primary-light) !important;}.has-primary-pastel-background-color{background-color: var(--wp--preset--color--primary-pastel) !important;}.has-primary-tint-background-color{background-color: var(--wp--preset--color--primary-tint) !important;}.has-green-base-background-color{background-color: var(--wp--preset--color--green-base) !important;}.has-green-dark-background-color{background-color: var(--wp--preset--color--green-dark) !important;}.has-green-light-background-color{background-color: var(--wp--preset--color--green-light) !important;}.has-green-pastel-background-color{background-color: var(--wp--preset--color--green-pastel) !important;}.has-green-tint-background-color{background-color: var(--wp--preset--color--green-tint) !important;}.has-yellow-base-background-color{background-color: var(--wp--preset--color--yellow-base) !important;}.has-yellow-dark-background-color{background-color: var(--wp--preset--color--yellow-dark) !important;}.has-yellow-light-background-color{background-color: var(--wp--preset--color--yellow-light) !important;}.has-yellow-pastel-background-color{background-color: var(--wp--preset--color--yellow-pastel) !important;}.has-yellow-tint-background-color{background-color: var(--wp--preset--color--yellow-tint) !important;}.has-red-base-background-color{background-color: var(--wp--preset--color--red-base) !important;}.has-red-dark-background-color{background-color: var(--wp--preset--color--red-dark) !important;}.has-red-light-background-color{background-color: var(--wp--preset--color--red-light) !important;}.has-red-pastel-background-color{background-color: var(--wp--preset--color--red-pastel) !important;}.has-red-tint-background-color{background-color: var(--wp--preset--color--red-tint) !important;}.has-blue-base-background-color{background-color: var(--wp--preset--color--blue-base) !important;}.has-blue-dark-background-color{background-color: var(--wp--preset--color--blue-dark) !important;}.has-blue-light-background-color{background-color: var(--wp--preset--color--blue-light) !important;}.has-blue-pastel-background-color{background-color: var(--wp--preset--color--blue-pastel) !important;}.has-blue-tint-background-color{background-color: var(--wp--preset--color--blue-tint) !important;}.has-black-10-background-color{background-color: var(--wp--preset--color--black-10) !important;}.has-black-20-background-color{background-color: var(--wp--preset--color--black-20) !important;}.has-black-30-background-color{background-color: var(--wp--preset--color--black-30) !important;}.has-black-40-background-color{background-color: var(--wp--preset--color--black-40) !important;}.has-black-50-background-color{background-color: var(--wp--preset--color--black-50) !important;}.has-black-60-background-color{background-color: var(--wp--preset--color--black-60) !important;}.has-black-70-background-color{background-color: var(--wp--preset--color--black-70) !important;}.has-black-80-background-color{background-color: var(--wp--preset--color--black-80) !important;}.has-black-100-background-color{background-color: var(--wp--preset--color--black-100) !important;}.has-white-20-background-color{background-color: var(--wp--preset--color--white-20) !important;}.has-white-30-background-color{background-color: var(--wp--preset--color--white-30) !important;}.has-white-40-background-color{background-color: var(--wp--preset--color--white-40) !important;}.has-white-50-background-color{background-color: var(--wp--preset--color--white-50) !important;}.has-white-60-background-color{background-color: var(--wp--preset--color--white-60) !important;}.has-white-70-background-color{background-color: var(--wp--preset--color--white-70) !important;}.has-white-80-background-color{background-color: var(--wp--preset--color--white-80) !important;}.has-white-100-background-color{background-color: var(--wp--preset--color--white-100) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-primary-base-border-color{border-color: var(--wp--preset--color--primary-base) !important;}.has-primary-dark-border-color{border-color: var(--wp--preset--color--primary-dark) !important;}.has-primary-light-border-color{border-color: var(--wp--preset--color--primary-light) !important;}.has-primary-pastel-border-color{border-color: var(--wp--preset--color--primary-pastel) !important;}.has-primary-tint-border-color{border-color: var(--wp--preset--color--primary-tint) !important;}.has-green-base-border-color{border-color: var(--wp--preset--color--green-base) !important;}.has-green-dark-border-color{border-color: var(--wp--preset--color--green-dark) !important;}.has-green-light-border-color{border-color: var(--wp--preset--color--green-light) !important;}.has-green-pastel-border-color{border-color: var(--wp--preset--color--green-pastel) !important;}.has-green-tint-border-color{border-color: var(--wp--preset--color--green-tint) !important;}.has-yellow-base-border-color{border-color: var(--wp--preset--color--yellow-base) !important;}.has-yellow-dark-border-color{border-color: var(--wp--preset--color--yellow-dark) !important;}.has-yellow-light-border-color{border-color: var(--wp--preset--color--yellow-light) !important;}.has-yellow-pastel-border-color{border-color: var(--wp--preset--color--yellow-pastel) !important;}.has-yellow-tint-border-color{border-color: var(--wp--preset--color--yellow-tint) !important;}.has-red-base-border-color{border-color: var(--wp--preset--color--red-base) !important;}.has-red-dark-border-color{border-color: var(--wp--preset--color--red-dark) !important;}.has-red-light-border-color{border-color: var(--wp--preset--color--red-light) !important;}.has-red-pastel-border-color{border-color: var(--wp--preset--color--red-pastel) !important;}.has-red-tint-border-color{border-color: var(--wp--preset--color--red-tint) !important;}.has-blue-base-border-color{border-color: var(--wp--preset--color--blue-base) !important;}.has-blue-dark-border-color{border-color: var(--wp--preset--color--blue-dark) !important;}.has-blue-light-border-color{border-color: var(--wp--preset--color--blue-light) !important;}.has-blue-pastel-border-color{border-color: var(--wp--preset--color--blue-pastel) !important;}.has-blue-tint-border-color{border-color: var(--wp--preset--color--blue-tint) !important;}.has-black-10-border-color{border-color: var(--wp--preset--color--black-10) !important;}.has-black-20-border-color{border-color: var(--wp--preset--color--black-20) !important;}.has-black-30-border-color{border-color: var(--wp--preset--color--black-30) !important;}.has-black-40-border-color{border-color: var(--wp--preset--color--black-40) !important;}.has-black-50-border-color{border-color: var(--wp--preset--color--black-50) !important;}.has-black-60-border-color{border-color: var(--wp--preset--color--black-60) !important;}.has-black-70-border-color{border-color: var(--wp--preset--color--black-70) !important;}.has-black-80-border-color{border-color: var(--wp--preset--color--black-80) !important;}.has-black-100-border-color{border-color: var(--wp--preset--color--black-100) !important;}.has-white-20-border-color{border-color: var(--wp--preset--color--white-20) !important;}.has-white-30-border-color{border-color: var(--wp--preset--color--white-30) !important;}.has-white-40-border-color{border-color: var(--wp--preset--color--white-40) !important;}.has-white-50-border-color{border-color: var(--wp--preset--color--white-50) !important;}.has-white-60-border-color{border-color: var(--wp--preset--color--white-60) !important;}.has-white-70-border-color{border-color: var(--wp--preset--color--white-70) !important;}.has-white-80-border-color{border-color: var(--wp--preset--color--white-80) !important;}.has-white-100-border-color{border-color: var(--wp--preset--color--white-100) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-header-1-font-size{font-size: var(--wp--preset--font-size--header-1) !important;}.has-header-2-font-size{font-size: var(--wp--preset--font-size--header-2) !important;}.has-header-3-font-size{font-size: var(--wp--preset--font-size--header-3) !important;}.has-header-4-font-size{font-size: var(--wp--preset--font-size--header-4) !important;}.has-body-large-font-size{font-size: var(--wp--preset--font-size--body-large) !important;}.has-body-medium-font-size{font-size: var(--wp--preset--font-size--body-medium) !important;}.has-body-small-font-size{font-size: var(--wp--preset--font-size--body-small) !important;}.has-body-xs-font-size{font-size: var(--wp--preset--font-size--body-xs) !important;}.has-red-hat-display-regular-font-family{font-family: var(--wp--preset--font-family--red-hat-display-regular) !important;}.has-red-hat-display-regular-italic-font-family{font-family: var(--wp--preset--font-family--red-hat-display-regular-italic) !important;}.has-red-hat-display-bold-font-family{font-family: var(--wp--preset--font-family--red-hat-display-bold) !important;}.has-red-hat-display-bold-italic-font-family{font-family: var(--wp--preset--font-family--red-hat-display-bold-italic) !important;}.has-red-hat-display-extra-bold-font-family{font-family: var(--wp--preset--font-family--red-hat-display-extra-bold) !important;}.has-red-hat-display-extra-bold-italic-font-family{font-family: var(--wp--preset--font-family--red-hat-display-extra-bold-italic) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
    <body> \t` + htmlContent + `</body>
</html>`;

    return html;
};