function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) return "DIRECT";
  if (isResolvable(host)) return "DIRECT";
  return "PROXY 185.103.253.138:4555";
}