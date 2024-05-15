import { Link, useNavigate } from "react-router-dom";
import Headling from "../../Headling/Headling";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from './Login.module.css'
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { login } from "../../store/user.slice";

export type LoginForm = {
    email: {
        value: string
    }
    password: {
        value: string
    }
}

export function Login() {
    const [error, setError] = useState<string | null>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispath>()
    const jwt = useSelector((s: RootState) => s.user.jwt)
    useEffect(() => {
        if(jwt) {
            navigate('/')
        }
    }, [jwt, navigate])
    const submit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null)
        const target = e.target as typeof e.target & LoginForm
        const {email, password} = target
        await sendLogin(email.value, password.value)
    }
    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}))
    }
    return <div className={styles['login']}>
        <Headling>Вход</Headling>
        {error && <div className={styles['error']}>{error}</div>}
        <form className={styles['form']} onSubmit={submit}>
            <div className={styles['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id="email" name='email' placeholder="Email" />
            </div>
            <div className={styles['field']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id="password" name='password' type="password" placeholder="Пароль" />
            </div>
            <Button appearence="big">Вход</Button>
        </form>
        <div className={styles['link']}>
            <div>Нет аккаунта?</div>
            <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
    </div>
}