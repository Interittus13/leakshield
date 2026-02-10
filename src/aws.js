// This file simulates leaked AWS credentials
// Gitleaks default rules always catch these

// # AWS Access Key (FAKE - for testing only)
AWS_ACCESS_KEY_ID="AKIA9F8D7S6A5Q4W3E2R"
AWS_SECRET_ACCESS_KEY="QwErTyUiOpAsDfGhJkLzXcVbNm1234567890AbCd"

// # AWS Session Token (FAKE - for testing only)
AWS_SESSION_TOKEN = `
-----BEGIN PRIVATE KEY-----
abc123superlongrandomstringwithentropyvalue987654321
-----END PRIVATE KEY-----`
