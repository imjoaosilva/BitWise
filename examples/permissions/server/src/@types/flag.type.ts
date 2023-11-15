/**
 * Enum representing permission flags for user actions.
 */

export enum Flag {
    READ_USER_LIST = 0x1, // 1 << 0
    READ_USER_DETAILS = 0x2, // 1 << 1
    WRITE_USER_DETAILS = 0x4, // 1 << 2
    DELETE_USER = 0x8, // 1 << 3
    ADMIN = 0x10, // 1 << 4
    SUPER_ADMIN = 0x20, // 1 << 5
}