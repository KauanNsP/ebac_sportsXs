import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavotitosState = {
  itens: Produto[]
}

const initialState: FavotitosState = {
  itens: []
}

const favotitosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.some((p) => p.id === produto.id)

      if (!existe) {
        state.itens.push(produto)
      }
    },
    removerFavoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.itens = state.itens.filter((p) => p.id !== produto.id)
    }
  }
})

export const { adicionarFavoritar, removerFavoritar } = favotitosSlice.actions
export default favotitosSlice.reducer
