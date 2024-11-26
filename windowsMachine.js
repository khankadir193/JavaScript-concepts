function getOSUsingUserAgent() {
    const userAgent = navigator.userAgent;

    console.log('userAgent...',userAgent);

    if (userAgent.includes("Win")) return "Windows";
    if (userAgent.includes("Mac")) return "MacOS";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Android")) return "Android";
    if (userAgent.includes("like Mac") && userAgent.includes("Mobile")) return "iOS";

    return "Unknown OS";
}

console.log("Operating System:", getOSUsingUserAgent());
