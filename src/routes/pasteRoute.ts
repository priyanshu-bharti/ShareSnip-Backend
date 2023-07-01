import express from "express";

const pasteRouter = express.Router();

// View a single paste
pasteRouter.get("/:id", (req, res) => {
    console.log(req.params.id);

    res.json({
        message: "View paste",
        id: JSON.stringify(req.params.id),
        status: "200",
    });
});

// Delete a paste with matching ID
pasteRouter.delete("/:id", (req, res) => {
    console.log(req.params.id);

    res.json({
        message: "Delete Paste",
        id: JSON.stringify(req.params.id),
        status: "200",
    });
});

// Update a paste with matching ID
pasteRouter.put("/:id", (req, res) => {
    console.log(req.params.id);

    res.json({
        message: "Update Paste",
        id: JSON.stringify(req.params.id),
        status: "200",
    });
});

// Create a new paste
pasteRouter.post("/", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Create new Paste",
        id: JSON.stringify(req.body),
        status: "200",
    });
});

export default pasteRouter;

/*
- Create Paste (POST /)
- Delete Paste (DELETE /:id)
- Update Paste (UPDATE /:id)
+ View Paste   (GET /:id) 
*/
