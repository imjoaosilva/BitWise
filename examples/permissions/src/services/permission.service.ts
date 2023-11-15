import { Permission } from '../@types/permission.type'

export const hasPermission = (permission: number, permissionToCheck: number) => {
    
    // Checking if the user is admin
    if(permission === Permission.ADMIN) return true;

    // Checking if the user has the permission
    return (permission & permissionToCheck) === permissionToCheck
}

export const getNamesByPermission = (permission: number) => {
    const permissions: string[] = [];

    for (const key in Permission) {
        const enumValue = Permission[key as keyof typeof Permission];
        if (typeof enumValue === 'number' && (permission & enumValue) === enumValue) {
            permissions.push(key);
        }
    }

    return permissions;
};