import MainNavigation from "@/app/_components/modules/Home/MainNavigation";
import TodaysProducts from "@/app/_components/modules/Home/TodaysProducts";

export default async function Index() {
  return (
    <>
      <MainNavigation />
      <TodaysProducts />
    </>
  );
}
