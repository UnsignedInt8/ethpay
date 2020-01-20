import React, { CSSProperties } from 'react';
import Icons from './Icons';
import Metamask from '../Metamask';
import Payment from '../Payment';
import * as ethers from 'ethers';
import './PayButton.scss';

interface Props {
    currency: 'btc' | 'eth' | 'bsv' | 'bch' | 'usdc' | 'dai' | 'usdt' | 'tusd' | 'husd' | 'pax' | 'busd' | 'gusd' | 'usdk' | 'usdx' | 'sai' | 'eos' | 'tron' | 'zec' | 'xmr' | 'ltc';
    caption?: string;
    title?: string;
    mode?: 'black' | 'light';
    style?: CSSProperties;
    to: string;
    value: number | string; // 'ether'
    data?: string;
    showValue?: boolean;
}

const erc20Tokens = ['usdc', 'dai', 'usdt', 'tusd', 'husd', 'pax', 'busd', 'gusd', 'usdk', 'usdx', 'sai'];
const eth = ['eth'].concat(erc20Tokens);
const nonSupportedCoins = ['btc', 'bsv', 'bch', 'eos', 'tron', 'zec', 'xmr', 'ltc'];


const Contracts = {
    'usdc': { addr: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', decimals: 6 },
    'dai': { addr: '0x6b175474e89094c44da98b954eedeac495271d0f', decimals: 18 },
    'sai': { addr: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359', decimals: 18 },
    'pax': { addr: '0x8e870d67f660d95d5be530380d0ec0bd388289e1', decimals: 18 },
    'busd': { addr: '0x4fabb145d64652a948d72533023f6e7a623c7c53', decimals: 18 },
    'gusd': { addr: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd', decimals: 2 },
    'usdk': { addr: '0x1c48f86ae57291f7686349f12601910bd8d470bb', decimals: 18 },
    'usdx': { addr: '0xeb269732ab75a6fd61ea60b06fe994cd32a83549', decimals: 18 },
    'tusd': { addr: '0x0000000000085d4780B73119b644AE5ecd22b376', decimals: 18 },
    'usdt': { addr: '0xdac17f958d2ee523a2206206994597c13d831ec7', decimals: 6 },
    'husd': { addr: '0xdf574c24545e5ffecb9a659c229253d4111d87e1', decimals: 8 },
};


async function send(params: { to?: string, value?: number | string, data?: string, currency: string }) {

    if (!Metamask.hasWeb3()) {
        return '';
    }

    let [from] = await Metamask.enable();
    if (!from) return '';

    if (params.currency === 'eth') {
        return await Metamask.sendTransaction({
            to: params.to,
            from,
            gas: '0x5208',
            value: ethers.utils.parseEther(`${params.value ?? 0}`).toHexString(),
        });
    } else {
        const contract = Contracts[params.currency];
        return await Metamask.sendTransaction({
            to: contract.addr,
            from,
            gas: '0x186A0',
            value: '0x00',
            data: Payment.buildErc20Transfer(params.to, new ethers.utils.BigNumber(params.value ?? 0).mul(new ethers.utils.BigNumber(10).pow(contract.decimals)).toHexString()),
        });
    }
}

function jumpToPay(params: { to?: string, value?: number | string, currency: string }) {

}

const PayButton = (props: Props) => {
    const currency = Icons[props.currency ?? 'eth'] as { color: string; img: any, svg: () => JSX.Element };
    const title = props.title ?? `${props.caption ?? ''} ${props.currency?.toUpperCase() ?? 'ETH'} Pay`;

    return (
        <button className={`__ethpay_button ${props.mode ?? ''}`}
            style={{ borderColor: currency.color, ...props.style, color: currency.color }}
            title={title}
            onClick={_ => eth.includes(props.currency) ?
                send({ to: props.to, value: props.value, data: props.data, currency: props.currency }) :
                jumpToPay({ to: props.to, value: props.value, currency: props.currency })}>
            {props.caption ? <span className='caption'>{props.caption}</span> : undefined}
            {props.showValue && props.value ? <span className='value'>{props.value}</span> : undefined}
            <div className='icon'><currency.svg /></div>
            <span>Pay</span> {/* {!props.value || props.hideValue || !props.caption ?  : undefined} */}
        </button>
    );
}

export default PayButton;