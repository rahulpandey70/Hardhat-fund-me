const { assert } = require("chai")
const { getNamedAccounts, deployments, ethers } = require("hardhat")

describe("FundMe", () => {
    let fundMe
    let mockV3Aggregator
    beforeEach(async () => {
        const { deployer } = await getNamedAccounts()
        await deployments.fixture(["all"])

        fundMe = await ethers.getContract("FundMe", deployer)
        mockV3Aggregator = await ethers.getContract(
            "MockV3Aggregator",
            deployer
        )
    })

    describe("constructor", () => {
        it("Sets the aggregator Address", async () => {
            const response = await fundMe.priceFeed()
            assert.equal(response, mockV3Aggregator.address)
        })
    })
})
