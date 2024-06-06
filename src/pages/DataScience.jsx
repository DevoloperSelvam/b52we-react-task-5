import 'bootstrap/dist/css/bootstrap.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


function DataScience() {
    return (
        <CardGroup style={{ gap: '20px', padding: '40px' }}>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp" />
                <Card.Body>
                    <Card.Title>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</Card.Title>
                    <Card.Text>
                        <h6>By Isha Sharma  </h6>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='attach' >
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp" />
                <Card.Body>
                    <Card.Title>12 Real-World Data Science Examples: Power Of Data Science</Card.Title>
                    <Card.Text>
                        <h6>By Lukesh S </h6>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png" />
                <Card.Body>
                    <Card.Title>Can A Commerce Student Do Data Science?</Card.Title>
                    <Card.Text>
                        <h6>By Saakshi Priyadarshini</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp" />
                <Card.Body>
                    <Card.Title>Top Product-Based Companies for Data Scientists in 2024</Card.Title>
                    <Card.Text>
                        <h6>By Jaishree Tomar</h6>
                    </Card.Text>
                </Card.Body>
            </Card>


        </CardGroup>


    )


}
export default DataScience;