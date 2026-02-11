// This file simulates leaked AWS credentials
// Gitleaks default rules always catch these

// # AWS Access Key (FAKE - for testing only)
AWS_ACCESS_KEY_ID="AKIA6F7D8S6A6Q4x3E2R"
AWS_SECRET_ACCESS_KEY="QwSqSdsq6pAsDfgHLkLzXcVbNm12345opop890AbCf"

// # AWS Session Token (FAKE - for testing only)
AWS_SESSION_TOKEN = `
-----BEGIN PRIVATE KEY-----
abc123superlongrandomstringsJshenjropyvalue987654325
-----END PRIVATE KEY-----`
