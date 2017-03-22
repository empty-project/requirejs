//Load common code that includes config, then load the app logic for this page.

requirejs(['../../require.config'], function () {
    requirejs(['jquery','common/test','templates/templates','data/json-datasource'],function($,test,templates,getData){

        // test.abc('---');
        $('#customer-rows').html(templates.tablerow(getData.list()));


    });
});

