import styles from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src={props.profile.photos.large} alt="avatar"/>
            <div className={styles.info}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.contacts.github}</p>
                <p>{props.profile.contacts.vk}</p>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.instagram}</p>
                <p>{props.profile.contacts.twitter}</p>
            </div>
        </div>
    );

};
export default ProfileInfo;

