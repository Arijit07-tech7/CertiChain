# Architecture

Browser UI → API → database / document store → blockchain anchor.

Public verification should query the issuer record and compare a canonical document fingerprint. Private keys belong on a secure server/HSM/KMS, never in React source or browser localStorage.
