sap.ui.jsview("com.jabil.lnclr.mob.view.App", {

	getControllerName: function () {
		return "com.jabil.lnclr.mob.view.App";
	},
	
	createContent: function (oController) {
		
             // alert("in app view");
        // to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
        //this.app = new sap.m.SplitApp();
        this.app = new sap.m.App();

              
        // load the Home page
        var home = sap.ui.jsview("Home", "com.jabil.lnclr.mob.view.Home");
        home.getController().nav = this.getController();
        this.app.addPage(home, true);
         
        return this.app;
	}
});