function validIpAddress(str){
    const arrIp = str.split('.');

    for(const element of arrIp){
        if(element>255) return false;
    };

    return true;
};

// const ipAdd = '128.0.0.1'
// const ipAdd = '125.16.100.1'
const ipAdd = '125.512.100.1';
console.log('ip address..',validIpAddress(ipAdd));