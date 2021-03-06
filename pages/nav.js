import { Row,  Col, Nav, FormControl, Button, Navbar } from 'react-bootstrap'
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { FaInstagram, FaDev } from "react-icons/fa";
import Resume from './resume'
  



export default function Navigation(){
    return(
        <>
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                 
        <Row>
       
        <Col sm={12} className="icons">
        
            <a href="https://www.linkedin.com/in/sara-isabel-garcia-51726213b/">
            <GrLinkedinOption className="icons-style" style={{ fontSize: '60px', color: 'black'   }}/>
            </a>
            <a href="https://github.com/sarisgar28">
            <GrGithub style={{ marginLeft: '6%', fontSize: '60px', color: 'black'   }}/>
            </a>
            <a href="https://www.instagram.com/sarisgar/">
            <FaInstagram style={{ marginLeft: '6%', fontSize: '60px',color: 'black'   }}/>
            </a>
            <a href="mailto: sarisgar28@gmail.com" >
            <GrMail style={{ marginLeft: '6%', fontSize: '60px', color: 'black'   }}/>
            </a>
            <a href="https://dev.to/sarisgar28">
            <FaDev style={{ marginLeft: '6%', fontSize: '60px', color: 'black'  }}/>
            </a>
            
        </Col>
        
        {/* <Col>
            {/* <Resume/> */}
        {/* </Col> */}
        </Row>
                        

    </Navbar>

  </div>
  </>
    )
}