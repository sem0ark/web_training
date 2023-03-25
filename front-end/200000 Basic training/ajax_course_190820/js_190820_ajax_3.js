document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function () {
        if (this.status == 200) {
            const users = JSON.parse(this.responseText);

            let output = '';
            for (user of users) {
                output +=
                    `<div class="user">
                <img src="${user.avatar_url}" alt="not found" style="width: 70px; height: 70px;">
                <ul>
                <li>ID: ${user.id}</li>
                <li>Login: ${user.login}</li>
                </ul>
                </div>`
            }

            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}