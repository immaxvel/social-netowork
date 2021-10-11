import styles from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from '../../../assets/images/avatar.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    if(!profile){
        return <Preloader/>
    }

    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src={profile.photos.large != null ? profile.photos.small : userPhoto} alt="avatar"/>
            <div className={styles.info}>
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <p>{profile.lookingForAJob}</p>
                <p>{profile.lookingForAJobDescription}</p>
                <p>{profile.contacts.github}</p>
                <p>{profile.contacts.vk}</p>
                <p>{profile.contacts.facebook}</p>
                <p>{profile.contacts.instagram}</p>
                <p>{profile.contacts.twitter}</p>
            </div>
        </div>
    );

};
export default ProfileInfo;

