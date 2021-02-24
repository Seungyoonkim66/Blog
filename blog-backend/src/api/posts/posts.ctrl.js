let postId = 1;

// initial data
const posts = [
    {
        id : 1, 
        title: 'title',
        body: 'description',
    }
];

// POST  /api/posts
exports.write = ctx => {
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
};

// GET : post list  /api/posts
exports.list = ctx => {
    ctx.body = posts;
}

// GET : specific post  /api/posts/:id
exports.read = ctx => {
    const { id } = ctx.params;
    const post = posts.find(p => p.id.toString() === id);
    
    if (!post){
        ctx.status = 404;
        ctx.body = {
            message: 'No post exists',
        };
        return;
    }
    ctx.body = post;
};


//    DELETE  /api/posts/:id
exports.remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p,id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No post exists',
        };
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204;

}

// PUT  /api/posts/:id (update a whole post)
exports.replace = ctx => {
    const { id } =  ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No post exists',
        };
        return;
    }
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

// PATCH  /api/posts/:id (update a part of a post)
exports.update = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (id === -1){
        ctx.status = 404;
        ctx.body = {
            message: 'No post exists',
        };
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    };
    ctx.body = posts[index];
};
