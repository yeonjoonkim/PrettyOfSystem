import * as I from '../../../../interface';
import * as Repository from '../../../../repository/index';
import * as DateSvc from '../../../date/service-date';
import * as Constant from '../../../../constant';
//Manage By Shop Operating Hours
export const manage = async function (shop: I.ShopConfigurationType) {
  const associatedUsers = await Repository.User.getAssociatedShopUsers(shop.id);
  if (associatedUsers.length > 0) {
    // Reset Default Roster;
    associatedUsers.map(async user => {
      let associated = user.associatedShops.find(s => s.shopId === shop.id);
      if (associated !== undefined && associated !== null) {
        const index = user.associatedShops.findIndex(s => s.shopId === shop.id);
        const requested = update(shop.operatingHours, associated);
        if (requested.updated) {
          user.associatedShops[index] = requested.associated;
          await Repository.User.updateSelectedUser(user);
        }
      }
    });
  }
};

const update = function (operatingHours: I.ShopWorkHoursType, au: I.UserAssociatedShopType) {
  let updated = false;
  if (!operatingHours.sun.isOpen) {
    //Roster
    au.defaultRoster.sun.isOpen = false;
    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(0)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 0];
    updated = true;
  } else {
    const day = Constant.Date.Day.Sun;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  if (!operatingHours.mon.isOpen) {
    //Roster
    au.defaultRoster.mon.isOpen = false;
    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(1)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 1];
    updated = true;
  } else {
    const day = Constant.Date.Day.Mon;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  if (!operatingHours.tue.isOpen) {
    //Roster
    au.defaultRoster.tue.isOpen = false;
    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(2)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 2];
    updated = true;
  } else {
    const day = Constant.Date.Day.Tue;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  if (!operatingHours.wed.isOpen) {
    //Roster
    au.defaultRoster.wed.isOpen = false;
    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(3)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 3];
    updated = true;
  } else {
    const day = Constant.Date.Day.Wed;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  if (!operatingHours.thu.isOpen) {
    //Roster
    au.defaultRoster.thu.isOpen = false;
    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(4)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 4];
    updated = true;
  } else {
    const day = Constant.Date.Day.Thu;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  if (!operatingHours.fri.isOpen) {
    //Roster
    au.defaultRoster.fri.isOpen = false;
    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(5)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 5];
    updated = true;
  } else {
    const day = Constant.Date.Day.Fri;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  if (!operatingHours.sat.isOpen) {
    //Roster
    au.defaultRoster.sat.isOpen = false;

    //Close
    au.defaultRoster.closeDay = au.defaultRoster.closeDay.includes(6)
      ? au.defaultRoster.closeDay
      : [...au.defaultRoster.closeDay, 6];
    updated = true;
  } else {
    const day = Constant.Date.Day.Sat;
    const requireOverride = requireOverrideRoster(operatingHours, au, day);
    if (requireOverride) {
      au.defaultRoster[day].operatingHours = operatingHours[day].operatingHours;
      au.defaultRoster[day].breakTimes = [];
      au.defaultRoster[day].workHours = operatingHours[day].workHours;
      updated = true;
    }
  }

  return { associated: au, updated: updated };
};

const requireOverrideRoster = function (
  operatingHours: I.ShopWorkHoursType,
  au: I.UserAssociatedShopType,
  day: Constant.DayType
) {
  const tempDate = new Date();
  const operatingStartTime = DateSvc.formatByTimeItem(tempDate, operatingHours[day].operatingHours.openTime);
  const operatingEndTime = DateSvc.formatByTimeItem(tempDate, operatingHours[day].operatingHours.closeTime);
  const rosterStartTime = DateSvc.formatByTimeItem(tempDate, au.defaultRoster[day].operatingHours.openTime);
  const rosterEndTime = DateSvc.formatByTimeItem(tempDate, au.defaultRoster[day].operatingHours.closeTime);

  const startsWithinOperatingHours = rosterStartTime >= operatingStartTime && rosterStartTime < operatingEndTime;
  const endsWithinOperatingHours = rosterEndTime > operatingStartTime && rosterEndTime <= operatingEndTime;

  return !(startsWithinOperatingHours && endsWithinOperatingHours);
};
