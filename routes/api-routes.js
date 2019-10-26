const router = require("express").Router();
const passport = require("passport");
const Business = require("../db/business");
const Promotions = require("../db/promotions");

// Redirect Routes

// Business Routes

// List all businesses
router.get("/business", (req, res) => {
  Business.getAllBusiness(res);
});

//get businesses by user
router.get("/businessuser/:id", (req, res) => {
  console.log(req.params.id);
  Business.businessByUser(req.params.id, res);
});

// Get List of All Cities
router.get("/cities", (req, res) => {
  Business.getAllCities(res);
});

// Add Business

router.post("/addBusiness", (req, res) => {
  console.log(req.body);
  res.send("posted");
  // Business.addBusiness(req.pendingBusiness)
});

router.get("/allCities", (req, res) => {
  Business.getAllCities(res);
});

// Promotion Routes

//Get Promotion by business id 
router.get('/promotion/all/business/:id', (req, res) => {
  Promotions.getPromotionsByBusiness(req.params.id, res)
}); 

// Get Promotions in City

router.get("/promotion/all/:city", (req, res) => {
  Promotions.getPromotionsInCity(req.params.city, res);
});

// Add Promotion

// Delete Promotion

router.post("/promotion/delete/:id", (req, res) => {
    Promotions.deletePromotion(req.params.id, res);
  });

// Edit Promotion
router.put('/promotion/edit', (req, res) => {
  Promotions.editPromotion(req.body.promotion, res)
}); 
// Home -> Landing Page
// Landing Page -> Login -> Dashboard
// Landing Page -> Apple Store
// Landing Page -> Play Store

module.exports = router;
