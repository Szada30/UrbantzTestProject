/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type factorialPage = typeof import('../page_objects/factorial_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, factorialPage: factorialPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
