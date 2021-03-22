import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Phone.css'


const PhoneCard = ({ _id, name, price, imageFileName,color }) => {
    return (
        <Card className="phone-card">
            <Card.Img className="image" variant="top" src={imageFileName} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Price:<strong>{price}$</strong>
                </Card.Text>
                <Card.Text>
                    Color:{color}
                </Card.Text>
                <Link to={`/details/${_id}`} className="btn">See details</Link>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard