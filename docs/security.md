# Security baseline

- Never store issuer private keys in frontend code.
- Use server-side RBAC and MFA for administrative actions.
- Hash canonical certificate payloads/documents with SHA-256.
- Anchor fingerprints on-chain; store only minimal necessary data on-chain.
- Use IPFS/object storage for documents and protect metadata appropriately.
- Rate-limit public verification and admin endpoints.
- Maintain audit logs and monitor abnormal issuance/revocation patterns.
- Use HTTPS, secure cookies, CSRF protection where applicable, secret management, dependency scanning and regular smart-contract audits before production.
