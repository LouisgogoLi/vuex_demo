import { directiveFocus } from "./focus.js";

export function fnToDoDirective(app) {
  directiveFocus(app); //v-focus
  return {
    app,
  };
}
