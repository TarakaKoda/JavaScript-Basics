// constructor function for blog post

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = []; 
    this.isLive = false;
}

const newPost = new Post('why black clover is the best new gen anime', 
'because its the only anime that has noelle', 'Taraka');

console.log(newPost);