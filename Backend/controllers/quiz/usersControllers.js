import User from '../../models/quiz/userModel.js';

// Seed users
export async function seedUsers(req, res) {
    try {
        await User.deleteMany({});

        const users = await User.create([
            { username: 'John', email: 'john.m@gmail.com' },
            { username: 'Mike', email: 'mike.s@gmail.com' },
            { username: 'Tom', email: 'tom.a@gmail.com' },
            { username: 'Moiz', email: 'moiz.z@gmail.com' },
            { username: 'Mo', email: 'mo.smith@gmail.com' },
            { username: 'Bert', email: 'bert.w@gmail.com' },
            { username: 'Joel', email: 'joel.s@gmail.com' },
            { username: 'Al', email: 'alert.s@gmail.com' },
            { username: 'Paul', email: 'paul.t@gmail.com' },
            { username: 'Samir', email: 'samir.k@gmail.com' }
        ]);

        console.log(users);
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all users
export async function getUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Create a new user
export async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

// Get a single user by ID
export async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update a user by ID
export async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a user by ID
export async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//update user//
export const updateUserByCreds = async (req, res) => {
  const { username, email, newUsername } = req.body;

  if (!username || !email || !newUsername) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { username, email },             // find current user//
      { username: newUsername },       // set new username//
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete user by username & email -> find _id first, then delete by _id
export async function unsubscribeUser(req, res) {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }

  try {
    const user = await User.findOne({ username, email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await User.findByIdAndDelete(user._id);

    res.json({ message: `User '${username}' unsubscribed successfully.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}
