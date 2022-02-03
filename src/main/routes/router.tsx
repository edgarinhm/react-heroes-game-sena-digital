import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

import { MakeHome, MakeLogin, MakeSignUp } from '@/main/factories/pages';
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters';
import { PrivateRoute } from '@/main/proxies';
import { currentAccountState } from '@/presentation/components';
import '@/main/config/i18n';

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter,
  };
  return (
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, state)}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/login" element={<MakeLogin />} />
            <Route path="/signup" element={<MakeSignUp />} />
            <PrivateRoute path="/" element={<MakeHome />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
