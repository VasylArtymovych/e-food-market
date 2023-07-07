import { GridProductCard } from 'components/products/GridProductCard'
import { IProduct } from 'types/product'

export const App = () => {
  const products: IProduct[] = [
    {
      id: '1',
      image: null,
      name: 'Onion',
      description: 'Some product description',
      rating: 3,
      price: 39.99
    }
  ]
  return (
    <div id="app">
      {products.map(prod => (
        <GridProductCard product={prod} key={prod.id} />
      ))}
    </div>
  )
}
