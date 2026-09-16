import React,{useState} from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import IssueCertificate from './pages/IssueCertificate';
import Certificates from './pages/Certificates';
import CertificateView from './pages/CertificateView';
import Verify from './pages/Verify';
import SecurityCenter from './pages/SecurityCenter';
import AuditTrail from './pages/AuditTrail';
import {isLoggedIn} from './services/auth';
import Login from './pages/Login';
function Guard({children}){return isLoggedIn()?children:<Navigate to="/login" replace/>}
export default function App(){return <BrowserRouter><Routes><Route path="/login" element={<Login/>}/><Route path="*" element={<Guard><DashboardLayout><Routes><Route path="/" element={<Dashboard/>}/><Route path="/students" element={<Students/>}/><Route path="/issue" element={<IssueCertificate/>}/><Route path="/certificates" element={<Certificates/>}/><Route path="/certificates/:id" element={<CertificateView/>}/><Route path="/verify" element={<Verify/>}/><Route path="/security" element={<SecurityCenter/>}/><Route path="/audit" element={<AuditTrail/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></DashboardLayout></Guard>}/></Routes></BrowserRouter>}
