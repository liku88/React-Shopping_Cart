import React from 'react'

import {Container , ListGroup , ListGroupItem , Button , CardHeader , CardBody , Card , CardFooter , Col, Row} from 'reactstrap'

const Cart = ({CardItem ,  RemoveItem , BuyNow}) => {
    let amount = 0;
    CardItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
        
    });
    return(
        <Container fluid>
        <h1 className="text-success">Your Cart</h1>
        <ListGroup>
        {CardItem.map(item => (
            <ListGroupItem key={item.id} >
            <Row>
            <Col>
            <img
            height = {80}
            src = {item.tinyImage}
            />
            </Col>
            <Col className="text-center">
            <div className="text-primary" >
            {item.productName}
            </div>
            <span>price $- {item.productPrice}</span>
            <Button
            color = "danger"
            onClick={() => RemoveItem(item)}
            >Remove Item</Button>
            </Col>
            </Row>
            </ListGroupItem>
        
            

        ))}
        </ListGroup>
        
        {
            CardItem.length >= 1 ? (
                <Card className="text-center mt-3">
                <CardHeader>Grand Total</CardHeader>
                <CardBody>
                  Your amount for {CardItem.length} product is {amount}
                </CardBody>
                <CardFooter>
                  <Button color="success" onClick={BuyNow}>
                    pay here
                  </Button>
                </CardFooter>
              </Card>
            ) : (
                <h1 className="text-warning">Cart is empty </h1>
            )
        }


        </Container>
    )
}



export default Cart