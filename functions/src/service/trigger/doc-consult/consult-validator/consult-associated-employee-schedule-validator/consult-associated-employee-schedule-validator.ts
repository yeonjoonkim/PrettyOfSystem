import * as Repository from '../../../../../repository/index';
import * as Constant from '../../../../../constant';
import * as I from '../../../../../interface';
export const hasOverlapSchedule = async function (consult: I.ConsultDocumentType) {
  if (consult.scheduled !== null) {
    const consults = await Repository.Shop.Consult.getEmployeeScheduledOfDay(
      consult.shopId,
      consult.associatedEmployee.id,
      consult.scheduled.startOfDay
    );
    const times =
      consult.scheduled !== null ? getScheduleConsultTimes(consult.id, consult.scheduled, consults) : [];

    if (times.length > 0) {
      const scheduled = consult.scheduled as I.ConsultScheduleTimeType;
      return times.some(
        time => scheduled.startDateTime < time.endDateTime && scheduled.endDateTime > time.startDateTime
      );
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const getScheduleConsultTimes = function (
  consultId: string,
  scheduled: I.ConsultScheduleTimeType,
  consults: I.ConsultDocumentType[]
) {
  const scheduledTime = consults
    .filter(c => c.id !== consultId)
    .filter(c => c.scheduled !== null)
    .map(s => s.scheduled as I.ConsultScheduleTimeType)
    .filter(s => s.startOfDay === scheduled.startOfDay);
  return scheduledTime;
};

export const isAnyone = function (employeeName: string) {
  return employeeName === Constant.Default.Anyone;
};
