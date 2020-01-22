
import * as ethers from 'ethers';
import ERC20Abi from './ERC20Abi';

export default class Payment {
    /**
     * build ERC20 transfering ABI
     * @param to receiptor address
     * @param amount wei/min usd unit
     * @returns hex ABI string
     */
    static buildErc20Transfer(to: string, value: string) {
        let coder = new ethers.utils.AbiCoder();
        let amount = coder.encode(['uint256'], [value]);
        let erc20 = new ethers.utils.Interface(ERC20Abi);
        let abi = erc20.functions.transfer.encode([to, amount]);
        return abi;
    }

    static parseUnits(value: string, unit: string | number) {
        return ethers.utils.parseUnits(value, unit);
    }
}