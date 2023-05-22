sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("facturasApp.facturas.controller.View", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("../model/SelectionScreenMenu.json")
                oView.setModel(oJSONModel, "selectionScreen")
            },

            onFilter: function(oEvent){
                console.log(oEvent);
                // alert("filtrando...")
            },

            onClearFilter: function(){
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName", "")
                oModelSelScreen.setProperty("/CountryKey", "")
                console.log(oModelSelScreen)
            }
            
        });
    });
