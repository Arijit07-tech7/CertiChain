export function required(v){return String(v||'').trim().length>0}
export function email(v){return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
