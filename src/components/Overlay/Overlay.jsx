import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close } from 'store/modules/overlay';
import * as S from './Overlay.style';

const Overlay = () => {
  const { isOpen } = useSelector(state => state.overlay);
  const dispatch = useDispatch();

  const onClickLink = () => {
    dispatch(close());
  };

  return (
    <S.Overlay data-testid="overlay" open={isOpen}>
      <S.UL>
        <S.LI>
          <Link to="/around" data-testid="around-link" onClick={onClickLink}>
            Around
          </Link>
        </S.LI>
        <S.LI>
          <Link to="/likes" data-testid="likes-link" onClick={onClickLink}>
            Likes
          </Link>
        </S.LI>
        <S.LI>
          <Link to="/about" data-testid="about-link" onClick={onClickLink}>
            About
          </Link>
        </S.LI>
      </S.UL>
    </S.Overlay>
  );
};

export default Overlay;
