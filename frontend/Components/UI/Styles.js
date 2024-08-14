// src/styles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const SidebarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;

  &.active {
    font-weight: bold;
    color: #45a049;
  }

  &:hover {
    color: #45a049;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f1f1f1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Box = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileSection = styled.div`
  margin-bottom: 20px;
`;

export const ProfileItem = styled.div`
  margin-bottom: 10px;
`;

export const Header = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const SubHeader = styled.h2`
  font-size: 20px;
  color: #666;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #333;
`;
