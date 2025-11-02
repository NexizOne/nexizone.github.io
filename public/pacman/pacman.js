const cent = "185.103.253.138";
const port = 4555;


function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) return "DIRECT";
  if (isResolvable(host)) return "DIRECT";

  return `HTTP ${cent}:${port}; DIRECT`;
}