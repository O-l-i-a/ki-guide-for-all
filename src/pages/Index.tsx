import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WhyAI from "@/components/home/WhyAI";
import UserGroups from "@/components/home/UserGroups";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import Guidelines from "@/components/home/Guidelines";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyAI />
      <UserGroups />
      <FeaturedArticles />
      <Guidelines />
    </Layout>
  );
};

export default Index;
