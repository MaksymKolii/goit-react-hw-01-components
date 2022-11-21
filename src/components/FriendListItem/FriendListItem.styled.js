import styled from 'styled-components';

export const FriendListItemClass = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  padding: 15px;
  height: 75px;
  cursor: pointer;
  background-color: #fff;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOn }) => (isOn ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 26px;
  font-weight: 500;
`;
export const Avatar = styled.img`
  height: 48px;
  width: 48px;
  display: inline-flex;
`;
