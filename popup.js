function send_on(element)  {
    return chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "on"})
                }
            )
}

function send_off(element)  {
    return chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "off"})
        }
    )
}

function send_btn_info() {
    const btn_on = document.querySelector("#power_on")
    const btn_off = document.querySelector("#power_off")
    
    btn_off.addEventListener("click", () => send_off(btn_off))
    
    btn_on.addEventListener("click", () => send_on(btn_on))
    
}

send_btn_info()
