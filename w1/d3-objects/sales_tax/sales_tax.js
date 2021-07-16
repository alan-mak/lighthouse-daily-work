const calculateSalesTax = function(salesData, taxRates) {
  // Implement your code here
  let sum = sumPerProvince(salesData); 
  let tax = taxPerProvince(sum, salesTaxRates);

  return tax;
};

let sumPerProvince = function(salesData) {
  let companies = [];
  for(let company of salesData) {
    let info = {};
    let allSalesProv = 0;
    for(let dollar of company.sales) {
      allSalesProv += dollar;
    }
    info = {
      name: company.name,
      province: company.province,
      sum: allSalesProv
    }
    companies.push(info);
  }
  return companies  
};

let taxPerProvince = function(sumData, salesTaxRates) {
  let companies = [];
  for(let company of sumData) {
    let province = company.province;
    let salesTax = salesTaxRates[province] * company.sum;
    for(let i = 0; i < 1; i++) {
      if((companies[i]) && (companies[i].name === company.name)) {
        companies[i].totalSales += company.sum;
        companies[i].totalTaxes += salesTax;
      } else {
        companies.push({
          name: company.name,
          totalSales: company.sum,
          totalTaxes: salesTax
        })
      }
    }
  }
  return companies;
};

// TEST CASES
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates));