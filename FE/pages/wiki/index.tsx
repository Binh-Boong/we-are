import { Layout } from "components/layouts/layout";
import { Wiki } from "components/wikis/wiki";

const WIKIPage = (): JSX.Element => {
  return (
    <Layout>
      <Wiki />
    </Layout>
  );
};

WIKIPage.getInitialProps = async ({ req }: { req: any }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default WIKIPage; 
