export const head_title = (pathname: string): string | undefined => {
  switch (pathname) {
    case '/':
      return ' | Home';
    case '/write':
      return ' | Write';
    case '/[uid]':
      return ' | Article';
    default:
      return ' | ';
  }
};
