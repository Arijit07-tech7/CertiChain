import {loadState,saveState} from '../utils/storage';
export const store={
 state:loadState(),
 persist(){saveState(this.state)},
 addStudent(s){this.state.students.push(s);this.persist()},
 addCertificate(c){this.state.certificates.unshift(c);this.persist()},
 revokeCertificate(id){const c=this.state.certificates.find(x=>x.id===id);if(c){c.status='REVOKED';c.revokedAt=new Date().toISOString();this.persist()}},
 log(action,detail){this.state.audit.unshift({id:crypto.randomUUID(),action,detail,at:new Date().toISOString()});this.persist()}
};
