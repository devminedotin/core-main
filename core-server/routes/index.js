var express = require("express");
var router = express.Router({ mergeParams: true });
var User = require("../models/user");
var Freelancer = require("../models/freelancer");
const requestHelper = require("../helpers/requestHelper");

router.get("/", function (req, res) {
  res.send("Application is up");
});

router.post("/contact-us", async function (req, res) {
  try {
    console.log("User object for creation is ", req.body.obj);
    if (!req.body.obj) {
      throw new Error("Invalid User object in DB");
    }
    await User.create(req.body.obj, function (err, userCreated) {
      if (err) {
        throw new Error("error while storing user object in DB");
      } else {
        userCreated.save();
        requestHelper.sendSuccessResponse(req, res, userCreated);
      }
    });
  } catch (err) {
    console.log(`error while storing user object in DB: ${err}`);
    requestHelper.sendErrorResponse(req, res, err);
  }
});

router.post("/join-community", async function (req, res) {
  try {
    console.log("Freelancer object for creation is ", req.body.obj);
    if (!req.body.obj) {
      throw new Error("Invalid User object in DB");
    }
    await Freelancer.create(req.body.obj, function (err, freelancerCreated) {
      if (err) {
        throw new Error("error while storing Freelancer object in DB");
      } else {
        freelancerCreated.save();
        requestHelper.sendSuccessResponse(req, res, freelancerCreated);
      }
    });
  } catch (err) {
    console.log(
      `error while storing FreeLancer data in DB: ${JSON.stringify(err)}`
    );
    requestHelper.sendErrorResponse(req, res, err);
  }
});

module.exports = router;
