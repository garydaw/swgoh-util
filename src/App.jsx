import {Routes, Route} from "react-router-dom";
import {LoginPage} from "./pages/Login";
import Units from "./pages/Units";
import Ships from "./pages/Ships";

import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./hooks/useAuth";

function App() {
return (
  <AuthProvider>
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />


      <Route path="/" element={<ProtectedLayout />}>
        <Route path="units" element={<Units />} />
        <Route path="Ships" element={<Ships />} />
      </Route>
    </Routes>
  </AuthProvider>
);

}
  

export default App;