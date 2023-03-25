import styles from './styles.module.css'
import { PencilLine } from "phosphor-react"

const BG_IMG = 'https://images.unsplash.com/photo-1679674704818-f3a500c1305b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
const PROFILE_IMG = 'https://avatars.githubusercontent.com/u/37307099?s=96&v=4'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.bg_image} src={BG_IMG}/>
            <div className={styles.profile}>

                <img className={styles.profile_img} src={PROFILE_IMG} />
                <strong>Gabriel Davi</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}