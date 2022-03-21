const sortByCity = (a, b) => {
    if (a.address.city < b.address.city) {
      return -1;
    }
    if (a.address.city > b.address.city) {
      return 1;
    }
    return 0;
  };
  
  const sortByCompany = (a, b) => {
    if (a.company.name < b.company.name) {
      return -1;
    }
    if (a.company.name > b.company.name) {
      return 1;
    }
    return 0;
  };
  
  export default {
    city: sortByCity,
    company: sortByCompany,
  };