//Load common code that includes config, then load the app logic for this page.

requirejs(['../../require.config'], function () {
    requirejs(['jquery','common/test'],function($,test){
        // test.abc('---');
    });
});

