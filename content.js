const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) {
                const spans = node.querySelectorAll('#content-text span[role="text"]')
                spans.forEach(function(span) {
                    fetchData(span)
                })
                
            }
        })
    })
})



function catching_comments() {
    const texts_users = document.querySelectorAll("section p")
    return texts_users
}





function msg_comprimid () {
    const url = window.location.host
    console.log(window.location.host)
    if (url == "www.youtube.com") {
    observer.observe(document.body, {childList: true, subtree: true})
    } else {
        Comments = catching_comments()
        coments.forEach(function(user_comments) {
            fetchData(user_comments)
        })
    }
}
    
    


    
function change_blur(element)  {
    return element.style.filter = "blur(0px)"
}

async function fetchData (text)  {
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
        console.log("ta off")
        coments = catching_comments()
        coments.forEach(function(user_coment){
            return user_coment.style.filter = "blur(0px)"
        });
}   
})



