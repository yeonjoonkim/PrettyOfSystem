import * as I from '../../../../interface';
import * as Repository from '../../../../repository/index';
import * as DateSvc from '../../../date/service-date';
import * as Constant from '../../../../constant';
import * as Schedule from '../manage-schedule/manage-schedule';
import { logger } from 'firebase-functions/v2';

export const manage = async function (before: I.IUser, after: I.IUser) {
  if (!after.isSystemAdmin) {
    await manageNewAssociatedShop(before, after);
    await manageDeleteAssociatedShop(before, after);
    await manageUpdateAssociatedShop(before, after);
  }
};

const manageNewAssociatedShop = async function (before: I.IUser, after: I.IUser) {
  const beforeShopIds = before.associatedShops.map(s => s.shopId);
  const newShops = after.associatedShops.filter(as => !beforeShopIds.includes(as.shopId));

  for (const associated of newShops) {
    const shop = await Repository.Shop.Configuration.getSelectedConfig(associated.shopId);
    if (shop !== null) {
      await Repository.Shop.Schedule.createDefaultSchedules(
        associated,
        after.firstName,
        after.lastName,
        after.gender,
        shop
      );
    }
  }
};

const manageDeleteAssociatedShop = async function (before: I.IUser, after: I.IUser) {
  const afterShopIds = after.associatedShops.map(s => s.shopId);
  const deletedShops = before.associatedShops.filter(as => !afterShopIds.includes(as.shopId));

  for (const associated of deletedShops) {
    const shopConfig = await Repository.Shop.Configuration.getSelectedConfig(associated.shopId);

    if (shopConfig !== null) {
      await Repository.Shop.Schedule.deleteDocumentByEmployeeId(shopConfig.id, associated.userId);
      const currentShopTime = DateSvc.formatLocalDateTime(DateSvc.shopNow(shopConfig.timezone));
      const startOfDay = DateSvc.startDay(currentShopTime);
      const consults = await Repository.Shop.Consult.getEmployeeConsults(shopConfig.id, associated.userId);
      const requiresUpdates = consults.filter(c => {
        const currentDate = c.scheduled !== null && startOfDay === c.scheduled.startOfDay;
        const inFutureStatus = Constant.Consult_FutureScheduledStatusTypes.some(st => st === c.status.type);
        return currentDate || inFutureStatus;
      });

      if (requiresUpdates.length > 0) {
        await Repository.Shop.Consult.updateToAnyoneAwaitingStatus(requiresUpdates);
      }
    }
  }
};

const manageUpdateAssociatedShop = async function (b: I.IUser, a: I.IUser) {
  const beforeShopIds = b.associatedShops.map(s => s.shopId);
  const afterShopIds = a.associatedShops.map(s => s.shopId);
  const beforeAssociatedShops = b.associatedShops.filter(as => afterShopIds.includes(as.shopId));
  const afterAssociatedShops = a.associatedShops.filter(as => beforeShopIds.includes(as.shopId));

  for (const after of afterAssociatedShops) {
    const before = beforeAssociatedShops.find(as => as.shopId === after.shopId);
    if (before !== undefined && before !== null) {
      logger.info(`before`, before);
      logger.info(`after`, after);
      await handleUpdate(before, after, b.firstName, a.firstName, b.lastName, a.lastName, b.gender, a.gender);
    }
  }
};

