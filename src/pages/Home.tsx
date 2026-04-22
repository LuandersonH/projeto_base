import Landing from "./extrajudicial-probate";
import { GlobalContainer } from "./globalContainer";

export default function Home() {
  return (
    <GlobalContainer className="flex flex-col items-center justify-center">
      <Landing />
    </GlobalContainer>
  );
}
