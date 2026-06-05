import dotenv from "dotenv";
import Groq from "groq-sdk";
import Analysis from "../models/Analysis.js";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeIdea = async (req, res) => {
  try {
    const { idea } = req.body;

    if (!idea) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `
You are FounderOS AI.

You help users with:

- Startup Validation
- Business Strategy
- Market Research
- Competitor Analysis
- SaaS Development
- Product Strategy
- Pitch Decks
- Fundraising
- React
- Node.js
- MongoDB
- Firebase
- AI Engineering
- LLMs
- RAG Systems
- Programming
- Career Guidance

Rules:

1. If the user shares a startup idea, analyze it thoroughly.
2. If the user asks a coding question, answer it directly.
3. If the user asks a business question, provide practical advice.
4. If the user asks a general question, answer normally.
5. Format responses using markdown.
6. Use headings, bullet points and tables where useful.
7. Do not force startup analysis on every message.
`,
          },
          {
            role: "user",
            content: idea,
          },
        ],
        temperature: 0.7,
        max_tokens: 2500,
      });

    const analysis =
      completion.choices[0].message.content;

    const savedAnalysis =
      await Analysis.create({
        user: req.dbUser._id,
        idea,
        analysis,
      });

    res.status(200).json({
      success: true,
      analysis: savedAnalysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyAnalyses = async (
  req,
  res
) => {
  try {
    const analyses =
      await Analysis.find({
        user: req.dbUser._id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: analyses.length,
      analyses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAnalysisById = async (
  req,
  res
) => {
  try {
    const analysis =
      await Analysis.findById(
        req.params.id
      );

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found",
      });
    }

    if (
      analysis.user.toString() !==
      req.dbUser._id.toString()
    ) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAnalysis = async (
  req,
  res
) => {
  try {
    const analysis =
      await Analysis.findById(
        req.params.id
      );

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found",
      });
    }

    if (
      analysis.user.toString() !==
      req.dbUser._id.toString()
    ) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    await Analysis.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Analysis deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};