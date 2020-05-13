import React from "react"

import {
    Card, CardBody , CardText , CardTitle ,CardImg ,Button
} from 'reactstrap'

const CardItem  = ({product ,AddItem }) => {
  return(
      <Card className="mt-3 mb-2" >
      <CardImg 
      top
      height="250"
      width= "100%"
      src = {product.smallImage}
      />
      <CardBody className="text-center">
      <CardTitle>{product.productName}</CardTitle>
      <CardText className="secondary">Price : $ {product.productPrice}</CardText>
      <Button
      color="success"
      onClick= {() => AddItem(product)}
      >Buy Now</Button>
      </CardBody>
      </Card>
  )
}

export default CardItem