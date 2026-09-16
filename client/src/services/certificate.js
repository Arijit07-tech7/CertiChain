import {sha256} from '../utils/hash';
import {certificateId} from '../utils/certificateId';
export async function buildCertificate(student, form){
 const id=certificateId();
 const payload={id,studentId:student.id,studentName:student.name,course:form.course,department:form.department,year:form.year,issueDate:form.issueDate,template:form.template,sign1:form.sign1,sign2:form.sign2,issuedAt:new Date().toISOString()};
 const fingerprint=await sha256(JSON.stringify(payload));
 return {...payload,fingerprint,status:'VALID',verificationSource:'ISSUER_RECORD'};
}
