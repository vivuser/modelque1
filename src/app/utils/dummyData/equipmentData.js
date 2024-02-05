export const equipmentOptions = [
    {
      value: 'cngCompressor',
      label: 'CNG Compressor',
      equipmentTypeOptions: [
        {
          value: 'emd',
          label:'EMD'
        },
        {
          value: 'ged',
          label:'GED'
        },
        {
          value: 'booster',
          label:'Booster'
        },
      ],
        capacity: [
          { value: '650', label: '650' },
          { value: '1200', label: '1200' },
          { value: 'other', label: 'Other' },
        ],
        existingMake: [
          { value: 'kpcl', label: 'KPCL' },
          { value: 'cp', label: 'CP' },
        ],
    },

    
    {
      value: 'cngDispenser',
      label: 'CNG Dispenser',
      equipmentTypeOptions: [
        {
          value: 'car',
          label:'CAR'
        },
        {
          value: 'bus',
          label:'BUS'
        },
        {
          value: 'combo',
          label:'COMBO'
        },
      ],
      existingMake: [
        { value: 'parker', label: 'Parker' },
      ],
    },
  
    
    {
      value: 'cascade',
      label: 'Cascade',
      equipmentTypeOptions: [
        {
          value: 'stationary',
          label: 'Stationary',
        },
        {
          value: 'mobile',
          label: 'Mobile',
        },
      ],
        capacity: [
          { value: '3000wl', label: '3000WL' },
          { value: '4500wl', label: '4500WL' },
          { value: 'other', label: 'Other' },
        ],
        existingMake: [
          { value: 'ekc', label: 'EKC' },
          { value: 'rama', label: 'RAMA' },
          { value: 'sahuwala', label: 'Sahuwala' },
          { value: 'jiolat', label: 'Jiolat' },

        ]
    },

    {
      value: 'fillPost',
      label: 'Fill Post',
      equipmentTypeOptions: [
        {
          value: 'with flow meter',
          label:'with flow meter'
        },
      ],
      existingMake: [
        { value: 'micromotion', label: 'Micromotion' },
        { value: 'e&h', label: 'E&H' },
      ],
    },

    {
      value: 'decantingPost',
      label: 'Decanting Post',
      equipmentTypeOptions: [
        {
          value: 'with MFM',
          label:'with MFM'
        },
        {
          value: 'without MFM',
          label:'without MFM'
        },
      ],
      existingMake: [
        { value: 'micromotion', label: 'Micromotion' },
        { value: 'e&h', label: 'E&H' },
      ],
    },

    {
      value: 'electricPanel',
      label: 'Electric Panel',
      equipmentTypeOptions: [
        {
          value: 'with MFM',
          label:'with MFM'
        },
      ],
      existingMake: [
        { value: 'mundra', label: 'Mundra' },
        { value: 'sk', label: 'SK' },
        { value: 'powercontrol', label: 'Powercontrol' },
      ],
      
    },

    {
      value: 'ups',
      label: 'UPS',
    
    capacity: [
      { value: '1 kva', label: '1 kva' },
      { value: '3 kva', label: '3 kva' },
    ],
    existingMake: [
      { value: 'realTechno', label: 'real Techno' },
    ],
  }

  ];