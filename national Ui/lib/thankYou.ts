export function sanitizeReturnTo(value?: string | null) {
  const fallback = "/";
  const nextPath = value?.trim();

  if (!nextPath) return fallback;
  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) return fallback;
  if (nextPath.includes("\\") || nextPath.toLowerCase().startsWith("/thank-you")) {
    return fallback;
  }

  return nextPath;
}

export function getCurrentReturnPath() {
  if (typeof window === "undefined") return "/";

  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function getThankYouUrl(type = "enquiry", returnTo = getCurrentReturnPath()) {
  const params = new URLSearchParams({
    returnTo: sanitizeReturnTo(returnTo),
    type,
  });

  return `/thank-you?${params.toString()}`;
}
