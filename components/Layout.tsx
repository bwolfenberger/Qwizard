import Meta from './Meta'
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

interface Props { 
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
        <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>

            </div>
        </>
    )
}

export default Layout