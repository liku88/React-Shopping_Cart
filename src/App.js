import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


import {Container , Row , Col} from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart'

const App = () => {
  const [cartItem , setCartItem] = useState([])
  
   const AddItem = item => {
     const isalreadyAdded = cartItem.findIndex(function(array){
       return array.id === item.id
     })
     if(isalreadyAdded !== -1){
        toast("already added in cart", {type: "error"});
        return;
     }
      setCartItem([...cartItem , item])
   }
   const BuyNow = () => {
     setCartItem([]);
     toast("Purchased Succesfull" , {type: "success"} )
   }

   const RemoveItem = item => {
     setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
   }

return(
 <Container fluid>
 <ToastContainer />
 <Row>
 <Col md={8}>
 <BuyPage AddItem= {AddItem} />
 </Col>
 <Col md= {4}>
<Cart CardItem={cartItem} RemoveItem = {RemoveItem} BuyNow={BuyNow} />
 </Col>
 </Row>
 </Container>
)
}



export default App;
