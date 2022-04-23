import React from 'react';
import './Upload.css'

function Upload() {
    return ( 
    <div className='body'>
        <p className='title'>Harness the power of Decentralized Storage</p>
        <div className='upcard'>
            <h3>Upload NFT to IPFS</h3>
            <p>MetaMint supports uploading a complete folder full of images</p>
            <a target="_blank" href='https://y6j2b.csb.app/' ><button className='button' >Select Folder</button></a>
            <a target="_blank" href='https://65kpl.csb.app/' ><button className='button' >Select Image</button></a>
            <a target="_blank" href='/Mint' ><button className='button' >Manage NFT Subscriptions</button></a>
            

        </div>
    </div>  
    );
}

export default Upload;