import Results from '../../models/quiz/resultModel.js';

export async function seedResults(req, res) {
  try {
    await Results.deleteMany({}); // Clear existing data

    const results = await Results.create([
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
      },
      {
        title: "The Bold Blend",
        scentMatch: "Smokin’ Cedar + Sandalwood Beard Butter and Oil",
        description: `You’re a powerhouse of contrast—refined yet rugged, classic yet unpredictable. Your beard tells stories of smoky lounges and wild trails. This combo brings the heat of Smokin’ Cedar and the grounding calm of Sandalwood. Deeply nourishing with an edge. You’re not one note—you’re a whole track list.`
      },
      {
        title: "The Mint Maverick",
        scentMatch: "Masti Mint + Icy Springs Beard Butter and Oil",
        description: `Fresh, sharp, and ready to break the mold. You think fast, move faster, and leave a trail of minty cool confidence wherever you go. Masti Mint meets Icy Springs in a fusion that hydrates, cools, and revives like a blast of cold air on a hot day. Refreshment? You embody it.`
      },
      {
        title: "The Cool Strategist",
        scentMatch: "Icy Springs + Smokin’ Cedar Beard Butter and Oil",
        description: `Chill doesn’t mean soft. You’re calm under pressure and calculated in every move. Icy Springs keeps you fresh, while Smokin’ Cedar gives that grounded strength underneath. It’s a balance of chill and grit—perfect for a tactician with edge.`
      },
      {
        title: "The Natural Charmer",
        scentMatch: "Sandalwood + Masti Mint Beard Butter and Oil",
        description: `You’re laid-back, approachable, and full of charm without trying. Masti Mint gives you that fresh-faced appeal, while Sandalwood keeps your beard soft and strong. Whether you’re brunching or bonfiring, your scent is subtle but unforgettable. Clean-cut with just enough wild.`
      },
      {
        title: "The Bearded Sage",
        scentMatch: "Smokin’ Cedar + Masti Mint Beard Butter and Oil",
        description: `Wisdom, swagger, and a beard that’s seen some things. You mix fiery confidence with a fresh take on life. The bold scent of Smokin’ Cedar layered with cool Masti Mint makes you smell like secrets and success. You’ve been around—but you’re just getting started.`
      },
      {
        title: "The Explorer Pack",
        scentMatch: "Badmaash Beards Sampler Pack",
        description: `Not sure who you are yet—or just want it all? The Explorer Pack is for the curious, the evolving, and the indecisive. Try them all: Masti Mint, Smokin’ Cedar, Icy Springs, and Sandalwood. Discover your vibe one scent at a time. No commitment, all adventure.`
      }
    ]);

    res.status(201).json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getResults(req, res) {
  try {
    const results = await Results.find({});
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createResult(req, res) {
  try {
    const result = await Results.create(req.body);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

////---UPDATE---////
//http://localhost:5055/quiz/results/680bca9082d1f2edec46715c//

export async function updateResult(req, res) {
  try {
    const { id } = req.params;

    const updatedResult = await Results.findByIdAndUpdate(
      id,
      { title: "Super Badmaash" },
      { new: true, runValidators: true }
    );

    if (!updatedResult) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json(updatedResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteResult(req, res) {
  try {
    const { id } = req.params;

    const deletedResult = await Results.findByIdAndDelete(id);

    if (!deletedResult) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json({ message: `Deleted result titled "${deletedResult.title}" successfully.` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}