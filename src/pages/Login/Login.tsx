import { Link } from "react-router-dom";
import Headling from "../../Headling/Headling";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from './Login.module.css'
import { FormEvent } from "react";

export function Login() {
    const submit = (e: FormEvent) => {
        e.preventDefault()
    }
    return <div className={styles['login']} onSubmit={submit}>
        <Headling>Вход</Headling>
        <form className={styles['form']}>
            <div className={styles['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id="email" placeholder="Email" />
            </div>
            <div className={styles['field']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id="password" type="password" placeholder="Пароль" />
            </div>
            <Button appearence="big">Вход</Button>
        </form>
        <div className={styles['link']}>
            <div>Нет аккаунта?</div>
            <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
    </div>
}