import styles from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from '../../../assets/images/avatar.jpg'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src={props.profile.photos.large != null ? props.profile.photos.small : userPhoto} alt="avatar"/>
            <div className={styles.info}>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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

