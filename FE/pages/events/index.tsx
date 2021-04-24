import { Layout } from "components/layouts/layout";
import { Event } from "components/events/event";

const EventPage = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Event />
      </Layout>
    </>
  )
}

EventPage.getInitialProps = async ({ req }: { req: any }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default EventPage; 
