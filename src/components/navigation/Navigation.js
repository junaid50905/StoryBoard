import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import React,{useState} from 'react'
function BasicExample() {
  const [loggedInCartToggle, setLoggedInCartToggle] = useState(false)
  return (
    <>
    <nav>
      <div className="content-middle">
        <Navbar expand="lg" className='navbar'>
          <Container>
            <Navbar.Brand href="/">StoryBoard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/signup" className='signup'>Signup</Nav.Link>
                <Nav.Link href="/signin" className='signin'>Signin</Nav.Link>
                <div className = 'logged_in_user'>
                  <p className='logged_in_user_mail'>
                    <a onClick={()=>setLoggedInCartToggle(loggedInCartToggle ? false : true)}>user@gmail.com</a>
                  </p>               
                </div>
              </Nav> 
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>      
    </nav>
    {
      loggedInCartToggle && 
      <div className='logged_in_user_cart'>
      <div>
        <a href="#">My account</a>
        <a href="#">Create new story</a>
      </div>
    </div>
    }
    </>
  );
}

export default BasicExample;