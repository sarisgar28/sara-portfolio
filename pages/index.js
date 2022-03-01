import { Row, Col, Container, Card} from 'react-bootstrap';
import Layout from './layout';



export default function Home() {
 
  return (
  <Layout>
    <Container>
      
      <Row>
      <Col sm={12} style={{width: '100%' }}>
      <img  className="myImage" src="me.jpeg" alt="Sara" width="220" height="350" />
        <label className="wrapper">
          <label className="typing-demo">
            Hola, My name is Sara!
          </label>
         </label> 
       </Col>
      </Row>
    
    
     
     <Card body className="card" responsive>
     <Row>
     
       <Col sm={4}>
         <h1> About Me!</h1>
         <hr className="separator"></hr>
         <ol> I am a full-stack developer with a background in architecture
            and fashion design, and extensive experience in financial sales and real estate.
         </ol>
       </Col>
       <Col sm={4}>
       <h1> Experience</h1>
         <hr className="separator"></hr>
         <h2> 
          Software Engineer at SuperNormal Asynchronous System of Record 
         </h2>
          <ol>
          New York, NY
          </ol>
          <ol>
         December 2021- February 2022
          </ol>
          <hr className="separator"></hr>    
          <h2> 
          Frontend Developer at OhYeah!  Influencer’s and Brand Marketing.   
           New York, NY 
            October 2021- December 2021                                                 
         </h2>
          <ol>
          New York, NY
          </ol>
          <ol>
          October 2021- December 2021
          </ol>
          <ol>
          Working along side the marketing team, I took a leading role in developing, 
          implementing. and deploying OhYeahs home page.
          </ol>
         
          <hr className="separator"></hr>                                                                                                                                                                       
          <h2>New York Life Insurance Company
          </h2>
          <h2>
          Financial Services Representative.   
          </h2>
          <ol>
          New York, NY
          </ol>
         <ol>
         August 2017 - May 2020
         </ol>
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
          
          </h2>
          <h2>
          Realtor 
          </h2>
          <ol>
          New York, NY
          </ol>
         <ol>
         May 2016 - May 2017
         </ol>
          <ol>
          Research and client acquisition based on various renters preferences in conjunction with market opportunities. 
          </ol>
          <hr className="separator"></hr>
       </Col>
       <Col sm={4}>
       </Col>
     </Row>
    
    
    <Row>
      <Col sm={3}>
         <h2>
           Volunteer at Cabrini Immigrant Services
         </h2>
         <ol>
           New York, NY
         </ol>
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
       
         <h2>Flatiron School</h2>
         <ol>
          New York, NY
          </ol>
          <ol>
         April 2021
         </ol>
         <ol>
         Full Stack Web Development, Ruby on Rails, React, Redux and JavaScript program.
         </ol>
      
         <h2>Universidad San Buenaventura</h2>
         <ol>
         Cali, Colombia
         </ol>
         <ol>
          June 2015
         </ol>
         <ol>Architecture and Fashion Design with a focus on sustainability, efficiency, and environmental impact.</ol>
         
        <h2> Centro Cultural Colombo Americano</h2>
       <ol>Cali, Colombia</ol> 
         <ol>
           2005 - 2012
         </ol>
          <ol>
            Intensive English listening, grammar and speaking classes. 
         </ol>
       
       
       </Col>
         
       <hr className="separator"></hr>
       <Col sm={3}>
         <h2>Hobbies</h2>
         <ol>
         Boxing and running. 🏃🏻‍♀️ 🥊
         </ol>
         <ol>
         Visiting Art museums. 🖼 🎎
         </ol>
         <ol>
         Traveling the world. ✈️
         </ol>
         <ol>
           Learning new skills. 🤓
         </ol>
         
       </Col>
       </Row>
       </Card>
      
     
    <h6>Version 2022</h6>
 
     </Container>
     </Layout>
  )
}
