import express from 'express';
import {
  createPortfolio,
  getAllPortfolios,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolio.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllPortfolios);
router.get('/:id', getPortfolio);

// Protected routes
router.post('/', protect, createPortfolio);
router.put('/:id', protect, updatePortfolio);
router.delete('/:id', protect, deletePortfolio);

export default router;