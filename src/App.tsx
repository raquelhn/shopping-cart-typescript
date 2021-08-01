
import {useState} from 'react'
import {useQuery} from 'react-query'
//components
import Item from './item/Item'
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

//Styles
import {Wrapper, StyleButton} from './App.styles'
import { AddShoppingCart } from '@material-ui/icons';

//types
export type CartItemType = {
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}




//we gotta fetch from an api
const getProducts =  async (): Promise<CartItemType[]> =>
//the first one is for when we convert to JSON
//the secont one is the API calling itself
 await(await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState ([] as CartItemType[])
  const {data, isLoading, error}=useQuery<CartItemType[]>(
    'products',
    getProducts
  )
  console.log(data);


  const getTotalItems = (items: CartItemType[]) =>
  //this iterates throuhg all the items in the cart
  //and add the amount, it starts with zero
   items.reduce((ack:number,item) => ack + item.amount,0);

  const handleAddToCart = (clickedItem:CartItemType) => 
  {
    setCartItems(prev=>{
      const isItemInCart=prev.find(item=>item.id===clickedItem.id)
      if(isItemInCart){
        return prev.map(item=>(
          item.id===clickedItem.id
          ?{...item,amount:item.amount+1}
          :item
        ))
      }
      //first time the item is added, we add the item to the array and the amount to 1
      return [...prev,{...clickedItem, amount:1}];

    })
  };

  const handleRemoveFromCart = (id:number) => {
    //the reduce is call in the previous state
    setCartItems(prev =>
      prev.reduce((ack,item)=>{
        if(item.id===id){
          if(item.amount===1) return ack;
          //we remove 1 from the amount
          return [...ack, {...item,amount:item.amount-1}];
        }else{
          return[...ack,item];
        }
        //the accumulator starts as an empty array with cartItemType
      },[] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>


  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)}>
       <Cart 
       cartItems={cartItems}
       addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyleButton onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'></Badge>
        <AddShoppingCart/>
      </StyleButton>
      <Grid container spacing={3}>
        {data?.map(item=>(
          <Grid item key={item.id} xs={12} sm={4}>
           <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}


      </Grid>
    </Wrapper>
  );
}

export default App;
