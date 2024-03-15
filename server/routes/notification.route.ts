import express from 'express';
import { authorizeRole, isAuthenticated } from '../middleware/auth';
import { getNotification, updateNotification } from '../controllers/notification.controller';
import { updateAccessToken } from '../controllers/user.controller';
const notificationRoute = express.Router();

notificationRoute.get("/get-all-notifications",updateAccessToken, isAuthenticated, authorizeRole("admin"), getNotification);


notificationRoute.put("/update-notification/:id",updateAccessToken, isAuthenticated, authorizeRole("admin"), updateNotification)

export default notificationRoute;