const handleUpdate = async function (
  before: I.UserAssociatedShopType,
  after: I.UserAssociatedShopType,
  beforeFirstName: string,
  afterFirstName: string,
  beforeLastName: string,
  afterLastName: string,
  beforeGender: Constant.GenderType,
  afterGender: Constant.GenderType
) {
  const shop = await Repository.Shop.Configuration.getSelectedConfig(after.shopId);
  if (shop !== null) {
    const deactive = before.active !== after.active && !after.active;
    const active = before.active !== after.active && after.active;
    const displayInSystemChange = before.displayInSystem !== after.displayInSystem;
    const firstNameChange = beforeFirstName !== afterFirstName;
    const lastNameChange = beforeLastName !== afterLastName;
    const nameChange = firstNameChange || lastNameChange;
    const genderChange = beforeGender !== afterGender;

    if (deactive || active || displayInSystemChange || genderChange || nameChange) {
      const allSchedules = await Repository.Shop.Schedule.getByEmployeeId(shop.id, after.userId);
      const promises = allSchedules.map(async doc => {
        doc.active = after.active;
        doc.displayInSystem = after.displayInSystem;
        doc.firstName = afterFirstName;
        doc.lastName = afterLastName;
        doc.gender = afterGender;
        await Repository.Shop.Schedule.updateDocument(doc);
      });

      await Promise.all(promises);
      return;
    }

    const validator = updateValidator(before, after, nameChange, genderChange);
    const startOfDay = DateSvc.startDay(DateSvc.shopNow(shop.timezone));

    if (validator.requireUpdateMondayRoster) {
      const mon = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Mon,
        after.userId,
        startOfDay
      );
      for (const doc of mon) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }

    if (validator.requireUpdateTuesdayRoster) {
      const tue = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Tue,
        after.userId,
        startOfDay
      );
      for (const doc of tue) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }

    if (validator.requireUpdateWednesdayRoster) {
      const wed = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Wed,
        after.userId,
        startOfDay
      );
      for (const doc of wed) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }

    if (validator.requireUpdateThursdayRoster) {
      const thur = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Thu,
        after.userId,
        startOfDay
      );
      for (const doc of thur) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }

    if (validator.requireUpdateFridayRoster) {
      const fri = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Fri,
        after.userId,
        startOfDay
      );
      for (const doc of fri) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }

    if (validator.requireUpdateSaturdayRoster) {
      const sat = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Sat,
        after.userId,
        startOfDay
      );
      for (const doc of sat) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }

    if (validator.requireUpdateSundayRoster) {
      const sun = await Repository.Shop.Schedule.getByDayIndexFromStartDay(
        shop.id,
        Constant.Date.DayIndex.Sun,
        after.userId,
        startOfDay
      );
      for (const doc of sun) {
        await Schedule.updateDocumentByRoster(after.defaultRoster, doc, shop);
      }
    }
  }
};

const updateValidator = function (
  before: I.UserAssociatedShopType,
  after: I.UserAssociatedShopType,
  nameChange: boolean,
  genderChange: boolean
) {
  const hasUpdatedDisplaySystem = before.displayInSystem !== after.displayInSystem;
  const mon = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Mon);
  const tue = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Tue);
  const wed = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Wed);
  const thu = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Thu);
  const fri = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Fri);
  const sat = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Sat);
  const sun = isRosterChange(before.defaultRoster, after.defaultRoster, Constant.Date.Day.Sun);

  logger.info(`mon: `, mon);

  return {
    requireUpdateMondayRoster:
      hasUpdatedDisplaySystem ||
      mon.breakTimes.added.length > 0 ||
      mon.breakTimes.deleted.length > 0 ||
      mon.breakTimes.updated.length > 0 ||
      mon.isEndTimeChange ||
      mon.isStartTimeChange ||
      mon.isWorkHoursChange ||
      mon.isWorkingChange ||
      nameChange ||
      genderChange,

    requireUpdateTuesdayRoster:
      hasUpdatedDisplaySystem ||
      tue.breakTimes.added.length > 0 ||
      tue.breakTimes.deleted.length > 0 ||
      tue.breakTimes.updated.length > 0 ||
      tue.isEndTimeChange ||
      tue.isStartTimeChange ||
      tue.isWorkHoursChange ||
      tue.isWorkingChange ||
      nameChange ||
      genderChange,

    requireUpdateWednesdayRoster:
      hasUpdatedDisplaySystem ||
      wed.breakTimes.added.length > 0 ||
      wed.breakTimes.deleted.length > 0 ||
      wed.breakTimes.updated.length > 0 ||
      wed.isEndTimeChange ||
      wed.isStartTimeChange ||
      wed.isWorkHoursChange ||
      wed.isWorkingChange ||
      nameChange ||
      genderChange,

    requireUpdateThursdayRoster:
      hasUpdatedDisplaySystem ||
      thu.breakTimes.added.length > 0 ||
      thu.breakTimes.deleted.length > 0 ||
      thu.breakTimes.updated.length > 0 ||
      thu.isEndTimeChange ||
      thu.isStartTimeChange ||
      thu.isWorkHoursChange ||
      thu.isWorkingChange ||
      nameChange ||
      genderChange,

    requireUpdateFridayRoster:
      hasUpdatedDisplaySystem ||
      fri.breakTimes.added.length > 0 ||
      fri.breakTimes.deleted.length > 0 ||
      fri.breakTimes.updated.length > 0 ||
      fri.isEndTimeChange ||
      fri.isStartTimeChange ||
      fri.isWorkHoursChange ||
      fri.isWorkingChange ||
      nameChange ||
      genderChange,

    requireUpdateSaturdayRoster:
      hasUpdatedDisplaySystem ||
      sat.breakTimes.added.length > 0 ||
      sat.breakTimes.deleted.length > 0 ||
      sat.breakTimes.updated.length > 0 ||
      sat.isEndTimeChange ||
      sat.isStartTimeChange ||
      sat.isWorkHoursChange ||
      sat.isWorkingChange ||
      nameChange ||
      genderChange,

    requireUpdateSundayRoster:
      hasUpdatedDisplaySystem ||
      sun.breakTimes.added.length > 0 ||
      sun.breakTimes.deleted.length > 0 ||
      sun.breakTimes.updated.length > 0 ||
      sun.isEndTimeChange ||
      sun.isStartTimeChange ||
      sun.isWorkHoursChange ||
      sun.isWorkingChange ||
      nameChange ||
      genderChange,
  };
};

