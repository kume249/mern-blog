import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const singup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    res.status(400).json({ message: 'all field required' });
  } else {
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
      const ret = await newUser.save();
      const { password, ...remain } = ret._doc;
      console.log('remain', remain);
      res.status(200).json({ message: 'user create successfully.', ...remain });
    } catch (err) {
      res.status(500).json({ message: 'user create Error.' });
    }
  }
};
