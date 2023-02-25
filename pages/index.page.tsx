import Createenergy from '../components/createenergy';
import MetaMaskConnected from '../components/metaMaskConnected';
// import energyShares from '../components/energyShares';
import ReleaseDividends from '../components/releaseDividends';
import TransferShares from '../components/transferShares';
import Welcome from '../components/welcome';
import EnergyShares from '../components/energyShares';

export default function Home() {
  return (
    <MetaMaskConnected>
      <Welcome />
      <EnergyShares />
      <Createenergy />
      <TransferShares />
      <ReleaseDividends />
    </MetaMaskConnected>
  );
}
