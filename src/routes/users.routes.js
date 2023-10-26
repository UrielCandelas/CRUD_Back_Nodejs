import { Router } from "express";

import {
  addNewUser,
  getUser,
  getAllUsers,
  editUser,
  deleteUser,
} from "../controllers/users.controller.js";

import { userSchema } from '../schemas/users.schema.js'
import { validateSchema } from '../middlewares/schemaValidator.middleware.js'

const router = Router();

router.get("/crud", getAllUsers);
router.post("/crud", validateSchema(userSchema), addNewUser);
router.get("/crud/:id", getUser);
router.put("/crud/:id",validateSchema(userSchema), editUser);
router.delete("/crud/:id", deleteUser);

export default router;
