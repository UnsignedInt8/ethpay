export default class Metamask {
  static hasWeb3() {
    return typeof window?.["ethereum" as any] !== "undefined";
  }

  static hasMetamask() {
    return window?.["ethereum" as any]?.["isMetamask" as any] ?? false;
  }

  static async enable() {
    return await this.requestAccounts();
  }

  /**
   * @returns Returns an array of accounts, currently only one account would be returned.
   */
  static async requestAccounts() {
    try {
      // For old metamask
      const accounts = await (window["ethereum" as any] as any)?.enable?.();
      return accounts as string[];
    } catch (error) {}

    try {
      // You now have an array of accounts!
      // Currently only ever one:
      // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
      const accounts = await (window["ethereum" as any] as any)?.send?.(
        "eth_requestAccounts"
      );
      return accounts as string[];
    } catch (error) {
      return [];
    }
  }

  /**
   * Send transaction
   * @param params
   * @returns Returns a transaction hash if succeeded, empty string if failed.
   */
  static async sendTransaction(params: {
    to: string;
    from: string;
    gas?: string;
    gasPrice?: string;
    value?: string;
    data?: string;
  }) {
    return new Promise<string>((resolve) => {
      try {
        (window["ethereum" as any] as any)?.send(
          {
            method: "eth_sendTransaction",
            params: [params],
            from: params.from,
          },
          (err: any, result: any) => {
            if (err) {
              resolve("");
              return;
            }

            resolve(result?.result ?? "");
          }
        );
      } catch (error) {
        resolve("");
      }
    });
  }
}
