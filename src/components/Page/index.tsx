import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import styles from "./styles.module.css"

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
    return(
        <div>
            <Header />
            <div className={styles.wrapper}>

                <Sidebar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}