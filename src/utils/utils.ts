import * as _ from 'lodash';
import * as BN from 'bn.js';

export const utils = {
    /**
     * Converts BigNumber instance to BN
     * The only reason we convert to BN is to remain compatible with `ethABI. soliditySHA3` that
     * expects values of Solidity type `uint` to be passed as type `BN`.
     * We do not use BN anywhere else in the codebase.
     */
    bigNumberToBN(value: BigNumber.BigNumber) {
        return new BN(value.toString(), 10);
    },
    consoleLog(message: string): void {
        /* tslint:disable */
        console.log(message);
        /* tslint:enable */
    },
    isParityNode(nodeVersion: string): boolean {
        return _.includes(nodeVersion, 'Parity');
    },
};
