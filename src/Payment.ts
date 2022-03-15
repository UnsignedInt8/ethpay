import * as ethers from "ethers";

import ERC20Abi from "./ERC20Abi";

export default class Payment {
  /**
   * build ERC20 transfering ABI
   * @param to receiptor address
   * @param amount wei/min usd unit
   * @returns hex ABI string
   */
  static buildErc20Transfer(to: string, value: string) {
    let coder = new ethers.utils.AbiCoder();
    let amount = coder.encode(["uint256"], [value]);
    let erc20 = new ethers.Contract(to, ERC20Abi);
    return erc20.interface.encodeFunctionData("transfer", [to, amount]);
  }

  static parseUnits(value: string, unit: string | number) {
    return ethers.utils.parseUnits(value, unit);
  }
}
