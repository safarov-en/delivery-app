import { useSelector } from "react-redux";
import Headling from "../../Headling/Headling";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { Product } from "../../components/interfaces/product.interface";
import CartItem from "../../components/CartItem/CartItem";
import axios from "axios";
import { PREFIX } from "../../helpers/API";

export function Cart() {
    const [cartProducts, setCartProducts] = useState<Product[]>([])
    const items = useSelector((s: RootState) => s.cart.items)
    const getItem = async (id: number) => {
        const {data} = await axios.get(`${PREFIX}/products/${id}`)
        return data
    }
    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)))
        setCartProducts(res)
    }
    useEffect(() => {
        loadAllItems()
    }, [items])
    return <>
        <Headling>Корзина</Headling>
        {cartProducts.map(i => {
            const product = cartProducts.find(p => p.id === i.id)
            if(!product) {
                return
            }
            return <CartItem key={i.id} count={i.count} {...product} />
        })}
    </>
}