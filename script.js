send.onclick = function () {
    const formData = new FormData();
    formData.append("image", myFile.files[0]);
    formData.append("type","image");
    formData.append("title", title.value);
    formData.append("description", description.value);
    fetch(`https://api.imgur.com/3/image`, {
        method: 'POST',
        headers:{
            "Authorization" : "Client-ID f175ff8c2246196"
        },
        body: formData,

    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('error', error));
};
get.onclick = function (){
    const formData = new FormData();
    fetch("https://api.imgur.com/3/image/",{
        method: 'POST',
        headers:{
            "Authorization" : "Client-ID f175ff8c2246196"
        },
        body: formData,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('error', error));
};