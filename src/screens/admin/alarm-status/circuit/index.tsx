import React from "react";
import SingleCircuitCard from "./SingleCircuitCard";
import DoubleCircuitCard from "./DoubleCircuitCard";

const Circuit = ({
  shortCircuit,
  currentAlert,
  voltageAlert,
  temperatureAlert,
}: any) => {
  console.log(shortCircuit);
  return (
    <div>
      <SingleCircuitCard count={shortCircuit?.shortCircuit} />
      <DoubleCircuitCard
        heading="Current Alert"
        titleOne="Current Charge"
        titleTwo="Current Discharge"
        countOne={currentAlert?.currentCharge}
        countTwo={currentAlert?.currentDischarge}
      />
      <DoubleCircuitCard
        heading="Voltage Alert"
        titleOne="Over Voltage"
        titleTwo="Under Voltage"
        countOne={voltageAlert?.overVoltage}
        countTwo={voltageAlert?.underVoltage}
      />
      <DoubleCircuitCard
        heading="Temperature Alert"
        titleOne="Over Temperature"
        titleTwo="under Temperature"
        countOne={temperatureAlert?.overTemperature}
        countTwo={temperatureAlert?.underTemperature}
      />
    </div>
  );
};

export default React.memo(Circuit);
