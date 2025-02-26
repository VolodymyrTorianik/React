console.log('-------------------users fetch---------------');

interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

const userDom: HTMLElement | null = document.getElementById('users');

if (userDom) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then((users: User[]) => {
            users.forEach((user) => {
                const newUserDiv = document.createElement('div');
                newUserDiv.classList.add('users-style');
                newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
                userDom.appendChild(newUserDiv);
            });
        });
}

console.log('-------------------users XMLHttpRequest---------------');

const users2DOM: HTMLElement | null = document.getElementById('users-xhr');

if (users2DOM) {
    const getUsers = new XMLHttpRequest();
    getUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
    getUsers.send();
    
    getUsers.onload = function () {
        const newUsers: User[] = JSON.parse(this.responseText);
        newUsers.forEach((user) => {
            const newUser2Div = document.createElement('div');
            newUser2Div.classList.add('users2');
            newUser2Div.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
            users2DOM.appendChild(newUser2Div);
        });
    };
}

//posts
interface Post {
    id: number;
    title: string;
    body: string;
}

const postsDom: HTMLElement | null = document.getElementById('posts-style');

if (postsDom) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then((posts: Post[]) => {
            posts.forEach((post) => {
                const newPostDiv = document.createElement('div');
                newPostDiv.classList.add('posts-style');
                newPostDiv.innerHTML = `<h4 class="braun">${post.id}. ${post.title}</h4><hr><p>${post.body}</p>`;
                postsDom.appendChild(newPostDiv);
            });
        });
}

//comments
interface Comment {
    name: string;
    email: string;
    body: string;
}

const commentsDom: HTMLElement | null = document.getElementById('comments-style');

if (commentsDom) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resp => resp.json())
        .then((comments: Comment[]) => {
            comments.forEach((comment) => {
                const newCommentDiv = document.createElement('div');
                newCommentDiv.classList.add('comments-style');
                newCommentDiv.innerHTML = `<h4 class="braun">${comment.name}.</h4> <div>${comment.email}</div><p>${comment.body}</p>`;
                commentsDom.appendChild(newCommentDiv);
            });
        });
}
