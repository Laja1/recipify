import { imagesLink } from "../../assets/react-assets";
import { Button, Navbar } from "../../components/shared";

const recipies = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1635051338493-7a6e27c42137?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    recipeName: "Savory Herb-Infused Chicken",
    recipeDescription:
      "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1635051338493-7a6e27c42137?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    recipeName: "Lemon Garlic Grilled Chicken",
    recipeDescription:
      "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1635051338493-7a6e27c42137?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    recipeName: "Lemon Garlic Grilled Chicken",
    recipeDescription:
      "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1635051338493-7a6e27c42137?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    recipeName: "Lemon Garlic Grilled Chicken",
    recipeDescription:
      "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe",
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen text-black w-full">
      <div className=" w-full z-10">
        <Navbar />
      </div>

      <div className=" rounded-xl items-center pt-10 px-5 justify-center flex inset-0">
        <img
          src={imagesLink.background}
          alt="Background"
          className=" rounded-xl bg-black bg-opacity-20"
        />
        <div className="absolute text-white  flex flex-col text-center gap-3 pt-10    max-w-xl">
          <p className="font-extrabold text-xl lg:text-4xl">
            Unleash Culinary Excellence
          </p>
          <p className="text-xs lg:text-base leading-relaxed">
            Explore a world of flavors, discover handcrafted recipes, and let
            the aroma of our passion for cooking fill your kitchen
          </p>

          <div className="">
            <Button label="EXPLORE RECIPES" />
          </div>
        </div>
      </div>

      <div className="items-center flex  flex-col pt-10 justify-center w-full">
        <div className="bg-[#EE6352] rounded-xl">
          <p className="text-xs text-white p-2">recipes</p>
        </div>
        <p className="text-4xl font-bold">Embark on a journey</p>
        <p className="text-lg pt-2 font-thin">
          With our diverse collection of recipes we have something to satisfy
          every palate.
        </p>
        <div className="flex flex-wrap items-center justify-center flex-row gap-10 pt-10 px-10 ">
          {recipies.map((recipe) => (
            <div className="rounded-xl shadow-md max-w-sm">
              <img src={recipe.imageUrl} className="rounded-xl" />
              <div className="p-5">
                <p className="text-2xl font-bold">
                  Savory Herb-Infused Chicken
                </p>
                <p className="text-sm">
                  Indulge in the rich and savory symphony of flavors with our
                  Savory Herb-Infused Chicken
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
