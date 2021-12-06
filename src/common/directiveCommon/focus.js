export function directiveFocus(app) {
  app.directive("focus", {
    mounted(el) {
      el.focus();
    },
  });
  return {
    app,
  };
}
