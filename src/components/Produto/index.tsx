import { useDispatch } from 'react-redux'
import { adicionarCarrinho } from '../../store/reducers/carrinho'
import {
  adicionarFavoritar,
  removerFavoritar
} from '../../store/reducers/favorito'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const paraAdicionarAoCarinho = () => {
    dispatch(adicionarCarrinho(produto))
  }

  const paraFavoritar = () => {
    console.log('funciona')
    if (estaNosFavoritos) {
      dispatch(removerFavoritar(produto))
    } else {
      dispatch(adicionarFavoritar(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={paraFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={paraAdicionarAoCarinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
