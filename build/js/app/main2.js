define(["require","jquery","./lib","./controller/c2","./model/m2"],function(e){var r=e("jquery"),o=e("./lib"),l=e("./controller/c2"),n=e("./model/m2");l.setModel(n),r(function(){l.render(o.getBody())})});