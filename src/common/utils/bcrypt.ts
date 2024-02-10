import bcrypt from "bcrypt";
const saltRounds = 10;

export const hashString = async (myPlaintextPassword: string) => {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  return hash;
};
export const compareStringHash = async (
  myPlaintextPassword: string,
  hash: string
) => {
  console.log(myPlaintextPassword,hash);
  const compare = await bcrypt.compare(myPlaintextPassword, hash);
  return compare;
};
