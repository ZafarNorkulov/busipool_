import { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    budget: {
      endDate: {
        type: String,
      },
      current: {
        type: String,
      },
      final: {
        type: String,
      },
      percentage: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
