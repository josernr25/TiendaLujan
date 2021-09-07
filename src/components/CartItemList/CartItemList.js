import CartItem from '../CartItem/CartItem'

const CartItemList = ({items, removeItem}) => {
    return (
    <>
        {items.map((item, index) => {
            return <CartItem key={index} item={item} removeItem={removeItem}/>
        })}
    </>
    )
}

export default CartItemList

