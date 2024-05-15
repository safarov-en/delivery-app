import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart.tsx'
import { Error } from './pages/Error/Error.tsx'
import { Layout } from './layout/Menu/Layout.tsx'
import { Product } from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
const Menu = lazy(() => import('./pages/Menu/Menu.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        loader: async ({params}) => {
          return defer({
            data: await axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
          })
        }
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
