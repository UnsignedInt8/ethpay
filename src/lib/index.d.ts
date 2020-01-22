import { CSSProperties } from "react";
import React from "react";

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
}