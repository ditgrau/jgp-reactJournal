import { Products } from './components/Products'
import { Header } from './components/Header';
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import { useFilters } from './hooks/useFilters';


function App() {

  const [products] = useState(initialProducts);
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  // pasamos la funcion de actualizacion de estado "setFilters" por prop "changeFilters"
  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
}

export default App
