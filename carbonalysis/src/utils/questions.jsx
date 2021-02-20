const carbonFootprintQuestions = [
  {
    label: 'Number of members of your household',
    name: 'householdSize',
    options: [
      '1','2','3','4','5','6','>6'
    ]
  },
  {
    label: 'Size of home',
    name: 'homeSize',
    options: [
      'Large house',
      'Medium house',
      'Small house',
      'Apartment'
    ]
  },
  {
    label: 'Food choices',
    name: 'food',
    options: [
      'Domestic meat daily',
      'Domestic meat few times per week',
      'Vegetarian',
      'Vegan',
      'Mostly prepackaged',
      'Good balance of fresh and convenience food',
      'Only fresh food'
    ]
  },
  {
    label: 'Water consumption',
    name: 'water',
    options: [
      'Dishwasher/Washing machine >9 times per week',
      'Dishwasher/Washing machine 4-9 times per week',
      'Dishwasher/Washing machine 1-3 times per week',
      'No dishwasher/washing machine',
      'Own a dishwasher/washing machine'
    ]
  },
  {
    label: 'Household purchases per year (furniture, electronics, other household gadgets',
    name: 'purchases',
    options: [
      '>7 new items',
      'Between 5 and 7 new items',
      'Between 3 and 5 new items',
      '<3',
      'Nothing or only secondhand items'
    ]
  },
  {
    label: 'Waste',
    name: 'waste',
    options: [
      '4 garbage cans per week',
      '3 garbage cans per week',
      '2 garbage cans per week',
      '1 garbage can per week',
      '0.5 or less garbage can per week'
    ]
  },
  {
    label: 'Transportation',
    name: 'transportation',
    options: [
      'More than 15,000 miles per year',
      '10,000 - 15,000 miles per year',
      '1,000 - 10,000 miles per year',
      '<1,000 miles per year',
      'No car'
    ]
  },
  {
    label: 'Public transportation',
    name: 'publicTransit',
    options: [
      'More than 20,000 miles per year',
      '15,000 - 20,000 miles per year',
      '10,000 - 15,000 miles per year',
      '1,000 - 10,000 miles per year',
      '<1,000 miles per year',
      'No public transportation'
    ]
  },
  {
    label: 'Flights',
    name: 'flights',
    options: [
      'Short distances (within your state) only in one year',
      'Further distances (nearby states)',
      'Far (other continents)'
    ]
  },
];

export default carbonFootprintQuestions;
