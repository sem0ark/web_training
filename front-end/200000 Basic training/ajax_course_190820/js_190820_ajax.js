// AJAX CRASH COURSE

document.querySelector('#button').addEventListener('click', loadText);

function loadText() {
    // create XHR Object
    var request = new XMLHttpRequest();
    // OPEN - type, url/file, async/not
    request.open('GET', 'sample.txt', true);

    console.log('READYSTATE:', request.readyState);

    // OPTIONAL - used for loaders
    request.onprogress = function () {
        console.log('READYSTATE:', request.readyState);
    }


    request.onload = function () {
        console.log('READYSTATE:', request.readyState);
        if (this.status == 200) {
            // console.log(this.responseText);
            document.querySelector('#text').innerHTML = this.responseText;
        } else if (this.status == 404) {
            document.querySelector('#text').innerHTML = 'Not Found';
        }
    }

    request.onerror = function () {
        console.log(reqest.error);
    }

    // request.onreadystatechange = function () {
    //     console.log('READYSTATE:', request.readyState);
    //     if (this.readyState == 4 && this.status == 200) {
    //         // console.log(this.responseText);
    //     }
    // }


    //sends request
    request.send();

    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}