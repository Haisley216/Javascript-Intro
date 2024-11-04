function trafficlight(timeleft){
	if (0<=timeleft && timeleft<10) {
		console.log("It's dangerous to cross now!!!!");
	}
	else if (10<=timeleft && timeleft<20) {
		console.log("Hurry up!");
	}
	else if(20<=timeleft && timeleft<30){
		console.log("Cross the street carefully :)");
	}
	else{
		console.log("This traffic light seems to be broken :(");
	}
}

trafficlight(-999);
trafficlight(3);
trafficlight(18);
trafficlight(25);
trafficlight(1000);
