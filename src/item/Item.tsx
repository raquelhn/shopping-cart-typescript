import Button from '@material-ui/core/Button';
//types
import {CartItemType} from '../App';
//styles
import {Wrapper} from './Item.styles';

type Props = {
    item:CartItemType;
    //is the function from App.tsx
    handleAddToCart:(clickItem: CartItemType)=>void;
}

//react generic component, the FC is the type por the component, we are accepting the props
const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick ={()=>handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
);

export default Item;