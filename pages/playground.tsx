import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import TestThree from '../components/scenes/test/root/TestThree';
import { NextPageWithLayout } from './page';
const Contact: NextPageWithLayout = () => {
  return <TestThree />;
};

export default Contact;

Contact.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
