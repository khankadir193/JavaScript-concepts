// function getOSUsingUserAgent() {
//     const userAgent = navigator.userAgent;

//     console.log('userAgent...',userAgent);

//     if (userAgent.includes("Win")) return "Windows";
//     if (userAgent.includes("Mac")) return "MacOS";
//     if (userAgent.includes("Linux")) return "Linux";
//     if (userAgent.includes("Android")) return "Android";
//     if (userAgent.includes("like Mac") && userAgent.includes("Mobile")) return "iOS";

//     return "Unknown OS";
// }

// console.log("Operating System:", getOSUsingUserAgent());

function detectOperatingSystem() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (/Win/.test(platform)) return "Windows";
    if (/Mac/.test(platform)) return "MacOS";
    if (/Linux/.test(platform) || /X11/.test(userAgent)) return "Linux";
    if (/Android/.test(userAgent)) return "Android";
    if (/like Mac/.test(userAgent) && /Mobile/.test(userAgent)) return "iOS";

    return "Unknown OS";
}

console.log("Detected OS:", detectOperatingSystem());

