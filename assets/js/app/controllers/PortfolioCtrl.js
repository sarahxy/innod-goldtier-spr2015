app.controller('PortfolioCtrl', ['$scope', '$state' function($scope) {
    // Add functionality for home page here
    $scope.person = {};

    $scope.roya = {
    	name: "Roya Chagnon",
    	profile: "/img/roya/roya.jpg";
    	img: [
    		"/img/roya/CIB1.png",
    		"/img/roya/CIB2.png",
    		"/img/roya/CIB3.png",
    		"/img/roya/shra.png",
    		"/img/roya/phoenixscholars1.png"
    	]
    };

    $scope.gabriella = {
    	name: "Gabriella Gini",
    	profile: "/img/gabriella/gabriella.jpg";
    	img: [
    		"/img/gabriella/CIB.png",
    		"/img/gabriella/SHRA-simpletie.png",
    		"/img/gabriella/SHRA-bear.png",
    		"/img/gabriella/PS-gabby1.png"
    	]
    };

    $scope.anna = {
    	name: "Anna Xie",
    	profile: "/img/anna/anna.jpg";
    	img: [
    		"/img/anna/aum2.png",
    		"/img/anna/anna-CIB-draft2.png",
    		"/img/anna/anna-shra-drafts.png",
    		"/img/anna/anna-tps.png",
    	]
    };

    $scope.becky = {
    	name: "Becky Jiras",
    	profile: "/img/becky/becky.jpg";
    	img: [
    		"/img/becky/aumdraft.png",
    		"/img/becky/CIB-becky.png",
    		"/img/becky/SHRAbecky.png",
    		"/img/becky/phoenixscholars2.png"
    	]
    };

    $scope.seyeon = {
    	name: "Se Yeon Kim",
    	profile: "/img/seyeon/seyeon.jpg";
    	img: [
    		"/img/seyeon/cib-2.png",
    		"/img/seyeon/shra1.png",
    		"/img/seyeon/phoenixscholars4.png"
    	]
    };

    $scope.queena = {
    	name: "Queena Xu",
    	profile: "/img/queena/queena.jpg";
    	img: [
    		"/img/queena/CIB.png",
    		"/img/queena/phoenixscholars3.png"
    	]
    };

    $scope.amanda = {
    	name: "Amanda Xia",
    	profile: "/img/amanda/amand.jpg";
    	img: [
    		"/img/amanda/CIB_amanda.png",
    		"/img/amanda/SHRA-(1).png"
    	]
    };

    $scope.waverly = {
    	name: "Waverly Chao",
    	profile: "/img/waverly/waverly.jpg";
    	img: [
    		"/img/waverly/aum3.png",
    		"/img/waverly/aum4.png",
    		"/img/waverly/CIB-waverly.png",
    		"/img/waverly/SHRA.png",
    		"/img/waverly/phoenixscholars-waverly.png"
    	]
    };

    switch($state.current.name) {
    	case 'roya':
    		$scope.person = $scope.roya;
    		break;
    	case 'gabriella':
    		$scope.person = $scope.gabriella;
    		break;
    	case 'anna':
    		$scope.person = $scope.anna;
    		break;
    	case 'becky':
    		$scope.person = $scope.becky;
    		break;
    	case 'seyeon':
    		$scope.person = $scope.seyeon;
    		break;
    	case 'queena':
    		$scope.person = $scope.queena;
    		break;
    	case 'amanda':
    		$scope.person = $scope.amanda;
    		break;
    	case 'waverly':
    		$scope.person = $scope.waverly;
    		break;
    	default:
    		break;
    }
}]);


