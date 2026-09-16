const KEY='certivault_state_v3';
export const emptyState={students:[],certificates:[],audit:[]};
export function loadState(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'{}');return {...emptyState,...raw,students:Array.isArray(raw.students)?raw.students:[],certificates:Array.isArray(raw.certificates)?raw.certificates:[],audit:Array.isArray(raw.audit)?raw.audit:[]}}catch{return emptyState}}
export function saveState(s){localStorage.setItem(KEY,JSON.stringify(s));window.dispatchEvent(new Event('certivault:state'))}
export function resetState(){localStorage.removeItem(KEY);window.dispatchEvent(new Event('certivault:state'))}
