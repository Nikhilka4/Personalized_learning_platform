import express  from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, generateVideoUrl, getAdminAllCourses, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { updateAccessToken } from "../controllers/user.controller";
const courseRouter = express.Router();

courseRouter.post("/create-course",updateAccessToken, isAuthenticated,authorizeRole("admin"),uploadCourse);

courseRouter.put("/edit-course/:id", updateAccessToken,isAuthenticated,authorizeRole("admin"),editCourse);

courseRouter.get("/get-course/:id",getSingleCourse);

courseRouter.get("/get-courses",getAllCourses);

courseRouter.get("/get-admin-courses",isAuthenticated,authorizeRole("admin"),getAdminAllCourses);

courseRouter.get("/get-course-content/:id",updateAccessToken,isAuthenticated,getCourseByUser);

courseRouter.put("/add-question",updateAccessToken,isAuthenticated,addQuestion);

courseRouter.put("/add-answer",updateAccessToken,isAuthenticated,addAnswer);

courseRouter.put("/add-review/:id",updateAccessToken,isAuthenticated,addReview);

courseRouter.put("/add-reply",updateAccessToken,isAuthenticated,authorizeRole("admin"),addReplyToReview);

courseRouter.put("/add-courses",updateAccessToken,isAuthenticated,authorizeRole("admin"),getAllCourses);

courseRouter.post("/getVdoCipherOTP",generateVideoUrl);

courseRouter.delete("/delete-course/:id",updateAccessToken,isAuthenticated,authorizeRole("admin"),deleteCourse);

export default courseRouter;