import 'bootstrap/dist/css/bootstrap.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


function FullStackDevelopment() {
    return (
        <CardGroup style={{gap:'20px',padding:'40px'}}>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg" />
                <Card.Body>
                    <Card.Title>Best Full-Stack Development Project Ideas in 2024</Card.Title>
                    <Card.Text>
                        <h6>By Isha Sharma</h6>
                    </Card.Text>
                    <h6> 25 Mar, 2024</h6>
                </Card.Body>
            </Card>
            <Card className='attach' >
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp" />
                <Card.Body>
                    <Card.Title>How Long Would It Take to Be a Full Stack Developer?</Card.Title>
                    <Card.Text>
                        <h6>By Meghana D </h6>
                    </Card.Text>
                    <h6> 26 Mar, 2024</h6>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png" />
                <Card.Body>
                    <Card.Title>How does Apache work? A detailed introduction to Apache</Card.Title>
                    <Card.Text>
                        <h6> By Tushar Vinocha </h6>
                    </Card.Text>
                    <h6> 26 Mar, 2024</h6>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png" />
                <Card.Body>
                    <Card.Title>10 Best Database Management Systems For Software Developers</Card.Title>
                    <Card.Text>
                        <h6> By Isha Sharma </h6>
                    </Card.Text>
                    <h6> 22 Mar, 2024</h6>
                </Card.Body>
            </Card>
            

        </CardGroup>


    )


}
export default FullStackDevelopment;