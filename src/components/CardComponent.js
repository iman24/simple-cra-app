import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardComponent(props) {

  return (
    <Card style={{ width: props.width }}>
      <Card.Body>
        <Card.Title>{ props.title }</Card.Title>
        <Card.Text>
          { props.body }
        </Card.Text>
        { props.width !== 'auto' ? <Card.Link className="btn btn-primary btn-sm d-block" as={Link} to={`/post/` + props.id}>Read more</Card.Link> : <Card.Link className="btn btn-primary btn-sm" as={Link} to="/">Back to home</Card.Link> }
      </Card.Body> 
    </Card>
  );
}

export default CardComponent;