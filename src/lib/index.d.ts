import { CSSProperties } from "react";
import React from "react";
import * as ethers from 'ethers';

declare module "ethpay" {

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

    export class PayButton extends React.Component<Props, {}>{

    }

    interface Icon {
        color: string;
        svg: () => JSX.Element;
    }

    export default PayButton;

    export class Icons {
        static readonly eth: Icon;
        static readonly dai: Icon;
        static readonly usdt: Icon;
        static readonly usdc: Icon;
        static readonly tusd: Icon;
        static readonly husd: Icon;
        static readonly pax: Icon;
        static readonly usdk: Icon;
        static readonly busd: Icon;
        static readonly gusd: Icon;
        static readonly usdx: Icon;
        static readonly sai: Icon;
        static readonly btc: Icon;
        static readonly bch: Icon;
        static readonly bsv: Icon;
        static readonly eos: Icon;
        static readonly tron: Icon;
        static readonly zec: Icon;
        static readonly xmr: Icon;
        static readonly ltc: Icon
    }

    export class Metamask {
        static hasWeb3(): boolean;
        static hasMetamask(): boolean;
        static enable(): Promise<string[]>;
        static requestAccounts(): Promise<string[]>;

        /**
         * Send Tx
         * @param params value: minimum unit: eg. wei
         * @returns Tx hash string if sent, empty string if cancelled;
         */
        static sendTransaction(params: { to: string, from: string, gas?: string, gasPrice?: string, value?: string, data?: string }): Promise<string>;
    }

    export class Payment {
        /**
         * build ERC20 transfering ABI
         * @param to receiptor address
         * @param amount wei/min usd unit
         * @returns hex ABI string
         */
        static buildErc20Transfer(to: string, value: string): string;

        /**
         * Parse a value to the minimum unit
         * @param value Ether/USDC/DAI
         * @param unit Decimals: eg. 18/6/2
         */
        static parseUnits(value: string, unit: string | number): ethers.utils.BigNumber;
    }

    interface ContractInfo {
        addr: string;
        decimals: number;
    }

    export class Contracts {
        usdc: ContractInfo;
        dai: ContractInfo;
        sai: ContractInfo;
        pax: ContractInfo;
        busd: ContractInfo;
        gusd: ContractInfo;
        usdk: ContractInfo;
        usdx: ContractInfo;
        tusd: ContractInfo;
        usdt: ContractInfo;
        husd: ContractInfo;
    }

}