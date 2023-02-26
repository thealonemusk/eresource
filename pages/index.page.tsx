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

      <section className="jumbotron text-center shadow-lg rounded p-md">
        <div className="container">
          <h1 className="jumbotron-heading text-light text-uppercase " >Why Energy Trading ?</h1>
          <p className="lead text-light">With a growing population, India's energy demands would only increase requiring
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

      <div className="album py-5 mt-5 mb-5">
      <h1 className="jumbotron-heading text-center text-light">Our solution</h1>
        <div className="container">

          <div className="row">
            <div className="col-md-4 sol-col">
              <div className="card mb-4 shadow-lg rounded border border-dark">
                <img className="card-img-top p-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSu4VyuOPNG-7527sDTrNGqqslepjvdWKWg&usqp=CAU" alt="Card image cap" />
                <div className="card-body bg-primary text-light border-top border-dark">
                  <h5 className="card-text text-center">Reduced Demand</h5>
                  <div className="flex justify-content-center align-items-center">
                   
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                      <p className='text-center'>Demand satisfied by optimal energy allocation</p>
                    </div>
                    
                
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card mb-4 shadow-lg rounded border border-dark">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaux0PyfOS3LySeuainEG9v0DPlvPT8wYNnHK7Rrm9dIsGjuBZGSdVCjk0zN87NWR4us&usqp=CAU" alt="Card image cap"/>
                <div className="card-body bg-primary text-light border-top border-dark">
                  <h5 className="card-text text-center">Incentive</h5>
                  <div className="flex justify-content-center align-items-center">
                   
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                      <p className='text-center'>Secondly it can be an income stream for traders</p>
                    </div>
                    
                
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-lg rounded border border-dark">
                <img className="card-img-top" src="https://i.redd.it/vovtk5f5xin61.jpg" alt="Card image cap"/>
                <div className="card-body bg-primary text-light border-top border-dark">
                  <h5 className="card-text text-center ">Renewable</h5>
                  <div className="flex justify-content-center align-items-center">
                   
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                      <p className='text-center'>A large amount of solar energy available for use</p>
                    </div>
                    
                
                </div>
              </div>
            </div>

    
            
          </div>
        </div>
      </div>

    </main>
    <div className='graph'><a href="https://www.statista.com/statistics/808201/india-cost-of-state-electricity-supply/" rel="nofollow"><img src="https://www.statista.com/graphic/1/808201/india-cost-of-state-electricity-supply.jpg" alt="Statistic: Average cost of state electricity supply in India from financial year 2009 to 2020 (in Indian rupees per kilowatt hour) | Statista" className='stats' /></a><br /></div>
    
    
      <EnergyShares />
      <Createenergy />
      <TransferShares />
      <ReleaseDividends />
    </MetaMaskConnected>
  );
}
