import React from 'react';
import './PayButton.scss';
import Icons from './Icons';

interface Props {
    currency?: 'btc' | 'eth' | 'bsv' | 'bch' | 'usdc' | 'dai' | 'usdt' | 'tusd';
    caption?: string;
}

const PayButton = (props: Props) => {
    const currency = Icons[props.currency ?? 'eth'] as { color: string; img: any };
    const title = `${props.caption ?? ''} ${props.currency?.toUpperCase() ?? 'ETH'} Pay`;
    return (
        <button className='__ethpay_button' style={{ borderColor: currency.color, }} title={title}>
            {props.caption ? <span className='caption'>{props.caption}</span> : undefined}
            <img className='icon' src={currency.img} alt={props.currency} />
            <span style={{ color: currency.color }}>Pay</span>
        </button>
    );
}

export default PayButton;