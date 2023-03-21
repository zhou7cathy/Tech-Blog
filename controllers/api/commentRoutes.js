const router = require("express").Router();
const { Comment, User, Post } = require("../../models/");
const withAuth = require("../../utils/auth");

// //GET comments
// router.get("/", async (req, res) => {
//     try{
//     const commentData = await Comment.findAll({
//       ...req.body,
//       user_id: req.session.user_id,  
//       include: [
//         {
//           model: User,
//         },
//         {
//           model: Post,
//         },
//       ],
//     });

//     const comments = commentData.get({ plain: true });

//     // Pass serialized data and session flag into template
//     res.render('post', { 
//       layout: "main",
//       ...comments, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//CREATE comments
router.post("/", withAuth, async (req, res) => {
  try{
    const newComment = await Comment.create({
      comment: req.body.comment,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete comment
router.delete('/:id', withAuth, async(req, res) => {
  // delete one product by its `id` value
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a comment by its `id` value
router.put('/:id', withAuth, async(req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
