const express = require('express');
const router = express.Router();
const { getClientPnl, uploadManualPnl } = require('../controllers/pnlController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/client', verifyToken, getClientPnl);
router.post('/upload', verifyToken, uploadManualPnl);

module.exports = router;
