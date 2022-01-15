import {
  makeLogin,
  makeSignUp /* makeSurveyList, makeSurveyResult */,
} from '@/main/factories/pages';
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters';
import { PrivateRoute } from '@/main/proxies';
import { currentAccountState } from '@/presentation/components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import React from 'react';

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter,
  };
  return (
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, state)}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={makeLogin} />
          <Route path="/signup" element={makeSignUp} />
          {/* <PrivateRoute path="/" element={makeSurveyList} />
                    <PrivateRoute path="/surveys/:id" element={makeSurveyResult} /> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
