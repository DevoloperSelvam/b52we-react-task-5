// src/components/NavigationMenu.jsx
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';


const NavigationMenu = () => {
  return (
            <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">All
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  href="/full-stack-development"> Full Stack Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/data-science">Data Science</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/cyber-security" >Cyber Securety</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/career" >Career</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>

  );
};

export default NavigationMenu;

