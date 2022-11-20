import styled from 'styled-components';

export const ProfileCl = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Description = styled.div`
  display: block;
  max-width: 100%;
  height: auto;
  border: 2px dashed #2a2a2a;
  border-radius: 4px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: grey;
`;

export const Location = styled(Tag)``;
