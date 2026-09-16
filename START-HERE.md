# CertiVault — Start Here

## 1. Requirements
- Node.js 18+ (Node 20+ recommended)
- npm 9+

## 2. Install
From the folder containing this file:

```powershell
npm install
```

## 3. Run
```powershell
npm run dev
```

Open the Vite URL shown in the terminal (normally http://localhost:5173).

## Admin login
- User ID: `admin`
- Password: `Admin@2026`

## Persistence
Student and certificate records are stored in browser localStorage for this hackathon/demo build, so refresh/reopen keeps the records on the same browser profile. A production deployment should move the data to the included server/database layer.

## Important
The printed certificate intentionally does not display the SHA-256 fingerprint. Verification uses the certificate ID and the issuer record.
