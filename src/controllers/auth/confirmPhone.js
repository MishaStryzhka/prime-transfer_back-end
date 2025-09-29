import User from '../../models/User.js';

const confirmPhone = async (req, res, next) => {
  try {
    const { phone, name, email, metadata } = req.body;
    if (!phone) return res.status(400).json({ message: 'phone required' });

    const update = {
      phone,
      name,
      email,
      metadata,
      verified: true,
    };

    const user = await User.findOneAndUpdate(
      { phone },
      { $set: update },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).lean();

    return res.status(201).json({ user });
  } catch (err) {
    return next(err);
  }
};

export default confirmPhone;
