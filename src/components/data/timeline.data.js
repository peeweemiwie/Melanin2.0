export const outlineArray = [
	{
		title: 'Mary Snow',
		className: 'outline-info',
		tr: [
			{ key: 'Age', val: 'N/A' },
			{ key: 'Date of birth', val: 'N/A' },
			{ key: 'Site', val: 'JTCC' },
			{ key: 'Patient Last Updated', val: '01/25/2017' },
		],
	},
	{
		title: 'diagnosis',
		className: 'outline-diagnosis',
		list: [
			{
				key:
					'C44.799: Other specified malignant neoplasm of skin of lower limb, including hip',
				val: [
					'8742/3: Lantigo maligma melanoma - 01/04/2003',
					'8780/3: Blue nevus, malignant - 01/04/2000',
				],
			},
			{
				key:
					'C44.799: Other specified malignant neoplasm of skin of lower limb, including hip',
				val: [
					'8742/3: Lantigo maligma melanoma - 01/04/2003',
					'8780/3: Blue nevus, malignant',
				],
			},
		],
	},
	{
		title: 'outcomes',
		className: 'outline-outcomes',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{ key: 'diagnosis', val: 'ICD 841.21: Breast' },
		],
	},
];

export const theadArray = [
	{ title: 'date occurred', className: 'date-occurred' },
	{ title: 'event type', className: 'event-type' },
	{ title: 'source', className: 'source' },
	{ title: 'date abstracted', className: 'date-abstracted' },
];

export const timelineArray = [
	{
		dateOccurred: '02/10/2017',
		className: 'significant-fact',
		eventType: 'diagnosis',
		message: 'Date of Encounter',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{
				key: 'diagnosis',
				val:
					'C44.799: Other specified malignant neoplasm of skin of lower limb, including hip',
			},
		],
		source: 'Pathology Note',
		dateAbstracted: {
			date: '01/22/2017',
			note: 'HL7 Ingestor',
		},
	},
	{
		dateOccurred: '02/10/2017',
		className: 'recent-fact',
		eventType: 'diagnosis',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{ key: 'diagnosis', val: 'ICD 841.21: Breast Oncology - Breast' },
		],
		source: 'Pathology Note',
		dateAbstracted: {
			date: '01/22/2017',
			note: 'HL7 Ingestor',
		},
	},
	{
		dateOccurred: '02/10/2017',
		className: 'suppressed-fact',
		eventType: 'diagnosis',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{ key: 'diagnosis', val: 'ICD 841.21: Breast Oncology - Breast' },
		],
		source: 'Pathology Note',
		dateAbstracted: {
			date: '01/22/2017',
			note: 'HL7 Ingestor',
		},
	},
	{
		dateOccurred: '02/10/2017',
		className: 'significant-fact',
		eventType: 'diagnosis',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{ key: 'diagnosis', val: 'ICD 841.21: Breast Oncology - Breast' },
		],
		source: 'Pathology Note',
		dateAbstracted: {
			date: '01/22/2017',
			note: 'HL7 Ingestor',
		},
	},
	{
		dateOccurred: '02/10/2017',
		eventType: 'diagnosis',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{ key: 'diagnosis', val: 'ICD 841.21: Breast Oncology - Breast' },
		],
		source: 'Pathology Note',
		dateAbstracted: {
			date: '01/22/2017',
			note: 'HL7 Ingestor',
		},
	},
	{
		dateOccurred: '02/10/2017',
		eventType: 'diagnosis',
		tr: [
			{ key: 'coding system', val: 'ICD-10' },
			{ key: 'diagnosis', val: 'ICD 841.21: Breast Oncology - Breast' },
		],
		source: 'Pathology Note',
		dateAbstracted: {
			date: '01/22/2017',
			note: 'HL7 Ingestor',
		},
	},
];
