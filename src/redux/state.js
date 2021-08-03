let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likes: 12},
                {id: 2, post: 'It\'s my first post!', likes: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT-Kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Maxim'},
                {id: 2, name: 'Julia'},
                {id: 3, name: 'Yegor'},
                {id: 4, name: 'Natalia'},
                {id: 5, name: 'Inna'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessages = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessages);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


window.state = store;


export default store;