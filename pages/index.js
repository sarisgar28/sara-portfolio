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
    
    
     
     <Card className="card">
     <Row>
     
       <Col sm={4}>
         <h1> About Me!</h1>
         <hr className="separator"></hr>
         <h3> I am a NYC based full stack developer with a background in Finance,
            Architecture and Design. Possess strong team building and 
            problem solving skills combined with a driven work ethic and desire to
           constantly learn and expand my knowledge base. Fluent in Spanish and English.
         </h3>
       </Col>
       <Col sm={4}>
         <h1> Experience</h1>
         <hr className="separator"></hr>
          <h2> 
            OhYeah!  Influencer’s and Brand’s Marketing.   
            New York, NY 
            October 2021- December 2021                                                 
            Frontend Developer  
          </h2>
        
          <h3>
          Working along side the marketing team. I took a leading role in developing, 
          implementing. and deploying OhYeahs home page.
          Took the leadership role in the project, motivating the creative direction of the home page.
          </h3>    
          <hr className="separator"></hr>                                                                                                                                                                       
          <h2>New York Life Insurance Company 	New York, NY
          Financial Services Representative	       August 2017 - May 2020
          </h2>
         
          <h3>
            Management of existing professional relationships and development of new, long term business partnerships. 
            Analysis of current business objectives and restructuring of goals based on variables including customer feedback, budget forecasting, and procedural improvements. 
            Establishment of new clients and investors in a bilingual sales environment both one on one and through large group presentations. 
          </h3>
          <hr className="separator"></hr>
          <h2>
          Trade NYC Realty 	                                                                                               New York, NY
          Realtor 	       May 2016 - May 2017
          </h2>
         
          <h3>
          Research and client acquisition based on various renters’ preferences in conjunction with market opportunities. 
          </h3>
          <hr className="separator"></hr>
       </Col>
       <Col sm={4}>
       </Col>
     </Row>
     </Card>
 
     </Container>
  
  )
}
