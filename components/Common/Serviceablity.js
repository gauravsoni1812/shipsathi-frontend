import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
// import "./styles.css"

import { useState } from 'react';
const styles = `@media all{
    h1{font-size:2em;margin:0.67em 0;}
    button,input,select{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}
    button,input{overflow:visible;}
    button,select{text-transform:none;}
    button{-webkit-appearance:button;}
    [type="radio"]{box-sizing:border-box;padding:0;}
    *,*::before,*::after{box-sizing:inherit;}
    button,input,select{color:#404040;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;font-size:1rem;line-height:1.5;}
    h1{clear:both;}
    p{margin-bottom:1.5em;}
    button{border:1px solid;border-color:#ccc #ccc #bbb;border-radius:3px;background:#e6e6e6;color:rgba(0, 0, 0, 0.8);line-height:1;padding:0.6em 1em 0.4em;}
    button:hover{border-color:#ccc #bbb #aaa;}
    button:active,button:focus{border-color:#aaa #bbb #bbb;}
    input[type="text"],input[type="number"]{color:#666;border:1px solid #ccc;border-radius:3px;padding:3px;}
    input[type="text"]:focus,input[type="number"]:focus{color:#111;}
    select{border:1px solid #ccc;}
    div#records_table{height:100%;display:flex;align-items:center;justify-content:center;}
    }
    /*! CSS Used from: https://www.rocketbox.in/wp-content/themes/rocketbox/assets/css/styles.min.css?ver=1.0.0 ; media=all */
    @media all{
    *,:after,:before{box-sizing:border-box;font-smoothing:antialiased;text-rendering:optimizeLegibility;}
    p{margin-top:0;margin-bottom:1rem;}
    h1{margin-top:0;margin-bottom:.5rem;font-family:Poppins,sans-serif;font-weight:500;line-height:1.2;color:#000;}
    h1{font-size:2.5rem;}
    button{cursor:pointer;}
    button:focus,input{outline:none;}
    h1{font-size:2em;margin:.67em 0;}
    button,input,select{font:inherit;margin:0;}
    button,input{overflow:visible;}
    button,select{text-transform:none;}
    button{-webkit-appearance:button;}
    [type=radio]{box-sizing:border-box;padding:0;}
    @media print{
    *{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important;}
    p{orphans:3;widows:3;}
    }
    .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}
    .col-12,.col-lg-3,.col-lg-4,.col-lg-6{position:relative;width:100%;padding-right:15px;padding-left:15px;}
    .col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}
    @media (min-width: 992px){
    .col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}
    .col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}
    .col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}
    }
    .btn-blue{border-radius:30px;padding:14px 28px;font-size:16px;background:#6f57e9;text-transform:none;text-decoration:none;outline:none;color:#fff;display:inline;cursor:pointer;transition:all .3s ease;border:2px solid #6f57e9;box-shadow:inset 0 0 0 0 #6f57e9;}
    .btn-blue:hover{box-shadow:inset 165px 0 0 0 #fff;color:#6f57e9;background:#6f57e9;}
    .mb-0{margin-bottom:0;}
    .mb-20{margin-bottom:20px;}
    .mt-20{margin-top:20px;}
    .ml-15{margin-left:15px;}
    .mt-15{margin-top:15px;}
    .flex{display:-ms-flexbox;display:flex;}
    .align-item-center{-ms-flex-align:center;align-items:center;}
    .justify-content-space-between{-ms-flex-pack:justify;justify-content:space-between;}
    h1{margin:0 0 14px;font-size:35px;}
    p{line-height:1.476;}
    @media only screen and (max-width: 767px){
    .flex-dir-col-mob{-ms-flex-direction:column;flex-direction:column;}
    }
    .loaders{min-height:160px;}
    .homeBannerWrapper button{padding:11px 20px;border-radius:8px;}
    div#loaders{border:12px solid #f3f3f3;border-radius:50%;border-top:12px solid #5d54c2;width:40px;height:40px;animation:c 2s linear infinite;margin:0 auto;box-sizing:border-box;}
    .box-shadow{box-shadow:0 0 25px #dadada;}
    .border-radius-12{border-radius:12px;}
    .pading-20{padding:20px;}
    .hide{display:none;}
    @media only screen and (max-width: 767px){
    .pb-30-mobile{padding-bottom:30px;}
    }
    @media only screen and (max-width: 767px){
    h1{font-size:24px;line-height:32px;}
    }
    .mb-30{margin-bottom:30px;}
    .justify-content-end{-ms-flex-pack:end;justify-content:flex-end;}
    @media only screen and (max-width: 767px){
    .font-20{font-size:17px;}
    }
    .font-20{font-size:20px;}
    @media only screen and (max-width: 767px){
    .font-20{font-size:16px;}
    }
    .pt-30{padding-top:30px;}
    @media only screen and (max-width: 767px){
    .pt-30{padding-top:0;}
    }
    .btn-blue{line-height:1.4rem;}
    @media (max-width: 1023px) and (min-width: 767px){
    h1{font-size:26px;line-height:34px;}
    }
    @media only screen and (max-width: 767px){
    .priceForm+div .flex{-ms-flex-direction:column;flex-direction:column;}
    }
    @media only screen and (max-width: 767px){
    .priceForm .addDimensions{-ms-flex-direction:column;flex-direction:column;}
    }
    .priceSec{width:176px;height:45px;box-shadow:0 -10px 30px 0 #000;background-image:linear-gradient(258deg, #361070 99%, #6f57e9 0);border-radius:10px 10px 0 0;font-size:16px;line-height:1.25;color:#fff;display:-ms-flexbox;display:flex;place-items:center;place-content:center;}
    .formcontrol input,.formcontrol select{border-radius:10px;outline:0;background-color:#f9f9f9;height:50px;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;text-align:left;color:#000;padding:0 14px;box-sizing:border-box;border:0;width:100%;}
    .error{color:red;}
    .font-14{font-size:14px;}
    }
    /*! CSS Used keyframes */
    @keyframes c{0%{transform:rotate(0deg);}to{transform:rotate(1turn);}}
    /*! CSS Used fontfaces */
    @font-face{font-family:'Poppins';font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiAyp8kv8JHgFVrJJLmE0tDMPKzSQ.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiAyp8kv8JHgFVrJJLmE0tMMPKzSQ.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiAyp8kv8JHgFVrJJLmE0tCMPI.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmv1pVFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmv1pVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmv1pVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm21lVFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm21lVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLucXtAKPY.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmg1hVFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmg1hVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmg1hVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmr19VFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmr19VGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmr19VF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15VFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm111VFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm111VGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm111VF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm81xVFteOcEg.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm81xVGdeOcEg.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:italic;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm81xVF9eO.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTucHtA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5Z11lFc-K.woff2) format('woff2');unicode-range:U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}
    @font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}`


