import React, { useReducer } from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './LikesList.style';

const getAllLikes = () => {
  const likes = [];
  for (const [key, value] of Object.entries(localStorage)) {
    if (!Number.isSafeInteger(Number(key))) continue;
    likes.push(JSON.parse(value));
  }
  return likes;
};

const LikesList = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const likes = getAllLikes();

  const onClickRemove = e => {
    const { id } = e.target.dataset;
    localStorage.removeItem(id);
    forceUpdate();
  };

  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Title>Favorite Movies</S.Title>
          <S.ItemList>
            {likes.length ? (
              likes.map(like => (
                <S.Item key={like.id}>
                  <S.ItemLink to={`/detail/${like.id}`}>
                    <img src={like.posterPath} alt="Poster" />
                    <S.MovieTitle>{like.title}</S.MovieTitle>
                  </S.ItemLink>
                  <S.RemoveButton
                    data-id={like.id}
                    onClick={onClickRemove}
                    type="button"
                  >
                    Dislike
                  </S.RemoveButton>
                </S.Item>
              ))
            ) : (
              <p>There are no favorite movies.</p>
            )}
          </S.ItemList>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default LikesList;
