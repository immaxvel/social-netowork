import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import BG from "./components/BG/BG";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <BG/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer />}/>
                <Route path="/profile"
                       render={() => <Profile />}
                />
                <Route path="/Users"
                       render={() => <UsersContainer />}
                />
            </div>
        </div>
    );
};

export default App;
