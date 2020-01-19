import React, { CSSProperties } from 'react';
import './PayButton.scss';
import Icons from './Icons';

interface Props {
    currency?: 'btc' | 'eth' | 'bsv' | 'bch' | 'usdc' | 'dai' | 'usdt' | 'tusd';
    caption?: string;
    htmlTitle?: string;
    mode?: 'black' | 'light';
    cssStyle?: CSSProperties;
}

const PayButton = (props: Props) => {
    const currency = Icons[props.currency ?? 'eth'] as { color: string; img: any, svg: () => JSX.Element };
    const title = props.htmlTitle ?? `${props.caption ?? ''} ${props.currency?.toUpperCase() ?? 'ETH'} Pay`;

    return (
        <button className={`__ethpay_button ${props.mode ?? ''}`} style={{ borderColor: currency.color, ...props.cssStyle }} title={title}>
            {props.caption ? <span className='caption'>{props.caption}</span> : undefined}
            <div className='icon'><currency.svg /></div>
            <span style={{ color: currency.color }}>Pay</span>
        </button>
    );
}

export default PayButton;