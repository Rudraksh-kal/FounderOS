import Idea from "../models/Idea.js";

export const createIdea = async (req, res) => {
  try {
    const {
      title,
      description,
      industry,
      stage,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message:
          "Title and description are required",
      });
    }

    const idea = await Idea.create({
      user: req.dbUser._id,
      title,
      description,
      industry,
      stage,
    });

    res.status(201).json({
      success: true,
      message: "Idea created successfully",
      idea,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({
      user: req.dbUser._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: ideas.length,
      ideas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getIdeaById = async (
  req,
  res
) => {
  try {
    const idea = await Idea.findOne({
      _id: req.params.id,
      user: req.dbUser._id,
    });

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Idea not found",
      });
    }

    res.status(200).json({
      success: true,
      idea,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateIdea = async (
  req,
  res
) => {
  try {
    const idea = await Idea.findOne({
      _id: req.params.id,
      user: req.dbUser._id,
    });

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Idea not found",
      });
    }

    const updatedIdea =
      await Idea.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    res.status(200).json({
      success: true,
      message:
        "Idea updated successfully",
      idea: updatedIdea,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteIdea = async (
  req,
  res
) => {
  try {
    const idea = await Idea.findOne({
      _id: req.params.id,
      user: req.dbUser._id,
    });

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Idea not found",
      });
    }

    await Idea.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Idea deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};