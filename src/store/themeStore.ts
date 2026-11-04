let isWhiteTheme = false;

export function applyTheme() {
  document.body.classList.toggle("white", isWhiteTheme);
}

export function toggleTheme() {
  isWhiteTheme = !isWhiteTheme;
  applyTheme();
}
