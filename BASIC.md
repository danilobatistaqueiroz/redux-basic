store/index.js
```js
import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
const store = configureStore({
  reducer: { categorias: categoriasSlice }
});
```

store/reducers/categorias.js
```js
import { createSlice } from '@reduxjs/toolkit'; 
const categoriasSlice = createSlice({ 
  name: 'categorias', 
  initialState: { 
    categorias: []
  }
});
```

index.js
```js
import store from './store';
import { Provider } from 'react-redux';
import Home from 'pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Home/>
  </Provider>
);
```

pages/Home/index.js
```js
import { useSelector } from 'react-redux';
export default function Home() {
  const categorias = useSelector(state => state.categorias);
  return (
    <div>
      {categorias.map((categoria, index) => (
        <div key={index} >
          <img src={categoria.thumbnail} alt={categoria.nome} />
          <h1>{categoria.nome}</h1>
        </div>
      ))}
    </div>
  )
}
```