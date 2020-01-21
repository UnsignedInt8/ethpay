declare module "ethpay" {

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

    export class PayButton extends React.Component<Props, {}>{

    }
}