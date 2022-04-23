import React from 'react';
import './Upload.css'

function Upload() {
    return ( 
    <div className='body'>
        <div className='upcard'>
            <h3>Upload NFT to IPFS</h3>
            <a target="_blank" href='https://app.pinata.cloud/pinmanager' ><button className='button' >Go to Pinata</button></a>
        </div>
    </div>  
    );
}

export default Upload;