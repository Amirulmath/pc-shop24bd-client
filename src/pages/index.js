import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-green-600">Home Page</h1>
      <Button type="primary">Pc Component</Button>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
