export const user = {
  firstName: "Harvinder",
  lastName: "Singh",
  company: "OpenAI",
  address: "Noida Sector 62",
  country: "India",
  state: "Uttar Pradesh",
  city: "Noida",
  zipcode: "201301",
  mobile: "9876543210",
  password: "Password@123",
};

function generateUser(){
    return{
        ...user,
        email: `harry${Date.now()}@gmail.com`,
    };
}

module.exports = { user, generateUser };