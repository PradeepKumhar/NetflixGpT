
export const validateSignUpForm = (email, password, confirmPassword) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;


  
    if (!email) {
      return "Email is required.";
    }
  
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
  
    if (!password) {
      return "Password is required.";
    }
  
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
    }
  
    if (!confirmPassword) {
      return "Please confirm your password.";
    }
  
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
  
    return '';
  };
  