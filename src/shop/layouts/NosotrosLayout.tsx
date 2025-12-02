import { CustomHeader } from '../components/CustomHeader';
import { CustomFooter } from '../components/CustomFooter';
import { Nosotros } from '../pages/home/Nosotros';

export const NosotrosLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomHeader />

      <Nosotros/>

      <CustomFooter />
    </div>
  );
};
