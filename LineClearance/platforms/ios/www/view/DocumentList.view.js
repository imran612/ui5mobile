sap.ui.jsview("com.jabil.lnclr.mob.view.DocumentList", {

	getControllerName: function () {
		return "com.jabil.lnclr.mob.view.DocumentList";
	},
	
	createContent: function (oController) {
		
             // alert("in doc view");
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack,
                      //  headerContent: [new sap.m.Button({icon: "sap-icon://log", press: oController.handleSettings,visible:true})]
                                        });
              page.setCustomHeader(new sap.m.Bar("pageHdr1",
                                                 {contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image("jblLogo1",{src:"img/jabil-logo.jpg",height:"30px"})],contentRight:[new sap.m.Button({text:"Selection Screen",press:oController.handleNavBack}).addStyleClass("selBtnHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //add welcome user text
              //  page.addContent(new sap.m.Text({text:"Welcome Imran",textAlign:sap.ui.core.TextAlign.Right}));
              page.addContent(new sap.m.Bar("welHdr1",{contentRight:new sap.m.Text({text:"Welcome Imran"})}));
             // var docTablePanel = new sap.m.Panel("docTablePanel",{headerText:"Line Clearance Document List",width:"95%"});
              page.addContent(sap.ui.xmlfragment("com.jabil.lnclr.mob.view.DocumentTable",oController));
              
              //page.addContent(docTablePanel);
              return page;
              
              }
});