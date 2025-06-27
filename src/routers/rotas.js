import { Router } from "express";
import { signUp } from "../controllers/users";

const router = Router();



router.post('/signup', signUp )

