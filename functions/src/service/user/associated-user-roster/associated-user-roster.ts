import * as I from '../../../interface';

export const reset = function (operatingHours: I.ShopWorkHoursType, au: I.UserAssociatedShopType) {
  if (!operatingHours.sun.isOpen) {
    //Roster
    au.roster.sun.isOpen = false;
    au.nextWeekRoster.sun.isOpen = false;
    au.nextTwoWeekRoster.sun.isOpen = false;
    au.nextThreeWeekRoster.sun.isOpen = false;
    au.nextFourWeekRoster.sun.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(0) ? au.roster.closeDay : [...au.roster.closeDay, 0];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(0)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 0];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(0)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 0];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(0)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 0];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(0)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 0];
  }

  if (!operatingHours.mon.isOpen) {
    //Roster
    au.roster.mon.isOpen = false;
    au.nextWeekRoster.mon.isOpen = false;
    au.nextTwoWeekRoster.mon.isOpen = false;
    au.nextThreeWeekRoster.mon.isOpen = false;
    au.nextFourWeekRoster.mon.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(1) ? au.roster.closeDay : [...au.roster.closeDay, 1];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(1)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 1];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(1)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 1];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(1)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 1];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(1)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 1];
  }

  if (!operatingHours.tue.isOpen) {
    //Roster
    au.roster.tue.isOpen = false;
    au.nextWeekRoster.tue.isOpen = false;
    au.nextTwoWeekRoster.tue.isOpen = false;
    au.nextThreeWeekRoster.tue.isOpen = false;
    au.nextFourWeekRoster.tue.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(2) ? au.roster.closeDay : [...au.roster.closeDay, 2];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(2)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 2];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(2)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 2];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(2)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 2];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(2)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 2];
  }

  if (!operatingHours.wed.isOpen) {
    //Roster
    au.roster.wed.isOpen = false;
    au.nextWeekRoster.wed.isOpen = false;
    au.nextTwoWeekRoster.wed.isOpen = false;
    au.nextThreeWeekRoster.wed.isOpen = false;
    au.nextFourWeekRoster.wed.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(3) ? au.roster.closeDay : [...au.roster.closeDay, 3];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(3)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 3];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(3)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 3];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(3)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 3];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(3)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 3];
  }

  if (!operatingHours.thu.isOpen) {
    //Roster
    au.roster.thu.isOpen = false;
    au.nextWeekRoster.thu.isOpen = false;
    au.nextTwoWeekRoster.thu.isOpen = false;
    au.nextThreeWeekRoster.thu.isOpen = false;
    au.nextFourWeekRoster.thu.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(4) ? au.roster.closeDay : [...au.roster.closeDay, 4];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(4)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 4];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(4)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 4];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(4)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 4];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(4)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 4];
  }

  if (!operatingHours.fri.isOpen) {
    //Roster
    au.roster.fri.isOpen = false;
    au.nextWeekRoster.fri.isOpen = false;
    au.nextTwoWeekRoster.fri.isOpen = false;
    au.nextThreeWeekRoster.fri.isOpen = false;
    au.nextFourWeekRoster.fri.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(5) ? au.roster.closeDay : [...au.roster.closeDay, 5];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(5)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 5];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(5)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 5];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(5)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 5];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(5)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 5];
  }

  if (!operatingHours.sat.isOpen) {
    //Roster
    au.roster.sat.isOpen = false;
    au.nextWeekRoster.sat.isOpen = false;
    au.nextTwoWeekRoster.sat.isOpen = false;
    au.nextThreeWeekRoster.sat.isOpen = false;
    au.nextFourWeekRoster.sat.isOpen = false;
    //Close
    au.roster.closeDay = au.roster.closeDay.includes(6) ? au.roster.closeDay : [...au.roster.closeDay];
    au.nextWeekRoster.closeDay = au.nextWeekRoster.closeDay.includes(6)
      ? au.nextWeekRoster.closeDay
      : [...au.nextWeekRoster.closeDay, 6];
    au.nextTwoWeekRoster.closeDay = au.nextTwoWeekRoster.closeDay.includes(6)
      ? au.nextTwoWeekRoster.closeDay
      : [...au.nextTwoWeekRoster.closeDay, 6];
    au.nextThreeWeekRoster.closeDay = au.nextThreeWeekRoster.closeDay.includes(6)
      ? au.nextThreeWeekRoster.closeDay
      : [...au.nextThreeWeekRoster.closeDay, 6];
    au.nextFourWeekRoster.closeDay = au.nextFourWeekRoster.closeDay.includes(6)
      ? au.nextFourWeekRoster.closeDay
      : [...au.nextFourWeekRoster.closeDay, 6];
  }

  return au;
};
