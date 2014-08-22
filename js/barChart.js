
// barChart.js:  Construct a bar chart for each leaf node of the dendrogram
// that shows total number of deaths each year attributable to that disaster.
// input is an array of the 5 levels of each leaf node.


//example list 
// var typelist = ['bacterial', 'epidemic', 'biological', 'natural', 'disaster']

var settings = {
		yVar: 'total_affected',
		yLabel : 'Number Affected',
		xPadding: 125,
		yPadding: 20,
		height: document.getElementById('barChart').clientWidth*(5/8),
		width : document.getElementById('barChart').clientWidth*(.75)}

var barSVG = d3.select('#barChart')
				.append('svg')
				.attr('id', 'bar-svg')
				.attr('width', document.getElementById('barChart').clientWidth)
				.attr('height', document.getElementById('barChart').clientWidth*.75)

var centralG = d3.select('#bar-svg')
				.append('g')
				.attr('id', 'central-g')
				.attr('transform', 'translate(' + settings.xPadding + ',' + settings.yPadding + ')')

var y = settings.yVar

buildBar = function(typelist, subTypeName){

	var subtype = typelist[0], 
		type = typelist[1],
		subclass = typelist[2],
		disaster_class = typelist[3]

	//reduce your data to your universe of interest
	var filterTypes = function(d){
		return d.subtype==subtype & d.type==type & d.subclass==subclass & d.disaster_class==disaster_class
	}

	var newdata = data.filter(filterTypes)

	var xMax = d3.max(newdata, function(d) {return d.year})
	var xMin = d3.min(newdata, function(d) {return d.year})
	var yMax = d3.max(newdata, function(d) {return d[y]})
	var yMin = d3.min(newdata, function(d) {return d[y]})

	var xScale = d3.scale.linear().domain([xMin, xMax]).range([0, settings.width-30])
	var yScale = d3.scale.linear().domain([yMin, yMax]).range([0, settings.height])
	var yAxisScale = d3.scale.linear().domain([yMin, yMax]).range([settings.height, 0])

	var xAxisFunction = d3.svg.axis()
			.scale(xScale)
			.orient('bottom')
			.ticks(11)
			.tickFormat(d3.format('d'))

	var yAxisFunction = d3.svg.axis()
			.scale(yAxisScale)
			.orient('left')
			.ticks(7)

	d3.select('#bar-svg').selectAll('.axis').remove()
	var xAxis = d3.select('#bar-svg')
					.append('g')
					.attr('class', 'axis')
					.attr('id', 'xAxis')
					.attr('transform', 'translate(' + settings.xPadding + ','+ (settings.height+settings.yPadding) + ')')
					.call(xAxisFunction)

	var yAxis = d3.select('#bar-svg')
					.append('g')
					.attr('class', 'axis')
					.attr('id', 'yAxis')
					.attr('transform', 'translate(' + settings.xPadding + ',' + settings.yPadding + ')')
					.call(yAxisFunction)

	var scaleFactorX = (settings.width-30) / newdata.length

	//attributes of rectangles
	var rectFunction = function(rect){
		rect
			.attr('width', scaleFactorX)
			.attr('height', function(d){return yScale(d[y])})
			.attr('x', function(d,i){return i*scaleFactorX})
			.attr('y', function(d){return settings.height - yScale(d[y])})
			.attr('stroke', 'white')
			.attr('stroke-width', '2px')
	}

	var bars = centralG.selectAll('rect')
				 .data(newdata)

	bars.exit().remove()

	bars.enter()
		.append('rect')
		.call(rectFunction)
	bars.transition()
		.duration(500)
		.call(rectFunction)

	d3.select('#bar-svg').selectAll('.label').remove()

	var title = d3.select('#bar-svg')
				.append('text')
				.attr('class', 'label')
				.attr('id', 'plotTitle')
				.attr('transform', 'translate(' + (settings.width/4 + settings.xPadding) + ',' + 15 + ')')
				.text(settings.yLabel + ' by ' + subTypeName + ' Disasters Over Time')

	var xAxisLabel = d3.select('#bar-svg')
					.append('text')
					.attr('class', 'label')
					.attr('transform', 'translate(' + (settings.width/2 + settings.xPadding) + ',' + (550 + settings.yPadding) + ')')
					.text('Year')

	var yAxisLabel = d3.select('#bar-svg')
				.append('text')
				.attr('class', 'label')
				.attr('transform', 'translate(' + 25 + ',' + (settings.height/1.75 + settings.yPadding) + ') rotate(270)')
				.text(settings.yLabel)


}

//buildBar(typelist)
