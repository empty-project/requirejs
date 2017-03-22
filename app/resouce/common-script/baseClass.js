/**
 * Created by Loki.Luo on 2017/3/22.
 */
define(function () {
    function modelBase(title) {
        this.title = title;
    }

    modelBase.prototype = {
        getTitle: function () {
            return this.title;
        }
    };

    return modelBase;
});

// var model = new modelBase('title');
// model.getTitle();