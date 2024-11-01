import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export default async component => {
  // 인터페이스 할당
  const user = userEvent.setup();

  return {
    user,
    ...render(component),
  };
};
