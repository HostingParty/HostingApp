import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


////// ------------------------------- ////// 
///   commented these out - they're from class activity 22 with bootstrap ///
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
///  commented these out - they're from class activity 22 with bootstrap ///
////// ------------------------------- //////


const NoMatch = () => {
  return (
    <Container maxWidth="sm">
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
    );
  }
  
export default NoMatch;
