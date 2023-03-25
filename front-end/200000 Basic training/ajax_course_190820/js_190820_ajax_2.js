document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUser() {
    const request = new XMLHttpRequest();
    request.open('GET', 'user.json', true);

    request.onload = function () {// if want use this use function , not arrow 
        // console.log(request);
        if (this.status == 200) {
            let user = JSON.parse(this.responseText);

            let output = '';
            output += `<ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
                </ul>`;
            document.getElementById('user').innerHTML = output;
        }
    }

    request.send();
}

function loadUsers() {
    const request = new XMLHttpRequest();
    request.open('GET', 'users.json', true);

    request.onload = function () {// if want use this use function , not arrow 
        // console.log(request);
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);

            let output = '';
            for (let user of users) {
                output += `<ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
                </ul>`;
            }

            document.getElementById('users').innerHTML = output;
        }
    }

    request.send();
}