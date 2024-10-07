type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// Gold 타입 정의
type Gold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

// Maps 타입 정의
type Maps = {
  "11": boolean;
  "12": boolean;
  "21": boolean;
  "22": boolean;
  "30": boolean;
  "33": boolean;
};

// Stats 타입 정의
type Stats = {
  FlatMovementSpeedMod: number;
};

// 최종 Item 타입 정의
type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[]; // 진화 가능한 아이템 리스트
  image: ItemImage; // 이미지 관련 정보
  gold: Gold; // 아이템 가격 정보
  tags: string[]; // 아이템 태그
  maps: Maps; // 맵 정보
  stats: Stats; // 아이템의 스탯 정보
};

export default Item;
