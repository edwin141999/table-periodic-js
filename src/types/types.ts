export type Elements = {
  success: boolean;
  statusCode: string;
  response: string;
  data: Datum[];
};

export type Datum = {
  shells: number[];
  ionization_energies: number[];
  _id: string;
  name: string;
  appearance: null | string;
  atomic_mass: number;
  boil: number | null;
  category: Category;
  color: null | string;
  density: number | null;
  discovered_by: null | string;
  melt: number | null;
  molar_heat: number | null;
  named_by: null | string;
  number: number;
  period: number;
  phase: Phase;
  source: string;
  spectral_img: null | string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  electron_configuration: string;
  electron_affinity: number | null;
  electronegativity_pauling: number | null;
  __v: number;
};

export enum Category {
  Actinide = "actinide",
  AlkaliMetal = "alkali metal",
  AlkalineEarthMetal = "alkaline earth metal",
  DiatomicNonmetal = "diatomic nonmetal",
  Lanthanide = "lanthanide",
  Metalloid = "metalloid",
  NobleGas = "noble gas",
  PolyatomicNonmetal = "polyatomic nonmetal",
  PostTransitionMetal = "post-transition metal",
  TransitionMetal = "transition metal",
}

export enum Phase {
  Gas = "Gas",
  Liquid = "Liquid",
  Solid = "Solid",
}
