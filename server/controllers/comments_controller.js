const comments_middleware = require('../middleware/comments_middleware');

// sends username and content in the given listing's (from the params.id in url, so like localhost:1234/comments/11) comments
exports.getListingComments = async (req, res) => {
  try {
    const result = await comments_middleware.getListingComments(req);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

exports.createComment = async (req, res) => {
  try {
    const result = await comments_middleware.createComment(req);
    res
      .status(200)
      .json({ message: 'successfully created comment', result });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
