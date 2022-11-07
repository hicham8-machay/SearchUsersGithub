
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';


function App() {
  const {products} = data ;
  const [cardItems , setCardItems] = useState([]);
  const onAdd = (product)=>{
    const exist = cardItems.find((x) => x.id === product.id);
    if(exist){
      setCardItems(
         cardItems.map((x)=> 
           x.id===product.id ? {...exist , qty : exist.qty+1} : x
         )
      );
    }else{
      setCardItems([...cardItems , {...product, qty: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
         setCardItems(cardItems.filter((x) => x.id != product.id));
    }else{
      setCardItems(cardItems.map((x) => 
           x.id===product.id ? {...exist , qty : exist.qty-1} : x
         ))
    }
  }
  return (
    <div className="App">
      <Header countCardItems={cardItems.length}></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cardItems={cardItems}></Basket>
      </div>
    </div>
  );
}

export default App;
