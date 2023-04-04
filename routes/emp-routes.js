 //const { Router } = require('express');
const express = require('express');
const router = express.Router();
const emp= require("../model/Emp");
const empController= require("../controller/emp-controller");


//router.get("/",);

/*router.get("/", empController.getAllEmps);*/
router.post("/",empController.addEmp);

module.exports=router;

/*
router.get("/", booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
*/
