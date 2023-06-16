import express from "express";
import {
  addUser,
  deleteUser,
  getExpense,
  getIncome,
  getTotal,
  getTotalExpanse,
  getNetIncome,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getExpense);

router.get("/income", getIncome);

router.get("/netincome", getNetIncome);

router.get("/total", getTotal);

router.get("/totalexpense", getTotalExpanse);

router.post("/", addUser)

router.delete("/:id", deleteUser);

export default router;
