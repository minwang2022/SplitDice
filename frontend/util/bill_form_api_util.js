

export const createBill = (bills) => (
    $.ajax({
        url: '/api/bills',
        method: 'POST',
        data: {bills}
    })
);

export const fetchBills = bills => (
    $.ajax({
            url: '/api/bills/getBills',
        method: 'GET'
    })
);
  
  
export const settleBill = bills => (
    $.ajax({
        url:'/api/bills',
        method: 'PUT',
        data: {bills}
    })
);
