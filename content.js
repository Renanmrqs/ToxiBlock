console.log("i'm back bro")

function catching_comments() {
    const texts_users = document.querySelectorAll("section p")
    return texts_users
}

function msg_comprimid () {
    coments = catching_comments()
    coments.forEach(function(user_coments){
        console.log(user_coments.innerText)
    });
    
    }

msg_comprimid()

