import UiCompnents from "../../components/UiCompnents";
import styles from "./mainLayout.module.scss";


const MainLayout = ({children}) => {
    return(
        <>
            <UiCompnents />
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}



export default MainLayout;