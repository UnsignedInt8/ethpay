import React, { CSSProperties, useEffect, useState } from 'react';
import Icons from './Icons';
import Metamask from '../Metamask';
import Payment from '../Payment';
import Contracts from '../Contracts';
import ReactTooltip from 'react-tooltip'
import * as ethers from 'ethers';
import './PayButton.scss';

interface Props {
    className?: string;
    currency: 'btc' | 'eth' | 'bsv' | 'bch' | 'usdc' | 'dai' | 'usdt' | 'tusd' | 'husd' | 'pax' | 'busd' | 'gusd' | 'usdk' | 'usdx' | 'sai' | 'eos' | 'tron' | 'zec' | 'xmr' | 'ltc';
    caption?: string;
    title?: string;
    mode?: 'black' | 'light';
    style?: CSSProperties;
    to: string;
    value: number | string; // 'ether'
    data?: string;
    showValue?: boolean;
    onTxSent?: (hash: string) => void;
}

const erc20Tokens = ['usdc', 'dai', 'usdt', 'tusd', 'husd', 'pax', 'busd', 'gusd', 'usdk', 'usdx', 'sai'];
const eth = ['eth'].concat(erc20Tokens);

const PayButton = (props: Props) => {
    const currency = Icons[props.currency] as { color: string; img: any, svg: () => JSX.Element } || Icons['eth'];
    const title = props.title ?? `${props.caption ?? ''} ${props.currency?.toUpperCase() ?? 'ETH'} Pay`;

    const send = async () => {

        if (!Metamask.hasWeb3()) {
            return;
        }

        let [from] = await Metamask.enable();
        if (!from) return;

        let hash: string;

        if (props.currency === 'eth') {
            hash = await Metamask.sendTransaction({
                to: props.to,
                from,
                gas: '0x5208',
                value: ethers.utils.parseEther(`${props.value ?? 0}`).toHexString(),
            });
        } else {
            const contract = Contracts[props.currency];
            hash = await Metamask.sendTransaction({
                to: contract.addr,
                from,
                gas: '0x186A0',
                value: '0x00',
                data: Payment.buildErc20Transfer(props.to, ethers.utils.parseUnits(`${props.value ?? 0}`, contract.decimals).toHexString()),
            });
        }

        props.onTxSent?.(hash);
    }

    const jumpToPay = () => {
        window?.open(`https://ethpay.now.sh/to/${props.to}?value=${props.value ?? 0}&currency=${props.currency ?? 'eth'}`, '_blank');
    }

    let [hasWeb3, setHasWeb3] = useState(false);
    useEffect(() => { setHasWeb3(Metamask.hasWeb3()) }, []);

    return (
        <button className={`${props.className ?? ''} __ethpay_button ${props.mode ?? ''}`}
            data-tip={`${hasWeb3 ? '' : 'Metamask not installed'}`}
            style={{ borderColor: currency.color, ...props.style, color: currency.color }}
            title={title}
            data-delay-show={300}
            onClick={_ => eth.includes(props.currency) ? send() : jumpToPay()}>
            {props.caption ? <span className='caption'>{props.caption}</span> : undefined}
            {props.showValue && props.value ? <span className='value'>{props.value}</span> : undefined}
            <div className='icon'><currency.svg /></div>
            <span>Pay</span>

            <ReactTooltip globalEventOff='click' effect="solid" multiline={false} />
        </button>
    );
}

export default PayButton;