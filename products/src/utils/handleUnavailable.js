export const handleUnavailable = async (callback, text) => {
  callback("Em breve...");
  await setTimeout(() => callback(text), 2000);
};
