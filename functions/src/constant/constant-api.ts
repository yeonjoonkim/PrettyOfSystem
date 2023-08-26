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
} as const;
