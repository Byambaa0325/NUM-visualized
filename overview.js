// Fetch messages and add them to the page.
function fetchMessages(){
    const url = 'https://api.myjson.com/bins/sralr';
    fetch(url).then((response) => {
        return response.json();
    }).then((items) => {
        const messageContainer = document.getElementById('overviewContainer');
        if(items.length == 0){
            messageContainer.innerHTML = '<p>There are no posts yet.</p>';
        }
        else{
            messageContainer.innerHTML = '';
        }


        const keys = Object.keys(items);

        keys.forEach((item) => {
            itemAsJson= items[item];
            const messageDiv = buildDiv(itemAsJson);
            messageContainer.appendChild(messageDiv);
        });
        messageContainer.style.display = "flex";
    });
}

function buildDiv(item){
    console.log(item);
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("pane-description");
    descriptionDiv.appendChild(document.createTextNode(item.Description));

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('pane-author');
    authorDiv.appendChild(document.createTextNode(item.Author));

    //item-box-header
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('item-box-header');
    headerDiv.appendChild(document.createTextNode(item.Name));

    const paneDiv = document.createElement('div');
    paneDiv.classList.add('pane');
    paneDiv.appendChild(descriptionDiv);
    paneDiv.appendChild(authorDiv);


    const boxDiv = document.createElement('div');

    let url = "dashboard-";
    url = url+ item.Name.toLowerCase();
    console.log(url);

    boxDiv.classList.add("item-box");

    let Imageloc = "url(";
    Imageloc = Imageloc + item.ImageLocation;
    Imageloc = Imageloc + ")";
    console.log(Imageloc);

    boxDiv.style.backgroundImage = Imageloc;
    boxDiv.onclick = function(){showPage(url)};
    console.log(boxDiv.onclick);
    boxDiv.appendChild(headerDiv);
    boxDiv.appendChild(paneDiv);

    return boxDiv;
}

function buildOverview(id){
    fetchMessages();
    showPage(id);
}