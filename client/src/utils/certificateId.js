export function certificateId(){const y=new Date().getFullYear();const r=crypto.randomUUID().replaceAll('-','').slice(0,10).toUpperCase();return `NIT-${y}-${r}`}
