import { forwardRef } from "react";
import styles from './Search.module.css'
import cn from 'classnames'
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({isValid, className, ...props}, ref) {
    return (
        <div className={styles['input-wrapper']}>
            <input ref={ref} className={cn(styles['input'], className, {
                [styles['invalid']]: isValid
            })} {...props} /> 
            <img className={styles['icon']} src='/search.svg' />   
        </div>
    )
})

export default Search