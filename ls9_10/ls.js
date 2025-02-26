"use strict";
console.log('-------------------users fetch---------------');
const userDom = document.getElementById('users');
if (userDom) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then((users) => {
        users.forEach((user) => {
            const newUserDiv = document.createElement('div');
            newUserDiv.classList.add('users-style');
            newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
            userDom.appendChild(newUserDiv);
        });
    });
}
console.log('-------------------users XMLHttpRequest---------------');
const users2DOM = document.getElementById('users-xhr');
if (users2DOM) {
    const getUsers = new XMLHttpRequest();
    getUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
    getUsers.send();
    getUsers.onload = function () {
        const newUsers = JSON.parse(this.responseText);
        newUsers.forEach((user) => {
            const newUser2Div = document.createElement('div');
            newUser2Div.classList.add('users2');
            newUser2Div.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
            users2DOM.appendChild(newUser2Div);
        });
    };
}
const postsDom = document.getElementById('posts-style');
if (postsDom) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then((posts) => {
        posts.forEach((post) => {
            const newPostDiv = document.createElement('div');
            newPostDiv.classList.add('posts-style');
            newPostDiv.innerHTML = `<h4 class="braun">${post.id}. ${post.title}</h4><hr><p>${post.body}</p>`;
            postsDom.appendChild(newPostDiv);
        });
    });
}
const commentsDom = document.getElementById('comments-style');
if (commentsDom) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resp => resp.json())
        .then((comments) => {
        comments.forEach((comment) => {
            const newCommentDiv = document.createElement('div');
            newCommentDiv.classList.add('comments-style');
            newCommentDiv.innerHTML = `<h4 class="braun">${comment.name}.</h4> <div>${comment.email}</div><p>${comment.body}</p>`;
            commentsDom.appendChild(newCommentDiv);
        });
    });
}
