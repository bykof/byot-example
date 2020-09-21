import Head from "next/head";
import { useQuery } from "react-query";
import { getEvents } from "../client";
import Event from "../components/Event";

const mainStyle = {
  padding: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
};

export default function Home() {
  const { isLoading, isError, data: events, error } = useQuery(
    "events",
    getEvents
  );
  const loadingBar = isLoading && <div>Loading...</div>;
  const errorBar = isError && <div>{error.toString()}</div>;
  return (
    <div>
      <Head>
        <title>Events Dashboard</title>
      </Head>
      <main style={mainStyle}>
        {loadingBar}
        {errorBar}
        {events &&
          events.map((event) => (
            <Event
              key={event.id}
              name={event.name}
              description={event.description}
              start={event.start}
              end={event.end}
            />
          ))}
      </main>
    </div>
  );
}
