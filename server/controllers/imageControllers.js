// backend/controllers/imageController.js

import userModel from '../models/userModel.js';
import FormData from 'form-data';
import axios from 'axios';

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId;

    // Check if user and prompt exist
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' });
    }

    // Check for available credits
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No credit balance left',
        creditBalance: user.creditBalance,
      });
    }

    // Prepare the form data for ClipDrop API
    const formData = new FormData();
    formData.append('prompt', prompt);

    // Request image from ClipDrop API
    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API,
        ...formData.getHeaders(),
      },
      responseType: 'arraybuffer',
    });

    // Convert image to base64
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Deduct credit and respond
    await userModel.findByIdAndUpdate(userId, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: 'Image Generated Successfully',
      resultImage,
      creditBalance: user.creditBalance - 1,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
