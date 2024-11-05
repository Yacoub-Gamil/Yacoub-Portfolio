import { BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster
        containerStyle={{
          top: 80,
          left: 0,
          bottom: 20,
          right: 20,
        }}
        reverseOrder={false}
      />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}
