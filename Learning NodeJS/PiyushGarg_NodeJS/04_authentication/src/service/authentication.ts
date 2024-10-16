type User = {
  name: string;
  email: string;
  password: string;
};
const sessionIdToUserMap = new Map<string, User>();

export const setUser = (sessionId: string, user: User) => {
  sessionIdToUserMap.set(sessionId, user);
};

export const getUser = (sessionId: string) => {
  return sessionIdToUserMap.get(sessionId);
};
