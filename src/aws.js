// This file simulates leaked AWS credentials
// Gitleaks default rules always catch these

export const AWS = {
  accessKeyId: "AKIA4F7XXAMPSE12345",
  secretAccessKey: "QwErTyUiOWDsWfGhJkLzXcVbNm1234567890AbCd",
  STRIPE_SECRET_KEY:"sk_test_99H8sffhksdfhsdfhsdfhsdfhsdf",
  GITHUB_TOKEN:"ghp_a1b2c3d4e5f6g7h9i9j0k1l2m3n4o5p6q7r",
  PRIVATE_KEY: `
  -----BEGIN PRIVATE KEY-----
abc123superlongrandomstringwithentropyvalue987654321
-----END PRIVATE KEY-----
`
};
