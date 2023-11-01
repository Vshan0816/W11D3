import { useState, useEffect } from 'react';
import { removeProduce } from '../../store/cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()
  const handleClick = () => {
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
          onClick={handleClick}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;