function createSaveWasteItem(dataItem) {

    console.log(dataItem)

    let date 
        =dataItem[1][8]
        +dataItem[1][9]
        +"/"
        +dataItem[1][5]
        +dataItem[1][6]
        +"/"
        +dataItem[1][0] 
        + dataItem[1][1] 
        + dataItem[1][2] 
        + dataItem[1][3]
        
    
    let body = {
        "wasteID": "",
        "dateEntered": date,
        "wasteCarrier": {
            "carrierID": 169540,
            "carrierName": "Sample waste carrier 1"
        },
        "wasteDestination": {
            "destinationID": 169541,
            "destinationName": "Sample destination 1"
        },
        "projectTransport": {
            "totalDistanceKms": Number(dataItem[21]),
            "totalDistanceMiles": Number(dataItem[22]),
            "modeOfTransport": {
                "modeName": "Road",
                "modeID": 1
            },
            "vehicleType": {
                "vehicleTypeName": dataItem[10],
                "vehicleTypeID": Number(dataItem[24])
            },
            "fuelType": {
                "fuelTypeName": dataItem[11],
                "fuelTypeID": dataItem != "" ? Number(dataItem[26]) : ""
            },
            "fuelAmountInLitre": Number(dataItem[27])
        },
        "wasteTransferNote": "z",
        "containerReference": "",
        "skipSize": {
                 "description": dataItem[12], 
                                "skipSizeID": Number(dataItem[28]),                                                      
                                 "volume": Number(dataItem[29])
                 },
        "voidPercentage": 40,
        "numberOfContainers": 1,
        "overallTonnage": Number(dataItem[4]),
        "sicCode": 42.11,
        "projectPhase": {
            "projectPhaseID": 3,
            "projectPhaseName": "Construction"
        },
        "wasteManagementRoute": {
            "wasteManagementRouteID": 1,
            "wasteManagementRouteName": "Reuse"
        },
        "wasteManagementLocation": {
            "wasteManagementLocationID": 2,
            "wasteManagementLocationName": "Off-site"
        },
        "containerSegregated": "TRUE",
        "createdByCompanyName": "Multevo",
        "wasteTransferNoteEvidence": "",
        "wasteProducts": [
            {
                "wasteProductID": Number(dataItem[17]),
                "description": dataItem[18],
                "ewcCode": dataItem[16],
                "percentage": 100
            }
        ]
    }

    return body
}

module.exports = { createSaveWasteItem };

