const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


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
            dialogs: [
                {id: 1, name: 'Maxim'},
                {id: 2, name: 'Julia'},
                {id: 3, name: 'Yegor'},
                {id: 4, name: 'Natalia'},
                {id: 5, name: 'Inna'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id:6, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);


        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }

    },
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


window.state = store;


export default store;