import 'bootstrap/dist/css/bootstrap.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


function CyberSecurity() {
    return (
        <CardGroup style={{ gap: '20px', padding: '40px' }}>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png" />
                <Card.Body>
                    <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
                    <Card.Text>
                        <h6>By Tushar Vinocha  </h6>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='attach' >
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp" />
                <Card.Body>
                    <Card.Title>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</Card.Title>
                    <Card.Text>
                        <h6>By Jaishree Tomar  </h6>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp" />
                <Card.Body>
                    <Card.Title>What Is Hacking? Types of Hacking & More</Card.Title>
                    <Card.Text>
                        <h6>By Meghana D </h6>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif" />
                <Card.Body>
                    <Card.Title>What is Cybersecurity? Importance and its uses & the growing challenge...</Card.Title>
                    <Card.Text>
                        <h6>By Tushar Vinocha </h6>
                    </Card.Text>
                </Card.Body>
            </Card>


        </CardGroup>


    )


}
export default CyberSecurity;