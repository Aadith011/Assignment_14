const express = require('express');
const router = express.Router();
const Resume = require("./models/Resume");
const Contact = require("./models/Contact");

router.get("/api/resume", async (req, res) => {
    try {
        const resume = await Resume.findOne();
        res.json(resume);
    } catch (err) {
        res.status(500).json({ error: "Error fetching resume" });
    }
});

router.post("/api/contact", async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({ message: "Message sent successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error saving message" });
    }
});

module.exports = router;