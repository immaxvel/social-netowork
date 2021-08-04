import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import BG from "./components/BG/BG";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <BG/>
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        dispatch={props.dispatch}
                        store={props.store}
                    />}/>
                <Route path="/profile" render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}
                />
            </div>
        </div>
    );
};

export default App;
