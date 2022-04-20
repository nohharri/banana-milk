import Header from "../../../components/Header";
import Layout from "../../../components/Layout";

const Restaurant = () => {
    return (
        <Layout>
            <div>Restaurant</div>
        </Layout>
    )
}

export default Restaurant;

export function getStaticProps() {  
    return { props: { test: 'test' } };
}
  
export const getStaticPaths = async () => {
    const paths = [
        { params: { restaurantId: 'pelicana-chicken' } },
    ];
    return {
      paths,
      fallback: false,
    };
};
  