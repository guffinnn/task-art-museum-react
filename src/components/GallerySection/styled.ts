import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;

  margin: 120px auto;

  row-gap: 40px;
`;

export const SectionTextFrame = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 0;
`;

export const Title = styled.h2`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  color: var(--black);
`;

export const Subtitle = styled.h3`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--primary-lighter);
`;
