// power of three dots ...
  // তিন টা array কে একটা array তে নিয়ে আসা
  const ages  = [12, 15, 17,14];
  const ages2 = [15, 16, 18];
  const ages3 = [25, 22, 23];
 
  const allAges = [...ages, ...ages2, ...ages3];
  //console.log(allAges);



  // আরেকটা পাওয়ার
  const business = 650;
  const minister = 450;
  const sochib = 500;
  const maximum = Math.max(business ,minister , sochib);
  //console.log(maximum);

  //কিন্তু যদি একটা array এর মধ্যে তিন টা value compare করি
  const takaPoisa = [650, 450, 500];
  const highest = Math.max(...takaPoisa);
  console.log(highest);

