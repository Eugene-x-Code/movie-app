import React from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocationDisplay from 'utils/locationDisplay';
import Overlay from 'components/Overlay/Overlay';
import * as S from './Header.style';
import OverlayButton from './OverlayButton/OverlayButton';

const Header = ({ color, bgColor, isSearching }) => {
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const { isOpen } = useSelector(state => state.overlay);
  const history = useHistory();

  const onClickSearchCancel = () => {
    history.goBack();
  };

  return (
    <>
      <S.Header bgColor={bgColor}>
        <Wrapper>
          <S.Container isOpen={isOpen} color={color}>
            <S.LogoLinkContainer isOpen={isOpen}>
              <Link to="/" data-testid="logo-button">
                Filmoteka
              </Link>
            </S.LogoLinkContainer>
            <S.MenuContainer>
              {!isSearching ? (
                <S.SearchLinkContainer isOpen={isOpen}>
                  <Link to="/search" data-testid="search-button">
                    <S.SearchIcon />
                  </Link>
                </S.SearchLinkContainer>
              ) : (
                <S.SearchCancel onClick={onClickSearchCancel} type="button">
                  Cancel Search
                </S.SearchCancel>
              )}
              {isTabletPortrait ? (
                <S.UL>
                  <S.LI>
                    <Link to="/around">Around</Link>
                  </S.LI>
                  <S.LI>
                    <Link to="/likes">Likes</Link>
                  </S.LI>
                </S.UL>
              ) : (
                <OverlayButton color={color} />
              )}
            </S.MenuContainer>
          </S.Container>
          <Overlay />
        </Wrapper>
      </S.Header>
      <LocationDisplay />
    </>
  );
};

Header.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
  isSearching: false,
};

Header.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  isSearching: PropTypes.bool,
};

export default Header;
