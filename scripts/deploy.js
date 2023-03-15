const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('NFTGallery');
  const gameContract = await gameContractFactory.deploy(                     
    ["asset1", "asset2", "asset3"],       
    ["https://i.pinimg.com/originals/8d/62/4b/8d624bc47d1d7768b9be44adbb62cbe0.jpg", 
    "https://besthqwallpapers.com/Uploads/2-9-2021/177635/thumb2-kung-jin-4k-red-neon-lights-mortal-kombat-mobile-fighting-games.jpg", 
    "https://c4.wallpaperflare.com/wallpaper/390/582/340/green-outfit-jade-mortal-kombat-mortal-kombat-mk11-evil-hd-wallpaper-preview.jpg"],
    [100, 200, 300],                    
    [100, 50, 25]                       
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  
  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();