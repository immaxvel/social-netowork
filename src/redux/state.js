let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likes: 12},
            {id: 2, post: 'It\'s my first post!', likes: 11}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT-Kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [

            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Julia'},
            {id: 3, name: 'Yegor'},
            {id: 4, name: 'Natalia'},
            {id: 5, name: 'Inna'}
        ]
    }

}

export let addPost = (post) => {
    let newPost = {
        id: 5,
        post: post,
        likes: 0,
    };
   state.profilePage.posts.push(newPost);
}



export default state;