import { User } from '@prisma/client';

type UserProperties = keyof User;

export const UserSerializer = (...properties: UserProperties[]) => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const method = descriptor.value;

    descriptor.value = async function (...args: any) {
      const user = await method.apply(this, args);

      for (let i = 0; i < properties.length; i++) {
        user[properties[i]] = undefined;
      }

      return user;
    };
  };
};
