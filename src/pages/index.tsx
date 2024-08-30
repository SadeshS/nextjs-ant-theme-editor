import { Alert, Button, Col, Row, Input } from "antd";
import React, { useState } from "react";

type PageProps = {
  setClientId: React.Dispatch<React.SetStateAction<string>>;
};

const Home: React.FC<PageProps> = ({ setClientId }) => {
  const [id, setId] = useState('1');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Theme Editor</h1>
      <Row style={{ marginBottom: '20px' }}>
        <Col>
          <Input placeholder="Client Id" value={id} onChange={(e) => {setId(e.target.value)}}/>
        </Col> 
        <Col>
          <Button type="primary" onClick={() => { setClientId(id) }}>Change Theme</Button>  
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary">
            Primary
          </Button>
        </Col>

        <Col>
          <Button type='link'>
            Link
          </Button>
        </Col >
            
        <Col span={2}>
          <Alert message="Success" type="success" />
        </Col>

        <Col span={2}>
          <Alert message="Warning" type="warning" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
