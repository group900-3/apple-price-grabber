export const loadContents = (url: string) => fetch(url).then((r) => r.text());
