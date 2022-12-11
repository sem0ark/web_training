const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

console.log(username, room);

const socket = io();

socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({room, users}) => {
  outputRoomName(room);
  outputRoomUsers(users);
});

socket.on('msg', msg => {
  // console.log(msg);
  outputMsg(msg);
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get msg text 
  const msg = e.target.elements.msg.value;
  // console.log(msg);
  // Emitiing a msg to the server
  socket.emit('chatMsg', msg);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Clear input
  e.target.elements.msg.value = '';

});

// output msg to DOM
function outputMsg(msg) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${msg.username} <span>${msg.time}</span></p>
  <p class="text">
    ${msg.text}
  </p>`;

  chatMessages.appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputRoomUsers(users) {
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}