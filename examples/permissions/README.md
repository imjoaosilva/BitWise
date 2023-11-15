## Base URL: `protocol://ip:port/api/v1`

| Endpoint | Description |
| --- | --- |
| /login | Authenticates a user and returns a JWT token |
| /logout | Invalidates a JWT token |
| /users | Returns a list of all users |
| /users/{id} | Returns a specific user by ID |

| Flag Name | Value |
| --- | --- |
| READ_USER_LIST | 0x0000000000000001 (1 << 0) |
| READ_USER_DETAILS | 0x0000000000000010 (1 << 1) |
| WRITE_USER_DETAILS | 0x0000000000000100 (1 << 2) |
| DELETE_USER | 0x0000000000001000 (1 << 3) |
| ADMIN | 0x0000000000010000 (1 << 4) |
| SUPER_ADMIN | 0x0000000000100000 (1 << 5) |
