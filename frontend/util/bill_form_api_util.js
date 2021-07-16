

export const createBill = (bills) => (
    $.ajax({
        url: '/api/bills',
        method: 'POST',
        data: {bills}
    })
);

export const fetchBills = () => (
    $.ajax({
        url: '/api/bills',
        method: 'GET',
    })
);
  
  
export const settleBill = bills => (
    $.ajax({
        url:'/api/bills',
        method: 'PUT',
        data: {bills}
    })
);
