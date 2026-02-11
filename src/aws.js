// This file simulates leaked AWS credentials
// Gitleaks default rules always catch these

// # AWS Access Key (FAKE - for testing only)
AWS_ACCESS_KEY_ID="AKIA9F8D6S5A6Q4x3E2R"
AWS_SECRET_ACCESS_KEY="QwErTsSi5pAsDfgHLkLzXcVbNm12345opop890AbCd"

// # AWS Session Token (FAKE - for testing only)
AWS_SESSION_TOKEN = `
-----BEGIN PRIVATE KEY-----
abc123superlongrandomstrinGsIshenjropyvalue987654321
-----END PRIVATE KEY-----`
