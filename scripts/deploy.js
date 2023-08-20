async function main() {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address);

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", accountBalance.toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  const tokenAddress = await token.getAddress();

  console.log("Token address:", tokenAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
