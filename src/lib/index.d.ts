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
    }

    export class PayButton extends React.Component<Props, {}>{

    }

    interface Icon {
        color: string;
        svg: () => JSX.Element;
    }

    export default PayButton;

    export class Icons {
        eth: Icon;
        dai: Icon;
        usdt: Icon;
        usdc: Icon;
        tusd: Icon;
        husd: Icon;
        pax: Icon;
        usdk: Icon;
        busd: Icon;
        gusd: Icon;
        usdx: Icon;
        sai: Icon;
        btc: Icon;
        bch: Icon;
        bsv: Icon;
        eos: Icon;
        tron: Icon;
        zec: Icon;
        xmr: Icon;
        ltc: Icon
    }
}