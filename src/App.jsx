import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Auth from './pages/Auth';

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/auth" element={<Auth />} />

            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/cadastro" element={<ProtectedRoute><Cadastro /></ProtectedRoute>} />
            <Route path="/listagem" element={<ProtectedRoute><Listagem /></ProtectedRoute>} />

            <Route path="*" element={<Navigate to="/auth" replace />} />
          </Routes>
        </Router>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;