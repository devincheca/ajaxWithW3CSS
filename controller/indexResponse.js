indexRes = {
  response: function (req, res, next) {
    res.render('index', { title: 'expressWithW3CSS' });
  }
};
module.exports = indexRes;