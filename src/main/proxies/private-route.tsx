import { currentAccountState } from '@/presentation/components';

import { RouteProps, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import React from 'react';

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState);
  return getCurrentAccount()?.accessToken ? (
    <Route {...props} />
  ) : (
    <Route {...props} element={<Navigate to="/login" />} />
  );
};

export default PrivateRoute;
