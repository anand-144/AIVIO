// server/controllers/authVerify.js
import admin from '../config/firebaseAdmin.js';

const verifyFirebaseToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.status(401).json({ success: false, message: 'No token provided' });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.firebaseUser = decoded;
    next();
  } catch (err) {
    res.status(403).json({ success: false, message: 'Invalid Firebase token' });
  }
};

export default verifyFirebaseToken;
