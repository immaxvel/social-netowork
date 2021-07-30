import styles from "../ProfileInfo/ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src="avatar.jpg" alt="avatar"/>
            <div className={styles.info}>
                <h2>Maxim Velichko</h2>
                <p>Front-End Developer</p>
                <p>Minsk, Belarus</p>
            </div>
        </div>
    );

};
export default ProfileInfo;

