interface Shop {
    id: string;
    name: string;
    distance: string;
    image: any;
    rating: number;
}

type ShopItemType = {
    id: string;
    name: string;
    type: string;
    price: string;
    image: any; 
  };
  
  type TouchableProps = {
    title: string;
    height?: number;
    width?: number;
    fontSize?: number;
    borderRadius?: number;
    onPress?: () => void;
};

type CartItem = {
  id: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
  image: any; 
};

type BottomTabParamList = {
  Home: { screen?: string };
  FavouriteLoc: { screen?: string };
  Shop: { screen?: string };
  Cart: { screen?: string };
  Account: { screen?: string };
};

