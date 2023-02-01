function createSaveWasteItem(dataItem) {
    
    let body = {
        "address1": "10",
        "address2": "Bucknalls Lane",
        "county": "Herts",
        "destinationName": "Sample destination 1",
        "licences": [
            {
                "evidenceFilename": "evidence1.txt",
                "licenceExpiryDate": "31/12/2019",
                "licenceIssueDate": "1/1/2017",
                "licenceNumber": "DDF-4533-HD"
            },
            {
                "evidenceFilename": "evidence2.txt",
                "licenceExpiryDate": "31/12/2019",
                "licenceIssueDate": "1/1/2016",
                "licenceNumber": "WER-234-DST"
            }
        ],
        "rate": [
            {
                "startDate": "01/01/2018",
                "endDate": "31/12/2018",
                "recyclingRate": 70,
                "energyRecoveryRate": 20,
                "siteOfEnergyRecovery": "Somewhere",
                "rateReportFile": "rate1.pdf",
                "destinationProductRate": [
                    {
                        "productID": 10,
                        "recyclingRate": 70,
                        "energyRecoveryRate": 20
                    },
                    {
                        "productID": 12,
                        "recyclingRate": 50,
                        "energyRecoveryRate": 22
                    }
                ]
            }
        ],
        "parentCarrierID": 169540,
        "postcode": "WD259XX",
        "town": "Watford"
    }

    return body
}

module.exports = { createSaveWasteItem };

