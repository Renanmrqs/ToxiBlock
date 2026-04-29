console.log("i'm back bro")

function catching_comments() {
    const texts_users = document.querySelectorAll("section p")
    return texts_users
}

function msg_comprimid () {
    coments = catching_comments()
    coments.forEach(function(user_coments){
        fetchData(user_coments)
    });
    
    }

function change_blur(element)  {
    element.style.filter = "blur(0px)"
}

async function fetchData (text)  {
    const url = "https://sentimentai-api.onrender.com/predict"
    


    try {
        const body = {"text": text.innerText}
        const response = await fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json()
        
        console.log(data)

        if (data.sentiment == "negative") {
            console.log('negative')
            text.style.filter = "blur(5px)"
            text.addEventListener("click", () => change_blur(text))
    }
    }

    catch (error) {
        console.log(error)
    }
    
}

msg_comprimid()

