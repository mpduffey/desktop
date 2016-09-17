import {Injectable} from '@angular/core';

@Injectable({})

export class DesktopService {
	desk = {
		tabs:			[
			{
				tabTitle:			"MD-Overall",
				active:				true,
				rows:					[
					{
						widgets:		[
							{
								type:					"controller",
								widgetTitle:	"Controller 1",
								initialClass:	"Objective",
								initialTags:	[4611,11051,14608]
							},
							{
								type:					"controller",
								widgetTitle:	"Controller 2",
								initialClass:	"Objective",
								initialTags:	[4611,11051,9120]
							},
							{
								type:					"controller",
								widgetTitle:	"Controller 3",
								initialClass:	"Objective",
								initialTags:	[4611,11051,2221]
							}
						]
					},
					{
						widgets:		[
							{
								type:					"controller",
								widgetTitle:	"Controller 4",
								initialClass:	"Objective",
								initialTags:	[4611,46]
							},
							{
								type:					"controller",
								widgetTitle:	"Controller 5",
								initialClass:	"Objective",
								initialTags:	[4611,13]
							},
							{
								type:					"controller",
								widgetTitle:	"Controller 6",
								initialClass:	"Objective",
								initialTags:	[4611,11051]
							},
						]
					}
				]
			}
		],
		columns:	[],
		rows:			[],
		widgets:	[]
	};
	tabs = [
		{
			tabTitle:			"New Tab",
			active:				false,
			widgets:			[
				{
					type:					"controller",
					widgetTitle:	"Controller 1",
					initialClass:	"Objective",
					initialTags:	[]
				}
			],
			rows:					[
				{
					width:			'75%',
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[]
						}
					]
				},
				{
					width:			'75%',
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Objective",
							initialTags:	[]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Overall",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Objective",
							initialTags:	[13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"MD-Overall",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Objective",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"RPW-MD",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,14128,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,14128,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,14128,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,14128,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,14128,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[]
						},
					]
				}
			]
		},
		{
			tabTitle:			"MD",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,5191,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,5191,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,5191,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Goal",
							initialTags:	[4611,5191,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Project",
							initialTags:	[4611,5191,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[]
						},
					]
				}
			]
		},
		{
			tabTitle:			"MD Strategy",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Morgan",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[16927,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[16927,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[16927,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[16927,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[16927,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[16927,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Business",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Idea",
							initialTags:	[430]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[17822,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Contact",
							initialTags:	[17822,23]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Goal",
							initialTags:	[17822,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Book",
							initialTags:	[425,17822]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Career",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Job",
							initialTags:	[2221,209,15215]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Business",
							initialTags:	[1681,53]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Contact",
							initialTags:	[11491,23]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Goal",
							initialTags:	[11491,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Objective",
							initialTags:	[11491,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[]
						},
					]
				}
			]
		},
		{
			tabTitle:			"RPW",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[14128,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[14128,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[14128,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Project",
							initialTags:	[14128,46]
						},
					]
				}
			]
		},
		{
			tabTitle:			"RPW Strategy",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[14128,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[14128,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[14128,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Project",
							initialTags:	[14128,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Project",
							initialTags:	[14128,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"RPW Staff Actions",
			active:				false,
			columns:			[
				{
					height:				'100%',
					width:				'25%',
					rows:					[
						{
							widgets:			[
								{
									type:					"controller",
									widgetTitle:	"Controller 1",
									initialClass:	"Objective",
									initialTags:	[11051,14128,14608]
								}
							]
						},
						{
							widgets:			[
								{
									type:					"controller",
									widgetTitle:	"Controller 1",
									initialClass:	"Objective",
									initialTags:	[14128,46]
								}
							]
						},
					]
				},
				{
					height:				'100%',
					width:				'75%',
					rows:					[
						{
							widgets:		[
								{
									type:					"controller",
									widgetTitle:	"Controller 1",
									initialClass:	"Objective",
									initialTags:	[14128,11051,17969]
								},
								{
									type:					"controller",
									widgetTitle:	"Controller 2",
									initialClass:	"Objective",
									initialTags:	[14128,11051,14657]
								},
								{
									type:					"controller",
									widgetTitle:	"Controller 3",
									initialClass:	"Objective",
									initialTags:	[14128,11051,17970]
								}
							]
						},
						{
							widgets:		[
								{
									type:					"controller",
									widgetTitle:	"Controller 4",
									initialClass:	"Objective",
									initialTags:	[14128,11051,14481]
								},
								{
									type:					"controller",
									widgetTitle:	"Controller 5",
									initialClass:	"Objective",
									initialTags:	[14128,11051,14480]
								},
								{
									type:					"controller",
									widgetTitle:	"Controller 6",
									initialClass:	"Objective",
									initialTags:	[14128,11051,14642]
								},
							]
						},
						{
							widgets:		[
								{
									type:					"controller",
									widgetTitle:	"Controller 1",
									initialClass:	"Objective",
									initialTags:	[14128,11051,17971]
								},
								{
									type:					"controller",
									widgetTitle:	"Controller 2",
									initialClass:	"Objective",
									initialTags:	[14128,11051,14846]
								},
								{
									type:					"controller",
									widgetTitle:	"Controller 3",
									initialClass:	"Objective",
									initialTags:	[14128,11051,14488]
								}
							]
						},
					]
				}
			],
		},
		{
			tabTitle:			"Staff Projects",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,46,17969]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[14128,46,14657]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[14128,46,17970]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,46,14481]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Objective",
							initialTags:	[14128,46,14480]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[14128,46,14642]
						},
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,46,17971]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[14128,46,14846]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[14128,46,14488]
						}
					]
				},
			]
		},
		{
			tabTitle:			"Political",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,14130,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Goal",
							initialTags:	[14128,14130,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Project",
							initialTags:	[14128,14130,46]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,14130,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Event",
							initialTags:	[14128,14130,1932]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Milestone",
							initialTags:	[14128,14130,16808]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Comms",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,14131,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Goal",
							initialTags:	[14128,14131,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Project",
							initialTags:	[14128,14131,46]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,14131,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Event",
							initialTags:	[14128,14131,1932]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Milestone",
							initialTags:	[14128,14131,16808]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Finance",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,14133,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Goal",
							initialTags:	[14128,14133,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Project",
							initialTags:	[14128,14133,46]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,14133,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Event",
							initialTags:	[14128,14133,1932]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Milestone",
							initialTags:	[14128,14133,16808]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Research",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,14135,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Goal",
							initialTags:	[14128,14135,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Project",
							initialTags:	[14128,14135,46]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,14135,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Event",
							initialTags:	[14128,14135,1932]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Milestone",
							initialTags:	[14128,14135,16808]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Data",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,14132,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Goal",
							initialTags:	[14128,14132,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Project",
							initialTags:	[14128,14132,46]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,14132,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Event",
							initialTags:	[14128,14132,1932]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Milestone",
							initialTags:	[14128,14132,16808]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Operations",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[14128,14134,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Goal",
							initialTags:	[14128,14134,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Project",
							initialTags:	[14128,14134,46]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[14128,14134,11051]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Event",
							initialTags:	[14128,14134,1932]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Milestone",
							initialTags:	[14128,14134,16808]
						},
					]
				}
			]
		},
		{
			tabTitle:			"EDO",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Strategy",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Mark",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Jimmy",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Pat",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Jason",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Chaz",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Ben",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Martha",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Gehl",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Phil",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"Dan",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
		{
			tabTitle:			"BK",
			active:				false,
			rows:					[
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[4611,11051,14608]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[4611,11051,9120]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[4611,11051,2221]
						}
					]
				},
				{
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Project",
							initialTags:	[4611,46]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Goal",
							initialTags:	[4611,13]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[4611,11051]
						},
					]
				}
			]
		},
	];
	pushTab = (obj) => {
		this.desk.tabs.push(obj.tab);
		if(typeof obj.callback === "function") {
			obj.callback(obj.tab);
		}
	}
	closeTab = (index) => {
		if(this.desk.tabs[index].active == true) {
			this.desk.tabs[index-1].active = true;
		}
		this.desk.tabs.splice(index, 1);
	}
	launchTab = (obj) => {
		let tab = {
			tabTitle:			obj.ObjectName,
			active:				false,
			widgets:			[
				{
					type:					"controller",
					widgetTitle:	"Controller 1",
					initialClass:	"Objective",
					initialTags:	[obj.ObjectID]
				}
			],
			rows:					[
				{
					width:			'75%',
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 1",
							initialClass:	"Objective",
							initialTags:	[obj.ObjectID]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 2",
							initialClass:	"Objective",
							initialTags:	[obj.ObjectID]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 3",
							initialClass:	"Objective",
							initialTags:	[obj.ObjectID]
						}
					]
				},
				{
					width:			'75%',
					widgets:		[
						{
							type:					"controller",
							widgetTitle:	"Controller 4",
							initialClass:	"Objective",
							initialTags:	[obj.ObjectID]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 5",
							initialClass:	"Objective",
							initialTags:	[obj.ObjectID]
						},
						{
							type:					"controller",
							widgetTitle:	"Controller 6",
							initialClass:	"Objective",
							initialTags:	[obj.ObjectID]
						},
					]
				}
			]
		};
		console.log(tab);
		// this.pushTab();
	}
	addCtrl = (arr) => {
		arr.push({
			type:					"controller",
			widgetTitle:	"Controller 1",
			initialClass:	"Objective",
			initialTags:	[4611,11051,14608]
		});
	}
}