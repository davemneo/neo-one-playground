/* @hash 03da417f6ee8249ec29b82f39ecd47e6 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  GetOptions,
  Hash256String,
  InvocationTransaction,
  InvokeReceipt,
  InvokeSendTransactionOptions,
  ReadSmartContract,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export type SlotsEvent = never;

export interface SlotsSmartContract extends SmartContract<SlotsReadSmartContract> {
  readonly contractInfo: () => Promise<undefined>;
  readonly deploy: {
    (owner?: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, SlotsEvent>, InvocationTransaction>
    >;
    readonly confirmed: {
      (owner?: AddressString, options?: TransactionOptions & GetOptions): Promise<
        InvokeReceipt<boolean, SlotsEvent> & { readonly transaction: InvocationTransaction }
      >;
    };
  };
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: {
    (transactionHash: Hash256String, options?: InvokeSendTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, SlotsEvent>, InvocationTransaction>
    >;
    readonly confirmed: {
      (transactionHash: Hash256String, options?: InvokeSendTransactionOptions & GetOptions): Promise<
        InvokeReceipt<boolean, SlotsEvent> & { readonly transaction: InvocationTransaction }
      >;
    };
  };
  readonly spin: (wager: string, Address: Hash256String) => Promise<Array<BigNumber>>;
}

export interface SlotsReadSmartContract extends ReadSmartContract<SlotsEvent> {
  readonly contractInfo: () => Promise<undefined>;
  readonly owner: () => Promise<AddressString>;
  readonly spin: (wager: string, Address: Hash256String) => Promise<Array<BigNumber>>;
}