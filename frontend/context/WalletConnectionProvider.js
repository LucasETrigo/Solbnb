import { useMemo } from 'react';
import {
    ConnectionProvider,
    WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

// QuickNode Connection
const connection =
    'https://yolo-sparkling-gadget.solana-devnet.discover.quiknode.pro/22b7d98ca2acfbb9dee64e926eb555a972224cd6/';

const WalletConnectionProvider = ({ children }) => {
    const endpoint = useMemo(() => connection, []);

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletConnectionProvider;
