interface Shop {
    id: string;
    name: string;
    distance: string;
    image: any;
    rating: number;
}

type ShopItemType = {
  id: string;
  shopId: string;
  name: string;
  description: string | null;
  type: string;
  price: string;
  image: string;
  favourite: boolean;
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

type Category = 'All' | 'Special Offers' | 'Coffee' | 'Tea' | 'Cookie';


type RouteParams = {
  shopId: string;
  image: string;
  name: string;
  description: string | null;
  price: string;
  favourite: boolean;
};
