import { Link } from 'react-router-dom'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function App() {
  return (
    <>
      <Button>Кнопка</Button>
      <Input />
      <div>
        <Link to='/'>Меню</Link>
        <Link to='/cart'>Корзина</Link>
      </div>
    </>
  )
}

export default App
