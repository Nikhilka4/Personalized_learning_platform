import express  from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
const courseRouter = express.Router();

courseRouter.post("/create-course", isAuthenticated,authorizeRole("admin"),uploadCourse);

courseRouter.put("/edit-course/:id", isAuthenticated,authorizeRole("admin"),editCourse);

courseRouter.get("/get-course/:id",getSingleCourse);

courseRouter.get("/get-courses",getAllCourses);

courseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);

courseRouter.put("/add-question",isAuthenticated,addQuestion);

courseRouter.put("/add-answer",isAuthenticated,addAnswer);

courseRouter.put("/add-review/:id",isAuthenticated,addReview);

courseRouter.put("/add-reply",isAuthenticated,authorizeRole("admin"),addReplyToReview);

courseRouter.put("/add-courses",isAuthenticated,authorizeRole("admin"),getAllCourses);

courseRouter.delete("/delete-course/:id",isAuthenticated,authorizeRole("admin"),deleteCourse);
export default courseRouter;