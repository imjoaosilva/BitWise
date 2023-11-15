import { Permission } from '../@types/permission.type';
import { Response, NextFunction } from 'express';
import { Request } from '../@types/request.type';
import { hasPermission, getNamesByPermission } from '../services/permission.service';


export const PermissionMiddleware = (permission: Permission) => (req: Request, res: Response, next: NextFunction) => {

    // Checking if the user has the permission
    if(!hasPermission(req.user!.permissions, permission)) return res.status(401).json({
        status: 401,
        message: 'Unauthorized',
        requiredPermission: Permission[permission],
        userPermissions: getNamesByPermission(req.user!.permissions)
    });

    next();
}