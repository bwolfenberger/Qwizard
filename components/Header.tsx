import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>Qwizard</h1>
            <p className={headerStyles.description}>🧙‍♂️ Yer a Qwizard Harry ⚡️ </p>
        </div>
    )
}

export default Header