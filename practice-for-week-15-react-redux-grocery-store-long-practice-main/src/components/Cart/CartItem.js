import { useState, useEffect } from 'react';
import { removeProduce, addProduce } from '../../store/cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(addProduce(item.id))
  }
  const handleRemove = () => {
    dispatch(removeProduce(item.id))
  }
  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          onClick={handleAdd}
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button" 
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;