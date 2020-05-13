import React, {useState, useEffect} from 'react'
import Axios from "axios"
import {random , commerce } from "faker"
import {Container , Col, Row} from "reactstrap"
import CardItem from './CardItem'

// const apiKey = "563492ad6f91700001000001ffad4dfd72f740888cd5ba1124270570"

// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localurl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json"

const BuyPage = ({AddItem}) => {
  const [product , setProduct] = useState([]);

//   const FetchPhotos = async () => {
//       const response = await Axios.get(url, {
//           header: {
//               Authorization : apiKey
//           }
//       })
//   }

const FetchPhotos = async () => {
    const {data} = await Axios.get(localurl)

const {photos} = data;

const AllProducts = photos.map(photo => ({
    smallImage: photo.src.medium,
    tinyImage: photo.src.tiny,
    productName: random.word(),
    productPrice: commerce.price(),
    id : random.uuid()
}))

setProduct(AllProducts)
}


useEffect(()=>{
    FetchPhotos()
}, [])

return(
    <Container fluid>
    <h1 className="text-success text-center">
    Buy Page
    </h1>
    <Row>
    {product.map(product => (
       <Col md={4} key={product.id} >
       <CardItem product ={product} AddItem = {AddItem} />
       </Col>
    ))}
    </Row>
    </Container>
)

}

export default BuyPage