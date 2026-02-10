// This file simulates leaked AWS credentials
// Gitleaks default rules always catch these

// # AWS Access Key (FAKE - for testing only)
AWS_ACCESS_KEY_ID="AKIA9F8D6S5A5Q4s3E2R"
AWS_SECRET_ACCESS_KEY="QwErTssiOpAsDfgHLkLzXcVbNm1234567890AbCd"

// # AWS Session Token (FAKE - for testing only)
AWS_SESSION_TOKEN = `
-----BEGIN PRIVATE KEY-----
abc123superlongrandomstringSIshenjropyvalue987654321
-----END PRIVATE KEY-----`
