 // * Converted to JSON:
 // * {
 // *   name: "F",
 // *   branchset: [
 // *     {name: "A", length: 0.1},
 // *     {name: "B", length: 0.2},
 // *     {
 // *       name: "E",
 // *       length: 0.5,
 // *       branchset: [
 // *         {name: "C", length: 0.3},
 // *         {name: "D", length: 0.4}
 // *       ]
 // *     }
 // *   ]
 // * }

 var disasters = { name: 'Disaster',
 				sname: 'disaster',
			 	branchset:[
			 		{name: 'Complex',
			 		sname: 'complex',
			 		branchset: [
			 				{name: 'Complex',
			 				sname: 'complex',
			 				branchset: [
			 					{name: 'Complex',
			 					sname: 'complex',
			 					branchset: [
			 						{name:'Famine',
			 						sname: 'famine'},
			 						{name: 'Unspecified',
			 						sname: 'unspecified'}
			 						]
			 					}
			 					]
			 				}
			 			]
			 		},
			 		{name: 'Natural',
			 		sname: 'natural',
			 		branchset: [
			 			{name: 'Biological',
			 			sname: 'biological',
			 			branchset: [
			 				{name: 'Epidemic',
			 				sname: 'epidemic',
			 				branchset: [
			 					{name: 'Bacterial',
			 					sname: 'bacterial'},
			 					{name: 'Parasitic',
			 					sname: 'parasitic'},
			 					{name: 'Viral',
			 					sname: 'viral'}
			 					]
			 				},
			 				{name: 'Insect Infestation',
			 				sname: 'insect',
			 				branchset: [
			 					{name: 'Grasshopper',
			 					sname: 'grasshopper'},
			 					{name: 'Grasshopper/Locust',
			 					sname: 'grasshopperLocust'},
			 					{name: 'Locust',
			 					sname: 'locust'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				}
			 				]
			 			},
			 			{name: 'Climatological',
			 			sname: 'climatological',
			 			branchset: [
			 				{name: 'Drought',
			 				sname: 'drought',
			 				branchset: [
			 					{name: 'Drought',
			 					sname: 'drought'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				},
			 				{name: 'Extreme Temperature',
			 				sname: 'extremeTemperature',
			 				branchset: [
			 					{name: 'Cold Wave',
			 					sname: 'coldWave'},
			 					{name: 'Extreme Winter Conditions',
			 					sname: 'extremeWinterConditions'},
			 					{name: 'Heat Wave',
			 					sname: 'heatWave'}
			 					]
			 				},
			 				{name: 'Wildfire',
			 				sname: 'wildfire',
			 				branchset: [
			 					{name: 'Brush Fire',
			 					sname: 'brushFire'},
			 					{name: 'Forest Fire',
			 					sname: 'forestFire'},
			 					{name: 'Grassland Fire',
			 					sname: 'grasslandFire'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				}
			 				]
			 			},
			 			{name: 'Geophysical',
			 			sname: 'geophysical',
			 			branchset: [
			 				{name: 'Earthquake',
			 				sname: 'earthquake',
			 				branchset: [
			 					{name: 'Earthquake',
			 					sname: 'earthquake'},
			 					{name: 'Tsunami',
			 					sname: 'tsunami'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				},
			 				{name: 'Dry Mass Movement',
			 				sname: 'massMovementDry',
			 				branchset: [
			 					{name: 'Avalanche',
			 					sname: 'avalanche'},
			 					{name: 'Debris Flow',
			 					sname: 'debrisFlow'},
			 					{name: 'Landslide',
			 					sname: 'landslide'},
			 					{name: 'Rockfall',
			 					sname: 'rockfall'}, 
			 					{name: 'Subsidence',
			 					sname: 'subsidence'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				},
			 				{name: 'Volcano',
			 				sname: 'volcano',
			 				branchset: [
			 					{name: 'Volcanic Eruption',
			 					sname: 'volcanicEruption'}
			 					]
			 				}
			 				]
			 			},
			 			{name: 'Hydrological',
			 			sname: 'hydrological',
			 			branchset: [
			 				{name: 'Flood',
			 				sname: 'flood',
			 				branchset: [
			 					{name: 'Flash Flood',
			 					sname: 'flashFlood'},
			 					{name: 'General Flood',
			 					sname: 'generalFlood'},
			 					{name: 'General Flood/Mudslide',
			 					sname: 'generalFloodMudslide'},
			 					{name: 'Coastal Flood',
			 					sname: 'coastalFlood'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				},
			 				{name: 'Wet Mass Movement',
			 				sname: 'massMovementWet',
			 				branchset: [
			 					{name: 'Avalanche',
			 					sname: 'avalanche'},
			 					{name: 'Debris Flow',
			 					sname: 'debrisFlow'},
			 					{name: 'Landslide',
			 					sname: 'landslide'},
			 					{name: 'Rockfall',
			 					sname: 'rockfall'}, 
			 					{name: 'Subsidence',
			 					sname: 'subsidence'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				}
			 				]
			 			},
			 			{name: 'Meteorological',
			 			sname: 'meteorological',
			 			branchset: [
			 				{name: 'Storm',
			 				sname: 'storm',
			 				branchset: [
			 					{name: 'Extratropical Cyclone',
			 					sname: 'extratropicalCyclone'},
			 					{name: 'Extratropical Cyclone (Winter)',
			 					sname: 'extratropicalCycloneWinter'},
			 					{name: 'Local Storm',
			 					sname: 'localStorm'},
			 					{name: 'Tropical Cyclone',
			 					sname: 'tropicalCyclone'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				}
			 				]
			 			}
			 			]
			 		},
			 		{name: 'Technological',
			 		sname: 'technological',
			 		branchset:[
			 			{name: 'Technological',
			 			sname: 'technological',
			 			branchset: [
			 				{name: 'Industrial',
			 				sname: 'industrial',
			 				branchset: [
			 					{name: 'Collapse',
			 					sname: 'collapse'},
			 					{name: 'Explosion',
			 					sname: 'explosion'},
			 					{name: 'Fire',
			 					sname: 'fire'},
			 					{name: 'Gas Leak',
			 					sname: 'gasLeak'},
			 					{name: 'Oil Spill',
			 					sname: 'oilSpill'},
			 					{name: 'Other',
			 					sname: 'other'},
			 					{name: 'Poisoning',
			 					sname: 'poisoning'},
			 					{name: 'Radiation',
			 					sname: 'radiation'}
			 					]
			 				},
			 				{name: 'Transport',
			 				sname: 'transport',
			 				branchset: [
			 					{name: 'Air',
			 					sname: 'air'},
			 					{name: 'Rail',
			 					sname: 'rail'},
			 					{name: 'Road',
			 					sname: 'road'},
			 					{name: 'Water',
			 					sname: 'water'},
			 					{name: 'Unspecified',
			 					sname: 'unspecified'}
			 					]
			 				},
			 				{name: 'Miscellaneous',
			 				sname: 'miscellaneous',
			 				branchset: [
			 					{name: 'Collapse',
			 					sname: 'collapse'},
			 					{name: 'Explosion',
			 					sname: 'explosion'}, 
			 					{name: 'Fire',
			 					sname: 'fire'}, 
			 					{name: 'Other',
			 					sname: 'other'}
			 					]
			 				}
			 				]
			 			}
			 			]
			 		}
			 	]
			 }