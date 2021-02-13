import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

////// ------------------------------- ////// 
///   commented these out - they're from class activity 22 with bootstrap ///
// import { Col, Row, Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
// import PostsList from "../components/PostsList";

///  commented these out - they're from class activity 22 with bootstrap ///
////// ------------------------------- //////  

const Events = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
        <Col size="md-6 sm-12">
          <PostsList />
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

export default Events;