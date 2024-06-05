// import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';



// function AppRouter() {
//     return (
//         <div>
//             <Nav justify variant="tabs" defaultActiveKey="/home">
//                 <Nav.Item>
//                     <Nav.Link href="/">All
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="/full-stack-development"> Full Stack Development</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="/data-science">Data Science</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="/cyber-security" >Cyber Securety</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="/career" >Career</Nav.Link>
//                 </Nav.Item>
//             </Nav>
//             <div>
//                 <Display />
//             </div>

//         </div>

//     )

// }

function Home() {
    return (
        <CardGroup style={{gap:'20px',padding:'40px'}}>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png" />
                <Card.Body>
                    <Card.Title>How to Render an Array of Objects in React? [in 3 easy steps]</Card.Title>
                    <Card.Text>
                        <h6>By Tarun Singh  </h6>
                    </Card.Text>
                    <h6> 21 Mar, 2024</h6>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png" />
                <Card.Body>
                    <Card.Title>Use ReactJS to Fetch and Display Data from API – 5 Simple Steps</Card.Title>
                    <Card.Text>
                        <h6>By Tarun Singh  </h6>
                    </Card.Text>
                    <h6> 21 Mar, 2024</h6>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg" />
                <Card.Body>
                    <Card.Title>Use ReactJS to Fetch and Display Data from API – 5 Simple Steps</Card.Title>
                    <Card.Text>
                        <h6>By Tarun Singh  </h6>
                    </Card.Text>
                    <h6> 21 Mar, 2024</h6>
                </Card.Body>
            </Card>
            <Card className='attach'>
                <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png" />
                <Card.Body>
                    <Card.Title>Use ReactJS to Fetch and Display Data from API – 5 Simple Steps</Card.Title>
                    <Card.Text>
                        <h6>By Tarun Singh  </h6>
                    </Card.Text>
                    <h6> 21 Mar, 2024</h6>
                </Card.Body>
            </Card>
            

        </CardGroup>


    )

}

export default Home;



