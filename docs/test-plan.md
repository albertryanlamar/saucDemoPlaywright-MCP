# Authentication Test Plan

## Purpose
Document the test cases and data-driven approach for login feature.

## Test Case Overview
All test cases stored in: `testdata/tc/testcases.json`

| Test Case ID | Name               | Description |
|--------------|------------------|-------------|
| TC_LOGIN_001 | Valid Login       | Verify users can login with valid credentials |
| TC_LOGIN_002 | Invalid Password  | Verify login fails with wrong password |

## Test Data
Stored in: `.env.staging`

- username / password combinations for data-driven execution

## Execution Flow
1. Load JSON test cases from `testdata/tc/testcases.json`
2. Loop through each test case and data row
3. Execute steps and verify expected results
4. Generate report