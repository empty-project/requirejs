//Load common code that includes config, then load the app logic for this page.

requirejs(['./common'], function (common) {
    requirejs(['jquery','../app/lib','../app/controller/c1','../app/model/m1'],function($,lib,ctrl,model){
        ctrl.setModel(model);
        $(function () {
            ctrl.render(lib.getBody());
        });
    });
});

