import styles from './styles.module.css'
import logo from '../../assets/logo.png'

export const Header: React. FC = () => {
    return(
        <head className={styles.header}>
            <img src={logo} alt="logo" />
        </head>
    )
}