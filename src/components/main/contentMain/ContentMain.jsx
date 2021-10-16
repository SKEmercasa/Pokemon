import styles from './ContentMain.module.css';
import MainPage from './mainPage/MainPage';

function ContentMain() {
    return (
        <div className={styles.ContentMain}>
            <MainPage />
            <div>
                ChatPage
            </div>
        </div>
    )
}

export default ContentMain;