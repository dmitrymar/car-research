(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    return "      <div class=\"item\"><img src=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" title="
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" title="
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <!-- Indicators -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "    <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <!-- Indicators -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">$<span>"
    + alias3(((helper = (helper = helpers.lowestMSRP || (depth0 != null ? depth0.lowestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lowestMSRP","hash":{},"data":data}) : helper)))
    + "</span> – $<span>"
    + alias3(((helper = (helper = helpers.highestMSRP || (depth0 != null ? depth0.highestMSRP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"highestMSRP","hash":{},"data":data}) : helper)))
    + "</span></h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "    <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <!-- Indicators -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<strong>Base MSPR</strong>\n<h3 class=\"overview-h3\">"
    + this.escapeExpression(((helper = (helper = helpers.priceRange || (depth0 != null ? depth0.priceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"priceRange","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "    <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <!-- Indicators -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Estimated MPG</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small></h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<strong>MSPR</strong>\n<h3 class=\"overview-h3\">"
    + this.escapeExpression(((helper = (helper = helpers.priceRange || (depth0 != null ? depth0.priceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"priceRange","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "    <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <!-- Indicators -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Fuel Economy (city/hwy)</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>city</small> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> <small>hwy</small> mpg</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<strong>MSPR</strong>\n<h3 class=\"overview-h3\">"
    + this.escapeExpression(((helper = (helper = helpers.priceRange || (depth0 != null ? depth0.priceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"priceRange","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ol class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-target=\"#overviewCarousel\" data-slide-to=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"></li>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"item "
    + alias2(alias1((depth0 != null ? depth0.active : depth0), depth0))
    + "\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\"></div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "    <a class=\"left carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#overviewCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"overviewCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  \n  <!-- Indicators -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleryPics : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <!-- Left and right controls -->\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.galleryControls : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['specs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <br>\n  <strong>Fuel Economy (city/hwy)</strong>\n  <h3 class=\"overview-h3\"><span>"
    + alias3(((helper = (helper = helpers.cityMPG || (depth0 != null ? depth0.cityMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cityMPG","hash":{},"data":data}) : helper)))
    + "</span> / <span>"
    + alias3(((helper = (helper = helpers.hwyMPG || (depth0 != null ? depth0.hwyMPG : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hwyMPG","hash":{},"data":data}) : helper)))
    + "</span> mpg</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "<br> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<strong>MSPR</strong>\n<h3 class=\"overview-h3\">"
    + this.escapeExpression(((helper = (helper = helpers.priceRange || (depth0 != null ? depth0.priceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"priceRange","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cityMPG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<hr>\n<h3>Highlights</h3>\n\n<dl class=\"dl-horizontal feature-list\">\n  <dt>Body Styles</dt>\n  <dd>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bodyStyles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>                 \n  <dt>Engines</dt>\n  <dd id=\"engines\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.engines : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Drive Train</dt>\n  <dd id=\"driveTrains\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.driveTrains : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>\n  <dt>Transmissions</dt>\n  <dd id=\"transmissions\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transmissions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</dd>             \n</dl>  ";
},"useData":true});
templates['trims'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <tr>\n          <td><img src=\""
    + alias2(alias1((depth0 != null ? depth0.pic : depth0), depth0))
    + "\" data-trimid=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.picStatus : depth0), depth0))
    + "\"></td>\n          <td><span class=\"lead\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\">"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          <td class=\"table-numbers\"><span class=\"lead\">$"
    + alias2((helpers.convert2$ || (depth0 && depth0.convert2$) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.price : depth0)) != null ? stack1.baseMSRP : stack1),{"name":"convert2$","hash":{},"data":data}))
    + "</span> MSRP</td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"lead\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.engine : depth0)) != null ? stack1.horsepower : stack1), depth0))
    + "</span> HP";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"lead\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.city : stack1), depth0))
    + "</span> city\n          <span class=\"lead\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.MPG : depth0)) != null ? stack1.highway : stack1), depth0))
    + "</span> hwy";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayTrims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
