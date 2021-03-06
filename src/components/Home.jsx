import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Home.css'
import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';
import { PocketProvider } from '@ethersproject/providers';
import Payment from './Payment';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);


function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  const [contID,setContID] = useState('QmTBxFm3SU3pmWQgGzb2ApZe9oMD6amZCAkyVa6HyvMDxB');
  const[subs,setSubs]=useState('0.05');
  const[name,setName]=useState('Fired Guys NFT Collection');
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div >
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <img className='headimg' src='https://images.assetsdelivery.com/compings_v2/emojoez/emojoez2105/emojoez210500002.jpg' width="200px" />
                    </div>
                    <div className='col'>
                        <h1>{name}</h1>
                        <h4>NFTs Minted : {totalMinted}</h4>
                        <h4>Current Subscription Fees : 0.05 ETH</h4>
                        <br/>
                        <a href='/Payment' ><button className='button'>Support my Artwork 🪙</button></a>
                    </div>
                </div>
            </div>
        
        
        </div>
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>Manage your NFTs</h1>
                        <h4>Current Subscription Fees : {subs} ETH</h4>
                        <input className='txtinput' type='text' placeholder='NFT Project Name' onChange={e => setName(e.target.value)} />
                        <br/>
                        <input className='txtinput' type='text' placeholder='Update Project CID' onChange={e => setContID(e.target.value)} /><label className='helper'>This will update your NFT collection</label>
                        <br/>
                        <input className='txtinput' type='text' placeholder='Update Subscription fees' onChange={e => setSubs(e.target.value)} /><label className='helper'>This will update subscription fee for evry NFT</label>
                    </div>
                </div>
                <button className='pgbutton'>Create Custom page</button>
            </div>
        
        
        </div>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-sm">
                <NFTImage tokenId={i} getCount={getCount} fee={subs} cid={contID}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}



function NFTImage({ tokenId, getCount, fee, cid }) {

    const getcid = cid
  const contentId = cid;
  const metadataURI = `${cid}/${tokenId}.json`;
  const imageURI = `https://infura-ipfs.io/ipfs/${contentId}/${tokenId}.png`;
    //const imageURI = `img/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result)
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther(fee),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (
      
    <div className="card" style={{ width: '18rem' }}>
      <img className="cardimg" src={isMinted ? imageURI : 'img/placeholder.png'}></img>
      <div className="card-body">
        <h5 className="card-title">ID #{tokenId}</h5>
        {!isMinted ? (
          <button className="hbutton" onClick={mintToken}>
            ⛏️ Mint
          </button>
        ) : (
            <div>
                <button className="hbutton" onClick={getURI}>
            🔒 Taken! Show URI
          </button>
            </div>
          
        )}
      </div>
    </div>
  );
}

export default Home;