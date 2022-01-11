
function requestGrant(topic, pricipal) {
    // @TODO call grant topic API
}

function createConnector(topic, principal, config) {
    // @TODO call API that creates a connector
}

function generateClient(topic, config) {
    // @TODO call API that generates java spring boot code
}

function addButton(div, info) {
    

    info.forEach( function(i) {
        var button = document.createElement('button');
        button.type = 'button';
        button.setAttribute("class", "dm btn");
        button.innerHTML = i.n;
        // button.onclick = i.f;
        button.onclick = function() {
            console.log(this.parentElement);
            requestGrant(this.parentElement.getAttribute("topic"), "admin"); // hard coded admin principal
        };
        div.appendChild(button);
    })
}



document.querySelectorAll("span[title='subscribe']").forEach(function (el) {
    console.log(el);
    buttonsDiv = document.createElement('div');
    buttonsDiv.type = 'div';
    buttonsDiv.setAttribute("class", "dm btn");
    
    li = el.parentElement.parentElement.parentElement.parentElement.parentElement;
    mb4Div = el.parentElement.parentElement;
    mb4Div.after(buttonsDiv);

    buttonsDiv.setAttribute("topic", li.getAttribute("id"));

    if(true) addButton(buttonsDiv, [ { n:'Request Access', f:requestGrant }, { n:'Create Connector', f:createConnector }, { n:'Create Spring Client', f:generateClient }]);
    // else 
});