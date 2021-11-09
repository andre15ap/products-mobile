import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IUser {
  name: string;
  token: string;
}

export const getStorageUser = async () => {
  const userStorage = await AsyncStorage.getItem('@user');
  if (userStorage != null) {
    const userObj: IUser = await JSON.parse(userStorage);
    return userObj;
  }
  return null;
};

export const setStorageUser = async (user: IUser) => {
  await AsyncStorage.setItem('@user', JSON.stringify(user));
};
