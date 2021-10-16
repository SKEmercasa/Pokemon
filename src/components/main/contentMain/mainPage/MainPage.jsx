import styles from './MainPage.module.css';
import bgMain from './../../../../img/bgMain.jpg';

function MainPage() {
    return (
        <div className={styles.MainPage}>
            <img src={bgMain} alt="backgroundMain" />
        </div>
    )
}

export default MainPage;