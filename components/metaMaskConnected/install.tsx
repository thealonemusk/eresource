import React from 'react';
import { Alert, Button } from 'react-bootstrap';

export default function Install() {
  return (
    <Alert variant="warning">
      <Alert.Heading>Install MetaMask</Alert.Heading>
      <p>
        Please install <b>MetaMask</b> browser extension to continue.
      </p>
      <hr />
      <div className="d-flex gap-3 justify-content-end">
        <Button
          href="https://metamask.io/download/"
          target="_blank"
          variant="warning"
        >
          Install MetaMask
        </Button>
        <Button variant="outline-dark" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    </Alert>
  );
}
