import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const valorTotal = carrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
