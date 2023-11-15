## Base URL: `protocol://ip:port/api/v1`

| Endpoint | Type | Description |
| --- | --- | --- |
| /users | GET | Get all users |
| /users | POST | Create a new user |
| /users | PUT | Update user details |
| /users/:id | GET | Get user details |
| /auth/login | POST | Login |

| Flag Name | Value |
| --- | --- |
| READ_USER_LIST | 0x0000000000000001 (1 << 0) |
| READ_USER_DETAILS | 0x0000000000000010 (1 << 1) |
| WRITE_USER_DETAILS | 0x0000000000000100 (1 << 2) |
| DELETE_USER | 0x0000000000001000 (1 << 3) |
| ADMIN | 0x0000000000010000 (1 << 4) |
