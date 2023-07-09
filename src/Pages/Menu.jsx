import { Card } from "../Components/Card";
import menuData from "../menuData";

const Menu = () => {
  return (
    <>
        <h1 className="text-center text-orange-400 font-bold my-4">Menu</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-12"> 
      {
        menuData.map((item) => 
          <Card key={item.id} menuData={item}/>
        )}
        </div>
        
    </>
  );
};
export default Menu;
