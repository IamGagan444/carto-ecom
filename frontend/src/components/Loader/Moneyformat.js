export const Moneyformat = (amount) => {
  const formattedAmount = new Intl.NumberFormat("hi-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
 
  return formattedAmount;
};
