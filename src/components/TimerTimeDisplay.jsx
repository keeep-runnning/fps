import PropTypes from "prop-types";
import { convertTimeFromSecondToHourMinuteSecond } from "../utils/timeConvertor";
import { formatTimeUnit } from "../utils/timeFormatter";
import TimerTimeUnitDisplay from "./TimerTimeUnitDisplay";

export default function TimerTimeDisplay({ timeInSecond = 0 }) {
  const { hour, minute, second } = convertTimeFromSecondToHourMinuteSecond(timeInSecond);

  const HH = formatTimeUnit(hour);
  const MM = formatTimeUnit(minute);
  const SS = formatTimeUnit(second);

  return (
    <div className="flex gap-x-3">
      <TimerTimeUnitDisplay timeUnit={HH} />
      <TimerTimeUnitDisplay timeUnit={":"} />
      <TimerTimeUnitDisplay timeUnit={MM} />
      <TimerTimeUnitDisplay timeUnit={":"} />
      <TimerTimeUnitDisplay timeUnit={SS} />
    </div>
  );
}

TimerTimeDisplay.propTypes = {
  timeInSecond: PropTypes.number,
};
