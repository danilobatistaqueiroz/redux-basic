store/reducers/itens.js
```js
import { createSlice } from '@reduxjs/toolkit';
const initialState = [{
  id: 1,
  favorito: false
}];
const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});
export const { mudarFavorito } = itensSlice.actions;
```

components/Item/index.js
```js
import { mudarFavorito } from 'store/reducers/itens';
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
function resolverFavorito() {
  dispatch(mudarFavorito(id));
} 
<Button onClick={resolverFavorito} />
```