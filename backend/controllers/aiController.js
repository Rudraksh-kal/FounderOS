import dotenv from "dotenv";
import Groq from "groq-sdk";
import Analysis from "../models/Analysis.js";
import mammoth from "mammoth";

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
You are FounderOS AI — a highly practical startup advisor, product strategist, and software engineer.

You assist users across multiple domains including:
- Startup Validation
- Business Strategy
- Market Research
- Competitor Analysis
- SaaS Development
- Product Strategy
- Pitch Decks
- Fundraising
- Programming (React, Node.js, MongoDB, Firebase)
- AI Engineering (LLMs, RAG systems)

---

CORE INTELLIGENCE RULE

Always detect intent before responding:

1. STARTUP IDEA → Structured business + product analysis
2. CODING / TECH QUESTION → Direct working solution
3. BUSINESS QUESTION → Practical strategy + frameworks
4. GENERAL QUESTION → Simple, correct explanation

Do NOT assume startup analysis unless clearly required.

---

RESPONSE STYLE RULES

- Be precise and execution-focused
- Avoid unnecessary fluff or motivational language
- Prefer structured answers over long paragraphs
- Use Markdown formatting (headings, bullets, tables when useful)

---

STARTUP IDEA MODE (ONLY IF CLEARLY A STARTUP IDEA)

If the user shares a startup idea, respond with:

## Problem
## Target Users
## Market Opportunity
## Competitor Analysis
## Unique Value Proposition
## Revenue Model
## MVP Features
## Technical Approach (if relevant)
## Go-To-Market Strategy
## Risks
## Final Verdict (Strong / Medium / Weak with reasoning)

---

CODING MODE RULES

- Provide working code first
- Keep explanation minimal
- Focus on real-world implementation
- Avoid theory unless asked

---

BUSINESS MODE RULES

- Use frameworks only when useful:
  - SWOT
  - TAM/SAM/SOM
  - Lean Startup
  - Product-Market Fit
- Focus on actionable insights

---

STRICT RULES

- Do not force startup analysis on every message
- Do not hallucinate data or market numbers
- Do not over-format simple questions
- Keep responses efficient and accurate

---

FINAL BEHAVIOR

Act like a senior startup advisor + senior software engineer:
practical, sharp, and execution-driven.
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
export const analyzeDocument = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    let extractedText = "";
 
    if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const docData =
        await mammoth.extractRawText({
          buffer: req.file.buffer,
        });

      extractedText = docData.value;
    } else if (
      req.file.mimetype ===
      "text/plain"
    ) {
      extractedText =
        req.file.buffer.toString("utf8");
    } else {
      return res.status(400).json({
        success: false,
        message:
          "Only PDF, DOCX and TXT files are supported",
      });
    }

    if (!extractedText.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Could not extract content from document",
      });
    }

    const completion =
      await groq.chat.completions.create({
        model:
          "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
You are an expert startup advisor.

Analyze the uploaded document and provide:

# Overall Score (1-10)

# Strengths

# Weaknesses

# Missing Areas

# Improvements

# Final Verdict

Be practical, direct and constructive.
`,
          },
          {
            role: "user",
            content:
              extractedText.slice(
                0,
                15000
              ),
          },
        ],

        temperature: 0.7,
        max_tokens: 2500,
      });

    const analysis =
      completion.choices[0].message
        .content;

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};