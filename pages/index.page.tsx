import CreateProperty from '../components/createProperty';
import MetaMaskConnected from '../components/metaMaskConnected';
import PropertyShares from '../components/propertyShares';
import ReleaseDividends from '../components/releaseDividends';
import TransferShares from '../components/transferShares';
import Welcome from '../components/welcome';

export default function Home() {
  return (
    <MetaMaskConnected>
      <Welcome />
      <PropertyShares />
      <CreateProperty />
      <TransferShares />
      <ReleaseDividends />
    </MetaMaskConnected>
  );
}
