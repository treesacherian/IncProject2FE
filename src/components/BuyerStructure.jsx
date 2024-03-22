import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BuyerStructure (props) {
    return ( 
        <>
        <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Id:&nbsp;{props.id}</ListGroup.Item>
        <ListGroup.Item>Customer Name:&nbsp;{props.buyer}</ListGroup.Item>
        <ListGroup.Item>Contact Number:&nbsp;{props.tel}</ListGroup.Item>
        <ListGroup.Item>Address:&nbsp;{props.address}</ListGroup.Item>
        <ListGroup.Item>User Id:&nbsp;{props.userId}</ListGroup.Item>

             </ListGroup>
    </Card>
        </>
     );
}

export default BuyerStructure ;