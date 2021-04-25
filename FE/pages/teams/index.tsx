import { Layout } from "components/layouts/layout";
import { Teams } from "components/teams/teams";

const TeamPage = (): JSX.Element => {
  return (
    <Layout>
      <Teams />
    </Layout>
  );
};

TeamPage.getInitialProps = async ({ req }: { req: any }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default TeamPage; 
