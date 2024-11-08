import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

beforeEach(() => {});

it('className prop으로 설정한 css class가 정상 적용되는지 확인.', async () => {
  await render(<TextField className={'my-class'} />);
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});

describe('placeholder test', () => {
  it('placeholder Porp에 따라 placeholder가 변경 노출된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해 주세요." />);

    const inputText = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(inputText).toBeInTheDocument();
  });

  it('placeholder Porp에 따라 placeholder가 변경 노출된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해 주세요." />);

    const inputText = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(inputText).toBeInTheDocument();
  });

  it('텍스트를 입력하면 onchange prop으로 등록한 함수가 호출된다.', async () => {
    const spy = vi.fn();
    const { user } = await render(<TextField onChange={spy} />);

    const inputText = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(inputText, 'test');
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('엔터키를 입력하면 onEnter prop으로 등록한 함수가 호출된다.', async () => {
    const spy = vi.fn();
    const { user } = await render(<TextField onEnter={spy} />);

    const inputText = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(inputText, 'test{Enter}');
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('포커스가 활성화되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
    // 포커스 활성화
    // 탭 키로 , 클릭했을때, type.fouse()직접 실행
    const spy = vi.fn();
    const { user } = await render(<TextField onFocus={spy} />);

    const inputText = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(inputText);
    expect(spy).toHaveBeenCalled();
  });

  it('포커스가 활성화되면 border style이 추가 된다.', async () => {
    const { user } = await render(<TextField />);

    const inputText = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(inputText);
    expect(inputText).toHaveStyle({
      borderWidth: '2px',
      // borderWidth: 2,
      borderColor: 'rgb(25, 118, 210)',
    });
  });
});
