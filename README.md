# marker.js

A mediocre level library for drawing all kinds of google maps. This is meant to show the implementation of ES6 classes. 

##	Table of Reference

	1. Introduction
	2. Updates
	3. Dependencies
	4. Usage


### 1. Introduction

In  the beginning, this.was a fulfilment of a requirement at work. I also was was really hyped about the new ES6 release of the class and static keyword. As at the time of writing this library, I am still a student of IUPUI and a Java and PHP developer so please review my code with extreme criticism.

this.dream is to create a complete mapping package that solves a wide array of mapping problems. Like Jquery, *Do more with less*, I intend to be able to do a lot of things with the google map with just a method call.

this.structure is a simple OOP modelled after Java except that this is javascript. If you need to help out, class documentation is at [Developer.Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). There is a lot in there. 

The Difference

Normal functional object would do this

function example(foo,bar) {

	this.foo = foo;
	this.bar = bar;

var doSomeThing() {

	//do something

	}
}

Now I have this

class example {

	constructor(foo,bar) {

	this.foo = foo;
	this.bar = bar;

	}

doSomething() {

	// do something

	}
}


No Big difference I know.


### 2. Updates



### 3. Dependencies
	
This library is solely dependent on the google map API. The API can be added at the before the closing body tag. Check Usage for implementatation

### 4. Usage

##### Set up

<!DOCTYPE html>
	<html>
		<head></head>
		<body>

			<script>Your script here</script>
			<script async defer src="https://maps.googleapis.com/maps/api/js?key=">Google Map API CALL here</script>


		</body>
	</html>


Usage depends on the functionality you are trying to access

Member Method

	var map = new Mapper(elementID,latitude,longitude); //	element ID is the id of the element you want the map to be placed. Longitude and latitude or geo coordinates of those addresses<.

	map.memberMethods(); // memberMethods is the method name you want to call. 

	Available Methods :
	*styElement()
	*createMarkerMap()

	Example Usage

	map.createMarjerMap();

Static Methods

	Mapper.staticMethod() // static method is the method you want to access

	Available Static Methods
	*showMultipleMapMarkers(elementID,addressArray)  // AddressArray is the array of address you are passsing.

	Example Usage:

	Note: Will expect four elements inside array. This will include the title,address,latitude and longitude
	var addressArray = [
		["Title","Address String","Latitude","Longitude"];

	]

	Mapper.showMultipleMapMarkers('exampleid',addressArray);

	Possible Exceptions

	TypeError
	ReferenceError







	











