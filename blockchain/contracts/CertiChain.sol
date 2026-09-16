// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
contract CertiChain {
    struct Credential { bytes32 fingerprint; address issuer; uint64 issuedAt; bool revoked; }
    mapping(bytes32 => Credential) public credentials;
    mapping(address => bool) public trustedIssuers;
    address public owner;
    event IssuerUpdated(address indexed issuer, bool trusted);
    event CredentialIssued(bytes32 indexed certificateId, bytes32 fingerprint, address indexed issuer);
    event CredentialRevoked(bytes32 indexed certificateId, address indexed issuer);
    modifier onlyOwner(){require(msg.sender==owner,"owner only");_;}
    modifier onlyIssuer(){require(trustedIssuers[msg.sender],"untrusted issuer");_;}
    constructor(){owner=msg.sender;trustedIssuers[msg.sender]=true;}
    function setIssuer(address issuer,bool trusted) external onlyOwner {trustedIssuers[issuer]=trusted;emit IssuerUpdated(issuer,trusted);}
    function issue(bytes32 certificateId,bytes32 fingerprint) external onlyIssuer {require(credentials[certificateId].issuedAt==0,"exists");credentials[certificateId]=Credential(fingerprint,msg.sender,uint64(block.timestamp),false);emit CredentialIssued(certificateId,fingerprint,msg.sender);}
    function revoke(bytes32 certificateId) external onlyIssuer {Credential storage c=credentials[certificateId];require(c.issuedAt!=0,"not found");require(c.issuer==msg.sender,"issuer only");require(!c.revoked,"already revoked");c.revoked=true;emit CredentialRevoked(certificateId,msg.sender);}
    function verify(bytes32 certificateId,bytes32 fingerprint) external view returns(bool valid,bool revoked,address issuer,uint64 issuedAt){Credential memory c=credentials[certificateId];return(c.issuedAt!=0 && c.fingerprint==fingerprint,c.revoked,c.issuer,c.issuedAt);}
}
