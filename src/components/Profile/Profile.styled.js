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
  border: 2px #2a2a2a;
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
  color: #5b5b5b;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
  color: grey;
`;

export const Location = styled(Tag)`
  margin-bottom: 0;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #2a2a2a;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #c3e1d6;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  gap: 8px;
  padding: 15px 15px;
  &:not(:last-child) {
    border-right: 1px solid #2a2a2a;
  }
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #5b5b5b;
`;
export const Label = styled.span`
  font-weight: 400;
  color: grey;
`;
