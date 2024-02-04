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
    },

    {
      value: 'cngDispenser',
      label: 'CNG Dispenser',
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
    },
  ];