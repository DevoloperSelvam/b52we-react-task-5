import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './App.css';


const NotFound = () => {
  return (
    <>
      <h1>Page Not Found ,Please Check The URL</h1>
      <Link to="/">Go home</Link>
    </>
  )
}

function Home() {
  return (
      <CardGroup style={{ gap: '20px', padding: '40px' }}>
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

function FullStackDevelopment() {
  return (
      <CardGroup style={{ gap: '20px', padding: '40px' }}>
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

function Career() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Gmail</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Gmail"
                  aria-describedby="inputGroupPrepend"
                  name="Gmail"
                  value={values.Gmail}
                  onChange={handleChange}
                  isInvalid={!!errors.Gmail}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.Gmail}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}





const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;

