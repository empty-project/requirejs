requirejs(["../../require.config"],function(){requirejs(["jquery","common/test","templates/templates","data/json-datasource"],function(e,t,r,o){e("#customer-rows").html(r.tablerow(o.list()))})});