class Serviceablity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickupPincode: '',
            destinationPincode: '',
            weight: '',
            company_name: '',
            contact_no: '',
            name: '',
            first: true,
            showDetailsForm: false,
            addDimensions: false
        };
    }

    toggleDetailsForm = () => {
        this.setState(prevState => ({
            showDetailsForm: !prevState.showDetailsForm,
            // Reset input values when switching forms
            pickupPincode: '',
            destinationPincode: '',
            weight: '',
            company_name: '',
            contact_no: '',
            name: '',
            // Add other input fields as needed
        }));
    };

    handleChange = (fieldName, value) => {
        this.setState({ [fieldName]: value });
    };

    handleRadioChange = () => {
        this.setState({ addDimensions: !this.state.addDimensions });
    };

    render() {
        return (
            <section className="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-image">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <div className="image">
                                    <img src="/images/svg/svgviewer-output%20(5).svg" alt="image" />
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="services-content it-service-content">
                            <style dangerouslySetInnerHTML={{ __html: styles }} />
                            <div className="col-12 col-lg-6" >
                                <h1 className="mb-20"   style={{
                                            minWidth:"29vw"
                                        }}>Lower Your Shipping Cost Today</h1>
                                <p className="font-20 mb-30"  style={{
                                            minWidth:"21vw"
                                        }}>
                                    Affordable rates. Multi-carrier shipping support. Servicing to over 24,000+
                                    pin codes in India.
                                </p>
                                <div className="pt-30">
                                    <p
                                        className="mb-0 priceSec"
                                        style={{ boxShadow: "rgb(0 0 0 / 10%) 0px -10px 30px 0px" }}
                                    >
                                      Check Serviceablity
                                    </p>
                                    <div
                                        className="border-radius-12 box-shadow pading-20"
                                        id="checkPrice"
                                        style={{
                                            borderTopLeftRadius: 0,
                                            boxShadow: "rgb(0 0 0 / 10%) 0px 10px 30px 0px",
                                            minHeight: 200,
                                            minWidth:650
                                        }}
                                    >
                                        <div className="priceForm">
                                            {console.log(this.state.showDetailsForm)}
                                            {!this.state.showDetailsForm ? (
                                                <div className="row">
                                                    <div className="col-lg-4 formcontrol mt-15">
                                                        <input
                                                            type="text"
                                                            id="pickupPincode"
                                                            className="pac-target-input"
                                                            placeholder="Pincode*"
                                                            value={this.state.pickupPincode}
                                                            autoComplete="off"
                                                            fdprocessedid="dbt15"
                                                            onChange={(e) => this.handleChange('pickupPincode', e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="col-lg-4 formcontrol mt-15">
                                                        <input
                                                            type="text"
                                                            id="pickupPincode"
                                                            className="pac-target-input"
                                                            placeholder="company name"
                                                            value={this.state.company_name}
                                                            autoComplete="off"
                                                            fdprocessedid="dbt15"
                                                            onChange={(e) => this.handleChange('company_name', e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-4 formcontrol mt-15">
                                                        <input
                                                            type="text"
                                                            id="destinationPincode"
                                                            className="pac-target-input"
                                                            placeholder="Contact no"
                                                            value={this.state.contact_no}
                                                            autoComplete="off"
                                                            fdprocessedid="vamu0r"
                                                            onChange={(e) => this.handleChange('contact_no', e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-4 formcontrol mt-15">
                                                        <input
                                                            type="text"
                                                            id="weight"
                                                            className=""
                                                            placeholder="name"
                                                            value={this.state.name}
                                                            onChange={(e) => this.handleChange('name', e.target.value)}
                                                            fdprocessedid="lyt3hr"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                   

                                         {  this.state.addDimensions && !this.state.showDetailsForm ?   <div className="flex">
                                                <div className="col-lg-3 formcontrol mt-15">
                                                    <select id="unit">
                                                        <option value="cm">Cm</option>
                                                        <option value="inch">Inch</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-3 formcontrol mt-15">
                                                    <input
                                                        type="text"
                                                        id="length"
                                                        className=""
                                                        placeholder="Length"
                                                        defaultValue={1}
                                                    />
                                                </div>
                                                <div className="col-lg-3 formcontrol mt-15">
                                                    <input
                                                        type="text"
                                                        id="height"
                                                        className=""
                                                        placeholder="Height"
                                                        defaultValue={1}
                                                    />
                                                </div>
                                                <div className="col-lg-3 formcontrol mt-15">
                                                    <input
                                                        type="text"
                                                        id="width"
                                                        className=""
                                                        placeholder="Width"
                                                        defaultValue={1}
                                                    />
                                                </div>
                                            </div> :<></>}   
                                          
                                            <div className="row">
                                                <div className="col-12 flex mt-15 justify-content-space-between align-item-center flex-dir-col-mob">
                                                    <div>
                                                        <p
                                                            id="error_message"
                                                            className="error mb-0 font-14 pb-30-mobile"
                                                            style={{ display: "none" }}
                                                        >
                                                            Please fill in required fields.
                                                        </p>
                                                    </div>
                                                    <button
                                                        className="border-radius-12 btn-blue"
                                                        onClick={this.toggleDetailsForm}
                                                        fdprocessedid="vn08s"
                                                    >
                                                        {this.state.showDetailsForm ? 'Submit' : 'Check serviceability'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hide detailForm">
                                            <div className="row">
                                                <div className="col-lg-4 formcontrol mt-15">
                                                    <input
                                                        type="text"
                                                        id="company_name"
                                                        className=""
                                                        placeholder="Company Name"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="col-lg-4 formcontrol mt-15">
                                                    <input
                                                        type="number"
                                                        id="contact_no"
                                                        className=""
                                                        placeholder="Contact No."
                                                        defaultValue=""
                                                        min={10}
                                                        max={10}
                                                    />
                                                </div>
                                                <div className="col-lg-4 formcontrol mt-15">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className=""
                                                        placeholder="Name"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-20">
                                                <div className="col-12 flex mt-15 justify-content-space-between align-item-center">
                                                    <div>
                                                        <p
                                                            id="error_msg"
                                                            className="error mb-0 font-14 pb-30-mobile"
                                                            style={{ display: "none" }}
                                                        >
                                                            Please fill in required fields.
                                                        </p>
                                                    </div>
                                                    <button
                                                        className="border-radius-12 btn-blue"
                                                        id="contact"
                                                        onClick={this.toggleDetailsForm}
                                                    >
                                                        {this.state.showDetailsForm ? "Submit" : "check prices"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hide responceForm">
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="noDp error hide">No Delivery Partner is available</p>
                                                    <div id="records_table"></div>{" "}
                                                    <div className="flex justify-content-end">
                                                        <button
                                                            className="border-radius-12 btn-blue"
                                                            id="bookNow"
                                                            onclick="bookNow()"
                                                        >
                                                            Book Now
                                                        </button>
                                                        <button
                                                            className="border-radius-12 btn-blue ml-15"
                                                            id="reset"
                                                            onclick="resetDetails()"
                                                        >
                                                            Reset
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex align-item-center loaders hide">
                                            <div id="loaders" className="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Serviceablity;