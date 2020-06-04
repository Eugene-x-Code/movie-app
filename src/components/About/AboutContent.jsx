import React from 'react';
import { Wrapper } from 'styles/variables';
import logo from 'images/tmdb.png';
import * as S from './AboutContent.style';

const AboutContent = () => {
  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Logo src={logo} alt="" />
          <S.Intro>.</S.Intro>
          <S.Intro>.</S.Intro>
          <S.ViewCode
            href="https://github.com/Eugene-x-Code?tab=repositories"
            target="_blank"
          >
            <S.Github />.
          </S.ViewCode>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default AboutContent;
