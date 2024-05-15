import { Await, useLoaderData } from "react-router-dom"
import { type Product } from "../../components/interfaces/product.interface"
import { Suspense } from "react"

export function Product() {
    const data = useLoaderData() as {data: Product}
    return <>
        <Suspense fallback={'Загрузка...'}>
            <Await
                resolve={data.data}
            >
                {({data}: {data: Product}) => (
                    <>{data.name}</>
                )}
            </Await>
        </Suspense>
    </>
}