type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  lore: string;
  spells: [
    {
      id: string;
      name: string;
      description: string;
      tooltip: string;
      leveltip: {
        label: string[];
        effect: string[];
      };
      maxrank: number;
      cooldown: number[];
      cooldownBurn: string;
      cost: number[];
      costBurn: string;
      datavalues: null;
      effect: (number[] | null)[];
      effectBurn: (string | null)[];
      vars: [];
      costType: string;
      maxammo: string;
      range: number[];
      rangeBurn: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      resource: string;
    },
    {
      id: string;
      name: string;
      description: string;
      tooltip: string;
      leveltip: {
        label: string[];
        effect: string[];
      };
      maxrank: number;
      cooldown: number[];
      cooldownBurn: string;
      cost: number[];
      costBurn: string;
      datavalues: null;
      effect: (number[] | null)[];
      effectBurn: (string | null)[];
      vars: [];
      costType: string;
      maxammo: string;
      range: number[];
      rangeBurn: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      resource: string;
    },
    {
      id: string;
      name: string;
      description: string;
      tooltip: string;
      leveltip: {
        label: string[];
        effect: string[];
      };
      maxrank: number;
      cooldown: number[];
      cooldownBurn: string;
      cost: number[];
      costBurn: string;
      datavalues: null;
      effect: (number[] | null)[];
      effectBurn: (string | null)[];
      vars: [];
      costType: string;
      maxammo: string;
      range: number[];
      rangeBurn: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      resource: string;
    },
    {
      id: string;
      name: string;
      description: string;
      tooltip: string;
      leveltip: {
        label: string[];
        effect: string[];
      };
      maxrank: number;
      cooldown: number[];
      cooldownBurn: string;
      cost: number[];
      costBurn: string;
      datavalues: null;
      effect: (number[] | null)[];
      effectBurn: (string | null)[];
      vars: [];
      costType: string;
      maxammo: string;
      range: number[];
      rangeBurn: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      resource: string;
    }
  ];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
};

export default ChampionDetail;
