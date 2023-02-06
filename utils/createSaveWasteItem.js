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
            "totalDistanceKms": dataItem[10],
            "totalDistanceMiles": Math.round(dataItem[10]*0.66),
            "modeOfTransport": {
                "modeName": dataItem[12],
                "modeID": dataItem[13]
            },
            "vehicleType": {
                "vehicleTypeName": dataItem[15],
                "vehicleTypeID": dataItem[16]
            },
            "fuelType": {
                "fuelTypeName": dataItem[17],
                "fuelTypeID": dataItem[18]
            },
            "fuelAmountInLitre": dataItem[19]
        },
        "wasteTransferNote": "z",
        "containerReference": "",
        "skipSize": {
                 "description": dataItem[20], 
                                "skipSizeID":dataItem[21],                                                      
                                 "volume":dataItem[22]
                 },
        "voidPercentage": dataItem[23],
        "numberOfContainers": dataItem[24],
        "overallTonnage": dataItem[25],
        "sicCode": dataItem[26],
        "projectPhase": {
            "projectPhaseID": 3,
            "projectPhaseName": "Construction"
        },
        "wasteManagementRoute": {
            "wasteManagementRouteID": dataItem[28],
            "wasteManagementRouteName": dataItem[27]
        },
        "wasteManagementLocation": {
            "wasteManagementLocationID": dataItem[30],
            "wasteManagementLocationName": dataItem[29]
        },
        "containerSegregated": dataItem[31],
        "createdByCompanyName": "Multevo",
        "wasteTransferNoteEvidence": "",
        "wasteProducts": [
            {
                "wasteProductID": dataItem[4],
                "description": dataItem[5],
                "ewcCode": dataItem[3],
                "percentage": 100
            }
        ]
    }

    return body
}

module.exports = { createSaveWasteItem };

