import { useDispatch, useSelector } from 'react-redux';
import {addCart} from "../../store/reducers/carts";

const LeatherCasesOneProduct = () => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.items);
    const item = useSelector(state => state.product.currentItem);

    const isItemInCart = carts.some(el => el.id === item.id);

    return (
        <div>
            {
                isItemInCart ?
                    <div>
                        <button>-</button>
                        <input type="text" />
                        <button>+</button>
                    </div> :
                    <button onClick={() => dispatch(addCart(item))}>В корзину</button>
            }
        </div>
    );
};

export default LeatherCasesOneProduct;
