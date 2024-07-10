const event = document.getElementById("event");

const fetchAPI = async() => {
    const responsive =  await fetch(`event.json`)
    let data = await responsive.json();
    var jsonContainer = data;
    for (i in jsonContainer){
        let post_link = document.createElement("a");
        post_link.href = `${jsonContainer[i].link}`;
        post_link.innerHTML = `
            <div class = "event-container">
                <img class = "event-image" src="${jsonContainer[i].img_url}" alt="">
                <div>
                    <h3>${jsonContainer[i].title}</h3>
                    <p>${jsonContainer[i].detail}</p>
                </div>
            </div>`
    event.appendChild(post_link);
    }
}
fetchAPI();
