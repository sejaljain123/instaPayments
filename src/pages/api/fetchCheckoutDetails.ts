const API_ENDPOINT = 'https://groww-intern-assignment.vercel.app/v1/api/order-details';

export const fetchCheckoutDetails = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }
    return await response.json();
  } catch (error) {
    throw new Error(String(error));
  }
};
