import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";
import cn from 'classnames'

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar.png' alt='' />
                <div className={styles['name']}>Пользователь</div>
                <div className={styles['email']}>user@ya.ru</div>
            </div>
            <div className={styles['menu']}>
                <NavLink to='/' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src='/menu.svg' alt='' />
                    Меню
                </NavLink>
                <NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src='/cart.svg' alt='' />
                    Корзина
                </NavLink>
            </div>
            <Button className={styles['exit']}>
                <img src='/exit.svg' />Выход
            </Button>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}