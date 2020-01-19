import React from 'react';

const eth = require('../assets/eth.svg');

const Ethereum = () => (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
        <g id="icon/coin/eth" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="ethereum-1" transform="translate(4.301209, 0.000000)" fill-rule="nonzero">
                <polygon id="Path" fill="#343434" points="6.13812922 0 6.00405656 0.455703125 6.00405656 13.6791525 6.13812922 13.8129853 12.2763064 10.184725"></polygon>
                <polygon id="Path" fill="#8C8C8C" points="6.13817719 0 0 10.184725 6.13817719 13.8130333 6.13817719 7.39476656"></polygon>
                <polygon id="Path" fill="#3C3C3B" points="6.13812922 14.9752202 6.06257844 15.0673202 6.06257844 19.7778034 6.13812922 19.9984597 12.28 11.3487827"></polygon>
                <polygon id="Path" fill="#8C8C8C" points="6.13817719 19.9984117 6.13817719 14.9751242 0 11.3486867"></polygon>
                <polygon id="Path" fill="#141414" points="6.13812922 13.8129853 12.2762105 10.184773 6.13812922 7.39481453"></polygon>
                <polygon id="Path" fill="#393939" points="0 10.184725 6.13808125 13.8129853 6.13808125 7.39476656"></polygon>
            </g>
        </g>
    </svg>
);

export default { eth: { img: eth, color: '#3C3C3B', svg: Ethereum }, }