function createSaveWasteItem(dataItem) {

    let wasteCarrier = getWasteCarriers();
    let wasteDestination = getWasteDestinations();
    
    let body = {
        "wasteID": "",
        "dateEntered": "16/1/2017",
        "wasteCarrier": {
            "carrierID": wasteCarrier.id,
            "carrierName": wasteCarrier.name
        },
        "wasteDestination": {
            "destinationID": wasteDestination.id,
            "destinationName": wasteDestination.name
        },
        "projectTransport": {
            "totalDistanceKms": 402.34,
            "totalDistanceMiles": 250,
            "modeOfTransport": {
                "modeName": "Rail",
                "modeID": 2
            },
            "vehicleType": {
                "vehicleTypeName": "Rail - International rail",
                "vehicleTypeID": 28
            },
            "fuelType": {
                "fuelTypeName": "",
                "fuelTypeID": 0
            },
            "fuelAmountInLitre": 0
        },
        "subcontractor": {
            "subcontractorID": 0,
            "subcontractorName": ""
        },
        "wasteTransferNote": "z",
        "containerReference": "",
        "skipSize": {
                 "description":" 120 litre wheelie bin/drum", 
                                "skipSizeID":49,                                                      
                                 "volume":0.12
                 },
        "voidPercentage": 40,
        "numberOfContainers": 1,
        "overallTonnage": dataItem[4],
        "sicCode": 42.11,
        "projectPhase": {
            "projectPhaseID": 3,
            "projectPhaseName": "Construction"
        },
        "wasteManagementRoute": {
            "wasteManagementRouteID": 3,
            "wasteManagementRouteName": "Recovery"
        },
        "wasteManagementLocation": {
            "wasteManagementLocationID": 2,
            "wasteManagementLocationName": "Offsite"
        },
        "containerSegregated": false,
        "createdByCompanyName": "",
        "hazardousDescription": "notes",
        "errorComment": "comments",
        "wasteTransferNoteEvidence": "",
        "wasteProducts": [
            {
                "wasteProductID": 1,
                "description": `Brick (17 01 02)`,
                "ewcCode": "17 01 02",
                "percentage": 100
            }
        ]
    }

    return body
}

module.exports = { createSaveWasteItem };

