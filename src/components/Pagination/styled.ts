import styled from 'styled-components';
import arrowRight from '../../assets/arrow-right.svg';

export const PaginationWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-self: end;
`;

export const PageButton = styled.button<{ active: boolean }>`
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? 'var(--primary)' : 'rgba(255, 255, 255, 0)'};
  color: ${({ active }) => (active ? 'var(--white)' : 'var(--black)')};
  cursor: pointer;

  font-style: normal;
  font-weight: ${({ active }) => (active ? '600' : '300')};
  font-size: 18px;
  line-height: ${({ active }) => (active ? '23px' : '24px')};

  transition: all 0.45s ease-in-out;
`;

export const ArrowButton = styled.div<{ direction: 'left' | 'right' }>`
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background-image: url(${arrowRight});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    rotate: ${({ direction }) => (direction === 'left' ? '180deg' : '0deg')};

    position: absolute;
  }
`;
