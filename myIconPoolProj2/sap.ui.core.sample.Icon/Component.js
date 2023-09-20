sap.ui.define(['sap/ui/core/UIComponent', "sap/ui/core/IconPool"],
	function (UIComponent) {
		"use strict";

		var Component = UIComponent.extend("sap.ui.core.sample.Icon.Component", {

			metadata: {
				manifest: "json"
			},
			init: function () {
				UIComponent.prototype.init.apply(this)
				sap.ui.core.IconPool.registerFont({
					fontFamily: "material_symbols",
					fontURI: "./Icons/"
				})
			}
		});

		return Component;

	});
