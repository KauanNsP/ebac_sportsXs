import { Provider, useDispatch, useSelector } from 'react-redux'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/api'
import { adicionarCarrinho } from './store/reducers/carrinho'
import { RootReducer, store } from './store'
import { adicionarFavoritar } from './store/reducers/favorito'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const handleAdicionarNoCarinho = (produto: Produto) => {
    dispatch(adicionarCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(adicionarFavoritar(produto))
  }
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        {isLoading ? (
          <h2>Carregando...</h2>
        ) : (
          <Produtos
            produtos={produtos ?? []}
            favoritos={favoritos}
            favoritar={handleFavoritar}
            adicionarAoCarrinho={handleAdicionarNoCarinho}
          />
        )}
      </div>
    </Provider>
  )
}

export default App
