import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Alert, Badge, Spinner } from 'react-bootstrap';
import { getContract } from '../../lib/eth';
import MetaMaskConnected from '../../components/metaMaskConnected';
import { CONTRACT_CREATE_PROP_GAS, DEMO_LISTING_ID } from '../../lib/constants';
import { FetchState } from '../../lib/types';
import { useCurrentAddressId } from '../../lib/custom-hooks';

export default function CreateProperty() {
  const autoCompleteDoneRef = useRef(false);
  const router = useRouter();
  const { autoComplete } = router.query;
  const currentAddressId = useCurrentAddressId();
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState({
    destinationAcc: null,
    tokensCount: null,
  });

  const tokenizeProperty = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract({
        from: currentAddressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });
      const res = await contract.methods
        .createProperty(10000000, DEMO_LISTING_ID, '550321', 10)
        .send();

      setMessage({
        destinationAcc: res.events.Transfer.returnValues.to,
        tokensCount: res.events.Transfer.returnValues.value,
      });
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      console.error(err);
      setFetchState(FetchState.ERROR);
    }
  };

  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Confirm Token Generation';
    }
  }, [fetchState]);

  const buttonVariant = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'warning';

      case FetchState.ERROR:
        return 'danger';

      default:
        return 'primary';
    }
  }, [fetchState]);

  useEffect(() => {
    const autoCompleteDone = autoCompleteDoneRef.current;

    if (!autoCompleteDone && autoComplete === '1' && currentAddressId) {
      autoCompleteDoneRef.current = true;
      tokenizeProperty();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoComplete, currentAddressId]);

  return (
    <MetaMaskConnected>
      <div>
        <Button variant={buttonVariant} onClick={tokenizeProperty}>
          {buttonText}{' '}
          {fetchState === FetchState.LOADING && (
            <Spinner animation="border" variant="dark" size="sm" />
          )}
        </Button>
      </div>
      <br />
      {message.destinationAcc && message.tokensCount && (
        <div>
          <Alert variant="success">
            <Alert.Heading>Tokens Generated</Alert.Heading>
            <div>
              <span>Account: </span>
              <span>{message.destinationAcc}</span>
            </div>

            <div>
              <span>Tokens: </span>
              <Badge bg="secondary">{message.tokensCount}</Badge>
            </div>
          </Alert>
        </div>
      )}
    </MetaMaskConnected>
  );
}
