const Review = require("../models/Review");
const openai = require("../config/openai");

exports.submitReview = async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Classify the review as: genuine, spam, or fake."
        },
        {
          role: "user",
          content: text
        }
      ]
    });

    const label = response.choices[0].message.content.toLowerCase();

    const review = await Review.create({
      text,
      label
    });

    res.status(201).json({
      success: true,
      review
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
