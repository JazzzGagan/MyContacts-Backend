const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../Controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
/* router.route("/").post(createContact); */
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
/* router.route("/:id").

router.route("/:id") */

module.exports = router;
