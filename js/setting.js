/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kitakyushu_2014_yosan';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  '1': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#935B3B' },
  '101': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#0AB971' },
  '201': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '202': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '203': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#790586' },
  '204': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#790586' },
  '205': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '206': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#790586' },
  '207': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#790586' },
  '208': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#790586' },
  '209': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#790586' },
  '210': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '3': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },
  '301': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '302': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#790586' },
  '303': { icon: 'icons/toilet.svg', color: '#C75746', bcolor: '#790586' },
  '304': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#790586' },
  '305': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#790586' },
  '306': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#790586' },
  '307': { icon: 'icons/foreign-military-aid.svg', color: '#C75746', bcolor: '#790586' },
  '308': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' },
  '4': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#D33673' },
  '401': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '402': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#D33673' },
  '403': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' },
  '404': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#2A3A03' },
  '501': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '502': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#EC2406' },
  '601': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '701': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '702': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '703': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '704': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '705': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' },
  '8': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#C75746' },
  '801': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '802': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#C75746' },
  '803': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#C75746' },
  '804': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' },
  '9': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#D33673' },
  '901': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '902': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '903': { icon: 'icons/railways.svg', color: '#C75746', bcolor: '#790586' },
  '904': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#790586' },
  '905': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#790586' },
  '906': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#790586' },
  '1001': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '1002': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '1003': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#790586' },
  '1101': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '1102': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '1103': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '12': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#790586' },
  '1201': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#790586' },
  '13': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1301': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '1302': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '1303': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#790586' },
  '1304': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#790586' },
  '1305': { icon: 'icons/post-secondary.svg', color: '#C75746', bcolor: '#790586' },
  '1306': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '1307': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '1308': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '1309': { icon: 'icons/media.svg', color: '#C75746', bcolor: '#790586' },
  '1310': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#790586' },
  '14': { icon: 'icons/pollution.svg', color: '#C75746', bcolor: '#790586' },
  '1401': { icon: 'icons/pollution.svg', color: '#C75746', bcolor: '#790586' },
  '15': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' },
  '1501': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#790586' },
  '1502': { icon: 'icons/other-medical.svg', color: '#C75746', bcolor: '#790586' },
  '1503': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' },
  '16': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' },
  '1601': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#D33673' }
};


