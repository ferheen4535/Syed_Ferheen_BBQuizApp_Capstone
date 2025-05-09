import Questions from '../../models/quiz/questionModel.js';

export async function seedQuestions(req, res) {
    try{
        await Questions.deleteMany({});

        const questions = await Questions.create([
            {
              text: "What’s your beard status?",
              options: [
                "Just starting out (stubble stage)",
                "Mid-growth chaos (patchy or uneven)",
                "Full-grown legend (beard is strong and proud)",
                "Wild Badmaash (long, thick, and untamed)"
              ]
            },
            {
              text: "What’s your vibe?",
              options: [
                "Clean and classy",
                "Bold and fearless",
                "Laid-back and low-maintenance",
                "Rugged and raw"
              ]
            },
            {
              text: "How much time do you spend grooming?",
              options: [
                "I’m a wash-and-go kind of guy",
                "5-10 minutes, max",
                "I got a whole ritual"
              ]
            },
            {
              text: "Beard goals?",
              options: [
                "Keep it neat and shaped",
                "Grow it out and let it rule",
                "Just don’t want it to itch or flake",
                "Be the next beard-fluencer"
              ]
            },
            {
              text: "Skin type under the beard?",
              options: [
                "Dry like the desert",
                "Oily and shiny",
                "No clue—help me out",
                "Balanced and chill"
              ]
            }
          ]);

    res.status(201).json(questions)
      }catch(error){
      res.status(400).json({error: error.message});
      }
    }
    
    async function getQuestions(req, res) {
        try{
            const questions = await Questions.find({});
            res.status(200).json(questions);
        } catch(error) {
            res.status(400).json({error: error.message});
        }
        
    }
    
    async function createQuestions(req, res) {
      try {
          const question = await Questions.create(req.body);  
          console.log(question);
          res.status(201).json(question);
      } catch (error) {
          console.error(error);
          res.status(400).json({ error: error.message });
      }
  }


  // export async function updateQuestion(req, res) {
  //   try {
  //     const updatedQuestion = await Questions.findByIdAndUpdate(
  //       req.params.id,
  //       req.body,
  //       { new: true, runValidators: true }
  //     );
  
  //     if (!updatedQuestion) {
  //       return res.status(404).json({ error: 'Question not found' });
  //     }
  
  //     res.status(200).json(updatedQuestion);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }
  
   
    
    export {
   
      getQuestions,
      createQuestions,
      // updateQuestion,

    };