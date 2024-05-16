import styles from './CartItem.module.css'
import { CartItemProps } from './CartItem.props'
import { useDispatch } from 'react-redux'
import { AppDispath } from '../../store/store'
import { cartActions } from '../../store/cart.slice'

function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispath>()
    const increase = () => {
        dispatch(cartActions.add(props.id))
    }
    const descrease = () => {}
    const remove = () => {}
    return (
        <div className={styles['item']}>
            <div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
            <div className={styles['description']}>
                <div className={styles['name']}>{props.name}</div>
                <div className={styles['currency']}>{props.price}&nbsp;₽</div>
            </div>
            <div className={styles['actions']}>
                <button className={styles['button']} onClick={descrease}>
                    <img src='/price.svg' />
                </button>
                <div>{props.count}</div>
                <button className={styles['button']} onClick={increase}>
                    <img src='/price.svg' />
                </button>
                <button className={styles['remove']} onClick={remove}>
                    <img src='/price.svg' />
                </button>
            </div>
        </div>
    )
}

export default CartItem