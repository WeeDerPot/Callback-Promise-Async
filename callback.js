'use strict';

const posts = [
    {'title': 'post one', 'body': 'this is post one'},
    {'title': 'post two', 'body': 'this is post two'},
];

function getPosts() {
    setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    }, 1000);
}

function removeFirstElement() {
    posts.shift();
}

function reName() {
    posts[2].title.replace('three', 'four');
}

function createPosts(post, callback_1, callback_2, callback_3) {
    setTimeout(() => {
        posts.push(post);
        callback_1()
        callback_2()
        callback_3()
    }, 2000);
}

// getPosts();

createPosts({ 'title': 'post three', 'body': 'this is post three' },removeFirstElement, reName, getPosts);