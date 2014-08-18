// Goal: make a scatterplot of disaster data, 
// with color by region

//Width and height settings
var settings = {
	width: 500,
	height: 500,
	radius: 3,
	xPadding: 125,
	yPadding: 50,
	xVar: 'deaths',
	yVar: 'total_affected'
}

//Make a function that lets you pick the maximum axis values

var setCutoffs = function(xCutoff, yCutoff){
	var data_subset = data.filter(function(d){return (d[settings.xVar]<xCutoff) & (d[settings.yVar]<yCutoff)})
	return data_subset
}

// one function to set all your scales 
var setScales = function(){
	//Find max and min of each element
	var xMax = d3.max(data, function(d){return d[settings.xVar]})
	var xMin = d3.min(data, function(d){return d[settings.xVar]})
	var yMax = d3.max(data, function(d){return d[settings.yVar]})
	var yMin = d3.min(data, function(d){return d[settings.yVar]})

	//create scales
	var xScale = d3.scale.linear().domain([xMin-5,xMax+5]).range([settings.radius, settings.width-settings.radius])
	var yScale = d3.scale.linear().domain([yMin-5,yMax+5]).range([settings.height-settings.radius, settings.radius])

	//axes
	var xAxisFunction = d3.svg.axis()
		.scale(xScale)
		.orient('bottom')
		.ticks(7)

	var yAxisFunction = d3.svg.axis()
		.scale(yScale)
		.orient('left')
		.ticks(10)

	var colorScale = d3.scale.category10()

	return [xScale, yScale, xAxisFunction, yAxisFunction, colorScale]
}

var build = function(xCutoff, yCutoff){

	var current_data = setCutoffs(xCutoff, yCutoff)

	console.log(current_data.length)

	//SetScales()

	var xMax = d3.max(current_data, function(d){return d[settings.xVar]})
	var xMin = d3.min(current_data, function(d){return d[settings.xVar]})
	var yMax = d3.max(current_data, function(d){return d[settings.yVar]})
	var yMin = d3.min(current_data, function(d){return d[settings.yVar]})

	//create scales
	var xScale = d3.scale.linear().domain([xMin-5,xMax+5]).range([settings.radius, settings.width-settings.radius])
	var yScale = d3.scale.linear().domain([yMin-5,yMax+5]).range([settings.height-settings.radius, settings.radius])

	//axes
	var xAxisFunction = d3.svg.axis()
		.scale(xScale)
		.orient('bottom')
		.ticks(7)

	var yAxisFunction = d3.svg.axis()
		.scale(yScale)
		.orient('left')
		.ticks(10)

	colorScale = d3.scale.category10()

	//create G element to hold circles/axes
	myG=d3.select('#my-svg')
		.append('g')
		.attr('id', 'plotG')
		.attr('transform', 'translate(' + settings.xPadding + ',' + settings.yPadding + ')')

	d3.select('#plotG').selectAll('.axis').remove()
	xAxis = d3.select('#plotG')
		.append('g')
		.attr('class', 'axis')
		.attr('id', 'xAxis')
		.attr('transform', 'translate(0,' + (settings.height) + ')')
		.call(xAxisFunction)

	yAxis = d3.select('#plotG')
		.append('g')
		.attr('id', 'yAxis')
		.attr('class', 'axis')
		.attr('transform', 'translate(0,0)')
		.call(yAxisFunction)

	//Function for circles
	// inside the 'build' function because it needs to use xScale... until I find a better way...
	var circleFunction = function(circle){
		circle
		.attr('cx', function(d){return xScale(d[settings.xVar])})
		.attr('cy', function(d){return yScale(d[settings.yVar])})
		.attr('r', settings.radius)
		.style('fill', function(d){return colorScale(d.class)})
		}

	d3.select('#plotG').selectAll('circle').remove()
	var circles = myG.selectAll('circle')
		.data(current_data)
	
	circles.enter()
		.append('circle')
		.call(circleFunction)

	//myG.selectAll('circle').transition().duration(500).call(circleFunction)

	drawLabels()
	drawLegend()

	}

//labels
var drawLabels = function(){
	var title = d3.select('#plotG')
				.append('text')
				.attr('class', 'label')
				.attr('id', 'plotTitle')
				.attr('transform', 'translate(' + settings.width/3 + ',' + 10 + ')')
				.text('Global disasters: ' + settings.xVar + ' vs ' + settings.yVar)

	var xAxisLabel = d3.select('#plotG')
					.append('text')
					.attr('class', 'label')
					.attr('transform', 'translate(' + settings.width/2 + ',' + 550 + ')')
					.text(settings.xVar)

	var yAxisLabel = d3.select('#plotG')
				.append('text')
				.attr('class', 'label')
				.attr('transform', 'translate(' + -75 + ',' + settings.height/2 + ') rotate(270)')
				.text(settings.yVar)
}

//legend (taken straight from your example, Mike-- but I typed it all out again myself, if that 
// makes me any less of a plagiarist ;)
var drawLegend = function(){

	//get unique classes
	//it would have taken me probably months to figure this method out.
	// does JS not have a unique() method of any sort?
	var classes = []
	data.map(function(d){
		if(classes.indexOf(d.class)== -1) classes.push(d.class)
	})
	console.log(classes)

	//make a legend G
	var legendG = d3.select('#my-svg')
				.append('g')
				.attr('class', 'label')
				.attr('id', 'legend')
				.attr('transform', 'translate(' + 850 + ',' + 150 + ')' )
				
	legendG.selectAll('text')
			.data(classes)
			.enter()
			.append('text')
			.text(function(d){return d})
			.attr('transform', function(d,i) {return 'translate(0, ' + i*20 + ')'})
			.style('fill', function(d) {return colorScale(d)})
}

