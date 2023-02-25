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
      <main role="main">

      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Why Energy Trading ?</h1>
          <p className="lead text-muted">With a growing population, India's energy demands would only increase requiring
urgent infrastructure upgrades and installations. Continuing to use current means of
energy generation and transmission will have devastating impacts on the environment
Our platform provides an alternative to satisty demands via peer to peer energy trading
thus praviding the users a second stream of income</p>
          {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p> */}
        </div>
      </section>

      <div className="album py-5 bg-light">
      <h1 className="jumbotron-heading text-center">Our solution</h1>
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src="https://i.pinimg.com/736x/6d/90/63/6d9063278e566c411b52b8660c2cf2a9.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-text text-center">Reduced Demand</h5>
                  <div className="flex justify-content-center align-items-center">
                   
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                      <p className='text-center'>Demand satisfied by optimal energy allocation</p>
                    </div>
                    
                
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/72/72125.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-text text-center">Incentive</h5>
                  <div className="flex justify-content-center align-items-center">
                   
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                      <p className='text-center'>Second income stream for traders</p>
                    </div>
                    
                
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/011/031/598/original/stock-exchange-and-trading-icon-design-element-png.png" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-text text-center">Renewable</h5>
                  <div className="flex justify-content-center align-items-center">
                   
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                      <p className='text-center'>Abundant solar energy available</p>
                    </div>
                    
                
                </div>
              </div>
            </div>

    
            
          </div>
        </div>
      </div>

    </main>
      <EnergyShares />
      <Createenergy />
      <TransferShares />
      <ReleaseDividends />
    </MetaMaskConnected>
  );
}
