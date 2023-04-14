sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/riskscapv1/test/integration/FirstJourney',
		'ns/riskscapv1/test/integration/pages/RisksList',
		'ns/riskscapv1/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/riskscapv1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);