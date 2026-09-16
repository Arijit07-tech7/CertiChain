import crypto from 'node:crypto';export function fingerprint(payload){return crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex')}
