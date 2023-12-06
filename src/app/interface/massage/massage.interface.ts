export type MassageBodySelectorType = {
  position:
    | MassageBodyFrontRightPositionType
    | MassageBodyFrontLeftPositionType
    | MassageBodyBackRightPositionType
    | MassageBodyBackLeftPositionType
    | MassageBodyFrontCenterPositionType
    | MassageBodyBackCenterPositionType;
  data: string;
  id: string;
  enabled: boolean;
};

// Front
export type MassageBodyFrontRightPositionType = {
  type: 'Front';
  typeName: 'label.title.front';
  position: 'Right';
  positionName: 'label.title.right';
  name: string;
};

export type MassageBodyFrontLeftPositionType = {
  type: 'Front';
  typeName: 'label.title.front';
  position: 'Left';
  positionName: 'label.title.left';
  name: string;
};

export type MassageBodyFrontCenterPositionType = {
  type: 'Front';
  typeName: 'label.title.front';
  position: 'Center';
  positionName: '';
  name: string;
};

// Back
export type MassageBodyBackRightPositionType = {
  type: 'Back';
  typeName: 'label.title.back';
  position: 'Right';
  positionName: 'label.title.right';
  name: string;
};

export type MassageBodyBackLeftPositionType = {
  type: 'Back';
  typeName: 'label.title.back';
  position: 'Left';
  positionName: 'label.title.left';
  name: string;
};

export type MassageBodyBackCenterPositionType = {
  type: 'Back';
  typeName: 'label.title.back';
  position: 'Center';
  positionName: '';
  name: string;
};
