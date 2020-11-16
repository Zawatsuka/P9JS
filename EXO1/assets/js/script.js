new Cleave('.name', {
    blocks: [11],
})
new Cleave('.firstname', {
    blocks: [11],
})
new Cleave('.phone', {
    prefix : "+33",
    blocks: [3,2, 2, 2, 2, 2],
    delimiter: '.',
})
new Cleave('.date', {
    date: true,
    datePattern: ['d','m','Y'],
    dateMin: '2000-01-01',
    dateMax: '2099-12-31',
});
new Cleave('.cb', {
    creditCard: true
});