export function caseNumber(length) {
  const randomNumLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const result = "";

  for (const i = 0; i < 5; i++) {
    result += randomNumLet.charAt(Math.floor(Math.random() * randomNumLet.length));
  }

  return result;
}
