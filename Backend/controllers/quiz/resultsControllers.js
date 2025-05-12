// controllers/quiz/resultsControllers.js
import Result from '../../models/quiz/resultModel.js';

// Seed the results collection
export async function seedResults(req, res) {
  try {
    await Result.deleteMany({});

    const results = await Result.create([
      {
        title: "The Fresh Rebel",
        scentMatch: "Masti Mint Beard Butter and Oil",
        description: `You’re on the rise, beard rookie—but your energy is undeniable. Whether you’re rocking stubble or growing past patchy days, you bring that fresh-out-the-box confidence. Masti Mint cools, hydrates, and energizes your beard journey. Start light, grow strong.`
      },
      {
        title: "The Beard Boss",
        scentMatch: "Smokin’ Cedar Beard Butter and Oil",
        description: `Commanding presence, bold personality—your beard leads the way. You’ve got volume, strength, and swagger. Smokin’ Cedar brings out the best in your mane with deep conditioning and that warm, smoky scent of total dominance. You don’t follow trends—you set them.`
      },
      {
        title: "The Chill Badmaash",
        scentMatch: "Icy Springs Beard Butter and Oil",
        description: `Cool, calm, and confidently chill. Your beard vibe is low-effort but high-impact. You like feeling fresh without the fuss. Icy Springs keeps things crisp and smooth while locking in moisture. A touch of this and you’re good to go—effortlessly.`
      },
      {
        title: "The Untamed Warrior",
        scentMatch: "Sandalwood Beard Butter and Oil",
        description: `Your beard doesn’t play by the rules—and neither do you. Long, thick, wild, and proud. You’re built for adventure, and your mane needs heavy-duty care. Sandalwood delivers earthy depth and serious conditioning for beards that don’t back down. Go wild or go home.`
      }
    ]);

    res.status(201).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Get all results
export async function getResults(req, res) {
  try {
    const results = await Result.find({});
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Create a new result
export async function createResult(req, res) {
  try {
    const result = await Result.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update a result
export async function updateResult(req, res) {
  try {
    const { id } = req.params;
    const updatedResult = await Result.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedResult) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json(updatedResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a result
export async function deleteResult(req, res) {
  try {
    const { id } = req.params;
    const deletedResult = await Result.findByIdAndDelete(id);

    if (!deletedResult) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json({ message: `Deleted result titled "${deletedResult.title}" successfully.` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Match quiz answers to results by question 3 answer
export const getResultByAnswer = async (req, res) => {
  const { answers } = req.body;
  const answer = answers.find((ans) => ans.questionIndex === 3);

  const resultMap = {
    0: "680f81b5e7739a486e120b2b",   //The Untamed Warrior: Sandlewood//
    1: "680f81b5e7739a486e120b28",   // The Fresh Rebel: Masti Mint//
    2: "680f81b5e7739a486e120b29",   // The Beard Boss: Smokin Ceder//
    3: "680f81b5e7739a486e120b2a"    //The chill badmaash: Icy Springs//
  };

  const resultId = resultMap[answer?.answerIndex];

  if (!resultId) {
    return res.status(404).json({ error: 'No matching result.' });
  }

  try {
    const result = await Result.findById(resultId);
    if (result) {
      res.json({ resultId: result._id });
    } else {
      res.status(404).json({ error: 'Result not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Result not found' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};