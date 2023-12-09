import { MassageBodyPreferenceNameType, MassageBodyPreferenceType } from '..';

export type MassageBodySelectorType = {
  position: MassageBodyPositionType;
  data: string;
  id: string;
  enabled: boolean;
};

export type MassageBodySelectorPopoverProp = {
  selector: MassageBodySelectorType;
  selectedAreas: MassageBodySelectorAreaType[];
};

export type MassageBodySelectorAreaType = {
  position: MassageBodyPositionType;
  pain: MassageBodySelectorRecordPainType;
  preference: MassageBodyPreferenceAreaType;
};

export type MassageBodyPreferenceAreaType = {
  type: MassageBodyPreferenceType;
  name: MassageBodyPreferenceNameType;
};

export type MassageBodySelectorRecordPainType = {
  level: number; //0 - 10;
  name: string;
};

export type MassageBodyPositionType =
  | MassageBodyFrontRightPositionType
  | MassageBodyFrontLeftPositionType
  | MassageBodyBackRightPositionType
  | MassageBodyBackLeftPositionType
  | MassageBodyFrontCenterPositionType
  | MassageBodyBackCenterPositionType;

// Front
type MassageBodyFrontRightPositionType = {
  type: 'Front';
  typeName: 'label.title.front';
  position: 'Right';
  positionName: 'label.title.right';
  name: string;
};
type MassageBodyFrontLeftPositionType = {
  type: 'Front';
  typeName: 'label.title.front';
  position: 'Left';
  positionName: 'label.title.left';
  name: string;
};
type MassageBodyFrontCenterPositionType = {
  type: 'Front';
  typeName: 'label.title.front';
  position: 'Center';
  positionName: '';
  name: string;
};

// Back
type MassageBodyBackRightPositionType = {
  type: 'Back';
  typeName: 'label.title.back';
  position: 'Right';
  positionName: 'label.title.right';
  name: string;
};

type MassageBodyBackLeftPositionType = {
  type: 'Back';
  typeName: 'label.title.back';
  position: 'Left';
  positionName: 'label.title.left';
  name: string;
};

type MassageBodyBackCenterPositionType = {
  type: 'Back';
  typeName: 'label.title.back';
  position: 'Center';
  positionName: '';
  name: string;
};
