export const overViewData: any = {
  active: 1,
  inactive: 5,
  total: 123234,
  customers: [
    {
      name: "Merlin",
      id: 1,
      active: 1,
      inactive: 5,
      total: 254789,
    },
    {
      name: "Scope",
      id: 2,
      active: 10,
      inactive: 16,
      total: 50245,
    },
  ],
};

export const faultOveviewData: any = [
  { id: 1, dateTime: "12.5333", bmsId: 450, faultType: 450 },
  { id: 2, dateTime: "12.5333", bmsId: 40, faultType: 40 },
  { id: 3, dateTime: "12.5333", bmsId: 40, faultType: 40 },
  { id: 4, dateTime: "12.5333", bmsId: 40, faultType: 40 },
  { id: 5, dateTime: "12.5333", bmsId: 40, faultType: 40 },
];

export const stateOfChargeGraphData: any = [
  10, 20, 10, 45, 10, 20, 10, 40, 10, 95, 25, 40,
];

export const dashboardData: any = {
  stateOfCharge: 25,
  packVoltage: 20,
  packCurrent: 20,
  currentVolatge: 25.5,
  cellVoltageLowerThrashHold: 4.0,
  cellVoltageUpperThrashHold: 4.5,
  // cellVoltages: [],
  cellVoltages: [
    4.1, 3.2, 2.8, 4.6, 4.0, 4.0, 4.0, 4.6, 4.0, 4.0, 4.0, 4.6, 4.0, 4.6, 4.0,
    4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0,
    4.0, 4.0,
  ],
  boardTemperature: 9,
  boardTemperatureLowerThrashHold: 10,
  boardTemperatureUpperThrashHold: 20,
  cellTemperatureLowerThrashHold: 4,
  cellTemperatureUpperThrashHold: 10,
  // cellTemperatures: [],
  cellTemperatures: [4, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
  cellImbalance: 10.5,
  name: "BMS_2_Marlin",
  firmwareVersion: "DOS BMS",
};

export const alarmStatusData: any = [
  {
    id: 1,
    dateTime: "2.12.23 - 2:00pm",
    status: 40,
    faultType: "Over current",
  },
  {
    id: 2,
    dateTime: "2.12.23 - 2:00pm",
    status: 40,
    faultType: "Over temperature",
  },
  {
    id: 3,
    dateTime: "2.12.23 - 2:00pm",
    status: 40,
    faultType: "Under voltage",
  },
  {
    id: 4,
    dateTime: "2.12.23 - 2:00pm",
    status: 40,
    faultType: "Over voltage",
  },
  {
    id: 5,
    dateTime: "2.12.23 - 2:00pm",
    status: 40,
    faultType: "Over voltage",
  },
];

export const alarmStatusCurrent: any = {
  shortCircuit: { shortCircuit: 10 },
  currentAlert: { currentCharge: 15, currentDischarge: 5 },
  voltageAlert: { overVoltage: 16, underVoltage: 6 },
  temperatureAlert: { overTemperature: 17, underTemperature: 7 },
};

export const bmsStatus: any = {
  temperature: {
    mcuTemperature: {
      value: 19,
      mcuTemperatureLowerTrashHold: 20,
      mcuTemperatureUpperTrashHold: 30,
    },
    afeTemperature: {
      value: 41,
      afeTemperatureLowerTrashHold: 40,
      afeTemperatureUpperTrashHold: 50,
    },
    boardTemperature: {
      value: 71,
      boardTemperatureLowerTrashHold: 60,
      boardTemperatureUpperTrashHold: 70,
    },
  },
  peripheralStatus: { canStatus: true, spiStatus: true, bleStatus: false },
  cutOffStatus: { voltage: true, current: false, temperature: true },
};

export const bmsTemperatureGraphData: any = [
  [10, 20, 10, 45, 10, 20, 10, 40, 10, 95, 25, 40],
  [20, 40, 10, 35, 10, 30, 20, 50, 10, 65, 25, 40],
  [30, 10, 20, 25, 30, 20, 25, 40, 10, 75, 25, 40],
];

export const productsData: any = [
  {
    id: 1,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus:true,
    bmsStatus:false,
    operatingStatus: true,
  },
  {
    id: 2,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus:false,
    bmsStatus:true,
    operatingStatus: false,
  },
  {
    id: 3,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus:false,
    bmsStatus:false,
    operatingStatus: false,
  },
  {
    id: 4,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus: true,
    bmsStatus: true,
    operatingStatus: true,
  },
  {
    id: 5,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus: false,
    bmsStatus: true,
    operatingStatus: true,
  },
  {
    id: 6,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus: true,
    bmsStatus: true,
    operatingStatus: true,
  },
  {
    id: 7,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus: true,
    bmsStatus: true,
    operatingStatus: true,
  },
  {
    id: 8,
    vehicleNo: "BMS Client A-001",
    soc: "100%",
    cycleCount: 20,
    faultStatus: true,
    bmsStatus: true,
    operatingStatus: false,
  }
];
