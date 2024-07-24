import { JSX } from 'react';
import styled from 'styled-components';
import './Card.css';
import SmallCard from '../SmallCard/SmallCard';

const CardImage = styled.div<{ image_url: string }>`
  position: relative;
  width: 100%;
  height: 444px;

  top: 0;
  left: 0;

  background: ${({ image_url }) => `url(${image_url})`} no-repeat center center;
  background-size: cover;
  z-index: 0;
  transition: all 0.45s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 35px 14px rgba(13, 13, 13, 0.04);
  }

  @media (max-width: 720px) {
    height: 400px;
  }

  @media (hover: none), (pointer: coarse) {
    transition: none;

    &:hover,
    &:focus {
      box-shadow: none;
      transition: none;
    }

    &:active {
      box-shadow: 0 2px 35px 14px rgba(13, 13, 13, 0.04);
    }
  }
`;

interface CardProps {
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  image_url: string;
}

function Card({
  title,
  artist_title,
  is_public_domain,
  image_url,
}: CardProps): JSX.Element {
  return (
    <div className="card card--primary">
      <CardImage image_url={image_url} />
      <SmallCard
        title={title}
        artist_title={artist_title}
        is_public_domain={is_public_domain}
      >
        <></>
      </SmallCard>
    </div>
  );
}

export default Card;
