const once = (callBack)=>{
    let called = false;
    return ()=>{
        if(!called){
            callBack('Hello abdul kadir khan');
            called = true;
        }
    }
}

const disaplayMessage = (message = 'no message')=>{
    console.log('message...',message);
}

const fn = once(disaplayMessage);
fn();
fn();
fn();
