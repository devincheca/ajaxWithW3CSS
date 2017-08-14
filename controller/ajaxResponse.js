ajaxRes = {
    response: function(req, res, next) {
        res.send('testingAjaxResponse');
    }
};
module.exports = ajaxRes;