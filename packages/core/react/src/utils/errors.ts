import { WalletError } from '@boxfox/neo-wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
	name = 'WalletNotSelectedError';
}
