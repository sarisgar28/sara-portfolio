import { Row, Col, Container, Card} from 'react-bootstrap';
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
  return (
    <Container>
      
      <Row>
      <Col sm={12} style={{width: '100%' }}>
       <label className="wrapper">
     <label className="typing-demo">
       Hola! My name is Sara.
    </label>
     </label> 
     </Col>
     </Row>
     <Row>
      <Col sm={12} style={{width: '65%' }}>
        <a href="https://www.linkedin.com/in/sara-isabel-garcia-51726213b/">
         <GrLinkedinOption style={{ marginLeft: '65%', fontSize: '40px', color: '#7D8FB3'   }}/>
         </a>
         <a href="https://github.com/sarisgar28">
         <GrGithub style={{ marginLeft: '2%', fontSize: '40px', color: '#7D8FB3'   }}/>
         </a>
         <a href="https://www.instagram.com/sarisgar/">
         <FaInstagram style={{ marginLeft: '2%', fontSize: '40px',color: '#7D8FB3'   }}/>
         </a>
         <a href="mailto: sarisgar28@gmail.com" >
          <GrMail style={{ marginLeft: '2%', fontSize: '40px', color: '#7D8FB3'   }}/>
         </a>
       </Col>
      </Row>
    
    
     
     <Card>
     <Row>
     
       <Col sm={4} style={{width: '50%', padding: '2%', textAlign:'left'  }}>
         <h1> About Me!</h1>
         <h3> I am a NYC based full stack developer with a background in Finance,
            Architecture and Design. Possess strong team building and 
            problem solving skills combined with a driven work ethic and desire to
           constantly learn and expand my knowledge base. Fluent in Spanish and English.
         </h3>
       </Col>
       <Col sm={4}>
       </Col>
       <Col sm={4}>
       </Col>
     </Row>
     </Card>
 
     </Container>
  
  )
}
