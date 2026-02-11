// This file simulates leaked AWS credentials
// Gitleaks default rules always catch these

// # AWS Access Key (FAKE - for testing only)
AWS_ACCESS_KEY_ID="AKIA7F7D8W6A6Q4x3E2R"
AWS_SECRET_ACCESS_KEY="QwSqWdsi5pAsDfgHLkLzXcVbNm12345opop890AbCd"

// # AWS Session Token (FAKE - for testing only)
AWS_SESSION_TOKEN = `
-----BEGIN PRIVATE KEY-----
abcd23superlongrandomstringsIshenjropyvalue987654321
-----END PRIVATE KEY-----`
