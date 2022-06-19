import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const { getSigners } = ethers;

describe("TestGeohash", function () {
  let geohash: Contract;
  let owner: SignerWithAddress;

  const name = "Geohash";
  const symbol = "GEO";

  beforeEach(async () => {
    [owner] = await getSigners();
    const tokenFactory: ContractFactory = await ethers.getContractFactory(
      "Geohash"
    );
    geohash = await tokenFactory.deploy(name, symbol, owner.address);
  });

  describe("constructor()", () => {
    it("should init name and symbol", async () => {
      await expect(await geohash.name()).to.equal(name);
      await expect(await geohash.symbol()).to.equal(symbol);
    });
  });

  describe("totalSupply()", () => {
    it("should have 32 genesis geohash after init", async () => {
      await expect(await geohash.totalSupply()).to.equal(32);
    });
  });

  describe("tokenByIndex()", () => {
    it("geohash id should be keccak256(id)", async () => {
      await expect(await geohash.tokenByIndex(0)).equal(
        "1937035142596246788172577232054709726386880441279550832067530347910661804397"
      );
    });
  });

  describe("tokenByURI()", () => {
    it("geohash tokenURI to tokenId", async () => {
      await expect(await geohash.tokenByURI("0")).to.equal(
        "1937035142596246788172577232054709726386880441279550832067530347910661804397"
      );
    });
    it("geohash tokenURI don't contain a, i, l, o", async () => {
      await expect(geohash.tokenByURI("a")).to.be.revertedWith(
        "Geohash: URI nonexistent token"
      );
    });
  });
});
