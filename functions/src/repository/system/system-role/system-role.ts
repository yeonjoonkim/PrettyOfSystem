import { firestore } from 'firebase-admin';
import * as Db from '../../../db';
import * as I from '../../../interface';
import { logger } from 'firebase-functions/v2';

export const getAll = async function (): Promise<I.RoleConfigurationType[]> {
  const allRoleDocs = await firestore().collection(Db.Context.System.Role.Configuration).get();
  const allRoles = allRoleDocs.docs.map(doc => {
    const data = doc.data() as I.RoleConfigurationType;
    return {
      ...data,
    };
  });

  return allRoles;
};

export const getSystemAdmin = async function (): Promise<I.RoleConfigurationType | null> {
  const allRoles = await getAll();
  const systemAdmin = allRoles.find(role => role.accessLevel.isSystemAdmin);

  return systemAdmin !== undefined ? systemAdmin : null;
};

export const updateSelectedRole = async function (role: I.RoleConfigurationType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.System.Role.Configuration).doc(role.id);
  const data = await documentation.get();
  if (data.exists) {
    try {
      await documentation.update({
        ...role,
        lastModifiedDate: new Date(),
      });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    return await createRole(role);
  }
};

export const createRole = async function (role: I.RoleConfigurationType): Promise<boolean> {
  const documentation = firestore().collection(Db.Context.System.Role.Configuration).doc(role.id);
  const data = await documentation.get();

  if (!data.exists) {
    try {
      await documentation.set({
        ...role,
        lastModifiedDate: new Date(),
      });
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  } else {
    return false;
  }
};

export const deleteSelectedRole = async function (role: I.RoleConfigurationType) {
  const roleRef = firestore().collection(Db.Context.System.Role.Configuration).doc(role.id);

  try {
    await roleRef.delete();
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};
