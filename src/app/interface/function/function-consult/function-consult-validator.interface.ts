export type ConsultDocumentStatusDetectionType = {
  Is_Creating: boolean;
  Is_Pending: boolean;
  Is_Scheduled: boolean;
  Is_Start: boolean;
  Is_Completed: boolean;
  Is_Cancel: boolean;
};

export type ConsultDocumentStatusLifeCycleType = {
  Stay_As: ConsultDocumentStayAsStatusLifeCycleType;
  From_Creating: ConsultDocumentCreatingStatusLifeCycleType;
  From_Pending: ConsultDocumentPendingStatusLifeCycleType;
  From_Scheduled: ConsultDocumentScheduledStatusLifeCycleType;
  From_Start: ConsultDocumentStartStatusLifeCycleType;
  From_Completed: ConsultDocumentCompletedStatusLifeCycleType;
  From_Cancel: ConsultDocumentCancelStatusLifeCycleType;
};

export type ConsultDocumentStayAsStatusLifeCycleType = {
  Creating: boolean;
  Pending: boolean;
  Scheduled: boolean;
  Start: boolean;
  Completed: boolean;
  Cancel: boolean;
};

//Creating
export type ConsultDocumentCreatingStatusLifeCycleType = {
  To_Pending: boolean;
  To_Scheduled: boolean;
  To_Start: boolean;
  To_Completed: boolean;
  To_Cancel: boolean;
};

//Pending
export type ConsultDocumentPendingStatusLifeCycleType = {
  To_Creating: boolean;
  To_Scheduled: boolean;
  To_Start: boolean;
  To_Completed: boolean;
  To_Cancel: boolean;
};

//Scheduled
export type ConsultDocumentScheduledStatusLifeCycleType = {
  To_Creating: boolean;
  To_Pending: boolean;
  To_Start: boolean;
  To_Completed: boolean;
  To_Cancel: boolean;
};

//Start
export type ConsultDocumentStartStatusLifeCycleType = {
  To_Creating: boolean;
  To_Pending: boolean;
  To_Scheduled: boolean;
  To_Completed: boolean;
  To_Cancel: boolean;
};

//Completed
export type ConsultDocumentCompletedStatusLifeCycleType = {
  To_Creating: boolean;
  To_Pending: boolean;
  To_Scheduled: boolean;
  To_Start: boolean;
  To_Cancel: boolean;
};

//Cancel
export type ConsultDocumentCancelStatusLifeCycleType = {
  To_Creating: boolean;
  To_Pending: boolean;
  To_Scheduled: boolean;
  To_Start: boolean;
  To_Completed: boolean;
};
