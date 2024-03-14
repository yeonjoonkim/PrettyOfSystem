export const API = {
  Response: {
    NotFound: 'not-found',
  } as const,
  ErrorAccident: {
    Creating: 'Creating',
    Reading: 'Reading',
    Updating: 'Updating',
    Transaction: 'Transaction',
    Deleting: 'Deleting',
  } as const,
  Action: {
    Delete: 'delete',
    Create: 'create',
    Update: 'update',
    Sync: 'Sync',
  },
  TranslateStatus: {
    Create: 'create',
    Pending: 'pending',
    InProgress: 'inProgress',
    Success: 'Success',
    Completed: 'Completed',
    Failed: 'Failed',
  },
  Status: {
    Pending: 'Pending',
    Error: 'Error',
    Success: 'Success',
    Blocked: 'Blocked',
  },
  QueryMethod: {
    Get: 'Get',
    Snapshot: 'Snapshot',
    Valuechange: 'ValueChange',
  },
} as const;

export const Email = {
  Address: 'admin@pos.clinic',
  Client_ID: '560683604289-d2pn8b8vmh42thf2tpcobgj4fra8il7f.apps.googleusercontent.com',
  Client_Secret: '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',
  Refresh_Token:
    '1//04nKm5Zthfj7iCgYIARAAGAQSNwF-L9IrTLJu_n_NC3dvlhmckEHFtKUzsFFKE5FnxxStU1peWwiq_EbZxQES9-rF3NZFMnXRcf0',
  Redirect_Url: 'https://developers.google.com/oauthplayground',
} as const;
