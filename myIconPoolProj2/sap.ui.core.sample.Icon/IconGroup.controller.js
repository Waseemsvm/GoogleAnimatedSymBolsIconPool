sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
	function (Controller, MessageToast) {
		"use strict";

		var IconGroupController = Controller.extend("sap.ui.core.sample.Icon.IconGroup", {
			handleStethoscopePress: function (evt) {
				MessageToast.show("Over budget!");
			},
			/**
			 * @override
			 */
			onAfterRendering: function () {
				// Controller.prototype.onAfterRendering.apply(this, arguments);
				this.byId('idPulse1Icon').addStyleClass("myPulse");
				this.byId('idPulse2Icon').addStyleClass("myPulse");

			}
		});

		return IconGroupController;

	});
