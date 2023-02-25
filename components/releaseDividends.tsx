import React, { useMemo, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { CONTRACT_CREATE_PROP_GAS } from '../lib/constants';
import { useCurrentAddressId } from '../lib/custom-hooks';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function ReleaseDividends() {
  const currentAddressId = useCurrentAddressId();
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [dividendAmount, setDividendAmount] = useState(0);
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);
      setMessage('');
      setErrorMsg('');

      const contract = await getContract({
        from: currentAddressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });

      const res = await contract.methods
        .releaseDividend()
        .send({ value: dividendAmount, gas: 50000 });

      setDividendAmount(0);
      setMessage(JSON.stringify(res));
      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setFetchState(FetchState.SUCCESS);
    }
  };
  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Release Credits';
    }
  }, [fetchState]);

  return (

    <Alert variant="secondary" className='shadow-lg rounded'>
      <Alert.Heading>Energy Credit</Alert.Heading>
      <p>Release Credits to existing Credit holders.</p>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Dividend amount:</Form.Label>
          <Form.Control
            type="number"
            value={dividendAmount}
            onChange={(e) => setDividendAmount(Number(e.target.value))}
          />
        </Form.Group>
      </Form>
      {message && (
        <p className="text-break">
          Message received: <b>{message}</b>
        </p>
      )}
      <hr />
      {fetchState === FetchState.ERROR && (
        <>
          <p className="text-danger">Oops! Something went wrong...</p>
          <p className="text-danger text-break">{errorMsg}</p>
        </>
      )}
      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          onClick={getMessage}
          disabled={fetchState === FetchState.LOADING}
        >
          {buttonText}
        </Button>
      </div>
    </Alert>
  );
}
