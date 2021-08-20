import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BG from "./components/BG/BG";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <BG/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer />}/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer />}
                />
                <Route path="/Users"
                       render={() => <UsersContainer />}
                />
            </div>
        </div>
    );
};

export default App;
