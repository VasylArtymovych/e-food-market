import { Rating, Button } from '@mui/material'
import { IProduct } from 'types/product'
import { currencyParser } from 'utils/currencyParser'

interface IGridProductCardProps {
  product: IProduct
}

export const GridProductCard = ({ product }: IGridProductCardProps) => {
  return (
    <div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Rating name="read-only" value={product.rating} readOnly />
        <p>{currencyParser(product.price)}</p>
      </div>
      <div>
        <Button variant="contained" color="success">
          Buy now
        </Button>
      </div>
    </div>
  )
}
