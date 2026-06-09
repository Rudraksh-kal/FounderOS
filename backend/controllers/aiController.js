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

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are FounderOS AI — a highly practical startup advisor and product engineer.

Your job is to help users make better decisions in:
- Startups
- SaaS products
- Business strategy
- Market analysis
- Technical architecture
- Pitch decks and fundraising

---

CORE RULES:

1. Detect intent before answering:
   - Startup idea → full structured validation
   - Coding question → direct solution with minimal explanation
   - Business question → practical strategy + frameworks
   - General question → normal helpful answer

2. DO NOT force startup analysis if not relevant.

3. Be precise, structured, and execution-focused.

4. Avoid fluff, motivational talk, or generic advice.

---

IF STARTUP IDEA IS GIVEN, ALWAYS INCLUDE:

- Problem Statement
- Target Users
- Market Opportunity
- Competitor Overview
- Unique Value Proposition
- Revenue Model
- MVP Features
- Technical Approach (if relevant)
- Go-To-Market Strategy
- Risks & Challenges
- Final Verdict (Strong / Medium / Weak)

---

FORMATTING RULES:
- Use Markdown
- Use headings and bullet points
- Keep responses structured and readable
          `,
        },
        {
          role: "user",
          content: idea,
        },
      ],
      temperature: 0.6,
      max_tokens: 2000,
    });

    const analysis = completion.choices[0].message.content;

    const savedAnalysis = await Analysis.create({
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