import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { MakeLogin, MakeSignUp } from '@/main/factories/pages';
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters';
/* import { PrivateRoute } from '@/main/proxies'; */
import { currentAccountState } from '@/presentation/components';
import App from '@/App';

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter,
  };
  return (
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, state)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<MakeLogin />} />
          <Route path="/signup" element={<MakeSignUp />} />
          {/* <PrivateRoute path="/" element={makeSurveyList} />
                    <PrivateRoute path="/surveys/:id" element={makeSurveyResult} /> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
