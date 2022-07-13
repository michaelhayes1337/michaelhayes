import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Contact: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Michael Hayes</h2>
      <h4>michaelhayes.dev</h4>
      <h4>michaelhayes1337</h4>
    </section>
  );
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
