# CertiChain

Premium blockchain-ready academic certificate verification platform for Narula Institute of Technology / JIS Group.

## Included
- Dark crimson premium admin dashboard
- Student management (starts empty)
- Certificate designer + live printable certificate
- QR / Certificate ID verification UI
- Revocation + audit trail flows
- Security center
- Blockchain smart contract scaffold (Hardhat)
- Express backend scaffold with MongoDB-ready models
- Cricket mascot chat widget (placeholder asset)

## Demo note
The frontend runs without a backend using localStorage. Blockchain, IPFS and server authorization are scaffolded for deployment. Do not treat localStorage or a frontend wallet as a production security boundary.

## Run frontend
```bash
cd client
npm install
npm run dev
```

## Run backend
```bash
cd server
npm install
npm run dev
```

## Run blockchain tests
```bash
cd blockchain
npm install
npm test
```

Replace `client/public/logos/nit-logo.png` and `jis-logo.png` with the official logo files before final presentation.
