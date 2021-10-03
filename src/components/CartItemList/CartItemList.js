import CartItem from '../CartItem/CartItem'

const CartItemList = ({items, removeItem, sale}) => {
    return (
    <>
        {items.map((item, index) => {
            return <CartItem key={index} item={item} removeItem={removeItem} sale={sale}/>
        })}
    </>
    )
}

export default CartItemList

