import CarsPage from "../components/templates/CarsPage";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import carsData from "../data/carsData";
import AllButton from "@/components/module/AllButton";

export default function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <>
     <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars}/>
    </>
  );
}
