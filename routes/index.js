const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Routes
router.get('/', pageController.home);
router.get('/features', pageController.features);
router.get('/architecture', pageController.architecture);
router.get('/team', pageController.team);
router.get('/contact', pageController.contact);
router.post('/contact', pageController.contactSubmit);

module.exports = router;
