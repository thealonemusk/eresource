import React from 'react';
import { Alert, Button } from 'react-bootstrap';

type Props = {
  buttonLoading: boolean;
  buttonOnClick: () => void;
};

export default function Connect({ buttonLoading, buttonOnClick }: Props) {
  return (
    <Alert variant="primary">
      <Alert.Heading>Connect Account</Alert.Heading>
      <p>
        Please click connect your <b>MetaMask</b> account to continue.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          onClick={buttonOnClick}
          disabled={buttonLoading}
        >
          {!buttonLoading ? 'Connect' : 'Loading...'}
        </Button>
      </div>
    </Alert>
  );
}
