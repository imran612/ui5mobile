
sap.ui.controller("com.jabil.lnclr.mob.view.DocumentProc", {
                  
            onInit: function () {
                  //alert("inside init");
                  //var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  //this.getView().setModel(oModel);
                  // sap.ui.getCore().setModel(oModel);
                  var oModel = new sap.ui.model.json.JSONModel("model/prodTable.json");
                  sap.ui.getCore().byId("DocumentProc").setModel(oModel);
                  //var oGroupingModel = new sap.ui.model.json.JSONModel({ hasGrouping: false});
                  //sap.ui.getCore().byId("DocumentList").setModel(oModel);
                  // sap.ui.getCore().byId("DocumentList").setModel(oGroupingModel, 'Grouping');
                  
                  },
                  
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("DocumentList");
                  
                  },
                  handleSettings: function () {
                  
                  }
});

