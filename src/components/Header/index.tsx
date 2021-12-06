import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <h1>MOVIES</h1>
      </Link>
    </header>
  )
}

export default Header;