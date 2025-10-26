// ==UserScript==
// @name            Linkedin Safety Page Skip
// @namespace       https://github.com/Hogwai/LinkedinSafetyPageBypass/
// @version         1.0.0
// @description:en  Skip the security page when you click on an external link
// @description:fr  Ignore la page de sécurité lorsque vous cliquez sur un lien externe
// @author          Hogwai
// @include         *://*.linkedin.*/safety/*
// @grant           none
// @license         MIT
// @run-at          document-start
// @description     Skip the security page when you click on an external link
// ==/UserScript==

(function() {
    'use strict';

    const fullSafetyUrl = window.location.href;
    const urlObj = new URL(fullSafetyUrl);
    const paramUrl = urlObj.searchParams.get("url");
    const cleanUrl = paramUrl ? decodeURIComponent(paramUrl) : null;

    if (cleanUrl && cleanUrl.trim() !== "") {
        console.log(`Redirecting to: ${cleanUrl}`);
        window.location.href = cleanUrl;
    } else {
        console.log("No redirection: the URL is null or blank.");
    }
})();