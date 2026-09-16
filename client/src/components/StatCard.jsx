import React from 'react';
export default function StatCard({icon:Icon,label,value,meta}){return <div className="stat-card"><div className="stat-icon"><Icon size={20}/></div><div><span>{label}</span><strong>{value}</strong><small>{meta}</small></div></div>}
