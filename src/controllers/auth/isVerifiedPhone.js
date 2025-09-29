import User from '../../models/User.js';

const isVerifiPhone = async (req, res, next) => {
  try {
    const phone = req.query.phone || req.body.phone;
    if (!phone)
      return res.status(400).json({ message: 'phone query required' });

    const user = await User.findOne({ phone }).lean();
    if (user && user.verified) {
      return res.json({ verified: true, user });
    }

    // Якщо не верифіковано або користувача нема — повертаємо verified:false
    return res.status(404).json({ phone, verified: false });
  } catch (err) {
    return next(err);
  }
};

export default isVerifiPhone;
