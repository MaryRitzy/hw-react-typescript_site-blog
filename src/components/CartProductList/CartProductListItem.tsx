import { Product } from 'utils/productsArray'

type Props = {
    product: Product
}
const CartProductListItem = ({ product }: Props) => {
    return <div>{product.title}</div>
}
export default CartProductListItem
