import * as React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterDefault() {
  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">@boogeyians</Card.Footer>
    </Card>
  );
}

export default FooterDefault;