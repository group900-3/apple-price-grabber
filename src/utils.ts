import pRetry, { AbortError } from "p-retry";

export const loadContents = (url: string) => {
  const func = async () => {
    const res = await fetch(url);
    if (res.status === 404) throw new AbortError(res.statusText);
    return res.text();
  };
  return pRetry(func, { retries: 2 });
};
