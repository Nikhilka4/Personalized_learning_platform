import express  from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { editCourse, uploadCourse } from "../controllers/course.controller";
const courseRouter = express.Router();

courseRouter.post("/create-course", isAuthenticated,authorizeRole("admin"),uploadCourse);

courseRouter.put("/edit-course/:id", isAuthenticated,authorizeRole("admin"),editCourse);
export default courseRouter;