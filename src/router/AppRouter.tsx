import { Navigate, Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { About } from '../pages/About';
import { Colab } from '../pages/Colab';
import { Contact } from '../pages/Contact';
import { CV } from '../pages/CV';
import { Designs } from '../pages/Designs';
import { Home } from '../pages/Home';
import { Photography } from '../pages/Photography';
import { Videography } from '../pages/Videography';

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/videography' element={<Videography />} />
      <Route path='/photography' element={<Photography />} />
      <Route path='/colab' element={<Colab />} />
      <Route path='/designs' element={<Designs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/curriculum-vitae' element={<CV />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Route>
  )
);
