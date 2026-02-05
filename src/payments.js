// This file contains JWT + private key block
// Both should trigger gitleaks

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4ifQ.sflkjsdlfkjsdlfkjsdlfkjsdlfkjsdlfk";

export const PRIVATE_KEY = `
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAvFakeKeyForTestingOnlyDontUse
-----END RSA PRIVATE KEY-----
`;
