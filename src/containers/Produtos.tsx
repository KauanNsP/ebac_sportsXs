import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { adicionarCarrinho } from '../store/reducers/carrinho'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const dispatch = useDispatch()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const idsDosFavoritos = favoritos.map((f) => f.id)
    return idsDosFavoritos.includes(produtoId)
  }

  const paraAdicionarAoCarinho = (produto: ProdutoType) => {
    dispatch(adicionarCarrinho(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={paraAdicionarAoCarinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
