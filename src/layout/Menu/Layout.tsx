import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar.png' alt='' />
                <div className={styles['name']}>Пользователь</div>
                <div className={styles['email']}>user@ya.ru</div>
            </div>
            <div className={styles['menu']}>
                <Link to='/' className={styles['link']}>
                    <img src='/menu.svg' alt='' />
                    Меню
                </Link>
                <Link to='/cart' className={styles['link']}>
                    <img src='/cart.svg' alt='' />
                    Корзина
                </Link>
            </div>
            <Button className={styles['exit']}>
                <img src='/exit.svg' />Выход
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}