import React from 'react';
import './PayButton.scss';
import Icons from './Icons';

interface Props {
    currency?: 'btc' | 'eth' | 'bsv' | 'bch' | 'usdc' | 'dai' | 'usdt' | 'tusd';

}

const PayButton = (props: Props) => {
    const currency = Icons[props.currency ?? 'eth'] as { color: string; img: any };

    return (
        <div className='__ethpay_button' style={{ borderColor: currency.color }}>

            <img className='icon' src={currency.img} alt={props.currency} />
            <span style={{ color: currency.color }}>Pay</span>
        </div>
    );
}

export default PayButton;