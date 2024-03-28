const validateCardNumber = (value: string) => {
    const cardNumberPattern = /^[0-9]{16}$/;
    return cardNumberPattern.test(value);
  };
  
  const validateExpiry = (value: string) => {
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return expiryPattern.test(value);
  };
  
  const validateVPA = (value: string) => {
    const vpaPattern = /^[a-zA-Z0-9.-]{4,20}@[a-zA-Z0-9.-]{2,}$/
    return vpaPattern.test(value);
  };

  const validateCardHolderName = (value: string) => {
    const cardHolderNamePattern = /^([A-Za-z]{3, })\s([A-Za-z]{3, })$/
    return cardHolderNamePattern.test(value);
  }
  
const validateInput = (type: string, value: string) => {
    switch (type) {
      case 'shipping address':
            return value.length > 10;
      case 'card name':
        return value.length > 3;
      case 'card number':
        console.log(value, "value");
        return validateCardNumber(value);
      case 'expiry':
        return validateExpiry(value);
      case 'VPA':
        return validateVPA(value);
      case 'cvv':
        return value.length === 3;
      case 'coupon':
        return value.length > 3;
      default:
        return false; // Invalid type
    }
  };
  
  export default validateInput;
  