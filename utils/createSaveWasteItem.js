function createSaveWasteItem(dataItem) {

    console.log(dataItem)
    
    let body = {
        "wasteID": "",
        "dateEntered": dataItem[1],
        "wasteCarrier": {
            "carrierID": 169540,
            "carrierName": "Sample waste carrier 1"
        },
        "wasteDestination": {
            "destinationID": 169541,
            "destinationName": "Sample destination 1"
        },
        "projectTransport": {
            "totalDistanceKms": Number(dataItem[10]),
            "totalDistanceMiles": (Math.round((dataItem[10]*0.62137119)*100))/100,
            "modeOfTransport": {
                "modeName": dataItem[12],
                "modeID": Number(dataItem[13])
            },
            "vehicleType": {
                "vehicleTypeName": dataItem[15],
                "vehicleTypeID": Number(dataItem[16])
            },
            "fuelType": {
                "fuelTypeName": dataItem[17],
                "fuelTypeID": dataItem != "" ? Number(dataItem[18]) : ""
            },
            "fuelAmountInLitre": Number(dataItem[19])
        },
        "wasteTransferNote": "z",
        "containerReference": "",
        "skipSize": {
                 "description": dataItem[20], 
                                "skipSizeID": Number(dataItem[21]),                                                      
                                 "volume": Number(dataItem[22])
                 },
        "voidPercentage": Number(dataItem[23].replace("%", "")),
        "numberOfContainers": Number(dataItem[24]),
        "overallTonnage": Number(dataItem[25]),
        "sicCode": Number(dataItem[26]),
        "projectPhase": {
            "projectPhaseID": 3,
            "projectPhaseName": "Construction"
        },
        "wasteManagementRoute": {
            "wasteManagementRouteID": Number(dataItem[28]),
            "wasteManagementRouteName": dataItem[27]
        },
        "wasteManagementLocation": {
            "wasteManagementLocationID": Number(dataItem[30]),
            "wasteManagementLocationName": dataItem[29]
        },
        "containerSegregated": dataItem[31],
        "createdByCompanyName": "Multevo",
        "wasteTransferNoteEvidence": "",
        "wasteProducts": [
            {
                "wasteProductID": Number(dataItem[4]),
                "description": dataItem[5],
                "ewcCode": dataItem[3],
                "percentage": 100
            }
        ]
    }

    return body
}

module.exports = { createSaveWasteItem };

