// Function to store data with expiry in localStorage
const setCacheWithExpiry = (key:string, data:any , expirationMinutes:number) => {
    const now = new Date();
    const expirationTime = now.getTime() + expirationMinutes * 60 * 1000; // Convert minutes to milliseconds
    const item = {
      data: data,
      expires: expirationTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };
  
  // Function to retrieve data from cache, checking expiration
  const getCacheWithExpiry = (key:string) => {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
      return null;
    }
    const item = JSON.parse(itemString);
    const now = new Date();
    if (now.getTime() > item.expires) {
      localStorage.removeItem(key); // Remove expired data from cache
      return null;
    }
    return item.data;
  };
  

  export { setCacheWithExpiry, getCacheWithExpiry };