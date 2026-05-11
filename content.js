const url = window.location.host
console.log(window.location.host)

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) {
                let spans = []

                if (url == "www.youtube.com") {
                    spans = node.querySelectorAll('#content-text span[role="text"]')
                } else if (url == "x.com" || url == "www.twitter.com") {
                    spans = node.querySelectorAll('[data-testid="tweetText"] span')
                }
                spans.forEach(function(span) {
                    fetchData(span)
                })
            }
        })
    })
})


function msg_comprimid () {
    if (url == "www.youtube.com" || url == "www.twitter.com" || url == "x.com") {
    observer.observe(document.body, {childList: true, subtree: true})
    } 
}
    

function change_blur(element)  {
    return element.style.filter = "blur(0px)"
}

async function fetchData (text)  {
    if (text.dataset.processed) return
    text.dataset.processed = "true"
    
    const url = "https://sentimentai-api.onrender.com/toxic_predict"
    


    try {
        const body = {"text": text.innerText}
        const response = await fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json()
        
        console.log(data, body)

        if (data.toxic == "toxic" && data.trust >= 0.65) {
            console.log('negative')
            text.style.filter = "blur(5px)"
            text.addEventListener("click", () => change_blur(text))
    }
    }

    catch (error) {
        console.log(error)
    }
    
}

chrome.runtime.onMessage.addListener(function(data, sender) {
    if (data.action == "on") {
        msg_comprimid()
    } else if (data.action == "off") {
        observer.disconnect()
        
        spans = []

        if (url == "www.youtube.com") {
            spans = document.querySelectorAll('#content-text span[role="text"]')
        } else if (url == "x.com" || url == "www.twitter.com") {
            spans = document.querySelectorAll('[data-testid="tweetText"] span')
        }

        console.log("ta off")
        spans.forEach(function(user_coment){
            return user_coment.style.filter = "blur(0px)"
        });
}   
})



