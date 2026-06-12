export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToHash(href: string) {
  if (typeof window === "undefined") return;

  const id = href.replace(/^#/, "");
  if (!id) return;

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}
