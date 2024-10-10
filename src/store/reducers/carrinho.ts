import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    removerCarrinho: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload
      state.itens = state.itens.filter((item) => item.id !== produtoId)
    }
  }
})

export const { adicionarCarrinho, removerCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