export const isRosterChange = function (b: I.ShopWorkHoursType, a: I.ShopWorkHoursType, day: Constant.DayType) {
  const tempDate = new Date();
  //Before
  const beforeStartDate = DateSvc.formatByTimeItem(tempDate, b[day].operatingHours.openTime);
  const beforeEndDate = DateSvc.formatByTimeItem(tempDate, b[day].operatingHours.closeTime);
  const beforeBreakTimes = b[day].breakTimes.map(bt => {
    return {
      startDateTime: DateSvc.formatByTimeItem(tempDate, bt.start),
      endDateTime: DateSvc.formatByTimeItem(tempDate, bt.end),
    };
  });
  const beforeWorkHours = DateSvc.getWorkHours(beforeStartDate, beforeEndDate, beforeBreakTimes);
  //After
  const afterStartDate = DateSvc.formatByTimeItem(tempDate, a[day].operatingHours.openTime);
  const afterEndDate = DateSvc.formatByTimeItem(tempDate, a[day].operatingHours.closeTime);
  const afterBreakTimes = a[day].breakTimes.map(bt => {
    return {
      startDateTime: DateSvc.formatByTimeItem(tempDate, bt.start),
      endDateTime: DateSvc.formatByTimeItem(tempDate, bt.end),
    };
  });
  const afterWorkHours = DateSvc.getWorkHours(afterStartDate, afterEndDate, afterBreakTimes);
  const isWorkingChange = b[day].isOpen !== a[day].isOpen;
  const updated = Schedule.compareBreakTimes(b[day].breakTimes, a[day].breakTimes);
  return {
    isWorkHoursChange: beforeWorkHours !== afterWorkHours,
    isStartTimeChange: beforeStartDate !== afterStartDate,
    isEndTimeChange: beforeEndDate !== afterEndDate,
    isWorkingChange: isWorkingChange,
    breakTimes: updated,
  };
};

export const generateDefaultSchedulesByCreate = async function (user: I.IUser) {
  if (!user.isSystemAdmin) {
    for (const associated of user.associatedShops) {
      const shopConfig = await Repository.Shop.Configuration.getSelectedConfig(associated.shopId);
      if (shopConfig !== null) {
        await Repository.Shop.Schedule.createDefaultSchedules(
          associated,
          user.firstName,
          user.lastName,
          user.gender,
          shopConfig
        );
      }
    }
  }
};
