import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-circom";
import circuits = require('./circuits.config.json');
import 'dotenv/config';

process.env.BASE_PATH = __dirname;

import "./tasks/newcircuit.ts"


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks:{
  amoy: {
    url: 'https://rpc-amoy.polygon.technology',
    accounts: ["f3b1fa1db17aa0b8c03abc7733f22d2451b42b0ceec186356b52f832f325b300"]
  }
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "powersOfTau28_hez_final_12.ptau",
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
