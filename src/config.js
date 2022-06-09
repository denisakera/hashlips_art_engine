const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Crypto Pintxos Collection";
const description = "First Edible NFT Pintxos";
const baseUri = "ipfs://NewUriToReplace"; // "ipfs://NewUriToReplace"

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "Breads" },
      { name: "Spreads" },
      { name: "SaladLeaves" },
      { name: "Eggs" },
      { name: "Oil" },
    ],
  },
  {
    growEditionSizeTo: 160,
    layersOrder: [
      { name: "Breads" },
      { name: "Spreads" },
      { name: "CookedMeats" },
      { name: "Pickles" },
      { name: "Herbs" },
    ],
  },
  {
    growEditionSizeTo: 240,
    layersOrder: [
      { name: "Breads" },
      { name: "Tomato" },
      { name: "Cheeses" },
      { name: "CookedMeats" },
      { name: "Pickles" },
    ],
  },
  {
    growEditionSizeTo: 320,
    layersOrder: [
      { name: "Breads" },
      { name: "Tomato" },
      { name: "ColdCuts" },
      { name: "SaladLeaves" },
      { name: "NutsSeeds" },
    ],
  },
  {
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "Breads" },
      { name: "Spreads" },
      { name: "ColdCuts" },
      { name: "SaladLeaves" },      
      { name: "Oil" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 834,
  height: 834,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "70%",
  static: true,
  default: [
  "#83fec6",
  "#83f8fe",
  "#83b1fe",
  "#98fe83",
  "#83feb4",
  "#83d1fe",
  "#fe83aa",
  "#cc83fe",  
  "#fe83bb",        
  "#83c9fe"
  ],
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
