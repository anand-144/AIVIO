// controllers/historyController.js
import HistoryModel from '../models/historyModel.js';

export const getUserHistory = async (req, res) => {
  try {
    const userId = req.userId;

    const history = await HistoryModel.find({ userId }).sort({ createdAt: -1 });

    res.json({ success: true, history });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
