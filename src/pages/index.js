import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import { Button } from "antd";

const HomePage = ({ allProducts }) => {
  return (
    <div>
      <h1 className="text-green-600">Home Page</h1>
      <Button type="primary">Pc Component</Button>
      <AllProducts allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("http://localhost:5000/products"); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};
