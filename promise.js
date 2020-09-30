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
function createPosts(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject("error");
            }
        }) 
    })
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

createPosts({title: 'Post Three', body: 'This is post three.'})
.then(getPosts)
.catch(error => console.log(error));

const promise_2 = fetch('https://jsonplaceholder.typicode.com/users')
    .then((resolve) => resolve.json());

promise_2
    .then(
        function megjelenit(values) {
            let tablazat = '<table><tr><th>Név</th><th>Email</th></tr>';
            //console.log(values[0].name +' - '+ values[0].email)
            tablazat += '<tr><td>${values[0].name}</td><td>${values[0].email}</td></tr>';
            tablazat += '</table>';
            document.getElementById('tablazat').innerHTML = tablazat;
        }
    );
