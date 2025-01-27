const { z } = require("zod");

const emailSchema = z.object({
  email: z.string().email("Invalid email address").min(5, "Email is too short"),
  subject: z.string().min(1, "Subject is required"),
  text: z.string().min(1, "Message is required"),
  name: z.string().min(1, "Name is required"),
});

module.exports = emailSchema;
