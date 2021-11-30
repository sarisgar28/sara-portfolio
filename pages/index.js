import { Row, Col, Container, Card} from 'react-bootstrap';
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { FaInstagram, FaDev } from "react-icons/fa";
import Link from 'next/link'



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
      <Col sm={12} className="icons">
       
        <a href="https://www.linkedin.com/in/sara-isabel-garcia-51726213b/">
         <GrLinkedinOption style={{ fontSize: '50px', color: 'rgba(105, 34, 172, 0.815)'   }}/>
         </a>
         <a href="https://github.com/sarisgar28">
         <GrGithub style={{ marginLeft: '1%', fontSize: '40px', color: 'rgba(105, 34, 172, 0.815)'   }}/>
         </a>
         <a href="https://www.instagram.com/sarisgar/">
         <FaInstagram style={{ marginLeft: '1%', fontSize: '40px',color: 'rgba(105, 34, 172, 0.815)'   }}/>
         </a>
         <a href="mailto: sarisgar28@gmail.com" >
          <GrMail style={{ marginLeft: '1%', fontSize: '40px', color: 'rgba(105, 34, 172, 0.815)'   }}/>
         </a>
         <a href="https://dev.to/sarisgar28">
          <FaDev style={{ marginLeft: '1%', fontSize: '40px', color: 'rgba(105, 34, 172, 0.815)'  }}/>
         </a>
        
       </Col>
      </Row>
    
    
     
     <Card body className="card" responsive>
     <Row>
     
       <Col sm={4}>
         <h1> About Me!</h1>
         <hr className="separator"></hr>
         <ol> I am a NYC based full stack developer with a background in Finance,
            Architecture and Design. Possess strong team building and 
            problem solving skills combined with a driven work ethic and desire to
           constantly learn and expand my knowledge base. Fluent in Spanish and English.
         </ol>
       </Col>
       <Col sm={4}>
         <h1> Experience</h1>
         <hr className="separator"></hr>
          <h2> 
          Frontend Developer at OhYeah!  Influencer’s and Brand’s Marketing.   
           New York, NY 
            October 2021- December 2021                                                 
          
          </h2>
          <ol>
          Working along side the marketing team I took a leading role in developing, 
          implementing. and deploying OhYeahs home page.
          </ol>
          <ol>
          Took the leadership role in the project, motivating the creative direction of the home page.
          </ol>  
          <hr className="separator"></hr>                                                                                                                                                                       
          <h2>New York Life Insurance Company 	New York, NY
          Financial Services Representative	       August 2017 - May 2020
          </h2>
         
          <ol>
            Management of existing professional relationships and development of new, long term business partnerships. 
          </ol>
          <ol>
            Analysis of current business objectives and restructuring of goals based on variables including customer feedback, budget forecasting, and procedural improvements. 
            Establishment of new clients and investors in a bilingual sales environment both one on one and through large group presentations. 
          </ol>
          <hr className="separator"></hr>
          <h2>
          Trade NYC Realty 	                                                                                               New York, NY
          Realtor  May 2016 - May 2017
          </h2>
         
          <ol>
          Research and client acquisition based on various renters’ preferences in conjunction with market opportunities. 
          </ol>
          <hr className="separator"></hr>
       </Col>
       <Col sm={4}>
       </Col>
     </Row>
    
     </Card>
    <Row>
     <Card body className="card-2" responsive>
    
       <Col sm={3}>
         <hr className="separator"></hr>
         <h2>
           Volunteer at Cabrini Immigrant Services
         </h2>
         <ol>
           Preparation and review of documents in compliance with Safety Management Systems protocols.
         </ol>
         <ol>
         Provided support to Director of Immigration Services, including office bookkeeping, and document organization and processing.
         </ol>
       </Col>
       
       <hr className="separator"></hr>
         
       <Col sm={3}>
        <h2>Collaborations</h2>
       
        <ol>
          <a href="https://ohyeah.us/">OhYeah!</a>
        </ol>
       </Col>
      
       <hr className="separator"></hr>
        
       <Col sm={3}>
         <h2>Education</h2>
       
         <h2>Flatiron School 	New York, NY</h2>
         <ol>
         Full Stack Web Development, Ruby on Rails, React, Redux and JavaScript program. 	April 2021
         </ol>
         <h2>Universidad San Buenaventura 	Cali, Colombia</h2>
         <ol>Architecture and Fashion Design with a focus on sustainability, efficiency, and environmental impact.  	June 2015</ol>
       </Col>
       <hr className="separator"></hr>
       <Col sm={3}>
         <h2>Hobbies</h2>
         <ol>
         Boxing and running. 🏃🏻‍♀️ 🥊
         </ol>
         <ol>
         Visit Art museums 🖼 🎎
         </ol>
         <ol>
         Travel the world ✈️
         </ol>
         <ol>
           Learning new skills 🤓
         </ol>
         
       </Col>
       
       </Card>
       </Row>
     
    
 
     </Container>
  
  )
}
